/* Page bodies — required by build.js */
const b = require('./build.js');
const { page, posts, postCard, slugify, fs, path, ROOT } = b;

const GH = 'https://github.com/commerce-operations-foundation';

/* ============================ HOME ============================ */
const homeTeaser = ['brand','tech','vision'].map(t=>posts.find(p=>p.track===t)).filter(Boolean).map(postCard).join('');
page({
  file:'index.html', path:'/', active:'home',
  title:'Commerce Operations Foundation — onX',
  desc:'onX — the Order Network eXchange — is the open standard that lets selling channels, fulfillment systems, and AI agents speak the same language.',
  scripts:['<script src="/assets/home.js?v=20261006-12-tools"></script>'],
  body:`
<section class="hero" id="hero">
  <div class="hero-bg">
    <div class="hero-grid" data-par="0.18"></div>
    <div class="glow g1" data-par="0.34"></div>
    <div class="glow g2" data-par="0.5"></div>
    <div class="orb o1" data-par="0.7"></div>
    <div class="orb o2" data-par="-0.4"></div>
    <div class="orb o3" data-par="0.25"></div>
  </div>
  <div class="wrap hero-inner" data-par="-0.12">
    <div class="kicker"><span class="dot"></span> The open standard for agentic commerce</div>
    <h1>AI made buying effortless.<br>Now we make fulfillment <span class="hl">intelligent.</span></h1>
    <p class="lede">onX — the Order Network eXchange — is the open standard that lets selling channels, fulfillment systems, and AI agents finally speak the same language.</p>
    <p class="micro mono">Built on the Model Context Protocol &nbsp;·&nbsp; 12 MCP tools &nbsp;·&nbsp; 9 shared resources &nbsp;·&nbsp; Open governance</p>
    <div class="router-label">Start with what you are →</div>
    <div class="doors">
      <a class="door brand" href="/brands"><div class="ico">🏷️</div><div class="who">Brands &amp; Retailers</div><h3>I sell products</h3><p>Get found by AI shopping agents and make fulfillment intelligent — by activating onX with the vendors you already use.</p><span class="go">Enter the Brand track <span class="arr">→</span></span></a>
      <a class="door tech" href="/tech"><div class="ico">⚙️</div><div class="who">Technology Vendors</div><h3>I build OMS / WMS / platforms</h3><p>Ship a compliant onX endpoint, join the Technical Steering Committee, and become the default your customers ask for.</p><span class="go">Enter the Tech track <span class="arr">→</span></span></a>
      <a class="door si" href="/integrators"><div class="ico">🔧</div><div class="who">Systems Integrators</div><h3>I implement &amp; integrate</h3><p>Lead onX rollouts for your clients, get certified, and turn the standard into a repeatable services practice.</p><span class="go">Enter the Systems Integrator track <span class="arr">→</span></span></a>
    </div>
  </div>
</section>
<div class="proof"><div class="wrap">
  <div class="stat-row">
    <div class="stat"><div class="num">62+</div><div class="lbl">Founding Members</div></div>
    <div class="stat"><div class="num">$1T+</div><div class="lbl">GMV Represented</div></div>
    <div class="stat"><div class="num">12</div><div class="lbl">MCP Tools Defined</div></div>
    <div class="stat"><div class="num">100%</div><div class="lbl">Open &amp; Vendor-Neutral</div></div>
  </div>
  <div class="marquee"><div class="marquee-track" id="mq"></div></div>
</div></div>

<section class="section wrap pullquote-wrap" style="--accent:var(--lime);padding-bottom:0">
  <figure class="pullquote">
    <blockquote>&ldquo;Agentic commerce requires real-time order, inventory, fulfillment, and returns information &mdash; capabilities that most legacy commerce systems were not designed to provide. There is a movement in this space, something to watch for, and it&rsquo;s called the onX protocol.&rdquo;</blockquote>
    <figcaption><span class="pq-name">Deepa Shekhar</span>, <span class="pq-org">Logitech</span></figcaption>
  </figure>
</section>

<section class="hiw" id="hiw">
  <div class="wrap">
    <div class="hiw-head">
      <div class="eyebrow center" style="--accent:var(--blue)">How it works</div>
      <h2>Watch onX kick in.</h2>
      <p>Follow one order from a shopper's AI agent all the way to their doorstep — and see where the standard does its work.</p>
    </div>
    <div class="hiw-stage-cap">STAGE <b id="stageNum">1</b> / 5 &nbsp;·&nbsp; <span id="stageName">Agentic discovery</span></div>
    <div class="schema">
      <div class="schema-grid" id="schemaGrid">
        <div class="connect" id="c0" style="left:20%;width:20%"><div class="flow"></div></div>
        <div class="connect" id="c1" style="left:40%;width:20%"><div class="flow"></div></div>
        <div class="connect" id="c2" style="left:60%;width:20%"><div class="flow"></div></div>
        <div class="connect" id="c3" style="left:80%;width:20%;display:none"></div>
        <div class="node" id="n0" style="--nc:var(--blue-bright)"><div class="box"><span class="ntag">the shopper</span><div class="nico">🛍️</div><div class="nname">Shopper</div><div class="nsub">"find me X"</div></div></div>
        <div class="node" id="n1" style="--nc:var(--blue-bright)"><div class="box"><span class="ntag">AI layer</span><div class="nico">🤖</div><div class="nname">AI Agent</div><div class="nsub">ACP · AP2</div></div></div>
        <div class="node" id="n2" style="--nc:var(--lime)"><div class="onx-pulse"></div><div class="box"><span class="ntag">your channel</span><div class="nico">🏷️</div><div class="nname">Your Store</div><div class="nsub">selling channel</div></div></div>
        <div class="node" id="n3" style="--nc:var(--lime)"><div class="onx-pulse"></div><div class="box"><span class="ntag">orchestration</span><div class="nico">⚙️</div><div class="nname">OMS</div><div class="nsub">order mgmt</div></div></div>
        <div class="node" id="n4" style="--nc:var(--amber)"><div class="onx-pulse"></div><div class="box"><span class="ntag">fulfillment</span><div class="nico">📦</div><div class="nname">WMS / 3PL</div><div class="nsub">ship &amp; track</div></div></div>
      </div>
      <div class="onx-layer" id="onxLayer">
        <span class="ox-badge">onX</span>
        <span class="ox-txt" id="onxTxt">The open standard that lets these systems speak one language.</span>
        <span class="ox-tools mono" id="onxTools">12 MCP tools · 9 resources</span>
      </div>
    </div>
    <div class="hiw-narr" id="hiwNarr">
      <div class="nh" id="narrH">A shopper asks their AI agent to buy something.</div>
      <div class="nb" id="narrB">Agentic commerce starts the journey — the agent captures intent and is ready to transact.</div>
    </div>
    <div class="hiw-rail" id="hiwRail"></div>
    <div class="hiw-controls">
      <button class="hiw-play" id="playBtn" onclick="toggleHiw()">⏸ Pause</button>
      <a class="hiw-play" href="/brands">See your activation path →</a>
    </div>
  </div>
</section>

<section class="section wrap" style="--accent:var(--blue)">
  <div class="eyebrow">The shift nobody can opt out of</div>
  <h2>Commerce is being rebuilt around agents. The plumbing isn't ready.</h2>
  <p class="sub">AI agents now start the buying journey — but every brand, platform, and 3PL still speaks a different dialect for orders, inventory, and fulfillment. onX is the shared language that closes the gap.</p>
  <div class="ba">
    <div class="col before"><span class="tag">Without a standard</span><ul><li>Brittle point-to-point integrations between every system</li><li>Each new partner = another custom build</li><li>Invisible to AI shopping agents — get skipped</li><li>Manual fixes that never scale</li></ul></div>
    <div class="arrow-mid">→</div>
    <div class="col after"><span class="tag">With onX</span><ul><li>One open contract every system implements once</li><li>New partners connect in days, not quarters</li><li>Agent-readable — get found, get chosen</li><li>Governed in the open, owned by no one</li></ul></div>
  </div>
</section>
<section class="section wrap" style="--accent:var(--lime);padding-top:0"><div class="band">
  <div class="bglow" data-par="0.3"></div>
  <div class="eyebrow center">The EDI moment for AI commerce</div>
  <h2>EDI standardized how businesses traded for 40 years.<br>onX does it for the age of agents.</h2>
  <p>When the industry agreed on a common format, an entire economy of interoperability followed. onX is that agreement — purpose-built for AI-native, post-purchase order data.</p>
  <div class="btn-row"><a class="btn btn-primary" href="/brands">See how brands activate it</a><a class="btn btn-ghost" href="${GH}" target="_blank" rel="noopener">View the spec on GitHub ↗</a></div>
</div></section>
<section class="section wrap" style="--accent:var(--violet);padding-top:0">
  <div class="eyebrow">From the Foundation</div><h2>Insights &amp; field notes</h2>
  <p class="sub">Three running series — one for each audience — that turn the standard into action.</p>
  <div class="posts">${homeTeaser}</div>
  <div class="center"><a class="btn btn-ghost" style="border-color:var(--line-strong)" href="/insights">Browse all insights →</a></div>
</section>`
});

