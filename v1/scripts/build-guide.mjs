import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Build only. The generated guide has no network or package dependencies.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const modulePath = process.argv[2];
const { marked } = await import(modulePath ? pathToFileURL(path.resolve(modulePath)).href : 'marked');
const chapters = [
  ['README.md', 'start', 'はじめに', '読む入口'],
  ['docs/00-workspace-map.md', 'map', 'ワークスペースの地図', '読む入口'],
  ['docs/01-manager-workflow.md', 'manager', 'マネージャー', '役割別フロー'],
  ['docs/02-developer-workflow.md', 'developer', '開発者', '役割別フロー'],
  ['docs/03-senior-onboarding.md', 'senior', '新任シニアの90分', '役割別フロー'],
  ['docs/04-instruction-playbook.md', 'prompts', 'コピーして使う指示文', '実務で使う'],
  ['docs/05-worked-example.md', 'example', '版を保持して共有する実例', '実務で使う'],
  ['docs/06-skill-design.md', 'skills', '3つのスキルの適用', '実務で使う'],
  ['docs/07-adoption-and-maintenance.md', 'adoption', '導入と保守', '実務で使う'],
  ['templates/project-context.md', 'context-template', 'プロジェクト把握', 'テンプレート'],
  ['templates/change-brief.md', 'brief-template', '変更依頼', 'テンプレート'],
  ['templates/decision-record.md', 'decision-template', '意思決定記録', 'テンプレート'],
  ['templates/verification-handoff.md', 'handoff-template', '検証と引継ぎ', 'テンプレート'],
  ['.agents/skills/workspace-persona/SKILL.md', 'persona-source', 'workspace-persona', 'スキル本体'],
  ['.agents/skills/workspace-detour/SKILL.md', 'detour-source', 'workspace-detour', 'スキル本体'],
  ['.agents/skills/workspace-thriller/SKILL.md', 'thriller-source', 'workspace-thriller', 'スキル本体'],
  ['sources.md', 'sources', '出典・確認範囲', '資料情報'],
  ['validation.md', 'validation', '確認記録', '資料情報'],
];
const idByFile = new Map(chapters.map(([f, id]) => [f, id]));
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
let sectionNumber = 0;
const sections = chapters.map(([file, id, label]) => {
  let source = fs.readFileSync(path.join(root, file), 'utf8');
  let fm = '';
  if (source.startsWith('---\n')) {
    const end = source.indexOf('\n---\n', 4);
    if (end !== -1) {
      fm = '<details><summary>スキルのメタデータ</summary><pre><code>' + escape(source.slice(4, end)) + '</code></pre></details>';
      source = source.slice(end + 5);
    }
  }
  let content = marked.parse(source, { gfm: true });
  content = content.replace(/href="([^"]+)"/g, (whole, href) => {
    if (/^(https?:|#|mailto:)/.test(href)) return whole;
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), href));
    return 'href="' + (idByFile.has(target) ? '#' + idByFile.get(target) : escape(target)) + '"';
  });
  content = content.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  return `<article id="${id}" class="chapter" data-title="${escape(label)}"><div class="chapter-meta"><span>${String(++sectionNumber).padStart(2, '0')} / ${escape(label)}</span><a href="${escape(file)}">Markdown 原本 ↗</a></div>${content}${fm}</article>`;
}).join('\n');
let lastGroup = '';
const nav = chapters.map(([, id, label, group]) => {
  const header = lastGroup === group ? '' : `<p class="nav-group">${group}</p>`;
  lastGroup = group;
  return header + `<a href="#${id}">${label}</a>`;
}).join('\n');
const html = `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ワークスペース開発ガイド v1</title>
<style>
:root{color-scheme:light;--bg:#f4f3f8;--paper:#fff;--ink:#242137;--muted:#666279;--line:#ddd9e8;--accent:#6240b5;--wash:#ede7fa}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:28px}body{margin:0;background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;line-height:1.85;font-size:15px}a{color:var(--accent);text-underline-offset:3px}button,input{font:inherit}button{cursor:pointer}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid #ae80ec;outline-offset:3px}
.shell{max-width:1540px;margin:auto;display:grid;grid-template-columns:270px minmax(0,1fr);gap:44px;padding:32px 44px}.sidebar{position:sticky;top:24px;height:calc(100vh - 48px);overflow-y:auto;padding:8px 12px 18px 0}.wordmark{font-weight:800;font-size:34px;letter-spacing:-1.8px}.wordmark span{font-weight:500;font-size:11px;letter-spacing:1px;display:block;color:var(--muted)}.search{margin:24px 0 10px;width:100%;border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:11px 13px;font-size:13px}.search-status{font-size:11px;color:var(--muted);min-height:20px}.nav-group{font-size:10px;font-weight:750;color:var(--muted);letter-spacing:1.4px;margin:22px 0 7px}.sidebar nav>a{display:block;text-decoration:none;color:var(--muted);font-size:13px;line-height:1.6;padding:7px 11px;border-radius:7px;border-left:3px solid transparent}.sidebar nav>a:hover,.sidebar nav>a.active{background:var(--wash);border-color:var(--accent);color:var(--accent)}.print{margin-top:24px;background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:12px}
main{min-width:0;padding-bottom:60px}.hero{padding:34px 0 38px;border-bottom:1px solid var(--line);margin-bottom:24px}.eyebrow{font-size:10px;letter-spacing:2.5px;font-weight:800;color:var(--accent)}.hero h1{font-size:clamp(28px,3vw,46px);line-height:1.45;letter-spacing:-1.3px;margin:16px 0}.hero p{color:var(--muted);max-width:700px;margin:0}.badges{display:flex;gap:9px;flex-wrap:wrap;margin-top:22px}.badge{font-size:11px;line-height:1.5;background:var(--wash);color:var(--accent);padding:6px 10px;border-radius:5px}.quick{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0 32px}.quick a{display:block;text-decoration:none;border:1px solid var(--line);border-radius:12px;padding:18px;background:var(--paper);font-weight:700;font-size:14px}.quick small{display:block;color:var(--muted);font-size:11px;font-weight:400;margin-top:5px}
.chapter{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:30px 38px;margin-bottom:24px;scroll-margin-top:24px}.chapter-meta{display:flex;justify-content:space-between;gap:14px;color:var(--muted);font-size:10px;font-weight:700;letter-spacing:.5px;border-bottom:1px solid var(--line);padding-bottom:15px;margin-bottom:26px}.chapter-meta a{font-weight:400;white-space:nowrap}.chapter h1{font-size:26px;line-height:1.5;margin:0 0 23px;letter-spacing:-.5px}.chapter h2{font-size:19px;line-height:1.6;margin:38px 0 15px;padding-top:8px;border-top:1px solid var(--line)}.chapter h3{font-size:16px;margin:28px 0 10px}.chapter p{margin:14px 0}.chapter li{margin:8px 0}.chapter strong{font-weight:750}.chapter code{font-family:ui-monospace,SFMono-Regular,monospace;font-size:.88em;background:#f0eef6;border-radius:4px;padding:2px 5px;overflow-wrap:anywhere}.chapter pre{position:relative;background:#262237;color:#eee8ff;padding:28px 20px 20px;border-radius:10px;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;line-height:1.85}.chapter pre code{background:none;color:inherit;padding:0;font-size:inherit}.copy{position:absolute;top:6px;right:9px;background:#433952;color:#e2d9f5;border:0;border-radius:4px;font-size:10px;padding:2px 8px}.table-wrap{width:100%;overflow-x:auto;margin:18px 0 24px}table{border-collapse:collapse;width:100%;font-size:12px;line-height:1.85}th,td{border:1px solid var(--line);padding:11px 13px;text-align:left;vertical-align:top}th{background:#f0edf8;font-weight:700}td{min-width:80px}tr:nth-child(even) td{background:#faf9fc}blockquote{border-left:3px solid var(--accent);margin:20px 0;padding:0 20px;color:var(--muted)}details{font-size:12px;margin-top:24px}summary{cursor:pointer}.no-result{display:none;padding:30px;background:var(--paper);border-radius:12px}.chapter[hidden]{display:none}footer{font-size:11px;color:var(--muted);margin:24px 0}
@media(min-width:1700px){.shell{gap:64px;padding-top:48px}.chapter{padding:40px 50px}}
@media(max-width:1000px){.shell{grid-template-columns:210px minmax(0,1fr);padding:24px;gap:22px}.chapter{padding:26px}.quick{grid-template-columns:1fr}.hero h1{font-size:32px}}
@media(max-width:720px){.shell{display:block;padding:18px}.sidebar{position:static;height:auto;padding:0}.sidebar nav{display:flex;gap:5px;flex-wrap:wrap;max-height:140px;overflow:auto}.nav-group{display:none}.sidebar nav>a{border:1px solid var(--line);font-size:11px;padding:5px 8px}.wordmark{font-size:28px}.search{margin-top:15px}.print{margin:12px 0}.hero{padding-top:16px}.hero h1{font-size:29px}.chapter{padding:22px 18px}.chapter h1{font-size:23px}.chapter-meta{font-size:9px}.chapter h2{font-size:18px}.quick{gap:8px}.quick a{padding:13px}.chapter pre{font-size:11px}}
@media print{body{background:white;font-size:10pt}.shell{display:block;padding:0;max-width:none}.sidebar,.quick,.copy,.chapter-meta a{display:none}.hero{padding:0}.chapter{display:block!important;border:0;border-radius:0;padding:0;break-before:page}h1,h2,h3{break-after:avoid}pre,tr{break-inside:avoid}.table-wrap{overflow:visible}.hero h1{font-size:26pt}a{color:inherit;text-decoration:none}}
</style></head><body><div class="shell"><aside class="sidebar"><div class="wordmark">workspace<span>DEVELOPMENT GUIDE · V1</span></div><label for="search" style="display:block;font-size:11px;margin-top:18px">ガイド内を検索</label><input id="search" class="search" type="search" placeholder="例：対象・受入条件・新任シニア"><div id="search-status" class="search-status" aria-live="polite"></div><nav aria-label="目次">${nav}</nav><button class="print" onclick="window.print()">印刷 / PDF に保存</button></aside><main><header class="hero"><div class="eyebrow">THIS WORKSPACE · VERSION 1</div><h1>対象をそろえ、根拠で判断し、<br>小さく確かめて共有する。</h1><p>このワークスペースで、既存プロジェクトを育てるチームへ。<br>マネージャーの意思決定から、新任シニアの最初の指示まで。</p><div class="badges"><span class="badge">ワークスペース専用</span><span class="badge">実ファイル・公式仕様を確認：2026-09-17</span><span class="badge">3つの視点を独自に再構成</span></div></header><div class="quick"><a href="#manager">01 マネージャーから読む<small>目的・範囲・受入を決める</small></a><a href="#developer">02 開発者から読む<small>設計・実装・検証をつなぐ</small></a><a href="#senior">03 新任シニアから読む<small>90分で把握し、最初の指示へ</small></a></div><p id="no-result" class="no-result">該当する章がありません。別の言葉で検索してください。</p>${sections}<footer>編集原本は同梱の Markdown。文書はオフラインで閲覧できます。出典リンクはインターネット上のページを開きます。</footer></main></div>
<script>
const chapters=[...document.querySelectorAll('.chapter')];
const input=document.querySelector('#search');
const status=document.querySelector('#search-status');
input.addEventListener('input',()=>{const q=input.value.trim().toLocaleLowerCase();let count=0;for(const c of chapters){c.hidden=!!q&&!c.textContent.toLocaleLowerCase().includes(q);if(!c.hidden)count++;}status.textContent=q?count+'章が一致（章単位で表示）':'';document.querySelector('#no-result').style.display=count?'none':'block';});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const target=document.getElementById(a.hash.slice(1));if(target?.hidden){input.value='';input.dispatchEvent(new Event('input'));}}));
document.querySelectorAll('pre').forEach(pre=>{if(!pre.querySelector('code'))return;const button=document.createElement('button');button.className='copy';button.textContent='コピー';button.setAttribute('aria-label','指示文・コードをコピー');button.onclick=async()=>{try{await navigator.clipboard.writeText(pre.querySelector('code').textContent);button.textContent='コピー済み';setTimeout(()=>button.textContent='コピー',1800);}catch{button.textContent='範囲選択してコピー';const r=document.createRange();r.selectNodeContents(pre.querySelector('code'));const s=window.getSelection();s.removeAllRanges();s.addRange(r);}};pre.append(button);});
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}},{rootMargin:'-5% 0px -70% 0px'});chapters.forEach(c=>observer.observe(c));
</script></body></html>`;
fs.writeFileSync(path.join(root, 'guide.html'), html);
console.log(`Built guide.html: ${chapters.length} chapters, ${Buffer.byteLength(html)} bytes`);
