import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAtlas,
  nodesForView,
  updateNode,
  connectedIds,
  layoutNodes,
} from '../lib/model.ts';
import { sample } from '../lib/sample.ts';

test('one model synchronizes object names and fields across views', () => {
  const edited = updateNode(
    updateNode(sample, 'order', {
      name: 'Purchase',
      fields: [{ name: 'amount', type: 'number' }],
    }),
    'create-screen',
    { name: '購入を作成' },
  );
  assert.equal(
    nodesForView(edited, 'architecture').find((n) => n.id === 'create-screen')
      ?.name,
    '購入を作成',
  );
  assert.equal(
    nodesForView(edited, 'repository').find((n) => n.id === 'create-screen')
      ?.name,
    '購入を作成',
  );
  const screen = nodesForView(edited, 'screens').find(
    (n) => n.id === 'create-screen',
  )!;
  assert.equal(screen.name, '購入を作成');
  const entity = edited.nodes.find((n) => n.id === screen.entityIds?.[0])!;
  assert.equal(entity.name, 'Purchase');
  assert.equal(entity.fields?.[0].name, 'amount');
  assert.deepEqual(
    nodesForView(edited, 'data').find((n) => n.id === 'order'),
    entity,
  );
  assert.equal(sample.nodes.find((n) => n.id === 'order')?.name, 'Order');
});
test('model export/import preserves nodes, connections, and journeys', () => {
  const restored = validateAtlas(JSON.parse(JSON.stringify(sample)));
  assert.deepEqual(
    JSON.parse(JSON.stringify(restored)),
    JSON.parse(JSON.stringify(sample)),
  );
});
test('rejects broken references and duplicate identifiers before replacing workspace', () => {
  for (const change of [
    (a: typeof sample) => a.nodes.push(a.nodes[0]),
    (a: typeof sample) => (a.edges[0].target = 'missing'),
    (a: typeof sample) => (a.journeys[0].steps[0].nodeId = 'missing'),
    (a: typeof sample) => (a.nodes[0].entityIds = ['lambda']),
  ]) {
    const a = structuredClone(sample);
    change(a);
    assert.throws(() => validateAtlas(a));
  }
});
test('rejects executable links, malformed fields and oversized input', () => {
  const a = structuredClone(sample);
  a.nodes[0].docs = 'javascript:alert(1)';
  assert.throws(() => validateAtlas(a));
  a.nodes[0].docs = 'https://example.com';
  a.nodes[0].fields = [{ name: '', type: 'string' }];
  assert.throws(() => validateAtlas(a));
  a.nodes[0].fields = [];
  a.nodes[0].name = 'a'.repeat(301);
  assert.throws(() => validateAtlas(a));
  assert.throws(() =>
    validateAtlas({ ...sample, nodes: Array(1501).fill(sample.nodes[0]) }),
  );
  assert.throws(() => validateAtlas({ ...sample, version: 2 }));
});
test('selected neighborhood includes incoming and outgoing references only', () => {
  assert.deepEqual(
    [...connectedIds(sample, 'lambda')].sort(),
    ['lambda', 'logic', 'gateway', 'db'].sort(),
  );
  assert.ok(connectedIds(sample, 'lambda', true).has('customer'));
});
test('all four layouts keep node rectangles non-overlapping and within canvas bounds', () => {
  for (const view of [
    'architecture',
    'repository',
    'data',
    'screens',
  ] as const) {
    const layout = layoutNodes(nodesForView(sample, view), view);
    for (const n of layout.nodes) {
      assert.ok(
        n.x >= 0 &&
          n.y >= 0 &&
          n.x + n.width <= layout.width &&
          n.y + n.height <= layout.height,
      );
      for (const other of layout.nodes) {
        if (other.id === n.id) continue;
        assert.ok(
          n.x + n.width <= other.x ||
            other.x + other.width <= n.x ||
            n.y + n.height <= other.y ||
            other.y + other.height <= n.y,
        );
      }
    }
  }
});
