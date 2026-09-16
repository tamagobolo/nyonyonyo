#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, relative, basename, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { analyzeFiles, supportedPath, LIMITS } from '../lib/importer.ts';

const root = resolve(process.argv[2] || '.');
const output = resolve(process.argv[3] || `${basename(root)}.atlas.json`);
const entries = [];
async function walk(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) continue;
    if (
      entry.isDirectory() &&
      ![
        '.git',
        'node_modules',
        'dist',
        'build',
        '.next',
        '.venv',
        'venv',
        'coverage',
        'vendor',
        '.terraform',
        '.wrangler',
        '__pycache__',
      ].includes(entry.name)
    )
      await walk(resolve(path, entry.name));
    if (entry.isFile()) {
      const rel = relative(root, resolve(path, entry.name)).replaceAll(
        '\\',
        '/',
      );
      if (supportedPath(rel)) entries.push(rel);
    }
  }
}
await walk(root);
const files = [];
for (const path of entries.sort().slice(0, LIMITS.files)) {
  const bytes = await readFile(resolve(root, path));
  if (bytes.length <= LIMITS.fileBytes)
    files.push({ path, content: bytes.toString('utf8') });
}
let revision;
try {
  revision = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
} catch {
  /* A Git repository is optional. */
}
const atlas = analyzeFiles(files, basename(root), {
  kind: 'repository',
  label: `${basename(root)} · ローカル解析`,
  ...(revision ? { revision } : {}),
});
if (entries.length > LIMITS.files)
  atlas.warnings.unshift(
    `対象${entries.length}件中、先頭${LIMITS.files}ファイルを走査しました。`,
  );
await mkdir(dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(atlas, null, 2) + '\n');
console.log(
  `${output}\n${files.length} files / ${atlas.nodes.length} nodes / ${atlas.edges.length} connections`,
);
