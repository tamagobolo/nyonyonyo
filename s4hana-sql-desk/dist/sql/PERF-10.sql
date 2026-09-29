-- PERF-10 | 実行エンジン別のプラン統計を比較
-- エンジン単位の平均実行時間と CPU 時間から遅いプランの候補を確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 中 / 資料照合: 2026-09-28
-- 権限: 当ビューを参照できる承認済み監視ユーザーを利用し、結果の可視範囲を確認します。
-- 注意: SPS 08 の定義で確認しています。古いリビジョンではビュー・列の存在を確認します。
-- 注意: M_SQL_PLAN_CACHE の実行時間列とは単位が異なります。
-- 注意: 追跡メモリ量は DB 全体の使用メモリではありません。
-- 結果: 同じ SQL について HEX とそれ以外の行が分かれる場合があります。回数と最終実行時刻も併せて比較します。
-- 結果: CPU 時間と経過時間は異なる指標です。単独で性能の良否を決めません。
-- 次の確認: ハッシュを PERF-04 の SQL と照合します。
-- 次の確認: 同等の入力・業務条件を確認してから運用担当者へ詳細解析を依頼します。
-- SAP HANA SQL Reference SPS 08 — M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/ad088a4d0d254d1ba6d0a1fc58068eb9.html

SELECT TOP 50
    HOST, PORT, PLAN_ID, STATEMENT_HASH, EXECUTION_ENGINE,
    EXECUTION_COUNT, AVG_EXECUTION_TIME AS AVG_EXECUTION_MS,
    AVG_EXECUTION_CPU_TIME AS AVG_CPU_MS,
    AVG_EXECUTION_MEMORY_SIZE AS AVG_MEMORY_BYTES,
    LAST_EXECUTION_TIMESTAMP
FROM SYS.M_SQL_PLAN_CACHE_EXECUTION_ENGINE_STATISTICS
WHERE EXECUTION_COUNT > 0
ORDER BY AVG_EXECUTION_TIME DESC;
