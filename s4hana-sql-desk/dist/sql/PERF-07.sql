-- PERF-07 | ブロックされた接続とロック保持者を確認
-- 現在のトランザクションロック待ちについて、待機側と保持側の接続を対応付けます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_BLOCKED_TRANSACTIONS を参照できる承認済み監視ユーザーを使用します。権限で見える範囲が限られる場合があります。
-- 注意: 現在の待機のみです。待機解消後に空でも、過去のロック競合を否定できません。
-- 注意: 読み取り結果を根拠に接続を自動切断しません。
-- 結果: 同じ保持接続が複数行に現れる場合は、その接続が関係する業務処理から調べます。
-- 結果: LOCK_MODE は待機要求のモードではなく、保持中のロックに対する情報です。
-- 次の確認: 保持側 CONNECTION_ID を接続監視と照合し、業務担当者へ処理状況を確認します。
-- 次の確認: DB のロックと ABAP エンキューロックは別の仕組みです。業務の症状に応じて両方を調べます。
-- SAP HANA SQL Reference SPS 08 — M_BLOCKED_TRANSACTIONS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20a8c51d75191014b6c0e177ae946724.html

SELECT TOP 50
    HOST, PORT, BLOCKED_TIME,
    BLOCKED_CONNECTION_ID, BLOCKED_TRANSACTION_ID,
    LOCK_OWNER_CONNECTION_ID, LOCK_OWNER_TRANSACTION_ID,
    WAITING_SCHEMA_NAME, WAITING_OBJECT_NAME,
    LOCK_TYPE, LOCK_MODE
FROM SYS.M_BLOCKED_TRANSACTIONS
ORDER BY BLOCKED_TIME ASC;
