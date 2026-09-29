-- S/4HANA SQL Desk | HANA 2.0 on-premise / Private Cloud
-- 必要なSQLを1つずつ選択して実行してください。全件一括実行はしないでください。
-- 接続先・権限・負荷の注意を確認してください。社内実機での実行は未検証です。


-- PERF-01 | 接続先テナントと HANA バージョンを確認
-- 調査対象のデータベース名と起動時刻を採取し、別環境の結果との混同を防ぎます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 接続先で SYS.M_DATABASE を参照できる承認済み監視ユーザーを使用します。表示範囲は実効権限に依存します。
-- 注意: USAGE は任意値のため、本番判定は運用台帳と照合します。
-- 注意: 対象は接続中の DB です。SYSTEMDB の結果でテナントの状態を判断しません。
-- 結果: DATABASE_NAME が予定した S/4HANA テナントであることを確認します。
-- 結果: 起動時刻は、別時点の監視値を比較するときの補助情報です。
-- 次の確認: DB 名・VERSION・採取日時を障害記録に添えます。
-- 次の確認: SQL の列エラーがある場合は PERF-02 で実環境の列を確認します。
-- SAP HANA SQL Reference SPS 08 — M_DATABASE（1879–1880 ページ）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1879

SELECT TOP 50
    SYSTEM_ID, DATABASE_NAME, HOST,
    VERSION, START_TIME, USAGE
FROM SYS.M_DATABASE
ORDER BY DATABASE_NAME;


-- PERF-02 | 実環境の監視ビューの列と単位を確認
-- プランキャッシュの列定義を調べ、リビジョン差による列エラーを切り分けます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_MONITOR_COLUMNS を参照できる監視ユーザーを使用します。権限不足とビュー・列の不在を区別します。
-- 注意: 先頭 100 列です。列数が多い場合は POSITION > 100 を追加して続きも確認します。
-- 注意: UNIT が空でも無単位とは断定できません。列説明と公式リファレンスを併読します。
-- 結果: この環境が公開する列名・型・単位を確認します。別ビューを調べるときは WHERE のビュー名を実在する名前へ変更します。
-- 次の確認: 利用中の HANA リビジョンに対応する SQL Reference と照合します。
-- 次の確認: 存在しない列を削除するときは、診断に必要な意味が失われないか確認します。
-- SAP HANA SQL Reference SPS 08 — M_MONITOR_COLUMNS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b54f6275191014824cedc723f8ad13.html

SELECT TOP 100
    VIEW_NAME, POSITION, VIEW_COLUMN_NAME,
    DATA_TYPE_NAME, UNIT, DESCRIPTION
FROM SYS.M_MONITOR_COLUMNS
WHERE VIEW_NAME = 'M_SQL_PLAN_CACHE'
ORDER BY POSITION;


-- PERF-03 | 自身の DB 接続と実行状態を確認
-- 自分の接続 ID とクライアント情報を採取し、監視画面との対応を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 自身の接続情報が見える監視ユーザーで実行します。他接続の閲覧権限はこの確認の前提ではありません。
-- 注意: 接続を作り直した場合は ID を再採取します。
-- 注意: 採取 SQL 自体が状態に影響するため、RUNNING の表示だけで異常と判断しません。
-- 結果: 自分の接続に限定した結果です。DB ユーザーと業務上の SAP ユーザーを同一視しません。
-- 次の確認: 調査に使用した CONNECTION_ID を記録します。
-- SAP HANA SQL Reference SPS 08 — M_CONNECTIONS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20abcf1f75191014a254a82b3d0f66bf.html

SELECT TOP 50
    HOST, PORT, CONNECTION_ID, USER_NAME,
    CLIENT_HOST, START_TIME, CONNECTION_STATUS, AUTO_COMMIT
FROM SYS.M_CONNECTIONS
WHERE OWN = 'TRUE'
ORDER BY HOST, PORT, CONNECTION_ID;


