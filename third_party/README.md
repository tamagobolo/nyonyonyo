# 出典・固定版・ローカルでの調整

2026-09-10に公開ソースを確認し、ユーザー指定の7リポジトリから必要な部分を取り込んだ。[sources.json](sources.json) に完全なコミットID、取り込み方法、対象パス、ライセンスの保存先を記録する。

|出典|固定コミット / ref|採用とライセンス|
|---|---|---|
|[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator/tree/9c2a98435ca9ed2b85ac6b0e942b5ded75a4d194)|`9c2a98435ca9`|委譲手順の翻案。Apache-2.0|
|[mattpocock/skills](https://github.com/mattpocock/skills/tree/3cca18b368ae95cdbdebbff572ccafa662551015)|`3cca18b368ae`|設計・用語・レビュー・診断・TDD・設計改善の6スキルと参照。MIT|
|[anthropics/skills](https://github.com/anthropics/skills/tree/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f)|`41bbe19d1a1a`|frontend-designを翻案。Apache-2.0。他の文書系スキルの利用条件をこのライセンスと同一視しない|
|[openai/plugins](https://github.com/openai/plugins/tree/d416fd5a43426019986b1e489506db3db66dee3d)|`d416fd5a4342`|可視化・スキル評価の観点を参考に独自の手順と検査器を作成。上流コード・資産は複製していない|
|[carnot-tech/consulting-pptx-skill](https://github.com/carnot-tech/consulting-pptx-skill/tree/e77416c06d12940b79b90c05cec3c3f9a4a5168c)|`e77416c06d12`|入口を資料レビュー向けに翻案。規約、検査器、HTML生成補助と見本を同梱。MIT|
|[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail/tree/356918eba965ee1eac64bd3a7f0dd02108350de5)|`356918eba965`|再利用手順・差分レビューを翻案。MIT|
|[tt-a1i/archify](https://github.com/tt-a1i/archify/tree/c826e6c3a7abad19c0f3cd1ca57207d54b1ad8de)|`v2.16.0` / `c826e6c3a7ab`|安定版のNode生成・検証・Viewerを同梱。MIT|

ライセンス原文を対象スキルにも同梱している。Matt・Astra/Luna・Ponytailの原文コピーはこのディレクトリにもある。Archifyのライセンスには由来となるCocoon-AIの表記も残す。

## 上流のままにしなかった箇所

- Mattの6つの入口をCodexの呼び出し方と既存仕様優先の手順に変更。設計の参照ではアダプター数だけの善悪判定や既存テストの一括削除を避ける。HTML参照はCDNを使わない構成へ変更。既存の `improve-codebase-architecture` の明示呼出ポリシーを保持。
- AnthropicのUI設計を、実際の依頼・既存ブランド・表示確認に沿う短い入口へ変更。
- Carnotの入口名を `consulting-slide-review` に変更。規約をユーザー指定テンプレートより優先させず、機械チェックと目視の保証範囲を分ける。同梱Python検査器・生成器は上流版。
- Astra/LunaとPonytailは必要な手順を翻案して新しい入口を作成。上流の設定installer、常時Hook、状態管理、セッション履歴集計は導入していない。
- ArchifyはSKILL.mdにCodex・日本語・ローカル根拠の案内を追加。`assets/template.html` の外部Google Fontsのlinkを除去し、既存のローカル/システムフォントのフォールバックを利用。更新確認は実行時の `ARCHIFY_UPDATE_CHECK_DISABLED=1` で無効にする。生成・検証の本体は変更していない。
- 全スキルにCodexの表示用メタデータを設定。コードの全体地図と代表フローの図を既存の `codebase-atlas` から使い分ける。

[imported-files.json](imported-files.json) は9件のインポート時点のファイルSHA-256。ArchifyのSKILL.mdは固定コミットの原文ハッシュにそろえている。[local-changes.json](local-changes.json) はその原本から変わったファイルと追加ファイルの実測記録で、新規の翻案3スキルも別に記載する。これは公開配布用の署名や、上流が改変版を保証する仕組みではない。

## 更新するとき

固定版を残したまま新しい版を別の作業場所で確認し、参照・ライセンス・ローカル差分を比較する。必要な修正と対応する検証だけを行ってから既存配置へ反映する。ユーザーの同名スキルを上書きせず、変更したスキルと実際に適用した設定を報告する。

上流が示す費用・トークン・時間の改善率は、この環境で測定していない。形式検査、Archifyの生成と閲覧、スライド補助の実行結果は [公開版の検証記録](../docs/publication-verification.md) に残す。
