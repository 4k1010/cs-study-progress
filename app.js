const SUBJECTS=["線性代數","離散數學","資料結構","演算法","作業系統","計算機組織"];
const COLORS={"線性代數":"#4f8cff","離散數學":"#9b6cff","資料結構":"#36c99a","演算法":"#ff8b45","作業系統":"#ff5f69","計算機組織":"#e8bd3f"};
const STORAGE_KEY="cs-grad-study-progress-v2";
const seed=Object.fromEntries(UNITS.map(u=>[u.id,false]));
let state=loadState();

function loadState(){
  try{return {...seed,...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}}catch{return {...seed}}
}
function saveState(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  const el=document.querySelector("#lastSaved"); el.textContent="已自動保存"; el.animate([{opacity:.25},{opacity:1}],{duration:350});
}
function stats(subject){
  const rows=subject?UNITS.filter(u=>u.subject===subject):UNITS;
  const done=rows.filter(u=>state[u.id]).length;
  return {done,total:rows.length,pct:rows.length?Math.round(done/rows.length*100):0};
}
function setRing(el,pct,color){
  el.style.setProperty("--p",pct); el.style.setProperty("--accent",color);
  el.setAttribute("aria-label",`完成 ${pct}%`);
}
function renderStats(){
  const all=stats();
  document.querySelector("#overallPercent").textContent=`${all.pct}%`;
  document.querySelector("#overallRingPercent").textContent=`${all.pct}%`;
  document.querySelector("#overallCount").textContent=`${all.done} / ${all.total} 單元`;
  setRing(document.querySelector("#overallRing"),all.pct,"#5ee19a");
  const grid=document.querySelector("#subjectGrid");
  grid.innerHTML=SUBJECTS.map(s=>{
    const x=stats(s); return `<article class="subject-card" style="--accent:${COLORS[s]}">
      <div class="ring" data-subject="${s}"><div class="ring-center"><strong>${x.pct}%</strong><span>完成</span></div></div>
      <div><h3>${s}</h3><span class="count">${x.done} / ${x.total} 個單元</span><strong class="percent">${x.pct}%</strong></div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".ring").forEach(el=>setRing(el,stats(el.dataset.subject).pct,COLORS[el.dataset.subject]));
}
function currentRows(){
  const q=document.querySelector("#searchInput").value.trim().toLowerCase();
  const subject=document.querySelector("#subjectFilter").value;
  const status=document.querySelector("#statusFilter").value;
  return UNITS.filter(u=>{
    if(subject&&u.subject!==subject)return false;
    if(status==="done"&&!state[u.id])return false;
    if(status==="todo"&&state[u.id])return false;
    if(q&&!([u.title,u.chapter,u.source,u.note].join(" ").toLowerCase().includes(q)))return false;
    return true;
  });
}
function renderList(){
  const rows=currentRows(),list=document.querySelector("#unitList");
  document.querySelector("#visibleCount").textContent=`顯示 ${rows.length} / ${UNITS.length} 個單元`;
  if(!rows.length){list.innerHTML='<div class="empty">沒有符合條件的單元</div>';return}
  list.innerHTML=rows.map(u=>`<label class="unit ${state[u.id]?"done":""}" data-id="${u.id}">
    <input type="checkbox" ${state[u.id]?"checked":""} aria-label="標記 ${escapeHtml(u.title)} 完成">
    <div><div class="unit-title">${escapeHtml(u.title)}</div><div class="unit-sub">#${u.order} · ${escapeHtml(u.chapter||"未分類")}${u.source?` · ${escapeHtml(u.source)}`:""}</div></div>
    <span class="pill">${u.subject}</span>
  </label>`).join("");
  list.querySelectorAll("input").forEach(input=>input.addEventListener("change",e=>{
    const id=e.target.closest(".unit").dataset.id; state[id]=e.target.checked; saveState(); renderStats(); renderList();
  }));
}
function escapeHtml(s=""){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function init(){
  const select=document.querySelector("#subjectFilter");
  SUBJECTS.forEach(s=>select.add(new Option(s,s)));
  ["searchInput","subjectFilter","statusFilter"].forEach(id=>document.querySelector("#"+id).addEventListener("input",renderList));
  document.querySelector("#clearFilters").addEventListener("click",()=>{document.querySelector("#searchInput").value="";select.value="";document.querySelector("#statusFilter").value="";renderList()});
  document.querySelector("#exportBtn").addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),progress:state},null,2)],{type:"application/json"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="考研進度備份.json";a.click();URL.revokeObjectURL(a.href);
  });
  document.querySelector("#importInput").addEventListener("change",async e=>{
    const f=e.target.files[0];if(!f)return;
    try{const obj=JSON.parse(await f.text());state={...seed,...(obj.progress||obj)};saveState();renderStats();renderList()}catch{alert("這不是有效的進度備份檔")}
    e.target.value="";
  });
  renderStats();renderList();
}
init();