-- PERF-04 | 累積実行時間の大きい SQL プランを探す
-- キャッシュに残るプランを総実行時間で並べ、調査対象の SQL を絞ります。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: SYS.M_SQL_PLAN_CACHE の閲覧を許可された監視ユーザーを使用します。全体の閲覧が許可されていない場合、可視範囲だけのランキングになります。
-- 注意: 累積値であり、直近の障害時間帯だけの統計ではありません。
-- 注意: キャッシュから除外されたプランは残りません。TOP 50 でも順位付けの処理は必要です。
-- 注意: SQL 本文に業務値が含まれる場合があります。共有時は必要な情報に限定します。
-- 結果: 総時間が大きい場合、平均時間と回数を併せて見て、少数の遅い実行か多数の呼び出しかを分けます。
-- 結果: 同じハッシュでもスキーマやプランの条件が異なる場合があり、単純に一行一業務とは扱いません。
-- 次の確認: 対象 SQL と業務処理を照合し、必要な期間のアプリケーション側計測と比較します。
-- SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c57b8e75191014b22fcc8222b15970.html
-- SAP HANA Administration with SAP HANA Studio SPS 08 — SQL Plan Cache: https://help.sap.com/doc/023943d0b05e4b44bbe15658215f182d/2.0.08/en-US/SAP_HANA_Administration_with_SAP_HANA_Studio_en.pdf#page=87

SELECT TOP 50
    HOST, PORT, STATEMENT_HASH, USER_NAME, SCHEMA_NAME,
    EXECUTION_COUNT,
    TOTAL_EXECUTION_TIME / 1000000.0 AS TOTAL_EXECUTION_SECONDS,
    AVG_EXECUTION_TIME / 1000.0 AS AVG_EXECUTION_MS,
    MAX_EXECUTION_TIME / 1000.0 AS MAX_EXECUTION_MS,
    STATEMENT_STRING
FROM SYS.M_SQL_PLAN_CACHE
WHERE EXECUTION_COUNT > 0
ORDER BY TOTAL_EXECUTION_TIME DESC;


-- PERF-05 | 直近 1 時間の高コスト SQL 記録を確認
-- 既に採取されている expensive statements を時間で絞り、遅い操作を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 公式ガイドは expensive statements の閲覧に TRACE ADMIN を挙げています。既に承認された運用担当者・監視経路を使い、調査のために広い権限を新規付与しません。
-- 注意: トレースは標準で無効です。この SQL は採取設定を変更しません。
-- 注意: インメモリ保持は件数上限があります。ファイル参照モードでは読み取り負荷が大きくなり得ます。TOP は読み取り量全体の上限ではありません。
-- 注意: 時刻は DB 側の基準で照合します。SQL 本文の共有範囲に注意します。
-- 結果: OPERATION を確認して同じ種類の操作を比較します。SQL 一回の実行に複数の操作行があり得ます。
-- 結果: 空の結果は、遅い SQL がなかった証拠にはなりません。
-- 次の確認: 業務側の発生時刻と照合し、同じハッシュ・接続の記録を調べます。
-- 次の確認: 記録がない場合は既存のトレース採取状況を運用担当者に確認します。
-- SAP HANA SQL Reference SPS 08 — M_EXPENSIVE_STATEMENTS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20af736e751910148162e2ab1982f035.html
-- SAP HANA Troubleshooting SPS 08 — Expensive Statements Trace: https://help.sap.com/docs/SAP_HANA_PLATFORM/f157e7b47b2a417a99eadd4b6c433b77/5faf04f17830464eacdb7938b383d2ab.html?version=2.0.08

SELECT TOP 50
    HOST, PORT, CONNECTION_ID, STATEMENT_HASH,
    START_TIME, OPERATION, DB_USER,
    DURATION_MICROSEC / 1000000.0 AS DURATION_SECONDS,
    LOCK_WAIT_DURATION / 1000000.0 AS LOCK_WAIT_SECONDS,
    ERROR_CODE, STATEMENT_STRING
FROM SYS.M_EXPENSIVE_STATEMENTS
WHERE START_TIME >= ADD_SECONDS(CURRENT_TIMESTAMP, -3600)
ORDER BY DURATION_MICROSEC DESC;


