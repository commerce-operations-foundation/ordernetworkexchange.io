/* ============================================================
   Static site generator for ordernetworkexchange.io
   Run:  node build.js
   Emits the multi-page site from shared partials + page content.
   Deploy stays fully static (Netlify publishes the repo root).
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const SITE = 'https://ordernetworkexchange.io';

/* ---------- shared partials ---------- */
function head(o){
  const url = SITE + (o.path === '/' ? '/' : o.path);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${o.desc}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Commerce Operations Foundation">
<meta property="og:title" content="${o.ogTitle || o.title}">
<meta property="og:description" content="${o.desc}">
<meta property="og:image" content="${SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${o.ogTitle || o.title}">
<meta name="twitter:description" content="${o.desc}">
<meta name="twitter:image" content="${SITE}/og-image.png">
<title>${o.title}</title>
<link rel="icon" type="image/svg+xml" href="/assets/onx-logo.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
<div class="blueprint-bg"></div>
<div class="blueprint-grid" id="bpGrid" data-par-fixed="0.12"></div>
<div class="blueprint-marks" id="bpMarks"></div>`;
}

const NAVITEMS=[
  {href:'/brands',label:'For Brands',key:'brands'},
  {href:'/tech',label:'For Tech Vendors',key:'tech'},
  {href:'/integrators',label:'For Systems Integrators',key:'integrators'},
  {href:'/insights',label:'Insights',key:'insights'},
  {href:'/membership',label:'Membership',key:'membership'},
];
function nav(active){
  const links=NAVITEMS.map(n=>`<a href="${n.href}"${n.key===active?' class="active" aria-current="page"':''}>${n.label}</a>`).join('');
  return `<nav class="nav"><div class="wrap nav-inner">
  <a class="logo" href="/" data-logo aria-label="Commerce Operations Foundation — onX home"></a>
  <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">☰</button>
  <div class="nav-links" id="navLinks">
    ${links}
    <a class="nav-cta-mobile" href="/brands">Start your journey with onX →</a>
  </div>
  <a class="nav-cta" href="/brands">Start your journey with onX →</a>
</div></nav>`;
}

function footer(){
  return `<footer class="footer"><div class="wrap">
  <div class="foot-top">
    <div><a class="logo" href="/" data-logo aria-label="Commerce Operations Foundation — onX"></a><p class="foot-blurb">Stewarding onX — the open standard making fulfillment intelligent for the age of AI commerce.</p></div>
    <div><h5>By Audience</h5><a href="/brands">For Brands</a><a href="/tech">For Tech Vendors</a><a href="/integrators">For Systems Integrators</a></div>
    <div><h5>Resources</h5><a href="/insights">Insights</a><a href="https://github.com/commerce-operations-foundation" target="_blank" rel="noopener">GitHub ↗</a><a href="/membership">Membership</a></div>
    <div><h5>Foundation</h5><a href="https://commerceopsfoundation.org/about/" target="_blank" rel="noopener">About</a><a href="https://commerceopsfoundation.org/governance/" target="_blank" rel="noopener">Governance</a><a href="/membership#join">Contact</a></div>
  </div>
  <div class="foot-bottom"><span>© <span data-year>2026</span> Commerce Operations Foundation. All rights reserved.</span><span class="mono">Built on the Model Context Protocol</span></div>
</div></footer>`;
}

function page(o){
  const scripts=['<script src="/assets/app.js"></script>',...(o.scripts||[])].join('\n');
  fs.writeFileSync(path.join(ROOT,o.file),
`${head(o)}
${nav(o.active)}
${o.body}
${footer()}
${scripts}
</body>
</html>`);
  console.log('wrote', o.file);
}

/* ---------- insights data ---------- */
const posts=[
  {track:'brand',label:'Brand Activation',title:'Get Found or Get Skipped: Why Brands Can’t Sit Out Agentic Commerce',excerpt:'The discoverability stakes of agent-mediated shopping — and why legibility to agents is now table stakes.',read:'8 min',c:'#b6e63a'},
  {track:'brand',label:'Brand Activation',title:'The 20-Minute Internal Memo That Gets onX on Your Roadmap',excerpt:'A copy-paste template for making the business case to your VP of Ops and your CFO.',read:'5 min',c:'#b6e63a'},
  {track:'brand',label:'Brand Activation',title:'How to Ask Your OMS Vendor for onX (and What “Yes” Looks Like)',excerpt:'Scripts, questions, and red flags for the conversation that starts your activation.',read:'6 min',c:'#b6e63a'},
  {track:'tech',label:'Vendor Engineering',title:'Mapping Your Existing APIs to the 14 onX MCP Tools',excerpt:'A technical walkthrough of aligning your order surface to the spec — with the common gaps.',read:'11 min',c:'#5cc4e6'},
  {track:'tech',label:'Vendor Engineering',title:'From Clone to Conformant in a Sprint: Using the Reference Server',excerpt:'How early implementers stood up a compliant endpoint faster than expected.',read:'9 min',c:'#5cc4e6'},
  {track:'tech',label:'Vendor Engineering',title:'Inside the Technical Steering Committee: How the Spec Evolves',excerpt:'What it means to shape onX from the inside, and how decisions get made in the open.',read:'7 min',c:'#5cc4e6'},
  {track:'si',label:'Integrator Playbook',title:'Productizing onX: Turning a Standard into a Service Line',excerpt:'How to package assessment, activation, and migration into named, estimable offerings.',read:'8 min',c:'#f0a94e'},
  {track:'si',label:'Integrator Playbook',title:'The Anatomy of a Repeatable onX Rollout',excerpt:'A reference delivery plan you can adapt across clients — scopes, milestones, gotchas.',read:'10 min',c:'#f0a94e'},
  {track:'vision',label:'The Big Picture',title:'The EDI Moment: What 40 Years of Interoperability Teaches Us',excerpt:'Why the agentic-commerce era needs its own common language — and what history predicts.',read:'9 min',c:'#a78bfa'},
  {track:'vision',label:'The Big Picture',title:'Foundation Launch: A New Era for Commerce Operations',excerpt:'Introducing onX, the founding members, and the road ahead for the Foundation.',read:'6 min',c:'#a78bfa'},
];
function slugify(t){return t.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);}
posts.forEach(p=>p.slug=slugify(p.title));
const TRACK_ICON={brand:'📋',tech:'⚙️',si:'🧩',vision:'🔭'};
function postCard(p){
  return `<a class="post" href="/insights/${p.slug}" data-track="${p.track}" style="--pc:${p.c}"><div class="thumb" style="background:linear-gradient(135deg, color-mix(in srgb, ${p.c} 55%, #0a2230), #0a2230 92%)"><div class="pnum">${TRACK_ICON[p.track]||'onX'}</div></div><div class="pbody"><div class="ptrack">${p.label}</div><h4>${p.title}</h4><p>${p.excerpt}</p><div class="pmeta"><span>${p.read} read</span><span>Read →</span></div></div></a>`;
}

module.exports = { page, head, nav, footer, posts, postCard, slugify, SITE, ROOT, fs, path };

/* page bodies live in build.pages.js to keep this file readable */
require('./build.pages.js');
