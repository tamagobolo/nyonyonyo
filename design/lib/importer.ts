import ts from 'typescript';
import {
  type Atlas,
  type AtlasNode,
  type AtlasEdge,
  type Evidence,
  type Field,
  validateAtlas,
} from './model.ts';

export type SourceFile = { path: string; content: string };
export const LIMITS = {
  files: 450,
  fileBytes: 300_000,
  totalBytes: 12_000_000,
};
const ignored =
  /(^|\/)(node_modules|\.git|\.next|\.venv|venv|dist|build|coverage|vendor|\.terraform|\.wrangler|__pycache__)(\/|$)/;
const privateFile =
  /(^|\/)(\.env[^/]*|credentials[^/]*|secrets?[^/]*|.*\.(pem|key|tfstate)(\..*)?)$/i;
export function supportedPath(path: string) {
  return (
    !ignored.test(path) &&
    !privateFile.test(path) &&
    !/(^|\/)(package-lock|npm-shrinkwrap)\.json$/.test(path) &&
    (/\.(tsx?|jsx?|mjs|cjs|py|tf|prisma|sql|jsonc?)$/i.test(path) ||
      /(^|\/)wrangler\.toml$/i.test(path))
  );
}
export function normalizePath(path: string): string {
  const parts: string[] = [];
  for (const part of path.replaceAll('\\', '/').split('/')) {
    if (part === '..') parts.pop();
    else if (part && part !== '.') parts.push(part);
  }
  return parts.join('/');
}
const dir = (path: string) => path.split('/').slice(0, -1).join('/');
const lineAt = (text: string, index: number) =>
  text.slice(0, index).split('\n').length;
function evidence(
  file: SourceFile,
  index: number,
  excerpt?: string,
): Evidence[] {
  return [
    {
      path: file.path,
      line: lineAt(file.content, index),
      ...(excerpt ? { excerpt: excerpt.slice(0, 320) } : {}),
    },
  ];
}
function withoutComments(text: string): string {
  // Preserve strings and offsets; comments must not turn into declarations.
  return text.replace(
    /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*/g,
    (m) =>
      m.startsWith('//') || m.startsWith('/*') || m.startsWith('#')
        ? m.replace(/[^\n]/g, ' ')
        : m,
  );
}
function blockEnd(text: string, start: number, open = '{', close = '}') {
  let depth = 0,
    quote = '',
    escaped = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === '\\') escaped = true;
      else if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      continue;
    }
    if (c === open) depth++;
    if (c === close && --depth === 0) return i;
  }
  return -1;
}
function parseJSONC(text: string) {
  return JSON.parse(withoutComments(text).replace(/,(\s*[}\]])/g, '$1'));
}
const cloudCatalog: Record<
  string,
  { name: string; description: string; docs?: string; database?: boolean }
> = {
  aws_lambda_function: {
    name: 'Lambda',
    description: 'イベントやAPI呼び出しに応じてコードを実行するサービス。',
    docs: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
  },
  aws_apigatewayv2_api: {
    name: 'API Gateway',
    description: 'HTTP / WebSocket APIを公開し、バックエンドへ接続する入口。',
    docs: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html',
  },
  aws_api_gateway_rest_api: {
    name: 'API Gateway',
    description: 'REST APIの受付とバックエンドへの接続を担うサービス。',
    docs: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html',
  },
  aws_dynamodb_table: {
    name: 'DynamoDB',
    description:
      'キーを使ってデータを保存・取得する、マネージドのNoSQLデータベース。',
    database: true,
    docs: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html',
  },
  cloudflare_worker_script: {
    name: 'Workers',
    description:
      'Cloudflareのネットワーク上でアプリケーションコードを実行するサービス。',
    docs: 'https://developers.cloudflare.com/workers/',
  },
};
const cfKinds: Record<string, string> = {
  'AWS::Lambda::Function': 'aws_lambda_function',
  'AWS::ApiGatewayV2::Api': 'aws_apigatewayv2_api',
  'AWS::ApiGateway::RestApi': 'aws_api_gateway_rest_api',
  'AWS::DynamoDB::Table': 'aws_dynamodb_table',
};
function cloudNode(
  id: string,
  type: string,
  name: string,
  file: SourceFile,
  index: number,
): AtlasNode {
  const known = cloudCatalog[cfKinds[type] || type];
  const provider =
    type.startsWith('aws_') || type.startsWith('AWS::')
      ? 'AWS'
      : type.startsWith('google_')
        ? 'Google Cloud'
        : type.startsWith('azurerm_')
          ? 'Azure'
          : type.startsWith('cloudflare_')
            ? 'Cloudflare'
            : 'Infrastructure';
  return {
    id,
    name: known ? `${known.name} / ${name}` : name,
    kind:
      known?.database || /bucket|database|_table$|::Table$|::Bucket$/.test(type)
        ? 'database'
        : 'service',
    description:
      known?.description ||
      `${type} として構成ファイルに宣言されたリソース。接続は設定中の参照関係です。`,
    technology: type,
    provider,
    path: file.path,
    docs: known?.docs,
    evidence: evidence(file, index, `${type} ${name}`),
  };
}

