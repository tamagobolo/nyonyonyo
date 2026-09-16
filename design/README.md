# design / System Atlas

リポジトリとクラウドの構成を、ひとつの共通モデルから理解するためのブラウザーアプリです。

## 使う

1. 左上のプロジェクト名から、AWSの学習用構成「Order Studio」または実際の「ponytail」の解析結果を選びます。
2. 「構成図」「リポジトリ」「データ / ER」「画面」を切り替え、要素をクリックします。右側で役割、接続、根拠のファイル・行番号を確認できます。
3. 「フローを辿る」で学習用の処理の流れを確認できます。実リポジトリでは実際に検出した参照関係を読むガイドになります。参照ガイドは実行順序を意味しません。
4. 「読み込む」からローカルフォルダー、公開GitHub URL、構成ファイル、共通モデルJSONを取り込みます。
5. 詳細パネルの「名前・説明を編集」で理解を書き足せます。データ項目の名前と型も編集でき、画面プレビューにも反映されます。「共通モデル」では要素・接続・フローをJSONで編集できます。
6. 変更は現在のブラウザーに自動保存されます。「書き出す」で `.atlas.json` を保存し、再読み込みや別端末への移動に使えます。プロジェクトを切り替える前にも書き出してください。

キャンバスはドラッグまたは矢印キーで移動、拡大・縮小ボタンまたは `+` / `-` でズーム、`0` で全体表示できます。Macでは `⌘`、その他では `Ctrl` を押しながらスクロールしてもズームできます。スマートフォンでは詳細パネルがキャンバスの下に並びます。

## 起動

Node.js **24以上**とnpmを使います。解析CLI・テストではNodeのTypeScript直接実行を利用します。

```bash
cd /Users/bananairo/001_Codex/design
npm ci
npm run dev -- --host 127.0.0.1 --port 3100
```

`http://localhost:3100/` を開きます。

```bash
npm test           # 共通モデル・各形式の取り込み・異常入力
npm run typecheck  # TypeScriptチェック
npm run build     # 配布用ビルド
npm start         # Wranglerによるビルド済みアプリの起動
```

ローカルフォルダーをコマンドから解析してJSONを作ることもできます。

```bash
npm run scan -- ../ponytail ponytail.atlas.json
```

スキャナーは対象コードを実行しません。シンボリックリンクを辿らず、出力先のJSONだけを書き込みます。

## 読み込みの対象と境界

| 入力 | 抽出するもの | 抽出しないもの |
| --- | --- | --- |
| JavaScript / TypeScript | TypeScript ASTによるimport、re-export、文字列のrequire・dynamic import、ファイル、明示されたtsconfigのpaths、packageの入口 | 実行時に組み立てられるパス、tsconfig extends先、業務上の意味 |
| Python | ファイル、トップレベルのdef / class名、基本的なimport / from | 動的import、すべてのPython文法やパッケージ解決規則 |
| Terraform `.tf` | resource宣言、同じディレクトリ内のリソースへの静的参照 | moduleの展開、count / for_each、変数や式の評価、実際の通信・権限・稼働状態 |
| Prisma | model、項目、型、@id / @unique、モデル間の型参照 | マイグレーションやDBへの接続、複合制約の完全な解釈 |
| SQL | 基本的なCREATE TABLE、項目、型、PRIMARY KEY、REFERENCES | ALTER TABLE、すべてのSQL方言、schema修飾名、DBへの接続 |
| CloudFormation JSON | Resources、Ref / GetAtt / DependsOn / Subのリソース参照 | YAML、Transform・条件・実環境の解決 |
| Wrangler JSON / JSONC | Worker名、入口ファイル、D1 / R2 / KVのバインディング | TOML、環境ごとの差分の統合、実際のCloudflareアカウントへの接続 |
| 共通モデルJSON | 要素・接続・項目・画面とエンティティの関係・フロー | HTML・コードの実行 |

各図は共通モデルの投影です。画面ビューは一般的なapp/pages/routesのパスと `entityIds` で紐づけたデータ項目から作る**構造プレビュー**であり、実際のアプリ画面のスクリーンショットではありません。ソース解析から画面とデータの意味上の対応は推測しません。必要な対応は共通モデルに追記できます。

抽出の不足や省略は「解析メモ」に表示します。`.env`、credentials / secrets系のファイル、秘密鍵、tfstate、node_modules、.git、ビルド生成物などは対象外です。ただし任意のファイルに埋め込まれた機密情報を完全に見つけるツールではありません。共有前は書き出すモデルの説明・根拠を確認してください。

- ローカル：最大450ファイル、各300 KB、合計12 MB。
- 公開GitHub：既定ブランチをコミットSHAに固定して最大160ファイル、各300 KB、合計12 MB。GitHubのAPI制限時はエラーを表示します。
- 共通モデル：最大1,500要素、6,000接続。キャンバスの表示は最大100要素。検索で絞り込み、一覧から選択した要素も表示できます。
- 自動保存：同じブラウザー・同じURL内の1プロジェクト。サーバー・クラウドへの同期ではありません。

## データの扱い

ローカルファイルとJSONはブラウザー内で処理されます。APIキーは不要です。公開GitHubの読み込みだけ、GitHub APIとraw.githubusercontent.comへ直接アクセスします。リポジトリやクラウドを変更する操作、コードの実行、ローカルソースを解析サーバーへ送る処理はありません。

## 構成

- `components/workspace.tsx`：共通モデルの状態、保存、ビュー切り替え、編集、ガイド。
- `components/atlas-canvas.tsx`：キャンバス、接続線、移動・ズーム・全体図。
- `components/import-project.tsx`：取り込み画面。
- `lib/model.ts`：型、入力検証、投影、配置、接続の探索。
- `lib/importer.ts`：各形式の静的解析とGitHub読み込み。取り込み時に遅延ロードします。
- `lib/sample.ts`：AWSの学習用サンプル。
- `scripts/scan.mjs`：ローカルスキャナー。
- `public/examples/ponytail.atlas.json`：2026-09-16にクローン済みponytailから生成したスナップショット（71ファイル、70要素、158接続）。

React / Vinext / TypeScriptと、SitesスターターのUI部品を使用しています。React関連は19.2.8、Viteは8.0.16へ修正を適用し、Vinextが固定するimage-sizeは2.0.3へoverrideしています。取り込み時のTypeScriptパーサーは大きいため、初回の読み込み操作時に追加ダウンロードが発生します。

## 参考・出典

同一データから複数の視点を切り替える体験は、[varhiraの参考投稿](https://x.com/varhira/status/2099149865498591422)のUI・概念図・ER図の連動から着想を得ました。映像の画面や素材の複製は含めていません。

クラウドの説明は [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)、[API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)、[DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)、[Cloudflare Workers](https://developers.cloudflare.com/workers/) の公式資料を参照しています。サンプルのERは論理モデルです。DynamoDBの外部キー制約を意味しません。

ponytailの取得元は [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) です。スナップショットには構成情報と短い参照抜粋が含まれます。元のMITライセンスは `public/examples/ponytail-LICENSE.txt` に同梱しています。
