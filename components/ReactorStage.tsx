"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

type ServiceKey = "ehs" | "fire" | "process" | "env" | "engineering" | "risk";

interface ServiceInfo {
  key: ServiceKey;
  step: string;
  nextStep: string;
  title: string;
  label: string;
  sub: string;
  desc: string;
  color: string;
  gradient: string;
  glowColor: string;
  image: string;
}

const SERVICES: Record<ServiceKey, ServiceInfo> = {
  ehs: {
    key: "ehs",
    step: "01",
    nextStep: "FIRE SAFETY",
    title: "EHS CONSULTANCY",
    label: "WORKFORCE & STATUTORY",
    sub: "Workforce & Compliance",
    desc: "Behavioral safety, health governance, OSHA & regulatory advisory",
    color: "#00843d",
    gradient: "linear-gradient(135deg, #00843d, #34c759)",
    glowColor: "rgba(0, 132, 61, 0.35)",
    image: "/service-ehs.png",
  },
  fire: {
    key: "fire",
    step: "02",
    nextStep: "PROCESS SAFETY",
    title: "FIRE SAFETY",
    label: "PROTECTION & DEFENSE",
    sub: "Audits & Hydrant Systems",
    desc: "Hydrant engineering, life safety audits & loss prevention systems",
    color: "#d9251d",
    gradient: "linear-gradient(135deg, #d9251d, #f87171)",
    glowColor: "rgba(217, 37, 29, 0.35)",
    image: "/service-fire.png",
  },
  process: {
    key: "process",
    step: "03",
    nextStep: "ENVIRONMENT & SUSTAINABILITY",
    title: "PROCESS SAFETY",
    label: "PSM & INTEGRITY",
    sub: "PSM & Hazard Analysis",
    desc: "HAZOP, HIRA, mechanical integrity & regulatory operating controls",
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
    glowColor: "rgba(217, 119, 6, 0.35)",
    image: "/service-process.png",
  },
  env: {
    key: "env",
    step: "04",
    nextStep: "TOTAL ENGINEERING",
    title: "ENV & SUSTAINABILITY",
    label: "ESG & ECOLOGY",
    sub: "Decarbonization & ESG",
    desc: "Pollution mitigation, emissions monitoring, waste & carbon audits",
    color: "#0d8a43",
    gradient: "linear-gradient(135deg, #0d8a43, #38ef7d)",
    glowColor: "rgba(13, 138, 67, 0.35)",
    image: "/service-env.png",
  },
  engineering: {
    key: "engineering",
    step: "05",
    nextStep: "RISK MANAGEMENT",
    title: "TOTAL ENGINEERING",
    label: "SYSTEM RESILIENCE",
    sub: "Industrial Engineering",
    desc: "Process engineering, safety instrumented systems & plant reliability",
    color: "#0066cc",
    gradient: "linear-gradient(135deg, #0066cc, #47a3ff)",
    glowColor: "rgba(0, 102, 204, 0.35)",
    image: "/service-engineering.png",
  },
  risk: {
    key: "risk",
    step: "06",
    nextStep: "EHS CONSULTANCY",
    title: "RISK MANAGEMENT",
    label: "GOVERNANCE & CONTROL",
    sub: "Enterprise Mitigation",
    desc: "Enterprise risk profiling, statutory compliance & safety mitigation",
    color: "#7e22ce",
    gradient: "linear-gradient(135deg, #7e22ce, #c084fc)",
    glowColor: "rgba(126, 34, 206, 0.35)",
    image: "/service-risk.png",
  },
};