-- PERF-06 | 現在アクティブなスレッドと待機を確認
-- 継続時間の長いアクティブスレッドを並べ、実行中か待機中かを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: SPS 08 の当ビュー説明では内容の閲覧に DATABASE ADMIN が必要です。既存の承認済み管理担当者に採取を依頼し、この目的だけで管理権限を付与しません。
-- 注意: 瞬間的な状態です。短い処理は採取間隔の間に消えます。
-- 注意: スレッド継続時間は SQL のユーザー応答時間と同じ指標ではありません。
-- 結果: アクティブには待機状態も含まれます。DURATION と CPU 時間を同一視しません。
-- 結果: THREAD_STATE とロック情報から、次に確認する接続や待機先を選びます。
-- 次の確認: 採取時刻、サービス、THREAD_ID と CONNECTION_ID を一緒に記録します。
-- 次の確認: トランザクションロックは PERF-07 と照合します。内部スレッドの待機は運用担当者へ連携します。
-- SAP HANA SQL Reference SPS 08 — M_SERVICE_THREADS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c499a975191014a0e4a0318ad19ec3.html

SELECT TOP 50
    HOST, PORT, SERVICE_NAME, THREAD_ID, CONNECTION_ID,
    THREAD_TYPE, THREAD_STATE,
    DURATION / 1000.0 AS DURATION_SECONDS,
    CPU_TIME_SELF / 1000000.0 AS CPU_SELF_SECONDS,
    STATEMENT_HASH, LOCK_WAIT_COMPONENT, LOCK_WAIT_NAME,
    LOCK_OWNER_THREAD_ID
FROM SYS.M_SERVICE_THREADS
WHERE IS_ACTIVE = 'TRUE'
ORDER BY DURATION DESC;


-- PERF-07 | ブロックされた接続とロック保持者を確認
-- 現在のトランザクションロック待ちについて、待機側と保持側の接続を対応付けます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_BLOCKED_TRANSACTIONS を参照できる承認済み監視ユーザーを使用します。権限で見える範囲が限られる場合があります。
-- 注意: 現在の待機のみです。待機解消後に空でも、過去のロック競合を否定できません。
-- 注意: 読み取り結果を根拠に接続を自動切断しません。
-- 結果: 同じ保持接続が複数行に現れる場合は、その接続が関係する業務処理から調べます。
-- 結果: LOCK_MODE は待機要求のモードではなく、保持中のロックに対する情報です。
-- 次の確認: 保持側 CONNECTION_ID を接続監視と照合し、業務担当者へ処理状況を確認します。
-- 次の確認: DB のロックと ABAP エンキューロックは別の仕組みです。業務の症状に応じて両方を調べます。
-- SAP HANA SQL Reference SPS 08 — M_BLOCKED_TRANSACTIONS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20a8c51d75191014b6c0e177ae946724.html

SELECT TOP 50
    HOST, PORT, BLOCKED_TIME,
    BLOCKED_CONNECTION_ID, BLOCKED_TRANSACTION_ID,
    LOCK_OWNER_CONNECTION_ID, LOCK_OWNER_TRANSACTION_ID,
    WAITING_SCHEMA_NAME, WAITING_OBJECT_NAME,
    LOCK_TYPE, LOCK_MODE
FROM SYS.M_BLOCKED_TRANSACTIONS
ORDER BY BLOCKED_TIME ASC;


-- PERF-08 | 開始時刻の古い未完了トランザクションを確認
-- 非 INACTIVE のトランザクションを開始時刻順に並べて調査候補を探します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_TRANSACTIONS を参照できる監視ユーザーで実行します。可視範囲を確認します。
-- 注意: TRANSACTION_ID は終了後に再利用されます。採取時刻とサービスも記録します。
-- 注意: INACTIVE を除外しているため、全トランザクション一覧ではありません。
-- 結果: 古い開始時刻だけで異常と決めず、業務の想定所要時間と照合します。
-- 次の確認: 対象接続と PERF-07 を照合します。
-- SAP HANA SQL Reference SPS 08 — M_TRANSACTIONS（2297–2299 ページ）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=2297

SELECT TOP 50
    HOST, PORT, CONNECTION_ID, TRANSACTION_ID,
    TRANSACTION_TYPE, TRANSACTION_STATUS, START_TIME,
    ACQUIRED_LOCK_COUNT, ACTIVE_STATEMENT_COUNT,
    LOCK_WAIT_TIME AS LOCK_WAIT_SECONDS
FROM SYS.M_TRANSACTIONS
WHERE TRANSACTION_STATUS <> 'INACTIVE'
ORDER BY START_TIME ASC;


