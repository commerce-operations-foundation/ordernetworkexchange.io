/* ============================================================
   onX site — shared behaviour (runs on every page)
   ============================================================ */

/* ---- LOGO LOCKUP: official COF wordmark + onX mark ----
   The COF wordmark is the official asset from commerceopsfoundation.org.
   To remove the cross-site dependency, drop the PNG into /assets and set
   COF_WORDMARK = '/assets/Dark-COF-wordmark-horizontal-lime.png'.            */
const COF_WORDMARK = '/assets/Dark-COF-wordmark-horizontal-lime.png';
const ONX_MARK = '<svg viewBox="0 0 53.22 16.81" role="img" aria-label="onX" fill="currentColor"><path d="M26.65,0C22.02,0,18.25,3.77,18.25,8.4v8.4h2.72v-8.4c0-3.13,2.55-5.68,5.68-5.68s5.68,2.55,5.68,5.68v8.4h2.72v-8.4C35.05,3.77,31.28,0,26.65,0Z"/><path d="M8.49,0C7.25,0,6.06.26,4.95.78l-.13.06.26,1.16c.07.32.32.56.64.63l1.32.27h.05c.45-.13.92-.19,1.41-.19,3.13,0,5.68,2.55,5.68,5.68s-2.55,5.68-5.68,5.68-5.68-2.55-5.68-5.68c0-.56.08-1.12.25-1.66v-.04s-.23-1.16-.23-1.16c-.07-.32-.32-.58-.63-.64l-1.21-.27-.06.13C.37,5.9.09,7.12.09,8.4c0,4.63,3.77,8.4,8.4,8.4s8.4-3.77,8.4-8.4S13.12,0,8.49,0Z"/><path d="M1.16,3.86l1.14.25c.66.15,1.17.66,1.31,1.32l.24,1.13c.02.11.18.11.2,0l.26-1.15c.14-.65.65-1.16,1.3-1.3l1.15-.26c.11-.02.11-.18,0-.21l-1.13-.24c-.66-.14-1.17-.65-1.32-1.31l-.25-1.14c-.02-.11-.18-.11-.2,0l-.24,1.12c-.14.66-.66,1.18-1.32,1.32l-1.12.24c-.11.02-.11.18,0,.21Z"/><path d="M6.22,5.91s-.04.07,0,.08l.45.1c.26.06.46.26.51.52l.09.45s.07.04.08,0l.1-.45c.06-.25.26-.45.51-.51l.45-.1s.04-.07,0-.08l-.45-.09c-.26-.05-.46-.25-.52-.51l-.1-.45s-.07-.04-.08,0l-.09.44c-.05.26-.26.46-.52.52l-.44.09Z"/><path d="M.99,1.78l.09.45s.07.04.08,0l.1-.45c.06-.25.26-.45.51-.51l.45-.1s.04-.07,0-.08l-.45-.09c-.26-.05-.46-.25-.52-.51l-.1-.45s-.07-.04-.08,0l-.09.44c-.05.26-.26.46-.52.52l-.44.09s-.04.07,0,.08l.45.1c.26.06.46.26.51.52Z"/><path d="M53.22.61V0h-2.72v.61c0,.75-.33,1.46-.9,1.95l-4.78,4.12-4.78-4.12c-.57-.49-.9-1.21-.9-1.95V0h-2.72v.61c0,1.52.67,2.97,1.83,3.97l4.51,3.89-4.51,3.89c-1.16,1-1.83,2.45-1.83,3.97v.47h2.72v-.47c0-.75.33-1.46.9-1.95l4.78-4.12,4.78,4.12c.57.49.9,1.21.9,1.95v.47h2.72v-.47c0-1.52-.67-2.97-1.83-3.97l-4.51-3.89,4.51-3.89c1.16-1,1.83-2.45,1.83-3.97Z"/></svg>';

function logoLockup(){
  return `<img class="cof-wordmark" src="${COF_WORDMARK}" alt="Commerce Operations Foundation" width="90" height="30">`
       + `<span class="lock-div" aria-hidden="true"></span>`
       + `<span class="onx-mark" aria-label="onX">${ONX_MARK}</span>`;
}
document.querySelectorAll('[data-logo]').forEach(el=>{
  el.classList.add('cof-logo');
  el.innerHTML = logoLockup();
});