/* ============================ BRANDS ============================ */
page({
  file:'brands.html', path:'/brands', active:'brands',
  title:'For Brands & Retailers — Start your journey with onX',
  desc:'Your customers are already shopping with agents. Activate onX with the OMS, WMS, and integration partners you already use.',
  scripts:['<script src="/assets/brands.js"></script>'],
  body:`
<div style="--accent:var(--lime);--pg:rgba(159,212,32,.4)">
  <section class="phero"><div class="pglow" data-par="0.4"></div><div class="orb o2" data-par="-0.3" style="top:80px;right:14%"></div>
    <div class="wrap"><div class="crumbs"><a href="/">Home</a><span>/</span>For Brands &amp; Retailers</div>
      <div class="phero-inner"><div class="ptag">🏷️ Brands &amp; Retailers</div>
        <h1>Your customers are already shopping with agents.<br>Make sure they can <span class="hl">buy &amp; receive</span> from you.</h1>
        <p>You don't have to build onX yourself. You activate it — by asking the OMS, WMS, and integration partners you already work with to turn it on.</p>
        <div class="qnav"><a href="#b-what"><span class="n">01</span>What is it?</a><a href="#b-why"><span class="n">02</span>Why do I need it?</a><a href="#b-how"><span class="n">03</span>How do I get started?</a></div>
      </div></div></section>
  <section class="qblock wrap" id="b-what"><div class="qhead"><div class="qn">01</div><div><h2>What is onX, in your terms?</h2><p class="qlede">A free, open standard that lets every system in your commerce stack — and the AI agents now shopping on your customers' behalf — exchange order and fulfillment data the same way.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🤖</div><h4>Agent-readable orders</h4><p>When an AI agent places or tracks an order, onX gives it a structured, predictable way to talk to your fulfillment systems.</p></div><div class="card"><div class="cico">🔗</div><h4>One language, every partner</h4><p>Your OMS, WMS, 3PL, and platform all speak onX — so handoffs stop breaking and data stops getting lost in translation.</p></div><div class="card"><div class="cico">🆓</div><h4>Open &amp; free to adopt</h4><p>No license, no lock-in. Stewarded by a vendor-neutral foundation and built on the Model Context Protocol.</p></div></div>
  </section>
  <section class="qblock wrap" id="b-why"><div class="qhead"><div class="qn">02</div><div><h2>Why do you need it?</h2><p class="qlede">Because in agentic commerce, if your fulfillment data isn't legible to agents, your products effectively don't exist to them. Get found, or get skipped.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">👁️</div><h4>Get found by AI agents</h4><p>Agents route shoppers to merchants they can transact with cleanly. onX makes you one of them.</p></div><div class="card"><div class="cico">⚡</div><h4>Cut integration drag</h4><p>Stop paying for one-off connections between every system and partner. Standardize once.</p></div><div class="card"><div class="cico">📦</div><h4>Fewer broken handoffs</h4><p>Consistent order data means fewer manual fixes, fewer WISMO tickets, faster delivery promises.</p></div></div>
  </section>
  <section class="qblock wrap" id="b-how" style="border-bottom:none"><div class="qhead"><div class="qn">03</div><div><h2>How do you get started? Activate your stack.</h2><p class="qlede">Pick the vendors and integrators you already use. We'll route your request to the Foundation, which coordinates with each partner to enable onX for your account. Demand pulls the standard forward.</p></div></div>
    <div class="tool" id="activationTool">
      <div class="tool-steps"><div class="tstep on" id="ts1"><span class="b"><span class="num">1</span></span> Select your vendors</div><div class="line"></div><div class="tstep" id="ts2"><span class="b"><span class="num">2</span></span> Review &amp; add your details</div><div class="line"></div><div class="tstep" id="ts3"><span class="b"><span class="num">3</span></span> Send activation request</div></div>
      <div id="selectStage"><h3>Which systems power your commerce stack?</h3><p class="thelp">Select one or more. Mix and match across OMS, WMS/3PL, platforms, and your integration partner.</p><div id="vendorGroups"></div>
        <div class="tool-foot"><div class="selcount">Selected: <b id="selNum">0</b> partners</div><button class="btn btn-primary" id="genBtn" onclick="buildPacket()" disabled style="opacity:.4">Continue to review →</button></div></div>
      <div class="packet" id="packetStage"><h3>Your onX activation packet</h3><p class="thelp">The partners you selected and their current onX status, a drafted note you can edit, and where to send your details so the Foundation can follow up.</p><div id="contactList"></div>
        <form id="activationForm" name="onx-activation" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <div id="packetForm">
            <input type="hidden" name="form-name" value="onx-activation">
            <p class="honey"><label>Don't fill this in: <input name="bot-field"></label></p>
            <input type="hidden" name="selected_vendors" id="selVendorsField">
            <div class="field full" style="margin-bottom:16px"><label>Draft note to your partners <span class="opt">(edit freely)</span></label><textarea name="draft_note" id="draftField"></textarea></div>
            <div class="form-grid">
              <div class="field"><label for="af-name">Your name</label><input id="af-name" name="name" required autocomplete="name"></div>
              <div class="field"><label for="af-email">Your email <span class="opt">(we'll reply here)</span></label><input id="af-email" name="email" type="email" required autocomplete="email"></div>
              <div class="field full"><label for="af-company">Company</label><input id="af-company" name="company" required autocomplete="organization"></div>
            </div>
            <div class="check-row"><input type="checkbox" id="af-cc" name="copy_me" value="yes" checked><label for="af-cc">Send me a copy of this request</label></div>
            <div class="tool-foot"><button type="button" class="btn btn-ghost" style="border-color:var(--line-strong)" onclick="resetTool()">← Edit selection</button><div class="btn-row" style="justify-content:flex-end"><button type="button" class="btn btn-ghost" id="copyBtn" style="border-color:var(--line-strong)" onclick="copyNote()">Copy note</button><button type="submit" class="btn btn-primary">Send to the Foundation →</button></div></div>
            <p class="form-note">Your request goes to the monitored COF/onX inbox. The Foundation coordinates with each partner and follows up with you directly.</p>
          </div>
        </form>
        <div class="form-success" id="actSuccess"><h4>Request sent ✓</h4><p>Thanks — your activation request is in. The Commerce Operations Foundation will coordinate with your selected partners and follow up at the email you provided.</p></div>
      </div>
    </div>
    <div class="cards two" style="margin-top:36px"><div class="card"><div class="cico">📋</div><h4>Not sure who to ask?</h4><p>Talk to the Foundation — we'll help you map your stack and identify the fastest path to a live onX connection.</p><a class="btn btn-ghost" style="margin-top:14px;font-size:14px;padding:10px 18px;border-color:var(--line-strong)" href="/membership#join">Get rollout support</a></div><div class="card"><div class="cico">📖</div><h4>Want the brand playbook?</h4><p>Read the Brand Activation series — practical guides for making the internal case and running a pilot.</p><a class="btn btn-ghost" style="margin-top:14px;font-size:14px;padding:10px 18px;border-color:var(--line-strong)" href="/insights">Read the series</a></div></div>
  </section>
  <section class="section wrap"><div class="band"><div class="bglow" data-par="0.3"></div><h2>The brands that ask first, win first.</h2><p>Activation is a conversation you start with partners you already trust. We'll help you have it.</p><div class="btn-row"><a class="btn btn-primary" href="#b-how">Build my activation packet</a><a class="btn btn-ghost" href="/membership">Become a member</a></div></div></section>
</div>`
});

