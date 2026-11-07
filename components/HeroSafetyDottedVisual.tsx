"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Flame, Shield, Sparkles, RefreshCw } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  r: number;
  color: string;
}

export default function HeroSafetyDottedVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Active shape: 0 = Fire Extinguisher, 1 = Safety Helmet
  const [activeShape, setActiveShape] = useState<0 | 1>(0);
  const activeShapeRef = useRef<0 | 1>(0);
  activeShapeRef.current = activeShape;

  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to canvas center
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false, speed: 0, lastX: 0, lastY: 0 });
  const rotRef = useRef({ x: -0.1, y: 0.2, targetX: -0.1, targetY: 0.2, vx: 0, vy: 0 });
  const morphProgressRef = useRef(0); // 0 = Extinguisher, 1 = Helmet
  const targetMorphRef = useRef(0);

  // Toggle shape function
  const toggleShape = useCallback((forced?: 0 | 1) => {
    const next = forced !== undefined ? forced : activeShapeRef.current === 0 ? 1 : 0;
    setActiveShape(next);
    targetMorphRef.current = next;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isDestroyed = false;

    // -------------------------------------------------------------
    // 1. GENERATE DOTTED 3D POINT CLOUDS (N = 360 points)
    // -------------------------------------------------------------
    const TOTAL_POINTS = 380;
    const extinguisherPoints: Point3D[] = [];
    const helmetPoints: Point3D[] = [];

    // --- A. FIRE EXTINGUISHER (Shape 0) ---
    // 1. Main cylindrical pressure vessel (150 dots)
    const vesselHeights = 15;
    const vesselRad = 28;
    for (let h = 0; h < vesselHeights; h++) {
      const y = -22 + (h / (vesselHeights - 1)) * 82; // -22 to 60
      const countPerRing = 10;
      for (let c = 0; c < countPerRing; c++) {
        const theta = (c / countPerRing) * Math.PI * 2;
        const x = vesselRad * Math.cos(theta);
        const z = vesselRad * Math.sin(theta);
        // Signature Seturaksh safety ruby red with front white label stripe
        const isLabel = z > 16 && y > 5 && y < 45 && Math.abs(x) < 18;
        const color = isLabel ? "#ffffff" : c % 3 === 0 ? "#ff2a38" : "#c20101";
        extinguisherPoints.push({ x, y, z, r: isLabel ? 2.3 : 2.0, color });
      }
    }

    // 2. Rounded bottom base & stand ring (36 dots)
    for (let i = 0; i < 36; i++) {
      const theta = (i / 36) * Math.PI * 2;
      const rRing = 29.5;
      const y = 62 + (i % 2) * 6;
      extinguisherPoints.push({
        x: rRing * Math.cos(theta),
        y,
        z: rRing * Math.sin(theta),
        r: 1.8,
        color: "#1d1d1f",
      });
    }

    // 3. Curved top dome shoulder (48 dots)
    const domeRings = 4;
    for (let d = 0; d < domeRings; d++) {
      const ratio = (d + 1) / (domeRings + 1);
      const y = -22 - ratio * 18; // -26 to -38
      const rDome = vesselRad * Math.cos(ratio * (Math.PI / 2.2));
      const count = 12;
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        extinguisherPoints.push({
          x: rDome * Math.cos(theta),
          y,
          z: rDome * Math.sin(theta),
          r: 2.1,
          color: "#e50914",
        });
      }
    }

    // 4. Valve collar, pressure gauge & lever head (66 dots)
    // Neck collar
    for (let i = 0; i < 16; i++) {
      const theta = (i / 16) * Math.PI * 2;
      extinguisherPoints.push({
        x: 8 * Math.cos(theta),
        y: -42 + (i % 2) * 5,
        z: 8 * Math.sin(theta),
        r: 1.9,
        color: "#eab308", // Brass valve
      });
    }
    // Pressure Gauge (dial on side)
    for (let i = 0; i < 14; i++) {
      const theta = (i / 14) * Math.PI * 2;
      extinguisherPoints.push({
        x: -16 + 5 * Math.cos(theta),
        y: -44 + 5 * Math.sin(theta),
        z: 8,
        r: 1.6,
        color: i === 0 ? "#22c55e" : "#f8fafc",
      });
    }
    // Squeeze trigger levers (upper & lower handle)
    for (let i = 0; i < 18; i++) {
      const t = i / 17;
      // Lower fixed carry handle
      extinguisherPoints.push({
        x: 2 + t * 24,
        y: -47 - t * 3,
        z: (i % 2 === 0 ? 2 : -2),
        r: 2.0,
        color: "#1d1d1f",
      });
    }
    for (let i = 0; i < 18; i++) {
      const t = i / 17;
      // Upper squeeze discharge lever
      extinguisherPoints.push({
        x: 2 + t * 22,
        y: -55 + t * 3,
        z: (i % 2 === 0 ? 2 : -2),
        r: 2.2,
        color: "#e50914",
      });
    }

    // 5. Discharge hose and horn nozzle (80 dots)
    for (let i = 0; i < 44; i++) {
      const t = i / 43;
      // Hose loops out from valve, curves down alongside body
      const hx = 6 + Math.sin(t * Math.PI * 0.95) * 28;
      const hy = -45 + t * 78;
      const hz = 14 + Math.sin(t * Math.PI) * 12;
      extinguisherPoints.push({
        x: hx,
        y: hy,
        z: hz,
        r: 2.0,
        color: "#334155", // Heavy black/slate rubber hose
      });
    }
    // Nozzle horn cone
    for (let i = 0; i < 36; i++) {
      const t = i / 35;
      const coneR = 3 + t * 7;
      const angle = (i % 6 / 6) * Math.PI * 2;
      extinguisherPoints.push({
        x: 32 + coneR * Math.cos(angle),
        y: 32 + t * 24,
        z: 14 + coneR * Math.sin(angle),
        r: 2.1,
        color: "#0f172a",
      });
    }

    // Fill remaining points to reach TOTAL_POINTS exactly
    while (extinguisherPoints.length < TOTAL_POINTS) {
      const randIdx = Math.floor(Math.random() * 150);
      const base = extinguisherPoints[randIdx];
      extinguisherPoints.push({
        x: base.x + (Math.random() - 0.5) * 3,
        y: base.y + (Math.random() - 0.5) * 3,
        z: base.z + (Math.random() - 0.5) * 3,
        r: 1.5,
        color: "#ef4444",
      });
    }

    // --- B. SAFETY HARD HAT / HELMET (Shape 1) ---
    // 1. Smooth protective dome crown (180 dots)
    const latBands = 12;
    for (let lat = 0; lat < latBands; lat++) {
      const phi = (lat / (latBands - 1)) * (Math.PI * 0.48); // 0 at top to pi/2 at base
      const y = -14 - Math.cos(phi) * 44; // -58 at top to -14 at rim
      const ringR_x = Math.sin(phi) * 58;
      const ringR_z = Math.sin(phi) * 46;
      const count = Math.max(8, Math.round(Math.sin(phi) * 22));

      for (let c = 0; c < count; c++) {
        const theta = (c / count) * Math.PI * 2;
        const x = ringR_x * Math.cos(theta);
        const z = ringR_z * Math.sin(theta);
        // Amber safety helmet color palette with bright highlights
        const isHighlight = Math.abs(x) < 8 || y < -48;
        const color = isHighlight ? "#ffedd5" : (c % 2 === 0 ? "#f59e0b" : "#ea580c");
        helmetPoints.push({ x, y, z, r: isHighlight ? 2.4 : 2.0, color });
      }
    }

    // 2. Central Structural Impact Spine / Ridge (42 dots)
    for (let i = 0; i < 42; i++) {
      const t = i / 41;
      const phi = t * (Math.PI * 0.48);
      const y = -16 - Math.cos(phi) * 48; // Elevates 4px above dome
      const z = Math.sin(phi) * 48 * (i % 2 === 0 ? 1 : -1);
      const x = (i % 3 - 1) * 3;
      helmetPoints.push({
        x,
        y,
        z,
        r: 2.2,
        color: "#ffffff", // Crisp white central safety ridge
      });
    }

    // 3. Extended Front Sun Brim / Visor (78 dots)
    for (let i = 0; i < 78; i++) {
      const angle = -Math.PI * 0.45 + (i / 77) * (Math.PI * 0.9);
      const brimReach = 60 + Math.cos(angle * 1.1) * 14;
      const x = brimReach * Math.sin(angle);
      const z = 18 + brimReach * Math.cos(angle) * 0.75;
      const y = -10 + Math.sin(angle * 2) * 3 + (i % 2) * 4;
      helmetPoints.push({
        x,
        y,
        z,
        r: 2.2,
        color: i % 4 === 0 ? "#fbbf24" : "#d97706",
      });
    }

    // 4. Circumference Lower Lip & Suspension Headband (50 dots)
    for (let i = 0; i < 50; i++) {
      const theta = (i / 50) * Math.PI * 2;
      const x = 58 * Math.cos(theta);
      const z = 47 * Math.sin(theta);
      const y = -6 + (i % 2) * 5;
      helmetPoints.push({
        x,
        y,
        z,
        r: 1.8,
        color: "#475569",
      });
    }

    // 5. Front Seturaksh Ruby Shield Emblem on Helmet (30 dots)
    for (let i = 0; i < 30; i++) {
      const row = Math.floor(i / 6);
      const col = i % 6;
      const x = (col - 2.5) * 4.5;
      const y = -36 + row * 4;
      const z = 44 - Math.abs(x) * 0.3;
      helmetPoints.push({
        x,
        y,
        z,
        r: 2.3,
        color: "#c20101", // Red Seturaksh safety emblem
      });
    }

    // Fill remaining points to reach TOTAL_POINTS exactly
    while (helmetPoints.length < TOTAL_POINTS) {
      const randIdx = Math.floor(Math.random() * 100);
      const base = helmetPoints[randIdx];
      helmetPoints.push({
        x: base.x + (Math.random() - 0.5) * 4,
        y: base.y + (Math.random() - 0.5) * 4,
        z: base.z + (Math.random() - 0.5) * 4,
        r: 1.6,
        color: "#f59e0b",
      });
    }

    // Trim arrays to exact same length
    extinguisherPoints.length = TOTAL_POINTS;
    helmetPoints.length = TOTAL_POINTS;

    // -------------------------------------------------------------
    // 2. DYNAMIC RUNTIME PARTICLE STATES
    // -------------------------------------------------------------
    interface Particle {
      currX: number;
      currY: number;
      currZ: number;
      vx: number;
      vy: number;
      vz: number;
      displaceX: number;
      displaceY: number;
      displaceVx: number;
      displaceVy: number;
      radius: number;
      pulseOffset: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < TOTAL_POINTS; i++) {
      const p0 = extinguisherPoints[i];
      particles.push({
        currX: p0.x,
        currY: p0.y,
        currZ: p0.z,
        vx: 0,
        vy: 0,
        vz: 0,
        displaceX: 0,
        displaceY: 0,
        displaceVx: 0,
        displaceVy: 0,
        radius: p0.r,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Resize Canvas for Retina High-DPI Display
    const updateCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 2, 2.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    updateCanvasDimensions();

    window.addEventListener("resize", updateCanvasDimensions);

    // -------------------------------------------------------------
    // 3. CURSOR MOVEMENT & PARALLAX TRACKING
    // -------------------------------------------------------------
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);

      const m = mouseRef.current;
      m.targetX = x;
      m.targetY = y;
      m.active = true;

      // Calculate cursor speed for dynamic particle excitation
      const dx = x - m.lastX;
      const dy = y - m.lastY;
      m.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
      m.lastX = x;
      m.lastY = y;

      // 3D Parallax tilt from cursor offset
      const rot = rotRef.current;
      rot.targetY = (x / (rect.width / 2)) * 0.65;
      rot.targetX = -(y / (rect.height / 2)) * 0.45;

      // Fast cursor swipe / trigger toggles model on deliberate movement
      if (m.speed > 28 && Math.abs(x) < rect.width * 0.4) {
        // Toggle if swipe threshold met
        if (Math.random() < 0.08) {
          toggleShape();
        }
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      rotRef.current.targetX = -0.05;
      rotRef.current.targetY = 0.15;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    canvas.addEventListener("mouseleave", handlePointerLeave);

    // Auto-toggle model every 6 seconds if user is idle
    const autoToggleInterval = setInterval(() => {
      if (!mouseRef.current.active) {
        toggleShape();
      }
    }, 6000);

    // -------------------------------------------------------------
    // 4. MAIN RENDER LOOP (60FPS Particle Physics + Canvas Draw)
    // -------------------------------------------------------------
    let lastTime = performance.now();

    const render = (time: number) => {
      if (isDestroyed) return;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate easing
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.14;
      m.y += (m.targetY - m.y) * 0.14;
      m.speed *= 0.92;

      // Smooth rotation spring physics
      const rot = rotRef.current;
      // Gentle idle turntable rotation when mouse is still
      if (!m.active) {
        rot.targetY += 0.0035;
      }
      rot.x += (rot.targetX - rot.x) * 0.1;
      rot.y += (rot.targetY - rot.y) * 0.1;

      // Smooth Morph Interpolation (Cubic ease)
      const morphDiff = targetMorphRef.current - morphProgressRef.current;
      morphProgressRef.current += morphDiff * 0.065;
      const morph = Math.max(0, Math.min(1, morphProgressRef.current));

      // Perspective projection constants
      const cx = width / 2;
      const cy = height / 2 - 4;
      const fov = 340;

      const cosY = Math.cos(rot.y);
      const sinY = Math.sin(rot.y);
      const cosX = Math.cos(rot.x);
      const sinX = Math.sin(rot.x);

      // Project and draw each point
      interface ProjectedPoint {
        sx: number;
        sy: number;
        sz: number;
        r: number;
        color: string;
        alpha: number;
      }

      const projectedPoints: ProjectedPoint[] = [];

      for (let i = 0; i < TOTAL_POINTS; i++) {
        const p0 = extinguisherPoints[i];
        const p1 = helmetPoints[i];
        const part = particles[i];

        // Target 3D coordinate from current morph weight
        const targetX = p0.x + (p1.x - p0.x) * morph;
        const targetY = p0.y + (p1.y - p0.y) * morph;
        const targetZ = p0.z + (p1.z - p0.z) * morph;

        // Particle spring tracking toward target
        const fx = (targetX - part.currX) * 18;
        const fy = (targetY - part.currY) * 18;
        const fz = (targetZ - part.currZ) * 18;

        part.vx = (part.vx + fx * dt) * 0.82;
        part.vy = (part.vy + fy * dt) * 0.82;
        part.vz = (part.vz + fz * dt) * 0.82;

        part.currX += part.vx * dt;
        part.currY += part.vy * dt;
        part.currZ += part.vz * dt;

        // 3D Rotation Matrix: Yaw (Y) then Pitch (X)
        const x1 = part.currX * cosY + part.currZ * sinY;
        const z1 = -part.currX * sinY + part.currZ * cosY;

        const y2 = part.currY * cosX - z1 * sinX;
        const z2 = part.currY * sinX + z1 * cosX;

        // Perspective Projection
        const scale = fov / (fov + z2 + 80);
        let sx = cx + x1 * scale * 1.55;
        let sy = cy + y2 * scale * 1.55;

        // CURSOR MAGNETIC DISPLACEMENT / FLUID PUSH
        if (m.active) {
          const dx = sx - (cx + m.x);
          const dy = sy - (cy + m.y);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 75;

          if (dist < maxDist && dist > 0.01) {
            const force = (1 - dist / maxDist) * 36;
            part.displaceVx += (dx / dist) * force * 12 * dt;
            part.displaceVy += (dy / dist) * force * 12 * dt;
          }
        }

        // Return displacement with elastic damping
        part.displaceVx = (part.displaceVx - part.displaceX * 14 * dt) * 0.85;
        part.displaceVy = (part.displaceVy - part.displaceY * 14 * dt) * 0.85;
        part.displaceX += part.displaceVx * dt;
        part.displaceY += part.displaceVy * dt;

        sx += part.displaceX;
        sy += part.displaceY;

        // Interpolate point color & glow
        const c0 = p0.color;
        const c1 = p1.color;
        const activeColor = morph < 0.5 ? c0 : c1;

        // Depth cueing: dots closer to viewer are larger and more luminous
        const depthAlpha = Math.max(0.25, Math.min(1.0, 0.45 + (z2 + 50) / 100));
        const finalRadius = Math.max(1.2, part.radius * scale * 1.35);

        projectedPoints.push({
          sx,
          sy,
          sz: z2,
          r: finalRadius,
          color: activeColor,
          alpha: depthAlpha,
        });
      }

      // Sort back-to-front for proper depth overlap
      projectedPoints.sort((a, b) => a.sz - b.sz);

      // --- Draw faint neural CAD connections between nearby dots ---
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projectedPoints.length; i += 3) {
        const ptA = projectedPoints[i];
        for (let j = i + 1; j < Math.min(i + 8, projectedPoints.length); j++) {
          const ptB = projectedPoints[j];
          const ddx = ptA.sx - ptB.sx;
          const ddy = ptA.sy - ptB.sy;
          const dist2 = ddx * ddx + ddy * ddy;
          if (dist2 < 480) { // ~22px
            const lineAlpha = (1 - Math.sqrt(dist2) / 22) * 0.18 * ptA.alpha;
            ctx.strokeStyle = morph < 0.5 ? `rgba(229, 9, 20, ${lineAlpha})` : `rgba(245, 158, 11, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(ptA.sx, ptA.sy);
            ctx.lineTo(ptB.sx, ptB.sy);
            ctx.stroke();
          }
        }
      }

      // --- Draw Dotted Stippling Points ---
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];

        // Soft luminous point halo
        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.fillStyle = pt.color;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = pt.r > 2.0 ? 8 : 4;

        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, pt.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- Interactive Cursor Ripple Indicator when near ---
      if (m.active) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx + m.x, cy + m.y, 16 + (Math.sin(time * 0.008) + 1) * 6, 0, Math.PI * 2);
        ctx.strokeStyle = morph < 0.5 ? "rgba(229, 9, 20, 0.28)" : "rgba(245, 158, 11, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      clearInterval(autoToggleInterval);
      window.removeEventListener("resize", updateCanvasDimensions);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [toggleShape]);

  return (
    <div
      ref={containerRef}
      className="hero-dotted-widget-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 360,
        height: 380,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 1. Apple Liquid Glass Holographic Backdrop Disk */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 28,
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(246, 248, 252, 0.65) 100%)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.95)",
          boxShadow: isHovered
            ? "0 24px 50px -10px rgba(0, 0, 0, 0.12), 0 0 35px rgba(229, 9, 20, 0.15), inset 0 1px 2px #ffffff"
            : "0 16px 38px -8px rgba(0, 0, 0, 0.08), inset 0 1px 2px #ffffff",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            activeShape === 0
              ? "radial-gradient(circle, rgba(229, 9, 20, 0.14) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 70%)",
          filter: "blur(24px)",
          transition: "background 0.6s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top Spec Header Badge */}
      <div
        style={{
          position: "absolute",
          top: 14,
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "4px 12px",
          borderRadius: 9999,
          background: "rgba(255, 255, 255, 0.82)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          fontSize: "0.72rem",
          fontWeight: 850,
          letterSpacing: "0.08em",
          color: activeShape === 0 ? "#c20101" : "#d97706",
          textTransform: "uppercase",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          zIndex: 3,
          transition: "color 0.4s ease",
          cursor: "pointer",
        }}
        onClick={() => toggleShape()}
        title="Click to toggle model"
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: activeShape === 0 ? "#e50914" : "#f59e0b",
            boxShadow: activeShape === 0 ? "0 0 8px #e50914" : "0 0 8px #f59e0b",
          }}
        />
        <span>{activeShape === 0 ? "Point-Cloud: Extinguisher" : "Point-Cloud: Safety Helmet"}</span>
        <RefreshCw size={11} style={{ opacity: 0.65, transform: "rotate(45deg)" }} />
      </div>

      {/* 2. Interactive High-DPI Dotted Animation Canvas */}
      <canvas
        ref={canvasRef}
        onClick={() => toggleShape()}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          cursor: "grab",
          zIndex: 2,
        }}
        aria-label="Interactive 3D Dotted Safety Model of Fire Extinguisher and Helmet"
      />

      {/* 3. Bottom Model Switcher Pills (Interactive Click & Cursor Reactive) */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          padding: "4px 6px",
          borderRadius: 9999,
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
          zIndex: 3,
        }}
      >
        {/* Extinguisher Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleShape(0);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 12px",
            borderRadius: 9999,
            border: "none",
            fontSize: "0.72rem",
            fontWeight: 850,
            cursor: "pointer",
            background:
              activeShape === 0
                ? "linear-gradient(135deg, #e50914 0%, #c20101 100%)"
                : "transparent",
            color: activeShape === 0 ? "#ffffff" : "#424245",
            boxShadow: activeShape === 0 ? "0 2px 8px rgba(229, 9, 20, 0.35)" : "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Flame size={12} />
          <span>Extinguisher</span>
        </button>

        {/* Safety Helmet Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleShape(1);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 12px",
            borderRadius: 9999,
            border: "none",
            fontSize: "0.72rem",
            fontWeight: 850,
            cursor: "pointer",
            background:
              activeShape === 1
                ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                : "transparent",
            color: activeShape === 1 ? "#ffffff" : "#424245",
            boxShadow: activeShape === 1 ? "0 2px 8px rgba(245, 158, 11, 0.35)" : "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Shield size={12} />
          <span>Safety Helmet</span>
        </button>
      </div>

      {/* Minimal micro-hint on hover */}
      <div
        style={{
          position: "absolute",
          bottom: -22,
          fontSize: "0.68rem",
          fontWeight: 700,
          color: "#86868b",
          letterSpacing: "0.02em",
          pointerEvents: "none",
          transition: "opacity 0.25s ease",
          opacity: isHovered ? 1 : 0.75,
        }}
      >
        ✦ Move cursor to tilt &amp; morph
      </div>
    </div>
  );
}
