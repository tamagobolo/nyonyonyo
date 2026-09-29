// SAP official references checked; not executed against a customer database.
window.SQL_CATALOG = [
  {
    "id": "PERF-01",
    "category": "prepare",
    "title": "接続先テナントと HANA バージョンを確認",
    "summary": "調査対象のデータベース名と起動時刻を採取し、別環境の結果との混同を防ぎます。",
    "symptoms": [
      "調査開始",
      "接続先",
      "バージョン",
      "tenant",
      "revision"
    ],
    "sql": "SELECT TOP 50\n    SYSTEM_ID, DATABASE_NAME, HOST,\n    VERSION, START_TIME, USAGE\nFROM SYS.M_DATABASE\nORDER BY DATABASE_NAME;",
    "views": [
      "SYS.M_DATABASE"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "SYSTEM_ID",
        "meaning": "システム SID"
      },
      {
        "name": "DATABASE_NAME",
        "meaning": "接続先データベース名"
      },
      {
        "name": "HOST",
        "meaning": "既定のマスターホスト"
      },
      {
        "name": "VERSION",
        "meaning": "HANA のバージョン文字列"
      },
      {
        "name": "START_TIME",
        "meaning": "起動時刻"
      },
      {
        "name": "USAGE",
        "meaning": "環境の用途ラベル"
      }
    ],
    "interpretation": [
      "DATABASE_NAME が予定した S/4HANA テナントであることを確認します。",
      "起動時刻は、別時点の監視値を比較するときの補助情報です。"
    ],
    "nextSteps": [
      "DB 名・VERSION・採取日時を障害記録に添えます。",
      "SQL の列エラーがある場合は PERF-02 で実環境の列を確認します。"
    ],
    "cautions": [
      "USAGE は任意値のため、本番判定は運用台帳と照合します。",
      "対象は接続中の DB です。SYSTEMDB の結果でテナントの状態を判断しません。"
    ],
    "privilege": "接続先で SYS.M_DATABASE を参照できる承認済み監視ユーザーを使用します。表示範囲は実効権限に依存します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_DATABASE（1879–1880 ページ）",
        "url": "https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1879"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-02",
    "category": "prepare",
    "title": "実環境の監視ビューの列と単位を確認",
    "summary": "プランキャッシュの列定義を調べ、リビジョン差による列エラーを切り分けます。",
    "symptoms": [
      "invalid column",
      "列がない",
      "リビジョン差",
      "単位",
      "前提確認"
    ],
    "sql": "SELECT TOP 100\n    VIEW_NAME, POSITION, VIEW_COLUMN_NAME,\n    DATA_TYPE_NAME, UNIT, DESCRIPTION\nFROM SYS.M_MONITOR_COLUMNS\nWHERE VIEW_NAME = 'M_SQL_PLAN_CACHE'\nORDER BY POSITION;",
    "views": [
      "SYS.M_MONITOR_COLUMNS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "VIEW_NAME",
        "meaning": "監視ビュー名"
      },
      {
        "name": "POSITION",
        "meaning": "列順序"
      },
      {
        "name": "VIEW_COLUMN_NAME",
        "meaning": "列名"
      },
      {
        "name": "DATA_TYPE_NAME",
        "meaning": "型名"
      },
      {
        "name": "UNIT",
        "meaning": "値の単位"
      },
      {
        "name": "DESCRIPTION",
        "meaning": "列の説明"
      }
    ],
    "interpretation": [
      "この環境が公開する列名・型・単位を確認します。別ビューを調べるときは WHERE のビュー名を実在する名前へ変更します。"
    ],
    "nextSteps": [
      "利用中の HANA リビジョンに対応する SQL Reference と照合します。",
      "存在しない列を削除するときは、診断に必要な意味が失われないか確認します。"
    ],
    "cautions": [
      "先頭 100 列です。列数が多い場合は POSITION > 100 を追加して続きも確認します。",
      "UNIT が空でも無単位とは断定できません。列説明と公式リファレンスを併読します。"
    ],
    "privilege": "SYS.M_MONITOR_COLUMNS を参照できる監視ユーザーを使用します。権限不足とビュー・列の不在を区別します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_MONITOR_COLUMNS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b54f6275191014824cedc723f8ad13.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-03",
    "category": "prepare",
    "title": "自身の DB 接続と実行状態を確認",
    "summary": "自分の接続 ID とクライアント情報を採取し、監視画面との対応を確認します。",
    "symptoms": [
      "connection id",
      "現在の接続",
      "接続確認",
      "autocommit"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, CONNECTION_ID, USER_NAME,\n    CLIENT_HOST, START_TIME, CONNECTION_STATUS, AUTO_COMMIT\nFROM SYS.M_CONNECTIONS\nWHERE OWN = 'TRUE'\nORDER BY HOST, PORT, CONNECTION_ID;",
    "views": [
      "SYS.M_CONNECTIONS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "接続を扱うサービス"
      },
      {
        "name": "CONNECTION_ID",
        "meaning": "接続 ID"
      },
      {
        "name": "USER_NAME",
        "meaning": "DB ユーザー"
      },
      {
        "name": "CLIENT_HOST",
        "meaning": "クライアントホスト"
      },
      {
        "name": "START_TIME",
        "meaning": "接続開始時刻"
      },
      {
        "name": "CONNECTION_STATUS",
        "meaning": "接続状態"
      },
      {
        "name": "AUTO_COMMIT",
        "meaning": "現在の自動コミットモード"
      }
    ],
    "interpretation": [
      "自分の接続に限定した結果です。DB ユーザーと業務上の SAP ユーザーを同一視しません。"
    ],
    "nextSteps": [
      "調査に使用した CONNECTION_ID を記録します。"
    ],
    "cautions": [
      "接続を作り直した場合は ID を再採取します。",
      "採取 SQL 自体が状態に影響するため、RUNNING の表示だけで異常と判断しません。"
    ],
    "privilege": "自身の接続情報が見える監視ユーザーで実行します。他接続の閲覧権限はこの確認の前提ではありません。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_CONNECTIONS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20abcf1f75191014a254a82b3d0f66bf.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-04",
    "category": "performance",
    "title": "累積実行時間の大きい SQL プランを探す",
    "summary": "キャッシュに残るプランを総実行時間で並べ、調査対象の SQL を絞ります。",
    "symptoms": [
      "全体が遅い",
      "高負荷 SQL",
      "plan cache",
      "応答時間",
      "頻繁な SQL"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, STATEMENT_HASH, USER_NAME, SCHEMA_NAME,\n    EXECUTION_COUNT,\n    TOTAL_EXECUTION_TIME / 1000000.0 AS TOTAL_EXECUTION_SECONDS,\n    AVG_EXECUTION_TIME / 1000.0 AS AVG_EXECUTION_MS,\n    MAX_EXECUTION_TIME / 1000.0 AS MAX_EXECUTION_MS,\n    STATEMENT_STRING\nFROM SYS.M_SQL_PLAN_CACHE\nWHERE EXECUTION_COUNT > 0\nORDER BY TOTAL_EXECUTION_TIME DESC;",
    "views": [
      "SYS.M_SQL_PLAN_CACHE"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "プランを保持するサービス"
      },
      {
        "name": "STATEMENT_HASH",
        "meaning": "SQL 文字列のハッシュ"
      },
      {
        "name": "USER_NAME",
        "meaning": "プランを準備したユーザー"
      },
      {
        "name": "SCHEMA_NAME",
        "meaning": "プランのスキーマ"
      },
      {
        "name": "EXECUTION_COUNT",
        "meaning": "累積実行回数"
      },
      {
        "name": "TOTAL_EXECUTION_SECONDS",
        "meaning": "総実行時間を秒へ換算"
      },
      {
        "name": "AVG_EXECUTION_MS / MAX_EXECUTION_MS",
        "meaning": "平均・最大実行時間をミリ秒へ換算"
      },
      {
        "name": "STATEMENT_STRING",
        "meaning": "SQL 本文"
      }
    ],
    "interpretation": [
      "総時間が大きい場合、平均時間と回数を併せて見て、少数の遅い実行か多数の呼び出しかを分けます。",
      "同じハッシュでもスキーマやプランの条件が異なる場合があり、単純に一行一業務とは扱いません。"
    ],
    "nextSteps": [
      "対象 SQL と業務処理を照合し、必要な期間のアプリケーション側計測と比較します。"
    ],
    "cautions": [
      "累積値であり、直近の障害時間帯だけの統計ではありません。",
      "キャッシュから除外されたプランは残りません。TOP 50 でも順位付けの処理は必要です。",
      "SQL 本文に業務値が含まれる場合があります。共有時は必要な情報に限定します。"
    ],
    "privilege": "SYS.M_SQL_PLAN_CACHE の閲覧を許可された監視ユーザーを使用します。全体の閲覧が許可されていない場合、可視範囲だけのランキングになります。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c57b8e75191014b22fcc8222b15970.html"
      },
      {
        "title": "SAP HANA Administration with SAP HANA Studio SPS 08 — SQL Plan Cache",
        "url": "https://help.sap.com/doc/023943d0b05e4b44bbe15658215f182d/2.0.08/en-US/SAP_HANA_Administration_with_SAP_HANA_Studio_en.pdf#page=87"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-05",
    "category": "performance",
    "title": "直近 1 時間の高コスト SQL 記録を確認",
    "summary": "既に採取されている expensive statements を時間で絞り、遅い操作を確認します。",
    "symptoms": [
      "遅い SQL",
      "expensive statements",
      "タイムアウト",
      "過去 1 時間"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, CONNECTION_ID, STATEMENT_HASH,\n    START_TIME, OPERATION, DB_USER,\n    DURATION_MICROSEC / 1000000.0 AS DURATION_SECONDS,\n    LOCK_WAIT_DURATION / 1000000.0 AS LOCK_WAIT_SECONDS,\n    ERROR_CODE, STATEMENT_STRING\nFROM SYS.M_EXPENSIVE_STATEMENTS\nWHERE START_TIME >= ADD_SECONDS(CURRENT_TIMESTAMP, -3600)\nORDER BY DURATION_MICROSEC DESC;",
    "views": [
      "SYS.M_EXPENSIVE_STATEMENTS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "記録元サービス"
      },
      {
        "name": "CONNECTION_ID",
        "meaning": "記録時の接続 ID"
      },
      {
        "name": "STATEMENT_HASH",
        "meaning": "SQL 識別用ハッシュ"
      },
      {
        "name": "START_TIME",
        "meaning": "開始時刻"
      },
      {
        "name": "OPERATION",
        "meaning": "実行・フェッチなどの操作種別"
      },
      {
        "name": "DB_USER",
        "meaning": "DB ユーザー"
      },
      {
        "name": "DURATION_SECONDS",
        "meaning": "操作時間（秒へ換算）"
      },
      {
        "name": "LOCK_WAIT_SECONDS",
        "meaning": "累積ロック待機時間（秒へ換算）"
      },
      {
        "name": "ERROR_CODE",
        "meaning": "記録されたエラーコード"
      },
      {
        "name": "STATEMENT_STRING",
        "meaning": "SQL 本文"
      }
    ],
    "interpretation": [
      "OPERATION を確認して同じ種類の操作を比較します。SQL 一回の実行に複数の操作行があり得ます。",
      "空の結果は、遅い SQL がなかった証拠にはなりません。"
    ],
    "nextSteps": [
      "業務側の発生時刻と照合し、同じハッシュ・接続の記録を調べます。",
      "記録がない場合は既存のトレース採取状況を運用担当者に確認します。"
    ],
    "cautions": [
      "トレースは標準で無効です。この SQL は採取設定を変更しません。",
      "インメモリ保持は件数上限があります。ファイル参照モードでは読み取り負荷が大きくなり得ます。TOP は読み取り量全体の上限ではありません。",
      "時刻は DB 側の基準で照合します。SQL 本文の共有範囲に注意します。"
    ],
    "privilege": "公式ガイドは expensive statements の閲覧に TRACE ADMIN を挙げています。既に承認された運用担当者・監視経路を使い、調査のために広い権限を新規付与しません。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_EXPENSIVE_STATEMENTS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20af736e751910148162e2ab1982f035.html"
      },
      {
        "title": "SAP HANA Troubleshooting SPS 08 — Expensive Statements Trace",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/f157e7b47b2a417a99eadd4b6c433b77/5faf04f17830464eacdb7938b383d2ab.html?version=2.0.08"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-06",
    "category": "performance",
    "title": "現在アクティブなスレッドと待機を確認",
    "summary": "継続時間の長いアクティブスレッドを並べ、実行中か待機中かを確認します。",
    "symptoms": [
      "現在遅い",
      "thread",
      "CPU",
      "待機",
      "ハング"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, SERVICE_NAME, THREAD_ID, CONNECTION_ID,\n    THREAD_TYPE, THREAD_STATE,\n    DURATION / 1000.0 AS DURATION_SECONDS,\n    CPU_TIME_SELF / 1000000.0 AS CPU_SELF_SECONDS,\n    STATEMENT_HASH, LOCK_WAIT_COMPONENT, LOCK_WAIT_NAME,\n    LOCK_OWNER_THREAD_ID\nFROM SYS.M_SERVICE_THREADS\nWHERE IS_ACTIVE = 'TRUE'\nORDER BY DURATION DESC;",
    "views": [
      "SYS.M_SERVICE_THREADS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT / SERVICE_NAME",
        "meaning": "対象サービス"
      },
      {
        "name": "THREAD_ID",
        "meaning": "スレッド ID"
      },
      {
        "name": "CONNECTION_ID",
        "meaning": "関連接続 ID"
      },
      {
        "name": "THREAD_TYPE / THREAD_STATE",
        "meaning": "スレッドの種別・状態"
      },
      {
        "name": "DURATION_SECONDS",
        "meaning": "スレッド継続時間（ミリ秒から秒へ換算）"
      },
      {
        "name": "CPU_SELF_SECONDS",
        "meaning": "スレッド自身の CPU 時間（マイクロ秒から秒へ換算）"
      },
      {
        "name": "STATEMENT_HASH",
        "meaning": "実行 SQL のハッシュ"
      },
      {
        "name": "LOCK_WAIT_COMPONENT / LOCK_WAIT_NAME",
        "meaning": "待機ロックのコンポーネント・内部名"
      },
      {
        "name": "LOCK_OWNER_THREAD_ID",
        "meaning": "ロック保持スレッド ID"
      }
    ],
    "interpretation": [
      "アクティブには待機状態も含まれます。DURATION と CPU 時間を同一視しません。",
      "THREAD_STATE とロック情報から、次に確認する接続や待機先を選びます。"
    ],
    "nextSteps": [
      "採取時刻、サービス、THREAD_ID と CONNECTION_ID を一緒に記録します。",
      "トランザクションロックは PERF-07 と照合します。内部スレッドの待機は運用担当者へ連携します。"
    ],
    "cautions": [
      "瞬間的な状態です。短い処理は採取間隔の間に消えます。",
      "スレッド継続時間は SQL のユーザー応答時間と同じ指標ではありません。"
    ],
    "privilege": "SPS 08 の当ビュー説明では内容の閲覧に DATABASE ADMIN が必要です。既存の承認済み管理担当者に採取を依頼し、この目的だけで管理権限を付与しません。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_SERVICE_THREADS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c499a975191014a0e4a0318ad19ec3.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-07",
    "category": "locks",
    "title": "ブロックされた接続とロック保持者を確認",
    "summary": "現在のトランザクションロック待ちについて、待機側と保持側の接続を対応付けます。",
    "symptoms": [
      "ロック待ち",
      "更新が止まる",
      "blocked transaction",
      "lock timeout",
      "ハング"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, BLOCKED_TIME,\n    BLOCKED_CONNECTION_ID, BLOCKED_TRANSACTION_ID,\n    LOCK_OWNER_CONNECTION_ID, LOCK_OWNER_TRANSACTION_ID,\n    WAITING_SCHEMA_NAME, WAITING_OBJECT_NAME,\n    LOCK_TYPE, LOCK_MODE\nFROM SYS.M_BLOCKED_TRANSACTIONS\nORDER BY BLOCKED_TIME ASC;",
    "views": [
      "SYS.M_BLOCKED_TRANSACTIONS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "対象サービス"
      },
      {
        "name": "BLOCKED_TIME",
        "meaning": "ブロック開始時刻"
      },
      {
        "name": "BLOCKED_CONNECTION_ID / BLOCKED_TRANSACTION_ID",
        "meaning": "待機側の接続・トランザクション"
      },
      {
        "name": "LOCK_OWNER_CONNECTION_ID / LOCK_OWNER_TRANSACTION_ID",
        "meaning": "ロック保持側の接続・トランザクション"
      },
      {
        "name": "WAITING_SCHEMA_NAME / WAITING_OBJECT_NAME",
        "meaning": "待機対象オブジェクト"
      },
      {
        "name": "LOCK_TYPE",
        "meaning": "RECORD・TABLE・METADATA など"
      },
      {
        "name": "LOCK_MODE",
        "meaning": "既に保持されているロックのモード"
      }
    ],
    "interpretation": [
      "同じ保持接続が複数行に現れる場合は、その接続が関係する業務処理から調べます。",
      "LOCK_MODE は待機要求のモードではなく、保持中のロックに対する情報です。"
    ],
    "nextSteps": [
      "保持側 CONNECTION_ID を接続監視と照合し、業務担当者へ処理状況を確認します。",
      "DB のロックと ABAP エンキューロックは別の仕組みです。業務の症状に応じて両方を調べます。"
    ],
    "cautions": [
      "現在の待機のみです。待機解消後に空でも、過去のロック競合を否定できません。",
      "読み取り結果を根拠に接続を自動切断しません。"
    ],
    "privilege": "SYS.M_BLOCKED_TRANSACTIONS を参照できる承認済み監視ユーザーを使用します。権限で見える範囲が限られる場合があります。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_BLOCKED_TRANSACTIONS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20a8c51d75191014b6c0e177ae946724.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-08",
    "category": "locks",
    "title": "開始時刻の古い未完了トランザクションを確認",
    "summary": "非 INACTIVE のトランザクションを開始時刻順に並べて調査候補を探します。",
    "symptoms": [
      "長時間トランザクション",
      "未完了",
      "commit",
      "ロック継続"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, CONNECTION_ID, TRANSACTION_ID,\n    TRANSACTION_TYPE, TRANSACTION_STATUS, START_TIME,\n    ACQUIRED_LOCK_COUNT, ACTIVE_STATEMENT_COUNT,\n    LOCK_WAIT_TIME AS LOCK_WAIT_SECONDS\nFROM SYS.M_TRANSACTIONS\nWHERE TRANSACTION_STATUS <> 'INACTIVE'\nORDER BY START_TIME ASC;",
    "views": [
      "SYS.M_TRANSACTIONS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "サービス"
      },
      {
        "name": "CONNECTION_ID / TRANSACTION_ID",
        "meaning": "接続・トランザクション ID"
      },
      {
        "name": "TRANSACTION_TYPE / TRANSACTION_STATUS",
        "meaning": "種別・状態"
      },
      {
        "name": "START_TIME",
        "meaning": "開始時刻"
      },
      {
        "name": "ACQUIRED_LOCK_COUNT",
        "meaning": "取得ロック数"
      },
      {
        "name": "ACTIVE_STATEMENT_COUNT",
        "meaning": "開いているカーソル数"
      },
      {
        "name": "LOCK_WAIT_SECONDS",
        "meaning": "累積ロック待機秒数"
      }
    ],
    "interpretation": [
      "古い開始時刻だけで異常と決めず、業務の想定所要時間と照合します。"
    ],
    "nextSteps": [
      "対象接続と PERF-07 を照合します。"
    ],
    "cautions": [
      "TRANSACTION_ID は終了後に再利用されます。採取時刻とサービスも記録します。",
      "INACTIVE を除外しているため、全トランザクション一覧ではありません。"
    ],
    "privilege": "SYS.M_TRANSACTIONS を参照できる監視ユーザーで実行します。可視範囲を確認します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_TRANSACTIONS（2297–2299 ページ）",
        "url": "https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=2297"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-09",
    "category": "locks",
    "title": "接続数をユーザーと状態別に集計",
    "summary": "稼働中の接続を集計し、接続増加やキュー待ちの偏りを確認します。",
    "symptoms": [
      "接続数増加",
      "QUEUEING",
      "接続プール",
      "session",
      "同時実行"
    ],
    "sql": "SELECT\n    HOST, PORT, USER_NAME, CONNECTION_STATUS,\n    COUNT(*) AS CONNECTION_COUNT\nFROM SYS.M_CONNECTIONS\nWHERE CONNECTION_STATUS <> 'EMPTY'\nGROUP BY HOST, PORT, USER_NAME, CONNECTION_STATUS\nORDER BY CONNECTION_COUNT DESC;",
    "views": [
      "SYS.M_CONNECTIONS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "接続先サービス"
      },
      {
        "name": "USER_NAME",
        "meaning": "DB ユーザー"
      },
      {
        "name": "CONNECTION_STATUS",
        "meaning": "RUNNING・IDLE・QUEUEING 等"
      },
      {
        "name": "CONNECTION_COUNT",
        "meaning": "グループ内の接続数"
      }
    ],
    "interpretation": [
      "IDLE の多さだけで障害とは判断せず、接続プールの通常値と比較します。QUEUEING の増加は次の確認対象です。"
    ],
    "nextSteps": [
      "業務実行数と平常時の接続数を比較します。"
    ],
    "cautions": [
      "EMPTY の履歴接続を除外します。これは接続数であり SAP のログオン人数ではありません。",
      "可視範囲だけの集計になる場合があります。"
    ],
    "privilege": "接続監視の権限範囲で実行します。全体を確認する場合は既存の承認済み監視経路を利用します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_CONNECTIONS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20abcf1f75191014a254a82b3d0f66bf.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-10",
    "category": "performance",
    "title": "実行エンジン別のプラン統計を比較",
    "summary": "エンジン単位の平均実行時間と CPU 時間から遅いプランの候補を確認します。",
    "symptoms": [
      "実行エンジン",
      "HEX",
      "CPU 時間",
      "プラン差",
      "平均時間"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, PLAN_ID, STATEMENT_HASH, EXECUTION_ENGINE,\n    EXECUTION_COUNT, AVG_EXECUTION_TIME AS AVG_EXECUTION_MS,\n    AVG_EXECUTION_CPU_TIME AS AVG_CPU_MS,\n    AVG_EXECUTION_MEMORY_SIZE AS AVG_MEMORY_BYTES,\n    LAST_EXECUTION_TIMESTAMP\nFROM SYS.M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS\nWHERE EXECUTION_COUNT > 0\nORDER BY AVG_EXECUTION_TIME DESC;",
    "views": [
      "SYS.M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "サービス"
      },
      {
        "name": "PLAN_ID",
        "meaning": "論理プラン ID"
      },
      {
        "name": "STATEMENT_HASH",
        "meaning": "SQL ハッシュ"
      },
      {
        "name": "EXECUTION_ENGINE",
        "meaning": "使用された実行フレームワーク"
      },
      {
        "name": "EXECUTION_COUNT",
        "meaning": "累積実行回数"
      },
      {
        "name": "AVG_EXECUTION_MS",
        "meaning": "平均経過時間（元の単位がミリ秒）"
      },
      {
        "name": "AVG_CPU_MS",
        "meaning": "平均 CPU 時間（ミリ秒）"
      },
      {
        "name": "AVG_MEMORY_BYTES",
        "meaning": "追跡された平均メモリ量（バイト）"
      },
      {
        "name": "LAST_EXECUTION_TIMESTAMP",
        "meaning": "最終実行時刻"
      }
    ],
    "interpretation": [
      "同じ SQL について HEX とそれ以外の行が分かれる場合があります。回数と最終実行時刻も併せて比較します。",
      "CPU 時間と経過時間は異なる指標です。単独で性能の良否を決めません。"
    ],
    "nextSteps": [
      "ハッシュを PERF-04 の SQL と照合します。",
      "同等の入力・業務条件を確認してから運用担当者へ詳細解析を依頼します。"
    ],
    "cautions": [
      "SPS 08 の定義で確認しています。古いリビジョンではビュー・列の存在を確認します。",
      "M_SQL_PLAN_CACHE の実行時間列とは単位が異なります。",
      "追跡メモリ量は DB 全体の使用メモリではありません。"
    ],
    "privilege": "当ビューを参照できる承認済み監視ユーザーを利用し、結果の可視範囲を確認します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/ad088a4d0d254d1ba6d0a1fc58068eb9.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "PERF-11",
    "category": "locks",
    "title": "古いデータ版の回収が進んでいるか確認",
    "summary": "ガベージコレクションの履歴件数と読み取り TID を採取し、滞留の兆候を確認します。",
    "symptoms": [
      "MVCC",
      "garbage collection",
      "古いバージョン",
      "トランザクション",
      "メモリ増加"
    ],
    "sql": "SELECT TOP 50\n    HOST, PORT, STORE_TYPE, HISTORY_COUNT,\n    WAITER_COUNT, MIN_READ_TID,\n    STARTED_JOBS, PROCESSED_JOBS\nFROM SYS.M_GARBAGE_COLLECTION_STATISTICS\nORDER BY HISTORY_COUNT DESC;",
    "views": [
      "SYS.M_GARBAGE_COLLECTION_STATISTICS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "サービス"
      },
      {
        "name": "STORE_TYPE",
        "meaning": "対象ストア種別"
      },
      {
        "name": "HISTORY_COUNT",
        "meaning": "現在の履歴ファイル数"
      },
      {
        "name": "WAITER_COUNT",
        "meaning": "現在の回収待機者数"
      },
      {
        "name": "MIN_READ_TID",
        "meaning": "把握されている最小読み取り TID"
      },
      {
        "name": "STARTED_JOBS",
        "meaning": "開始された回収ジョブ数"
      },
      {
        "name": "PROCESSED_JOBS",
        "meaning": "処理済み undo ファイル数"
      }
    ],
    "interpretation": [
      "履歴が増え続け、MIN_READ_TID が進まない場合は、長時間スナップショットを保持する処理を調べます。",
      "HISTORY_COUNT はレコード件数やメモリバイト数ではありません。"
    ],
    "nextSteps": [
      "採取時刻を残して間隔を置き、同じサービスの値の推移を比較します。",
      "トランザクションと開いたままのカーソルを運用担当者と調べます。"
    ],
    "cautions": [
      "単回の件数だけで異常閾値を決めません。",
      "累積カウンターと現在値を混同せず、再起動・リセットの有無を確認して比較します。"
    ],
    "privilege": "SYS.M_GARBAGE_COLLECTION_STATISTICS を参照できる監視ユーザーを利用します。表示範囲は実効権限に依存します。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA SQL Reference SPS 08 — M_GARBAGE_COLLECTION_STATISTICS",
        "url": "https://help.sap.com/docs/PRODUCT_ID/4fe29514fd584807ac9f2a04f6754767/20b04b8f7519101499c39b3f35659a7f.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "MEM-01",
    "category": "memory",
    "title": "サービス別のメモリ使用量と実効上限",
    "summary": "使用量の大きいサービスを特定し、メモリプールの使用量と実効割当上限を並べて確認します。",
    "symptoms": [
      "メモリ不足",
      "OOM",
      "使用メモリ増加",
      "indexserver"
    ],
    "sql": "SELECT TOP 50\n  HOST, PORT, SERVICE_NAME,\n  TOTAL_MEMORY_USED_SIZE,\n  HEAP_MEMORY_USED_SIZE,\n  SHARED_MEMORY_USED_SIZE,\n  EFFECTIVE_ALLOCATION_LIMIT,\n  PHYSICAL_MEMORY_SIZE\nFROM SYS.M_SERVICE_MEMORY\nORDER BY TOTAL_MEMORY_USED_SIZE DESC, HOST, PORT;",
    "views": [
      "SYS.M_SERVICE_MEMORY"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT / SERVICE_NAME",
        "meaning": "サービスを識別するホスト、内部ポート、名称。"
      },
      {
        "name": "TOTAL_MEMORY_USED_SIZE",
        "meaning": "メモリプール内の使用量（BIGINT、バイト）。"
      },
      {
        "name": "HEAP_MEMORY_USED_SIZE / SHARED_MEMORY_USED_SIZE",
        "meaning": "使用中のヒープ領域／共有メモリ領域（BIGINT、バイト）。"
      },
      {
        "name": "EFFECTIVE_ALLOCATION_LIMIT",
        "meaning": "他プロセスのプールを考慮した実効上限（BIGINT、バイト）。"
      },
      {
        "name": "PHYSICAL_MEMORY_SIZE",
        "meaning": "OSから見た常駐物理メモリ（BIGINT、バイト）。"
      }
    ],
    "interpretation": [
      "実効上限に対して使用量が増え続けるサービスを、同じ時刻帯のワークロードと照合する。",
      "OS常駐量とHANAプール使用量は定義が異なるため、差だけでリークと判断しない。"
    ],
    "nextSteps": [
      "MEM-02でコンポーネント別の内訳を確認する。",
      "発生時刻の実行SQL・バッチ・OOM診断情報を監視担当者と照合する。"
    ],
    "cautions": [
      "現在値のスナップショット。採取時刻とホスト・ポートを記録して比較する。",
      "TOP 50は表示行数の制限であり、結果だけで全サービスの合計を算出しない。"
    ],
    "privilege": "対象ビューの SELECT が必要（既存ロール経由を含む）。表示は認可範囲に依存する。全件の確認が必要な場合は監視担当者に依頼する。CATALOG READ は既に SELECT 可能なビューの表示制限を外す権限であり、SELECT の代替ではない。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_SERVICE_MEMORY System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bf33c975191014bc16d7ffb7717db2.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "MEM-02",
    "category": "memory",
    "title": "コンポーネント別のメモリ内訳",
    "summary": "サービス内の論理コンポーネントを使用メモリ順に並べ、増加した領域を絞り込みます。",
    "symptoms": [
      "メモリ増加",
      "column store",
      "row store",
      "コンポーネント"
    ],
    "sql": "SELECT TOP 50\n  HOST, PORT, COMPONENT, USED_MEMORY_SIZE\nFROM SYS.M_SERVICE_COMPONENT_MEMORY\nORDER BY USED_MEMORY_SIZE DESC, HOST, PORT, COMPONENT;",
    "views": [
      "SYS.M_SERVICE_COMPONENT_MEMORY"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT",
        "meaning": "対象サービスのホストと内部ポート。"
      },
      {
        "name": "COMPONENT",
        "meaning": "論理コンポーネント名（VARCHAR(64)）。"
      },
      {
        "name": "USED_MEMORY_SIZE",
        "meaning": "コンポーネントが使用するメモリ（BIGINT、バイト）。"
      }
    ],
    "interpretation": [
      "同じホスト・ポート・コンポーネントの前回値と比較し、増加先を特定する。",
      "大きいコンポーネントは調査対象の候補。大きさ単独は障害の根拠にならない。"
    ],
    "nextSteps": [
      "列ストアが大きい場合はMEM-03でテーブル／パーティションを確認する。",
      "詳細が必要なら承認済みの監視手順でアロケータ統計を調査する。"
    ],
    "cautions": [
      "現在値のため、問題発生後にメモリが解放されるとピークは分からない。",
      "上位50行だけを取得する。全体合計との一致確認には全件を収集した監視結果を用いる。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_SERVICE_COMPONENT_MEMORY System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bed4f675191014a4cf8e62c28d16ae.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "MEM-03",
    "category": "memory",
    "title": "大きい列テーブルとデルタ領域",
    "summary": "列テーブルをパーティション単位で並べ、現在のメモリ使用量とデルタの大きさを確認します。",
    "symptoms": [
      "列ストア肥大",
      "テーブルサイズ",
      "デルタ増加",
      "メモリ不足"
    ],
    "sql": "SELECT TOP 50\n  HOST, PORT, SCHEMA_NAME, TABLE_NAME, PART_ID,\n  MEMORY_SIZE_IN_TOTAL, MEMORY_SIZE_IN_MAIN,\n  MEMORY_SIZE_IN_DELTA, RAW_RECORD_COUNT_IN_DELTA\nFROM SYS.M_CS_TABLES\nORDER BY MEMORY_SIZE_IN_TOTAL DESC, SCHEMA_NAME, TABLE_NAME, PART_ID;",
    "views": [
      "SYS.M_CS_TABLES"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "SCHEMA_NAME / TABLE_NAME / PART_ID",
        "meaning": "テーブルとパーティション。非分割は0、-1はスキーマ変更中を表す。"
      },
      {
        "name": "MEMORY_SIZE_IN_TOTAL",
        "meaning": "主領域・デルタ・履歴領域の合計メモリ（BIGINT、バイト）。"
      },
      {
        "name": "MEMORY_SIZE_IN_MAIN / MEMORY_SIZE_IN_DELTA",
        "meaning": "現在の主領域／デルタ領域メモリ（BIGINT、バイト）。"
      },
      {
        "name": "RAW_RECORD_COUNT_IN_DELTA",
        "meaning": "削除済み行などを含むデルタの内部エントリ数（BIGINT）。"
      }
    ],
    "interpretation": [
      "主領域の使用量はロード済み列に依存するため、完全ロード時のサイズやディスク容量とは異なる。",
      "デルタの内部件数は業務上の有効行数ではない。デルタが大きい対象はMEM-04と照合する。"
    ],
    "nextSteps": [
      "増加したテーブルを利用するS/4HANAのバッチやデータロードを確認する。",
      "特定テーブルに絞る際はSCHEMA_NAMEとTABLE_NAMEの両方を条件に追加する。"
    ],
    "cautions": [
      "大規模DBでは全テーブル統計の収集・ソートに負荷がかかるため連続実行を避ける。",
      "同じテーブルが複数ホスト・パーティション・レプリカで現れる場合がある。業務行数として合算しない。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA — M_CS_TABLES System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ad60f77519101498ccb610c33c3ca6.html"
      },
      {
        "title": "SAP HANA 2.0 SPS 08 SQL Reference — M_CS_TABLES（1872頁以降）",
        "url": "https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1872"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "MEM-04",
    "category": "memory",
    "title": "直近のデルタマージ結果",
    "summary": "最近のデルタマージについて実行時間・待機時間・エラー詳細を確認します。",
    "symptoms": [
      "デルタマージ失敗",
      "merge",
      "ロード遅延",
      "デルタ肥大"
    ],
    "sql": "SELECT TOP 50\n  HOST, PORT, SCHEMA_NAME, TABLE_NAME, PART_ID,\n  START_TIME, MOTIVATION, SUCCESS,\n  EXECUTION_TIME, RESOURCE_WAIT_TIME,\n  LAST_ERROR, ERROR_DESCRIPTION\nFROM SYS.M_DELTA_MERGE_STATISTICS\nWHERE TYPE = 'MERGE'\nORDER BY START_TIME DESC, HOST, PORT;",
    "views": [
      "SYS.M_DELTA_MERGE_STATISTICS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "START_TIME",
        "meaning": "マージ開始時刻（TIMESTAMP、サーバーのローカル時刻）。"
      },
      {
        "name": "MOTIVATION",
        "meaning": "AUTO、SMARTなどの実行契機。"
      },
      {
        "name": "SUCCESS",
        "meaning": "成功フラグ（VARCHAR(5)）。空デルタによる未実行もFALSEになり得る。"
      },
      {
        "name": "EXECUTION_TIME / RESOURCE_WAIT_TIME",
        "meaning": "実行時間／メモリ・CPU資源の待機時間（BIGINT、ミリ秒）。"
      },
      {
        "name": "LAST_ERROR / ERROR_DESCRIPTION",
        "meaning": "エラーコード（INTEGER）と詳細（NVARCHAR(2000)）。"
      }
    ],
    "interpretation": [
      "SUCCESSだけで失敗障害と決めず、LAST_ERROR・ERROR_DESCRIPTIONを確認する。",
      "資源待機が長ければ、同時刻のメモリ・CPU状況や並行マージを調べる。"
    ],
    "nextSteps": [
      "同じテーブル・PART_IDのMEM-03結果と関連付ける。",
      "繰り返すエラーは発生時刻・コードを保存し、担当者の診断に渡す。"
    ],
    "cautions": [
      "履歴の保持範囲は環境に依存し、全期間の監査ログとして使わない。",
      "最新50件。特定障害の調査時は対象テーブルと時刻条件を追加すると読み取り量を抑えられる。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_DELTA_MERGE_STATISTICS System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20aed3e475191014aae191f316692093.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "STO-01",
    "category": "storage",
    "title": "データ・ログ・バックアップ先の空き容量",
    "summary": "HANAが認識するディスクの総容量・使用量・差分を用途別に確認します。",
    "symptoms": [
      "ディスク逼迫",
      "空き容量",
      "log full",
      "backup destination"
    ],
    "sql": "SELECT TOP 100\n  DISK_ID, DEVICE_ID, HOST, USAGE_TYPE, PATH,\n  TOTAL_SIZE, USED_SIZE,\n  TOTAL_SIZE - USED_SIZE AS FREE_BYTES\nFROM SYS.M_DISKS\nORDER BY FREE_BYTES ASC, DISK_ID;",
    "views": [
      "SYS.M_DISKS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "DISK_ID / DEVICE_ID",
        "meaning": "ディスク識別子／DB内部デバイス識別子。"
      },
      {
        "name": "HOST",
        "meaning": "単一ホスト専用のディスクの場合に設定されるホスト名。"
      },
      {
        "name": "USAGE_TYPE / PATH",
        "meaning": "DATA・LOG・バックアップ等の用途とパス。"
      },
      {
        "name": "TOTAL_SIZE / USED_SIZE / FREE_BYTES",
        "meaning": "使用可能総容量／使用量／差分として算出した空き（バイト）。"
      }
    ],
    "interpretation": [
      "空きの少ない用途とパスを特定し、増加速度を過去の採取結果と比較する。",
      "同じデバイスを複数用途で参照する場合があるため、行を単純合算して物理容量にしない。"
    ],
    "nextSteps": [
      "ログ領域はSTO-03、データ領域はSTO-02で内訳を確認する。",
      "バックアップ先はOPS-02とOPS-03を照合し、保存先容量を運用担当者に確認する。"
    ],
    "cautions": [
      "ホスト名が空でも必ずしも異常ではない。共有ディスクの識別にはDEVICE_IDとパスを併用する。",
      "デバイス上の容量であり、当該テナントだけの使用量とは限らない。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_DISKS System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20aef7a275191014b37acbc35b4f20a4.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "STO-02",
    "category": "storage",
    "title": "データボリュームのファイルサイズと状態",
    "summary": "永続化データファイルを大きい順に表示し、ファイルごとの状態とサイズを確認します。",
    "symptoms": [
      "data volume",
      "データ領域増大",
      "永続化",
      "ファイルサイズ"
    ],
    "sql": "SELECT TOP 100\n  HOST, PORT, VOLUME_ID, PARTITION_ID,\n  FILE_NAME, FILE_ID, STATE, SIZE, MAX_SIZE\nFROM SYS.M_DATA_VOLUMES\nORDER BY SIZE DESC, HOST, PORT, FILE_ID;",
    "views": [
      "SYS.M_DATA_VOLUMES"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT / VOLUME_ID",
        "meaning": "サービスと永続化ボリュームの識別情報。"
      },
      {
        "name": "PARTITION_ID / FILE_ID / FILE_NAME",
        "meaning": "パーティション・ファイルの識別情報とパス。"
      },
      {
        "name": "STATE",
        "meaning": "ACTIVATING、ACTIVE、DEACTIVATING等の状態（VARCHAR(16)）。"
      },
      {
        "name": "SIZE / MAX_SIZE",
        "meaning": "データボリュームの現在サイズ／最大サイズ（BIGINT、バイト）。"
      }
    ],
    "interpretation": [
      "大きいファイルの所在を把握し、STO-01の対象デバイスの空き容量と照合する。",
      "ファイルサイズは実データの使用ページ量と一致しないことがある。"
    ],
    "nextSteps": [
      "過去のサイズと比較して増加したボリュームを特定する。",
      "使用ページ量の評価は運用担当者のデータボリューム監視と合わせて行う。"
    ],
    "cautions": [
      "MAX_SIZEとの差はファイル上の余地であり、OSファイルシステムの空き容量ではない。",
      "ファイルが大きいという理由だけで縮小や削除を判断しない。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_DATA_VOLUMES System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ae1b2875191014815ce801d2843a02.html"
      },
      {
        "title": "SAP HANA Administration Guide — Data and Log Volumes",
        "url": "https://help.sap.com/doc/eb75509ab0fd1014a2c6ba9b6d252832/2.0.08/en-US/SAP_HANA_Administration_Guide_en.pdf"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "STO-03",
    "category": "storage",
    "title": "ログセグメントを状態別に集計",
    "summary": "再利用待ち・バックアップ待ち・レプリケーション保持のログを状態ごとに集計します。",
    "symptoms": [
      "ログ領域逼迫",
      "log full",
      "ログバックアップ停滞",
      "RetainedFree"
    ],
    "sql": "SELECT\n  HOST, PORT, VOLUME_ID, STATE,\n  COUNT(*) AS SEGMENT_COUNT,\n  SUM(USED_SIZE) AS USED_BYTES,\n  SUM(TOTAL_SIZE) AS TOTAL_BYTES\nFROM SYS.M_LOG_SEGMENTS\nGROUP BY HOST, PORT, VOLUME_ID, STATE\nORDER BY TOTAL_BYTES DESC, HOST, PORT, STATE;",
    "views": [
      "SYS.M_LOG_SEGMENTS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "STATE",
        "meaning": "ログセグメントの現在状態。"
      },
      {
        "name": "SEGMENT_COUNT",
        "meaning": "状態別のセグメント数（集計列）。"
      },
      {
        "name": "USED_BYTES / TOTAL_BYTES",
        "meaning": "状態別の使用量／確保サイズの合計（バイト）。"
      }
    ],
    "interpretation": [
      "Closed・Truncatedは未バックアップ。BackedUpはバックアップ済みだが再起動用に必要。",
      "Freeは再利用可能。RetainedFreeはシステムレプリケーションの再同期向けに保持されている。"
    ],
    "nextSteps": [
      "未バックアップの状態が増え続ける場合はOPS-02でログバックアップ結果を確認する。",
      "RetainedFreeが多い場合はOPS-04とレプリケーション監視を照合する。"
    ],
    "cautions": [
      "状態は現在値で、単発のセグメント数では停滞を断定できない。",
      "セグメント数が多い環境では集計の負荷に注意し、短間隔の連続実行を避ける。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_LOG_SEGMENTS System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b475c7751910149705a31072bd2c45.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "OPS-01",
    "category": "operations",
    "title": "サービス稼働状態とSQLポート",
    "summary": "接続先テナントのサービス状態・役割・SQLポートを確認します。",
    "symptoms": [
      "接続不可",
      "サービス停止",
      "SQLポート",
      "起動中"
    ],
    "sql": "SELECT TOP 100\n  HOST, PORT, SERVICE_NAME, PROCESS_ID,\n  ACTIVE_STATUS, SQL_PORT, COORDINATOR_TYPE,\n  IS_DATABASE_LOCAL\nFROM SYS.M_SERVICES\nORDER BY HOST, PORT;",
    "views": [
      "SYS.M_SERVICES"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "ACTIVE_STATUS",
        "meaning": "稼働状態：YES、NO、UNKNOWN、STARTING、STOPPING。"
      },
      {
        "name": "SQL_PORT / PORT",
        "meaning": "SQL接続用ポート／サービス内部ポート（INTEGER）。"
      },
      {
        "name": "COORDINATOR_TYPE",
        "meaning": "分散構成での役割：MASTER、SLAVE、STANDBY、NONE。"
      },
      {
        "name": "IS_DATABASE_LOCAL",
        "meaning": "DBに対するサービスの所属を表すフラグ（VARCHAR(5)）。"
      }
    ],
    "interpretation": [
      "期待したサービス構成と照合し、起動・停止中の状態が長く続いていないか確認する。",
      "SQL_PORTと内部PORTを混同しない。ポート番号をインスタンス番号から一律に推測しない。"
    ],
    "nextSteps": [
      "障害時刻の接続エラーと対象ホスト・SQLポートを突き合わせる。",
      "システム全体の調査はSYSTEMDBの認可済み監視担当者に依頼する。"
    ],
    "cautions": [
      "対象テナントに接続できない場合、このSQL自体は実行できない。",
      "SYSTEMDB横断監視のSYS_DATABASES.M_SERVICESとは可視範囲が異なる。"
    ],
    "privilege": "対象ビューの SELECT に加え、公式のテナントポート説明では CATALOG READ または DATABASE ADMIN が必要。閲覧目的では認可済みの監視ユーザーを使い、管理権限の新規付与を前提にしない。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_SERVICES System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c4ef8375191014bd51ad2f0677db6a.html"
      },
      {
        "title": "SAP HANA 2.0 SPS 08 — Port Assignment in Tenant Databases",
        "url": "https://help.sap.com/docs/r/6b94445c94ae495c83a19646e7c3fd56/2.0.08/en-US/440f6efe693d4b82ade2d8b182eb1efb.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "OPS-02",
    "category": "operations",
    "title": "直近のバックアップ結果",
    "summary": "直近50件のバックアップ種別・状態・UTC時刻・メッセージを確認します。",
    "symptoms": [
      "バックアップ失敗",
      "ログバックアップ",
      "backup failed",
      "復旧準備"
    ],
    "sql": "SELECT TOP 50\n  ENTRY_ID, BACKUP_ID, ENTRY_TYPE_NAME,\n  UTC_START_TIME, UTC_END_TIME, STATE_NAME, MESSAGE\nFROM SYS.M_BACKUP_CATALOG\nORDER BY UTC_START_TIME DESC, ENTRY_ID DESC;",
    "views": [
      "SYS.M_BACKUP_CATALOG"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "ENTRY_ID / BACKUP_ID",
        "meaning": "カタログ項目ID／バックアップID（BIGINT）。"
      },
      {
        "name": "ENTRY_TYPE_NAME / STATE_NAME",
        "meaning": "バックアップ種別／処理状態（VARCHAR(64)）。"
      },
      {
        "name": "UTC_START_TIME / UTC_END_TIME",
        "meaning": "開始／終了のUTC時刻（TIMESTAMP）。"
      },
      {
        "name": "MESSAGE",
        "meaning": "追加メッセージ（VARCHAR(512)）。"
      }
    ],
    "interpretation": [
      "failed等の行はメッセージと実行時刻を調べる。runningは終了済みと扱わない。",
      "カタログ上の成功だけで、必要な全バックアップファイルの存在や復旧可否まで証明できるわけではない。"
    ],
    "nextSteps": [
      "ログバックアップが多く完全バックアップが見えない場合はENTRY_TYPE_NAMEで絞り込む。",
      "異常行のBACKUP_IDとbackup.logを監視担当者に照会する。"
    ],
    "cautions": [
      "UTC時刻で表示するため、業務のローカル時刻と比較するときは時差を合わせる。",
      "カタログが大きい環境では絞り込みを追加する。削除済みカタログ項目は表示されない。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "中",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 SQL Reference — M_BACKUP_CATALOG（1780–1782頁）",
        "url": "https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1780"
      },
      {
        "title": "SAP HANA — Monitoring Views for the Backup Catalog",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c49194e3bb5710149e40f7c738a46bf2.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "OPS-03",
    "category": "operations",
    "title": "データバックアップの進捗",
    "summary": "現在または直前のデータバックアップについて、サービス別の転送量と状態を確認します。",
    "symptoms": [
      "バックアップ長時間化",
      "backup progress",
      "転送停滞",
      "Backint"
    ],
    "sql": "SELECT TOP 100\n  BACKUP_ID, HOST, PORT, SERVICE_NAME, ENTRY_TYPE_NAME,\n  UTC_START_TIME, UTC_END_TIME, STATE_NAME,\n  BACKUP_SIZE, TRANSFERRED_SIZE\nFROM SYS.M_BACKUP_PROGRESS\nORDER BY UTC_START_TIME DESC, HOST, PORT;",
    "views": [
      "SYS.M_BACKUP_PROGRESS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "BACKUP_ID / HOST / PORT",
        "meaning": "バックアップとサービスの識別情報。"
      },
      {
        "name": "STATE_NAME",
        "meaning": "現在の処理状態（VARCHAR(64)）。"
      },
      {
        "name": "BACKUP_SIZE / TRANSFERRED_SIZE",
        "meaning": "総データ量／転送済み量（BIGINT、バイト）。"
      },
      {
        "name": "UTC_START_TIME / UTC_END_TIME",
        "meaning": "開始／終了のUTC時刻（TIMESTAMP）。"
      }
    ],
    "interpretation": [
      "同じBACKUP_IDの転送量を時刻を空けて比較する。増分がない場合は状態や保存先を調べる。",
      "サービスごとに行が分かれるため、一つの行だけで全体の完了を判断しない。"
    ],
    "nextSteps": [
      "OPS-02で最終結果を確認する。",
      "対象保存先の容量とバックアップ製品側のジョブ状態を照合する。"
    ],
    "cautions": [
      "完全・差分・増分データバックアップが対象。ログバックアップ履歴にはOPS-02を使う。",
      "稼働中または直前の結果のみで、DB再起動によりクリアされる。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 SQL Reference — M_BACKUP_PROGRESS（1790頁）",
        "url": "https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1790"
      },
      {
        "title": "SAP HANA — Monitoring Views for the Backup Catalog",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c49194e3bb5710149e40f7c738a46bf2.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "OPS-04",
    "category": "operations",
    "title": "レプリケーション状態と未処理ログ",
    "summary": "プライマリ側でサービスごとのレプリケーション状態と転送・リプレイ滞留を確認します。",
    "symptoms": [
      "レプリケーション遅延",
      "system replication",
      "backlog",
      "同期異常"
    ],
    "sql": "SELECT TOP 100\n  HOST, PORT, SECONDARY_HOST, SECONDARY_PORT,\n  REPLICATION_MODE, REPLICATION_STATUS,\n  REPLICATION_STATUS_DETAILS,\n  BACKLOG_SIZE, BACKLOG_TIME,\n  REPLAY_BACKLOG_SIZE, REPLAY_BACKLOG_TIME\nFROM SYS.M_SERVICE_REPLICATION\nORDER BY BACKLOG_SIZE DESC, REPLAY_BACKLOG_SIZE DESC, HOST, PORT;",
    "views": [
      "SYS.M_SERVICE_REPLICATION"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "REPLICATION_MODE / REPLICATION_STATUS",
        "meaning": "レプリケーションモード／状態（VARCHAR(16)）。"
      },
      {
        "name": "REPLICATION_STATUS_DETAILS",
        "meaning": "状態の詳細。"
      },
      {
        "name": "BACKLOG_SIZE / BACKLOG_TIME",
        "meaning": "現在のレプリケーション滞留（BIGINT、バイト／マイクロ秒）。"
      },
      {
        "name": "REPLAY_BACKLOG_SIZE",
        "meaning": "転送済みだがセカンダリで未リプレイのログ量（BIGINT、バイト）。"
      },
      {
        "name": "REPLAY_BACKLOG_TIME",
        "meaning": "最後に転送したログと最後にリプレイしたログの時刻差（BIGINT、マイクロ秒）。"
      }
    ],
    "interpretation": [
      "ACTIVE以外のサービスは詳細メッセージと監視状態を照合する。",
      "転送滞留とリプレイ滞留を分けて比較し、どちらが継続的に増えているか確認する。"
    ],
    "nextSteps": [
      "プライマリ・セカンダリ双方のCPU、I/O、ネットワークの監視値と照合する。",
      "業務RPOと運用監視の基準に基づいて担当者へ連絡する。"
    ],
    "cautions": [
      "プライマリ側での確認を想定。未構成や可視範囲の不足による空結果を正常性の証明にしない。",
      "マイクロ秒は1,000,000で割ると秒。状態を単発で断定せず時間を空けて比較する。",
      "テナント内の結果だけでSYSTEMDBを含む全システムの正常性を保証しない。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB（プライマリ側）",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_SERVICE_REPLICATION System View",
        "url": "https://help.sap.com/docs/PRODUCT_ID/4e9b18c116aa42fc84c7dbfd02111aba/20c43fc975191014b0ece11b47a86c10.html?locale=en-US"
      },
      {
        "title": "SAP HANA — Monitoring System Replication with SAP HANA Studio",
        "url": "https://help.sap.com/docs/r/f157e7b47b2a417a99eadd4b6c433b77/latest/en-US/314b58a4b894477e8291dad58fed6445.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  },
  {
    "id": "OPS-05",
    "category": "operations",
    "title": "次回データバックアップの容量見積り",
    "summary": "完全・差分・増分バックアップの推定容量をサービス別に確認します。",
    "symptoms": [
      "バックアップ先容量",
      "backup size",
      "容量計画",
      "バックアップ肥大"
    ],
    "sql": "SELECT TOP 100\n  HOST, PORT, SERVICE_NAME, ENTRY_TYPE_NAME, ESTIMATED_SIZE\nFROM SYS.M_BACKUP_SIZE_ESTIMATIONS\nORDER BY ENTRY_TYPE_NAME, ESTIMATED_SIZE DESC, HOST, PORT;",
    "views": [
      "SYS.M_BACKUP_SIZE_ESTIMATIONS"
    ],
    "parameters": [],
    "columns": [
      {
        "name": "HOST / PORT / SERVICE_NAME",
        "meaning": "対象サービスを識別する情報。"
      },
      {
        "name": "ENTRY_TYPE_NAME",
        "meaning": "完全・差分・増分などのバックアップ種別（NVARCHAR(64)）。"
      },
      {
        "name": "ESTIMATED_SIZE",
        "meaning": "次回バックアップの推定サイズ（BIGINT、バイト）。"
      }
    ],
    "interpretation": [
      "同じバックアップ種別のサービスを対象に容量を確認する。異なる種別を足して1回分の容量としない。",
      "見積りと実サイズは異なり得るため、過去実績と保存先の余裕を合わせて判断する。"
    ],
    "nextSteps": [
      "予定するバックアップ種別に絞り、STO-01の保存先空き容量や外部バックアップ製品の容量と比較する。",
      "前回実績との差を確認してデータ増加とバックアップ計画を見直す。"
    ],
    "cautions": [
      "完全バックアップが存在しない場合、差分・増分の見積りは表示できない。",
      "見積り値は所要時間や復旧時間を示さない。100行を超える構成では取得範囲を見直す。"
    ],
    "privilege": "対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。",
    "scope": "HANA 2.0 / テナントDB",
    "load": "低",
    "sources": [
      {
        "title": "SAP HANA 2.0 SPS 08 — M_BACKUP_SIZE_ESTIMATIONS System View",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/fc77a09ad59f481bb86d5ec534235b8b.html"
      },
      {
        "title": "SAP HANA — System Privileges (Reference): CATALOG READ",
        "url": "https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html"
      }
    ],
    "verified": "2026-09-28"
  }
];
