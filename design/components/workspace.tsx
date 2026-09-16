'use client';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  FileCode2,
  FolderGit2,
  GitBranch,
  Layers3,
  Link2,
  MoreHorizontal,
  Play,
  Search,
  X,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { sample } from '@/lib/sample';
import {
  type Atlas,
  type AtlasNode,
  type View,
  connectedIds,
  kindLabels,
  nodesForView,
  updateNode,
  validateAtlas,
  viewDescriptions,
  viewLabels,
  safeUrl,
} from '@/lib/model';
import { AtlasCanvas, KindIcon } from './atlas-canvas';
import ImportProject from './import-project';

const storageKey = 'design-atlas-v1';
function download(atlas: Atlas) {
  const blob = new Blob([JSON.stringify(atlas, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = atlas.name.replace(/[^\p{L}\p{N}_-]/gu, '-') + '.atlas.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

export default function Workspace() {
  const [atlas, setAtlas] = useState<Atlas>(sample),
    [ready, setReady] = useState(false),
    [storageStatus, setStorageStatus] = useState('ブラウザーに保存');
  const [view, setView] = useState<View>('architecture'),
    [selectedId, setSelectedId] = useState<string | null>('lambda'),
    [query, setQuery] = useState(''),
    [onlyRelated, setOnlyRelated] = useState(false);
  const [importOpen, setImportOpen] = useState(false),
    [modelOpen, setModelOpen] = useState(false),
    [helpOpen, setHelpOpen] = useState(false),
    [projectOpen, setProjectOpen] = useState(false);
  const [json, setJson] = useState(''),
    [error, setError] = useState(''),
    [focusVersion, setFocusVersion] = useState(0),
    [journeyIndex, setJourneyIndex] = useState<number | null>(null),
    [journeyId, setJourneyId] = useState('');
  useEffect(() => {
    try {
      const value = localStorage.getItem(storageKey);
      if (value) {
        const saved = validateAtlas(JSON.parse(value));
        setAtlas(saved);
        setSelectedId(saved.nodes[0]?.id ?? null);
      }
    } catch {
      setStorageStatus('保存データを復元できませんでした');
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(atlas));
        setStorageStatus('このブラウザーに保存済み');
      } catch {
        setStorageStatus('保存できません。JSONを書き出してください');
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [atlas, ready]);
  const selected = atlas.nodes.find((n) => n.id === selectedId) ?? null;
  const related = useMemo(
    () => (selectedId ? connectedIds(atlas, selectedId) : null),
    [atlas, selectedId],
  );
  const matching = (n: AtlasNode) =>
    `${n.name} ${n.path ?? ''} ${n.description} ${n.technology ?? ''}`
      .toLowerCase()
      .includes(query.toLowerCase());
  const allInView = nodesForView(atlas, view)
    .filter(matching)
    .filter((n) => !onlyRelated || !related || related.has(n.id));
  const visible = allInView.slice(0, 100);
  if (
    selected &&
    allInView.some((n) => n.id === selected.id) &&
    !visible.some((n) => n.id === selected.id)
  ) {
    visible[visible.length - 1] = selected;
  }
  const journey =
    atlas.journeys.find((j) => j.id === journeyId) || atlas.journeys[0];
  const currentStep =
    journeyIndex !== null ? journey?.steps[journeyIndex] : null;
  function replaceAtlas(next: Atlas) {
    setAtlas(next);
    setSelectedId(next.nodes[0]?.id ?? null);
    setView('architecture');
    setQuery('');
    setOnlyRelated(false);
    setJourneyIndex(null);
    setFocusVersion((v) => v + 1);
    setImportOpen(false);
    setProjectOpen(false);
    setError('');
  }
  function selectNode(id: string, reveal = false) {
    setSelectedId(id);
    if (reveal) {
      const n = atlas.nodes.find((n) => n.id === id);
      if (n && !nodesForView(atlas, view).some((x) => x.id === id))
        setView(
          n.kind === 'entity'
            ? 'data'
            : n.kind === 'external'
              ? 'repository'
              : 'architecture',
        );
      setQuery('');
      setOnlyRelated(false);
      setFocusVersion((v) => v + 1);
    }
  }
  function stepTo(index: number) {
    if (!journey || !journey.steps[index]) return;
    setJourneyIndex(index);
    selectNode(journey.steps[index].nodeId, true);
  }
  const connections = selected
    ? atlas.edges.filter(
        (e) => e.source === selected.id || e.target === selected.id,
      )
    : [];
  return (
    <SidebarProvider
      className="atlas-app"
      style={{ '--sidebar-width': '244px' } as React.CSSProperties}
    >
      <Sidebar className="explorer-sidebar">
        <SidebarHeader className="brand-header">
          <a className="brand" href="/" aria-label="design ホーム">
            <span className="brand-mark">
              <Layers3 size={21} />
            </span>
            design<span className="brand-beta">ATLAS</span>
          </a>
        </SidebarHeader>
        <SidebarContent>
          <button
            className="project-switch"
            onClick={() => setProjectOpen(true)}
          >
            <span className="project-avatar">
              {atlas.name.slice(0, 1).toUpperCase()}
            </span>
            <span>
              <strong>{atlas.name}</strong>
              <small>
                {atlas.source.kind === 'sample'
                  ? 'サンプルプロジェクト'
                  : 'マイプロジェクト'}
              </small>
            </span>
            <ChevronDown size={16} />
          </button>
          <div className="sidebar-section-title">WORKSPACE</div>
          <div className="sidebar-active">
            <Layers3 size={17} />
            システムを探索<span>{atlas.nodes.length}</span>
          </div>
          <div className="sidebar-search">
            <Search size={15} />
            <input
              aria-label="要素を検索"
              placeholder="要素・ファイルを検索"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button aria-label="検索をクリア" onClick={() => setQuery('')}>
                <X size={13} />
              </button>
            )}
          </div>
          <div className="sidebar-section-title">
            OBJECTS <span>{atlas.nodes.filter(matching).length}</span>
          </div>
          <div className="object-list">
            {Object.entries(kindLabels).map(([kind, label]) => {
              const ns = atlas.nodes.filter(
                (n) => n.kind === kind && matching(n),
              );
              return ns.length ? (
                <div key={kind} className="object-group">
                  <div className="object-group-label">
                    {label}
                    <span>{ns.length}</span>
                  </div>
                  {ns.slice(0, 80).map((n) => (
                    <button
                      key={n.id}
                      className={`object-row kind-${n.kind} ${n.id === selectedId ? 'selected' : ''}`}
                      onClick={() => selectNode(n.id, true)}
                    >
                      <KindIcon kind={n.kind} size={15} />
                      <span>{n.name}</span>
                    </button>
                  ))}
                  {ns.length > 80 && <small>検索して絞り込んでください</small>}
                </div>
              ) : null;
            })}
            {!atlas.nodes.filter(matching).length && (
              <p className="muted empty-search">一致する要素がありません。</p>
            )}
          </div>
        </SidebarContent>
        <SidebarFooter className="explorer-footer">
          <button onClick={() => setHelpOpen(true)}>
            <CircleHelp size={17} />
            使い方と読み込み範囲
          </button>
          <div>
            <span className="local-dot" />
            LOCAL FIRST<span>v1.0</span>
          </div>
        </SidebarFooter>
      </Sidebar>
      <main className="main-workspace">
        <header className="topbar">
          <div className="breadcrumbs">
            <SidebarTrigger aria-label="要素一覧を切り替え" />
            <span className="breadcrumb-project">{atlas.name}</span>
            <span className="slash">/</span>
            <strong>システムを探索</strong>
            <span className="source-badge">
              {atlas.source.kind === 'sample' ? 'SAMPLE' : 'IMPORTED'}
            </span>
          </div>
          <div className="header-actions">
            <span className="save-status" title={storageStatus}>
              <Check size={14} />
              {storageStatus}
            </span>
            <button className="button" onClick={() => download(atlas)}>
              <ArrowDownToLine size={16} />
              <span>書き出す</span>
            </button>
            <button
              className="button primary"
              onClick={() => {
                setError('');
                setImportOpen(true);
              }}
            >
              <PlusIcon />
              <span>読み込む</span>
            </button>
          </div>
        </header>
        <div className="viewbar">
          <div>
            <span className="eyebrow">EXPLORE YOUR SYSTEM</span>
            <h1>{viewLabels[view]}</h1>
            <p>{viewDescriptions[view]}</p>
          </div>
          <Tabs
            value={view}
            onValueChange={(v) => {
              setView(v as View);
              setFocusVersion((n) => n + 1);
            }}
          >
            <TabsList className="view-tabs">
              {Object.entries(viewLabels).map(([id, label]) => (
                <TabsTrigger key={id} value={id}>
                  {id === 'architecture' ? (
                    <Layers3 />
                  ) : id === 'repository' ? (
                    <FolderGit2 />
                  ) : id === 'data' ? (
                    <GitBranch />
                  ) : (
                    <FileCode2 />
                  )}
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="canvas-toolbar">
          <div>
            <span className="tiny-dot" />
            {atlas.source.label}
            <button
              className="coverage-button"
              onClick={() => setHelpOpen(true)}
            >
              解析メモ {atlas.warnings.length}
            </button>
            <span className="toolbar-count">
              {allInView.length} 要素 ·{' '}
              {
                atlas.edges.filter(
                  (e) =>
                    visible.some((n) => n.id === e.source) &&
                    visible.some((n) => n.id === e.target),
                ).length
              }{' '}
              接続
            </span>
          </div>
          <div>
            <button
              className={`text-button ${onlyRelated ? 'is-active' : ''}`}
              aria-pressed={onlyRelated}
              disabled={!selected}
              onClick={() => setOnlyRelated((v) => !v)}
            >
              <Link2 size={15} />
              関連だけ
            </button>
            <button
              className="text-button"
              onClick={() => {
                setJson(JSON.stringify(atlas, null, 2));
                setError('');
                setModelOpen(true);
              }}
            >
              <Code2 size={15} />
              共通モデル
            </button>
          </div>
        </div>
        <div className="work-area">
          <section className="canvas-section" aria-label="構成キャンバス">
            {allInView.length > 100 && (
              <div className="limit-notice">
                {allInView.length}{' '}
                要素中、先頭100件を表示しています。検索で絞り込めます。
              </div>
            )}
            <AtlasCanvas
              atlas={atlas}
              nodes={visible}
              view={view}
              selectedId={selectedId}
              related={
                visible.some((n) => n.id === selectedId) ? related : null
              }
              focusVersion={focusVersion}
              onSelect={(id) => selectNode(id)}
            />
            {journey && (
              <div className={`journey-panel ${currentStep ? 'expanded' : ''}`}>
                <span className="journey-icon">
                  <GitBranch size={19} />
                </span>
                <div className="journey-text">
                  <strong>
                    {currentStep ? currentStep.title : journey.name}
                  </strong>
                  <p>
                    {currentStep
                      ? currentStep.description
                      : journey.description}
                  </p>
                </div>
                {currentStep ? (
                  <div className="journey-actions">
                    <span>
                      {journeyIndex! + 1} / {journey.steps.length}
                    </span>
                    <button
                      className="icon-button"
                      aria-label="前のステップ"
                      disabled={journeyIndex === 0}
                      onClick={() => stepTo(journeyIndex! - 1)}
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      className="icon-button"
                      aria-label="次のステップ"
                      disabled={journeyIndex === journey.steps.length - 1}
                      onClick={() => stepTo(journeyIndex! + 1)}
                    >
                      <ArrowRight size={16} />
                    </button>
                    <button
                      className="icon-button"
                      aria-label="フローを閉じる"
                      onClick={() => setJourneyIndex(null)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="button journey-start"
                    onClick={() => {
                      setJourneyId(journey.id);
                      stepTo(0);
                    }}
                  >
                    <Play size={14} />
                    フローを辿る
                  </button>
                )}
              </div>
            )}
          </section>
          <aside className="inspector" aria-label="要素の詳細">
            {selected ? (
              <>
                <div className="inspector-top">
                  <span>INSPECTOR</span>
                  <button
                    className="icon-button"
                    aria-label="選択を解除"
                    onClick={() => setSelectedId(null)}
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className={`inspector-title kind-${selected.kind}`}>
                  <span className="kind-icon">
                    <KindIcon kind={selected.kind} size={23} />
                  </span>
                  <span className="pill">{kindLabels[selected.kind]}</span>
                  <h2>{selected.name}</h2>
                  <span className="technology-label">
                    {selected.provider && `${selected.provider} / `}
                    {selected.technology || selected.kind}
                  </span>
                </div>
                <div className="inspector-body">
                  {!nodesForView(atlas, view).some(
                    (n) => n.id === selected.id,
                  ) && (
                    <div className="outside-view">
                      別のビューで選択中
                      <button onClick={() => selectNode(selected.id, true)}>
                        この要素を表示 <ArrowRight size={12} />
                      </button>
                    </div>
                  )}
                  <section>
                    <h3>この要素の役割</h3>
                    <p className="role-description">
                      {selected.description ||
                        '説明はまだありません。下の編集欄から追記できます。'}
                    </p>
                  </section>
                  {selected.path && (
                    <section>
                      <h3>ソースファイル</h3>
                      <div className="source-file">
                        <FileCode2 size={15} />
                        <code>{selected.path}</code>
                      </div>
                      {atlas.source.url && (
                        <a
                          className="inline-link"
                          target="_blank"
                          rel="noreferrer"
                          href={`${safeUrl(atlas.source.url)}/blob/${encodeURIComponent(atlas.source.revision || 'HEAD')}/${selected.path.split('/').map(encodeURIComponent).join('/')}`}
                        >
                          GitHubで開く <ArrowRight size={13} />
                        </a>
                      )}
                    </section>
                  )}
                  {!!selected.fields?.length && (
                    <section>
                      <h3>
                        データ項目 <span>{selected.fields.length}</span>
                      </h3>
                      <div className="inspector-fields">
                        {selected.fields.map((f, i) => (
                          <div key={i}>
                            <strong>
                              {f.name}
                              {f.key && <b>{f.key}</b>}
                            </strong>
                            <code>{f.type}</code>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                  <section>
                    <h3>
                      つながり <span>{connections.length}</span>
                    </h3>
                    {connections.map((e) => {
                      const outgoing = e.source === selected.id;
                      const n = atlas.nodes.find(
                        (n) => n.id === (outgoing ? e.target : e.source),
                      );
                      return n ? (
                        <button
                          className={`connection-row kind-${n.kind}`}
                          key={e.id}
                          onClick={() => selectNode(n.id, true)}
                        >
                          <KindIcon kind={n.kind} size={16} />
                          <span>
                            <strong>{n.name}</strong>
                            <small>
                              {outgoing ? '→' : '←'} {e.label}
                            </small>
                          </span>
                          <ArrowRight size={14} />
                        </button>
                      ) : null;
                    })}
                    {connections.length === 0 && (
                      <p className="muted">接続は登録されていません。</p>
                    )}
                  </section>
                  {!!selected.evidence?.length && (
                    <section>
                      <h3>
                        {atlas.source.kind === 'sample'
                          ? 'サンプル内の例'
                          : '確認できた根拠'}
                      </h3>
                      {selected.evidence.map((e, i) => (
                        <details className="evidence" key={i}>
                          <summary>
                            {e.path}
                            {e.line && `:${e.line}`}
                          </summary>
                          <pre>{e.excerpt || '宣言ファイルを検出'}</pre>
                        </details>
                      ))}
                    </section>
                  )}
                  {safeUrl(selected.docs) && (
                    <a
                      className="documentation-link"
                      href={safeUrl(selected.docs)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BookOpen size={17} />
                      <span>
                        公式ドキュメント<small>機能を詳しく理解する</small>
                      </span>
                      <ArrowRight size={15} />
                    </a>
                  )}
                  <details className="edit-details" key={selected.id}>
                    <summary>
                      名前・説明を編集
                      <MoreHorizontal size={16} />
                    </summary>
                    <label>
                      名前
                      <input
                        value={selected.name}
                        maxLength={300}
                        onChange={(e) => {
                          if (e.target.value.trim())
                            setAtlas((a) =>
                              updateNode(a, selected.id, {
                                name: e.target.value,
                              }),
                            );
                        }}
                      />
                    </label>
                    <label>
                      説明
                      <textarea
                        rows={4}
                        maxLength={4000}
                        value={selected.description}
                        onChange={(e) =>
                          setAtlas((a) =>
                            updateNode(a, selected.id, {
                              description: e.target.value,
                            }),
                          )
                        }
                      />
                    </label>
                    {selected.fields?.map((field, index) => (
                      <div className="field-edit" key={index}>
                        <label>
                          項目名
                          <input
                            aria-label={`項目 ${index + 1} の名前`}
                            maxLength={300}
                            value={field.name}
                            onChange={(e) => {
                              if (e.target.value.trim())
                                setAtlas((a) =>
                                  updateNode(a, selected.id, {
                                    fields: selected.fields!.map((f, i) =>
                                      i === index
                                        ? { ...f, name: e.target.value }
                                        : f,
                                    ),
                                  }),
                                );
                            }}
                          />
                        </label>
                        <label>
                          型
                          <input
                            aria-label={`項目 ${index + 1} の型`}
                            maxLength={300}
                            value={field.type}
                            onChange={(e) => {
                              if (e.target.value.trim())
                                setAtlas((a) =>
                                  updateNode(a, selected.id, {
                                    fields: selected.fields!.map((f, i) =>
                                      i === index
                                        ? { ...f, type: e.target.value }
                                        : f,
                                    ),
                                  }),
                                );
                            }}
                          />
                        </label>
                      </div>
                    ))}
                    <p>すべてのビューに反映されます。</p>
                  </details>
                </div>
              </>
            ) : (
              <div className="inspector-empty">
                <MouseIcon />
                <h2>要素を選択</h2>
                <p>
                  キャンバスや一覧から選ぶと、役割・接続・根拠を確認できます。
                </p>
              </div>
            )}
          </aside>
        </div>
        <footer className="statusbar">
          <span>
            <Layers3 size={13} />
            ひとつのモデル、4つの視点
          </span>
          <span>
            {atlas.source.kind === 'sample'
              ? '学習用データ'
              : `${atlas.nodes.length} 要素を読み込み済み`}
            <span className="status-divider" />
            ブラウザー内で処理
          </span>
        </footer>
      </main>
      <Dialog open={importOpen} onOpenChange={setImportOpen}>
        <DialogContent className="atlas-dialog">
          <DialogHeader>
            <DialogTitle>プロジェクトを読み込む</DialogTitle>
            <DialogDescription>
              ソース・クラウド・データから、システムのつながりを探索します。
            </DialogDescription>
          </DialogHeader>
          <ImportProject onImport={replaceAtlas} />
        </DialogContent>
      </Dialog>
      <Dialog open={modelOpen} onOpenChange={setModelOpen}>
        <DialogContent className="atlas-dialog model-dialog">
          <DialogHeader>
            <DialogTitle>共通モデル</DialogTitle>
            <DialogDescription>
              要素・接続・データ項目・フローを編集すると、すべてのビューが同期します。
            </DialogDescription>
          </DialogHeader>
          <textarea
            className="model-editor"
            aria-label="共通モデル JSON"
            value={json}
            onChange={(e) => setJson(e.target.value)}
            spellCheck={false}
          />
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <div className="dialog-actions">
            <button className="button" onClick={() => setModelOpen(false)}>
              キャンセル
            </button>
            <button
              className="button primary"
              onClick={() => {
                try {
                  const next = validateAtlas(JSON.parse(json));
                  setAtlas(next);
                  if (!next.nodes.some((n) => n.id === selectedId))
                    setSelectedId(next.nodes[0]?.id ?? null);
                  setJourneyIndex(null);
                  setModelOpen(false);
                  setError('');
                } catch (e) {
                  setError((e as Error).message);
                }
              }}
            >
              変更を反映
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={projectOpen} onOpenChange={setProjectOpen}>
        <DialogContent className="atlas-dialog">
          <DialogHeader>
            <DialogTitle>プロジェクト</DialogTitle>
            <DialogDescription>
              切り替える前に、編集したモデルを書き出して保存できます。
            </DialogDescription>
          </DialogHeader>
          <button
            className="project-option"
            onClick={() => replaceAtlas(structuredClone(sample))}
          >
            <CloudIcon />
            <span>
              <strong>Order Studio</strong>
              <small>コード・AWS・データ・画面を辿る学習用サンプル</small>
            </span>
            <ArrowRight size={18} />
          </button>
          <button
            className="project-option"
            onClick={async () => {
              try {
                const response = await fetch('/examples/ponytail.atlas.json');
                if (!response.ok)
                  throw new Error('ponytailの構成を読み込めませんでした。');
                replaceAtlas(validateAtlas(await response.json()));
              } catch (e) {
                setError((e as Error).message);
              }
            }}
          >
            <FolderGit2 size={28} />
            <span>
              <strong>ponytail</strong>
              <small>クローンしたリポジトリの静的解析スナップショット</small>
            </span>
            <ArrowRight size={18} />
          </button>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="button" onClick={() => download(atlas)}>
            <ArrowDownToLine size={16} />
            現在のモデルを書き出す
          </button>
          <button
            className="button primary"
            onClick={() => {
              setProjectOpen(false);
              setImportOpen(true);
            }}
          >
            自分のプロジェクトを読み込む
          </button>
        </DialogContent>
      </Dialog>
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="atlas-dialog help-dialog">
          <DialogHeader>
            <DialogTitle>つながりから、理解する。</DialogTitle>
            <DialogDescription>design / System Atlas</DialogDescription>
          </DialogHeader>
          <ol>
            <li>
              <strong>要素を選ぶ</strong>
              <p>
                コードやサービスの役割、つながる先、根拠ファイルを確認します。
              </p>
            </li>
            <li>
              <strong>視点を切り替える</strong>
              <p>
                構成図・リポジトリ・データ /
                ER・画面は、同じモデルの異なる見方です。
              </p>
            </li>
            <li>
              <strong>理解を書き足す</strong>
              <p>
                名前・説明や共通モデルを編集できます。元のリポジトリには変更を加えません。
              </p>
            </li>
          </ol>
          <p className="muted">
            ローカルフォルダーのJS/TS/Python、Terraform resource、Prisma
            model、SQL CREATE TABLE、CloudFormation JSON、Wrangler
            JSON/JSONCに対応。画面ビューはルートと共通モデルの項目から作る構造プレビューです。実際のUI描画を再現するものではありません。
          </p>
          <div className="help-notes">
            {atlas.warnings.map((w, i) => (
              <p key={i}>{w}</p>
            ))}
          </div>
          <p className="muted">
            ブラウザー保存はこの端末・このURLのみ。別の端末への移動やバックアップにはJSONの書き出しを使ってください。
          </p>
          <a
            className="inline-link"
            href="https://x.com/varhira/status/2099149865498591422"
            target="_blank"
            rel="noreferrer"
          >
            参考にした、同じデータから視点を切り替えるアイデア{' '}
            <ArrowRight size={15} />
          </a>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}
function PlusIcon() {
  return (
    <span aria-hidden="true" style={{ fontSize: 20, lineHeight: 1 }}>
      +
    </span>
  );
}
function MouseIcon() {
  return <Layers3 size={32} />;
}
function CloudIcon() {
  return <FolderGit2 size={28} />;
}
