# 共通ツールの構造と説明図の根拠

[説明図HTML](../examples/observatory.html) は、コードベースを読み取る共通ツール自身の代表的な流れを示す。図の [型付きJSON](../examples/observatory.architecture.json) も配布する。2026-09-10に確認した内容で、コアの観測用3スキルと3専門エージェントを中心に描いている。

|図の項目|実ファイルと責務|
|---|---|
|親が手順を選ぶ|[README](../README.md) のスキルとエージェントの対応、および [共通手順](../skills/codebase-atlas/references/common-workflow.md)|
|専門担当が評価を返す|[構造担当](../agents/codebase_cartographer.toml)、[監査担当](../agents/codebase_sentinel.toml)、[適合性担当](../agents/agent_fit_reviewer.toml)|
|CLIが処理を制御|[observatory.py](../observatory.py) のscan/watch/compare、結果保存、履歴、終了コード|
|静的解析を集約|[scanner.py](../src/scanner.py) のscan、読取範囲、Python AST、関係・兆候・適合性候補|
|JS/TSの構文解析|[js-analyze.mjs](../scripts/js-analyze.mjs) へJSONで入力し、依存や診断結果を受け取る|
|レポートを保存|[reporting.py](../src/reporting.py) のrender、write_report、atomic_write|
|Viewerを埋め込む|[ビルド処理](../scripts/build.mjs) がReact/Three.jsの [UI](../viewer/main.jsx) をassetsへまとめ、reportingがHTMLへ埋め込む|
|指定した対象を読む|CLIの `--root` / `--context-root` とscannerの読取・除外処理|

実線はコードで確認した処理・データの関係、点線は文書に記載された運用を表す。scannerからreportingへ結果を渡すのはCLIであり、図も「CLI経由」と表示する。静的な確認に基づく説明で、対象の実行時挙動や各専門エージェントの実働を観測した図ではない。

Archify v2.16.0で生成し、showcase 9/9、0 errors・0 warnings。4種類の画面サイズで表示を確認した。Google Fontsへの外部資産リンクを配布テンプレートから除去した後、同じJSONから再生成している。日本語の本文・ラベルを使い、Viewer UIは英語。詳細は [検証記録](publication-verification.md)。
