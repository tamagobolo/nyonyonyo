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
