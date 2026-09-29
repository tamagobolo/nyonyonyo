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