/* ---- Mobile nav toggle ---- */
(function(){
  const t=document.querySelector('.nav-toggle'), links=document.getElementById('navLinks');
  if(t&&links){t.addEventListener('click',()=>{const o=links.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
})();

/* ---- Footer year ---- */
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

/* ---- Blueprint drafting marks (parallax depth layers) ---- */
const markSpecs=[
  {t:'mark',x:'6%',y:'18%',s:0.5,txt:'onX // ORDER NETWORK eXCHANGE'},
  {t:'mark',x:'72%',y:'12%',s:0.32,txt:'REV 2.0 — MCP'},
  {t:'mark',x:'82%',y:'62%',s:0.7,txt:'SCALE 1:1'},
  {t:'mark',x:'4%',y:'74%',s:0.22,txt:'14 TOOLS / 9 RESOURCES'},
  {t:'mark',x:'40%',y:'88%',s:0.6,txt:'SEC. A-A'},
  {t:'cross',x:'24%',y:'30%',s:0.8},
  {t:'cross',x:'88%',y:'40%',s:0.45},
  {t:'cross',x:'15%',y:'55%',s:0.3},
  {t:'cross',x:'60%',y:'22%',s:0.65},
  {t:'cross',x:'70%',y:'80%',s:0.5},
  {t:'circle',x:'80%',y:'24%',s:0.4,d:90},
  {t:'circle',x:'12%',y:'40%',s:0.6,d:150},
  {t:'circle',x:'52%',y:'66%',s:0.28,d:60},
  {t:'vline',x:'33%',y:'0',s:0.18,len:'40%'},
  {t:'hline',x:'0',y:'48%',s:0.25,len:'22%'},
  {t:'hline',x:'66%',y:'70%',s:0.4,len:'30%'},
];
const bpMarks=document.getElementById('bpMarks');
if(bpMarks){
  bpMarks.innerHTML=markSpecs.map(m=>{
    if(m.t==='mark')return `<div class="bp-mark" data-par-fixed="${m.s}" style="left:${m.x};top:${m.y}">${m.txt}</div>`;
    if(m.t==='cross')return `<div class="bp-cross" data-par-fixed="${m.s}" style="left:${m.x};top:${m.y};transform:scale(${1+m.s})"></div>`;
    if(m.t==='circle')return `<div class="bp-circle" data-par-fixed="${m.s}" style="left:${m.x};top:${m.y};width:${m.d}px;height:${m.d}px"></div>`;
    if(m.t==='vline')return `<div class="bp-line" data-par-fixed="${m.s}" style="left:${m.x};top:${m.y};width:1px;height:${m.len}"></div>`;
    if(m.t==='hline')return `<div class="bp-line" data-par-fixed="${m.s}" style="left:${m.x};top:${m.y};height:1px;width:${m.len}"></div>`;
    return '';
  }).join('');
}

/* ---- Parallax ---- */
let parEls=[],parFixed=[];
function refreshParEls(){
  parEls=[...document.querySelectorAll('[data-par]')];
  parFixed=[...document.querySelectorAll('[data-par-fixed]')];
}
function onScroll(){
  const y=window.scrollY;
  for(const el of parEls){const sp=parseFloat(el.dataset.par);el.style.transform=`translate3d(${el._px||0}px, ${(-y*sp).toFixed(1)}px, 0)`;}
  for(const el of parFixed){const sp=parseFloat(el.dataset.parFixed);el.style.transform=`translate3d(${el._fx||0}px, ${(-y*sp).toFixed(1)}px, 0)`;}
}
refreshParEls();onScroll();
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('mousemove',e=>{
  const cx=(e.clientX/window.innerWidth-.5),cy=(e.clientY/window.innerHeight-.5);
  document.querySelectorAll('.hero [data-par]').forEach(el=>{const s=parseFloat(el.dataset.par);el._px=(cx*s*22).toFixed(1);});
  for(const el of parFixed){const s=parseFloat(el.dataset.parFixed);el._fx=(cx*s*30).toFixed(1);el._fy=(cy*s*18).toFixed(1);}
  onScroll();
});

/* ---- Marquee (home only) ---- */
const mq=document.getElementById('mq');
if(mq){
  const members=['Pipe17','Manhattan Associates','commercetools','IBM Sterling','SPS Commerce','Radial','Ryder','Allbirds','Fluent Commerce','Deck Commerce','Kibo','ShipHero','Logiwa','Cin7','Orium','Patchworks','OneStock','Nextuple','Shipwire','Elastic Path','Logitech','Vitamin Shoppe','IPSY','Shopware','Ordergroove','Barrett Distribution','Fulfillment IQ','MACH Alliance'];
  mq.innerHTML=[...members,...members].map(m=>`<div class="chip">${m}</div>`).join('');
}

/* ---- Scroll-in animations ---- */
(function(){
  const els=document.querySelectorAll('.card, .step, .ba .col, .tier, .door, .post');
  els.forEach(e=>e.classList.add('scrollanim'));
  const io=new IntersectionObserver(en=>{en.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:.12});
  els.forEach(e=>io.observe(e));
})();
