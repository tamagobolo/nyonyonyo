# SAPGUI

SAP公式ドキュメントと実画面の記録を根拠に、SAP GUI Scriptingのスクリプトを生成・修正するCodex用スキルと専用エージェントです。説明と依頼例は日本語です。

## 使い始める

このフォルダをCodexのプロジェクトとして開き、新しいタスクで次のように依頼します。

```text
$sap-gui-scripting を使って、添付のSAP GUI録画をVBScriptに整理してください。
対象はSAP GUI for Windows 8.00、検証環境です。
入力値を引数化し、公式APIの根拠とWindowsでの確認手順を付けてください。
今回はファイル生成までです。
```

専用エージェントを使う場合は、次のように依頼します。

```text
sap_gui_scripter エージェントに、以下の要件でGUIスクリプトの生成を依頼してください。
要件: ...
```

プロジェクトのスキルは `.agents/skills/`、エージェントは `.codex/agents/` に配置しています。対応するCodexでプロジェクトを開き直して利用してください。グローバル設定の変更は不要です。別のプロジェクトで使う場合は、同じ相対位置へ対象フォルダとエージェント定義をコピーします。既存ファイルがあれば内容を確認してから統合してください。

配置仕様: [Codexスキル](https://learn.chatgpt.com/docs/build-skills)、[カスタムエージェント](https://learn.chatgpt.com/docs/agent-configuration/subagents)。

## 内容

| ファイル | 役割 |
| --- | --- |
| [.agents/skills/sap-gui-scripting/SKILL.md](.agents/skills/sap-gui-scripting/SKILL.md) | 公式API調査、要件整理、生成、検証の手順 |
| [.codex/agents/sap_gui_scripter.toml](.codex/agents/sap_gui_scripter.toml) | スクリプト生成に特化したエージェント |
| [公式資料の索引](.agents/skills/sap-gui-scripting/references/official-sources.md) | URL、資料の版、APIの調査箇所 |
| [実装ガイド](.agents/skills/sap-gui-scripting/references/generation-guide.md) | セッション選択、待機、画面ID、エラー処理 |
| [inspect-session.vbs](.agents/skills/sap-gui-scripting/assets/inspect-session.vbs) | 接続済みセッションの情報だけを読み取る出発点 |
| [依頼テンプレート](examples/request-template.md) | 生成に必要な情報と依頼例 |
| [評価ケース](evals/scenarios.md) | スキルの判断を確認するシナリオ |

## 対応範囲

- 基本は **SAP GUI for Windows + VBScript（.vbs）**。VBAやPythonを指定した場合は、その実行環境に合わせて生成します。
- SAP GUI for Java、SAP GUI for HTML、Fiori、SAPUI5、帳票のSAPscriptは別の実行基盤です。Windows COMのコードをそのまま適用しません。
- スキルは公式APIの型・メソッドを調べ、業務手順と録画・画面情報を組み合わせてコードを書きます。公式資料だけでは個別システムの画面ID、Zトランザクション、業務上の成功条件は確定できません。
- 既定の成果物はスクリプトと実行手順です。SAPへのログインや業務処理の実行は、具体的な対象と操作範囲を指定した依頼で扱います。

## 接続確認サンプル

Windows上でSAP GUIへ手動ログイン済みで、Scriptingの利用が許可され、VBScript/Windows Script Hostが利用できる環境向けです。

```bat
cscript //nologo .agents\skills\sap-gui-scripting\assets\inspect-session.vbs 0 0 QAS 100 DEMOUSER
```

引数は順に **接続番号、セッション番号、期待するシステムID、クライアント、ユーザー**。`0 0 QAS 100 DEMOUSER` は架空の例です。実際の対象に置き換えます。番号は0始まりで、接続・セッションの開閉で変わり得ます。サンプルは番号で取得した後に3つの識別情報を照合し、不一致なら終了します。対象情報を知るために、全セッションや業務画面の内容を一括保存する必要はありません。

成功時はセッションID、現在のトランザクション、Scriptingの読取専用モードを表示します。入力・画面遷移・保存は行いません。失敗時は終了コードが非0になります。接続通知が表示された場合は利用者が内容を確認します。

**検証範囲:** パッケージ構造、YAML/TOML、参照先、公式APIとの照合は確認対象です。作成環境はmacOSのため、Windows Script Hostによる構文検証と実際のSAP接続・業務動作は未検証です。最初の実行は検証用セッションで行ってください。

## 公式資料

[SAP GUI Scripting公式案内](https://pages.community.sap.com/topics/gui/scripting)からAPIとSecurity Guideを参照できます。収録した索引は2026-09-17確認、APIは8.00 PL01、Security Guideは8.00 PL07を基準にしています。これは最新版の宣言ではありません。生成時には利用環境の版と照合します。

このリポジトリは独自の手順・サンプルと公式資料へのリンクを収録しています。SAPのマニュアル本文や実データは同梱しません。SAPによる公式提供・認定パッケージではありません。