-- PERF-09 | 接続数をユーザーと状態別に集計
-- 稼働中の接続を集計し、接続増加やキュー待ちの偏りを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 接続監視の権限範囲で実行します。全体を確認する場合は既存の承認済み監視経路を利用します。
-- 注意: EMPTY の履歴接続を除外します。これは接続数であり SAP のログオン人数ではありません。
-- 注意: 可視範囲だけの集計になる場合があります。
-- 結果: IDLE の多さだけで障害とは判断せず、接続プールの通常値と比較します。QUEUEING の増加は次の確認対象です。
-- 次の確認: 業務実行数と平常時の接続数を比較します。
-- SAP HANA SQL Reference SPS 08 — M_CONNECTIONS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20abcf1f75191014a254a82b3d0f66bf.html

SELECT
    HOST, PORT, USER_NAME, CONNECTION_STATUS,
    COUNT(*) AS CONNECTION_COUNT
FROM SYS.M_CONNECTIONS
WHERE CONNECTION_STATUS <> 'EMPTY'
GROUP BY HOST, PORT, USER_NAME, CONNECTION_STATUS
ORDER BY CONNECTION_COUNT DESC;


-- PERF-10 | 実行エンジン別のプラン統計を比較
-- エンジン単位の平均実行時間と CPU 時間から遅いプランの候補を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 当ビューを参照できる承認済み監視ユーザーを利用し、結果の可視範囲を確認します。
-- 注意: SPS 08 の定義で確認しています。古いリビジョンではビュー・列の存在を確認します。
-- 注意: M_SQL_PLAN_CACHE の実行時間列とは単位が異なります。
-- 注意: 追跡メモリ量は DB 全体の使用メモリではありません。
-- 結果: 同じ SQL について HEX とそれ以外の行が分かれる場合があります。回数と最終実行時刻も併せて比較します。
-- 結果: CPU 時間と経過時間は異なる指標です。単独で性能の良否を決めません。
-- 次の確認: ハッシュを PERF-04 の SQL と照合します。
-- 次の確認: 同等の入力・業務条件を確認してから運用担当者へ詳細解析を依頼します。
-- SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/ad088a4d0d254d1ba6d0a1fc58068eb9.html

SELECT TOP 50
    HOST, PORT, PLAN_ID, STATEMENT_HASH, EXECUTION_ENGINE,
    EXECUTION_COUNT, AVG_EXECUTION_TIME AS AVG_EXECUTION_MS,
    AVG_EXECUTION_CPU_TIME AS AVG_CPU_MS,
    AVG_EXECUTION_MEMORY_SIZE AS AVG_MEMORY_BYTES,
    LAST_EXECUTION_TIMESTAMP
FROM SYS.M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS
WHERE EXECUTION_COUNT > 0
ORDER BY AVG_EXECUTION_TIME DESC;


-- PERF-11 | 古いデータ版の回収が進んでいるか確認
-- ガベージコレクションの履歴件数と読み取り TID を採取し、滞留の兆候を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_GARBAGE_COLLECTION_STATISTICS を参照できる監視ユーザーを利用します。表示範囲は実効権限に依存します。
-- 注意: 単回の件数だけで異常閾値を決めません。
-- 注意: 累積カウンターと現在値を混同せず、再起動・リセットの有無を確認して比較します。
-- 結果: 履歴が増え続け、MIN_READ_TID が進まない場合は、長時間スナップショットを保持する処理を調べます。
-- 結果: HISTORY_COUNT はレコード件数やメモリバイト数ではありません。
-- 次の確認: 採取時刻を残して間隔を置き、同じサービスの値の推移を比較します。
-- 次の確認: トランザクションと開いたままのカーソルを運用担当者と調べます。
-- SAP HANA SQL Reference SPS 08 — M_GARBAGE_COLLECTION_STATISTICS: https://help.sap.com/docs/PRODUCT_ID/4fe29514fd584807ac9f2a04f6754767/20b04b8f7519101499c39b3f35659a7f.html

SELECT TOP 50
    HOST, PORT, STORE_TYPE, HISTORY_COUNT,
    WAITER_COUNT, MIN_READ_TID,
    STARTED_JOBS, PROCESSED_JOBS
FROM SYS.M_GARBAGE_COLLECTION_STATISTICS
ORDER BY HISTORY_COUNT DESC;


