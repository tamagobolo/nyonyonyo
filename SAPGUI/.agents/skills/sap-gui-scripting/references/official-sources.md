# 公式資料の索引

確認日: **2026-09-17**。以下は確認した資料の版であり、常に最新版を指すURLではない。生成対象のSAP GUIリリースと照合する。

| 資料 | 確認した版と使いどころ |
| --- | --- |
| [SAP GUI Scripting公式案内](https://pages.community.sap.com/topics/gui/scripting) | SAPが公開するAPI・Security Guideの入口。リンク切れ時はここからたどる |
| [SAP GUI Scripting API PDF](https://help.sap.com/doc/9215986e54174174854b0af6bb14305a/800.01/en-US/sap_gui_scripting_api.pdf) | 表紙は8.00 PL01、2023-02-09。型・メソッド・引数・制約 |
| [SAP GUI Scripting Security Guide PDF](https://help.sap.com/doc/97d2d0bc2ed248a4a85a0bec608704f8/800.08/en-US/sap_gui_scripting_sec_guide.pdf) | URL中は800.08、表紙は8.00 PL07、2024-05-10。導入条件、サーバー・クライアントの制御 |
| [SAP GUI for Windows Help Portal](https://help.sap.com/docs/sap_gui_for_windows) | 対象バージョンを選択して、その版のAPI資料を調べる |

HTML本文を取得できない場合はPDFを使う。SAP Noteの本文がログインで取得できないときは、読めたかのように引用しない。PDF本体や抽出全文をリポジトリに保存しない。

## APIを探す場所

ページは上記API PDFに印字された1始まりのページ番号。別版では変わり得るため、節名でも検索する。

| 調査対象 | 節・ページ | 検索するメンバー |
| --- | --- | --- |
| 既存SAP GUIへの接続 | SAP GUI Scripting ROT Entry Helper、p.317–318 | `GetObject("SAPGUI")`, `GetScriptingEngine` |
| 接続とセッション | GuiApplication p.38、GuiConnection p.85–87 | `Children`, `Sessions`, `DisabledByServer` |
| 要素の検索 | GuiContainer p.87 | `FindById`, `Raise` |
| 通信待機と操作 | GuiSession p.189–203（Busyはp.195） | `Busy`, `Info`, `StartTransaction`, `ActiveWindow` |
| 対象の照合 | GuiSessionInfo p.203–206 | `SystemName`, `Client`, `User`, `Transaction`, `ScriptingModeReadOnly` |
| 入力・押下 | GuiButton p.54、GuiComboBox p.75、GuiTextField p.249 | `Press`, `Key`, `Text` |
| ALVと表 | GuiGridView p.117、GuiTableControl p.233 | `GetCellValue`, `RowCount`, `VisibleRowCount`, `VerticalScrollbar` |
| 結果・エラー | GuiStatusbar p.221–225 | `MessageType`, `MessageId`, `MessageNumber`, `Text` |
| キー操作 | GuiFrameWindow p.105、GuiMainWindowのGUI_FKEY p.152 | `SendVKey`と対応値 |

これは検索用索引。ここに名前があるだけで特定のコントロールや利用環境に適用できるとは判断せず、対象の定義を開いて確認する。

## 設定・権限を調べる場所

Security Guideの第2章 Installation、第3章 Protecting Critical SAP Systems、第4章 Modes for Server Side Protection、第6章 Protection on the Client Level、第7章 Notes for Usersを参照する。

サーバー側の検索語は `sapgui/user_scripting`、`sapgui/user_scripting_set_readonly`、`sapgui/user_scripting_disable_recording`、`sapgui/user_scripting_per_user`。クライアント側はScriptingのインストール、利用許可、接続・アタッチ通知を確認する。

録画禁止と実行禁止は別の設定。読取専用モードでは、業務上は照会でもサーバーのセッション状態を変える呼び出しが制限される。無効化や制限を検知したら原因を説明し、管理者の設定変更をコードで代行・回避しない。
