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
