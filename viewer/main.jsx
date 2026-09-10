import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const KIND = {source:'コード', test:'テスト', package:'依存定義', dependency:'外部依存', skill:'スキル', agent:'エージェント', hook:'Hook', instruction:'作業指示', config:'設定', doc:'文書', asset:'アセット', group:'まとまり'};
const COLORS = {source:'#369cdd', test:'#5a9a75', package:'#bc8851', dependency:'#bc8851', skill:'#9c82d2', agent:'#ca7297', hook:'#d48457', instruction:'#7283ad', config:'#898e9d', doc:'#6aa5a1', asset:'#a3a5a7', group:'#4b9aaf'};
const REL = {imports:'import', loads:'読み込み', references:'記載された参照', 'uses-skill':'スキル利用の指示', 'references-agent':'エージェントの参照', bundles:'同梱リソース', declares:'依存宣言', runs:'スクリプト起動'};
const ACTION = {add:'追加候補', merge:'統合候補', 'retire-review':'廃止前の利用確認', repair:'修復候補'};
const initial = JSON.parse(document.getElementById('observatory-data').textContent);
const basename = p => p.split('/').at(-1);

function layout(nodes) {
  const groups = [...new Set(nodes.map(n=>n.group))].sort();
  return nodes.map(n=>{
    const peers=nodes.filter(p=>p.group===n.group), index=peers.indexOf(n), gi=groups.indexOf(n.group);
    const theta=gi/groups.length*Math.PI*2-Math.PI/2;
    const radius=groups.length===1?0:220;
    const phi=index/peers.length*Math.PI*2;
    const spread=Math.min(115, 25+peers.length*2);
    return {...n,x:430+Math.cos(theta)*radius+Math.cos(phi)*spread,y:300+Math.sin(theta)*radius+Math.sin(phi)*spread,z:(gi%3-1)*90+(index%5)*15};
  });
}

function aggregate(nodes, edges) {
  const selected=new Set(nodes.map(n=>n.id));
  const byId=new Map(nodes.map(n=>[n.id,n]));
  const groups=new Map();
  for(const n of nodes){
    if(!groups.has(n.group)) groups.set(n.group,{id:`group:${n.group}`,label:n.group,group:n.group,kind:'group',count:0,lines:0,incoming:0,outgoing:0});
    const g=groups.get(n.group); g.count++; g.lines+=n.lines;
  }
  const connections=new Map();
  for(const e of edges) if(selected.has(e.source)&&selected.has(e.target)) {
    const source=`group:${byId.get(e.source).group}`,target=`group:${byId.get(e.target).group}`;
    if(source===target) continue;
    const key=`${source}|${target}|${e.relation}`;
    if(!connections.has(key)) connections.set(key,{source,target,relation:e.relation,count:0});
    connections.get(key).count++;
  }
  return {nodes:[...groups.values()],edges:[...connections.values()]};
}

function Graph2D({nodes,edges,onSelect,selected}) {
  const pos=useMemo(()=>layout(nodes),[nodes]);
  const map=new Map(pos.map(n=>[n.id,n]));
  return <svg className="graph" viewBox="0 0 860 600" role="img" aria-label="依存関係の2Dマップ。矢印は参照元から参照先。下の一覧から同じ項目を選択できます。">
    <defs><marker id="arrow" viewBox="0 0 10 10" refX="19" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs>
    <g className="edges">{edges.map((e,i)=>{const a=map.get(e.source),b=map.get(e.target);if(!a||!b)return null;return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} markerEnd="url(#arrow)" className={['references','uses-skill','bundles','references-agent'].includes(e.relation)?'ref-edge':''} opacity={selected&&(e.source!==selected&&e.target!==selected)?0.14:0.55}><title>{REL[e.relation]}{e.count?` × ${e.count}`:''}</title></line>})}</g>
    {pos.map(n=><g key={n.id} transform={`translate(${n.x},${n.y})`} className="graph-node" onClick={()=>onSelect(n)}>
      <circle r={n.kind==='group'?Math.min(30,14+Math.sqrt(n.count)):n.id===selected?10:6} fill={COLORS[n.kind]} opacity={selected&&n.id!==selected?0.55:0.9}/>
      <circle r={n.kind==='group'?35:18} fill="transparent"/>
      {(pos.length<35||n.id===selected)&&<text y={n.kind==='group'?48:23} textAnchor="middle">{n.label.length>26?n.label.slice(0,23)+'…':n.label}{n.count?` (${n.count})`:''}</text>}
      <title>{n.id} · {KIND[n.kind]}{n.count?` · ${n.count}件`:''}</title>
    </g>)}
    {!nodes.length&&<text x="430" y="300" textAnchor="middle">該当する項目がありません</text>}
  </svg>;
}