/* ============================ TECH ============================ */
page({
  file:'tech.html', path:'/tech', active:'tech',
  title:'For Technology Vendors — Implement onX',
  desc:'OMS, WMS, platform and integration vendors are shipping onX endpoints now. Implement the spec and join the Technical Steering Committee.',
  body:`
<div style="--accent:var(--blue);--pg:rgba(110,206,235,.4)">
  <section class="phero"><div class="pglow" data-par="0.4"></div><div class="orb o2" data-par="-0.3" style="top:80px;right:14%;background:rgba(110,206,235,.12)"></div>
    <div class="wrap"><div class="crumbs"><a href="/">Home</a><span>/</span>For Technology Vendors</div>
      <div class="phero-inner"><div class="ptag">⚙️ Technology Vendors</div><h1>The spec is live and your peers are already <span class="hl">building.</span></h1><p>OMS, WMS, platforms and integration tools are shipping onX endpoints now. Be the vendor your customers find compliant when they come asking — because they will.</p>
        <div class="qnav"><a href="#t-what"><span class="n">01</span>What is it?</a><a href="#t-why"><span class="n">02</span>Why do I need it?</a><a href="#t-how"><span class="n">03</span>How do I get started?</a><a href="#t-join"><span class="n">→</span>Get on the vendor track</a></div>
      </div></div></section>
  <section class="qblock wrap" id="t-what"><div class="qhead"><div class="qn">01</div><div><h2>What is onX, technically?</h2><p class="qlede">An open MCP-based specification — 12 tools and 9 shared resources — defining how order and fulfillment systems expose capabilities to agents and to each other.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🛠️</div><h4>12 MCP tools</h4><p>A defined surface area covering order capture through shipment tracking — the full post-purchase lifecycle.</p></div><div class="card"><div class="cico">📚</div><h4>9 shared resources</h4><p>Common schemas so an order means the same thing across every compliant system.</p></div><div class="card"><div class="cico">🐙</div><h4>Open reference server</h4><p>A public GitHub reference implementation to build and validate against — not a paper standard.</p></div></div>
  </section>
  <section class="qblock wrap" id="t-why"><div class="qhead"><div class="qn">02</div><div><h2>Why do you need it?</h2><p class="qlede">Because brands are about to start asking "are you onX-compliant?" the way they once asked about API availability. The answer is a deal-maker or deal-breaker.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🎯</div><h4>Demand is coming to you</h4><p>Our Brand Activation flow routes interested brands directly to their vendors. Be ready to say yes.</p></div><div class="card"><div class="cico">🚪</div><h4>Stop building one-offs</h4><p>Implement the contract once instead of maintaining a custom integration per customer and partner.</p></div><div class="card"><div class="cico">🏛️</div><h4>Shape the standard</h4><p>Early implementers sit on the Technical Steering Committee and influence where the spec goes next.</p></div></div>
  </section>
  <section class="qblock wrap" id="t-how"><div class="qhead"><div class="qn">03</div><div><h2>How do you get started?</h2><p class="qlede">A clear path from clone to compliant. Most of your peers are already somewhere on it.</p></div></div>
    <div class="steps"><div class="step"><div class="sn"></div><div><h4>Clone the reference server</h4><p>Pull the public onX MCP reference implementation and run it locally to see the tools and resources in action.</p><a class="scta" href="${GH}" target="_blank" rel="noopener">github.com/commerce-operations-foundation ↗</a></div></div><div class="step"><div class="sn"></div><div><h4>Map your APIs to the 12 tools</h4><p>Align your existing order/fulfillment surface to the onX tool definitions. Most vendors already cover the majority.</p></div></div><div class="step"><div class="sn"></div><div><h4>Implement &amp; self-validate</h4><p>Build your endpoint and test it against the conformance suite in the reference repo.</p></div></div><div class="step"><div class="sn"></div><div><h4>Join the Technical Steering Committee</h4><p>Bring your implementation learnings to the group steering the spec — and get listed as a compliant vendor.</p><a class="scta" href="#t-join">Apply to the TSC →</a></div></div><div class="step"><div class="sn"></div><div><h4>Get listed &amp; get found</h4><p>Compliant vendors appear in the Brand Activation tool — so demand flows to you automatically.</p></div></div></div>
  </section>
  <section class="qblock wrap" id="t-join" style="border-bottom:none"><div class="qhead"><div class="qn">→</div><div><h2>Get on the onX vendor track.</h2><p class="qlede">Tell us about your platform and we'll get you the spec, the reference server, and a seat in the conversation. Goes straight to the COF/onX team.</p></div></div>
    <div class="tool" style="--accent:var(--blue)">
      <form name="onx-vendor" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="vendorForm">
        <div id="vendorFormInner">
          <input type="hidden" name="form-name" value="onx-vendor">
          <p class="honey"><label>Don't fill this in: <input name="bot-field"></label></p>
          <div class="form-grid">
            <div class="field"><label for="v-name">Your name</label><input id="v-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="v-email">Work email</label><input id="v-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="v-company">Company</label><input id="v-company" name="company" required autocomplete="organization"></div>
            <div class="field"><label for="v-cat">Platform type</label><select id="v-cat" name="platform_type"><option>OMS</option><option>WMS / 3PL</option><option>Commerce Platform</option><option>Integration / iPaaS</option><option>Other</option></select></div>
            <div class="field full"><label for="v-msg">Where are you with onX? <span class="opt">(optional)</span></label><textarea id="v-msg" name="message" placeholder="e.g. evaluating the spec, mid-implementation, ready to validate…"></textarea></div>
          </div>
          <div class="check-row"><input type="checkbox" id="v-cc" name="copy_me" value="yes" checked><label for="v-cc">Send me a copy</label></div>
          <div class="tool-foot"><span class="form-note" style="margin:0">We'll reply to the email you provide.</span><button type="submit" class="btn btn-primary">Request the vendor kit →</button></div>
        </div>
      </form>
      <div class="form-success" id="vendorSuccess"><h4>Thanks — you're on the list ✓</h4><p>The COF/onX team will follow up at your email with the spec, the reference server, and next steps for the Technical Steering Committee.</p></div>
    </div>
  </section>
  <section class="section wrap"><div class="band"><div class="bglow" data-par="0.3" style="background:var(--blue-bright)"></div><h2>Your customers will ask. Be the easy yes.</h2><p>Join the vendors already building onX into their roadmap and shaping the standard from the inside.</p><div class="btn-row"><a class="btn btn-primary" href="${GH}" target="_blank" rel="noopener">Start on GitHub ↗</a><a class="btn btn-ghost" href="#t-join">Join the TSC</a></div></div></section>
</div>
<script>
(function(){var f=document.getElementById('vendorForm');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d).toString()}).then(function(){document.getElementById('vendorFormInner').style.display='none';document.getElementById('vendorSuccess').classList.add('show');}).catch(function(){});});})();
</script>`
});

/* ============================ INTEGRATORS ============================ */
page({
  file:'integrators.html', path:'/integrators', active:'integrators',
  title:'For Systems Integrators — Build an onX practice',
  desc:'Every brand activating onX needs someone to make it real. Turn the standard into a repeatable, certified services practice.',
  body:`
<div style="--accent:var(--amber);--pg:rgba(232,146,58,.36)">
  <section class="phero"><div class="pglow" data-par="0.4"></div><div class="orb o2" data-par="-0.3" style="top:80px;right:14%;background:rgba(232,146,58,.12)"></div>
    <div class="wrap"><div class="crumbs"><a href="/">Home</a><span>/</span>For Systems Integrators</div>
      <div class="phero-inner"><div class="ptag">🔧 Systems Integrators</div><h1>Every brand activating onX needs someone to <span class="hl">make it real.</span></h1><p>That someone is you. Turn the standard into a repeatable, high-margin services practice — and become the partner brands and vendors call first.</p>
        <div class="qnav"><a href="#s-what"><span class="n">01</span>What is it?</a><a href="#s-why"><span class="n">02</span>Why do I need it?</a><a href="#s-how"><span class="n">03</span>How do I get started?</a></div>
      </div></div></section>
  <section class="qblock wrap" id="s-what"><div class="qhead"><div class="qn">01</div><div><h2>What is onX, for your practice?</h2><p class="qlede">A standard implementation pattern. Instead of bespoke integration work per client, onX gives you a repeatable blueprint you can productize.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🧩</div><h4>A repeatable pattern</h4><p>One well-defined contract to implement across clients — estimable scopes, predictable delivery.</p></div><div class="card"><div class="cico">📈</div><h4>A new service line</h4><p>onX assessments, activations, and migrations become packaged offerings with clear deliverables.</p></div><div class="card"><div class="cico">🤝</div><h4>A trusted credential</h4><p>Certification signals to brands and vendors that you can execute onX rollouts reliably.</p></div></div>
  </section>
  <section class="qblock wrap" id="s-why"><div class="qhead"><div class="qn">02</div><div><h2>Why do you need it?</h2><p class="qlede">Because a wave of activation is forming, and the integrators who are ready will capture the implementation demand the standard creates.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🌊</div><h4>Ride the activation wave</h4><p>As brands push vendors to enable onX, someone has to integrate, test, and operationalize it.</p></div><div class="card"><div class="cico">💼</div><h4>Higher-margin work</h4><p>Standardized scopes mean less discovery, faster delivery, and better margins than custom integration.</p></div><div class="card"><div class="cico">⭐</div><h4>Referral flow</h4><p>Certified partners get surfaced to brands seeking implementation help directly from the Foundation.</p></div></div>
  </section>
  <section class="qblock wrap" id="s-how" style="border-bottom:none"><div class="qhead"><div class="qn">03</div><div><h2>How do you get started?</h2><p class="qlede">Build the capability, prove it, then get listed as a go-to onX partner.</p></div></div>
    <div class="steps"><div class="step"><div class="sn"></div><div><h4>Skill up your team</h4><p>Get your architects through the onX technical docs and reference implementation.</p><a class="scta" href="${GH}" target="_blank" rel="noopener">Open the docs &amp; repo ↗</a></div></div><div class="step"><div class="sn"></div><div><h4>Run a reference implementation</h4><p>Deliver an onX activation with a willing client or vendor partner to build a proof point.</p></div></div><div class="step"><div class="sn"></div><div><h4>Productize your offering</h4><p>Package assessment, activation, and migration into named services with fixed scopes.</p></div></div><div class="step"><div class="sn"></div><div><h4>Get certified</h4><p>Validate your capability with the Foundation and earn the certified implementation partner credential.</p><a class="scta" href="/membership#join">Apply for certification →</a></div></div><div class="step"><div class="sn"></div><div><h4>Get referred</h4><p>Certified partners are surfaced to brands in the activation flow — inbound demand, not cold outreach.</p></div></div></div>
  </section>
  <section class="section wrap"><div class="band"><div class="bglow" data-par="0.3" style="background:var(--amber)"></div><h2>Be the partner the activation wave runs through.</h2><p>Certified onX integrators don't chase the work. The work comes to them.</p><div class="btn-row"><a class="btn btn-primary" href="/membership#join">Become a certified partner</a><a class="btn btn-ghost" href="/insights">Read the Systems Integrator playbook</a></div></div></section>
</div>`
});

