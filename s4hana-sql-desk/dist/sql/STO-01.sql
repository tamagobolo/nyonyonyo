-- STO-01 | データ・ログ・バックアップ先の空き容量
-- HANAが認識するディスクの総容量・使用量・差分を用途別に確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: ホスト名が空でも必ずしも異常ではない。共有ディスクの識別にはDEVICE_IDとパスを併用する。
-- 注意: デバイス上の容量であり、当該テナントだけの使用量とは限らない。
-- 結果: 空きの少ない用途とパスを特定し、増加速度を過去の採取結果と比較する。
-- 結果: 同じデバイスを複数用途で参照する場合があるため、行を単純合算して物理容量にしない。
-- 次の確認: ログ領域はSTO-03、データ領域はSTO-02で内訳を確認する。
-- 次の確認: バックアップ先はOPS-02とOPS-03を照合し、保存先容量を運用担当者に確認する。
-- SAP HANA 2.0 SPS 08 — M_DISKS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20aef7a275191014b37acbc35b4f20a4.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  DISK_ID, DEVICE_ID, HOST, USAGE_TYPE, PATH,
  TOTAL_SIZE, USED_SIZE,
  TOTAL_SIZE - USED_SIZE AS FREE_BYTES
FROM SYS.M_DISKS
ORDER BY FREE_BYTES ASC, DISK_ID;
