-- STO-03 | ログセグメントを状態別に集計
-- 再利用待ち・バックアップ待ち・レプリケーション保持のログを状態ごとに集計します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 状態は現在値で、単発のセグメント数では停滞を断定できない。
-- 注意: セグメント数が多い環境では集計の負荷に注意し、短間隔の連続実行を避ける。
-- 結果: Closed・Truncatedは未バックアップ。BackedUpはバックアップ済みだが再起動用に必要。
-- 結果: Freeは再利用可能。RetainedFreeはシステムレプリケーションの再同期向けに保持されている。
-- 次の確認: 未バックアップの状態が増え続ける場合はOPS-02でログバックアップ結果を確認する。
-- 次の確認: RetainedFreeが多い場合はOPS-04とレプリケーション監視を照合する。
-- SAP HANA 2.0 SPS 08 — M_LOG_SEGMENTS System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b475c7751910149705a31072bd2c45.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT
  HOST, PORT, VOLUME_ID, STATE,
  COUNT(*) AS SEGMENT_COUNT,
  SUM(USED_SIZE) AS USED_BYTES,
  SUM(TOTAL_SIZE) AS TOTAL_BYTES
FROM SYS.M_LOG_SEGMENTS
GROUP BY HOST, PORT, VOLUME_ID, STATE
ORDER BY TOTAL_BYTES DESC, HOST, PORT, STATE;
