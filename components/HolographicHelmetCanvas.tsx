"use client";

import React, { useRef, useEffect } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  isRidge?: boolean;
  isBrim?: boolean;
}

export default function HolographicHelmetCanvas({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Resize handler with DevicePixelRatio for crisp Retina display
    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // 1. Generate 3D Safety Helmet Geometry (Lining Dots & Wireframe)
    const points: Point3D[] = [];
    const lines: [number, number][] = [];

    const latBands = 8;
    const lonBands = 18;
    // Scale helmet size relative to screen
    const rx = 145; // Width
    const ry = 175; // Front-to-back length
    const rz = 110; // Height

    // A. Dome / Crown grid
    for (let lat = 0; lat <= latBands; lat++) {
      const theta = (lat * Math.PI) / (2 * latBands); // 0 (apex) to PI/2 (base)
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      for (let lon = 0; lon < lonBands; lon++) {
        const phi = (lon * 2 * Math.PI) / lonBands;
        let x = rx * sinT * Math.cos(phi);
        let y = ry * sinT * Math.sin(phi);

        // Center structural reinforced ridge on top of helmet
        const isCenter = Math.abs(x) < 24;
        const ridge = isCenter ? (24 - Math.abs(x)) * 0.5 * cosT : 0;
        let z = rz * cosT + ridge - 12;

        const idx = points.length;
        points.push({
          x,
          y,
          z,
          isRidge: isCenter && lat <= 4,
        });

        // Longitudinal line
        if (lon > 0) {
          lines.push([idx - 1, idx]);
        } else {
          lines.push([idx + lonBands - 1, idx]);
        }

        // Latitudinal line
        if (lat > 0) {
          lines.push([idx - lonBands, idx]);
        }
      }
    }

    // B. Protruding Brim / Peak (with prominent front visor)
    const brimBands = 22;
    const brimStartIndex = points.length;
    for (let i = 0; i < brimBands; i++) {
      const phi = (i * 2 * Math.PI) / brimBands;
      const isFront = Math.sin(phi) > 0;
      // Front visor extends forward like a real safety hard hat
      const forwardExtend = isFront ? Math.sin(phi) * 52 : 14;
      const x = (rx + 24) * Math.cos(phi);
      const y = (ry + 24 + forwardExtend) * Math.sin(phi);
      const z = -22 - (isFront ? 8 : 0);

      const idx = points.length;
      points.push({ x, y, z, isBrim: true });

      if (i > 0) {
        lines.push([idx - 1, idx]);
      } else {
        lines.push([brimStartIndex + brimBands - 1, idx]);
      }

      // Connect brim to lower dome edge
      const domeBaseIdx = latBands * lonBands + Math.floor((i / brimBands) * lonBands);
      lines.push([idx, domeBaseIdx]);
    }

    // C. Floating Telemetry Particles (sparkling dots)
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 500,
      z: (Math.random() - 0.5) * 350,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    // Mouse Tracking State
    let targetRotX = 0.25; // Default slight tilt downwards
    let targetRotY = -0.3; // Default slight 3/4 angle
    let currentRotX = 0.25;
    let currentRotY = -0.3;
    let autoSpin = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate normalized rotation [-1 to 1]
      const nx = (mouseX / rect.width - 0.5) * 2;
      const ny = (mouseY / rect.height - 0.5) * 2;

      // Horizontal cursor movement rotates helmet yaw (Y-axis)
      targetRotY = nx * 1.25;
      // Vertical cursor movement tilts helmet pitch (X-axis)
      targetRotX = -ny * 0.85 + 0.2;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // 2. Animation Render Loop (60 FPS)
    let time = 0;
    const render = () => {
      time += 0.016;
      autoSpin += 0.003;

      // Smooth lerp damping for organic fluid rotation
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Center of the 3D world (positioned subtly higher in the section background)
      const centerX = width * 0.5;
      const centerY = height * 0.32;
      const cameraDist = 580;

      // Rotation angles: mix interactive cursor with gentle ambient drift
      const rxRad = currentRotX;
      const ryRad = currentRotY + Math.sin(autoSpin * 0.5) * 0.12;
      const rzRad = Math.sin(time * 0.6) * 0.05; // gentle breathing tilt

      const cosX = Math.cos(rxRad), sinX = Math.sin(rxRad);
      const cosY = Math.cos(ryRad), sinY = Math.sin(ryRad);
      const cosZ = Math.cos(rzRad), sinZ = Math.sin(rzRad);

      // Project all 3D points to 2D screen coordinates
      const projected = points.map((p) => {
        // 1. Rotate Y (Yaw)
        let x1 = p.x * cosY + p.y * sinY;
        let y1 = -p.x * sinY + p.y * cosY;
        let z1 = p.z;

        // 2. Rotate X (Pitch)
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // 3. Rotate Z (Tilt)
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective Projection
        const scale = cameraDist / (cameraDist + z3 + 120);
        const px = centerX + x3 * scale;
        const py = centerY - y3 * scale;

        return {
          px,
          py,
          scale,
          depth: z3,
          isRidge: p.isRidge,
          isBrim: p.isBrim,
        };
      });

      // A. Draw Glowing Wireframe Connecting Lines
      ctx.lineWidth = 1;
      for (let i = 0; i < lines.length; i++) {
        const [idxA, idxB] = lines[i];
        const pA = projected[idxA];
        const pB = projected[idxB];

        // Depth cue: alpha based on average depth (closer lines are brighter)
        const avgDepth = (pA.depth + pB.depth) * 0.5;
        const depthNorm = Math.max(0.1, Math.min(1, (avgDepth + 180) / 360));
        const alpha = 0.12 + depthNorm * 0.42;

        // Ridge lines are ruby red; brim is cyan laser; dome is technical cyan/blue
        const isRidgeLine = pA.isRidge && pB.isRidge;
        const isBrimLine = pA.isBrim && pB.isBrim;

        ctx.beginPath();
        if (isRidgeLine) {
          ctx.strokeStyle = `rgba(255, 77, 79, ${alpha * 1.3})`;
          ctx.lineWidth = 1.6;
        } else if (isBrimLine) {
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 1.2})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.75})`;
          ctx.lineWidth = 0.9;
        }

        ctx.moveTo(pA.px, pA.py);
        ctx.lineTo(pB.px, pB.py);
        ctx.stroke();
      }

      // B. Draw Vertex "Lining Dots" with Depth Glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthNorm = Math.max(0.15, Math.min(1, (p.depth + 180) / 360));
        const alpha = 0.25 + depthNorm * 0.75;
        const dotRadius = Math.max(1.2, (p.isRidge ? 2.8 : p.isBrim ? 2.4 : 1.8) * p.scale);

        ctx.beginPath();
        ctx.arc(p.px, p.py, dotRadius, 0, Math.PI * 2);

        if (p.isRidge) {
          ctx.fillStyle = `rgba(255, 77, 79, ${alpha})`;
          // Specular halo around ridge dots
          ctx.shadowColor = "#ff4d4f";
          ctx.shadowBlur = 8;
        } else if (p.isBrim) {
          ctx.fillStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.shadowColor = "#00f2fe";
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(224, 242, 254, ${alpha * 0.9})`;
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for performance
      }

      // C. Orbiting Holographic Target / Calibration Ring
      const ringRadius = 230;
      const ringPoints = 32;
      ctx.beginPath();
      for (let j = 0; j <= ringPoints; j++) {
        const phi = (j * 2 * Math.PI) / ringPoints;
        const rx = ringRadius * Math.cos(phi);
        const ry = ringRadius * Math.sin(phi);
        const rz = Math.sin(phi * 2 + time) * 15;

        // Apply same rotation
        let x1 = rx * cosY + ry * sinY;
        let y1 = -rx * sinY + ry * cosY;
        let z1 = rz;

        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        const scale = cameraDist / (cameraDist + z2 + 120);
        const px = centerX + x2 * scale;
        const py = centerY - y2 * scale;

        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "rgba(0, 242, 254, 0.18)";
      ctx.setLineDash([4, 6]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]); // reset dash

      // D. Draw Floating Data Particles
      for (let k = 0; k < particles.length; k++) {
        const pt = particles[k];
        const pulse = Math.sin(time * 2 + pt.phase) * 0.5 + 0.5;

        // Rotate with slight parallax
        let x1 = pt.x * Math.cos(ryRad * 0.4) + pt.y * Math.sin(ryRad * 0.4);
        let y1 = -pt.x * Math.sin(ryRad * 0.4) + pt.y * Math.cos(ryRad * 0.4);
        let z1 = pt.z;

        let y2 = y1 * Math.cos(rxRad * 0.4) - z1 * Math.sin(rxRad * 0.4);
        let z2 = y1 * Math.sin(rxRad * 0.4) + z1 * Math.cos(rxRad * 0.4);

        const scale = cameraDist / (cameraDist + z2 + 140);
        const px = centerX + x1 * scale;
        const py = centerY - y2 * scale;

        ctx.beginPath();
        ctx.arc(px, py, pt.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.15 + pulse * 0.45})`;
        ctx.fill();
      }

      // E. Subtle Cyber Industrial Telemetry HUD Labels
      ctx.font = "800 10px -apple-system, BlinkMacSystemFont, monospace";
      ctx.fillStyle = "rgba(0, 242, 254, 0.35)";
      ctx.fillText(`[SETURAKSH 3D HARD-HAT DIGITAL TWIN • 60 FPS]`, centerX - 140, centerY + 190);
      ctx.fillStyle = "rgba(255, 77, 79, 0.35)";
      ctx.fillText(
        `[YAW: ${(ryRad * (180 / Math.PI)).toFixed(1)}° | PITCH: ${(rxRad * (180 / Math.PI)).toFixed(1)}° • CURSOR TRACKING]`,
        centerX - 135,
        centerY + 206
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.92,
      }}
    />
  );
}
