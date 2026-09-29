'use strict';
(() => {
  const queries = window.SQL_CATALOG || [];
  const categories = [
    ['all', 'すべてのSQL', '▤'], ['prepare', '接続・事前確認', '◎'],
    ['performance', '性能・遅いSQL', '↗'], ['locks', 'ロック・接続', '⊞'],
    ['memory', 'メモリ・テーブル', '▥'], ['storage', 'ディスク・ログ', '▱'],
    ['operations', '稼働・バックアップ', '◷']
  ];
  const byId = id => document.getElementById(id);
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normalize = value => String(value).normalize('NFKC').toLocaleLowerCase('ja');
  const categoryName = key => categories.find(c => c[0] === key)?.[1] || key;
  const state = { category: 'all', text: '', load: 'all', selected: queries[0]?.id };
  let toastTimer;
  const notify = message => { byId('toast').textContent = message; byId('toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { byId('toast').hidden = true; }, 4500); };
  const badge = load => `<span class="load-badge ${load === '中' ? 'medium' : load === '高' ? 'high' : ''}">負荷 ${escapeHTML(load)}</span>`;
  const searchable = new Map(queries.map(q => [q.id, normalize([q.id,q.title,q.summary,...q.symptoms,...q.views,q.sql,categoryName(q.category)].join(' '))]));
  function filtered() {
    const terms = normalize(state.text).trim().split(/\s+/).filter(Boolean);
    return queries.filter(q => (state.category === 'all' || q.category === state.category) && (state.load === 'all' || q.load === state.load) && terms.every(t => searchable.get(q.id).includes(t)));
  }
  function renderCategories() {
    if (byId('categories').children.length) { byId('categories').querySelectorAll('[data-category]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.category === state.category))); return; }
    byId('categories').innerHTML = categories.map(([key,label,symbol]) => `<button class="category-button" data-category="${key}" aria-pressed="${key === state.category}"><span class="nav-symbol" aria-hidden="true">${symbol}</span>${label}<span class="nav-count">${key === 'all' ? queries.length : queries.filter(q => q.category === key).length}</span></button>`).join('');
  }
  function highlight(sql) {
    return sql.split(/(--[^\n]*|'(?:''|[^'])*')/g).map(part => {
      if (part.startsWith('--')) return `<span class="sql-comment">${escapeHTML(part)}</span>`;
      if (part.startsWith("'")) return `<span class="sql-string">${escapeHTML(part)}</span>`;
      return escapeHTML(part).replace(/\b(SELECT|TOP|FROM|WHERE|ORDER BY|GROUP BY|HAVING|LEFT JOIN|INNER JOIN|ON|AS|DESC|ASC|AND|OR|NOT|IS|NULL|CASE|WHEN|THEN|ELSE|END|LIMIT|DISTINCT|IN|LIKE|BETWEEN|CURRENT_TIMESTAMP|CURRENT_USER|CURRENT_SCHEMA)\b/gi, '<span class="sql-keyword">$1</span>');
    }).join('');
  }
  const list = items => `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
  function renderDetail(q) {
    const detail = byId('detail');
    if (!q) { detail.innerHTML = '<div class="empty-state"><h3>該当するSQLがありません</h3><p>キーワードやカテゴリ、負荷の条件を変えて検索してください。</p><button class="button" id="reset-filters">条件をリセット</button></div>'; byId('reset-filters').onclick = reset; return; }
    detail.innerHTML = `<div class="detail-head"><div class="detail-meta"><span class="query-id">${escapeHTML(q.id)}</span><span class="category-pill">${categoryName(q.category)}</span>${badge(q.load)}</div><h2 id="detail-title" tabindex="-1">${escapeHTML(q.title)}</h2><p class="detail-summary">${escapeHTML(q.summary)}</p><div class="detail-facts"><span>接続先 <strong>${escapeHTML(q.scope)}</strong></span><span>種類 <strong>参照 / SELECT</strong></span></div></div>
      <div class="code-toolbar"><span>HANA SQL</span><div class="code-actions"><a class="button" id="download-query" href="sql/${escapeHTML(q.id)}.sql" download="${escapeHTML(q.id)}.sql" aria-label="選択したSQLを保存">↓ .sql</a><button class="button primary" id="copy-query">SQLをコピー</button></div></div>
      <pre class="sql-code" tabindex="0" aria-label="SQLコード"><code id="sql-text">${highlight(q.sql)}</code></pre>
      <div class="detail-content"><section class="detail-section"><h3><span class="section-number">01</span> 結果の見方</h3>${list(q.interpretation)}</section>
      <section class="detail-section"><h3>主な出力列</h3><table class="column-table" aria-label="出力列と意味"><tbody>${q.columns.map(c => `<tr><th scope="row">${escapeHTML(c.name)}</th><td>${escapeHTML(c.meaning)}</td></tr>`).join('')}</tbody></table></section>
      <section class="detail-section"><h3><span class="section-number">02</span> 次に確認すること</h3>${list(q.nextSteps)}</section>
      <section class="detail-section caution-box"><h3>実行条件・注意点</h3>${list(q.cautions)}<p class="privilege"><strong>必要な権限：</strong>${escapeHTML(q.privilege)}</p></section>
      <section class="detail-section"><h3>参照した公式資料</h3>${q.sources.filter(s=>/^https:\/\/help\.sap\.com\//.test(s.url)).map(s => `<a class="source-link" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.title)} ↗</a>`).join('')}<p class="source-date">資料照合日 ${escapeHTML(q.verified)} · 実機での実行は未検証</p></section></div>`;
    byId('copy-query').onclick = () => copy(q.sql);
  }
  function render() {
    const results = filtered();
    if (!results.some(q => q.id === state.selected)) state.selected = results[0]?.id;
    byId('category-title').textContent = categoryName(state.category);
    byId('result-count').textContent = `${results.length} / ${queries.length} 件`;
    byId('query-list').innerHTML = results.map(q => `<button class="query-card" data-query="${escapeHTML(q.id)}" aria-pressed="${q.id === state.selected}" aria-controls="detail"><div class="card-meta"><span class="query-id">${escapeHTML(q.id)}</span><span>${categoryName(q.category)}</span></div><h3>${escapeHTML(q.title)}</h3><p>${escapeHTML(q.summary)}</p><div class="card-bottom"><span class="view-name">${escapeHTML(q.views.join(' / '))}</span>${badge(q.load)}</div></button>`).join('') || '<div class="empty-state"><h3>検索結果 0件</h3><p>別のキーワードで探してください。</p></div>';
    byId('query-list').scrollTop = 0;
    renderDetail(results.find(q => q.id === state.selected));
    renderCategories();
  }
  function reset() { state.text=''; state.load='all'; state.category='all'; byId('search').value=''; byId('load-filter').value='all'; render(); byId('search').focus(); }
  async function copy(sql) {
    try { if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(sql); notify('SQLをコピーしました'); }
    catch {
      const area = document.createElement('textarea'); area.value = sql; area.setAttribute('readonly',''); area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area); area.select();
      let copied = false; try { copied = document.execCommand('copy'); } catch {} area.remove();
      if (copied) notify('SQLをコピーしました');
      else { const range=document.createRange(); range.selectNodeContents(byId('sql-text')); const selection=window.getSelection(); selection.removeAllRanges(); selection.addRange(range); notify('コードを選択しました。⌘C または Ctrl+C でコピーしてください'); }
    }
  }
  byId('total-count').textContent = String(queries.length).padStart(2,'0');
  byId('search').addEventListener('input',e=>{state.text=e.target.value;render();});
  byId('load-filter').addEventListener('change',e=>{state.load=e.target.value;render();});
  byId('categories').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(button){state.category=button.dataset.category;render();}});
  byId('query-list').addEventListener('click',e=>{const button=e.target.closest('[data-query]');if(button){state.selected=button.dataset.query;byId('query-list').querySelectorAll('[data-query]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.query===state.selected)));renderDetail(queries.find(q=>q.id===state.selected));if(matchMedia('(max-width:650px)').matches){byId('detail-title').focus({preventScroll:true});byId('detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});}}});
  byId('guide-open').onclick=()=>byId('guide').showModal(); byId('guide-close').onclick=()=>byId('guide').close();
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!byId('guide').open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();byId('search').focus();}});
  render();
})();
