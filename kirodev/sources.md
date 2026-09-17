# 出典・確認範囲

確認日：**2026-09-17（日本時間）**。公式ページと、ユーザーが指定した X 投稿のリンク先を閲覧しました。Kiro の画面で本書の操作を実行した確認はしていません。

## 公式の一次資料

| ID | 資料 | 本書で確認したこと |
|---|---|---|
| S01 | [Kiro 公式](https://kiro.dev/) / [Docs](https://kiro.dev/docs/) | IDE・CLI・Web などの利用面、機能一覧。Docs は IDE 1.x / CLI 3.0 の案内を掲載 |
| S02 | [Specs](https://kiro.dev/docs/specs/) | 基本文書、Feature / Bugfix、開始手順、タスク依存と並列実行 |
| S03 | [Feature Specs](https://kiro.dev/docs/specs/feature-specs/) | Requirements-First、Design-First、EARS形式の要件 |
| S04 | [Bugfix Specs](https://kiro.dev/docs/specs/bugfix-specs/) | 現在・期待・維持する動作、原因調査、回帰確認 |
| S05 | [Quick Spec](https://kiro.dev/docs/specs/quick-spec/) | 三文書を一括生成し、フェーズ間の承認を省く方式 |
| S06 | [Steering](https://kiro.dev/docs/steering/) | product / tech / structure、スコープ、取り込み方式、カスタムエージェントの参照 |
| S07 | [Agent Skills](https://kiro.dev/docs/skills/) | 配置、SKILL.md形式、呼び出し、インポート、利用面 |
| S08 | [Hooks](https://kiro.dev/docs/hooks/) | イベントとアクション、トリガーごとの対応差。概要表と詳細表の差に留意 |
| S09 | [Permissions](https://kiro.dev/docs/permissions/) | 操作権限、IDE の自律設定との関係。自然言語の依頼範囲と強制的な制限は別 |
| S10 | [Web：Working with the agent](https://kiro.dev/docs/web/using-the-agent/) | セッション開始、リポジトリ選択、対話、PR 作成 |
| S11 | [Web：GitHub](https://kiro.dev/docs/web/github/) | アプリとユーザーの権限、作業委任、重複タスク、PR と保護ブランチ |

確認時の公式ページでは、Specs の機能対応も利用面ごとに異なります。例えば Analyze Requirements と Correctness の対応範囲は同じではありません。本書ではこれらの機能が全利用面で使えることを前提にせず、通常の要件レビューと既存テストで進められる構成にしています。[対応表](https://kiro.dev/docs/specs/)

## 発想の出典

| ID | 資料 | 利用した範囲 |
|---|---|---|
| S12 | [元の X 投稿](https://x.com/mayugelion/status/2099656127894237392) | 対象記事の特定 |
| S13 | [Cocoda：デザイナー人格の skill 化](https://cocoda.design/varhirac/p/pe1f4d8e389b2) | Detour・Persona・Thriller の名称と、発散後に制約へ戻して収束する考え方 |

S13 の原本スキルと GitHub 配布先は確認できていません。同梱の3つの `SKILL.md` は独自再構成です。実施可能な手順、テンプレート、例題、判断点は本書の著作として作成しました。

## 本書が提案した運用

G0〜G4、R/T番号、役割別の責任分担、90分の導入計画、変更記録のファイル構成、人格スキルの適用順、CSVの練習例は、本書の提案です。Kiro の必須設定・公式の開発規程・カナリー社の実運用としては扱いません。

2つの HTML 図はこの提案運用を図式化したものです。図のノード間でラベルを省略した線は、隣接工程の順序のみを表します。文書の受け渡しや判断条件を表す線にはラベルを付けています。実システムの呼び出し経路を示す図ではありません。

## 未検証の範囲

- 特定リポジトリの構造、起動、テスト、CI、公開手順。
- ユーザー環境の Kiro バージョン、プラン、GitHub 連携、組織の権限。
- Kiro 実機での同梱スキル認識・実行と、実案件での効果。
- 新任者がこのガイドを利用するオンボーディングの実測。

文書、内部リンク、スキル形式、図の生成とブラウザ表示の検査結果は [確認記録](validation.md) に別途記載します。
