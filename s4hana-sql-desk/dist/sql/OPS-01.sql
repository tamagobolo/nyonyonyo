-- OPS-01 | サービス稼働状態とSQLポート
-- 接続先テナントのサービス状態・役割・SQLポートを確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT に加え、公式のテナントポート説明では CATALOG READ または DATABASE ADMIN が必要。閲覧目的では認可済みの監視ユーザーを使い、管理権限の新規付与を前提にしない。
-- 注意: 対象テナントに接続できない場合、このSQL自体は実行できない。
-- 注意: SYSTEMDB横断監視のSYS_DATABASES.M_SERVICESとは可視範囲が異なる。
-- 結果: 期待したサービス構成と照合し、起動・停止中の状態が長く続いていないか確認する。
-- 結果: SQL_PORTと内部PORTを混同しない。ポート番号をインスタンス番号から一律に推測しない。
-- 次の確認: 障害時刻の接続エラーと対象ホスト・SQLポートを突き合わせる。
-- 次の確認: システム全体の調査はSYSTEMDBの認可済み監視担当者に依頼する。
-- SAP HANA 2.0 SPS 08 — M_SERVICES System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c4ef8375191014bd51ad2f0677db6a.html
-- SAP HANA 2.0 SPS 08 — Port Assignment in Tenant Databases: https://help.sap.com/docs/r/6b94445c94ae495c83a19646e7c3fd56/2.0.08/en-US/440f6efe693d4b82ade2d8b182eb1efb.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 100
  HOST, PORT, SERVICE_NAME, PROCESS_ID,
  ACTIVE_STATUS, SQL_PORT, COORDINATOR_TYPE,
  IS_DATABASE_LOCAL
FROM SYS.M_SERVICES
ORDER BY HOST, PORT;
