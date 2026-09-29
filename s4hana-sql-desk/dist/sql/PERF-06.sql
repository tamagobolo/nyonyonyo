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
