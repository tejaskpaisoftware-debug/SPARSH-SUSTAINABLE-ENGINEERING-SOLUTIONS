"use client";

import { useState } from "react";
import { Users, Cog, ShieldCheck, Leaf } from "lucide-react";

type PillarKey = "people" | "process" | "property" | "planet";

interface PillarInfo {
  key: PillarKey;
  title: string;
  label: string;
  sub: string;
  color: string;
  glowColor: string;
  baseTransform: string;
  activeTransform: string;
}

const PILLARS: Record<PillarKey, PillarInfo> = {
  people: {
    key: "people",
    title: "PEOPLE",
    label: "ZERO-HARM FOCUS",
    sub: "Zero Harm Mindset",
    color: "#0071e3",
    glowColor: "rgba(0, 113, 227, 0.32)",
    baseTransform: "translateX(-50%)",
    activeTransform: "translateX(-50%) scale(1.04)",
  },
  process: {
    key: "process",
    title: "PROCESS",
    label: "PSM & HIRA CONTROL",
    sub: "PSM & Risk Control",
    color: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.32)",
    baseTransform: "translateY(-50%)",
    activeTransform: "translateY(-50%) scale(1.04)",
  },
  property: {
    key: "property",
    title: "PROPERTY",
    label: "FIRE & ASSET DEFENSE",
    sub: "Fire Protection",
    color: "#dc2626",
    glowColor: "rgba(220, 38, 38, 0.32)",
    baseTransform: "translateX(-50%)",
    activeTransform: "translateX(-50%) scale(1.04)",
  },
  planet: {
    key: "planet",
    title: "PLANET",
    label: "ESG & SUSTAINABILITY",
    sub: "ESG & Sustainability",
    color: "#107c41",
    glowColor: "rgba(16, 124, 65, 0.32)",
    baseTransform: "translateY(-50%)",
    activeTransform: "translateY(-50%) scale(1.04)",
  },
};