/* ============================ INSIGHTS ============================ */
page({
  file:'insights.html', path:'/insights', active:'insights',
  title:'Insights — Commerce Operations Foundation',
  desc:'Three running series turning the onX standard into action: Brand Activation, Vendor Engineering, the Integrator Playbook, and the Big Picture.',
  body:`
<div style="--accent:var(--violet)">
  <section class="blog-hero"><div class="wrap"><div class="crumbs"><a href="/">Home</a><span>/</span>Insights</div><div class="eyebrow" style="--accent:var(--violet)">Insights</div><h2 style="font-size:clamp(32px,4.6vw,52px)">Three series. One mission:<br>turn the standard into action.</h2>
    <div class="track-filter" id="trackFilter"><div class="tf active" data-track="all" onclick="filterPosts('all',this)">All insights</div><div class="tf" data-track="brand" onclick="filterPosts('brand',this)">Brand Activation</div><div class="tf" data-track="tech" onclick="filterPosts('tech',this)">Vendor Engineering</div><div class="tf" data-track="si" onclick="filterPosts('si',this)">Integrator Playbook</div><div class="tf" data-track="vision" onclick="filterPosts('vision',this)">The Big Picture</div></div>
  </div></section>
  <div class="wrap"><div class="posts" id="blogPosts">${posts.map(postCard).join('')}</div><p class="center mono" style="color:var(--muted-2);padding-bottom:60px">More onX insights are in development.</p></div>
</div>
<script>
function filterPosts(track,el){document.querySelectorAll('#trackFilter .tf').forEach(t=>t.classList.remove('active'));el.classList.add('active');document.querySelectorAll('#blogPosts .post').forEach(p=>{p.style.display=(track==='all'||p.dataset.track===track)?'flex':'none';});}
</script>`
});

/* ============================ MEMBERSHIP ============================ */
page({
  file:'membership.html', path:'/membership', active:'membership',
  title:'Membership — Commerce Operations Foundation',
  desc:'Join the foundation shaping AI-era commerce. Activate as a brand, build & steer as a vendor, or certify as an integrator.',
  body:`
<div style="--accent:var(--lime);--pg:rgba(159,212,32,.3)">
  <section class="phero"><div class="pglow" data-par="0.4"></div><div class="wrap"><div class="crumbs"><a href="/">Home</a><span>/</span>Membership</div><div class="phero-inner"><h1>Join the foundation shaping<br>AI-era commerce.</h1><p>62+ founding members and $1T+ in GMV are already in. Pick the path that matches how you'll move the standard forward.</p></div></div></section>
  <section class="section wrap"><div class="tier-grid">
    <div class="tier"><div class="tname">Brands &amp; Retailers</div><h3>Activate</h3><p class="tdesc">For merchants pushing their stack to adopt onX.</p><ul><li>Brand activation toolkit</li><li>Rollout support from the Foundation</li><li>Listed as an adopting brand</li><li>Early access to brand playbooks</li></ul><a class="btn btn-primary" href="#join" onclick="setTrack('Brand / Retailer')">Start activating</a></div>
    <div class="tier feature"><div class="tname">Technology Vendors</div><h3>Build &amp; Steer</h3><p class="tdesc">For OMS / WMS / platform vendors implementing onX.</p><ul><li>Seat on the Technical Steering Committee</li><li>Listed as a compliant vendor</li><li>Inbound demand from the activation tool</li><li>Influence over the spec roadmap</li></ul><a class="btn btn-primary" href="#join" onclick="setTrack('Technology Vendor')">Join the TSC</a></div>
    <div class="tier"><div class="tname">Systems Integrators</div><h3>Certify</h3><p class="tdesc">For Systems Integrators building an onX delivery practice.</p><ul><li>Certified implementation partner status</li><li>Referral flow from brands</li><li>Implementation enablement &amp; toolkits</li><li>Co-marketing with the Foundation</li></ul><a class="btn btn-primary" href="#join" onclick="setTrack('Systems Integrator')">Get certified</a></div>
  </div>
  <section class="qblock" id="join" style="border-bottom:none;padding-top:64px"><div class="qhead"><div class="qn">→</div><div><h2>Tell us where you fit.</h2><p class="qlede">One short form. It reaches the COF/onX team directly and we'll point you to the fastest path in.</p></div></div>
    <div class="tool" style="--accent:var(--lime)">
      <form name="onx-membership" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="memberForm">
        <div id="memberFormInner">
          <input type="hidden" name="form-name" value="onx-membership">
          <p class="honey"><label>Don't fill this in: <input name="bot-field"></label></p>
          <div class="form-grid">
            <div class="field"><label for="m-track">I'm a…</label><select id="m-track" name="track"><option>Brand / Retailer</option><option>Technology Vendor</option><option>Systems Integrator</option><option>Something else</option></select></div>
            <div class="field"><label for="m-name">Your name</label><input id="m-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="m-email">Work email</label><input id="m-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="m-company">Company</label><input id="m-company" name="company" required autocomplete="organization"></div>
            <div class="field full"><label for="m-msg">Anything you want us to know? <span class="opt">(optional)</span></label><textarea id="m-msg" name="message"></textarea></div>
          </div>
          <div class="check-row"><input type="checkbox" id="m-cc" name="copy_me" value="yes" checked><label for="m-cc">Send me a copy</label></div>
          <div class="tool-foot"><span class="form-note" style="margin:0">We'll reply to the email you provide.</span><button type="submit" class="btn btn-primary">Talk to the Foundation →</button></div>
        </div>
      </form>
      <div class="form-success" id="memberSuccess"><h4>Got it ✓</h4><p>Thanks for reaching out — the COF/onX team will follow up at your email with the right next step.</p></div>
    </div>
  </section>
  </section>
</div>
<script>
function setTrack(t){var s=document.getElementById('m-track');if(s){for(var i=0;i<s.options.length;i++){if(s.options[i].value===t||s.options[i].text===t)s.selectedIndex=i;}}}
(function(){var f=document.getElementById('memberForm');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d).toString()}).then(function(){document.getElementById('memberFormInner').style.display='none';document.getElementById('memberSuccess').classList.add('show');document.getElementById('memberSuccess').scrollIntoView({behavior:'smooth',block:'center'});}).catch(function(){});});})();
</script>`
});

