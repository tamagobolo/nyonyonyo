-- MEM-01 | サービス別のメモリ使用量と実効上限
-- 使用量の大きいサービスを特定し、メモリプールの使用量と実効割当上限を並べて確認します。
-- HANA 2.0 / テナントDB
-- 想定負荷: 低 / 資料照合: 2026-09-28
-- 権限: 対象ビューの SELECT が必要（既存ロール経由を含む）。表示は認可範囲に依存する。全件の確認が必要な場合は監視担当者に依頼する。CATALOG READ は既に SELECT 可能なビューの表示制限を外す権限であり、SELECT の代替ではない。
-- 注意: 現在値のスナップショット。採取時刻とホスト・ポートを記録して比較する。
-- 注意: TOP 50は表示行数の制限であり、結果だけで全サービスの合計を算出しない。
-- 結果: 実効上限に対して使用量が増え続けるサービスを、同じ時刻帯のワークロードと照合する。
-- 結果: OS常駐量とHANAプール使用量は定義が異なるため、差だけでリークと判断しない。
-- 次の確認: MEM-02でコンポーネント別の内訳を確認する。
-- 次の確認: 発生時刻の実行SQL・バッチ・OOM診断情報を監視担当者と照合する。
-- SAP HANA 2.0 SPS 08 — M_SERVICE_MEMORY System View: https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20bf33c975191014bc16d7ffb7717db2.html
-- SAP HANA — System Privileges (Reference): CATALOG READ: https://help.sap.com/docs/SAP_HANA_PLATFORM/52715f71adba4aaeb480d946c742d1f6/2a942546f16846d597177b3bfbd1df04.html

SELECT TOP 50
  HOST, PORT, SERVICE_NAME,
  TOTAL_MEMORY_USED_SIZE,
  HEAP_MEMORY_USED_SIZE,
  SHARED_MEMORY_USED_SIZE,
  EFFECTIVE_ALLOCATION_LIMIT,
  PHYSICAL_MEMORY_SIZE
FROM SYS.M_SERVICE_MEMORY
ORDER BY TOTAL_MEMORY_USED_SIZE DESC, HOST, PORT;
