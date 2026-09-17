# 出典と確認範囲

確認日：2026-09-17。実ファイルの調査、公式資料の仕様、チーム運用の提案を分けて記載しています。

## このワークスペースで確認した根拠

ローカルの親フォルダは Git リポジトリではなく、共有先のチェックアウト `nyonyonyo/` は `tamagobolo/nyonyonyo` を remote としています。公開資料では個人の絶対パスや、今回と無関係なプロジェクト一覧を載せていません。

コードの調査基準はコミット `fc2ee7929bd4838272a292f58ded856b275da8b3` です。下のリンクは基準を固定しており、後続の変更が自動反映されるものではありません。

| 確認内容 | 根拠 |
| --- | --- |
| 最小の変更と検証の方針 | [AGENTS.md](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/AGENTS.md) |
| 共通ツールと対象側の責任の分離 | [common-workflow.md](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/skills/codebase-atlas/references/common-workflow.md) |
| 共有プロジェクト・配布スキルの構成 | [README.md](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/README.md) |
| 実行環境と build / test の定義 | [package.json](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/package.json) |
| 起動と CLI の分岐 | [obs](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/obs)、[observatory.py](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/observatory.py) |
| 解析・比較と出力 | [scanner.py](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/src/scanner.py)、[reporting.py](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/src/reporting.py) |
| JS / TS 解析と画面資産の生成 | [js-analyze.mjs](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/scripts/js-analyze.mjs)、[build.mjs](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/scripts/build.mjs) |
| テストの存在と対象 | [test_observatory.py](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/tests/test_observatory.py)、[test_integration.py](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/tests/test_integration.py) |
| 既存の構造説明 | [architecture.md](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/docs/architecture.md) |
| System Atlas の実行環境とコマンド | [design/package.json](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/design/package.json) |
| 外部取り込みの出典・権利表記 | [ponytail/LICENSE](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/ponytail/LICENSE) とルート README |
| SAP GUI の対象環境 | [SAPGUI/README.md](https://github.com/tamagobolo/nyonyonyo/blob/fc2ee7929bd4838272a292f58ded856b275da8b3/SAPGUI/README.md) |

## Codex の仕様

| 公式資料 | 本版で参照した内容 |
| --- | --- |
| [スキルの作成](https://learn.chatgpt.com/ja-JP/docs/build-skills) | SKILL.md の名前と説明、明示的な呼出、作業ディレクトリからリポジトリルートまでの `.agents/skills` の探索 |
| [AGENTS.md によるカスタム指示](https://learn.chatgpt.com/ja-JP/docs/agent-configuration/agents-md) | 通常 Git ルートから作業ディレクトリまでの指示の階層と、対象を開く場所の意味 |

製品の仕様は変更される可能性があります。名前や配置の変更があった場合は、上記の公式資料と実際の環境を照合します。スキルやルールのファイルがあることだけで、認証や実行権限まで得られるとは扱いません。

## 3つの視点の着想元

[Cocoda の紹介記事](https://cocoda.design/varhirac/p/pe1f4d8e389b2) の Persona / Detour / Thriller を着想元としています。会話で提示された紹介投稿から参照した記事です。

調査で、記事執筆者がこれら3つを公開したと確認できる GitHub のスキル原本は特定できませんでした。このため、本版は「発見した公式スキル」として配布せず、独自の SKILL.md として目的・手順・出力を定義しています。特に Thriller を最初の実務上の成功体験に結び付ける設計は、本ガイド独自の解釈です。

## 資料を作る際の道具と確認の限界

図は Archify の workflow 形式から生成しました。ガイドの HTML は既存の生成器を本版の章構成へ適用し、`marked` で Markdown を変換しています。スキルの形式は skill-creator の検証スクリプトで確認します。これらのツールを対象リポジトリ全体に新規インストールしたという意味ではありません。

役割別フロー、判断地点 G0〜G4、90分の読み順は、このワークスペースに合わせた運用提案です。開発ツールに組み込まれた自動承認機構ではありません。

今回確認するのは本版の資料・スキル・生成物です。既存アプリの本番稼働、全テストの実行、スキルの自動選択精度、実利用者への効果測定は実施範囲に含めません。
