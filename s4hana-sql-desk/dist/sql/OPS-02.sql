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
