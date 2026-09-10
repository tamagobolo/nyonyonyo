# 検証した範囲

2026-09-10にmacOS、Codex CLI 0.153.4、Python 3.12、Node.js 24で確認した。以下は完了した検証の範囲を記録し、未実施の保証と区別する。

## ツール本体

初回実装時に14テストが合格した。JS/TSとPythonの構文解析、2,500モジュールの依存、設定・スキル・エージェント・Hookへの参照、秘密値の非出力、Gitignoreと読取境界、差分比較、変更監視、導入の再実行と既存定義保護を確認した。

React/Three.jsのビルドと実ブラウザーでの2D/3D表示、検索、選択、詳細、390px幅を確認した。WebGLを強制停止する試験、全言語の解析、最新CVEの網羅監査、実行時の依存・権限の証明は含まない。

## スキルと導入

15スキルすべてがCodexの形式検証を通り、Codex app-serverのskills/listでuserスコープ・enabled=trueとして発見された。専門担当は3つの読み取り専用エージェントで、通常は親のモデル設定を引き継ぐ。

スキル追加時には、参照切れ・不正なUIメタデータの検出、配布元不足・既存定義との衝突で部分導入しないこと、全登録スキルの導入を再実行できることを3テストで確認した。

`scripts/check_skills.py` は登録スキルの名前、description、表示メタデータ、到達するMarkdownのローカルリンクを検査する。外部URL、コード例中のパス、アンカー、スキルの実際の判断品質や消費トークンは対象外。

## 同梱の図と資料補助

[構造説明図](../examples/observatory.html) はArchify v2.16.0のshowcase 9/9、0 errors・0 warnings。最終HTMLを1440×900、1600×1000、1920×1080、2048×1320で確認し、HTML/CSS/ブラウザーDOMの外部資産参照は0。最小画面のlight/dark、最大画面のlightを目視した。

検索、詳細表示、接続先への移動、閉じる操作、PNG書き出しは外部フォント除去前の同じ図で確認し、フォント除去後は表示確認を行った。専用のvisual-checkは実行せず、CUAによるブラウザー確認を採用した。検証用サーバーは停止済み。

資料補助では16:9 HTML/PPTXを検査器が通し、HTMLタイトルのプレースホルダーと4:3 PPTXを検出した。HTML生成器は4枚のひな型を生成した。PPTXの実レンダリング、全規約の網羅性、check_layout.mjs、PDF出力はこの確認に含まない。

## 別環境で確認するコマンド

公開用パッケージでは、Gitの登録対象だけを別フォルダへ展開して15スキルの形式・参照を再確認し、その配置から別のプロジェクトへ15スキル・3エージェントを導入した。再実行は変更なし、同梱Archifyのdoctorも成功。スキルの実行資産がGitの除外規則で欠落していないこと、公開する説明図が表示確認済みのHTMLと同一であることを確認した。

READMEの手順で依存を用意した後、このリポジトリのルートで実行する。

```bash
.venv/bin/python scripts/check_skills.py
.venv/bin/python scripts/install.py --scope project --project /absolute/path/to/test-project --dry-run
./obs scan --root /absolute/path/to/codebase
```

登録スキルを変更した場合は形式・参照・該当する補助の動作を確認する。解析器など広い影響がある変更や明示されたチェック要件がある場合は `npm test` を実行する。変更や新たな懸念がなければ、同じフルテストやUIビルドを繰り返さない。

費用・速度・トークン削減率、全スキルのLLMベンチマーク、すべてのコードベースへの適合は未測定。出典と利用条件は [third_party](../third_party/README.md)、ブログ・写真からの要件は [requirements-sources.md](requirements-sources.md) を参照する。
