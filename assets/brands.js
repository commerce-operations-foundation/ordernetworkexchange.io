/* ============================================================
   Brands — onX activation tool
   Routes a brand's activation request to the monitored COF/onX inbox.
   The Foundation coordinates outreach to the (opted-in) vendor contacts.
   ------------------------------------------------------------
   REAL CONTACTS: once a vendor has agreed to monitor & follow up,
   add them to vendorContacts below and set ROUTE_DIRECT = true to
   surface their contact in the review step. Until then we keep the
   flow honest — no placeholder names/addresses are shown or emailed.
   ============================================================ */
const ROUTE_DIRECT = false;
const vendorContacts = {
  /* 'Manhattan': { name:'', email:'', role:'', confirmedMonitoring:false }, */
};

const vendorData={
  'Order Management (OMS)':[{n:'Manhattan',s:'live'},{n:'IBM Sterling',s:'build'},{n:'Fluent Commerce',s:'live'},{n:'Deck Commerce',s:'build'},{n:'Kibo',s:'live'},{n:'OneStock',s:'build'},{n:'Nextuple',s:'live'}],
  'Warehouse & 3PL (WMS/3PL)':[{n:'ShipHero',s:'live'},{n:'Ryder',s:'build'},{n:'Radial',s:'live'},{n:'Logiwa',s:'build'},{n:'Quiet Platforms',s:'build'},{n:'Barrett Distribution',s:'build'}],
  'Commerce Platforms':[{n:'commercetools',s:'live'},{n:'Elastic Path',s:'build'},{n:'Shopware',s:'build'},{n:'Pipe17',s:'live'}],
  'Integration Partners (Systems Integrators)':[{n:'Orium',s:'live'},{n:'Fulfillment IQ',s:'live'},{n:'Patchworks',s:'live'},{n:'Order Management Gurus',s:'build'}]
};

let selected=new Set();

/* build the selection grid */
(function(){
  let vh='';
  for(const cat in vendorData){
    vh+=`<div class="cat-label">${cat}</div><div class="vendor-grid">`;
    vendorData[cat].forEach(v=>{
      vh+=`<div class="vendor" data-name="${v.n}" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleVendor(this)" onkeydown="if(event.key===' '||event.key==='Enter'){event.preventDefault();toggleVendor(this);}"><div class="vdot"></div><div><div class="vname">${v.n}</div><div class="vtype">${v.s==='live'?'onX live':'building'}</div></div></div>`;
    });
    vh+='</div>';
  }
  document.getElementById('vendorGroups').innerHTML=vh;
})();

function statusOf(name){for(const cat in vendorData){const m=vendorData[cat].find(v=>v.n===name);if(m)return m.s;}return 'build';}

function toggleVendor(el){
  const n=el.dataset.name;
  if(selected.has(n)){selected.delete(n);el.classList.remove('sel');el.setAttribute('aria-checked','false');}
  else{selected.add(n);el.classList.add('sel');el.setAttribute('aria-checked','true');}
  document.getElementById('selNum').textContent=selected.size;
  const btn=document.getElementById('genBtn');
  btn.disabled=selected.size===0;
  btn.style.opacity=selected.size===0?'.4':'1';
}

/* step indicator: states = done | on (current) | (future=neutral) */
function setSteps(current){
  for(let i=1;i<=3;i++){
    const st=document.getElementById('ts'+i);
    st.classList.remove('on','done');
    if(i<current)st.classList.add('done');
    else if(i===current)st.classList.add('on');
  }
  const lines=document.querySelectorAll('#activationTool .tool-steps .line');
  lines.forEach((l,idx)=>l.classList.toggle('filled', idx < current-1));
}

function buildPacket(){
  if(selected.size===0)return;
  setSteps(2);
  let cards='';
  selected.forEach(n=>{
    const st=statusOf(n);
    cards+=`<div class="contact-card"><div class="ci"><div class="av">${n.slice(0,1)}</div><div><div class="cn">${n}</div><div class="cr">${st==='live'?'Live onX endpoint available':'Building onX support'}</div></div></div><div class="statusbadge ${st}">${st==='live'?'onX LIVE':'BUILDING onX'}</div></div>`;
    if(ROUTE_DIRECT && vendorContacts[n] && vendorContacts[n].confirmedMonitoring){
      const c=vendorContacts[n];
      cards+=`<div class="form-note" style="margin:-6px 0 12px 4px">Coordination contact: ${c.name} · ${c.email}</div>`;
    }
  });
  document.getElementById('contactList').innerHTML=cards;

  const names=[...selected].join(', ');
  document.getElementById('selVendorsField').value=names;
  const draft=`Subject: Enabling onX (Order Network eXchange) for our account

Hi team,

We're prioritising readiness for AI-driven commerce and want our order & fulfillment data exchanged via the onX open standard across our stack.

We work with: ${names}.

We'd like to understand each partner's onX support timeline and what's required on our side to enable it. We're coordinating this with the Commerce Operations Foundation and are happy to have them help drive the rollout.

Specifically:
  • Is an onX-compliant endpoint available or on the roadmap?
  • What's required on our side to turn it on?
  • Who is the right technical contact to coordinate?

Looking forward to making fulfillment intelligent together.`;
  const ta=document.getElementById('draftField');
  ta.value=draft;

  document.getElementById('selectStage').style.display='none';
  document.getElementById('packetStage').classList.add('show');
  document.getElementById('activationTool').scrollIntoView({behavior:'smooth',block:'start'});
}

function resetTool(){
  setSteps(1);
  document.getElementById('selectStage').style.display='block';
  document.getElementById('packetStage').classList.remove('show');
}

function copyNote(){
  const t=document.getElementById('draftField').value;
  navigator.clipboard.writeText(t).then(()=>{
    const b=document.getElementById('copyBtn');const o=b.textContent;b.textContent='Copied ✓';setTimeout(()=>b.textContent=o,1800);
  });
}

/* AJAX submit to Netlify Forms so we can show inline success */
const actForm=document.getElementById('activationForm');
if(actForm){
  actForm.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(actForm);
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()})
      .then(()=>{
        setSteps(3);
        document.getElementById('ts3').classList.remove('on');document.getElementById('ts3').classList.add('done');
        document.getElementById('packetForm').style.display='none';
        document.getElementById('actSuccess').classList.add('show');
        document.getElementById('actSuccess').scrollIntoView({behavior:'smooth',block:'center'});
      })
      .catch(()=>{actForm.querySelector('.form-note').innerHTML='Something went wrong — please email us directly and we\'ll pick it up.';});
  });
}
