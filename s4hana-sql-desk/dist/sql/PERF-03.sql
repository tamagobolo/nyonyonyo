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