export function analyzeFiles(
  input: SourceFile[],
  name: string,
  source?: Atlas['source'],
): Atlas {
  const atlas: Atlas = {
    version: 1,
    id: `repo-${name}`,
    name,
    description: 'ソースと設定の静的解析から抽出した構成です。',
    source: source || { kind: 'repository', label: `${name} · ローカル解析` },
    nodes: [],
    edges: [],
    journeys: [],
    warnings: [],
  };
  const accepted = input.filter((f) => supportedPath(f.path));
  if (accepted.length > LIMITS.files)
    atlas.warnings.push(
      `対象${accepted.length}件中、先頭${LIMITS.files}ファイルを解析しました。`,
    );
  let bytes = 0;
  const files = accepted
    .slice(0, LIMITS.files)
    .map((f) => ({ ...f, path: normalizePath(f.path) }))
    .filter((f) => {
      const size = new TextEncoder().encode(f.content).length;
      bytes += size;
      if (size > LIMITS.fileBytes || bytes > LIMITS.totalBytes) {
        atlas.warnings.push(`${f.path} はサイズ制限のため省略しました。`);
        return false;
      }
      return true;
    });
  const fileMap = new Map(files.map((f) => [f.path, f]));
  const nodeIds = new Set<string>();
  const add = (node: AtlasNode) => {
    if (!nodeIds.has(node.id)) {
      nodeIds.add(node.id);
      atlas.nodes.push(node);
    }
  };
  const edgeKeys = new Set<string>();
  const connect = (
    s: string,
    t: string,
    label: string,
    kind: AtlasEdge['kind'],
    ev?: Evidence[],
  ) => {
    const key = `${s}|${t}|${label}`;
    if (s === t || edgeKeys.has(key)) return;
    edgeKeys.add(key);
    atlas.edges.push({
      id: `edge-${atlas.edges.length + 1}`,
      source: s,
      target: t,
      label,
      kind,
      evidence: ev,
    });
  };
  const syntax = new Map<string, ts.SourceFile>();
  for (const file of files) {
    if (/\.(tsx?|jsx?|mjs|cjs)$/.test(file.path)) {
      const sf = ts.createSourceFile(
        file.path,
        file.content,
        ts.ScriptTarget.Latest,
        true,
      );
      syntax.set(file.path, sf);
      const routeFile =
        /(?:^|\/)(?:src\/)?(?:app\/.*\/page|app\/page|pages\/[^_].*|routes\/.+)\.(tsx?|jsx?)$/.test(
          file.path,
        ) && !/(?:^|\/)api\//.test(file.path);
      const route = routeFile
        ? '/' +
          file.path
            .replace(/^(?:src\/)?(?:app|pages|routes)\//, '')
            .replace(/(?:\/)?(?:page|index)\.(tsx?|jsx?)$/, '')
            .replace(/\.(tsx?|jsx?)$/, '')
            .replace(/\([^/]*\)\//g, '')
        : undefined;
      const exported = sf.statements
        .filter(
          (s) =>
            ts.canHaveModifiers(s) &&
            ts
              .getModifiers(s)
              ?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword),
        )
        .map((s) => (s as ts.FunctionDeclaration).name?.getText(sf))
        .filter(Boolean)
        .slice(0, 5);
      add({
        id: `file:${file.path}`,
        name: file.path.split('/').pop()!,
        kind: routeFile ? 'screen' : 'module',
        description: exported.length
          ? `公開する要素：${exported.join('、')}。ソースの参照関係を辿れます。`
          : `${file.path} にある${routeFile ? '画面の入口' : 'ソースファイル'}。具体的な役割は根拠を読み、説明に追記できます。`,
        technology: /\.tsx?$/.test(file.path) ? 'TypeScript' : 'JavaScript',
        path: file.path,
        route,
        evidence: evidence(file, 0),
      });
    } else if (file.path.endsWith('.py')) {
      const definitions = [
        ...file.content.matchAll(/^(?:async\s+)?(?:def|class)\s+(\w+)/gm),
      ]
        .map((m) => m[1])
        .slice(0, 5);
      add({
        id: `file:${file.path}`,
        name: file.path.split('/').pop()!,
        kind: 'module',
        description: definitions.length
          ? `定義されている要素：${definitions.join('、')}。`
          : 'Pythonのソースファイルです。',
        technology: 'Python',
        path: file.path,
        evidence: evidence(file, 0),
      });
    } else if (/(^|\/)package\.json$/.test(file.path)) {
      try {
        const pkg = JSON.parse(file.content);
        add({
          id: `file:${file.path}`,
          name: typeof pkg.name === 'string' ? pkg.name : file.path,
          kind: 'module',
          description:
            typeof pkg.description === 'string'
              ? pkg.description
              : `パッケージの定義。実行コマンド：${
                  Object.keys(pkg.scripts || {})
                    .slice(0, 8)
                    .join('、') || 'なし'
                }。`,
          technology: 'package.json',
          path: file.path,
          evidence: evidence(file, 0),
        });
      } catch {
        atlas.warnings.push(`${file.path} のJSONを解析できませんでした。`);
      }
    }
  }
  const aliases: {
    root: string;
    base: string;
    paths: Record<string, string[]>;
  }[] = [];
  for (const file of files.filter((f) =>
    /(^|\/)tsconfig[^/]*\.json$/.test(f.path),
  )) {
    try {
      const cfg = parseJSONC(file.content);
      aliases.push({
        root: dir(file.path),
        base: cfg.compilerOptions?.baseUrl || '.',
        paths: cfg.compilerOptions?.paths || {},
      });
      if (cfg.extends)
        atlas.warnings.push(
          `${file.path}: extends先のパス設定は自動解決しません。`,
        );
    } catch {
      atlas.warnings.push(`${file.path} の設定を解析できませんでした。`);
    }
  }
  const resolve = (from: string, specifier: string) => {
    let bases: string[] = [];
    if (specifier.startsWith('.'))
      bases = [normalizePath(`${dir(from)}/${specifier}`)];
    else {
      const cfg = aliases
        .filter((a) => !a.root || from.startsWith(a.root + '/'))
        .sort((a, b) => b.root.length - a.root.length)[0];
      if (cfg)
        for (const [pattern, values] of Object.entries(cfg.paths)) {
          const [prefix, suffix = ''] = pattern.split('*');
          if (
            specifier.startsWith(prefix) &&
            specifier.endsWith(suffix) &&
            (pattern.includes('*') || specifier === pattern)
          ) {
            const middle = specifier.slice(
              prefix.length,
              suffix.length ? -suffix.length : undefined,
            );
            bases.push(
              ...values.map((v) =>
                normalizePath(
                  `${cfg.root}/${cfg.base}/${v.replace('*', middle)}`,
                ),
              ),
            );
          }
        }
    }
    for (const base of bases) {
      const stem = base.replace(/\.(m?js|cjs)$/, '');
      const candidates = [
        base,
        ...[
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.mjs',
          '.cjs',
          '.py',
          '/index.ts',
          '/index.tsx',
          '/index.js',
          '/__init__.py',
        ].map((ext) => base + ext),
        ...['.ts', '.tsx', '.mts'].map((ext) => stem + ext),
      ];
      const match = candidates.find((p) => nodeIds.has('file:' + p));
      if (match) return 'file:' + match;
    }
    return undefined;
  };
  let unresolved = 0;
  for (const file of files) {
    const sf = syntax.get(file.path);
    if (sf) {
      const visit = (node: ts.Node) => {
        let spec: ts.StringLiteralLike | undefined;
        if (
          (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
          node.moduleSpecifier &&
          ts.isStringLiteralLike(node.moduleSpecifier)
        )
          spec = node.moduleSpecifier;
        if (
          ts.isCallExpression(node) &&
          node.arguments.length === 1 &&
          ts.isStringLiteralLike(node.arguments[0]) &&
          (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
            (ts.isIdentifier(node.expression) &&
              node.expression.text === 'require'))
        )
          spec = node.arguments[0];
        if (spec) {
          const target = resolve(file.path, spec.text);
          if (target)
            connect(
              'file:' + file.path,
              target,
              'import',
              'import',
              evidence(
                file,
                node.getStart(sf),
                `import ${JSON.stringify(spec.text)}`,
              ),
            );
          else if (
            !spec.text.startsWith('.') &&
            !spec.text.startsWith('@/') &&
            !spec.text.startsWith('~/')
          ) {
            const pkg = spec.text.startsWith('@')
              ? spec.text.split('/').slice(0, 2).join('/')
              : spec.text.split('/')[0];
            const id = `dependency:${pkg}`;
            add({
              id,
              name: pkg,
              kind: 'external',
              description: `ソースから参照される外部モジュール。パッケージまたは組み込み機能です。`,
              technology: 'import',
              evidence: evidence(
                file,
                node.getStart(sf),
                `import ${JSON.stringify(spec.text)}`,
              ),
            });
            connect(
              'file:' + file.path,
              id,
              'import',
              'import',
              evidence(file, node.getStart(sf)),
            );
          } else unresolved++;
        }
        ts.forEachChild(node, visit);
      };
      visit(sf);
    } else if (file.path.endsWith('.py')) {
      for (const match of file.content.matchAll(
        /^\s*(?:from\s+([.\w]+)\s+import\s+([\w*]+)|import\s+([\w.]+))/gm,
      )) {
        const mod = match[1] || match[3];
        const leading = mod.match(/^\.+/)?.[0].length || 0;
        const root = leading
          ? dir(file.path)
              .split('/')
              .slice(
                0,
                Math.max(0, dir(file.path).split('/').length - leading + 1),
              )
              .join('/')
          : '';
        const base = normalizePath(
          `${root}/${mod.replace(/^\.+/, '').replaceAll('.', '/')}`,
        );
        const target = [
          `${base}.py`,
          `${base}/__init__.py`,
          `${base}/${match[2]}.py`,
        ].find((p) => fileMap.has(p));
        if (target)
          connect(
            'file:' + file.path,
            'file:' + target,
            'import',
            'import',
            evidence(file, match.index!, match[0].trim()),
          );
      }
    } else if (/(^|\/)package\.json$/.test(file.path)) {
      try {
        const pkg = JSON.parse(file.content);
        const entries = [
          pkg.main,
          pkg.module,
          ...Object.values(
            typeof pkg.bin === 'object' ? pkg.bin : { main: pkg.bin },
          ),
        ].filter((v): v is string => typeof v === 'string');
        for (const entry of entries) {
          const target = resolve(file.path, './' + entry);
          if (target)
            connect(
              'file:' + file.path,
              target,
              'エントリー',
              'reference',
              evidence(file, 0, `entry: ${entry}`),
            );
        }
      } catch {
        /* already reported */
      }
    }
  }
  const tfResources: {
    id: string;
    body: string;
    file: SourceFile;
    start: number;
    namespace: string;
  }[] = [];
  for (const file of files.filter((f) => f.path.endsWith('.tf'))) {
    const text = withoutComments(file.content);
    const re = /\bresource\s+"([\w-]+)"\s+"([\w-]+)"\s*\{/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(text))) {
      const end = blockEnd(text, re.lastIndex - 1);
      if (end < 0) {
        atlas.warnings.push(
          `${file.path}: 閉じられていないresourceブロックを省略しました。`,
        );
        break;
      }
      const namespace = dir(file.path);
      const id = `tf:${namespace}:${match[1]}.${match[2]}`;
      add(cloudNode(id, match[1], match[2], file, match.index));
      tfResources.push({
        id,
        body: text.slice(re.lastIndex, end),
        file,
        start: re.lastIndex,
        namespace,
      });
      re.lastIndex = end + 1;
    }
  }
  for (const r of tfResources) {
    for (const match of r.body.matchAll(
      /\b([a-z][\w]*_[\w]+)\.([\w-]+)(?:\.[\w]+)?/g,
    )) {
      const target = `tf:${r.namespace}:${match[1]}.${match[2]}`;
      if (nodeIds.has(target))
        connect(
          r.id,
          target,
          '設定参照',
          'reference',
          evidence(r.file, r.start + match.index!, `${match[1]}.${match[2]}`),
        );
    }
  }
  for (const file of files.filter((f) => f.path.endsWith('.prisma'))) {
    const text = withoutComments(file.content);
    const pending: { node: AtlasNode; body: string; start: number }[] = [];
    const re = /\bmodel\s+(\w+)\s*\{/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
      const end = blockEnd(text, re.lastIndex - 1);
      if (end < 0) break;
      const body = text.slice(re.lastIndex, end);
      const fields: Field[] = [];
      for (const line of body.split('\n')) {
        const field = line.match(/^\s*(\w+)\s+([\w]+(?:\[\]|\?)?)(.*)$/);
        if (field)
          fields.push({
            name: field[1],
            type: field[2],
            ...(/@id\b/.test(field[3])
              ? { key: 'PK' }
              : /@unique\b/.test(field[3])
                ? { key: 'UQ' }
                : {}),
          });
      }
      const node: AtlasNode = {
        id: `prisma:${file.path}:${m[1]}`,
        name: m[1],
        kind: 'entity',
        description: 'Prismaスキーマに宣言されたデータモデル。',
        technology: 'Prisma',
        path: file.path,
        fields: fields.slice(0, 100),
        evidence: evidence(file, m.index),
      };
      add(node);
      pending.push({ node, body, start: re.lastIndex });
      re.lastIndex = end + 1;
    }
    for (const p of pending)
      for (const f of p.node.fields ?? []) {
        const target = `prisma:${file.path}:${f.type.replace(/[\[\]?]/g, '')}`;
        if (nodeIds.has(target))
          connect(
            p.node.id,
            target,
            f.type.endsWith('[]')
              ? '複数を参照'
              : f.type.endsWith('?')
                ? '任意の参照'
                : '単一の参照',
            'relation',
            p.node.evidence,
          );
      }
  }
  for (const file of files.filter((f) => f.path.endsWith('.sql'))) {
    const text = withoutComments(file.content).replace(/--[^\n]*/g, (m) =>
      m.replace(/./g, ' '),
    );
    const pending: { node: AtlasNode; body: string; start: number }[] = [];
    const re =
      /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?["`\[]?(\w+)["`\]]?\s*\(/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
      const end = blockEnd(text, re.lastIndex - 1, '(', ')');
      if (end < 0) break;
      const body = text.slice(re.lastIndex, end);
      const fields: Field[] = [];
      let start = 0,
        depth = 0;
      const chunks: string[] = [];
      for (let i = 0; i <= body.length; i++) {
        if (body[i] === '(') depth++;
        if (body[i] === ')') depth--;
        if (i === body.length || (body[i] === ',' && depth === 0)) {
          chunks.push(body.slice(start, i));
          start = i + 1;
        }
      }
      for (const chunk of chunks) {
        const f = chunk
          .trim()
          .match(/^["`\[]?(\w+)["`\]]?\s+([\w]+(?:\([^)]*\))?)/);
        if (f && !/^(PRIMARY|FOREIGN|UNIQUE|CONSTRAINT|CHECK)$/i.test(f[1]))
          fields.push({
            name: f[1],
            type: f[2],
            ...(/PRIMARY\s+KEY/i.test(chunk)
              ? { key: 'PK' }
              : /REFERENCES/i.test(chunk)
                ? { key: 'FK' }
                : {}),
          });
      }
      for (const pk of body.matchAll(/PRIMARY\s+KEY\s*\(([^)]+)\)/gi)) {
        for (const name of pk[1]
          .split(',')
          .map((x) => x.trim().replace(/["`\[\]]/g, ''))) {
          const f = fields.find((x) => x.name === name);
          if (f) f.key = 'PK';
        }
      }
      const node: AtlasNode = {
        id: `sql:${dir(file.path)}:${m[1]}`,
        name: m[1],
        kind: 'entity',
        description: 'SQLのCREATE TABLE文から抽出したテーブル。',
        technology: 'SQL',
        path: file.path,
        fields: fields.slice(0, 100),
        evidence: evidence(file, m.index),
      };
      add(node);
      pending.push({ node, body, start: re.lastIndex });
      re.lastIndex = end + 1;
    }
    for (const p of pending)
      for (const ref of p.body.matchAll(/REFERENCES\s+["`\[]?(\w+)["`\]]?/gi)) {
        const target = `sql:${dir(file.path)}:${ref[1]}`;
        connect(
          p.node.id,
          target,
          '外部キー参照',
          'relation',
          evidence(file, p.start + ref.index!),
        );
      }
  }
  for (const file of files.filter(
    (f) =>
      /\.jsonc?$/.test(f.path) &&
      !/(?:package|tsconfig[^/]*)\.json$/.test(f.path),
  )) {
    try {
      const data = parseJSONC(file.content);
      if (data.Resources && typeof data.Resources === 'object') {
        for (const [name, value] of Object.entries(data.Resources)) {
          const r = value as { Type?: string };
          if (typeof r.Type === 'string')
            add(cloudNode(`cfn:${file.path}:${name}`, r.Type, name, file, 0));
        }
        for (const [name, value] of Object.entries(data.Resources)) {
          const addRef = (ref: string, label = '設定参照') => {
            const target = `cfn:${file.path}:${ref.split('.')[0]}`;
            if (nodeIds.has(target))
              connect(
                `cfn:${file.path}:${name}`,
                target,
                label,
                'reference',
                evidence(file, 0),
              );
          };
          const visit = (x: unknown) => {
            if (!x || typeof x !== 'object') return;
            for (const [k, v] of Object.entries(x)) {
              if (k === 'Ref' && typeof v === 'string') addRef(v);
              else if (k === 'Fn::GetAtt')
                addRef(Array.isArray(v) ? String(v[0]) : String(v));
              else if (k === 'DependsOn') {
                for (const ref of Array.isArray(v) ? v : [v])
                  if (typeof ref === 'string') addRef(ref, 'DependsOn');
              } else if (k === 'Fn::Sub') {
                const template = Array.isArray(v) ? v[0] : v;
                if (typeof template === 'string')
                  for (const m of template.matchAll(/\$\{([\w.]+)\}/g))
                    addRef(m[1]);
              }
              if (typeof v === 'object') visit(v);
            }
          };
          visit(value);
        }
      } else if (/(^|\/)wrangler\.jsonc?$/.test(file.path)) {
        const workerId = `worker:${file.path}`;
        add({
          id: workerId,
          name: typeof data.name === 'string' ? data.name : 'Cloudflare Worker',
          kind: 'service',
          description:
            'このWrangler設定でデプロイするWorker。バインディングからストレージを参照します。',
          technology: 'Workers',
          provider: 'Cloudflare',
          path: file.path,
          docs: 'https://developers.cloudflare.com/workers/',
          evidence: evidence(file, 0),
        });
        if (typeof data.main === 'string') {
          const target = resolve(file.path, './' + data.main);
          if (target)
            connect(target, workerId, '実行先', 'deploy', evidence(file, 0));
        }
        for (const key of ['d1_databases', 'r2_buckets', 'kv_namespaces'])
          if (Array.isArray(data[key]))
            for (const b of data[key]) {
              if (typeof b.binding !== 'string') continue;
              const id = `binding:${file.path}:${b.binding}`;
              add({
                id,
                name: b.binding,
                kind: 'database',
                description: `${key} のバインディングとして宣言された保存先。`,
                technology: key,
                provider: 'Cloudflare',
                path: file.path,
                evidence: evidence(file, 0, `binding: ${b.binding}`),
              });
              connect(
                workerId,
                id,
                'バインディング',
                'reference',
                evidence(file, 0),
              );
            }
      }
    } catch {
      atlas.warnings.push(`${file.path} のJSONを解析できませんでした。`);
    }
  }
  for (const f of files.filter((f) => f.path.endsWith('wrangler.toml')))
    atlas.warnings.push(
      `${f.path}: TOMLの自動解析には未対応です。Wrangler JSON/JSONCか共通モデルを使ってください。`,
    );
  const missingEdges = atlas.edges.filter(
    (e) => !nodeIds.has(e.source) || !nodeIds.has(e.target),
  );
  atlas.edges = atlas.edges.filter(
    (e) => nodeIds.has(e.source) && nodeIds.has(e.target),
  );
  if (missingEdges.length)
    atlas.warnings.push(
      `${missingEdges.length}件の接続は参照先が読み込み範囲にないため省略しました。`,
    );
  if (unresolved)
    atlas.warnings.push(
      `${unresolved}件の相対・エイリアス参照を解決できませんでした。対象ファイルの不足やパス設定を確認してください。`,
    );
  if (tfResources.length)
    atlas.warnings.push(
      'Terraformはresource宣言とテキスト中のリソース参照を抽出します。module、count、for_each、変数の評価はしません。接続は通信経路を保証しません。',
    );
  atlas.warnings.push(
    '静的な宣言とimportを解析しています。実行時の呼び出し・業務上の意味・権限・稼働状態は推定しません。Pythonは基本的なimport構文を対象とします。',
  );
  if (!atlas.nodes.length)
    throw new Error(
      '対応する要素が見つかりませんでした。JS / TS / Python、Terraform、Prisma、SQL、CloudFormation JSON、Wrangler JSON/JSONCを含むファイルを選んでください。',
    );
  atlas.description = `${files.length}ファイルから${atlas.nodes.length}要素と${atlas.edges.length}接続を抽出しました。`;
  // A reading guide follows actual graph edges; it is not an execution trace.
  const start =
    atlas.nodes.find((n) => n.path?.endsWith('package.json')) ||
    atlas.nodes.find((n) => !atlas.edges.some((e) => e.target === n.id)) ||
    atlas.nodes[0];
  const walk = [start];
  let current = start;
  for (let i = 0; i < 7; i++) {
    const e = atlas.edges.find(
      (e) => e.source === current.id && !walk.some((n) => n.id === e.target),
    );
    const next = e && atlas.nodes.find((n) => n.id === e.target);
    if (!next) break;
    walk.push(next);
    current = next;
  }
  if (walk.length > 1)
    atlas.journeys = [
      {
        id: 'reading-guide',
        name: '参照関係を辿る',
        description:
          '宣言・importを順番に読むガイド。実行順序を表すものではありません。',
        steps: walk.map((n, i) => ({
          nodeId: n.id,
          title: `${String(i + 1).padStart(2, '0')} / ${n.name}`,
          description: n.description,
        })),
      },
    ];
  atlas.warnings = atlas.warnings.slice(0, 200);
  return validateAtlas(atlas);
}

export async function readLocalFiles(
  fileList: FileList | File[],
): Promise<Atlas> {
  const all = Array.from(fileList);
  const root = all
    .find((f) => f.webkitRelativePath)
    ?.webkitRelativePath.split('/')[0];
  if (all.length === 1 && all[0].name.endsWith('.json')) {
    if (all[0].size > LIMITS.totalBytes)
      throw new Error('モデルは12 MB以下にしてください。');
    const data = JSON.parse(await all[0].text());
    if (data.version === 1 || all[0].name.endsWith('.atlas.json'))
      return validateAtlas(data);
  }
  const candidates = all
    .map((file) => ({
      file,
      path: root
        ? file.webkitRelativePath.split('/').slice(1).join('/')
        : file.name,
    }))
    .filter((x) => supportedPath(x.path));
  const selected = candidates.slice(0, LIMITS.files);
  let total = 0;
  const files: SourceFile[] = [];
  const warnings: string[] = [];
  for (const { file, path } of selected) {
    if (file.size > LIMITS.fileBytes || total + file.size > LIMITS.totalBytes) {
      warnings.push(`${path} はサイズ制限のため省略しました。`);
      continue;
    }
    total += file.size;
    files.push({ path, content: await file.text() });
  }
  const atlas = analyzeFiles(files, root || 'Imported project');
  if (candidates.length > LIMITS.files)
    warnings.push(
      `対象${candidates.length}件中、先頭${LIMITS.files}件を読み込みました。`,
    );
  atlas.warnings = [...warnings, ...atlas.warnings].slice(0, 200);
  return atlas;
}

export function parseGitHubUrl(input: string): { owner: string; repo: string } {
  let url: URL;
  try {
    url = new URL(input.trim());
  } catch {
    throw new Error(
      'https://github.com/owner/repository の形式で入力してください。',
    );
  }
  const segments = url.pathname.replace(/\/$/, '').split('/').filter(Boolean);
  if (
    url.protocol !== 'https:' ||
    url.hostname !== 'github.com' ||
    url.port ||
    url.username ||
    url.password ||
    segments.length !== 2 ||
    !segments.every((s) => /^[\w.-]+$/.test(s))
  )
    throw new Error(
      'GitHubのリポジトリURLを入力してください。ブランチやファイルのURLには対応していません。',
    );
  return { owner: segments[0], repo: segments[1].replace(/\.git$/, '') };
}

export async function importGitHub(
  input: string,
  onProgress: (status: string) => void,
  signal?: AbortSignal,
  fetcher: typeof fetch = fetch,
): Promise<Atlas> {
  const { owner, repo } = parseGitHubUrl(input);
  const base = `https://api.github.com/repos/${owner}/${repo}`;
  async function get(url: string, json = true) {
    const response = await fetcher(url, {
      signal,
      credentials: 'omit',
      headers: json ? { Accept: 'application/vnd.github+json' } : undefined,
    });
    if (!response.ok)
      throw new Error(
        response.status === 403 || response.status === 429
          ? 'GitHubの利用制限に達しました。フォルダーから読み込むか、時間を置いて試してください。'
          : response.status === 404
            ? '公開リポジトリが見つかりません。非公開リポジトリはローカルフォルダーから読み込んでください。'
            : `GitHubから取得できませんでした (${response.status})。`,
      );
    if (
      Number(response.headers.get('content-length') || 0) >
      (json ? 8_000_000 : LIMITS.fileBytes)
    )
      throw new Error('取得ファイルがサイズ制限を超えています。');
    return json ? response.json() : response.text();
  }
  onProgress('リポジトリを確認しています…');
  const metadata = (await get(base)) as { default_branch: string };
  const commit = (await get(
    `${base}/commits/${encodeURIComponent(metadata.default_branch)}`,
  )) as { sha: string };
  const revision = String(commit.sha);
  if (!/^[0-9a-f]{40}$/.test(revision))
    throw new Error('GitHubからコミット情報を取得できませんでした。');
  const tree = (await get(`${base}/git/trees/${revision}?recursive=1`)) as {
    tree: { type: string; path: string; size?: number; mode: string }[];
    truncated: boolean;
  };
  if (!Array.isArray(tree.tree))
    throw new Error('GitHubのファイル一覧を取得できませんでした。');
  const all = (
    tree.tree as { type: string; path: string; size?: number; mode: string }[]
  ).filter(
    (f) => f.type === 'blob' && f.mode !== '120000' && supportedPath(f.path),
  );
  const files = all
    .filter((f) => (f.size ?? 0) <= LIMITS.fileBytes)
    .slice(0, 160);
  const contents: SourceFile[] = [];
  let cursor = 0,
    done = 0,
    total = 0;
  await Promise.all(
    Array.from({ length: 5 }, async () => {
      while (cursor < files.length) {
        const file = files[cursor++];
        const content = (await get(
          `https://raw.githubusercontent.com/${owner}/${repo}/${revision}/${file.path.split('/').map(encodeURIComponent).join('/')}`,
          false,
        )) as string;
        total += new TextEncoder().encode(content).length;
        if (total > LIMITS.totalBytes)
          throw new Error(
            'リポジトリが12 MBを超えています。必要なフォルダーをローカルから読み込んでください。',
          );
        contents.push({ path: file.path, content });
        onProgress(`ソースを読んでいます… ${++done} / ${files.length}`);
      }
    }),
  );
  const atlas = analyzeFiles(
    contents.sort((a, b) => a.path.localeCompare(b.path)),
    repo,
    {
      kind: 'repository',
      label: `${owner}/${repo}`,
      url: `https://github.com/${owner}/${repo}`,
      revision,
    },
  );
  if (tree.truncated)
    atlas.warnings.unshift(
      'GitHubのファイル一覧が省略されています。ローカルフォルダーからの読み込みを推奨します。',
    );
  if (all.length !== files.length)
    atlas.warnings.unshift(
      `対象${all.length}件のうち${files.length}件を取得しました。公開URLからの取得は160ファイル・各300 KBまでです。`,
    );
  return atlas;
}
