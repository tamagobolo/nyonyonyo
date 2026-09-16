import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  analyzeFiles,
  supportedPath,
  parseGitHubUrl,
  importGitHub,
  readLocalFiles,
} from '../lib/importer.ts';
import { validateAtlas } from '../lib/model.ts';
const analyze = (files: Record<string, string>) =>
  analyzeFiles(
    Object.entries(files).map(([path, content]) => ({ path, content })),
    'fixture',
  );
test('TS AST detects real imports, reexports, dynamic imports and aliases, without comment false positives', () => {
  const atlas = analyze({
    'tsconfig.json':
      '{"compilerOptions":{"baseUrl":".","paths":{"@/*":["src/*"]}}}',
    'src/app/orders/page.tsx':
      'import {x} from "@/lib/x"; // import fake from "./missing"\nexport default function Orders(){return x}',
    'src/lib/x.ts':
      'export { value } from "./value.js"; import("./lazy"); const fs = require("node:fs"); const text="import fake from nope";',
    'src/lib/value.ts': 'export const value=2',
    'src/lib/lazy.ts': 'export default 1',
  });
  assert.equal(
    atlas.nodes.find((n) => n.path === 'src/app/orders/page.tsx')?.route,
    '/orders',
  );
  assert.ok(
    atlas.edges.some(
      (e) =>
        e.source === 'file:src/app/orders/page.tsx' &&
        e.target === 'file:src/lib/x.ts',
    ),
  );
  assert.ok(atlas.edges.some((e) => e.target === 'file:src/lib/value.ts'));
  assert.ok(atlas.edges.some((e) => e.target === 'file:src/lib/lazy.ts'));
  assert.ok(atlas.edges.some((e) => e.target === 'dependency:node:fs'));
  assert.equal(atlas.edges.length, 4);
  assert.equal(atlas.edges[0].evidence?.[0].line, 1);
});
test('Terraform resources across files connect within a directory, with comments and nested blocks handled', () => {
  const atlas = analyze({
    'infra/main.tf':
      '# resource "aws_lambda_function" "fake" {}\nresource "aws_lambda_function" "api" { environment { variables = { TABLE = aws_dynamodb_table.orders.name } } }',
    'infra/db.tf': 'resource "aws_dynamodb_table" "orders" {}',
    'other/db.tf': 'resource "aws_dynamodb_table" "orders" {}',
  });
  assert.equal(atlas.nodes.length, 3);
  assert.equal(atlas.edges.length, 1);
  assert.equal(atlas.edges[0].source, 'tf:infra:aws_lambda_function.api');
  assert.equal(atlas.edges[0].target, 'tf:infra:aws_dynamodb_table.orders');
  assert.equal(
    atlas.nodes.find((n) => n.id === atlas.edges[0].target)?.kind,
    'database',
  );
});
test('Prisma handles optional, many and primary-key fields', () => {
  const atlas = analyze({
    'schema.prisma':
      'model User {\n id String @id\n orders Order[]\n}\nmodel Order {\n id Int @id\n user User?\n}',
  });
  assert.equal(atlas.nodes.length, 2);
  assert.equal(atlas.edges.length, 2);
  assert.equal(atlas.nodes[0].fields?.[0].key, 'PK');
  assert.ok(atlas.edges.some((e) => e.label === '複数を参照'));
});
test('SQL keeps decimal commas and resolves references defined in later files', () => {
  const atlas = analyze({
    'migrations/001.sql':
      'CREATE TABLE orders (id integer PRIMARY KEY, user_id integer REFERENCES users(id), total decimal(10,2));',
    'migrations/002.sql':
      'CREATE TABLE users (id integer, name text, PRIMARY KEY (id));',
  });
  assert.equal(atlas.nodes[0].fields?.length, 3);
  assert.equal(atlas.nodes[0].fields?.[2].type, 'decimal(10,2)');
  assert.equal(atlas.edges[0].target, 'sql:migrations:users');
  assert.equal(atlas.nodes[1].fields?.[0].key, 'PK');
});
test('CloudFormation JSON extracts actual Ref, GetAtt and DependsOn', () => {
  const atlas = analyze({
    'stack.json': JSON.stringify({
      Resources: {
        Api: {
          Type: 'AWS::Lambda::Function',
          DependsOn: 'DB',
          Properties: {
            Table: { Ref: 'DB' },
            Arn: { 'Fn::GetAtt': ['DB', 'Arn'] },
          },
        },
        DB: { Type: 'AWS::DynamoDB::Table' },
      },
    }),
  });
  assert.equal(atlas.nodes.length, 2);
  assert.equal(atlas.edges.length, 2);
  assert.ok(atlas.edges.every((e) => e.target === 'cfn:stack.json:DB'));
});
test('Wrangler JSONC maps entrypoint and bindings without storing secret values', () => {
  const atlas = analyze({
    'wrangler.jsonc':
      '{ // comment\n"name":"worker", "main":"src/index.ts", "vars":{"SECRET":"do-not-store"}, "d1_databases":[{"binding":"DB",}],}',
    'src/index.ts': 'export default {}',
  });
  assert.equal(atlas.nodes.length, 3);
  assert.equal(atlas.edges.length, 2);
  assert.equal(JSON.stringify(atlas).includes('do-not-store'), false);
});
test('sensitive paths, dependency directories and lockfiles are excluded', () => {
  for (const p of [
    '.env',
    '.env.local',
    'config/secrets.json',
    'infra/main.tfstate',
    'node_modules/pkg/index.js',
    'a/.git/file.py',
    'package-lock.json',
  ])
    assert.equal(supportedPath(p), false, p);
  assert.equal(supportedPath('src/app.ts'), true);
  assert.equal(supportedPath('infra/stack.json'), true);
});
test('empty and malformed inputs report errors, missing imports produce coverage warnings', () => {
  assert.throws(() => analyze({ 'a.txt': 'none' }), /見つかりません/);
  const atlas = analyze({ 'index.ts': 'import x from "./absent"' });
  assert.ok(atlas.warnings.some((w) => w.includes('解決できません')));
  assert.doesNotThrow(() => validateAtlas(atlas));
});
test('GitHub URL validation constrains network destinations', () => {
  assert.deepEqual(
    parseGitHubUrl('https://github.com/DietrichGebert/ponytail.git'),
    { owner: 'DietrichGebert', repo: 'ponytail' },
  );
  for (const url of [
    'http://github.com/a/b',
    'https://github.com.evil.test/a/b',
    'https://u:p@github.com/a/b',
    'https://github.com/a/b/tree/main',
    'https://localhost/a/b',
  ])
    assert.throws(() => parseGitHubUrl(url));
});
test('GitHub import pins raw file reads to a commit and uses public endpoints only', async () => {
  const urls: string[] = [];
  const revision = 'a'.repeat(40);
  const fetcher = (async (url: URL | RequestInfo) => {
    urls.push(String(url));
    let body: unknown;
    if (String(url).endsWith('/repos/owner/repo'))
      body = { default_branch: 'main' };
    else if (String(url).includes('/commits/')) body = { sha: revision };
    else if (String(url).includes('/git/trees/'))
      body = {
        tree: [{ path: 'index.ts', type: 'blob', mode: '100644', size: 20 }],
        truncated: false,
      };
    else return new Response('export const main=1');
    return new Response(JSON.stringify(body));
  }) as typeof fetch;
  const atlas = await importGitHub(
    'https://github.com/owner/repo',
    () => {},
    undefined,
    fetcher,
  );
  assert.equal(atlas.source.revision, revision);
  assert.equal(atlas.nodes.length, 1);
  assert.equal(
    urls.at(-1),
    `https://raw.githubusercontent.com/owner/repo/${revision}/index.ts`,
  );
});
test('GitHub rate limiting is reported without producing a partial success', async () => {
  await assert.rejects(
    () =>
      importGitHub(
        'https://github.com/owner/repo',
        () => {},
        undefined,
        (async () => new Response('', { status: 403 })) as typeof fetch,
      ),
    /利用制限/,
  );
});
test('standalone CloudFormation file import and .atlas.json roundtrip work', async () => {
  const file = new File(
    [
      JSON.stringify({
        Resources: { Test: { Type: 'AWS::Lambda::Function' } },
      }),
    ],
    'stack.json',
  );
  const atlas = await readLocalFiles([file]);
  assert.equal(atlas.nodes.length, 1);
  const exported = new File([JSON.stringify(atlas)], 'test.atlas.json');
  assert.equal(
    (await readLocalFiles([exported])).nodes[0].name,
    atlas.nodes[0].name,
  );
});