function Graph3D({nodes,edges,onSelect,onFallback}) {
  const mount=useRef();
  useEffect(()=>{
    const host=mount.current;
    let renderer;
    try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
    catch {onFallback();return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.domElement.setAttribute('aria-label','Three.js の3D構造マップ。ドラッグで回転、ホイールで拡大。項目の選択は下の一覧でも操作できます。');
    renderer.domElement.setAttribute('role','img');
    host.append(renderer.domElement);
    const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(48,1,0.1,4000);
    camera.position.set(0,220,890);
    const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;
    const positioned=layout(nodes), map=new Map(positioned.map(n=>[n.id,n]));
    const geometry=new THREE.SphereGeometry(1,12,8),material=new THREE.MeshBasicMaterial();
    const mesh=new THREE.InstancedMesh(geometry,material,positioned.length);
    const matrix=new THREE.Matrix4();
    positioned.forEach((n,i)=>{
      const size=n.kind==='group'?Math.min(30,12+Math.sqrt(n.count)):7;
      matrix.compose(new THREE.Vector3(n.x-430,300-n.y,n.z),new THREE.Quaternion(),new THREE.Vector3(size,size,size));
      mesh.setMatrixAt(i,matrix);mesh.setColorAt(i,new THREE.Color(COLORS[n.kind]));
    });
    scene.add(mesh);
    const labels=[];
    if(positioned.length<=30) for(const n of positioned){
      const canvas=document.createElement('canvas');canvas.width=640;canvas.height=96;
      const context=canvas.getContext('2d');context.font='42px system-ui, sans-serif';context.textAlign='center';context.fillStyle=getComputedStyle(host).getPropertyValue('--fg').trim();
      context.fillText(`${n.label.length>25?n.label.slice(0,22)+'…':n.label}${n.count?` (${n.count})`:''}`,320,58,620);
      const texture=new THREE.CanvasTexture(canvas),spriteMaterial=new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false});
      const sprite=new THREE.Sprite(spriteMaterial);sprite.position.set(n.x-430,300-n.y-40,n.z);sprite.scale.set(330,50,1);scene.add(sprite);labels.push([texture,spriteMaterial]);
    }
    const verts=[];
    for(const e of edges){const a=map.get(e.source),b=map.get(e.target);if(a&&b)verts.push(a.x-430,300-a.y,a.z,b.x-430,300-b.y,b.z);}
    const linesGeometry=new THREE.BufferGeometry();linesGeometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
    const lineMaterial=new THREE.LineBasicMaterial({color:0x8693a2,transparent:true,opacity:0.35});scene.add(new THREE.LineSegments(linesGeometry,lineMaterial));
    const render=()=>renderer.render(scene,camera);
    const resize=()=>{const w=host.clientWidth,h=Math.max(350,host.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();render();};
    controls.addEventListener('change',render);
    const observer=new ResizeObserver(resize);observer.observe(host);resize();
    const raycaster=new THREE.Raycaster(), pointer=new THREE.Vector2();
    let down=null;
    const start=e=>{down=[e.clientX,e.clientY];};
    const click=e=>{
      if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;
      const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);
      const hit=raycaster.intersectObject(mesh)[0];if(hit?.instanceId!==undefined)onSelect(positioned[hit.instanceId]);
    };
    const lost=e=>{e.preventDefault();onFallback();};
    renderer.domElement.addEventListener('pointerdown',start);renderer.domElement.addEventListener('pointerup',click);renderer.domElement.addEventListener('webglcontextlost',lost);
    return ()=>{observer.disconnect();controls.dispose();geometry.dispose();material.dispose();linesGeometry.dispose();lineMaterial.dispose();for(const [t,m] of labels){t.dispose();m.dispose();}renderer.dispose();renderer.domElement.remove();};
  },[nodes,edges]);
  return <div className="three-host" ref={mount}/>;
}

