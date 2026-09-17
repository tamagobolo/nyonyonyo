# ワークスペースの地図と作業の前提

## どこで作業し、どこへ保存するか

このローカル環境では、親のワークスペースに複数の独立したプロジェクトがあります。共有資料の保存先は `tamagobolo/nyonyonyo` です。親フォルダ全体を公開する構成ではありません。公開資料では個人の絶対パスを使わず、次の相対表記を用います。

```text
〈workspace〉/                  ローカルで複数の案件を置く親。Git リポジトリではない
├── 〈対象プロジェクト〉/       日々の開発対象。独自の Git・ルールを持つ場合がある
└── nyonyonyo/                 共有先 tamagobolo/nyonyonyo のチェックアウト
    ├── AGENTS.md              このリポジトリの基本方針
    ├── obs / observatory.py   Codebase Observatory の入口
    ├── src/ / viewer/         解析・レポート生成・画面
    ├── skills/ / agents/     共通スキルとエージェントの配布用原本
    ├── design/                System Atlas アプリ
    ├── ponytail/              取り込まれた外部プロジェクト
    ├── SAPGUI/                別の実行環境を前提とする専用手順
    └── v1/                    本ガイド。独立した Git リポジトリではない
```

別フォルダにある同名プロジェクトと、共有先に格納されたコピーを混同しないでください。依頼には「編集元」「共有先」「対象パス」を書きます。コピーする場合は編集元のコミットと共有先の保存位置も記録します。

## 開始時に確認すること

対象フォルダへ移動して実行します。結果を見てから変更に入ります。

```bash
pwd
git rev-parse --show-toplevel
git remote -v
git branch --show-current
git rev-parse HEAD
git status --short
```

Git の確認が失敗する場合は、そのフォルダが管理対象の外なのか、作業場所が違うのかを調べます。失敗を理由に新しい Git リポジトリを作ったり、親フォルダをまとめて追加したりしません。既存差分があれば依頼対象との関係を確認し、他者の作業を保持します。

## ルール・スキル・実行手段の役割

| 要素 | 役割 | このワークスペースでの確認 |
| --- | --- | --- |
| `AGENTS.md` / `AGENTS.override.md` | 対象の作業方針、検証、禁止事項を伝える | リポジトリから作業フォルダまでの適用ファイルと、編集先の下位ルールを読む |
| `SKILL.md` | 特定の仕事の進め方と、使う条件を定義する | 原本パス、名前、説明、実際の利用可否を確認する |
| `agents/` などの設定原本 | 分担する役割や設定を配布する | ファイルが存在するだけで、その役割が登録済みとは判断しない |
| CLI・ブラウザ・接続済みアプリ | ファイルや外部サービスを読み書きする | 認証、実行対象、書込み範囲、ユーザーの依頼を照合する |
| チェックや CI | 定めた条件に対する検証結果を返す | 何を検証したか、実行基準、未確認範囲を記録する |

Codex の公式仕様では、プロジェクトの指示は通常 Git ルートから作業ディレクトリまでの経路をもとに読み込まれます。兄弟プロジェクトや下位フォルダにあるすべての指示が、親を開くだけで一括適用されるものではありません。対象の指示が読み込まれているかを確認します。[公式：AGENTS.md](https://learn.chatgpt.com/ja-JP/docs/agent-configuration/agents-md)

本リポジトリの方針は「要求を満たす最小の変更」「影響に必要な検証」です。今回の文書追加だけで、無関係なアプリの全面改修やフルテストを追加する理由にはなりません。[実ファイル：AGENTS.md](../../AGENTS.md)

## リポジトリ内の入口と確認コマンド

以下は基準コミットのファイルで確認した定義です。本ガイド作成時に、アプリや全テストの動作を実行確認した一覧ではありません。

| 作業対象 / 実行場所 | 入口 | 定義されているコマンド・条件 |
| --- | --- | --- |
| Observatory / `nyonyonyo/` | `obs` → `observatory.py` | `./obs test` または `npm test`。Node.js 20以上、Python 3.11以上が定義されている |
| 解析 / `nyonyonyo/` | `src/scanner.py`、`scripts/js-analyze.mjs` | `./obs scan --root 〈対象〉 --out 〈出力先〉`。解析結果を書き出す操作なので対象と出力先を指定する |
| レポート画面 / `nyonyonyo/` | `viewer/main.jsx`、`viewer/style.css` | `npm run build` が `assets/` の画面資産を生成する。ソースと生成物の関係を確認する |
| System Atlas / `nyonyonyo/design/` | `package.json`、当該 README | `npm run lint`、`npm run typecheck`、`npm test`、`npm run build`。Node.js 24以上 |
| 外部取り込み / `nyonyonyo/ponytail/` | 当該 README、LICENSE | 元の仕様とライセンスを保持し、変更内容に合う手順を選ぶ |
| SAP GUI / `nyonyonyo/SAPGUI/` | 当該 README、AGENTS.md | Windows・SAP GUI を前提とする。ローカル macOS の確認で業務動作まで合格としない |
| 本ガイド / `nyonyonyo/v1/` | `README.md`、`scripts/build-guide.mjs` | Markdown・リンク・スキル定義・HTML表示を確認する |

`npm test` の意味は実行場所で変わります。別プロジェクトのコマンドを、そのまま現在の場所で使わないでください。依存導入・ビルド・解析による生成物も変更差分として把握します。

## 実装の理解に必要な最短の流れ

Observatory の構造を読む場合は、次の順序が入口です。これは静的なソース確認に基づく関係です。

```text
obs
  → observatory.py：引数、対象・出力先、scan / watch / compare / test の分岐
  → src/scanner.py：ファイル解析と関係・検出事項の集約
       → scripts/js-analyze.mjs：JS / TS の解析
  → src/reporting.py：JSON・Markdown・HTML の生成
       → assets/viewer.js・viewer.css：HTMLへ組み込む画面資産
            ↑ scripts/build.mjs が viewer/ から生成
```

処理を変更するときは、入口、公開される出力形式、例外時の挙動、既存テストをつなげて読みます。[既存の構造説明](../../docs/architecture.md) と [新任シニアの読み方](03-senior-onboarding.md) を参照してください。
