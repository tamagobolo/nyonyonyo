# 確認記録

作成日：**2026-09-17**。文書・スキル・図の確認記録です。実プロジェクトや Kiro 実機での検証とは区別します。

## 文書とスキル

| 対象 | 確認結果 |
|---|---|
| Markdown 18ファイル | 相対リンクの参照先が存在することを確認。参照切れ0件 |
| `guide.html` | 18章を生成。内部アンカーの参照先とID重複を検査。参照切れ・ID重複0件 |
| ガイドの依存 | 閲覧に必要な外部スクリプト・画像・CSSの読み込みなし。出典リンクは外部ページを開く |
| 3つの `SKILL.md` | `skill-creator` の `quick_validate.py` で3件すべて `Skill is valid!`。形式の確認であり Kiro 実行試験ではない |
| 役割・要件の対応 | G0〜G4 の役割と差し戻し先、CSV記入例の R-1〜R-6 と T-0〜T-4 の対応を読み合わせ |
| 出典と未確認 | 公式仕様・独自運用・架空例・再構成スキルの区別を記載 |

## ガイドのブラウザ確認

macOS の Brave Browser でローカル HTML を表示し、1652×918 のデスクトップ幅と390×844のモバイル幅を目視確認しました。どちらも `scrollWidth = innerWidth` で、文書全体の横方向のはみ出しはありません。縦方向は長文ガイドとしてスクロールします。幅が足りない表は表の範囲で横スクロールできます。

- 「90分」の検索で4章へ絞り込めることを確認。
- 絞り込みで非表示になった「マネージャー」へ目次から移動すると、検索を解除し18章へ戻ることを確認。
- モバイル幅で新任シニアの本文・表を表示確認。
- 指示文のコピーボタンが「コピー済み」へ変わることを確認。
- 印刷/PDF保存、および `file://` でのクリップボード操作は未検証。ブラウザがクリップボード書き込みを拒否した場合の範囲選択処理を実装しています。

## フロー図

両図とも Archify の `validate` と `deliver` で showcase の **9/9項目、エラー0件、警告0件**を確認しました。最終 HTML をブラウザで確認し、線・ラベル・カードの重なり、テーマ切替、検索、工程へのフォーカス、詳細パネルを閉じた際の解除を確認しました。表示は通常の読書状態・静止表示です。

| 表示領域（CSS px） | マネージャーの文書寸法 | 開発者の文書寸法 | 収まり |
|---|---|---|---|
| 1440×900 | 1440×900 | 1440×900 | 両方合格 |
| 1600×1000 | 1600×1000 | 1600×1000 | 両方合格 |
| 1920×1080 | 1920×1080 | 1920×1080 | 両方合格 |
| 2048×1320 | 2048×1320 | 2048×1320 | 両方合格 |

全4サイズをライト表示で測定し、1440×900・2048×1320はライト/ダーク両方の画面を取得して目視確認しました。画面は会話のツール出力で確認し、PNGの添付ファイルは保存していません。自動 `visual-check` の実行結果ではなく、ブラウザツールでの測定・目視記録です。

初回の縦はみ出しに対し、工程名と役割欄で説明済みの凡例を省き、ノードの横幅を調整しました。ノード内の文字サイズは変更していません。目視確認開始後の調整はマネージャー図1回、開発者図2回です。

[ブラウザ確認記録 JSON](diagrams/visual-review.json)、[マネージャーの生成記録](diagrams/manager-delivery.json)、[開発者の生成記録](diagrams/developer-delivery.json)を同梱しています。図のモバイル表示、画像/動画エクスポート、プレゼンテーションモードは未検証です。

公開用コピーでは、生成記録に含まれるローカル絶対パスを `kirodev/` 基準の相対パスへ置き換えています。フロー図の原本 JSON・HTML と SHA-256 は変更していません。

## 図の引渡し記録

```text
diagram_type: workflow
output: diagrams/manager-workflow.html
specification_sha256: b8d0d6fc5723c987871ae729afc84f1b5099e19e4b083149199ce8fd2754b5da
artifact_sha256: cf9992736f59e861d77f70d26a76dd21c865e6f382d9ad13c01cae8bf4712722
validation: 9/9 showcase, 0 errors, 0 warnings
visual_review: passed
correction_rounds: 1
```

```text
diagram_type: workflow
output: diagrams/developer-workflow.html
specification_sha256: 3bb99579518b3d869712f257fb32fc9c7f674b4cdbde5a3abe598752fdad4621
artifact_sha256: 36421fac6bdef11c8bf60edb4d24909c357326be540b96d28da5dc294c730525
validation: 9/9 showcase, 0 errors, 0 warnings
visual_review: passed
correction_rounds: 2
```

## 再生成

Markdown を編集した後は、Node.js と `marked` が使える環境で次を実行します。生成後の HTML 自体に外部依存はありません。

```sh
node scripts/build-guide.mjs
# marked を別の場所から読み込む場合
node scripts/build-guide.mjs /path/to/marked/lib/marked.esm.js
```

フロー図は `diagrams/*.json` のうち `*-workflow.json` が原本です。Archify の `validate workflow` と `deliver workflow` で再生成し、HTML を再度目視確認します。図を更新した場合は、そのファイルのハッシュ値と確認記録も更新します。

## 実プロジェクトへの適用時に残る確認

同梱スキルが利用する Kiro で認識・実行されること、対象コードの構造、テスト、CI、公開手順は導入先で確認します。対象リポジトリが未提供のため、これらを成功済みとはしていません。[導入手順](docs/07-adoption-and-maintenance.md)に小さな試行の進め方を記載しています。
