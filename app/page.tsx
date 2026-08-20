"use client";

import { useMemo, useState } from "react";

const modules = [
  { id: "surface", name: "Lift Surface", detail: "Sit–stand desk · FSC oak", price: 1850 },
  { id: "acoustic", name: "Quiet Arc", detail: "Recycled felt acoustic wing", price: 640 },
  { id: "light", name: "Halo Rail", detail: "Adaptive task + ambient light", price: 390 },
  { id: "storage", name: "Dock Stack", detail: "Cable-aware modular storage", price: 520 },
];
const agentSteps = ["Scan", "Interpret", "Design", "Source", "Make", "Verify", "Deliver"];

export default function Home() {
  const [selected, setSelected] = useState(["surface", "acoustic", "light"]);
  const [mode, setMode] = useState<"focus" | "create" | "restore">("focus");
  const [briefOpen, setBriefOpen] = useState(false);
  const total = useMemo(() => modules.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.price, 0), [selected]);
  function toggle(id: string) { setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }

  return <main>
    <nav className="nav shell" aria-label="Primary navigation">
      <a href="#top" className="brand" aria-label="AetherForge home"><span className="brand-mark">AF</span><span>AetherForge <em>Collective</em></span></a>
      <div className="nav-links"><a href="#system">The system</a><a href="#process">How it works</a><a href="#collective">Collective</a></div>
      <button className="button button-small" onClick={() => setBriefOpen(true)}>Begin your space</button>
    </nav>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Workspace intelligence, made physical</p>
        <h1>Your best work deserves a space that <i>knows you.</i></h1>
        <p className="lede">A made-to-measure workspace designed by collaborating AI agents, fabricated near you, and built to evolve with the way you think.</p>
        <div className="hero-actions"><button className="button" onClick={() => setBriefOpen(true)}>Design my workspace <span>↗</span></button><a className="text-link" href="#process">See the process <span>↓</span></a></div>
        <div className="proof-line"><span><b>12</b> specialist agents</span><span><b>48h</b> first concepts</span><span><b>1</b> evolving system</span></div>
      </div>
      <div className={`workspace-visual mode-${mode}`} aria-label="Interactive modular workspace concept">
        <div className="room-grid" /><div className="sun-glow" />
        <div className="desk-scene"><div className="panel panel-left" /><div className="panel panel-right" /><div className="light-rail" /><div className="shelf"><span /><span /><span /></div><div className="desktop"><div className="monitor"><span>AETHER / 01</span></div><div className="lamp" /></div><div className="legs"><span /><span /></div></div>
        <div className="mode-switcher" role="group" aria-label="Workspace mode">{(["focus", "create", "restore"] as const).map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item}</button>)}</div>
        <div className="visual-note"><span>Live concept</span><b>{mode === "focus" ? "Deep work configuration" : mode === "create" ? "Studio configuration" : "Low-stimulus configuration"}</b></div>
      </div>
    </section>

    <section className="manifesto shell"><p className="section-label">01 / The premise</p><div><h2>Furniture asks you to adapt.<br/><i>We reverse the equation.</i></h2><p>Room dimensions, posture, daylight, sound, workflow—your space is a living system. AetherForge turns those signals into modules that fit together now and can change later.</p></div></section>

    <section className="config-section" id="system"><div className="shell config-grid">
      <div className="config-intro"><p className="section-label light">02 / Build your system</p><h2>Start with what your work needs.</h2><p>Choose a foundation. Our design collective resolves the dimensions, materials, ergonomics, and fabrication.</p><div className="price-block"><span>Concept estimate</span><b>${total.toLocaleString()}</b><small>Final pricing follows room analysis</small></div><button className="button button-light" onClick={() => setBriefOpen(true)}>Save this configuration</button></div>
      <div className="module-list">{modules.map((item, index) => { const active = selected.includes(item.id); return <button key={item.id} className={`module-row ${active ? "selected" : ""}`} onClick={() => toggle(item.id)} aria-pressed={active}><span className="module-index">0{index + 1}</span><span className="module-copy"><b>{item.name}</b><small>{item.detail}</small></span><span className="module-price">${item.price.toLocaleString()}</span><span className="module-toggle">{active ? "×" : "+"}</span></button>; })}</div>
    </div></section>

    <section className="process shell" id="process"><div className="process-head"><p className="section-label">03 / The collective at work</p><h2>From room signal<br/>to finished system.</h2><p>Twelve specialist agents coordinate one continuous, auditable production flow—with human review at every safety-critical decision.</p></div>
      <div className="agent-chain">{agentSteps.map((step, index) => <div className="agent-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b>{index < agentSteps.length - 1 && <i>→</i>}</div>)}</div>
      <div className="process-cards"><article><span>DESIGN INTELLIGENCE</span><h3>A room-scale digital twin</h3><p>Your scan becomes a constraint-aware model for fit, reach, posture, light, and acoustic behavior.</p></article><article><span>DISTRIBUTED CRAFT</span><h3>Made close to home</h3><p>Qualified fabrication partners produce CNC-ready components, checked by vision and human quality gates.</p></article><article><span>ADAPTIVE OWNERSHIP</span><h3>Never start over</h3><p>Add, trade, refresh, or reconfigure modules as your work and space evolve.</p></article></div>
    </section>

    <section className="collective" id="collective"><div className="shell collective-inner"><p className="section-label light">04 / A better object economy</p><blockquote>“The most sustainable workspace is the one that never becomes obsolete.”</blockquote><div className="collective-stats"><div><b>On-demand</b><span>No speculative inventory</span></div><div><b>Repairable</b><span>Components, not landfill</span></div><div><b>Local-first</b><span>Shorter production paths</span></div><div><b>Reversible</b><span>Trade and recirculate</span></div></div></div></section>
    <section className="final-cta shell"><p className="eyebrow"><span /> Your room is the blueprint</p><h2>Build the place<br/>your mind wants to be.</h2><button className="button" onClick={() => setBriefOpen(true)}>Begin the 5-minute brief <span>↗</span></button></section>
    <footer className="footer shell"><div className="brand"><span className="brand-mark">AF</span><span>AetherForge <em>Collective</em></span></div><p>Adaptive workspace systems · Designed by intelligence · Made by people</p><span>© 2026</span></footer>

    {briefOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setBriefOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="brief-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setBriefOpen(false)} aria-label="Close">×</button><p className="section-label">Workspace brief</p><h2 id="brief-title">Let’s map your work.</h2><p>Tell us where to send your private room-scan link and preference brief.</p><form onSubmit={(event) => { event.preventDefault(); setBriefOpen(false); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Primary goal<select defaultValue="focus"><option value="focus">Deeper focus</option><option value="ergonomics">Better ergonomics</option><option value="create">A flexible studio</option><option value="team">A shared team setup</option></select></label><button className="button" type="submit">Request my scan link <span>↗</span></button></form><small>Prototype flow — no data is transmitted.</small></div></div>}
  </main>;
}
