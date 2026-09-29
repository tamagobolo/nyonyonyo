-- STO-02 | データボリュームのファイルサイズと状態
-- 永続化データファイルを大きい順に表示し、ファイルごとの状態とサイズを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: MAX_SIZEとの差はファイル上の余地であり、OSファイルシステムの空き容量ではない。
-- 注意: ファイルが大きいという理由だけで縮小や削除を判断しない。
-- 結果: 大きいファイルの所在を把握し、STO-01の対象デバイスの空き容量と照合する。
-- 結果: ファイルサイズは実データの使用ページ量と一致しないことがある。
-- 次の確認: 過去のサイズと比較して増加したボリュームを特定する。
-- 次の確認: 使用ページ量の評価は運用担当者のデータボリューム監視と合わせて行う。
-- SAP HANA 2.0 SPS 08 — M_DATA_VOLUMES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20ae1b2875191014815ce801d2843a02.html
-- SAP HANA Administration Guide — Data and Log Volumes: https://help.sap.com/doc/eb75509ab0fd1014a2c6ba9b6d252832/2.0.08/en-US/SAP_HANA_Administration_Guide_en.pdf
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, VOLUME_ID, PARTITION_ID,
  FILE_NAME, FILE_ID, STATE, SIZE, MAX_SIZE
FROM SYS.M_DATA_VOLUMES
ORDER BY SIZE DESC, HOST, PORT, FILE_ID;
