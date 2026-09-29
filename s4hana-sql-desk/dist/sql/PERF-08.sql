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
