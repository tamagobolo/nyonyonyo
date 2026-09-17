# Kiro 開発フローガイド

既存プロジェクトへ Kiro を導入し、マネージャー・開発者・新任シニアエンジニアが、同じ要件と検証結果を使って判断するための実務ガイドです。

**入口は [ブラウザで読むガイド](guide.html)。** 編集・レビューの原本はこのフォルダの Markdown です。調査基準日は **2026-09-17**。対象は Kiro を使う開発チームであり、Kiro 製品そのものの社内開発プロセスを説明するものではありません。

## 読む順番

| 読み手 | 最初に読む | 次に使う |
|---|---|---|
| マネージャー | [マネージャーの作業フロー](docs/01-manager-workflow.md) | [変更依頼テンプレート](templates/change-brief.md) |
| 開発者 | [開発者の作業フロー](docs/02-developer-workflow.md) | [指示文集](docs/04-instruction-playbook.md) |
| 初参加のシニアエンジニア | [90分の導入手順](docs/03-senior-onboarding.md) | [プロジェクト把握シート](templates/project-context.md) |
| 導入責任者 | [Kiro の機能と役割](docs/00-kiro-map.md) | [導入・保守の手順](docs/07-adoption-and-maintenance.md) |

## 共通の進め方

課題と成功条件 → コードの現状確認 → 要件 → 設計候補の比較 → 設計とタスクの確定 → 小さな実装 → 検証・レビュー → 受入・公開・効果確認。

人格スキルは「設計候補の比較」に使います。発散した案をそのまま実装せず、採用した考えを要件・設計へ反映します。**事業上の受入判断、技術判断、Kiro の操作権限は別々に扱います。**

| 成果物 | 用途 |
|---|---|
| [マネージャー図](diagrams/manager-workflow.html) / [開発者図](diagrams/developer-workflow.html) | 担当と受け渡しの全体像。単体のオフライン HTML |
| [一連の記入例](docs/05-worked-example.md) | 既存 SaaS の CSV 出力改善を例に、要件から検証まで追う |
| [3つのスキルの設計と適用記録](docs/06-skill-design.md) | Persona・Detour・Thriller を今回のフローへどう適用したか |
| [.kiro/skills](.kiro/skills) | Kiro に読み込ませられる3つの再構成スキル |
| [出典と確認範囲](sources.md) | 公式仕様、独自の運用提案、未検証部分の区別 |

## 本書の前提

ユーザー指定により **既存プロジェクトへの導入**を対象とします。開発者は IDE 中心、マネージャーは文書・PR と必要に応じた Kiro Web を利用する想定です。GitHub がない場合もローカル IDE で同じ成果物を作成できます。

対象プロジェクトのソースコード、組織の承認規程、CI、デプロイ環境は未提供です。そのため、本書の役割分担・判断点・ファイル命名・時間配分は提案であり、導入先の現行手順に合わせて決めます。サンプルの数値・パス・担当名を実在のものとして扱わないでください。

「Detour・Persona・Thriller」は [Cocoda の事例記事](https://cocoda.design/varhirac/p/pe1f4d8e389b2) に着想を得ています。原本の GitHub 配布先は確認できていないため、同梱スキルは **独自再構成**です。特に Thriller の具体的な評価手順は本書で定義したもので、記事の原実装を再現したという主張はしません。

## すぐ使う

1. この `kirodev` フォルダを Kiro IDE で開き、本書を読みます。
2. 実プロジェクトでは既存の `.kiro/` を確認し、同梱の3つのスキルフォルダだけを `.kiro/skills/` にコピーまたはローカルインポートします。[導入手順](docs/07-adoption-and-maintenance.md)に従って認識を確認します。
3. [把握シート](templates/project-context.md)を対象コードの証拠で埋めます。
4. 低リスクの変更1件で [指示文集](docs/04-instruction-playbook.md)を試し、要件IDとテストを対応させます。

図の本文は日本語です。Archify の操作 UI と HTML の言語属性は製品の対応言語に従い英語です。文書閲覧用 `guide.html` の言語は日本語です。
