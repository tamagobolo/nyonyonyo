---
name: consulting-slide-review
description: 提案資料・経営向けスライドのストーリー、用語、図表、レイアウトをレビューし、HTML/PPTXの機械チェックを補助する。コンサル型の品質確認や規約に沿う資料を求められたときに使う。
license: MIT; see LICENSE
---

# Consulting Slide Review

Carnotの資料規約とチェックツールを、内容と見せ方のレビューに使う。指定テンプレート、ブランド、ユーザーの文体を優先する。角丸禁止、タイトルのですます禁止など上流固有の作法は、そのスタイルを採用する資料にだけ適用する。

## 読むもの

- レビューする観点に対応する [スライド規約](references/slide-rules.md)。新しくCarnotのスタイルを採用するときは全体を確認する。
- 構成や論理を点検するときは [内容レビュー](references/content-review-prompt.md)。別担当による確認は独立評価が役立つ場合に使う。
- 文章の仕上げには [表現リスト](references/ai-smell-lexicon.md)。用語の意味と指定表現を、単純な禁止語置換より優先する。
- 見せ方を探すときだけ [型カタログ](references/archetype-catalog.md) と [62型PDF](assets/SlideCatalog_16x9.pdf) を参照する。

1枚の主張、主張を支える数値・出典、比較の軸、用語・単位・期間の一致、タイトルを通した論理の流れを確認する。推移・分布・構成など図が説明しやすい関係は適切なグラフにする。型に合わせて情報の意味や依頼された構造を変えない。

## 機械チェック

コマンドのパスは、このSKILL.mdが実際にあるディレクトリを基準に解決する。

```bash
python3 <skill-dir>/scripts/check_deck.py /absolute/path/deck.html
python3 <skill-dir>/scripts/check_deck.py /absolute/path/deck.pptx
```

HTML検査はPython標準ライブラリのみ。PPTX検査にはpython-pptxが必要なので、既存の文書作成ランタイムを優先する。チェック結果は規約の候補であり、内容の正しさや表示の保証ではない。FAILはプレースホルダー・整合性の問題と、採用していないスタイルの違いに分けて判断する。例外は理由を報告し、合格のためだけに指定デザインを崩さない。

実レンダリングで文字の切れ、重なり、読めるサイズ、図表を確認する。HTML用の `scripts/check_layout.mjs` はPlaywrightが必要な任意の補助で、現在のブラウザー操作制約が許可する場合だけ使う。利用できなければ許可されたブラウザーか既存の資料レンダラーで目視し、未実行の検査を明記する。

## 作成まで依頼された場合

目的、対象、提出形式は会話と既存資料から引き継ぐ。新規HTMLのたたき台が有用なら、[基本パーツ](templates/freeform_parts_16x9.html)、[追加パーツ](templates/freeform_parts_more_16x9.html) を使う生成補助がある。

```bash
python3 <skill-dir>/scripts/new_deck.py --list
python3 <skill-dir>/scripts/new_deck.py --parts b01,b02,m05,b10 --title "資料名" -o /absolute/path/deck.html
```

生成後は仮文言を実内容へ置き換える。依頼に合わせてレイアウトを調整し、プロジェクト固有の変更を共通テンプレートへ自動で書き戻さない。

同梱の生成器は16:9のHTMLと印刷PDF向けで、編集可能PPTXへの自動変換器ではない。編集可能PPTXが必要なら、利用可能なPresentationsスキルで作成し、必要に応じて [PPTX見本帳](assets/SuperTemplate_62type.pptx) を参考にする。提出形式をPDFへ勝手に変更しない。

報告は重要な内容上の指摘、該当ページ、修正方向、実施した機械・目視確認を示す。レビューだけならファイルを変更しない。
