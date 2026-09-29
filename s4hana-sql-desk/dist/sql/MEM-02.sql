-- MEM-02 | コンポーネント別のメモリ内訳
-- サービス内の論理コンポーネントを使用メモリ順に並べ、増加した領域を絞り込みます。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT と、必要な監視範囲への認可を確認する。全件表示の条件は MEM-01 を参照。
-- 注意: 現在値のため、問題発生後にメモリが解放されるとピークは分からない。
-- 注意: 上位50行だけを取得する。全体合計との一致確認には全件を収集した監視結果を用いる。
-- 結果: 同じホスト・ポート・コンポーネントの前回値と比較し、増加先を特定する。
-- 結果: 大きいコンポーネントは調査対象の候補。大きさ単独は障害の根拠にならない。
-- 次の確認: 列ストアが大きい場合はMEM-03でテーブル／パーティションを確認する。
-- 次の確認: 詳細が必要なら承認済みの監視手順でアロケータ統計を調査する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_COMPONENT_MEMORY System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bed4f675191014a4cf8e62c28d16ae.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, COMPONENT, USED_MEMORY_SIZE
FROM SYS.M_SERVICE_COMPONENT_MEMORY
ORDER BY USED_MEMORY_SIZE DESC, HOST, PORT, COMPONENT;
