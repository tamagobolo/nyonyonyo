export type Kind =
  | 'actor'
  | 'screen'
  | 'module'
  | 'service'
  | 'database'
  | 'entity'
  | 'external';
export type View = 'architecture' | 'repository' | 'data' | 'screens';
export type Field = { name: string; type: string; key?: string };
export type Evidence = { path: string; line?: number; excerpt?: string };
export type AtlasNode = {
  id: string;
  name: string;
  kind: Kind;
  description: string;
  technology?: string;
  provider?: string;
  path?: string;
  route?: string;
  docs?: string;
  fields?: Field[];
  entityIds?: string[];
  evidence?: Evidence[];
};
export type AtlasEdge = {
  id: string;
  source: string;
  target: string;
  label: string;
  kind: 'call' | 'import' | 'relation' | 'deploy' | 'reference';
  evidence?: Evidence[];
};
export type Journey = {
  id: string;
  name: string;
  description: string;
  steps: { nodeId: string; title: string; description: string }[];
};
export type Atlas = {
  version: 1;
  id: string;
  name: string;
  description: string;
  source: {
    kind: 'sample' | 'repository' | 'cloud' | 'file';
    label: string;
    url?: string;
    revision?: string;
  };
  nodes: AtlasNode[];
  edges: AtlasEdge[];
  journeys: Journey[];
  warnings: string[];
};
export const kindLabels: Record<Kind, string> = {
  actor: '利用者',
  screen: '画面',
  module: 'コード',
  service: 'クラウド',
  database: 'ストレージ',
  entity: 'データ',
  external: '外部依存',
};
export const viewLabels: Record<View, string> = {
  architecture: '構成図',
  repository: 'リポジトリ',
  data: 'データ / ER',
  screens: '画面',
};
export const viewDescriptions: Record<View, string> = {
  architecture: '役割と接続から、システムの全体像をつかむ。',
  repository: 'ファイルの参照関係から、実装の入口を見つける。',
  data: 'エンティティと項目から、扱う情報を理解する。',
  screens: 'ルートとデータから、画面の構造を読み解く。',
};
export function nodesForView(atlas: Atlas, view: View): AtlasNode[] {
  if (view === 'data')
    return atlas.nodes.filter(
      (n) => n.kind === 'entity' || n.kind === 'database',
    );
  if (view === 'screens') return atlas.nodes.filter((n) => n.kind === 'screen');
  if (view === 'repository')
    return atlas.nodes.filter(
      (n) =>
        n.kind === 'module' ||
        n.kind === 'external' ||
        (n.path && n.kind === 'screen'),
    );
  return atlas.nodes.filter(
    (n) => n.kind !== 'entity' && n.kind !== 'external',
  );
}
export function connectedIds(
  atlas: Atlas,
  id: string,
  transitive = false,
): Set<string> {
  const seen = new Set([id]);
  let frontier = [id];
  while (frontier.length) {
    const next: string[] = [];
    for (const edge of atlas.edges) {
      if (frontier.includes(edge.source) && !seen.has(edge.target)) {
        seen.add(edge.target);
        next.push(edge.target);
      }
      if (frontier.includes(edge.target) && !seen.has(edge.source)) {
        seen.add(edge.source);
        next.push(edge.source);
      }
    }
    if (!transitive) break;
    frontier = next;
  }
  return seen;
}
export function updateNode(
  atlas: Atlas,
  id: string,
  patch: Partial<Pick<AtlasNode, 'name' | 'description' | 'fields'>>,
): Atlas {
  return {
    ...atlas,
    nodes: atlas.nodes.map((n) => (n.id === id ? { ...n, ...patch } : n)),
  };
}
export function safeUrl(url?: string) {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    return u.protocol === 'https:' ? u.href : undefined;
  } catch {
    return undefined;
  }
}
export function validateAtlas(value: unknown): Atlas {
  const fail = (s: string): never => {
    throw new Error(`モデルを読み込めません：${s}`);
  };
  const record = (v: unknown): Record<string, unknown> =>
    typeof v === 'object' && v !== null && !Array.isArray(v)
      ? (v as Record<string, unknown>)
      : fail('オブジェクトが必要です');
  const str = (v: unknown, required = false, max = 4000): string =>
    typeof v === 'string' &&
    v.length <= max &&
    (!required || v.trim().length > 0)
      ? v
      : fail('文字列の形式または長さが不正です');
  const arr = (v: unknown, limit = 1500): unknown[] =>
    Array.isArray(v) && v.length <= limit
      ? v
      : fail('配列の形式または件数が不正です');
  const evidence = (v: unknown): Evidence[] | undefined =>
    v === undefined
      ? undefined
      : arr(v, 100).map((x) => {
          const e = record(x);
          const line = e.line;
          if (
            line !== undefined &&
            (!Number.isInteger(line) || Number(line) < 1)
          )
            fail('行番号が不正です');
          return {
            path: str(e.path, true),
            ...(line ? { line: Number(line) } : {}),
            ...(e.excerpt !== undefined ? { excerpt: str(e.excerpt) } : {}),
          };
        });
  const a = record(value);
  if (a.version !== 1) fail('version は 1 にしてください');
  const nodes: AtlasNode[] = arr(a.nodes, 1500).map((x) => {
    const n = record(x);
    const kind = str(n.kind) as Kind;
    if (!Object.hasOwn(kindLabels, kind)) fail(`未知の種類 ${kind}`);
    const node: AtlasNode = {
      id: str(n.id, true, 500),
      name: str(n.name, true, 300),
      kind,
      description: str(n.description ?? ''),
    };
    for (const k of ['technology', 'provider', 'path', 'route'] as const)
      if (n[k] !== undefined) node[k] = str(n[k]);
    if (n.docs !== undefined) {
      const url = safeUrl(str(n.docs));
      if (!url) fail('資料リンクは https にしてください');
      node.docs = url;
    }
    node.evidence = evidence(n.evidence);
    if (n.entityIds !== undefined)
      node.entityIds = arr(n.entityIds, 100).map((x) => str(x, true, 500));
    if (n.fields !== undefined)
      node.fields = arr(n.fields, 100).map((x) => {
        const f = record(x);
        return {
          name: str(f.name, true, 300),
          type: str(f.type, true, 300),
          ...(f.key !== undefined ? { key: str(f.key, false, 30) } : {}),
        };
      });
    return node;
  });
  const ids = new Set(nodes.map((n) => n.id));
  if (ids.size !== nodes.length) fail('要素IDが重複しています');
  for (const n of nodes)
    for (const id of n.entityIds ?? [])
      if (!nodes.some((x) => x.id === id && x.kind === 'entity'))
        fail('画面の参照先データがありません');
  const edgeIds = new Set<string>();
  const edges: AtlasEdge[] = arr(a.edges, 6000).map((x) => {
    const e = record(x);
    const id = str(e.id, true, 500);
    const source = str(e.source, true, 500),
      target = str(e.target, true, 500);
    if (!ids.has(source) || !ids.has(target)) fail('接続先の要素がありません');
    if (edgeIds.has(id)) fail('接続IDが重複しています');
    edgeIds.add(id);
    const kind = str(e.kind) as AtlasEdge['kind'];
    if (!['call', 'import', 'relation', 'deploy', 'reference'].includes(kind))
      fail('接続の種類が不正です');
    return {
      id,
      source,
      target,
      label: str(e.label, true, 300),
      kind,
      evidence: evidence(e.evidence),
    };
  });
  const journeys: Journey[] = arr(a.journeys ?? [], 100).map((x) => {
    const j = record(x);
    return {
      id: str(j.id, true, 500),
      name: str(j.name, true, 300),
      description: str(j.description ?? ''),
      steps: arr(j.steps, 100).map((x) => {
        const s = record(x);
        const nodeId = str(s.nodeId, true, 500);
        if (!ids.has(nodeId)) fail('フローの参照先がありません');
        return {
          nodeId,
          title: str(s.title, true, 300),
          description: str(s.description ?? ''),
        };
      }),
    };
  });
  if (new Set(journeys.map((j) => j.id)).size !== journeys.length)
    fail('フローIDが重複しています');
  const s = record(a.source);
  const kind = str(s.kind) as Atlas['source']['kind'];
  if (!['sample', 'repository', 'cloud', 'file'].includes(kind))
    fail('取り込み元が不正です');
  return {
    version: 1,
    id: str(a.id, true, 500),
    name: str(a.name, true, 300),
    description: str(a.description ?? ''),
    source: {
      kind,
      label: str(s.label, true),
      ...(s.url ? { url: safeUrl(str(s.url)) } : {}),
      ...(s.revision ? { revision: str(s.revision) } : {}),
    },
    nodes,
    edges,
    journeys,
    warnings: arr(a.warnings ?? [], 200).map((x) => str(x)),
  };
}
export type PlacedNode = AtlasNode & {
  x: number;
  y: number;
  width: number;
  height: number;
};
export function layoutNodes(
  nodes: AtlasNode[],
  view: View,
): {
  nodes: PlacedNode[];
  width: number;
  height: number;
  lanes: { label: string; x: number }[];
} {
  const groups: Kind[][] =
    view === 'architecture'
      ? [['actor', 'screen'], ['module'], ['service'], ['database']]
      : view === 'data'
        ? [['entity', 'database']]
        : view === 'screens'
          ? [['screen']]
          : [['screen', 'module', 'external']];
  const placed: PlacedNode[] = [],
    lanes: { label: string; x: number }[] = [];
  const width = view === 'screens' ? 310 : 248;
  let column = 0;
  for (const kinds of groups) {
    const items = nodes.filter((n) => kinds.includes(n.kind));
    if (!items.length) continue;
    const columns =
      groups.length === 1
        ? Math.min(items.length, view === 'screens' ? 3 : 4)
        : 1;
    for (let c = 0; c < columns; c++) {
      const x = 48 + column * (width + 90);
      let y = 80;
      const label =
        groups.length > 1
          ? (
              {
                actor: '01  TOUCHPOINTS',
                screen: '01  TOUCHPOINTS',
                module: '02  APPLICATION',
                service: '03  CLOUD SERVICES',
                database: '04  STORAGE',
              } as Record<string, string>
            )[kinds[0]]
          : '';
      if (label) lanes.push({ label, x });
      items
        .filter((_, i) => i % columns === c)
        .forEach((n) => {
          const height =
            view === 'screens'
              ? 340
              : view === 'data'
                ? 124 + Math.min(n.fields?.length ?? 0, 6) * 30
                : 156;
          placed.push({ ...n, x, y, width, height });
          y += height + 62;
        });
      column++;
    }
  }
  return {
    nodes: placed,
    lanes,
    width: Math.max(600, column * (width + 90) + 10),
    height: Math.max(480, ...placed.map((n) => n.y + n.height + 70)),
  };
}