-- MEM-01 | サービス別のメモリ使用量と実効上限
-- 使用量の大きいサービスを特定し、メモリプールの使用量と実効割当上限を並べて確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT が必要（既存ロール経由を含む）。表示は認可範囲に依存する。全件の確認が必要な場合は監視担当者に依頼する。CATALOG READ は既に SELECT 可能なビューの表示制限を外す権限であり、SELECT の代替ではない。
-- 注意: 現在値のスナップショット。採取時刻とホスト・ポートを記録して比較する。
-- 注意: TOP 50は表示行数の制限であり、結果だけで全サービスの合計を算出しない。
-- 結果: 実効上限に対して使用量が増え続けるサービスを、同じ時刻帯のワークロードと照合する。
-- 結果: OS常駐量とHANAプール使用量は定義が異なるため、差だけでリークと判断しない。
-- 次の確認: MEM-02でコンポーネント別の内訳を確認する。
-- 次の確認: 発生時刻の実行SQL・バッチ・OOM診断情報を監視担当者と照合する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_MEMORY System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bf33c975191014bc16d7ffb7717db2.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, SERVICE_NAME,
  TOTAL_MEMORY_USED_SIZE,
  HEAP_MEMORY_USED_SIZE,
  SHARED_MEMORY_USED_SIZE,
  EFFECTIVE_ALLOCATION_LIMIT,
  PHYSICAL_MEMORY_SIZE
FROM SYS.M_SERVICE_MEMORY
ORDER BY TOTAL_MEMORY_USED_SIZE DESC, HOST, PORT;


-- MEM-02 | コンポーネント別のメモリ内訳
-- サービス内の論理コンポーネントを使用メモリ順に並べ、増加した領域を絞り込みます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 現在値のため、問題発生後にメモリが解放されるとピークは分からない。
-- 注意: 上位50行だけを取得する。全体合計との一致確認には全件を収集した監視結果を用いる。
-- 結果: 同じホスト・ポート・コンポーネントの前回値と比較し、増加先を特定する。
-- 結果: 大きいコンポーネントは調査対象の候補。大きさ単独は障害の根拠にならない。
-- 次の確認: 列ストアが大きい場合はMEM-03でテーブル／パーティションを確認する。
-- 次の確認: 詳細が必要なら承認済みの監視手順でアロケータ統計を調査する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_COMPONENT_MEMORY System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bed4f675191014a4cf8e62c28d16ae.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, COMPONENT, USED_MEMORY_SIZE
FROM SYS.M_SERVICE_COMPONENT_MEMORY
ORDER BY USED_MEMORY_SIZE DESC, HOST, PORT, COMPONENT;


-- MEM-03 | 大きい列テーブルとデルタ領域
-- 列テーブルをパーティション単位で並べ、現在のメモリ使用量とデルタの大きさを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 大規模DBでは全テーブル統計の収集・ソートに負荷がかかるため連続実行を避ける。
-- 注意: 同じテーブルが複数ホスト・パーティション・レプリカで現れる場合がある。業務行数として合算しない。
-- 結果: 主領域の使用量はロード済み列に依存するため、完全ロード時のサイズやディスク容量とは異なる。
-- 結果: デルタの内部件数は業務上の有効行数ではない。デルタが大きい対象はMEM-04と照合する。
-- 次の確認: 増加したテーブルを利用するS/4HANAのバッチやデータロードを確認する。
-- 次の確認: 特定テーブルに絞る際はSCHEMA_NAMEとTABLE_NAMEの両方を条件に追加する。
-- SAP HANA — M_CS_TABLES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ad60f77519101498ccb610c33c3ca6.html
-- SAP HANA 2.0 SPS 08 SQL Reference — M_CS_TABLES（1872頁以降）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1872
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, SCHEMA_NAME, TABLE_NAME, PART_ID,
  MEMORY_SIZE_IN_TOTAL, MEMORY_SIZE_IN_MAIN,
  MEMORY_SIZE_IN_DELTA, RAW_RECORD_COUNT_IN_DELTA
FROM SYS.M_CS_TABLES
ORDER BY MEMORY_SIZE_IN_TOTAL DESC, SCHEMA_NAME, TABLE_NAME, PART_ID;


