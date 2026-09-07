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
  scripts:['<script src="/assets/home.js"></script>'],
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
    <p class="micro mono">Built on the Model Context Protocol &nbsp;·&nbsp; 14 MCP tools &nbsp;·&nbsp; 9 shared resources &nbsp;·&nbsp; Open governance</p>
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
    <div class="stat"><div class="num">14</div><div class="lbl">MCP Tools Defined</div></div>
    <div class="stat"><div class="num">100%</div><div class="lbl">Open &amp; Vendor-Neutral</div></div>
  </div>
  <div class="marquee"><div class="marquee-track" id="mq"></div></div>
</div></div>

<section class="section wrap pullquote-wrap" style="--accent:var(--lime);padding-bottom:0">
  <figure class="pullquote">
    <blockquote>&ldquo;Agentic commerce requires real-time order, inventory, fulfillment, and returns information &mdash; capabilities that most legacy commerce systems were not designed to provide. There is a movement in this space, something to watch for, and it&rsquo;s called the onX protocol.&rdquo;</blockquote>
    <figcaption><span class="pq-name">Deepa Shekhar</span><span class="pq-org">Logitech</span></figcaption>
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
        <span class="ox-tools mono" id="onxTools">14 MCP tools · 9 resources</span>
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
  <section class="qblock wrap" id="t-what"><div class="qhead"><div class="qn">01</div><div><h2>What is onX, technically?</h2><p class="qlede">An open MCP-based specification — 14 tools and 9 shared resources — defining how order and fulfillment systems expose capabilities to agents and to each other.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🛠️</div><h4>14 MCP tools</h4><p>A defined surface area covering order capture through shipment tracking — the full post-purchase lifecycle.</p></div><div class="card"><div class="cico">📚</div><h4>9 shared resources</h4><p>Common schemas so an order means the same thing across every compliant system.</p></div><div class="card"><div class="cico">🐙</div><h4>Open reference server</h4><p>A public GitHub reference implementation to build and validate against — not a paper standard.</p></div></div>
  </section>
  <section class="qblock wrap" id="t-why"><div class="qhead"><div class="qn">02</div><div><h2>Why do you need it?</h2><p class="qlede">Because brands are about to start asking "are you onX-compliant?" the way they once asked about API availability. The answer is a deal-maker or deal-breaker.</p></div></div>
    <div class="cards"><div class="card"><div class="cico">🎯</div><h4>Demand is coming to you</h4><p>Our Brand Activation flow routes interested brands directly to their vendors. Be ready to say yes.</p></div><div class="card"><div class="cico">🚪</div><h4>Stop building one-offs</h4><p>Implement the contract once instead of maintaining a custom integration per customer and partner.</p></div><div class="card"><div class="cico">🏛️</div><h4>Shape the standard</h4><p>Early implementers sit on the Technical Steering Committee and influence where the spec goes next.</p></div></div>
  </section>
  <section class="qblock wrap" id="t-how"><div class="qhead"><div class="qn">03</div><div><h2>How do you get started?</h2><p class="qlede">A clear path from clone to compliant. Most of your peers are already somewhere on it.</p></div></div>
    <div class="steps"><div class="step"><div class="sn"></div><div><h4>Clone the reference server</h4><p>Pull the public onX MCP reference implementation and run it locally to see the tools and resources in action.</p><a class="scta" href="${GH}" target="_blank" rel="noopener">github.com/commerce-operations-foundation ↗</a></div></div><div class="step"><div class="sn"></div><div><h4>Map your APIs to the 14 tools</h4><p>Align your existing order/fulfillment surface to the onX tool definitions. Most vendors already cover the majority.</p></div></div><div class="step"><div class="sn"></div><div><h4>Implement &amp; self-validate</h4><p>Build your endpoint and test it against the conformance suite in the reference repo.</p></div></div><div class="step"><div class="sn"></div><div><h4>Join the Technical Steering Committee</h4><p>Bring your implementation learnings to the group steering the spec — and get listed as a compliant vendor.</p><a class="scta" href="#t-join">Apply to the TSC →</a></div></div><div class="step"><div class="sn"></div><div><h4>Get listed &amp; get found</h4><p>Compliant vendors appear in the Brand Activation tool — so demand flows to you automatically.</p></div></div></div>
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
  <div class="wrap"><div class="posts" id="blogPosts">${posts.map(postCard).join('')}</div><p class="center mono" style="color:var(--muted-2);padding-bottom:60px">Article bodies are illustrative placeholders — titles &amp; framing only.</p></div>
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
fs.mkdirSync(path.join(ROOT,'insights'),{recursive:true});
posts.forEach(p=>{
  const cta=TRACK_CTA[p.track];
  page({
    file:path.join('insights',p.slug+'.html'),
    path:'/insights/'+p.slug, active:'insights',
    title:p.title+' — onX Insights',
    desc:p.excerpt,
    body:`
<div class="wrap"><article class="article">
  <div class="crumbs" style="margin-bottom:30px"><a href="/">Home</a><span>/</span><a href="/insights">Insights</a><span>/</span>${p.label}</div>
  <div class="atrack" style="color:${p.c}">${p.label.toUpperCase()} SERIES</div>
  <h1>${p.title}</h1>
  <div class="abyline"><div class="aav"></div><div><b style="color:var(--ink)">Commerce Operations Foundation</b><br>${p.read} read · ${p.label}</div></div>
  <p class="lead">${p.excerpt}</p>
  <div class="placeholder-note">📝 Placeholder article — a sample template showing how a published onX insight would read. Real copy to be written by the COF team.</div>
  <p>This is sample body text demonstrating the article layout, typography, and reading experience. A finished piece would open with the stakes, ground them in a concrete scenario, and walk the reader toward a clear next action.</p>
  <h2>The shift is already underway</h2>
  <p>Sample paragraph. The published version would establish why agent-mediated commerce changes the stakes for this audience, with data points and member examples woven in.</p>
  <blockquote>"AI has made buying effortless. Now we need to make fulfillment intelligent."</blockquote>
  <p>Sample paragraph connecting the thesis back to the practical path: who to talk to, what to ask for, and how onX removes the friction.</p>
  <h2>What to do this quarter</h2>
  <p>Sample closing section pointing the reader to the relevant next step — every article ends by routing back into the right persona flow.</p>
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