/* ============================ ARTICLES ============================ */
const TRACK_BACK = {brand:'/brands', tech:'/tech', si:'/integrators', vision:'/insights'};
const TRACK_CTA = {
  brand:{href:'/brands',label:'Build your activation packet →'},
  tech:{href:'/tech',label:'Get on the vendor track →'},
  si:{href:'/integrators',label:'Build your onX practice →'},
  vision:{href:'/membership',label:'Join the Foundation →'},
};
const ARTICLE_BODIES = {
  'get-found-or-get-skipped-why-brands-cant-sit-out-agentic-com': `<p>For twenty-five years, "discoverability" meant one thing for a commerce brand: can a human find you? Get indexed by Google, rank on the right search terms, show up in the right marketplace, buy the right ad. The playbook was built entirely around the assumption that a person was doing the looking, the comparing, and the clicking.</p>

  <p>That assumption is starting to break.</p>

  <p>AI agents inside ChatGPT, Perplexity, Google's shopping surfaces, and a growing list of purpose-built shopping assistants are now doing meaningful parts of that work on a shopper's behalf. These agents are comparing options, checking availability, initiating purchases, and increasingly, following up afterward to see if the order actually shipped. When an agent is the one doing the looking, "discoverability" stops being a question of whether your content ranks well and becomes a question of whether your systems can be understood by a machine at all.</p>

  <p>That's a much bigger ask than it sounds like, and most brands aren't set up to answer it.</p>

  <h2>Discoverability didn't used to end at checkout. Now it doesn't get to</h2>

  <p>Most brand teams are being caught off guard in agent-mediated commerce. Discoverability isn't a top-of-funnel problem you solve once and move on from. An agent that helps a customer buy from you today is very likely to be asked, tomorrow, "when is my order arriving," "can I return this item," or "is this product back in stock." If the agent can't get a clean, structured answer from your systems, it doesn't just fail that one query. It learns something about you as a source for purchasing. It learns that you're not yet reliable to transact with in this new modern age. The next time it's asked to compare options for that same shopper, that “this brand isn’t yet ready” information is going to be part of its memory.</p>

  <p>Our industry has known for years that post-purchase experiences are just as important (if not more important) than the buying experience. But it’s often taken the back seat to conversion optimization. However, in this new modern age brands can’t afford to continue ignoring this very important aspect of doing business online. Not because it’s as important as discoverability and conversion.</p>

  <p>In other words, the thing that used to be a purely post-purchase, operational concern (order status, fulfillment accuracy, return handling, etc) is now part of your discoverability surface. A beautifully optimized product feed sitting on top of an order and fulfillment stack that no agent can query is a brand that gets found once and skipped in the future.</p>

  <h2>What "legible to agents" actually means</h2>

  <p>What exactly does it mean to be "legible to agents"? That word, “Legible” is doing a lot of work in that sentence. It doesn't mean simply having an API. That’s not enough. Almost every brand's OMS, IMS, or storefront platform already has one. It means having order, inventory, and fulfillment data exposed in a <strong>common, predictable format that any agent can interact with without a brand-specific integration project first</strong>.</p>

  <p>The current default in the industry is the opposite of legible. Every brand's order status endpoint looks a little different, uses different field names, returns different values for the same underlying state, and requires its own custom mapping to work with any given AI system. That's fine when a human developer is writing a one-time integration. It's not fine when the "integrator" is an AI agent trying to serve a shopper in real time across thousands of brands it has never seen before. Agents have the power and understanding to build a temporary bespoke integration with the solution, but there are a lot of assumptions in expecting an agent to do that level of work. Agents don't have the patience and they don’t perceive the ROI to build such an integration for every retailer they might need to talk to. Instead, they are going to route to, recommend, and re-engage with the brands they can already understand. That just makes common sense.</p>

  <p>But what does that mean for you? It means that if agents find your brand easily and find you work with, you are going to be one of the brands that the agents give the most attention to.</p>

  <h2>What’s the alternative? Getting skipped over?</h2>

  <p>Yes. Essentially you’ll get skipped over. The thing is, getting skipped over rarely shows up as a dramatic failure. It’s not a metric you’re going to track. Instead, it’ll show up as quiet omission:</p>

  <ul>
    <li>An agent asked to compare where a product is in stock and ready to ship. Your site doesn't surface because it can't get a reliable inventory answer fast enough from you.</li>
    <li>A customer asks their assistant to track a package and the agent has to tell them "I can't check that. You'll need to visit the site directly or contact the brand," which is a worse experience than the agent simply not existing.</li>
    <li>When a shopper's agent is deciding where to route a repeat purchase between two functionally similar brands it will pick the one it already knows it can transact with cleanly.</li>
  </ul>

  <p>None of these are outages. They're a brand slowly becoming invisible to the layer of software that's increasing in popularity. This lack of an information layer is standing between your brand and the customer’s agent. Meaning, it’s blocking you from the customer.</p>

  <p>Today, you not only need to think about the user experience.</p>

  <p><strong>You must think about the agent experience.</strong></p>

  <h2>Why this is a standards problem, not a brand-by-brand one</h2>

  <p>The instinct here is often to solve this the way brands have always solved integration problems: hire developers, build a custom connector for whichever AI platform matters most this quarter, repeat as new platforms emerge. If you are thinking about this new world using “old world” patterns, that’s exactly what you’re planning to do. But, that's a trap. It recreates, for the agentic era, the same brittle point-to-point integration sprawl that commerce has been trying to escape for decades. A new bespoke build for every agent, every platform, every partner, with none of it reusable and all of it fragile the moment any party changes their API. You do not want to live like this!</p>

  <p>This is the same problem EDI solved for B2B commerce forty years ago. Instead of every trading partner building custom integrations with every other trading partner, everyone conforms to one shared format and gets interoperability for free.</p>

  <p>onX (Order Network eXchange) is a very similar idea applied to agentic commerce. It’s an open, vendor-neutral standard, built on the Model Context Protocol (MCP), that gives selling channels, fulfillment systems, and AI agents a common language for order and fulfillment data. A brand whose OMS or IMS vendor conforms to onX isn't legible to one agent. It's legible to <strong><em>any agent built to understand the standard</em></strong>, without a project plan attached.</p>

  <p>That's the practical difference between "get found" and "get skipped". Not “who has the best product content?” but “whose backend can actually answer an agent's question when it's asked?”</p>

  <h2>So, what do you do about it?</h2>

  <p>You don't need to become a protocol expert to act on this, and you shouldn't wait until an AI platform's shopping feature is driving meaningful revenue to start caring. The useful first move is a conversation. Ask your OMS, IMS, or fulfillment vendor whether onX conformance is on their roadmap. Treat the answer as a real evaluation criterion the way you'd treat any other integration capability. Because onX is open and vendor-neutral (not owned or controlled by any single platform) supporting it doesn't lock you into anyone's roadmap but your own. This is the kind of infrastructure decision that pays off regardless of which AI shopping surfaces end up mattering most.</p>

  <p>Remember — The brands that get found in agentic commerce won't necessarily be the ones with the flashiest product pages. They'll be the ones who have systems an agent can actually understand reliably, consistently and without a custom integration standing in the way.</p>

  <p>That's a decision worth making before the agents start deciding it for you.</p>`,
  'the-20-minute-internal-memo-that-gets-onx-on-your-roadmap': `<p>You don't need a slide deck to get onX on your company's radar. You need one memo, sent to the two people who actually control whether your ops stack changes: whoever owns fulfillment operations and whoever signs off on vendor spend. Most of these conversations stall not because the case is weak, but because nobody wrote it down in a way that a busy VP could read and easily understand why onX is important, in the time it takes to get coffee.</p>

  <p>Below is that memo. Copy it. Fill in your specifics. Then send it.</p>

  <p>The goal isn't to get a "yes" on the spot. It's to get onX conformance added as a line item the next time you're evaluating your OMS, IMS, or fulfillment vendor, which is a much smaller ask and a much easier one to grant.</p>

  <h2>The template</h2>

  <div class="memo-template">
    <p><strong>To:</strong> [VP of Operations], [CFO]<br>
    <strong>From:</strong> [Your name]<br>
    <strong>Subject:</strong> Adding onX to our next vendor evaluation</p>

    <p><strong>TL;DR:</strong> AI agents are starting to shop, track orders, and handle post-purchase questions on behalf of our customers. Right now, agents can only do that well when the brand’s order and fulfillment systems speak a common, standardized language. <strong>onX is that standard</strong>: it’s open source, vendor-neutral and it’s governed by a foundation rather than any single company. I'd like us to ask [CURRENT OR PROSPECTIVE OMS/IMS/FULFILLMENT VENDOR] whether they support it and/or intend to support it in the near future. And, I recommend we treat the answer as evaluation criteria.</p>

    <p><strong>Why now</strong></p>

    <p>AI shopping assistants are increasingly initiating purchases and answering "where's my order" questions without a human ever opening our website. When the agent can't get a reliable answer from our systems, they don't just fail. They learn that we're a source they can't rely on, which affects whether we get recommended or re-engaged the next time. This is starting to matter the way search visibility mattered fifteen years ago, and the systems that make us legible to agents are the operational ones, not the marketing ones.</p>

    <p><strong>What we're asking for</strong></p>

    <p>Not a build. Not a budget line (at least not yet). Simply a question to add to our next conversation with [VENDOR NAME] or any vendor we evaluate going forward: "Do you support onX?" If the answer is yes, we get this largely for free through infrastructure we already pay for. If the answer is no, we now know it, and can factor it into the decision the way we'd factor in any other integration gap.</p>

    <p><strong>What this doesn't require</strong></p>

    <ul>
      <li>No new vendor relationship or platform switch</li>
      <li>No dedicated engineering sprint on our side</li>
      <li>No lock-in: onX is an open standard overseen by the Commerce Operations Foundation, not owned by any single vendor or AI platform, so supporting it doesn't tie us to anyone's roadmap but our own</li>
    </ul>

    <p><strong>The risk of doing nothing</strong></p>

    <p>Every quarter we don't ask this question is a quarter our competitors might. Vendors are more likely to prioritize a capability when multiple customers are asking for it, and being early to ask costs us nothing. Being late means catching up on infrastructure that our peers already have in place.</p>

    <p><strong>Next step</strong></p>

    <p>I'd like ten minutes to walk through this before our next call with [VENDOR NAME], or to add it to the agenda for our next quarterly vendor review.</p>
  </div>

  <h2>A few notes on using it</h2>

  <p>Send this to both people at once if you can. The VP of Ops needs the operational framing, the CFO needs to see there's no ask for new spend attached, and neither of them wants to be the one who has to translate the memo for the other. Keeping it together also keeps you from getting a "sounds good, check with Finance" reply that quietly ends the conversation.</p>

  <p>Resist the urge to pad it out with more technical detail than the memo above already has. The people you're sending this to don't need to understand MCP tools or JSON schemas to approve the ask, and adding that detail is more likely to make the memo look like a bigger project than it is. Save the technical depth for the conversation with your OMS or IMS vendor once you've got the green light to have it. That's a different conversation, for a different audience, and we've got a separate post in this series built for exactly that one.</p>

  <p>The honest version of this pitch is that you're not asking your company to build anything. You're asking it to ask a question the next time it's already at the table with a vendor. That's a small enough ask that there's rarely a good reason to say no to it, and it's the kind of low-cost, high-optionality move that tends to look smart in hindsight once agentic commerce stops being a trend and starts being how a meaningful share of your customers actually shop.</p>`,
  'how-to-ask-your-oms-vendor-for-onx-and-what-yes-looks-like': `<p>If the memo did its job, you've got permission to have this conversation. That's the easy part. The harder part is that most vendors, when asked "do you support onX?" will say yes to something. The question is whether it's the same thing you mean.</p>

  <p>There's no badge to look for here, no certification logo you can ask a vendor to point to on their website. onX doesn't have a formal certification program yet, which sounds like a gap but is actually the reason this conversation matters more than it would for a standard with a tidy checkbox. Real conformance right now comes down to whether a vendor has actually built against the open spec and the open reference server, or whether they've built a proprietary layer they're calling "onX-compatible." Those two things can sound identical in a sales call and mean completely different things for you six months from now.</p>

  <h2>Opening the conversation</h2>

  <p>You don't need to lead with jargon. Something like this works:</p>

  <blockquote>"We're evaluating our order and fulfillment stack against onX, the open standard for exposing order data to AI agents. It's built on the Model Context Protocol and governed by the Commerce Operations Foundation. It’s not owned by any single vendor. Where does that sit on your roadmap, and can you walk me through what you currently support?"</blockquote>

  <p>That framing does two things. It signals you know enough to ask a real follow-up question, and it puts "vendor-neutral, open governance" on the table before they've had a chance to pitch you a proprietary alternative dressed up in similar language.</p>

  <h2>The questions that actually tell you something</h2>

  <p>A vague "yes, we support that" isn't an answer. Instead, go deeper, here are questions that will help you get a real answer.</p>

  <p><strong>"Which of the standard tools do you support?"</strong></p>

  <p>onX defines a specific, shared set of operations covering order creation and updates, cancellation, fulfillment, and returns, plus queries for orders, customers, products, inventory, and fulfillment status. A vendor who's actually implemented this can name what they've covered. A vendor who can't get more specific than "yes, orders and fulfillment" probably has a partial build, which matters because an agent that can query your order status but can't process a return is only half legible.</p>

  <p><strong>"Did you build this against the public reference server, or is this your own implementation?"</strong></p>

  <p>The reference implementation and the spec are both public. A vendor building toward them is building something you or anyone else can independently check. A vendor who says "we built our own onX-compatible layer" is often describing exactly the kind of custom, single-purpose integration onX exists to replace, just with the standard's name attached to it for marketing purposes.</p>

  <p><strong>"Are you involved with the Technical Steering Committee, or do you track its updates?"</strong></p>

  <p>The spec is still evolving, with real people deciding what changes next. A vendor with no connection to that process is a vendor whose "support" can quietly drift out of date the next time the standard moves. This doesn't have to mean a seat on the committee. It just needs to mean they're watching.</p>

  <p><strong>"Can we get this in writing, with a date?"</strong></p>

  <p>Roadmap items that live only in a sales call tend to stay there. Ask for it in the SOW or contract renewal, even as a single line.</p>

  <h2>What a real yes sounds like</h2>

  <p>A vendor who's actually there will answer in specifics without you having to pull them out. They'll name which tools and resources they cover, and be upfront about the ones they don't yet. They'll point you to something public, whether that's their own documentation referencing the spec or a demo you can inspect, rather than asking you to take their word for it. They'll have an actual date attached to any gaps, not "on the roadmap" with nothing behind it. And they won't seem thrown by the question, because a vendor who's serious about this has fielded it before.</p>

  <h2>Red flags worth pausing on</h2>

  <ul>
    <li>Watch for the vendor who answers "yes" immediately and then can't go one layer deeper.</li>
    <li>Watch for "we have our own commerce AI integration that does something similar," which is usually a polite way of saying no while sounding like a yes.</li>
    <li>Watch for enthusiasm about the idea paired with nothing concrete when you ask what's actually shipped today.</li>
    <li>And watch for a vendor who frames this as something only relevant to a future release, months or quarters out, with no interim plan for how you'd get partial support in the meantime.</li>
  </ul>

  <p>None of these are disqualifying on their own. A vendor early in their onX build who's honest about it is a better partner than one that is overselling. What you're really listening for is whether they understand the difference between those two things. The vendor who doesn't understand the difference will end up building you the wrong solution.</p>

  <h2>After the conversation</h2>

  <p>If you get a real yes, or a real "not yet, but here's the date," you've done what this conversation needed to do. The next step from here moves out of your hands and into your vendor's technical team, who'll be the ones actually mapping their APIs to the standard. If it's useful, you can point them to the next post in this series, written for exactly that audience. Your job was never to build this. It was to make sure the right question got asked before the contract got signed, and now it has.</p>`,
  'mapping-your-existing-apis-to-the-14-onx-mcp-tools': `<p>Mapping your system to onX is not a rewrite. Almost everything the spec asks for already exists somewhere in your data model. The work is figuring out where it lives, what shape it needs to change into, and which of your internal assumptions don't survive contact with a schema someone else designed. That last part is where teams actually lose time, more than the mechanical work of writing adapter code, so it's worth walking through tool by tool rather than treating this as one undifferentiated integration project.</p>

  <p>Start with your data, not your endpoints. Before touching any tool signature, inventory your core objects: order, customer, product, variant, inventory record, fulfillment, return. Most legacy APIs don't draw these boundaries the same way the spec does, and finding that out early is cheaper than finding it out mid-build.</p>

  <h2>The query tools</h2>

  <p>These come first for a reason. Reading your own data out correctly surfaces every mismatch between your model and the spec's while it's still cheap to fix.</p>

  <p><strong>get-orders.</strong> Usually the most straightforward of the seven, and also where a subtle gap tends to hide. Your order status values almost certainly don't map one-to-one onto the spec's expected states. Systems that split order data across a header table and a separate line-item service will also need to do real work reassembling a single coherent order object here rather than just passing through what already exists.</p>

  <p><strong>get-customers.</strong> The recurring gap is identity, not schema. Guest checkouts, loyalty accounts, and cross-channel customer records rarely resolve to one clean customer object in most commerce systems, and deciding how to represent an unauthenticated or one-time buyer is a product decision as much as an engineering one.</p>

  <p><strong>get-products</strong> and <strong>get-product-variants.</strong> The spec treats these as two distinct concepts, product and variant, and a lot of legacy catalogs conflate them, storing variant-level data as flags or attributes on a single product record instead of as its own object. Untangling that split is usually the biggest lift in this pair, more than the API work itself.</p>

  <p><strong>get-inventory.</strong> The perennial mismatch here is which inventory you mean. On-hand, available-to-promise, and reserved are three different numbers, and many systems only expose one of them cleanly through their existing API. If your inventory is split across multiple warehouses or fulfillment locations, this tool also usually needs aggregation logic that doesn't already exist as a single query, since most internal systems were never asked to answer "how many do we have, everywhere, right now" as one clean question.</p>

  <p><strong>get-fulfillments.</strong> This is the tool most likely to expose an integration gap rather than just a mapping one. Carrier and tracking data frequently lives in a transportation management system or a 3PL's own portal, not your OMS, which means this tool sometimes requires connecting a system you don't currently have wired to your API layer at all, not just reshaping data you already expose.</p>

  <p><strong>get-returns.</strong> Return status and reason taxonomies tend to be more bespoke per retailer than almost anything else in the order lifecycle. Expect to spend real time deciding how your internal reason codes collapse into the spec's shape without losing information your operations team actually relies on.</p>

  <h2>The action tools</h2>

  <p>These go faster once the query side is solid, because by then you've already done the hard thinking about how your domain model lines up with the standard one.</p>

  <p><strong>create-sales-order.</strong> The gap here is usually validation, not schema: address verification, payment authorization, fraud checks. A checkout flow handles these interactively with a human on the other end. An agent calling this tool synchronously needs a clear answer for what happens when one of those checks needs more time or fails partway through, and that's an architecture decision your team needs to make deliberately rather than backing into.</p>

  <p><strong>update-order.</strong> The real question is what your system considers mutable after an order is placed. Many platforms lock down wide parts of an order once it's created, and reconciling that against what the spec allows an agent to update is worth resolving explicitly rather than discovering by accident.</p>

  <p><strong>cancel-order.</strong> Full cancellations are simple. Partial cancellations and cancellations requested mid-fulfillment are where the actual complexity lives, and they show up in nearly every implementation regardless of how mature the underlying OMS is.</p>

  <p><strong>fulfill-order.</strong> This one is often an architecture decision disguised as an API mapping task. Wiring it to real-time carrier and warehouse events, rather than having an agent poll for status, is usually the right call, and it's worth deciding that upfront instead of retrofitting it later.</p>

  <p><strong>create-return.</strong> The spec defines the shape of a return request and response. It doesn't decide your eligibility rules, so return windows, restocking fees, and final-sale exclusions all need to live somewhere in your implementation, expressed as logic the tool can actually enforce rather than left as a policy page nobody's code reads.</p>

  <h2>The pattern underneath all twelve</h2>

  <p>Almost every gap above has the same shape. Your system usually has more data than the spec asks for, which is fine and expected. The friction comes from that data being organized differently: split across services where the spec expects one object, or combined into one record where the spec expects two. That's not a sign anything is wrong with your system. It's just the actual work of mapping, and it's worth treating each tool as its own small design exercise rather than assuming the twelfth one will go as smoothly as the first.</p>

  <p>Once you think you've got a tool mapped correctly, don't just review it against the documentation. Run it against the reference server's test suite and see what breaks. Document review tells you what you meant to build. The tests tell you what you actually built, and those two things diverge more often than anyone expects going in.</p>`,
  'from-clone-to-conformant-in-a-sprint-using-the-reference-ser': `<p>"Conformant in a sprint" sounds like the kind of claim that gets walked back the first time someone actually tries it. It holds up here for a boring reason: the reference server already does most of the work that would normally eat your first two weeks of effort. You're not implementing the Model Context Protocol layer, you're not designing a schema for orders and fulfillments from scratch, and you're not guessing at what an AI agent expects back from a query tool. All of that already exists and already runs. It’s done for you.</p>

  <p>What's left is the part that's actually yours: mapping your system's data onto it.</p>

  <p>That's a smaller job than most teams assume going in, which is the whole reason the timeline holds.</p>

  <h2>What you're actually starting from</h2>

  <p>Clone the reference server and you get a working MCP server out of the box, backed by a mock adapter so you can run it and see traffic flow through all 12 tools before you've written a line of your own code.</p>

  <pre><code>git clone https://github.com/commerce-operations-foundation/mcp-reference-server.git
cd mcp-reference-server/server
npm install
cp .env.example .env
npm run build
npm start</code></pre>

  <p>That gets you a server answering the standard onX tool set: five action tools that write (<code>create-sales-order</code>, <code>update-order</code>, <code>cancel-order</code>, <code>fulfill-order</code>, <code>create-return</code>) and seven query tools that read (<code>get-orders</code>, <code>get-customers</code>, <code>get-products</code>, <code>get-product-variants</code>, <code>get-inventory</code>, <code>get-fulfillments</code>, <code>get-returns</code>).</p>

  <p>Point an MCP client at it and it behaves like a real onX endpoint, because it is one. It just happens to be talking to a mock backend instead of your back-end.</p>

  <p>The adapter is where your actual work starts, and the repo hands you a starting point for that too.</p>

  <pre><code>cp -r adapter-template your-fulfillment-adapter
cd your-fulfillment-adapter
npm install
npm run dev</code></pre>

  <p>From here the job is translation, not invention. Each of those 12 tools has a defined shape it expects in and a defined shape it returns. Your adapter's job is to take that call, turn it into whatever your OMS or IMS actually does under the hood, and shape the response back into the standard schema. You're not deciding what an order object looks like. That decision's already made. You're deciding how your order object becomes that one.</p>

  <h2>Where the sprint actually goes</h2>

  <p>Start with the query tools before the action tools, even though the action tools tend to feel more urgent. Reading your own data out in the right shape surfaces every awkward mismatch between your internal model and the standard one, and it's a much cheaper place to find those mismatches than in the middle of implementing <code>create-sales-order</code> and discovering your order states don't map cleanly onto what the spec expects.</p>

  <ul>
    <li>Most teams find <code>get-products</code> and <code>get-inventory</code> straightforward, since those tend to be close to whatever their existing API already exposes.</li>
    <li><code>get-fulfillments</code> and <code>get-returns</code> are usually where the real modeling work shows up. Fulfillment and return states vary more from system to system than order states do, and getting the mapping right matters more here than anywhere else in the surface. This is the exact data an agent needs to answer a shopper's "where's my order" question honestly. Give this attention to ensure shoppers are getting accurate responses.</li>
  </ul>

  <p>The action tools go faster once the query side is solid, mostly because you've already done the hard thinking about how your domain model lines up with the standard one.</p>

  <ul>
    <li><code>create-sales-order</code> and <code>update-order</code> are usually a matter of routing into whatever create/update logic you already have.</li>
    <li><code>cancel-order</code> and <code>create-return</code> are where edge cases live: partial cancellations, partial returns, orders that are mid-fulfillment when a cancellation request comes in. Budget real time for those, not because the tool interface is complicated, but because your own business logic around them probably has more branches than you remember until you're staring at all of them at once.</li>
  </ul>

  <p>None of this requires new infrastructure. It requires sitting down with your existing order and fulfillment logic and writing the translation layer between it and a schema someone else already designed well.</p>

  <h2>Testing as you go, not at the end</h2>

  <p>The repo ships with test tooling at every level, and the teams that move fastest through this use it continuously instead of saving it for the end.</p>

  <pre><code>npm test
npm run test:unit
npm run test:integration
npm run test:coverage</code></pre>

  <p>Run these against your adapter as you build each tool, not after you've built all twelve. Catching a schema mismatch on <code>get-fulfillments</code> the day you write it costs you an hour. Catching the same mismatch after you've built the other eleven tools on top of an assumption that turned out to be wrong costs you a lot more than an hour, and it tends to show up right when you thought you were done.</p>

  <p>This also happens to be the answer to a question brands are increasingly asking their vendors directly: not "do you support onX," but "can you show me how onX works with your solution." A build that ran against this test suite and this reference implementation is a very different claim than a proprietary layer that says the right words on a spec sheet. If your sales team is fielding that question already, this is the paper trail that backs up a real “yes” instead of a hopeful one.</p>

  <h2>After conformance</h2>

  <p>Standing up a compliant endpoint is the technical milestone. It's worth pairing with the non-technical one: getting someone on your team connected to the Commerce Operations Foundation Technical Steering Committee, or at least tracking its updates. The spec isn't frozen, and the adapter you ship this sprint should be built with the expectation that it'll need small updates as the standard evolves, the same way any API client needs occasional maintenance against a service that's still actively developed. Teams that treat this as a one-time build tend to be the ones surprised by a schema change eighteen months from now. Teams that treat it as an ongoing relationship with the standard aren't.</p>

  <p>Either way, the hard part isn't the sprint. It's remembering that a sprint was ever all it took.</p>

  <h2>Sources</h2>

  <ul class="article-sources">
    <li><a href="https://github.com/commerce-operations-foundation/mcp-reference-server" target="_blank" rel="noopener">commerce-operations-foundation/mcp-reference-server</a> — setup commands, adapter template workflow, full tool list, test scripts, and environment configuration</li>
  </ul>`,
  'foundation-launch-a-new-era-for-commerce-operations': `<p>On November 18, 2025, the Commerce Operations Foundation introduced Order Network eXchange (onX) to the world, backed at launch by 62 vendors and brands representing more than a trillion dollars in annual gross merchandise value moving through their combined systems. That's an unusual way for a technical standard to arrive. Most specifications start small and quiet. Built by a handful of engineers solving their own problem, and typically a new standard will only pick up broader backing once the idea has already proven itself somewhere.</p>

  <p>However, onX started with a (virtual) room full of people who often compete with each other. The group agreed that this particular problem was bigger than any one of them, and that solving it alone wasn't actually an option. Additionally, we all agreed that solving this challenge would position the industry well, ultimately helping our customers and their customers have a better post-purchase experience with those utilizing onX. That win was very important to everyone and we’ve been working together ever since.</p>

  <p>The problem is a simple one to state and a hard one to ignore. Especially as AI has made buying effortless, as Kelly Goetsch, the foundation's founding president and president of Pipe17, explained it during the launch. Now we need to make fulfillment intelligent. An AI agent can already help someone choose and purchase a product in seconds through their favorite LLM. What happens after that purchase — whether the order gets confirmed accurately, whether the agent can answer "where is it now?" honestly, whether a return actually gets processed — all these questions are still answered via infrastructure that was never built with an AI agent as a caller.</p>

  <p>Here is a good way to think about the problem. Every vendor helping merchants sell and fulfill goods uses the same terminology: orders, products, shipments, returns, etc. However, every brand's fulfillment stack has an API that speaks in its own dialect. Every integration between selling channel and fulfillment system is unique (or even custom-built). And frequently a merchant will have 2, 3, 6 or even 10 different systems connected together to support their processes from posting and selling products through last mile delivery. If those systems do not inherently “understand” each other, none of that scales to an agentic world.</p>

  <p>As users become more acquainted with the speed of agents getting to and answering tough questions, the involved parties will need to ask order-related questions that are often answered by not just one, but various systems. And users will expect to receive answers very rapidly. For this to be possible all these systems and their associated agents will be required to “speak” the same language. In the same dialect. A standard amongst all the systems and their agents.</p>

  <h2>Who actually showed up</h2>

  <p>What's notable about the founding roster isn't just its size. It's its shape. The vendors and brands who backed onX at launch span nearly every seat at the table this problem actually touches: inventory management, order management and fulfillment platforms like Manhattan Associates, IBM Sterling, Cin7 and SPS Commerce; logistics and fulfillment operators like Radial, Ryder, and Barrett Distribution; commerce platforms including commercetools and Commerce (the parent of BigCommerce and Feedonomics); EDI integration platforms such as CRSTL and OsaCommerce; and brands themselves, among them Allbirds, Logitech, VitaminShoppe and Ipsy, who have as much at stake in getting this right as anyone building the plumbing underneath them.</p>

  <p>That breadth wasn't incidental. A standard built by fulfillment vendors alone risks solving the problem in a way that's convenient for fulfillment vendors and awkward for everyone downstream of them. One built only by brands risks the opposite, a wish list with no realistic path to implementation. Getting all of these seats filled at launch, rather than adding them one at a time after the fact, was the foundation's first real test of whether "vendor-neutral" was a genuine design principle or just a phrase in the mission statement. The roster at launch is the evidence that it held.</p>

  <p>The people speaking for that roster made the stakes plain from day one. Sudhir Balebail, IBM's program director for OMS product management, framed it as giving commerce systems a shared language for agentic AI. Tom Schmitt, CEO of Radial, put the emphasis on the second half of the transaction that AI hasn't fixed yet: AI is transforming how orders start, but fulfillment is what delivers on that promise. And Sanjeev Siotia, Manhattan Associates' CTO, tied it back to the practical outcome all of this is actually for, that aligning merchants, logistics providers, and fulfillment leaders around a shared framework helps commerce move faster for everyone building on top of it.</p>

  <h2>Why a foundation, and not a product</h2>

  <p>Because the onX standard solution was structured by the Commerce Operations Foundation (COF), rather than being shipped as any single company's product, we feel confident in the persistence of the solution.</p>

  <p>A specification owned by one vendor changes on that vendor's timeline, for that vendor's reasons, and everyone else building against it is one strategic pivot away from a broken integration. A foundation with a board drawn from across the ecosystem, working groups organized by who's actually affected by a given change, and a public, versioned process for deciding what happens next doesn't have that failure mode built into it. It has other challenges instead, mainly the slower pace that comes with needing real consensus rather than one executive's sign-off, but it's the structure that gives a standard a chance to still matter in ten years rather than only in the press cycle around its launch.</p>

  <p>That's also why the founding member count matters more than it might first appear to. Sixty-two organizations agreeing to build toward the same specification, with governance seats and working group tracks split across brands, third-party logistics providers, and platforms, is a genuinely different starting position than a spec with a handful of contributors and a hope that adoption follows. The trillion dollars in GMV behind that roster isn't a vanity statistic. It's a rough measure of how much real commerce infrastructure already has a reason to keep this standard alive.</p>

  <h2>What comes next</h2>

  <p>The spec itself is now public and versioned, with a reference server anyone can build an adapter against rather than reverse-engineer from documentation alone. The governance process that decides what changes next runs in the open, through working groups organized around who's actually affected by a given decision. And the path-in looks different depending on where you sit: brands are starting to ask their vendors the right questions before their next contract renewal, vendors are mapping their existing systems against the standard tool set, and systems integrators are turning the implementation work into a real, repeatable practice rather than one-off consulting engagements. Each of those threads has its own deeper coverage elsewhere in this series, and each one is evidence of the same thing, that the work of actually building this out has already started rather than waiting for permission.</p>

  <p>Standards like this one tend to get written about twice. Once at launch, when everything is still a promise and a founding roster, and again decades later, when someone explains to a newer generation of engineers that the infrastructure they've never thought twice about had an origin story at all. Most people only get to read the second version. This is the first one, written while the outcome is still being decided by the people choosing to show up and do the work, which is, in the end, the only way any standard like this has ever actually succeeded.</p>`,
};
const PLACEHOLDER_ARTICLE_BODY = `<div class="placeholder-note">📝 Placeholder article — a sample template showing how a published onX insight would read. Real copy to be written by the COF team.</div>
  <p>This is sample body text demonstrating the article layout, typography, and reading experience. A finished piece would open with the stakes, ground them in a concrete scenario, and walk the reader toward a clear next action.</p>
  <h2>The shift is already underway</h2>
  <p>Sample paragraph. The published version would establish why agent-mediated commerce changes the stakes for this audience, with data points and member examples woven in.</p>
  <blockquote>"AI has made buying effortless. Now we need to make fulfillment intelligent."</blockquote>
  <p>Sample paragraph connecting the thesis back to the practical path: who to talk to, what to ask for, and how onX removes the friction.</p>
  <h2>What to do this quarter</h2>
  <p>Sample closing section pointing the reader to the relevant next step — every article ends by routing back into the right persona flow.</p>`;
