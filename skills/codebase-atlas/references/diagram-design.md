# 構造図を選び、根拠を保つ

OpenAI Pluginsの可視化スキルを参考に、このツールで必要な判断をまとめたもの。全件の探索には既存のObservatory HTML、代表フローの説明には `$archify` を使う。

## 読み手の問いから選ぶ

- 責務・境界・依存: architecture。コードの静的なimportと、動作を追って確認した接続を区別する。
- 処理の順序・分岐: workflow。実装されていない承認やエラー経路を足さない。
- APIの呼出順: sequence。同期/非同期と戻り値を省略して意味を変えない。
- データの移動: dataflow。個人情報の分類は対象の定義から確認する。
- 状態・遷移: lifecycle。終了、再試行、キャンセルを実コードから追う。

まず小さな2D図で問いに答える。Three.jsは空間的な関係や密なデータを扱う効果がある場合に使う。3Dの配置距離を結合度、色を危険度と解釈させるなら、その定義と根拠が必要。単に奥行きを付けて図が読みづらくなる場合は2Dを選ぶ。

## 図に含める契約

読み手に必要な代表経路を選び、省略した詳細は一覧とファイル根拠へつなぐ。ノード名は対象の用語に合わせる。矢印の向き・種類・境界を凡例と一致させ、線の交差、文字の重なり、意味のあるラベルの欠落を確認する。レイアウト都合で依存関係を捏造しない。

インタラクションで表示する経路や影響範囲は、入力データのノードと関係から計算する。手書きの代表図は全体の解析結果とは区別し、静的な到達可能性を実行時の影響と断定しない。HTML出力には入力JSONと検証結果を残す。

UIを変更した場合は、変更した操作、キーボードでの選択、読めるラベル、対象画面サイズ、WebGLが使えない場合の2D経路など、影響する点を確認する。時刻や乱数を含む配置を比較するときは条件を固定する。検証済みの静的スキャンのために毎回ブラウザ検証をやり直す必要はない。

参考: [Three.js](https://github.com/openai/plugins/tree/main/plugins/build-web-data-visualization/skills/threejs-data-visualization)、[ソフトウェア構造図](https://github.com/openai/plugins/tree/main/plugins/build-web-data-visualization/skills/uml-and-software-architecture-visualization)、[ノードと線の配置](https://github.com/openai/plugins/tree/main/plugins/build-web-data-visualization/skills/node-link-and-diagram-layout)。固定した参照コミットは配布元のthird_party/sources.jsonに記録する。
