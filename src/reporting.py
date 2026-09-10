"""Offline reports. Source text is never part of the public report schema."""
import html
import json
import os
from pathlib import Path
import tempfile

HERE = Path(__file__).resolve().parents[1]


def atomic_write(path, text):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    if path.is_symlink(): raise ValueError("出力ファイルがシンボリックリンクです")
    fd, temporary = tempfile.mkstemp(prefix=".observatory-write-", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as stream:
            stream.write(text); stream.flush(); os.fsync(stream.fileno())
        os.replace(temporary, path)
    finally:
        if os.path.exists(temporary): os.unlink(temporary)


def markdown(report):
    def clean(s): return str(s).replace("\n", " ").replace("|", "\\|").replace("`", "'")
    cov, stats = report["coverage"], report["stats"]
    lines = ["# Codebase Observatory", "", f"対象: `{clean(report['root'])}`", "", f"取得日時: {report['generated_at']}", "",
             f"{stats['files']} ファイル / {cov['text_files']} テキスト解析 / {len(report['edges'])} 関係 / {len(report['findings'])} 要確認事項", "",
             f"読み取り状態: {'設定した範囲を完了' if cov['complete'] else '不完全（除外・エラー詳細を確認）'}。JS/TS: {cov['js_parser']}。YAML: {cov['yaml_parser']}。", "",
             "## セキュリティ・設定の確認事項", "", "|重要度|場所|兆候|次の確認|", "|---|---|---|---|"]
    for f in report['findings']:
        lines.append(f"|{f['severity']}|`{clean(f['path'])}:{f['line']}`|{clean(f['title'])}|{clean(f['action'])}|")
    if not report['findings']: lines.append("|—|—|今回の検出ルールに該当なし|安全性全体を保証するものではありません|")
    lines += ["", "## スキル・エージェントの適合性と提案", ""]
    for r in report['recommendations']:
        lines += [f"- **{r['action']}: {clean(r['title'])}** — {r['reason']}", f"  対象: {', '.join('`' + clean(p) + '`' for p in r['paths']) or '今回のコードベース'}。確度: {r['confidence']}。{r['next_step']}"]
    if not report['recommendations']: lines.append("自動ルールからの提案なし。実作業を通した適合性評価は別途必要です。")
    if report.get('delta'):
        d = report['delta']
        lines += ["", "## 前回との差分", "", f"追加 {len(d['added'])} / 変更 {len(d['changed'])} / 削除 {len(d['removed'])} / 新しい兆候 {len(d['new_findings'])}", "", d['note']]
        lines += [f"- 制御設定の変更: `{clean(p)}`" for p in d['control_changes']]
    lines += ["", "## 観測範囲と未確認事項", ""] + [f"- {s}" for s in cov['limitations']]
    lines += [f"- 除外ディレクトリ: {', '.join(cov['exclusions'])}", f"- 読み取りエラー: {len(cov['errors'])}。スキップ: {len(cov['skipped'])}。詳細は report.json / HTML の観測範囲に保存。", ""]
    return "\n".join(lines)


def render(report):
    js = (HERE / 'assets/viewer.js').read_text()
    css = (HERE / 'assets/viewer.css').read_text()
    payload = json.dumps(report, ensure_ascii=False, separators=(',', ':')).replace('&', '\\u0026').replace('<', '\\u003c').replace('>', '\\u003e').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    # Only trusted, build-produced assets enter executable/style contexts.
    if '</script' in js.lower() or '</style' in css.lower(): raise ValueError('不正な埋め込みアセット')
    return f'''<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src 'none'; connect-src 'none'; base-uri 'none'; form-action 'none'">
<title>Codebase Observatory — {html.escape(Path(report['root']).name)}</title><style>{css}</style></head>
<body><div id="root"><p>構造マップを読み込んでいます。</p></div><noscript>JavaScriptが無効です。同じフォルダのreport.mdをお読みください。</noscript>
<script id="observatory-data" type="application/json">{payload}</script><script>{js}</script></body></html>'''


def write_report(report, out):
    out = Path(out)
    # Build HTML before replacing any existing file; a missing bundle keeps the prior report intact.
    document = render(report)
    atomic_write(out / 'report.html', document)
    atomic_write(out / 'report.md', markdown(report))
    atomic_write(out / 'report.json', json.dumps(report, ensure_ascii=False, indent=2) + '\n')