export default function ReactorStage() {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<PillarKey | null>(null);

  // Active pillar is either currently hovered or currently selected
  const activeKey = hoveredPillar || selectedPillar;
  const activePillar = activeKey ? PILLARS[activeKey] : null;

  const handleNodeClick = (key: PillarKey) => {
    if (selectedPillar === key) {
      setSelectedPillar(null);
    } else {
      setSelectedPillar(key);
    }
  };

  const handleCenterClick = () => {
    setSelectedPillar(null);
    setHoveredPillar(null);
  };

  return (
    <div className="hero-visual-center lazy-scale delay-2">
      <div className="reactor-stage" id="reactorStage">
        {/* Concentric Animated Rings */}
        <div className="reactor-ring-outer"></div>
        <div className="reactor-ring-mid"></div>

        {/* Connecting Laser Lines SVG */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          viewBox="0 0 520 480"
        >
          <circle
            cx="260"
            cy="240"
            r="160"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          {/* Vertical line: People (top) to Property (bottom) */}
          <line
            x1="260"
            y1="70"
            x2="260"
            y2="410"
            stroke={
              activeKey === "people"
                ? "#0071e3"
                : activeKey === "property"
                ? "#dc2626"
                : "rgba(0,113,227,0.18)"
            }
            strokeWidth={activeKey === "people" || activeKey === "property" ? "2.5" : "1.5"}
            style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
          />
          {/* Horizontal line: Planet (left) to Process (right) */}
          <line
            x1="60"
            y1="240"
            x2="460"
            y2="240"
            stroke={
              activeKey === "planet"
                ? "#107c41"
                : activeKey === "process"
                ? "#d97706"
                : "rgba(16,124,65,0.18)"
            }
            strokeWidth={activeKey === "planet" || activeKey === "process" ? "2.5" : "1.5"}
            style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
          />
        </svg>

        {/* Central Liquid Glass Core Sphere */}
        <div
          className="core-liquid-sphere"
          id="coreSphere"
          title={activePillar ? `${activePillar.title} Active • Click to reset` : "SPARSH 4P Core"}
          onClick={handleCenterClick}
          style={{
            borderColor: activePillar ? activePillar.color : "rgba(255, 255, 255, 0.98)",
            boxShadow: activePillar
              ? `0 18px 46px ${activePillar.glowColor}, 0 0 0 6px rgba(255, 255, 255, 0.9), inset 0 2px 4px rgba(255, 255, 255, 1)`
              : undefined,
            transform: activePillar ? "scale(1.05)" : undefined,
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {activePillar ? (
            <>
              <span
                className="core-sphere-brand"
                style={{
                  color: activePillar.color,
                  WebkitTextFillColor: activePillar.color,
                  fontSize: activePillar.title.length > 7 ? "1.05rem" : "1.2rem",
                  transition: "color 0.2s ease",
                }}
              >
                {activePillar.title}
              </span>
              <span
                className="core-sphere-label"
                style={{
                  color: activePillar.color,
                  fontSize: "0.58rem",
                  letterSpacing: "0.05em",
                  maxWidth: "96px",
                  lineHeight: 1.25,
                  textAlign: "center",
                  marginTop: 3,
                  transition: "color 0.2s ease",
                }}
              >
                {activePillar.label}
              </span>
            </>
          ) : (
            <>
              <span className="core-sphere-brand">SPARSH</span>
              <span className="core-sphere-label">4P CORE</span>
            </>
          )}
        </div>

        {/* 4 Orbit Nodes */}
        {/* 1. People (Top) */}
        <div
          className={`orbit-node node-people ${activeKey === "people" ? "active" : ""}`}
          data-pillar="people"
          onClick={() => handleNodeClick("people")}
          onMouseEnter={() => setHoveredPillar("people")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "people" ? PILLARS.people.color : undefined,
            boxShadow:
              activeKey === "people"
                ? `0 14px 34px ${PILLARS.people.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
                : undefined,
            transform:
              activeKey === "people"
                ? PILLARS.people.activeTransform
                : PILLARS.people.baseTransform,
            zIndex: activeKey === "people" ? 30 : 20,
          }}
        >
          <div className="orbit-node-icon">
            <Users style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PEOPLE</div>
            <div className="node-sub">Zero Harm Mindset</div>
          </div>
        </div>

        {/* 2. Process (Right) */}
        <div
          className={`orbit-node node-process ${activeKey === "process" ? "active" : ""}`}
          data-pillar="process"
          onClick={() => handleNodeClick("process")}
          onMouseEnter={() => setHoveredPillar("process")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "process" ? PILLARS.process.color : undefined,
            boxShadow:
              activeKey === "process"
                ? `0 14px 34px ${PILLARS.process.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
                : undefined,
            transform:
              activeKey === "process"
                ? PILLARS.process.activeTransform
                : PILLARS.process.baseTransform,
            zIndex: activeKey === "process" ? 30 : 20,
          }}
        >
          <div className="orbit-node-icon">
            <Cog style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PROCESS</div>
            <div className="node-sub">PSM & Risk Control</div>
          </div>
        </div>

        {/* 3. Property (Bottom) */}
        <div
          className={`orbit-node node-property ${activeKey === "property" ? "active" : ""}`}
          data-pillar="property"
          onClick={() => handleNodeClick("property")}
          onMouseEnter={() => setHoveredPillar("property")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "property" ? PILLARS.property.color : undefined,
            boxShadow:
              activeKey === "property"
                ? `0 14px 34px ${PILLARS.property.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
                : undefined,
            transform:
              activeKey === "property"
                ? PILLARS.property.activeTransform
                : PILLARS.property.baseTransform,
            zIndex: activeKey === "property" ? 30 : 20,
          }}
        >
          <div className="orbit-node-icon">
            <ShieldCheck style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PROPERTY</div>
            <div className="node-sub">Fire Protection</div>
          </div>
        </div>

        {/* 4. Planet (Left) */}
        <div
          className={`orbit-node node-planet ${activeKey === "planet" ? "active" : ""}`}
          data-pillar="planet"
          onClick={() => handleNodeClick("planet")}
          onMouseEnter={() => setHoveredPillar("planet")}
          onMouseLeave={() => setHoveredPillar(null)}
          style={{
            borderColor: activeKey === "planet" ? PILLARS.planet.color : undefined,
            boxShadow:
              activeKey === "planet"
                ? `0 14px 34px ${PILLARS.planet.glowColor}, 0 0 0 3px rgba(255, 255, 255, 0.98)`
                : undefined,
            transform:
              activeKey === "planet"
                ? PILLARS.planet.activeTransform
                : PILLARS.planet.baseTransform,
            zIndex: activeKey === "planet" ? 30 : 20,
          }}
        >
          <div className="orbit-node-icon">
            <Leaf style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PLANET</div>
            <div className="node-sub">ESG & Sustainability</div>
          </div>
        </div>
      </div>
    </div>
  );
}