-- MEM-04 | 直近のデルタマージ結果
-- 最近のデルタマージについて実行時間・待機時間・エラー詳細を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 履歴の保持範囲は環境に依存し、全期間の監査ログとして使わない。
-- 注意: 最新50件。特定障害の調査時は対象テーブルと時刻条件を追加すると読み取り量を抑えられる。
-- 結果: SUCCESSだけで失敗障害と決めず、LAST_ERROR・ERROR_DESCRIPTIONを確認する。
-- 結果: 資源待機が長ければ、同時刻のメモリ・CPU状況や並行マージを調べる。
-- 次の確認: 同じテーブル・PART_IDのMEM-03結果と関連付ける。
-- 次の確認: 繰り返すエラーは発生時刻・コードを保存し、担当者の診断に渡す。
-- SAP HANA 2.0 SPS 08 — M_DELTA_MERGE_STATISTICS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20aed3e475191014aae191f316692093.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, SCHEMA_NAME, TABLE_NAME, PART_ID,
  START_TIME, MOTIVATION, SUCCESS,
  EXECUTION_TIME, RESOURCE_WAIT_TIME,
  LAST_ERROR, ERROR_DESCRIPTION
FROM SYS.M_DELTA_MERGE_STATISTICS
WHERE TYPE = 'MERGE'
ORDER BY START_TIME DESC, HOST, PORT;


-- STO-01 | データ・ログ・バックアップ先の空き容量
-- HANAが認識するディスクの総容量・使用量・差分を用途別に確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: ホスト名が空でも必ずしも異常ではない。共有ディスクの識別にはDEVICE_IDとパスを併用する。
-- 注意: デバイス上の容量であり、当該テナントだけの使用量とは限らない。
-- 結果: 空きの少ない用途とパスを特定し、増加速度を過去の採取結果と比較する。
-- 結果: 同じデバイスを複数用途で参照する場合があるため、行を単純合算して物理容量にしない。
-- 次の確認: ログ領域はSTO-03、データ領域はSTO-02で内訳を確認する。
-- 次の確認: バックアップ先はOPS-02とOPS-03を照合し、保存先容量を運用担当者に確認する。
-- SAP HANA 2.0 SPS 08 — M_DISKS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20aef7a275191014b37acbc35b4f20a4.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  DISK_ID, DEVICE_ID, HOST, USAGE_TYPE, PATH,
  TOTAL_SIZE, USED_SIZE,
  TOTAL_SIZE - USED_SIZE AS FREE_BYTES
FROM SYS.M_DISKS
ORDER BY FREE_BYTES ASC, DISK_ID;


-- STO-02 | データボリュームのファイルサイズと状態
-- 永続化データファイルを大きい順に表示し、ファイルごとの状態とサイズを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: MAX_SIZEとの差はファイル上の余地であり、OSファイルシステムの空き容量ではない。
-- 注意: ファイルが大きいという理由だけで縮小や削除を判断しない。
-- 結果: 大きいファイルの所在を把握し、STO-01の対象デバイスの空き容量と照合する。
-- 結果: ファイルサイズは実データの使用ページ量と一致しないことがある。
-- 次の確認: 過去のサイズと比較して増加したボリュームを特定する。
-- 次の確認: 使用ページ量の評価は運用担当者のデータボリューム監視と合わせて行う。
-- SAP HANA 2.0 SPS 08 — M_DATA_VOLUMES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ae1b2875191014815ce801d2843a02.html
-- SAP HANA Administration Guide — Data and Log Volumes: https://help.sap.com/doc/eb75509ab0fd1014a2c6ba9b6d252832/2.0.08/en-US/SAP_HANA_Administration_Guide_en.pdf
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, VOLUME_ID, PARTITION_ID,
  FILE_NAME, FILE_ID, STATE, SIZE, MAX_SIZE
FROM SYS.M_DATA_VOLUMES
ORDER BY SIZE DESC, HOST, PORT, FILE_ID;


