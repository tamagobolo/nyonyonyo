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