function Findings({items,onPath}) {
  const [severity,setSeverity]=useState('all');
  const shown=items.filter(f=>severity==='all'||f.severity===severity);
  const [limit,setLimit]=useState(60);
  return <><div className="section-row"><p>{shown.length} 件の確認事項。値やソース本文は出力していません。</p><label>重要度 <select value={severity} onChange={e=>setSeverity(e.target.value)}><option value="all">すべて</option>{['critical','high','medium','low','info'].map(x=><option key={x}>{x}</option>)}</select></label></div>
    <div className="finding-list">{shown.slice(0,limit).map(f=><article key={f.id} className="finding"><div><span className={`severity ${f.severity}`}>{f.severity}</span><span className="muted">{f.confidence==='confirmed'?'静的事実':'要検証'}</span></div><h3>{f.title}</h3><button className="path-link" onClick={()=>onPath(f.path)}>{f.path}:{f.line}</button><p>{f.detail}</p><p className="next">{f.action}</p></article>)}</div>
    {!shown.length&&<p className="empty">該当する兆候はありません。今回の観測範囲での結果です。</p>}
    {shown.length>limit&&<button onClick={()=>setLimit(limit+60)}>さらに60件表示</button>}</>;
}

function App() {
  const [data,setData]=useState(initial),[tab,setTab]=useState('map'),[query,setQuery]=useState(''),[kind,setKind]=useState('all'),[group,setGroup]=useState('all'),[level,setLevel]=useState('groups'),[mode,setMode]=useState('2d'),[selected,setSelected]=useState(null),[page,setPage]=useState(0),[message,setMessage]=useState('');
  const index=useMemo(()=>new Map(data.nodes.map(n=>[n.id,n])),[data]);
  const chosen=index.get(selected);
  const filtered=useMemo(()=>data.nodes.filter(n=>(kind==='all'||n.kind===kind)&&(group==='all'||n.group===group)&&(`${n.path} ${n.name??''}`).toLowerCase().includes(query.toLowerCase())),[data,query,kind,group]);
  useEffect(()=>setPage(0),[query,kind,group]);
  const graph=useMemo(()=>{
    if(level==='groups')return aggregate(filtered,data.edges);
    const neighborhood=new Set([selected]);
    if(selected)for(const e of data.edges){if(e.source===selected)neighborhood.add(e.target);if(e.target===selected)neighborhood.add(e.source);}
    const all=[...filtered].sort((a,b)=>(neighborhood.has(b.id)-neighborhood.has(a.id))||(b.incoming+b.outgoing-a.incoming-a.outgoing)||a.id.localeCompare(b.id));
    const nodes=all.slice(0,160), ids=new Set(nodes.map(n=>n.id));
    return {nodes,edges:data.edges.filter(e=>ids.has(e.source)&&ids.has(e.target)).slice(0,650)};
  },[filtered,data,level,selected]);
  const connections=useMemo(()=>data.edges.filter(e=>e.source===selected||e.target===selected),[data,selected]);
  function selectNode(n){if(n.kind==='group'){setGroup(n.group);setLevel('files');setSelected(null);}else setSelected(n.id);}
  function selectPath(path){setTab('map');setSelected(path);setLevel('files');setGroup('all');setKind('all');setQuery('');}
  function reset(){setQuery('');setKind('all');setGroup('all');setSelected(null);setLevel('groups');}
  function download(){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='observatory-report.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  async function load(e){try{const f=e.target.files[0];if(!f)return;if(f.size>80*1024*1024)throw Error('ファイルが大きすぎます');const d=JSON.parse(await f.text());if(d.schema_version!==1||!Array.isArray(d.nodes)||!Array.isArray(d.edges)||!d.coverage||!d.stats||!Array.isArray(d.findings)||!Array.isArray(d.fit)||!Array.isArray(d.recommendations))throw Error('対応するレポート形式ではありません');setData(d);reset();setMessage('レポートを読み込みました');}catch(err){setMessage(err.message);}finally{e.target.value='';}}
  return <main>
    <header><div><div className="eyebrow">CODEBASE / OBSERVATORY</div><h1>コードと、支える仕組みを見渡す。</h1><p className="root-path">{data.root}</p></div><div className="header-actions"><label className="file-button">レポートを開く<input type="file" accept=".json,application/json" onChange={load}/></label><button onClick={download}>JSONを保存</button></div></header>
    <div className="overview"><div><strong>{data.stats.files.toLocaleString()}</strong><span>ファイル</span></div><div><strong>{data.edges.length.toLocaleString()}</strong><span>静的な関係</span></div><div><strong>{data.fit.length}</strong><span>スキル・エージェント</span></div><div><strong>{data.findings.length}</strong><span>要確認事項</span></div><p className="scan-state"><span className={`dot ${data.coverage.complete?'ok':'warn'}`}/>{data.coverage.complete?'設定範囲の読取完了':'読取が不完全'}<br/><time>{new Date(data.generated_at).toLocaleString('ja-JP')}</time></p></div>
    <nav aria-label="レポートの表示">{[['map','構造マップ'],['findings','セキュリティ・設定'],['fit','担当と適合性'],['delta','前回との差分'],['coverage','観測範囲']].map(([id,label])=><button key={id} aria-pressed={tab===id} onClick={()=>setTab(id)}>{label}</button>)}</nav>
    <div className="live-message" role="status">{message}</div>
    {tab==='map'&&<>
      <div className="toolbar"><label>検索<input value={query} placeholder="ファイル名・スキル名" onChange={e=>setQuery(e.target.value)}/></label><label>種類<select value={kind} onChange={e=>setKind(e.target.value)}><option value="all">すべての種類</option>{Object.entries(KIND).filter(([k])=>k!=='group').map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></label><label>範囲<select value={group} onChange={e=>setGroup(e.target.value)}><option value="all">コードベース全体</option>{[...new Set(data.nodes.map(n=>n.group))].sort().map(g=><option key={g}>{g}</option>)}</select></label><button onClick={reset}>全体へ戻る</button></div>
      <div className="map-layout"><section className="map-area"><div className="section-row"><div className="segmented"><button aria-pressed={level==='groups'} onClick={()=>setLevel('groups')}>まとまり</button><button aria-pressed={level==='files'} onClick={()=>setLevel('files')}>ファイル</button></div><div className="segmented"><button aria-pressed={mode==='2d'} onClick={()=>setMode('2d')}>2D</button><button aria-pressed={mode==='3d'} onClick={()=>setMode('3d')}>3D · Three.js</button></div></div>
      {mode==='2d'?<Graph2D {...graph} selected={selected} onSelect={selectNode}/>:<Graph3D {...graph} onSelect={selectNode} onFallback={()=>{setMode('2d');setMessage('WebGLを利用できないため2Dを表示しています。');}}/>}
      <div className="map-caption"><p>{level==='groups'?'まとまりをクリックすると、中のファイルへ進みます。':`${filtered.length} 件中 ${graph.nodes.length} 件を描画。選択した項目と接続数が多い項目を優先。全件は下の一覧から検索できます。`}</p><p>{mode==='2d'?'矢印: 参照元 → 参照先。点線: 文書・スキル上の参照。':'ドラッグで回転、ホイールで拡大。方向と関係の種類は詳細・2Dで確認。'}</p></div>
      <div className="legend">{Object.entries(KIND).filter(([k])=>graph.nodes.some(n=>n.kind===k)).map(([k,v])=><span key={k}><i style={{background:COLORS[k]}}/>{v}</span>)}</div></section>
      <aside aria-live="polite">{chosen?<><div className="eyebrow">SELECTED / {KIND[chosen.kind]}</div><h2>{chosen.name??chosen.label}</h2><p className="path">{chosen.path}</p><dl><dt>行数</dt><dd>{chosen.lines}</dd><dt>参照元</dt><dd>{chosen.incoming}</dd><dt>参照先</dt><dd>{chosen.outgoing}</dd></dl><h3>つながり</h3><div className="connection-list">{connections.slice(0,80).map((e,i)=><button key={i} onClick={()=>selectPath(e.source===selected?e.target:e.source)}><span>{e.source===selected?'→ 参照先':'← 参照元'} · {REL[e.relation]}</span>{e.source===selected?e.target:e.source}<small>根拠: {e.source}:{e.line}</small></button>)}</div>{connections.length>80&&<p>接続 {connections.length} 件中80件。全件はJSONに保存されています。</p>}{!connections.length&&<p>静的参照は見つかりません。未使用を意味するものではありません。</p>}{data.findings.filter(f=>f.path===selected).map(f=><div className="inline-finding" key={f.id}><span className={`severity ${f.severity}`}>{f.severity}</span><p>{f.title} · {f.line}行目</p></div>)}</>:<><div className="eyebrow">HOW TO READ</div><h2>入口から、関係をたどる。</h2><p>左のまとまりを開き、ファイルを選択すると、依存先・参照元と根拠の行を確認できます。</p><div className="reading-guide"><p><b>コード</b><br/>import / HTML読み込みを追跡</p><p><b>エージェント → スキル</b><br/>担当する役割と利用する手順</p><p><b>スキル → scripts / hooks / 設定</b><br/>実行と判断を支えるファイル</p></div><p className="muted">この図は静的な構造です。実行中の状態は表していません。</p></>}</aside></div>
      <section className="inventory"><div className="section-row"><h2>項目を選ぶ <span className="muted">{filtered.length}件</span></h2><div><button disabled={!page} onClick={()=>setPage(page-1)}>前へ</button><span className="page-label">{page+1} / {Math.max(1,Math.ceil(filtered.length/60))}</span><button disabled={(page+1)*60>=filtered.length} onClick={()=>setPage(page+1)}>次へ</button></div></div><div className="node-list">{filtered.slice(page*60,(page+1)*60).map(n=><button key={n.id} onClick={()=>{setSelected(n.id);setLevel('files');}} aria-pressed={selected===n.id}><span className="kind-label"><i style={{background:COLORS[n.kind]}}/>{KIND[n.kind]}</span><span>{n.path}</span><small>←{n.incoming}　→{n.outgoing}</small></button>)}</div></section>
    </>}
    {tab==='findings'&&<section className="tab-content"><h2>検出した兆候から、確認箇所へ。</h2><p>構文・設定の不備と、危険になり得る処理を列挙します。悪用可能性や最新CVEは別途検証が必要です。</p><Findings items={data.findings} onPath={selectPath}/></section>}
    {tab==='fit'&&<section className="tab-content"><h2>役割と手順を、コードベースに合わせる。</h2><p>エージェントは「誰が担当するか」、スキルは「どの手順を使うか」を定義します。参照数だけで必要・不要は決めません。</p><div className="fit-table"><table><thead><tr><th>定義</th><th>種類</th><th>参照元</th><th>静的な状態</th><th>利用実績</th></tr></thead><tbody>{data.fit.map(f=><tr key={f.path}><td><button className="path-link" onClick={()=>selectPath(f.path)}>{f.name}</button><small>{f.path}</small></td><td>{KIND[f.kind]}</td><td>{f.incoming}</td><td>{f.status}</td><td>{f.usage}</td></tr>)}</tbody></table></div><h2>追加・統合・廃止の検討候補</h2><div className="recommendations">{data.recommendations.map((r,i)=><article key={i}><div className="eyebrow">{ACTION[r.action]} / {r.confidence}</div><h3>{r.title}</h3><p>{r.reason}</p>{r.paths.map(p=><button key={p} className="path-link" onClick={()=>selectPath(p)}>{p}</button>)}<p className="next">{r.next_step}</p></article>)}</div>{!data.recommendations.length&&<p>今回のルールからの提案はありません。実作業で適合性を確認してください。</p>}</section>}
    {tab==='delta'&&<section className="tab-content"><h2>前回の観測から変わったこと。</h2>{data.delta?<><p>{data.delta.note}</p><div className="delta-grid">{[['added','追加'],['changed','変更'],['removed','削除'],['control_changes','制御設定の変更']].map(([k,label])=><article key={k}><h3>{label} · {data.delta[k].length}</h3>{data.delta[k].slice(0,100).map(p=><button className="path-link" key={p} onClick={()=>selectPath(p)}>{p}</button>)}{data.delta[k].length>100&&<p>残りはJSONを参照</p>}</article>)}</div><h2>新しい確認事項</h2><Findings items={data.delta.new_findings} onPath={selectPath}/><p>解消候補: {data.delta.resolved_findings.length} 件（移動や行変更による見かけの解消を含みます）。</p></>:<p className="empty">初回の観測です。同じ出力フォルダでもう一度スキャンするか、watchを実行すると差分が表示されます。</p>}</section>}
    {tab==='coverage'&&<section className="tab-content"><h2>読めた範囲を、結果と一緒に残す。</h2><p>テキスト解析 {data.coverage.text_files} ファイル / {(data.coverage.bytes_read/1024/1024).toFixed(2)} MB。JS/TS: {data.coverage.js_parser}。YAML: {data.coverage.yaml_parser}。</p><ul>{data.coverage.limitations.map(s=><li key={s}>{s}</li>)}</ul><p>除外: {data.coverage.exclusions.join(', ')}。追加の除外: {data.coverage.configured_exclusions.join(', ')||'なし'}。</p><p>上限: {data.coverage.limits.max_files}ファイル、1ファイル {data.coverage.limits.max_bytes} bytes、合計 {data.coverage.limits.max_total_bytes} bytes。</p>{data.context_roots?.length>0&&<p>追加の観測対象: {data.context_roots.join(' / ')}</p>}<h3>読み取りエラー {data.coverage.errors.length}件</h3>{data.coverage.errors.map((e,i)=><p className="path" key={i}>{e.path}: {e.reason}</p>)}<details><summary>スキップした項目 {data.coverage.skipped.length}件</summary>{data.coverage.skipped.slice(0,300).map((e,i)=><p className="path" key={i}>{e.path}: {e.reason}</p>)}{data.coverage.skipped.length>300&&<p>全件はJSONを参照してください。</p>}</details></section>}
    <footer><span>ローカルで読む、オフラインのスナップショット。</span><span>ソース本文・秘密値の出力なし / 外部通信なし</span></footer>
  </main>;
}

class ErrorBoundary extends React.Component {constructor(p){super(p);this.state={error:false};}static getDerivedStateFromError(){return {error:true};}render(){return this.state.error?<main><h1>レポートを表示できません</h1><p>形式を確認し、再読み込みしてください。同じフォルダの report.md / report.json も利用できます。</p></main>:this.props.children;}}
createRoot(document.getElementById('root')).render(<ErrorBoundary><App/></ErrorBoundary>);
