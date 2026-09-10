// Parse target sources as data. The virtual FS prevents reads outside the inventory.
import ts from 'typescript';
import path from 'node:path';
import fs from 'node:fs';

const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const root = path.resolve(input.root);
const normalize = p => path.resolve(p).replaceAll('\\', '/');
const inventory = new Set(input.inventory.map(p => normalize(path.join(root, p))));
const files = new Map(Object.entries(input.files).map(([p, t]) => [normalize(path.join(root, p)), t]));
const configs = new Map(Object.entries(input.configs).map(([p, t]) => [normalize(path.join(root, p)), t]));
const dirs = new Set();
for (const p of inventory) for (let d = path.dirname(p); d.startsWith(root); d = path.dirname(d)) { dirs.add(d); if (d === root) break; }
const host = { fileExists: p => inventory.has(normalize(p)), readFile: p => files.get(normalize(p)) ?? configs.get(normalize(p)), directoryExists: p => dirs.has(normalize(p)), getCurrentDirectory: () => root, realpath: normalize };
const edges = [], findings = [], errors = [], optionsCache = new Map(), validatedConfigs = new Set();
function configOptions(config, seen = new Set()) {
  if (optionsCache.has(config)) return optionsCache.get(config);
  if (seen.has(config)) { errors.push({path:path.relative(root, config), reason:'tsconfig-extends-cycle'}); return {}; }
  seen.add(config);
  const parsed = ts.parseConfigFileTextToJson(config, configs.get(config) ?? '{}');
  if (parsed.error) errors.push({path:path.relative(root, config), reason:`tsconfig-parse-${parsed.error.code}`});
  else validatedConfigs.add(path.relative(root,config).replaceAll('\\','/'));
  const value = parsed.config ?? {};
  let options = { allowJs: true, moduleResolution: ts.ModuleResolutionKind.Bundler, resolveJsonModule: true };
  for (const extension of [value.extends ?? []].flat()) {
    if (typeof extension !== 'string' || !extension.startsWith('.')) { errors.push({path:path.relative(root, config), reason:'external-tsconfig-extends-unresolved'}); continue; }
    let target = normalize(path.resolve(path.dirname(config), extension));
    if (!configs.has(target) && !target.endsWith('.json')) target += '.json';
    if (configs.has(target)) options = {...options, ...configOptions(target, new Set(seen))};
    else errors.push({path:path.relative(root, config), reason:'tsconfig-extends-outside-inventory'});
  }
  const converted = ts.convertCompilerOptionsFromJson(value.compilerOptions ?? {}, path.dirname(config));
  for (const error of converted.errors) errors.push({path:path.relative(root, config), reason:`tsconfig-option-${error.code}`});
  options = {...options, ...converted.options};
  optionsCache.set(config, options);
  return options;
}
for (const config of configs.keys()) if (/\/(?:tsconfig|jsconfig)\.json$/.test(config)) configOptions(config);
for (const [source, text] of Object.entries(input.files)) {
  const absolute = normalize(path.join(root, source));
  const sf = ts.createSourceFile(absolute, text, ts.ScriptTarget.Latest, true);
  const nearest = [...configs.keys()].filter(p => /\/(?:tsconfig|jsconfig)\.json$/.test(p) && absolute.startsWith(path.dirname(p) + '/')).sort((a,b) => b.length-a.length)[0];
  const options = nearest ? configOptions(nearest) : {allowJs:true, moduleResolution:ts.ModuleResolutionKind.Bundler};
  const lineOf = n => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
  const signal = (rule, n, title, detail, action, severity='medium') => findings.push({rule, path:source, line:lineOf(n), title, detail, action, severity});
  for (const diagnostic of sf.parseDiagnostics) {
    findings.push({rule:'js-parse', path:source, line:sf.getLineAndCharacterOfPosition(diagnostic.start ?? 0).line+1, severity:'low', title:'JS/TS構文を解析できません', detail:`TypeScript parser diagnostic ${diagnostic.code}。依存図が不完全な可能性があります。`, action:'使用中の構文・コンパイラで検証する', confidence:'confirmed'});
    errors.push({path:source, reason:'js-parse'});
  }
  const childNames = new Set(), childFunctions = new Set();
  function connect(spec, n, relation='imports') {
    const found = ts.resolveModuleName(spec, absolute, options, host).resolvedModule;
    let target = found ? path.relative(root, found.resolvedFileName).replaceAll('\\', '/') : null;
    if (!target) {
      const candidate = normalize(path.resolve(path.dirname(absolute), spec));
      if (inventory.has(candidate)) target = path.relative(root,candidate).replaceAll('\\','/');
    }
    if (target) edges.push({source, target, relation, line:lineOf(n)});
    else if (!spec.startsWith('.') && !spec.startsWith('/') && !spec.startsWith('node:')) {
      const pkg = spec.startsWith('@') ? spec.split('/').slice(0,2).join('/') : spec.split('/')[0];
      edges.push({source, target:`npm:${pkg}`, relation, line:lineOf(n)});
    } else if (spec.startsWith('.')) {
      signal('unresolved-import', n, '相対importを解決できません', '参照先が欠落・除外・未生成である可能性があります。', '実際のビルド設定と参照先を確認する', 'low');
    }
  }
  // Collect imported identifiers first, including aliased named child_process functions.
  for (const stmt of sf.statements) if (ts.isImportDeclaration(stmt) && ts.isStringLiteral(stmt.moduleSpecifier) && /^(node:)?child_process$/.test(stmt.moduleSpecifier.text)) {
    if (stmt.importClause?.name) childNames.add(stmt.importClause.name.text);
    const binding = stmt.importClause?.namedBindings;
    if (binding && ts.isNamespaceImport(binding)) childNames.add(binding.name.text);
    if (binding && ts.isNamedImports(binding)) for (const e of binding.elements) if (/^exec(Sync)?$/.test((e.propertyName ?? e.name).text)) childFunctions.add(e.name.text);
  }
  function visit(n) {
    if ((ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) && n.moduleSpecifier && ts.isStringLiteralLike(n.moduleSpecifier)) connect(n.moduleSpecifier.text,n);
    if (ts.isCallExpression(n)) {
      const fn = n.expression.getText(sf);
      if (fn === 'require' || n.expression.kind === ts.SyntaxKind.ImportKeyword) {
        if (n.arguments[0] && ts.isStringLiteralLike(n.arguments[0])) {
          connect(n.arguments[0].text,n);
          if (/^(node:)?child_process$/.test(n.arguments[0].text) && ts.isVariableDeclaration(n.parent)) {
            if (ts.isIdentifier(n.parent.name)) childNames.add(n.parent.name.text);
            if (ts.isObjectBindingPattern(n.parent.name)) for (const b of n.parent.name.elements) if (/^exec(Sync)?$/.test((b.propertyName ?? b.name).getText(sf))) childFunctions.add(b.name.getText(sf));
          }
        } else signal('dynamic-import',n,'動的ロードの参照先は未確定','リテラルでないロード先は依存図に確定できません。','実行時の値と読み込み境界を確認する','info');
      }
      if (fn === 'eval' || fn === 'Function') signal('js-eval',n,'文字列からのコード実行','外部入力の到達性を確認する必要があります。','入力元を追跡し、文字列実行の必要性を確認する','high');
      const [owner, method] = fn.split('.');
      if (childFunctions.has(fn) || (childNames.has(owner) && /^exec(Sync)?$/.test(method ?? ''))) signal('js-shell',n,'シェル経由のコマンド実行','引数が外部から操作可能な場合に危険です。','execFile / spawn と引数配列の利用を検討する','high');
    }
    if (ts.isNewExpression(n) && n.expression.getText(sf)==='Function') signal('js-eval',n,'文字列からのコード実行','Functionコンストラクタの入力確認が必要です。','文字列生成元を追跡する','high');
    if ((ts.isJsxAttribute(n) && n.name.getText(sf)==='dangerouslySetInnerHTML') || (ts.isBinaryExpression(n) && n.operatorToken.kind===ts.SyntaxKind.EqualsToken && /\.(innerHTML|outerHTML)$/.test(n.left.getText(sf)))) signal('html-injection',n,'HTMLを直接挿入する処理','静的な存在検出です。サニタイズ済みかは未判定です。','入力源とサニタイザーを追跡し、XSSの到達性を確認する');
    ts.forEachChild(n,visit);
  }
  visit(sf);
}
process.stdout.write(JSON.stringify({edges,findings,errors,validated_configs:[...validatedConfigs]}));
