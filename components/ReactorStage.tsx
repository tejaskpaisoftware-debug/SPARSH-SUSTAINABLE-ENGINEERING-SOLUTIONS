"use client";

import { useState } from "react";
import { Users, Cog, ShieldCheck, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

type PillarKey = "people" | "process" | "property" | "planet";

interface PillarInfo {
  key: PillarKey;
  step: string;
  nextStep: string;
  title: string;
  label: string;
  sub: string;
  desc: string;
  color: string;
  gradient: string;
  glowColor: string;
}

const PILLARS: Record<PillarKey, PillarInfo> = {
  people: {
    key: "people",
    step: "01",
    nextStep: "PROCESS",
    title: "PEOPLE",
    label: "WORKFORCE SAFETY",
    sub: "Zero-Harm Culture",
    desc: "Behavioral safety, health governance & ergonomic compliance",
    color: "#0071e3",
    gradient: "linear-gradient(135deg, #0071e3, #47a3ff)",
    glowColor: "rgba(0, 113, 227, 0.35)",
  },
  process: {
    key: "process",
    step: "02",
    nextStep: "PROPERTY",
    title: "PROCESS",
    label: "PSM & INTEGRITY",
    sub: "Risk & SOP Control",
    desc: "HAZOP, HIRA, mechanical integrity & regulatory operating controls",
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
    glowColor: "rgba(217, 119, 6, 0.35)",
  },
  property: {
    key: "property",
    step: "03",
    nextStep: "PLANET",
    title: "PROPERTY",
    label: "FIRE & ASSETS",
    sub: "Fire & Asset Defense",
    desc: "Life safety audits, hydrant engineering & facility loss prevention",
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626, #f87171)",
    glowColor: "rgba(220, 38, 38, 0.35)",
  },
  planet: {
    key: "planet",
    step: "04",
    nextStep: "PEOPLE",
    title: "PLANET",
    label: "ESG & ECOLOGY",
    sub: "ESG & Sustainability",
    desc: "Decarbonization, statutory emissions, waste compliance & green audits",
    color: "#107c41",
    gradient: "linear-gradient(135deg, #107c41, #34c759)",
    glowColor: "rgba(16, 124, 65, 0.35)",
  },
};

export default function ReactorStage() {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<PillarKey | null>(null);

  const activeKey = hoveredPillar || selectedPillar;
  const activePillar = activeKey ? PILLARS[activeKey] : null;

  const handleNodeClick = (key: PillarKey) => {
    setSelectedPillar(selectedPillar === key ? null : key);
  };

  const handleCenterClick = () => {
    setSelectedPillar(null);
    setHoveredPillar(null);
  };

  return (
    <div className="hero-visual-center lazy-scale delay-2">
      <div className="flowchart-reactor-stage" id="flowchartStage">
        {/* SVG Flowchart Canvas (Precision Conduits, Directional Flow Arcs & Energy Streams) */}
        <svg
          className="flowchart-svg-canvas"
          viewBox="0 0 520 480"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* Quadrant Flow Gradients */}
            <linearGradient id="gradQ1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="gradQ2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="gradQ3" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#107c41" />
            </linearGradient>
            <linearGradient id="gradQ4" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#107c41" />
              <stop offset="100%" stopColor="#0071e3" />
            </linearGradient>

            {/* Radial Core Glow */}
            <radialGradient id="coreAuraGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={activePillar ? activePillar.color : "#0071e3"} stopOpacity="0.25" />
              <stop offset="60%" stopColor={activePillar ? activePillar.color : "#0071e3"} stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            {/* Arrow Marker */}
            <marker
              id="flowArrow"
              viewBox="0 0 8 8"
              refX="5"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 1 1 L 6 4 L 1 7 z" fill="rgba(0, 113, 227, 0.6)" />
            </marker>
          </defs>

          {/* 1. Outer Compass Calibration Ring */}
          <circle
            cx="260"
            cy="240"
            r="205"
            fill="none"
            stroke="rgba(0, 113, 227, 0.08)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />

          {/* Precision Cardinal Ticks */}
          <line x1="260" y1="28" x2="260" y2="40" stroke="rgba(0, 113, 227, 0.25)" strokeWidth="1.5" />
          <line x1="460" y1="240" x2="472" y2="240" stroke="rgba(217, 119, 6, 0.25)" strokeWidth="1.5" />
          <line x1="260" y1="440" x2="260" y2="452" stroke="rgba(220, 38, 38, 0.25)" strokeWidth="1.5" />
          <line x1="48" y1="240" x2="60" y2="240" stroke="rgba(16, 124, 65, 0.25)" strokeWidth="1.5" />

          {/* 2. Inner Orbit Guide Ring */}
          <circle
            cx="260"
            cy="240"
            r="105"
            fill="none"
            stroke="rgba(0, 113, 227, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />

          {/* 3. Central Core Ambient Halo Aura */}
          <circle
            cx="260"
            cy="240"
            r="82"
            fill="url(#coreAuraGrad)"
            className="flow-core-halo"
          />

          {/* 4. Radial Conduit Lines (Center Core to Each Node) */}
          {/* Top Conduit: Center to People */}
          <line
            x1="260"
            y1="172"
            x2="260"
            y2="80"
            stroke={activeKey === "people" ? "#0071e3" : "rgba(0, 113, 227, 0.18)"}
            strokeWidth={activeKey === "people" ? "3" : "1.5"}
            className={activeKey === "people" ? "conduit-active" : "conduit-idle"}
          />
          {/* Right Conduit: Center to Process */}
          <line
            x1="328"
            y1="240"
            x2="420"
            y2="240"
            stroke={activeKey === "process" ? "#d97706" : "rgba(217, 119, 6, 0.18)"}
            strokeWidth={activeKey === "process" ? "3" : "1.5"}
            className={activeKey === "process" ? "conduit-active" : "conduit-idle"}
          />
          {/* Bottom Conduit: Center to Property */}
          <line
            x1="260"
            y1="308"
            x2="260"
            y2="400"
            stroke={activeKey === "property" ? "#dc2626" : "rgba(220, 38, 38, 0.18)"}
            strokeWidth={activeKey === "property" ? "3" : "1.5"}
            className={activeKey === "property" ? "conduit-active" : "conduit-idle"}
          />
          {/* Left Conduit: Center to Planet */}
          <line
            x1="192"
            y1="240"
            x2="100"
            y2="240"
            stroke={activeKey === "planet" ? "#107c41" : "rgba(16, 124, 65, 0.18)"}
            strokeWidth={activeKey === "planet" ? "3" : "1.5"}
            className={activeKey === "planet" ? "conduit-active" : "conduit-idle"}
          />

          {/* 5. Main Interconnecting Flowchart Quadrant Arcs (Clockwise Circuit Flow) */}
          {/* Q1: People (260, 80) -> Process (420, 240) */}
          <path
            d="M 260 80 A 160 160 0 0 1 420 240"
            fill="none"
            stroke="url(#gradQ1)"
            strokeWidth={activeKey === "people" || activeKey === "process" ? "3" : "2"}
            strokeOpacity={activeKey === "people" || activeKey === "process" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Q2: Process (420, 240) -> Property (260, 400) */}
          <path
            d="M 420 240 A 160 160 0 0 1 260 400"
            fill="none"
            stroke="url(#gradQ2)"
            strokeWidth={activeKey === "process" || activeKey === "property" ? "3" : "2"}
            strokeOpacity={activeKey === "process" || activeKey === "property" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Q3: Property (260, 400) -> Planet (100, 240) */}
          <path
            d="M 260 400 A 160 160 0 0 1 100 240"
            fill="none"
            stroke="url(#gradQ3)"
            strokeWidth={activeKey === "property" || activeKey === "planet" ? "3" : "2"}
            strokeOpacity={activeKey === "property" || activeKey === "planet" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Q4: Planet (100, 240) -> People (260, 80) */}
          <path
            d="M 100 240 A 160 160 0 0 1 260 80"
            fill="none"
            stroke="url(#gradQ4)"
            strokeWidth={activeKey === "planet" || activeKey === "people" ? "3" : "2"}
            strokeOpacity={activeKey === "planet" || activeKey === "people" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />

          {/* 6. Circulating High-Tech Dash Stream (Continuous Life Cycle Flow) */}
          <circle
            cx="260"
            cy="240"
            r="160"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="2.5"
            strokeDasharray="8 14"
            className="flow-stream-animated"
          />

          {/* 7. Directional Flow Chevrons (Clockwise Flow Indicators) */}
          {/* Quadrant 1 Flow Chevron (between People & Process) */}
          <g transform="translate(373, 127) rotate(45)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#d97706" opacity="0.9" />
          </g>
          {/* Quadrant 2 Flow Chevron (between Process & Property) */}
          <g transform="translate(373, 353) rotate(135)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#dc2626" opacity="0.9" />
          </g>
          {/* Quadrant 3 Flow Chevron (between Property & Planet) */}
          <g transform="translate(147, 353) rotate(225)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#107c41" opacity="0.9" />
          </g>
          {/* Quadrant 4 Flow Chevron (between Planet & People) */}
          <g transform="translate(147, 127) rotate(315)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#0071e3" opacity="0.9" />
          </g>

          {/* 8. Conduit Junction Anchor Pips */}
          <circle cx="260" cy="80" r="5" fill="#0071e3" stroke="#ffffff" strokeWidth="2" />
          <circle cx="420" cy="240" r="5" fill="#d97706" stroke="#ffffff" strokeWidth="2" />
          <circle cx="260" cy="400" r="5" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
          <circle cx="100" cy="240" r="5" fill="#107c41" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Central Luminous Liquid Glass Core Sphere */}
        <div
          className={`flowchart-core-sphere ${activePillar ? "active-core" : ""}`}
          id="flowchartCore"
          title={activePillar ? `${activePillar.title} Active • Click to reset` : "SETURAKSH 4P Integrated System Core"}
          onClick={handleCenterClick}
          style={{
            borderColor: activePillar ? activePillar.color : "rgba(255, 255, 255, 0.95)",
            boxShadow: activePillar
              ? `0 18px 46px ${activePillar.glowColor}, 0 0 0 6px rgba(255, 255, 255, 0.95), inset 0 2px 4px #ffffff`
              : undefined,
          }}
        >
          {activePillar ? (
            <div className="core-active-content">
              <span className="core-step-pill" style={{ background: activePillar.color, color: "#fff" }}>
                STEP {activePillar.step}
              </span>
              <span
                className="core-brand-name"
                style={{
                  color: activePillar.color,
                  WebkitTextFillColor: activePillar.color,
                  fontSize: "1.15rem",
                }}
              >
                {activePillar.title}
              </span>
              <span className="core-domain-tag" style={{ color: activePillar.color }}>
                {activePillar.label}
              </span>
              <span className="core-reset-hint">Tap to reset</span>
            </div>
          ) : (
            <div className="core-default-content">
              <span className="core-system-pill">4P SYSTEM</span>
              <span className="core-brand-name">SETURAKSH</span>
              <span className="core-domain-tag">INTEGRATED CORE</span>
              <div className="core-live-status">
                <span className="core-live-dot"></span>
                <span>Active Cycle</span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Flowchart Pillar Nodes (Structured, Aesthetic Cards with Flow Logic) */}

        {/* 1. PEOPLE (Top - Step 01) */}
        <div
          className={`flow-node node-people ${activeKey === "people" ? "active" : ""}`}
          data-pillar="people"
          onClick={() => handleNodeClick("people")}
          onMouseEnter={() => setHoveredPillar("people")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "people" ? PILLARS.people.color : undefined,
            boxShadow: activeKey === "people"
              ? `0 16px 36px ${PILLARS.people.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(0, 113, 227, 0.12)", color: "#0071e3" }}>
            01
          </div>
          <div className="flow-node-icon" style={{ background: PILLARS.people.gradient }}>
            <Users style={{ width: 16, height: 16 }} />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">PEOPLE</span>
              <span className="flow-node-arrow" style={{ color: "#0071e3" }}>→</span>
            </div>
            <span className="flow-node-sub">Zero-Harm Mindset</span>
          </div>
        </div>

        {/* 2. PROCESS (Right - Step 02) */}
        <div
          className={`flow-node node-process ${activeKey === "process" ? "active" : ""}`}
          data-pillar="process"
          onClick={() => handleNodeClick("process")}
          onMouseEnter={() => setHoveredPillar("process")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "process" ? PILLARS.process.color : undefined,
            boxShadow: activeKey === "process"
              ? `0 16px 36px ${PILLARS.process.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(217, 119, 6, 0.12)", color: "#d97706" }}>
            02
          </div>
          <div className="flow-node-icon" style={{ background: PILLARS.process.gradient }}>
            <Cog style={{ width: 16, height: 16 }} />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">PROCESS</span>
              <span className="flow-node-arrow" style={{ color: "#d97706" }}>→</span>
            </div>
            <span className="flow-node-sub">PSM & Risk Control</span>
          </div>
        </div>

        {/* 3. PROPERTY (Bottom - Step 03) */}
        <div
          className={`flow-node node-property ${activeKey === "property" ? "active" : ""}`}
          data-pillar="property"
          onClick={() => handleNodeClick("property")}
          onMouseEnter={() => setHoveredPillar("property")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "property" ? PILLARS.property.color : undefined,
            boxShadow: activeKey === "property"
              ? `0 16px 36px ${PILLARS.property.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(220, 38, 38, 0.12)", color: "#dc2626" }}>
            03
          </div>
          <div className="flow-node-icon" style={{ background: PILLARS.property.gradient }}>
            <ShieldCheck style={{ width: 16, height: 16 }} />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">PROPERTY</span>
              <span className="flow-node-arrow" style={{ color: "#dc2626" }}>→</span>
            </div>
            <span className="flow-node-sub">Fire Protection</span>
          </div>
        </div>

        {/* 4. PLANET (Left - Step 04) */}
        <div
          className={`flow-node node-planet ${activeKey === "planet" ? "active" : ""}`}
          data-pillar="planet"
          onClick={() => handleNodeClick("planet")}
          onMouseEnter={() => setHoveredPillar("planet")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "planet" ? PILLARS.planet.color : undefined,
            boxShadow: activeKey === "planet"
              ? `0 16px 36px ${PILLARS.planet.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(16, 124, 65, 0.12)", color: "#107c41" }}>
            04
          </div>
          <div className="flow-node-icon" style={{ background: PILLARS.planet.gradient }}>
            <Leaf style={{ width: 16, height: 16 }} />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">PLANET</span>
              <span className="flow-node-arrow" style={{ color: "#107c41" }}>→</span>
            </div>
            <span className="flow-node-sub">ESG & Ecology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