fs.mkdirSync(path.join(ROOT,'insights'),{recursive:true});
function formatPublicationDate(date){
  return new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z'));
}
posts.forEach(p=>{
  const cta=TRACK_CTA[p.track];
  const articleBody=ARTICLE_BODIES[p.slug] || PLACEHOLDER_ARTICLE_BODY;
  const byline=p.published ? `
  <div class="abyline"><time datetime="${p.published}">${formatPublicationDate(p.published)}</time></div>` : '';
  page({
    file:path.join('insights',p.slug+'.html'),
    path:'/insights/'+p.slug, active:'insights',
    title:p.title+' — onX Insights',
    articleTitle:p.title,
    desc:p.excerpt,
    type:'article',
    published:p.published,
    modified:p.modified || p.published,
    section:p.label,
    body:`
<div class="wrap"><article class="article">
  <div class="crumbs" style="margin-bottom:30px"><a href="/">Home</a><span>/</span><a href="/insights">Insights</a><span>/</span>${p.label}</div>
  <div class="atrack" style="color:${p.c}">${p.label.toUpperCase()} SERIES</div>
  <h1>${p.title}</h1>${byline}
  <p class="lead">${p.excerpt}</p>
  ${articleBody}
  <div class="btn-row" style="justify-content:flex-start;margin-top:30px"><a class="btn btn-primary" href="${cta.href}">${cta.label}</a><a class="btn btn-ghost" style="border-color:var(--line-strong)" href="/insights">← All insights</a></div>
</article></div>`
  });
});

/* ============================ 404 ============================ */
page({
  file:'404.html', path:'/404', active:'',
  title:'Page not found — onX',
  desc:'The page you were looking for could not be found.',
  body:`
<section class="phero" style="--accent:var(--lime)"><div class="wrap"><div class="phero-inner" style="text-align:center;margin:0 auto">
  <div class="ptag" style="margin-left:auto;margin-right:auto">Error 404</div>
  <h1>This page took a wrong turn.</h1>
  <p style="margin:0 auto">The page you're after doesn't exist — but the standard does. Head back and pick your path.</p>
  <div class="btn-row" style="margin-top:32px"><a class="btn btn-primary" href="/">Back to home</a><a class="btn btn-ghost" href="/insights">Browse insights</a></div>
</div></div></section>`
});

console.log('\\nBuild complete:', posts.length, 'articles +', 7, 'core pages.');