-- STO-03 | ログセグメントを状態別に集計
-- 再利用待ち・バックアップ待ち・レプリケーション保持のログを状態ごとに集計します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 状態は現在値で、単発のセグメント数では停滞を断定できない。
-- 注意: セグメント数が多い環境では集計の負荷に注意し、短間隔の連続実行を避ける。
-- 結果: Closed・Truncatedは未バックアップ。BackedUpはバックアップ済みだが再起動用に必要。
-- 結果: Freeは再利用可能。RetainedFreeはシステムレプリケーションの再同期向けに保持されている。
-- 次の確認: 未バックアップの状態が増え続ける場合はOPS-02でログバックアップ結果を確認する。
-- 次の確認: RetainedFreeが多い場合はOPS-04とレプリケーション監視を照合する。
-- SAP HANA 2.0 SPS 08 — M_LOG_SEGMENTS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b475c7751910149705a31072bd2c45.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT
  HOST, PORT, VOLUME_ID, STATE,
  COUNT(*) AS SEGMENT_COUNT,
  SUM(USED_SIZE) AS USED_BYTES,
  SUM(TOTAL_SIZE) AS TOTAL_BYTES
FROM SYS.M_LOG_SEGMENTS
GROUP BY HOST, PORT, VOLUME_ID, STATE
ORDER BY TOTAL_BYTES DESC, HOST, PORT, STATE;


-- OPS-01 | サービス稼働状態とSQLポート
-- 接続先テナントのサービス状態・役割・SQLポートを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT に加え、公式のテナントポート説明では CATALOG READ または DATABASE ADMIN が必要。閲覧目的では認可済みの監視ユーザーを使い、管理権限の新規付与を前提にしない。
-- 注意: 対象テナントに接続できない場合、このSQL自体は実行できない。
-- 注意: SYSTEMDB横断監視のSYS_DATABASES.M_SERVICESとは可視範囲が異なる。
-- 結果: 期待したサービス構成と照合し、起動・停止中の状態が長く続いていないか確認する。
-- 結果: SQL_PORTと内部PORTを混同しない。ポート番号をインスタンス番号から一律に推測しない。
-- 次の確認: 障害時刻の接続エラーと対象ホスト・SQLポートを突き合わせる。
-- 次の確認: システム全体の調査はSYSTEMDBの認可済み監視担当者に依頼する。
-- SAP HANA 2.0 SPS 08 — M_SERVICES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c4ef8375191014bd51ad2f0677db6a.html
-- SAP HANA 2.0 SPS 08 — Port Assignment in Tenant Databases: https://help.sap.com/docs/r/6b94445c94ae495c83a19646e7c3fd56/2.0.08/en-US/440f6efe693d4b82ade2d8b182eb1efb.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, SERVICE_NAME, PROCESS_ID,
  ACTIVE_STATUS, SQL_PORT, COORDINATOR_TYPE,
  IS_DATABASE_LOCAL
FROM SYS.M_SERVICES
ORDER BY HOST, PORT;


-- OPS-02 | 直近のバックアップ結果
-- 直近50件のバックアップ種別・状態・UTC時刻・メッセージを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: UTC時刻で表示するため、業務のローカル時刻と比較するときは時差を合わせる。
-- 注意: カタログが大きい環境では絞り込みを追加する。削除済みカタログ項目は表示されない。
-- 結果: failed等の行はメッセージと実行時刻を調べる。runningは終了済みと扱わない。
-- 結果: カタログ上の成功だけで、必要な全バックアップファイルの存在や復旧可否まで証明できるわけではない。
-- 次の確認: ログバックアップが多く完全バックアップが見えない場合はENTRY_TYPE_NAMEで絞り込む。
-- 次の確認: 異常行のBACKUP_IDとbackup.logを監視担当者に照会する。
-- SAP HANA 2.0 SPS 08 SQL Reference — M_BACKUP_CATALOG（1780–1782頁）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1780
-- SAP HANA — Monitoring Views for the Backup Catalog: https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c49194e3bb5710149e40f7c738a46bf2.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  ENTRY_ID, BACKUP_ID, ENTRY_TYPE_NAME,
  UTC_START_TIME, UTC_END_TIME, STATE_NAME, MESSAGE
FROM SYS.M_BACKUP_CATALOG
ORDER BY UTC_START_TIME DESC, ENTRY_ID DESC;


