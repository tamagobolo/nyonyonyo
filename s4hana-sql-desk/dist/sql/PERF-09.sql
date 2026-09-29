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
