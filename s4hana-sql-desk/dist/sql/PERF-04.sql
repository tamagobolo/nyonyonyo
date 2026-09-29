-- PERF-04 | 累積実行時間の大きい SQL プランを探す
-- キャッシュに残るプランを総実行時間で並べ、調査対象の SQL を絞ります。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: SYS.M_SQL_PLAN_CACHE の閲覧を許可された監視ユーザーを使用します。全体の閲覧が許可されていない場合、可視範囲だけのランキングになります。
-- 注意: 累積値であり、直近の障害時間帯だけの統計ではありません。
-- 注意: キャッシュから除外されたプランは残りません。TOP 50 でも順位付けの処理は必要です。
-- 注意: SQL 本文に業務値が含まれる場合があります。共有時は必要な情報に限定します。
-- 結果: 総時間が大きい場合、平均時間と回数を併せて見て、少数の遅い実行か多数の呼び出しかを分けます。
-- 結果: 同じハッシュでもスキーマやプランの条件が異なる場合があり、単純に一行一業務とは扱いません。
-- 次の確認: 対象 SQL と業務処理を照合し、必要な期間のアプリケーション側計測と比較します。
-- SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20c57b8e75191014b22fcc8222b15970.html
-- SAP HANA Administration with SAP HANA Studio SPS 08 — SQL Plan Cache: https://help.sap.com/doc/023943d0b05e4b44bbe15658215f182d/2.0.08/en-US/SAP_HANA_Administration_with_SAP_HANA_Studio_en.pdf#page=87

SELECT TOP 50
    HOST, PORT, STATEMENT_HASH, USER_NAME, SCHEMA_NAME,
    EXECUTION_COUNT,
    TOTAL_EXECUTION_TIME / 1000000.0 AS TOTAL_EXECUTION_SECONDS,
    AVG_EXECUTION_TIME / 1000.0 AS AVG_EXECUTION_MS,
    MAX_EXECUTION_TIME / 1000.0 AS MAX_EXECUTION_MS,
    STATEMENT_STRING
FROM SYS.M_SQL_PLAN_CACHE
WHERE EXECUTION_COUNT > 0
ORDER BY TOTAL_EXECUTION_TIME DESC;
