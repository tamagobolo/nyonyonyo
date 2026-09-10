"""Read-only inventory and evidence collection. Never import or execute target code."""
from __future__ import annotations

import ast
from collections import Counter, defaultdict
from datetime import datetime, timezone
import fnmatch
import hashlib
from html.parser import HTMLParser
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tomllib

try:
    import yaml
except ImportError:
    yaml = None

HERE = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "node_modules", ".next", "dist", "coverage", ".venv", "venv", "__pycache__", ".cache", ".observatory", "reports", "vendor"}
TEXT = {".py", ".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".mts", ".cts", ".html", ".htm", ".css", ".scss", ".json", ".jsonc", ".toml", ".tol", ".yaml", ".yml", ".md", ".mdx", ".sh", ".bash", ".zsh", ".txt", ".rs", ".go", ".java", ".rb", ".sql", ".xml", ".ini", ".cfg", ".lock"}
JS = {".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".mts", ".cts"}
AUTOMATION = {"skill", "agent", "hook", "instruction"}
SEVERITY = {"info": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}


def digest(value):
    return hashlib.sha256(value if isinstance(value, bytes) else value.encode()).hexdigest()


def secret_file(path):
    name = path.name.lower()
    return (name == ".env" or (name.startswith(".env.") and not name.endswith(("example", "sample", "template")))
            or path.suffix.lower() in {".pem", ".key", ".p12", ".pfx", ".keystore"}
            or name in {"credentials", "credentials.json", "auth.json", "id_rsa", "id_ed25519", ".npmrc", ".pypirc"})


def kind_for(path):
    name, parts = path.name, set(path.parts)
    if name == "SKILL.md": return "skill"
    if name in {"AGENTS.md", "AGENTS.override.md", "CLAUDE.md"}: return "instruction"
    if path.suffix in {".toml", ".md"} and "agents" in parts and (".codex" in parts or ".claude" in parts or path.parent.name == "agents"): return "agent"
    if name in {"hooks.json", ".pre-commit-config.yaml"} or ".husky" in parts or ("hooks" in parts and (".git" in parts or ".codex" in parts)): return "hook"
    if "test" in parts or "tests" in parts or re.search(r"(\.test\.|\.spec\.|^test_)", name): return "test"
    if name in {"package.json", "pyproject.toml", "Cargo.toml", "go.mod", "requirements.txt", "Gemfile", "pom.xml"}: return "package"
    if path.suffix in {".toml", ".tol", ".json", ".jsonc", ".yaml", ".yml", ".ini", ".cfg", ".lock"} or name in {".gitignore", ".dockerignore", ".gitattributes"} or "config" in name or "config" in parts: return "config"
    if path.suffix in {".md", ".mdx", ".txt"}: return "doc"
    if path.suffix in TEXT or name in {"Dockerfile", "Makefile"}: return "source"
    return "asset"


def git_files(root):
    try:
        result = subprocess.run(["git", "-c", "core.fsmonitor=false", "-c", "core.untrackedCache=false", "-C", str(root), "ls-files", "--cached", "--others", "--exclude-standard", "-z", "--", "."], capture_output=True, timeout=20, check=True)
        return set(result.stdout.decode().split("\0")) - {""}
    except (OSError, subprocess.SubprocessError, UnicodeError):
        return None


def inside(path, root):
    return path.resolve().is_relative_to(root.resolve())


class HTMLRefs(HTMLParser):
    def __init__(self):
        super().__init__(); self.refs = []

    def handle_starttag(self, tag, attrs):
        for k, v in attrs:
            if v and ((tag in {"script", "img", "iframe"} and k == "src") or (tag == "link" and k == "href")):
                self.refs.append((v, self.getpos()[0]))


def scan(root, *, node="node", max_files=20000, max_bytes=524288, max_total_bytes=67108864, baseline=None, extra_roots=()):
    root = Path(root).expanduser().resolve()
    if not root.is_dir(): raise ValueError("監視対象は存在するディレクトリを指定してください")
    if min(max_files, max_bytes, max_total_bytes) <= 0: raise ValueError("読み取り上限は正の値を指定してください")
    nodes, texts, parsed, edges, findings = {}, {}, {}, [], []
    skipped, errors, exclusions = [], [], []
    config = {}
    config_path = root / ".observatory.toml"
    if config_path.is_file() and not config_path.is_symlink():
        try: config = tomllib.loads(config_path.read_text())
        except (OSError, ValueError): pass  # Recorded with file evidence below.
    if not isinstance(config.get("scan", {}), dict): raise ValueError(".observatory.toml の scan はテーブルにしてください")
    exclusions = config.get("scan", {}).get("exclude", [])
    if not isinstance(exclusions, list) or any(not isinstance(x, str) for x in exclusions):
        raise ValueError(".observatory.toml の scan.exclude は文字列配列にしてください")
    roots = [("", root)]
    for index, extra in enumerate(extra_roots):
        p = Path(extra).expanduser().resolve()
        if not p.is_dir(): raise ValueError(f"追加対象が存在しません: {p}")
        roots.append((f"@context{index + 1}/", p))
    total_bytes = 0
    bounded = False

    def finding(rule, path, line, severity, title, detail, action, confidence="review"):
        # Store locations and rule explanations, never source excerpts or secret values.
        key = digest(f"{rule}:{path}:{line}")[:20]
        if any(f["id"] == key for f in findings): return
        findings.append(dict(id=key, rule=rule, path=path, line=max(1, line or 1), severity=severity, title=title, detail=detail, action=action, confidence=confidence))

    candidates = []
    for prefix, scope_root in roots:
        tracked = git_files(scope_root)
        repo_sets = {scope_root: tracked}
        hook_roots = {scope_root}
        for base, dirs, names in os.walk(scope_root, followlinks=False):
            base_path = Path(base)
            if base_path != scope_root and (".git" in dirs or ".git" in names):
                repo_sets[base_path] = git_files(base_path)
                hook_roots.add(base_path)
            dirs[:] = sorted(d for d in dirs if d not in SKIP_DIRS)
            for d in list(dirs):
                p = Path(base) / d
                if p.is_symlink():
                    skipped.append({"path": prefix + p.relative_to(scope_root).as_posix(), "reason": "symlink-directory"})
                    dirs.remove(d)
            for name in sorted(names):
                p = Path(base) / name
                rel = p.relative_to(scope_root).as_posix()
                # Preserve explicitly relevant local control-plane inventory even if gitignored.
                control = any(x in {".codex", ".agents", ".claude", ".husky"} for x in Path(rel).parts)
                repository = max((rp for rp in repo_sets if p.is_relative_to(rp)), key=lambda rp: len(rp.parts))
                local_tracked = repo_sets[repository]
                if local_tracked is not None and p.relative_to(repository).as_posix() not in local_tracked and not control:
                    continue
                candidates.append((prefix + rel, p))
        # .git content is never traversed. Only actual local hooks are inspected.
        for hook_root in hook_roots:
            hooks = hook_root / ".git" / "hooks"
            if hooks.is_dir() and not hooks.is_symlink():
                candidates += [(prefix + p.relative_to(scope_root).as_posix(), p) for p in sorted(hooks.iterdir()) if p.is_file() and not p.name.endswith(".sample")]
    for path, p in sorted(candidates):
        if any(fnmatch.fnmatch(path, pat) for pat in exclusions):
            skipped.append({"path": path, "reason": "configured-exclusion"}); continue
        if p.is_symlink() or not p.is_file():
            skipped.append({"path": path, "reason": "symlink-or-special"}); continue
        if secret_file(p):
            skipped.append({"path": path, "reason": "sensitive-file"}); continue
        if len(nodes) >= max_files:
            skipped.append({"path": path, "reason": "file-limit"}); bounded = True; continue
        kind = kind_for(Path(path))
        item = dict(id=path, path=path, label=p.name, kind=kind, group=path.split("/")[0] if "/" in path else "(root)", lines=0, size=0, hash=None)
        nodes[path] = item
        try:
            item["size"] = p.stat().st_size
            if p.stat().st_size > max_bytes or total_bytes + p.stat().st_size > max_total_bytes:
                skipped.append({"path": path, "reason": "byte-limit"}); bounded = True; continue
            if p.suffix not in TEXT and kind not in AUTOMATION and p.name not in {"Dockerfile", "Makefile", "go.mod", "Gemfile", ".gitignore", ".dockerignore", ".gitattributes"}:
                skipped.append({"path": path, "reason": "binary-or-unsupported"}); continue
            # Bound the actual read too, even if a file grows between stat and read.
            with p.open("rb") as stream: data = stream.read(max_bytes + 1)
            if len(data) > max_bytes:
                skipped.append({"path": path, "reason": "byte-limit"}); bounded = True; continue
            total_bytes += len(data)
            if b"\0" in data:
                skipped.append({"path": path, "reason": "binary"}); continue
            text = data.decode("utf-8")
            item.update(hash=digest(data), lines=len(text.splitlines()))
            texts[path] = text
        except (OSError, UnicodeError) as exc:
            errors.append({"path": path, "reason": type(exc).__name__})

    def edge(source, target, relation, line=1, confidence="static"):
        if source in nodes and target in nodes:
            edges.append(dict(source=source, target=target, relation=relation, line=line, confidence=confidence))

    def resolve(source, spec):
        if re.match(r"^(?:[a-z]+:|//|#)", spec, re.I): return None
        clean = spec.split("#")[0].split("?")[0]
        norm = os.path.normpath(str(Path(source).parent / clean)).replace(os.sep, "/")
        candidates = [norm, clean.lstrip("/")]
        for c in candidates:
            if c in nodes: return c
            for ext in (".ts", ".tsx", ".js", ".jsx", ".mjs", ".py", "/index.ts", "/index.tsx", "/index.js", "/__init__.py"):
                if c + ext in nodes: return c + ext
        return None

    deps = set()
    for path, text in texts.items():
        p, kind = Path(path), nodes[path]["kind"]
        try:
            if p.suffix == ".toml": parsed[path] = tomllib.loads(text)
            elif p.suffix == ".json": parsed[path] = json.loads(text)
            elif p.suffix in {".yaml", ".yml"} and yaml: parsed[path] = yaml.safe_load(text)
        except (ValueError, TypeError, yaml.YAMLError if yaml else ValueError) as exc:
            finding("invalid-config", path, getattr(exc, "lineno", 1), "high" if kind in AUTOMATION else "medium", "設定の構文エラー", "構造化データとして読み込めません。エラー本文は値の漏出を避けるため保存していません。", "該当ファイルを元のパーサーで検証する", "confirmed")
        data = parsed.get(path)
        if p.suffix in {".yaml", ".yml"} and yaml is None:
            errors.append({"path": path, "reason": "yaml-parser-unavailable"})
        if p.name == "hooks.json" and data is not None:
            valid = isinstance(data, dict) and isinstance(data.get("hooks"), dict)
            if valid:
                for event, matchers in data["hooks"].items():
                    if not isinstance(matchers, list): valid = False; break
                    for matcher in matchers:
                        if not isinstance(matcher, dict) or not isinstance(matcher.get("hooks"), list): valid = False; break
                        for handler in matcher["hooks"]:
                            if not isinstance(handler, dict) or handler.get("type") not in {"command", "mcp_tool", "prompt", "agent"}: valid = False; break
                            if handler.get("type") == "command" and not isinstance(handler.get("command"), str): valid = False; break
            if not valid:
                finding("hook-schema", path, 1, "high", "Hook定義の構造を確認", "Codex hooks.json のイベント・matcher・handler構造として解釈できません。他ツール用であればその形式を確認してください。", "実際に使うクライアントのスキーマで検証する")
        if p.suffix == ".tol":
            finding("unknown-tol", path, 1, "low", ".tol の用途確認", ".tol は対象に含めていますが標準のTOMLとみなしません。", "参照元と使用ツールを確認し、誤記なら .toml への変更を提案する", "confirmed")
        if kind == "agent":
            if p.suffix == ".toml" and isinstance(data, dict):
                for field in ("name", "description", "developer_instructions"):
                    if not isinstance(data.get(field), str) or not data[field].strip():
                        finding("agent-schema", path, 1, "high", "エージェントの必須項目が不足", f"必須項目 {field} が空または不正です。", "必須項目を修正する", "confirmed")
                nodes[path]["name"] = str(data.get("name", p.stem))
                nodes[path]["description"] = "定義を参照して担当範囲を確認"
        if kind == "skill":
            fm = re.match(r"\A---\s*\n(.*?)\n---(?:\s*\n|$)", text, re.S)
            meta = {}
            if fm:
                try:
                    meta = yaml.safe_load(fm.group(1)) if yaml else dict(re.findall(r"^(name|description):\s*(.+)$", fm.group(1), re.M))
                except Exception: meta = {}
            if not isinstance(meta, dict): meta = {}
            for field in ("name", "description"):
                if not isinstance(meta.get(field), str) or not meta[field].strip():
                    finding("skill-schema", path, 1, "medium", "スキルの必須項目が不足", f"frontmatter の {field} を解釈できません。", "SKILL.md の name と description を修正する", "confirmed" if yaml else "review")
            nodes[path]["name"] = str(meta.get("name", p.parent.name)).strip("\"'")
        if p.name == "package.json" and isinstance(data, dict):
            for section in ("dependencies", "devDependencies", "peerDependencies", "optionalDependencies"):
                for dep, version in (data.get(section, {}) if isinstance(data.get(section, {}), dict) else {}).items():
                    if not isinstance(version, str): continue
                    deps.add(dep)
                    depid = f"npm:{dep}"
                    nodes.setdefault(depid, dict(id=depid, path=depid, label=dep, kind="dependency", group="npm", lines=0, size=0, hash=None))
                    edge(path, depid, "declares")
                    if version in {"*", "latest"}:
                        finding("floating-dependency", path, 1, "medium", "依存バージョンが固定されていません", "ワイルドカードまたは latest が指定されています。", "lockfileと更新方針を確認する")
            scripts = data.get("scripts", {})
            if isinstance(scripts, dict):
                for key, command in scripts.items():
                    if isinstance(command, str):
                        for match in re.finditer(r"(?:^|\s)[\"']?([\w./@-]+\.(?:js|mjs|cjs|ts|sh|py))", command):
                            target = resolve(path, match.group(1))
                            if target: edge(path, target, "runs", text[:text.find(command)].count("\n") + 1)
                if any(x in scripts for x in ("postinstall", "preinstall", "install")):
                    finding("install-hook", path, 1, "medium", "インストール時の自動実行", "依存の導入時にライフサイクルスクリプトが実行されます。", "コマンドと依存先を読み取り、必要性と権限を確認する")
        if p.name in {"requirements.txt", "pyproject.toml"}: deps.add("python")
        if p.suffix in {".html", ".htm"}:
            parser = HTMLRefs()
            try: parser.feed(text)
            except Exception: errors.append({"path": path, "reason": "html-parse"})
            for ref, line in parser.refs:
                target = resolve(path, ref)
                if target: edge(path, target, "loads", line)
        if p.suffix == ".py":
            try:
                tree = ast.parse(text)
                for part in ast.walk(tree):
                    if isinstance(part, ast.Import):
                        for alias in part.names:
                            target = resolve(path, alias.name.replace(".", "/"))
                            if target: edge(path, target, "imports", part.lineno)
                    elif isinstance(part, ast.ImportFrom):
                        base = ("../" * max(0, part.level - 1)) + (part.module or "").replace(".", "/")
                        for ref in [base] + [base + "/" + a.name if base else a.name for a in part.names]:
                            target = resolve(path, ref)
                            if target and target != path: edge(path, target, "imports", part.lineno)
                    elif isinstance(part, ast.Call):
                        fn = ast.unparse(part.func)
                        if fn in {"eval", "exec", "pickle.loads", "pickle.load", "os.system"}:
                            finding("python-execution", path, part.lineno, "medium", "入力の実行・逆直列化を確認", "動的実行または危険になり得る逆直列化の呼び出しがあります。", "外部入力が到達するか追跡する。存在だけで脆弱性と断定しない")
                        if fn.startswith("subprocess.") and any(k.arg == "shell" and isinstance(k.value, ast.Constant) and k.value.value is True for k in part.keywords):
                            finding("shell-true", path, part.lineno, "high", "shell=True のコマンド実行", "入力がコマンド構文へ入る場合、コマンド注入につながります。", "引数配列への変更または入力が固定であることを検証する")
            except SyntaxError as exc:
                finding("python-parse", path, exc.lineno, "low", "Python構文を解析できません", "静的な依存関係が不完全です。Pythonバージョン差も確認してください。", "使用バージョンで構文を検証する", "confirmed")
        if kind in AUTOMATION | {"doc", "config"}:
            # Markdown links are references, not necessarily executed dependencies.
            for match in re.finditer(r"\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)", text):
                ref = match.group(1).strip("<>")
                if re.match(r"^(?:[a-z]+:|//|#)", ref, re.I): continue
                target = resolve(path, ref)
                line = text[:match.start()].count("\n") + 1
                if target: edge(path, target, "references", line)
                elif kind in AUTOMATION and not re.search(r"[<>*{}$]", ref) and Path(ref).suffix:
                    finding("unresolved-reference", path, line, "low", "ローカル参照を解決できません", "削除・移動・監査範囲外・除外のいずれかです。", "参照先の存在とスコープを確認し、必要ならリンクを修正する")
            for match in re.finditer(r"(?:^|[\s\"'`])([\w./@-]+\.(?:js|mjs|cjs|ts|tsx|py|sh|toml|tol|json|jsonc|md|yaml|yml|csv))(?=[\s\"'`]|$)", text):
                target = resolve(path, match.group(1))
                if target and target != path: edge(path, target, "references", text[:match.start()].count("\n") + 1)

        security_patterns = [
            ("private-key", r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----", "critical", "秘密鍵の埋め込み候補", "鍵の値は保存していません。", "実データなら失効・再発行し、履歴への混入も確認する"),
            ("credential-literal", r"(?i)(?:api[_-]?key|secret|password|access[_-]?token)\s*[:=]\s*[\"'](?!\$|<|your|example|test|dummy|placeholder|process\.)([A-Za-z0-9_+/=-]{16,})[\"']", "high", "認証情報らしい固定文字列", "候補値はレポートへ出力していません。テスト値などの誤検知があり得ます。", "実際の秘密値か確認し、必要ならローテーションする"),
            ("remote-pipe-shell", r"(?:curl|wget)\b[^\n]*\|\s*(?:sh|bash|zsh)\b", "high", "取得したコードの即時実行", "外部取得とシェル実行が直結しています。文書中の例も候補に含みます。", "取得元・固定バージョン・整合性検証と必要性を確認する"),
            ("permission-bypass", r"danger-full-access|--dangerously-bypass-approvals-and-sandbox|--dangerously-bypass-hook-trust", "high", "権限・信頼確認の迂回指定", "実行設定なのか説明文なのかの確認が必要です。", "実際の適用箇所と最小権限を確認する"),
            ("tls-disabled", r"(?:NODE_TLS_REJECT_UNAUTHORIZED\s*[=:]\s*[\"']?0|verify\s*=\s*False|rejectUnauthorized\s*:\s*false)", "high", "TLS検証の無効化候補", "通信先の真正性を検証しない設定があります。", "テスト用途への限定または検証の復元を確認する"),
        ]
        for rule, pattern, severity, title, detail, action in security_patterns:
            for match in re.finditer(pattern, text):
                finding(rule, path, text[:match.start()].count("\n") + 1, severity, title, detail, action)

    # One trusted TypeScript parser process; no target config or package scripts are executed.
    js_paths = {p: text for p, text in texts.items() if Path(p).suffix in JS and not p.startswith("@context")}
    js_status = "not-needed"
    if js_paths:
        try:
            request = dict(root=str(root), files=js_paths, configs={p: t for p, t in texts.items() if Path(p).suffix in {".json", ".jsonc"} and not p.startswith("@context")}, inventory=[p for p in nodes if not p.startswith(("@context", "npm:"))])
            proc = subprocess.run([node, str(HERE / "scripts/js-analyze.mjs")], input=json.dumps(request), capture_output=True, text=True, timeout=120, check=True)
            result = json.loads(proc.stdout)
            for e in result["edges"]: edge(**e)
            for f in result["findings"]: finding(**f)
            validated_configs = set(result.get("validated_configs", []))
            findings[:] = [f for f in findings if not (f["rule"] == "invalid-config" and f["path"] in validated_configs)]
            errors.extend(result.get("errors", []))
            js_status = "typescript-ast"
        except (OSError, subprocess.SubprocessError, ValueError):
            js_status = "unavailable"
            errors.append({"path": "(JS/TS)", "reason": "trusted-parser-unavailable; run npm ci --ignore-scripts in toolkit"})

    # Connect explicit $skill references and skill-local support files.
    by_name = defaultdict(list)
    for p, n in nodes.items():
        if n["kind"] in {"skill", "agent"}: by_name[n.get("name", n["label"])].append(p)
    for path, text in texts.items():
        if nodes[path]["kind"] in AUTOMATION:
            for pattern in (r"\$([a-z][a-z0-9-]*)", r"(?i)skill tool with\s+[\"'`]([a-z][a-z0-9-]*)[\"'`]"):
                for m in re.finditer(pattern, text):
                    for target in by_name.get(m.group(1), []):
                        if target != path: edge(path, target, "uses-skill", text[:m.start()].count("\n") + 1)
            for name, paths in by_name.items():
                for target in paths:
                    if nodes[target]["kind"] == "agent" and target != path:
                        m = re.search(r"(?<![\w-])" + re.escape(name) + r"(?![\w-])", text)
                        if m: edge(path, target, "references-agent", text[:m.start()].count("\n") + 1)
            if nodes[path]["kind"] == "skill":
                for other in list(nodes):
                    if other != path and other.startswith(str(Path(path).parent) + "/"):
                        edge(path, other, "bundles")
    # De-duplicate graph edges without conflating relation types or evidence locations.
    edges = list({(e["source"], e["target"], e["relation"], e["line"]): e for e in edges}.values())
    indegree = Counter(e["target"] for e in edges)
    outdegree = Counter(e["source"] for e in edges)
    for n in nodes.values(): n.update(incoming=indegree[n["id"]], outgoing=outdegree[n["id"]])

    recommendations = []
    def rec(action, title, paths, reason, confidence="review"):
        recommendations.append(dict(action=action, title=title, paths=paths, reason=reason, confidence=confidence, next_step="実行前に担当範囲・利用実績・参照元を確認する" if action in {"merge", "retire-review"} else "既存の担当を拡張するか、必要な範囲だけ追加する"))
    for name, paths in by_name.items():
        if len(paths) > 1:
            rec("merge", f"同名定義「{name}」の優先関係を整理", paths, "同じ名前の定義が複数あります。用途・スコープ差を確認するまで削除は保留。", "confirmed")
    bodies = defaultdict(list)
    for p, t in texts.items():
        if nodes[p]["kind"] == "skill":
            body = re.sub(r"\A---.*?\n---", "", t, flags=re.S).strip()
            if body: bodies[digest(re.sub(r"\s+", " ", body))].append(p)
    for paths in bodies.values():
        if len(paths) > 1: rec("merge", "同一手順のスキルを統合候補にする", paths, "frontmatterを除く手順が一致します。別名による呼び出し用途の有無を確認してください。", "confirmed")
    automation_text = "\n".join(t for p, t in texts.items() if nodes[p]["kind"] in {"skill", "agent"}).lower()
    capability_rules = [
        ("react" in deps or any(Path(p).suffix == ".tsx" for p in texts), r"react|フロントエンド", "Reactの責務・状態・アクセシビリティを点検する担当"),
        ("three" in deps, r"three|webgl|3d", "Three.jsの描画性能・GPUリソース解放を点検する担当"),
        (any(n["kind"] == "source" for n in nodes.values()), r"security|セキュリティ|脆弱性", "セキュリティ境界と依存の更新を点検する担当"),
        (any(n["kind"] == "hook" for n in nodes.values()), r"hooks?|フック", "hooksの実行条件・権限・失敗時挙動を点検する担当"),
    ]
    for applies, pattern, title in capability_rules:
        if applies and not re.search(pattern, automation_text): rec("add", title, [], "対象技術または実行面は存在しますが、対応する明示的なスキル・エージェントの記述を発見できません。暗黙の能力までは判定しません。")
    fit = []
    for p, n in nodes.items():
        if n["kind"] in {"skill", "agent"}:
            problems = [f["rule"] for f in findings if f["path"] == p]
            fit.append(dict(path=p, name=n.get("name", n["label"]), kind=n["kind"], incoming=indegree[p], status="要修正" if problems else "手動評価待ち", usage="利用実績未取得", signals=problems))
            if "agent-schema" in problems or "skill-schema" in problems:
                rec("repair", "読み込めない定義を修復", [p], "必須項目の不備を検出しました。修復不能で代替がある場合のみ廃止を検討してください。", "confirmed")
            elif indegree[p] == 0:
                rec("retire-review", "静的参照がない定義の利用実績を確認", [p], "参照が見つからないだけでは不要と判断できません。暗黙起動・手動起動・他プロジェクトでの利用を確認し、不要と判明した場合にのみ削除候補にする。", "unknown")

    findings.sort(key=lambda f: (-SEVERITY[f["severity"]], f["path"], f["line"]))
    report = dict(schema_version=1, generated_at=datetime.now(timezone.utc).isoformat(), root=str(root), context_roots=[str(p) for _, p in roots[1:]],
                  nodes=sorted(nodes.values(), key=lambda n: n["id"]), edges=edges, findings=findings, recommendations=recommendations, fit=fit,
                  coverage=dict(text_files=len(texts), bytes_read=total_bytes, js_parser=js_status, yaml_parser="safe-load" if yaml else "unavailable", skipped=skipped, errors=errors, bounded=bounded,
                                complete=not (bounded or errors), exclusions=sorted(SKIP_DIRS), configured_exclusions=exclusions,
                                selection_fingerprint={p: nodes[p]["hash"] for p in texts if Path(p).name == ".gitignore"},
                                analysis_fingerprint=digest(Path(__file__).read_bytes() + (HERE / "scripts/js-analyze.mjs").read_bytes()),
                                limits=dict(max_files=max_files, max_bytes=max_bytes, max_total_bytes=max_total_bytes),
                                limitations=["静的な依存・参照図であり、実行時呼び出しや動的ロードの全体は未観測", "セキュリティは兆候検出。到達性・悪用可能性・最新CVEは未検証", "適合性は語句・参照・構文の根拠。最適性と不要性には実利用の評価が必要", "外部スコープのJS/TSは依存解析せず、設定・手順と静的兆候を点検"]),
                  stats=dict(files=sum(n["kind"] != "dependency" for n in nodes.values()), dependencies=len(deps), kinds=dict(Counter(n["kind"] for n in nodes.values())), findings=dict(Counter(f["severity"] for f in findings))),
                  delta=None)
    if baseline: report["delta"] = compare(baseline, report)
    return report


def compare(before, after):
    if before.get("schema_version") != 1 or after.get("schema_version") != 1: raise ValueError("未対応のレポート形式です")
    if before.get("root") != after.get("root") or before.get("context_roots", []) != after.get("context_roots", []):
        raise ValueError("異なる監視対象の基準値とは比較できません")
    if before["coverage"].get("configured_exclusions") != after["coverage"].get("configured_exclusions"):
        raise ValueError("除外条件が変わっています。新しい基準値を別フォルダに作成してください")
    if before["coverage"].get("limits") != after["coverage"].get("limits"):
        raise ValueError("読み取り上限が変わっています。新しい基準値を別フォルダに作成してください")
    old = {n["id"]: n for n in before["nodes"] if n["kind"] != "dependency"}
    new = {n["id"]: n for n in after["nodes"] if n["kind"] != "dependency"}
    changed = sorted(p for p in old.keys() & new.keys() if old[p].get("hash") and new[p].get("hash") and old[p]["hash"] != new[p]["hash"])
    oldf, newf = {f["id"]: f for f in before["findings"]}, {f["id"]: f for f in after["findings"]}
    reliable = before["coverage"]["complete"] and after["coverage"]["complete"] and all(before["coverage"].get(k) == after["coverage"].get(k) for k in ("exclusions", "selection_fingerprint", "analysis_fingerprint"))
    return dict(added=sorted(new.keys() - old.keys()), removed=sorted(old.keys() - new.keys()) if reliable else [], changed=changed,
                new_findings=[newf[k] for k in sorted(newf.keys() - oldf.keys())], resolved_findings=[oldf[k] for k in sorted(oldf.keys() - newf.keys())] if reliable else [],
                control_changes=[p for p in changed if new[p]["kind"] in AUTOMATION | {"config", "package"}], reliable=reliable,
                note="行の移動は新規・解消として見える場合があります。実修正の確認が必要です。" if reliable else "読取不完全、除外条件または解析器の変更があるため削除・解消を判定しません")
