-- MEM-03 | 大きい列テーブルとデルタ領域
-- 列テーブルをパーティション単位で並べ、現在のメモリ使用量とデルタの大きさを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 大規模DBでは全テーブル統計の収集・ソートに負荷がかかるため連続実行を避ける。
-- 注意: 同じテーブルが複数ホスト・パーティション・レプリカで現れる場合がある。業務行数として合算しない。
-- 結果: 主領域の使用量はロード済み列に依存するため、完全ロード時のサイズやディスク容量とは異なる。
-- 結果: デルタの内部件数は業務上の有効行数ではない。デルタが大きい対象はMEM-04と照合する。
-- 次の確認: 増加したテーブルを利用するS/4HANAのバッチやデータロードを確認する。
-- 次の確認: 特定テーブルに絞る際はSCHEMA_NAMEとTABLE_NAMEの両方を条件に追加する。
-- SAP HANA — M_CS_TABLES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ad60f77519101498ccb610c33c3ca6.html
-- SAP HANA 2.0 SPS 08 SQL Reference — M_CS_TABLES（1872頁以降）: https://help.sap.com/doc/9b40bf74f8644b898fb07dabdd2a36ad/2.0.08/en-US/SAP_HANA_SQL_Reference_Guide_en.pdf#page=1872
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, SCHEMA_NAME, TABLE_NAME, PART_ID,
  MEMORY_SIZE_IN_TOTAL, MEMORY_SIZE_IN_MAIN,
  MEMORY_SIZE_IN_DELTA, RAW_RECORD_COUNT_IN_DELTA
FROM SYS.M_CS_TABLES
ORDER BY MEMORY_SIZE_IN_TOTAL DESC, SCHEMA_NAME, TABLE_NAME, PART_ID;
