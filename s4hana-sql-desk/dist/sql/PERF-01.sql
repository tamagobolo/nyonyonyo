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
