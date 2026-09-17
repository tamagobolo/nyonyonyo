# SAPGUI

バージョン: **v1**（Gitタグ: `sapgui-v1`）

SAP GUI Scriptingのスクリプトを作るCodex用スキルと専用エージェントです。`SAPGUI` フォルダをCodexのプロジェクトとして開いて使います。

```text
$sap-gui-scripting を使って、この録画からVBScriptを作ってください。
必要な操作だけを残し、公式APIの根拠と未確認箇所を示してください。
```

- スキル: [.agents/skills/sap-gui-scripting/SKILL.md](.agents/skills/sap-gui-scripting/SKILL.md)
- 専用エージェント: [.codex/agents/sap_gui_scripter.toml](.codex/agents/sap_gui_scripter.toml)

エージェントを使う場合は「`sap_gui_scripter` エージェントに依頼して」と指定します。基本はSAP GUI for Windows向けのVBScriptです。VBA・Pythonは指定された場合に使います。

画面IDはSAP公式資料だけでは分からないため、録画や実画面の情報が必要です。案件ごとの録画と生成物はGit対象外の `local/` または `output/` に置きます。Windows/SAP実機で試していないコードは、その旨を明記します。
