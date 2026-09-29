-- OPS-04 | レプリケーション状態と未処理ログ
-- プライマリ側でサービスごとのレプリケーション状態と転送・リプレイ滞留を確認します。
-- HANA 2.0 / テナントDB（プライマリ側）
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: プライマリ側での確認を想定。未構成や可視範囲の不足による空結果を正常性の証明にしない。
-- 注意: マイクロ秒は1,000,000で割ると秒。状態を単発で断定せず時間を空けて比較する。
-- 注意: テナント内の結果だけでSYSTEMDBを含む全システムの正常性を保証しない。
-- 結果: ACTIVE以外のサービスは詳細メッセージと監視状態を照合する。
-- 結果: 転送滞留とリプレイ滞留を分けて比較し、どちらが継続的に増えているか確認する。
-- 次の確認: プライマリ・セカンダリ双方のCPU、I/O、ネットワークの監視値と照合する。
-- 次の確認: 業務RPOと運用監視の基準に基づいて担当者へ連絡する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_REPLICATION System View: https://help.sap.com/docs/PRODUCT_ID/4e9b18c116aa42fc84c7dbfd02111aba/20c43fc975191014b0ece11b47a86c10.html?locale=en-US
-- SAP HANA — Monitoring System Replication with SAP HANA Studio: https://help.sap.com/docs/r/f157e7b47b2a417a99eadd4b6c433b77/latest/en-US/314b58a4b894477e8291dad58fed6445.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, SECONDARY_HOST, SECONDARY_PORT,
  REPLICATION_MODE, REPLICATION_STATUS,
  REPLICATION_STATUS_DETAILS,
  BACKLOG_SIZE, BACKLOG_TIME,
  REPLAY_BACKLOG_SIZE, REPLAY_BACKLOG_TIME
FROM SYS.M_SERVICE_REPLICATION
ORDER BY BACKLOG_SIZE DESC, REPLAY_BACKLOG_SIZE DESC, HOST, PORT;