-- OPS-03 | データバックアップの進捗
-- 現在または直前のデータバックアップについて、サービス別の転送量と状態を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 完全・差分・増分データバックアップが対象。ログバックアップ履歴にはOPS-02を使う。
-- 注意: 稼働中または直前の結果のみで、DB再起動によりクリアされる。
-- 結果: 同じBACKUP_IDの転送量を時刻を空けて比較する。増分がない場合は状態や保存先を調べる。
-- 結果: サービスごとに行が分かれるため、一つの行だけで全体の完了を判断しない。
-- 次の確認: OPS-02で最終結果を確認する。
-- 次の確認: 対象保存先の容量とバックアップ製品側のジョブ状態を照合する。
-- SAP HANA 2.0 SPS 08 SQL Reference — M_BACKUP_PROGRESS（1790頁）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1790
-- SAP HANA — Monitoring Views for the Backup Catalog: https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c49194e3bb5710149e40f7c738a46bf2.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  BACKUP_ID, HOST, PORT, SERVICE_NAME, ENTRY_TYPE_NAME,
  UTC_START_TIME, UTC_END_TIME, STATE_NAME,
  BACKUP_SIZE, TRANSFERRED_SIZE
FROM SYS.M_BACKUP_PROGRESS
ORDER BY UTC_START_TIME DESC, HOST, PORT;


-- OPS-04 | レプリケーション状態と未処理ログ
-- プライマリ側でサービスごとのレプリケーション状態と転送・リプレイ滞留を確認します。
-- HANA 2.0 / テナントDB（プライマリ側）
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: プライマリ側での確認を想定。未構成や可視範囲の不足による空結果を正常性の証明にしない。
-- 注意: マイクロ秒は1,000,000で割ると秒。状態を単発で断定せず時間を空けて比較する。
-- 注意: テナント内の結果だけでSYSTEMDBを含む全システムの正常性を保証しない。
-- 結果: ACTIVE以外のサービスは詳細メッセージと監視状態を照合する。
-- 結果: 転送滞留とリプレイ滞留を分けて比較し、どちらが継続的に増えているか確認する。
-- 次の確認: プライマリ・セカンダリ双方のCPU、I/O、ネットワークの監視値と照合する。
-- 次の確認: 業務RPOと運用監視の基準に基づいて担当者へ連絡する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_REPLICATION System View: https://help.sap.com/docs/PRODUCT_ID/4e9b18c116aa42fc84c7dbfd02111aba/20c43fc975191014b0ece11b47a86c10.html?locale=en-US
-- SAP HANA — Monitoring System Replication with SAP HANA Studio: https://help.sap.com/docs/r/f157e7b47b2a417a99eadd4b6c433b77/latest/en-US/314b58a4b894477e8291dad58fed6445.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, SECONDARY_HOST, SECONDARY_PORT,
  REPLICATION_MODE, REPLICATION_STATUS,
  REPLICATION_STATUS_DETAILS,
  BACKLOG_SIZE, BACKLOG_TIME,
  REPLAY_BACKLOG_SIZE, REPLAY_BACKLOG_TIME
FROM SYS.M_SERVICE_REPLICATION
ORDER BY BACKLOG_SIZE DESC, REPLAY_BACKLOG_SIZE DESC, HOST, PORT;


-- OPS-05 | 次回データバックアップの容量見積り
-- 完全・差分・増分バックアップの推定容量をサービス別に確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 完全バックアップが存在しない場合、差分・増分の見積りは表示できない。
-- 注意: 見積り値は所要時間や復旧時間を示さない。100行を超える構成では取得範囲を見直す。
-- 結果: 同じバックアップ種別のサービスを対象に容量を確認する。異なる種別を足して1回分の容量としない。
-- 結果: 見積りと実サイズは異なり得るため、過去実績と保存先の余裕を合わせて判断する。
-- 次の確認: 予定するバックアップ種別に絞り、STO-01の保存先空き容量や外部バックアップ製品の容量と比較する。
-- 次の確認: 前回実績との差を確認してデータ増加とバックアップ計画を見直す。
-- SAP HANA 2.0 SPS 08 — M_BACKUP_SIZE_ESTIMATIONS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/fc77a09ad59f481bb86d5ec534235b8b.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, SERVICE_NAME, ENTRY_TYPE_NAME, ESTIMATED_SIZE
FROM SYS.M_BACKUP_SIZE_ESTIMATIONS
ORDER BY ENTRY_TYPE_NAME, ESTIMATED_SIZE DESC, HOST, PORT;
