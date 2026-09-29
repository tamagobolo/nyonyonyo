-- PERF-02 | 実環境の監視ビューの列と単位を確認
-- プランキャッシュの列定義を調べ、リビジョン差による列エラーを切り分けます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: SYS.M_MONITOR_COLUMNS を参照できる監視ユーザーを使用します。権限不足とビュー・列の不在を区別します。
-- 注意: 先頭 100 列です。列数が多い場合は POSITION > 100 を追加して続きも確認します。
-- 注意: UNIT が空でも無単位とは断定できません。列説明と公式リファレンスを併読します。
-- 結果: この環境が公開する列名・型・単位を確認します。別ビューを調べるときは WHERE のビュー名を実在する名前へ変更します。
-- 次の確認: 利用中の HANA リビジョンに対応する SQL Reference と照合します。
-- 次の確認: 存在しない列を削除するときは、診断に必要な意味が失われないか確認します。
-- SAP HANA SQL Reference SPS 08 — M_MONITOR_COLUMNS: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20b54f6275191014824cedc723f8ad13.html

SELECT TOP 100
    VIEW_NAME, POSITION, VIEW_COLUMN_NAME,
    DATA_TYPE_NAME, UNIT, DESCRIPTION
FROM SYS.M_MONITOR_COLUMNS
WHERE VIEW_NAME = 'M_SQL_PLAN_CACHE'
ORDER BY POSITION;
