"use client";

import { Users, Cog, ShieldCheck, Leaf } from "lucide-react";

export default function ReactorStage() {
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
          <line
            x1="260"
            y1="70"
            x2="260"
            y2="410"
            stroke="rgba(0,113,227,0.15)"
            strokeWidth="1.5"
          />
          <line
            x1="60"
            y1="240"
            x2="460"
            y2="240"
            stroke="rgba(16,124,65,0.15)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Central Liquid Glass Core Sphere */}
        <div
          className="core-liquid-sphere"
          id="coreSphere"
          title="SPARSH Sustainable Core"
        >
          <span className="core-sphere-brand">SPARSH</span>
          <span className="core-sphere-label">4P CORE</span>
        </div>

        {/* 4 Orbit Nodes */}
        {/* 1. People (Top) */}
        <div className="orbit-node node-people" data-pillar="people">
          <div className="orbit-node-icon">
            <Users style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PEOPLE</div>
            <div className="node-sub">Zero Harm Mindset</div>
          </div>
        </div>

        {/* 2. Process (Right) */}
        <div className="orbit-node node-process" data-pillar="process">
          <div className="orbit-node-icon">
            <Cog style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PROCESS</div>
            <div className="node-sub">PSM & Risk Control</div>
          </div>
        </div>

        {/* 3. Property (Bottom) */}
        <div className="orbit-node node-property" data-pillar="property">
          <div className="orbit-node-icon">
            <ShieldCheck style={{ width: 16, height: 16 }} />
          </div>
          <div>
            <div className="node-title">PROPERTY</div>
            <div className="node-sub">Fire Protection</div>
          </div>
        </div>

        {/* 4. Planet (Left) */}
        <div className="orbit-node node-planet" data-pillar="planet">
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
