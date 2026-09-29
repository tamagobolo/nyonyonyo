-- PERF-05 | 直近 1 時間の高コスト SQL 記録を確認
-- 既に採取されている expensive statements を時間で絞り、遅い操作を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 公式ガイドは expensive statements の閲覧に TRACE ADMIN を挙げています。既に承認された運用担当者・監視経路を使い、調査のために広い権限を新規付与しません。
-- 注意: トレースは標準で無効です。この SQL は採取設定を変更しません。
-- 注意: インメモリ保持は件数上限があります。ファイル参照モードでは読み取り負荷が大きくなり得ます。TOP は読み取り量全体の上限ではありません。
-- 注意: 時刻は DB 側の基準で照合します。SQL 本文の共有範囲に注意します。
-- 結果: OPERATION を確認して同じ種類の操作を比較します。SQL 一回の実行に複数の操作行があり得ます。
-- 結果: 空の結果は、遅い SQL がなかった証拠にはなりません。
-- 次の確認: 業務側の発生時刻と照合し、同じハッシュ・接続の記録を調べます。
-- 次の確認: 記録がない場合は既存のトレース採取状況を運用担当者に確認します。
-- SAP HANA SQL Reference SPS 08 — M_EXPENSIVE_STATEMENTS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20af736e751910148162e2ab1982f035.html
-- SAP HANA Troubleshooting SPS 08 — Expensive Statements Trace: https://help.sap.com/docs/SAP_HANA_PLATFORM/f157e7b47b2a417a99eadd4b6c433b77/5faf04f17830464eacdb7938b383d2ab.html?version=2.0.08

SELECT TOP 50
    HOST, PORT, CONNECTION_ID, STATEMENT_HASH,
    START_TIME, OPERATION, DB_USER,
    DURATION_MICROSEC / 1000000.0 AS DURATION_SECONDS,
    LOCK_WAIT_DURATION / 1000000.0 AS LOCK_WAIT_SECONDS,
    ERROR_CODE, STATEMENT_STRING
FROM SYS.M_EXPENSIVE_STATEMENTS
WHERE START_TIME >= ADD_SECONDS(CURRENT_TIMESTAMP, -3600)
ORDER BY DURATION_MICROSEC DESC;
