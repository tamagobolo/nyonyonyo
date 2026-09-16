'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Blocks,
  Braces,
  Cloud,
  Database,
  ExternalLink,
  Focus,
  Minus,
  Monitor,
  MousePointer2,
  Plus,
  UserRound,
} from 'lucide-react';
import {
  type Atlas,
  type AtlasNode,
  type Kind,
  type View,
  kindLabels,
  layoutNodes,
} from '@/lib/model';

export const nodeIcons = {
  actor: UserRound,
  screen: Monitor,
  module: Braces,
  service: Cloud,
  database: Database,
  entity: Blocks,
  external: ExternalLink,
};
export function KindIcon({ kind, size = 18 }: { kind: Kind; size?: number }) {
  const Icon = nodeIcons[kind];
  return <Icon size={size} aria-hidden="true" />;
}

export function AtlasCanvas({
  atlas,
  nodes,
  view,
  selectedId,
  related,
  focusVersion,
  onSelect,
}: {
  atlas: Atlas;
  nodes: AtlasNode[];
  view: View;
  selectedId: string | null;
  related: Set<string> | null;
  focusVersion: number;
  onSelect: (id: string) => void;
}) {
  const surface = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1000, height: 680 });
  const [camera, setCamera] = useState({ x: 10, y: 20, z: 0.72 });
  const drag = useRef<{ x: number; y: number; cx: number; cy: number } | null>(
    null,
  );
  const layout = useMemo(() => layoutNodes(nodes, view), [nodes, view]);
  const byId = useMemo(
    () => new Map(layout.nodes.map((n) => [n.id, n])),
    [layout],
  );
  const edges = atlas.edges.filter(
    (e) => byId.has(e.source) && byId.has(e.target),
  );
  useEffect(() => {
    if (!surface.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    observer.observe(surface.current);
    return () => observer.disconnect();
  }, []);
  const fit = useCallback(() => {
    const z = Math.min(
      1.08,
      Math.max(
        0.08,
        Math.min(
          (size.width - 32) / layout.width,
          (size.height - 120) / layout.height,
        ),
      ),
    );
    setCamera({
      z,
      x: (size.width - layout.width * z) / 2,
      y: Math.max(22, (size.height - layout.height * z) / 2 - 20),
    });
  }, [size, layout.width, layout.height]);
  useEffect(() => {
    const target = layout.nodes.find((n) => n.id === selectedId);
    if (focusVersion > 0 && target) {
      const z = Math.min(
        1,
        (size.width - 50) / target.width,
        (size.height - 110) / target.height,
      );
      setCamera({
        z,
        x: size.width / 2 - (target.x + target.width / 2) * z,
        y: (size.height - 45) / 2 - (target.y + target.height / 2) * z,
      });
    } else fit();
  }, [fit, view, atlas.id, focusVersion]);
  useEffect(() => {
    const el = surface.current;
    if (!el) return;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      setCamera((c) => {
        if (e.ctrlKey || e.metaKey) {
          const z = Math.min(
            1.8,
            Math.max(0.15, c.z * (e.deltaY < 0 ? 1.08 : 0.92)),
          );
          return {
            z,
            x: size.width / 2 - ((size.width / 2 - c.x) * z) / c.z,
            y: size.height / 2 - ((size.height / 2 - c.y) * z) / c.z,
          };
        }
        return { ...c, x: c.x - e.deltaX, y: c.y - e.deltaY };
      });
    };
    el.addEventListener('wheel', wheel, { passive: false });
    return () => el.removeEventListener('wheel', wheel);
  }, [size]);
  const zoom = (factor: number) =>
    setCamera((c) => {
      const z = Math.min(1.8, Math.max(0.15, c.z * factor));
      return {
        z,
        x: size.width / 2 - ((size.width / 2 - c.x) * z) / c.z,
        y: size.height / 2 - ((size.height / 2 - c.y) * z) / c.z,
      };
    });
  function centerOnNode(id: string) {
    const n = byId.get(id);
    if (n)
      setCamera((c) => ({
        ...c,
        x: size.width / 2 - (n.x + n.width / 2) * c.z,
        y: size.height / 2 - (n.y + n.height / 2) * c.z,
      }));
  }
  return (
    <div
      className="canvas"
      ref={surface}
      tabIndex={0}
      aria-label={`${view} キャンバス。矢印キーで移動、プラス・マイナスで拡大縮小、0で全体表示。`}
      onPointerDown={(e) => {
        if ((e.target as HTMLElement).closest('button,a')) return;
        drag.current = {
          x: e.clientX,
          y: e.clientY,
          cx: camera.x,
          cy: camera.y,
        };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (d)
          setCamera((c) => ({
            ...c,
            x: d.cx + e.clientX - d.x,
            y: d.cy + e.clientY - d.y,
          }));
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        const dirs: Record<string, [number, number]> = {
          ArrowLeft: [50, 0],
          ArrowRight: [-50, 0],
          ArrowUp: [0, 50],
          ArrowDown: [0, -50],
        };
        if (dirs[e.key]) {
          e.preventDefault();
          const [x, y] = dirs[e.key];
          setCamera((c) => ({ ...c, x: c.x + x, y: c.y + y }));
        }
        if (e.key === '+' || e.key === '=') zoom(1.2);
        if (e.key === '-') zoom(1 / 1.2);
        if (e.key === '0') fit();
      }}
    >
      <div className="canvas-watermark">
        design
        <span>
          {' '}
          /{' '}
          {view === 'architecture'
            ? 'SYSTEM MAP'
            : view === 'repository'
              ? 'SOURCE MAP'
              : view === 'data'
                ? 'DATA MODEL'
                : 'SCREEN MAP'}
        </span>
      </div>
      <div
        className="world"
        style={{
          width: layout.width,
          height: layout.height,
          transform: `translate(${camera.x}px,${camera.y}px) scale(${camera.z})`,
        }}
      >
        {layout.lanes.map((l) => (
          <div key={l.x} className="lane-label" style={{ left: l.x, top: 28 }}>
            {l.label}
          </div>
        ))}
        <svg
          className="connections"
          width={layout.width}
          height={layout.height}
          aria-label={`${edges.length} 本の接続`}
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7" fill="#9caebf" />
            </marker>
            <marker
              id="arrow-active"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7" fill="#2765e8" />
            </marker>
          </defs>
          {edges.map((edge, i) => {
            const a = byId.get(edge.source)!,
              b = byId.get(edge.target)!;
            const vertical = a.x === b.x;
            const forward = b.x > a.x;
            const sx = vertical
                ? a.x + a.width / 2
                : a.x + (forward ? a.width : 0),
              sy = vertical ? a.y + a.height : a.y + a.height / 2;
            const tx = vertical
                ? b.x + b.width / 2
                : b.x + (forward ? 0 : b.width),
              ty = vertical ? b.y : b.y + b.height / 2;
            const offset = Math.max(40, Math.abs(tx - sx) * 0.45);
            const d = vertical
              ? `M${sx},${sy} C${sx + 40},${sy + 30} ${tx + 40},${ty - 30} ${tx},${ty}`
              : `M${sx},${sy} C${sx + (forward ? offset : -offset)},${sy} ${tx - (forward ? offset : -offset)},${ty} ${tx},${ty}`;
            const active =
              edge.source === selectedId || edge.target === selectedId;
            const dim =
              related && !related.has(edge.source) && !related.has(edge.target);
            return (
              <g
                key={edge.id}
                className={`edge ${active ? 'active' : ''} ${dim ? 'dim' : ''}`}
              >
                <title>{`${a.name} → ${b.name}：${edge.label}`}</title>
                <path
                  d={d}
                  fill="none"
                  stroke={active ? '#2765e8' : '#aab8c8'}
                  strokeWidth={active ? 2.2 : 1.6}
                  strokeDasharray={edge.kind === 'deploy' ? '5 5' : undefined}
                  markerEnd={`url(#arrow${active ? '-active' : ''})`}
                />
                {edges.length < 45 && (
                  <g
                    transform={`translate(${(sx + tx) / 2},${(sy + ty) / 2 + (vertical ? 0 : (i % 2) * 3)})`}
                  >
                    <rect
                      x={-Math.min(edge.label.length * 6.4 + 10, 85)}
                      y="-11"
                      width={Math.min(edge.label.length * 12.8 + 20, 170)}
                      height="22"
                      rx="6"
                    />
                    <text textAnchor="middle" dy="4">
                      {edge.label.length > 16
                        ? edge.label.slice(0, 15) + '…'
                        : edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
        {layout.nodes.map((node) => (
          <button
            key={node.id}
            className={`map-node kind-${node.kind} ${selectedId === node.id ? 'selected' : ''} ${related && !related.has(node.id) ? 'dim' : ''} ${view === 'screens' ? 'screen-node' : ''}`}
            style={{
              left: node.x,
              top: node.y,
              width: node.width,
              height: node.height,
            }}
            aria-pressed={selectedId === node.id}
            onClick={() => onSelect(node.id)}
            onFocus={(e) => {
              if (e.currentTarget.matches(':focus-visible'))
                centerOnNode(node.id);
            }}
          >
            <span className="node-top">
              <span className="kind-icon">
                <KindIcon kind={node.kind} />
              </span>
              <span className="node-kind">
                {node.provider || kindLabels[node.kind]}
              </span>
              <span className="node-dot" />
            </span>
            <span className="node-name">{node.name}</span>
            {view === 'data' ? (
              <span className="node-fields">
                {node.fields?.slice(0, 6).map((f, i) => (
                  <span className="field-row" key={i}>
                    <span>
                      {f.key && <b>{f.key}</b>}
                      {f.name}
                    </span>
                    <code>{f.type}</code>
                  </span>
                ))}
                {!node.fields?.length && (
                  <span className="node-description">{node.description}</span>
                )}
                {(node.fields?.length ?? 0) > 6 && (
                  <small>ほか {node.fields!.length - 6} 項目</small>
                )}
              </span>
            ) : view === 'screens' ? (
              <>
                <span className="screen-route">
                  {node.route || node.path || '画面'}
                </span>
                <span className="screen-preview">
                  <span className="preview-bar">
                    <i />
                    <i />
                    <i />
                  </span>
                  <strong>{node.name}</strong>
                  {(node.entityIds ?? []).slice(0, 1).map((id) => {
                    const e = atlas.nodes.find((n) => n.id === id);
                    return e ? (
                      <span className="preview-data" key={id}>
                        <span>{e.name}</span>
                        {e.fields?.slice(0, 3).map((f, i) => (
                          <span className="preview-field" key={i}>
                            <span>{f.name}</span>
                            <span>{f.type}</span>
                          </span>
                        ))}
                      </span>
                    ) : null;
                  })}
                  {!node.entityIds?.length && (
                    <span className="preview-note">{node.description}</span>
                  )}
                </span>
                <span className="preview-caption">
                  ルート・データによる構造プレビュー
                </span>
              </>
            ) : (
              <>
                <span className="node-description">{node.description}</span>
                <span className="node-footer">
                  {node.technology ||
                    node.path?.split('/').slice(-2).join('/') ||
                    kindLabels[node.kind]}
                </span>
              </>
            )}
            <span className="port port-left" />
            <span className="port port-right" />
          </button>
        ))}
      </div>
      {!nodes.length && (
        <div className="canvas-empty">
          <Blocks size={32} />
          <h3>このビューに要素がありません</h3>
          <p>別のビューに切り替えるか、検索・絞り込みを解除してください。</p>
        </div>
      )}
      <div className="canvas-controls">
        <span className="tool-selected">
          <MousePointer2 size={17} />
        </span>
        <span className="control-separator" />
        <button title="縮小" aria-label="縮小" onClick={() => zoom(1 / 1.2)}>
          <Minus size={17} />
        </button>
        <output>{Math.round(camera.z * 100)}%</output>
        <button title="拡大" aria-label="拡大" onClick={() => zoom(1.2)}>
          <Plus size={17} />
        </button>
        <span className="control-separator" />
        <button title="全体を表示 (0)" aria-label="全体を表示" onClick={fit}>
          <Focus size={18} />
        </button>
      </div>
      <div className="canvas-hint">
        ドラッグで移動 · ⌘ / Ctrl + スクロールで拡大
      </div>
      <svg
        className="minimap"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        aria-label="全体マップ"
      >
        {layout.nodes.map((n) => (
          <rect
            key={n.id}
            x={n.x}
            y={n.y}
            width={n.width}
            height={n.height}
            rx="15"
            fill={n.id === selectedId ? '#3773ea' : '#cdd8e5'}
          />
        ))}
        <rect
          x={-camera.x / camera.z}
          y={-camera.y / camera.z}
          width={size.width / camera.z}
          height={size.height / camera.z}
          fill="#2765e810"
          stroke="#2765e8"
          strokeWidth="7"
        />
      </svg>
    </div>
  );
}
