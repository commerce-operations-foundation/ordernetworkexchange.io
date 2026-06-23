/* ============================================================
   Home — "How it works" auto-playing schematic
   ============================================================ */
const hiwStages=[
  { name:'Agentic discovery', dur:4200,
    h:'A shopper asks their AI agent to buy something.',
    b:'Agentic commerce starts the journey — the agent captures intent and is ready to transact.',
    lit:[0,1], flow:['c0'], onx:false,
    onxTxt:'Protocols like ACP &amp; AP2 handle intent and payment — but stop at the order.' },
  { name:'The handoff gap', dur:4200,
    h:'The agent places the order with your store. Now what?',
    b:'Without a shared standard, this is where orders break — every system speaks a different dialect.',
    lit:[1,2], flow:['c1'], onx:false, warn:true,
    onxTxt:'This is the missing layer onX was built to fill.' },
  { name:'onX kicks in', dur:4600,
    h:'onX translates the order into one common language.',
    b:'Your store emits a standard onX order — no custom integration per agent, per partner.',
    lit:[2], flow:[], onx:true, onxNodes:[2],
    onxTxt:'<b>onX activates.</b> One open contract your stack implements once.',
    tools:'createOrder · getInventory · …' },
  { name:'Intelligent routing', dur:4600,
    h:'The order flows cleanly to your OMS and fulfillment.',
    b:'OMS and WMS/3PL read the same onX order — routing, inventory, and promises just work.',
    lit:[2,3,4], flow:['c2'], onx:true, onxNodes:[2,3,4],
    onxTxt:'<b>onX in motion.</b> Every system reads the same order, in real time.',
    tools:'allocateOrder · createShipment · trackShipment' },
  { name:'Delivered & visible', dur:4600,
    h:'The package ships — and the agent can track it the whole way.',
    b:'Status flows back through onX, so the AI agent keeps the shopper updated. You got found, chosen, and delivered.',
    lit:[4,3,2,1,0], flow:[], onx:true, onxNodes:[2,3,4], solidAll:true,
    onxTxt:'<b>The loop closes.</b> Fulfillment data is legible end-to-end.',
    tools:'getShipmentStatus · updateOrder' },
];
const hiwEls={
  nodes:[...Array(5)].map((_,i)=>document.getElementById('n'+i)),
  connects:['c0','c1','c2'].map(id=>document.getElementById(id)),
  layer:document.getElementById('onxLayer'), onxTxt:document.getElementById('onxTxt'),
  onxTools:document.getElementById('onxTools'), narrH:document.getElementById('narrH'),
  narrB:document.getElementById('narrB'), stageNum:document.getElementById('stageNum'),
  stageName:document.getElementById('stageName'), rail:document.getElementById('hiwRail'),
  playBtn:document.getElementById('playBtn')
};
hiwEls.rail.innerHTML=hiwStages.map((s,i)=>`<button class="rail-step" data-i="${i}" onclick="gotoHiw(${i})"><div class="bar"><span style="--dur:${s.dur}ms"></span></div><span class="rl">0${i+1} ${s.name}</span></button>`).join('');
const railSteps=[...hiwEls.rail.querySelectorAll('.rail-step')];

let hiwIdx=0,hiwTimer=null,hiwPlaying=true;
function renderHiw(i){
  const s=hiwStages[i];
  hiwEls.nodes.forEach((n,idx)=>{
    n.classList.remove('lit','done','onxlit');
    if(s.lit.includes(idx))n.classList.add('lit');
    else if(i>0 && hiwStages.slice(0,i).some(p=>p.lit.includes(idx)))n.classList.add('done');
    if(s.onxNodes&&s.onxNodes.includes(idx))n.classList.add('onxlit');
  });
  hiwEls.connects.forEach(c=>{c.classList.remove('flowing','solid');});
  (s.flow||[]).forEach(id=>{const c=document.getElementById(id);if(c)c.classList.add('flowing');});
  if(s.solidAll)hiwEls.connects.forEach(c=>c.classList.add('solid'));
  hiwEls.layer.classList.toggle('active',!!s.onx);
  hiwEls.onxTxt.innerHTML=s.onxTxt;
  hiwEls.onxTools.textContent=s.tools||'14 MCP tools · 9 resources';
  hiwEls.narrH.textContent=s.h; hiwEls.narrB.textContent=s.b;
  hiwEls.stageNum.textContent=i+1; hiwEls.stageName.textContent=s.name;
  railSteps.forEach((r,idx)=>{r.classList.remove('active','complete');if(idx<i)r.classList.add('complete');else if(idx===i)r.classList.add('active');
    const span=r.querySelector('.bar span');span.style.animation='none';void span.offsetWidth;span.style.animation='';});
}
function scheduleHiw(){clearTimeout(hiwTimer);if(!hiwPlaying)return;hiwTimer=setTimeout(()=>{hiwIdx=(hiwIdx+1)%hiwStages.length;renderHiw(hiwIdx);scheduleHiw();},hiwStages[hiwIdx].dur);}
function gotoHiw(i){hiwIdx=i;renderHiw(i);if(hiwPlaying)scheduleHiw();}
function toggleHiw(){hiwPlaying=!hiwPlaying;hiwEls.playBtn.innerHTML=hiwPlaying?'⏸ Pause':'▶ Play';if(hiwPlaying)scheduleHiw();else clearTimeout(hiwTimer);}
const hiwIO=new IntersectionObserver(es=>{es.forEach(e=>{
  if(e.isIntersecting){if(hiwPlaying){renderHiw(hiwIdx);scheduleHiw();}}
  else{clearTimeout(hiwTimer);}
});},{threshold:.3});
hiwIO.observe(document.getElementById('hiw'));
renderHiw(0);