export default function ReactorStage() {
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);
  const [hoveredService, setHoveredService] = useState<ServiceKey | null>(null);

  const activeKey = hoveredService || selectedService;
  const activeService = activeKey ? SERVICES[activeKey] : null;

  const handleNodeClick = (key: ServiceKey) => {
    setSelectedService(selectedService === key ? null : key);
  };

  const handleCenterClick = () => {
    setSelectedService(null);
    setHoveredService(null);
  };

  return (
    <div className="hero-visual-center lazy-scale delay-2">
      <div className="flowchart-reactor-stage" id="flowchartStage">
        {/* SVG Flowchart Canvas: 6 Cardinal Conduit Lines & Clockwise Directional Arcs */}
        <svg
          className="flowchart-svg-canvas"
          viewBox="0 0 520 480"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* 6 Circuit Flow Gradients */}
            <linearGradient id="gradQ1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00843d" />
              <stop offset="100%" stopColor="#d9251d" />
            </linearGradient>
            <linearGradient id="gradQ2" x1="100%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9251d" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="gradQ3" x1="100%" y1="100%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#0d8a43" />
            </linearGradient>
            <linearGradient id="gradQ4" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0d8a43" />
              <stop offset="100%" stopColor="#0066cc" />
            </linearGradient>
            <linearGradient id="gradQ5" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0066cc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="gradQ6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#00843d" />
            </linearGradient>

            {/* Radial Core Glow */}
            <radialGradient id="coreAuraGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={activeService ? activeService.color : "#00843d"} stopOpacity="0.25" />
              <stop offset="60%" stopColor={activeService ? activeService.color : "#00843d"} stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
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

          {/* Precision Calibration Ticks for 6 Sectors */}
          <line x1="260" y1="26" x2="260" y2="38" stroke="rgba(0, 132, 61, 0.3)" strokeWidth="1.5" />
          <line x1="438" y1="137" x2="448" y2="131" stroke="rgba(217, 37, 29, 0.3)" strokeWidth="1.5" />
          <line x1="438" y1="343" x2="448" y2="349" stroke="rgba(217, 119, 6, 0.3)" strokeWidth="1.5" />
          <line x1="260" y1="442" x2="260" y2="454" stroke="rgba(13, 138, 67, 0.3)" strokeWidth="1.5" />
          <line x1="82" y1="343" x2="72" y2="349" stroke="rgba(0, 102, 204, 0.3)" strokeWidth="1.5" />
          <line x1="82" y1="137" x2="72" y2="131" stroke="rgba(126, 34, 206, 0.3)" strokeWidth="1.5" />

          {/* 2. Inner Orbit Guide Ring */}
          <circle
            cx="260"
            cy="240"
            r="105"
            fill="none"
            stroke="rgba(0, 0, 0, 0.04)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />

          {/* 3. Luminous Central Aura */}
          <circle
            cx="260"
            cy="240"
            r="82"
            fill="url(#coreAuraGrad)"
            className="flow-core-halo"
          />

          {/* 4. Radial Conduit Lines: Center Core to 6 Nodes */}
          {/* Conduit 01: Top (EHS) */}
          <line
            x1="260"
            y1="172"
            x2="260"
            y2="75"
            stroke={activeKey === "ehs" ? "#00843d" : "rgba(0, 132, 61, 0.18)"}
            strokeWidth={activeKey === "ehs" ? "3" : "1.5"}
            className={activeKey === "ehs" ? "conduit-active" : "conduit-idle"}
          />
          {/* Conduit 02: Top-Right (Fire) */}
          <line
            x1="321"
            y1="205"
            x2="403"
            y2="157"
            stroke={activeKey === "fire" ? "#d9251d" : "rgba(217, 37, 29, 0.18)"}
            strokeWidth={activeKey === "fire" ? "3" : "1.5"}
            className={activeKey === "fire" ? "conduit-active" : "conduit-idle"}
          />
          {/* Conduit 03: Bottom-Right (Process) */}
          <line
            x1="321"
            y1="275"
            x2="403"
            y2="323"
            stroke={activeKey === "process" ? "#d97706" : "rgba(217, 119, 6, 0.18)"}
            strokeWidth={activeKey === "process" ? "3" : "1.5"}
            className={activeKey === "process" ? "conduit-active" : "conduit-idle"}
          />
          {/* Conduit 04: Bottom (Env) */}
          <line
            x1="260"
            y1="308"
            x2="260"
            y2="405"
            stroke={activeKey === "env" ? "#0d8a43" : "rgba(13, 138, 67, 0.18)"}
            strokeWidth={activeKey === "env" ? "3" : "1.5"}
            className={activeKey === "env" ? "conduit-active" : "conduit-idle"}
          />
          {/* Conduit 05: Bottom-Left (Engineering) */}
          <line
            x1="199"
            y1="275"
            x2="117"
            y2="323"
            stroke={activeKey === "engineering" ? "#0066cc" : "rgba(0, 102, 204, 0.18)"}
            strokeWidth={activeKey === "engineering" ? "3" : "1.5"}
            className={activeKey === "engineering" ? "conduit-active" : "conduit-idle"}
          />
          {/* Conduit 06: Top-Left (Risk) */}
          <line
            x1="199"
            y1="205"
            x2="117"
            y2="157"
            stroke={activeKey === "risk" ? "#7e22ce" : "rgba(126, 34, 206, 0.18)"}
            strokeWidth={activeKey === "risk" ? "3" : "1.5"}
            className={activeKey === "risk" ? "conduit-active" : "conduit-idle"}
          />

          {/* 5. Interconnecting 6-Arc Flow Circuit (Clockwise Flow) */}
          {/* Arc 1: EHS (260, 75) -> Fire (403, 157) */}
          <path
            d="M 260 75 A 165 165 0 0 1 403 157"
            fill="none"
            stroke="url(#gradQ1)"
            strokeWidth={activeKey === "ehs" || activeKey === "fire" ? "3" : "2"}
            strokeOpacity={activeKey === "ehs" || activeKey === "fire" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Arc 2: Fire (403, 157) -> Process (403, 323) */}
          <path
            d="M 403 157 A 165 165 0 0 1 403 323"
            fill="none"
            stroke="url(#gradQ2)"
            strokeWidth={activeKey === "fire" || activeKey === "process" ? "3" : "2"}
            strokeOpacity={activeKey === "fire" || activeKey === "process" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Arc 3: Process (403, 323) -> Env (260, 405) */}
          <path
            d="M 403 323 A 165 165 0 0 1 260 405"
            fill="none"
            stroke="url(#gradQ3)"
            strokeWidth={activeKey === "process" || activeKey === "env" ? "3" : "2"}
            strokeOpacity={activeKey === "process" || activeKey === "env" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Arc 4: Env (260, 405) -> Engineering (117, 323) */}
          <path
            d="M 260 405 A 165 165 0 0 1 117 323"
            fill="none"
            stroke="url(#gradQ4)"
            strokeWidth={activeKey === "env" || activeKey === "engineering" ? "3" : "2"}
            strokeOpacity={activeKey === "env" || activeKey === "engineering" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Arc 5: Engineering (117, 323) -> Risk (117, 157) */}
          <path
            d="M 117 323 A 165 165 0 0 1 117 157"
            fill="none"
            stroke="url(#gradQ5)"
            strokeWidth={activeKey === "engineering" || activeKey === "risk" ? "3" : "2"}
            strokeOpacity={activeKey === "engineering" || activeKey === "risk" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />
          {/* Arc 6: Risk (117, 157) -> EHS (260, 75) */}
          <path
            d="M 117 157 A 165 165 0 0 1 260 75"
            fill="none"
            stroke="url(#gradQ6)"
            strokeWidth={activeKey === "risk" || activeKey === "ehs" ? "3" : "2"}
            strokeOpacity={activeKey === "risk" || activeKey === "ehs" ? "0.95" : "0.45"}
            className="flow-arc-track"
          />

          {/* 6. Rotating Dashed Orbit Ring (Smooth 60s Ambient Rotation) */}
          <circle
            cx="260"
            cy="240"
            r="165"
            fill="none"
            stroke="rgba(0, 113, 227, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="6 12"
            className="flow-rotating-ring"
          />

          {/* 7. Directional Flow Chevrons (Clockwise Flow Indicators) */}
          {/* Segment 1: EHS -> Fire */}
          <g transform="translate(343, 97) rotate(45)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#00843d" opacity="0.9" />
          </g>
          {/* Segment 2: Fire -> Process */}
          <g transform="translate(425, 240) rotate(90)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#d9251d" opacity="0.9" />
          </g>
          {/* Segment 3: Process -> Env */}
          <g transform="translate(343, 383) rotate(135)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#d97706" opacity="0.9" />
          </g>
          {/* Segment 4: Env -> Engineering */}
          <g transform="translate(177, 383) rotate(225)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#0d8a43" opacity="0.9" />
          </g>
          {/* Segment 5: Engineering -> Risk */}
          <g transform="translate(95, 240) rotate(270)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#0066cc" opacity="0.9" />
          </g>
          {/* Segment 6: Risk -> EHS */}
          <g transform="translate(177, 97) rotate(315)">
            <polygon points="-4,-6 5,0 -4,6 -1,0" fill="#7e22ce" opacity="0.9" />
          </g>

          {/* 8. Conduit Junction Anchor Pips */}
          <circle cx="260" cy="75" r="5" fill="#00843d" stroke="#ffffff" strokeWidth="2" />
          <circle cx="403" cy="157" r="5" fill="#d9251d" stroke="#ffffff" strokeWidth="2" />
          <circle cx="403" cy="323" r="5" fill="#d97706" stroke="#ffffff" strokeWidth="2" />
          <circle cx="260" cy="405" r="5" fill="#0d8a43" stroke="#ffffff" strokeWidth="2" />
          <circle cx="117" cy="323" r="5" fill="#0066cc" stroke="#ffffff" strokeWidth="2" />
          <circle cx="117" cy="157" r="5" fill="#7e22ce" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Central Luminous Liquid Glass Core Sphere */}
        <div
          className={`flowchart-core-sphere ${activeService ? "active-core" : ""}`}
          id="flowchartCore"
          title={activeService ? `${activeService.title} Active • Click to reset` : "SETURAKSH Core Services Ecosystem"}
          onClick={handleCenterClick}
          style={{
            borderColor: activeService ? activeService.color : "rgba(255, 255, 255, 0.95)",
            boxShadow: activeService
              ? `0 18px 46px ${activeService.glowColor}, 0 0 0 6px rgba(255, 255, 255, 0.95), inset 0 2px 4px #ffffff`
              : undefined,
          }}
        >
          {activeService ? (
            <div className="core-active-content">
              <span className="core-step-pill" style={{ background: activeService.color, color: "#fff" }}>
                SERVICE {activeService.step}
              </span>
              <span
                className="core-brand-name"
                style={{
                  color: activeService.color,
                  WebkitTextFillColor: activeService.color,
                  fontSize: "1.05rem",
                  lineHeight: 1.15,
                }}
              >
                {activeService.title}
              </span>
              <span className="core-domain-tag" style={{ color: activeService.color, fontSize: "0.62rem" }}>
                {activeService.label}
              </span>
              <a
                href={`/services?service=${activeService.key}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  marginTop: 4,
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  color: "#fff",
                  background: activeService.color,
                  padding: "3px 8px",
                  borderRadius: 8,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 3,
                  boxShadow: `0 4px 10px ${activeService.glowColor}`,
                }}
              >
                <span>View Scope</span>
                <span>→</span>
              </a>
              <span className="core-reset-hint" style={{ fontSize: "0.58rem", opacity: 0.7, marginTop: 2 }}>Tap center to reset</span>
            </div>
          ) : (
            <div className="core-default-content">
              <span className="core-system-pill" style={{ background: "rgba(0, 132, 61, 0.12)", color: "#00843d" }}>
                SETURAKSH
              </span>
              <span
                className="core-brand-name"
                style={{
                  fontSize: "1.14rem",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                OUR SERVICES
              </span>
              <span className="core-domain-tag" style={{ letterSpacing: "0.08em" }}>
                6 CORE DISCIPLINES
              </span>
              <div className="core-live-status">
                <span className="core-live-dot" style={{ background: "#00843d" }}></span>
                <span>Active Cycle</span>
              </div>
            </div>
          )}
        </div>

        {/* 6 Flowchart Service Nodes with 3D Circular Icons */}

        {/* 01. EHS CONSULTANCY (Top - Step 01) */}
        <div
          className={`flow-node node-ehs ${activeKey === "ehs" ? "active" : ""}`}
          onClick={() => handleNodeClick("ehs")}
          onMouseEnter={() => setHoveredService("ehs")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "ehs" ? SERVICES.ehs.color : undefined,
            boxShadow: activeKey === "ehs"
              ? `0 16px 36px ${SERVICES.ehs.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(0, 132, 61, 0.12)", color: "#00843d" }}>
            01
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-ehs.png"
              alt="EHS Consultancy"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">EHS CONSULTANCY</span>
              <span className="flow-node-arrow" style={{ color: "#00843d" }}>→</span>
            </div>
            <span className="flow-node-sub">Workforce & Compliance</span>
          </div>
        </div>

        {/* 02. FIRE SAFETY (Top-Right - Step 02) */}
        <div
          className={`flow-node node-fire ${activeKey === "fire" ? "active" : ""}`}
          onClick={() => handleNodeClick("fire")}
          onMouseEnter={() => setHoveredService("fire")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "fire" ? SERVICES.fire.color : undefined,
            boxShadow: activeKey === "fire"
              ? `0 16px 36px ${SERVICES.fire.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(217, 37, 29, 0.12)", color: "#d9251d" }}>
            02
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-fire.png"
              alt="Fire Safety"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">FIRE SAFETY</span>
              <span className="flow-node-arrow" style={{ color: "#d9251d" }}>→</span>
            </div>
            <span className="flow-node-sub">Audits & Protection</span>
          </div>
        </div>

        {/* 03. PROCESS SAFETY (Bottom-Right - Step 03) */}
        <div
          className={`flow-node node-process ${activeKey === "process" ? "active" : ""}`}
          onClick={() => handleNodeClick("process")}
          onMouseEnter={() => setHoveredService("process")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "process" ? SERVICES.process.color : undefined,
            boxShadow: activeKey === "process"
              ? `0 16px 36px ${SERVICES.process.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(217, 119, 6, 0.12)", color: "#d97706" }}>
            03
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-process.png"
              alt="Process Safety"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">PROCESS SAFETY</span>
              <span className="flow-node-arrow" style={{ color: "#d97706" }}>→</span>
            </div>
            <span className="flow-node-sub">PSM & Risk Control</span>
          </div>
        </div>

        {/* 04. ENVIRONMENT & SUSTAINABILITY (Bottom - Step 04) */}
        <div
          className={`flow-node node-env ${activeKey === "env" ? "active" : ""}`}
          onClick={() => handleNodeClick("env")}
          onMouseEnter={() => setHoveredService("env")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "env" ? SERVICES.env.color : undefined,
            boxShadow: activeKey === "env"
              ? `0 16px 36px ${SERVICES.env.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(13, 138, 67, 0.12)", color: "#0d8a43" }}>
            04
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-env.png"
              alt="Environment & Sustainability"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">ENV & SUSTAINABILITY</span>
              <span className="flow-node-arrow" style={{ color: "#0d8a43" }}>→</span>
            </div>
            <span className="flow-node-sub">ESG & Decarbonization</span>
          </div>
        </div>

        {/* 05. TOTAL ENGINEERING (Bottom-Left - Step 05) */}
        <div
          className={`flow-node node-engineering ${activeKey === "engineering" ? "active" : ""}`}
          onClick={() => handleNodeClick("engineering")}
          onMouseEnter={() => setHoveredService("engineering")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "engineering" ? SERVICES.engineering.color : undefined,
            boxShadow: activeKey === "engineering"
              ? `0 16px 36px ${SERVICES.engineering.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(0, 102, 204, 0.12)", color: "#0066cc" }}>
            05
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-engineering.png"
              alt="Total Engineering"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">TOTAL ENGINEERING</span>
              <span className="flow-node-arrow" style={{ color: "#0066cc" }}>→</span>
            </div>
            <span className="flow-node-sub">Industrial Systems</span>
          </div>
        </div>

        {/* 06. RISK MANAGEMENT (Top-Left - Step 06) */}
        <div
          className={`flow-node node-risk ${activeKey === "risk" ? "active" : ""}`}
          onClick={() => handleNodeClick("risk")}
          onMouseEnter={() => setHoveredService("risk")}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            borderColor: activeKey === "risk" ? SERVICES.risk.color : undefined,
            boxShadow: activeKey === "risk"
              ? `0 16px 36px ${SERVICES.risk.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
              : undefined,
          }}
        >
          <div className="flow-step-badge" style={{ background: "rgba(126, 34, 206, 0.12)", color: "#7e22ce" }}>
            06
          </div>
          <div className="flow-node-icon" style={{ background: "transparent", padding: 0 }}>
            <Image
              src="/service-risk.png"
              alt="Risk Management"
              width={32}
              height={32}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div className="flow-node-body">
            <div className="flow-node-header">
              <span className="flow-node-title">RISK MANAGEMENT</span>
              <span className="flow-node-arrow" style={{ color: "#7e22ce" }}>→</span>
            </div>
            <span className="flow-node-sub">Enterprise Defense</span>
          </div>
        </div>
      </div>
    </div>
  );
}
