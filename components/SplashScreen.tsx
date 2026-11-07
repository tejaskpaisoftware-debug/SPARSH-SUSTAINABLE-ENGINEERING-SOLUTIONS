"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1.5s animated logo color fill, then smooth fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen-container ${fading ? "splash-fading" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f7",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: fading ? "scale(1.02)" : "scale(1)",
        pointerEvents: fading ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* Multi-Color Ambient Backlight Glow Matching Logo Spectrum */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229, 9, 20, 0.12) 0%, rgba(10, 76, 143, 0.1) 40%, rgba(34, 197, 94, 0.08) 70%, transparent 100%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "splashAuraPulse 2s ease-in-out infinite alternate",
        }}
      />

      {/* Floating Apple Liquid Frosted Glass Capsule */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(32px) saturate(210%)",
          WebkitBackdropFilter: "blur(32px) saturate(210%)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: 28,
          padding: "38px 48px",
          boxShadow: "0 24px 60px -12px rgba(0, 0, 0, 0.08), inset 0 1px 2px #ffffff",
        }}
      >
        {/* Animated Multi-Color Logo Fill Container */}
        <div
          style={{
            position: "relative",
            width: 86,
            height: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Base Layer: Subdued Grayscale Silhouette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: "grayscale(100%) contrast(120%) opacity(0.25)",
            }}
          >
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo Base"
              fill
              sizes="86px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Color Fill Layer: Full vibrant multi-color logo filling from bottom to top */}
          <div
            className="splash-color-fill"
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo"
              fill
              sizes="86px"
              priority
              style={{ objectFit: "contain" }}
            />

            {/* Rising Glowing Liquid Wave at the fill meniscus */}
            <div className="splash-fill-line" />
          </div>
        </div>

        {/* Brand Typography */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 950,
              letterSpacing: "0.08em",
              color: "#1d1d1f",
              lineHeight: 1.1,
            }}
          >
            SETURAKSH
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 850,
              letterSpacing: "0.18em",
              color: "#c20101",
              textTransform: "uppercase",
              marginTop: 5,
            }}
          >
            SUSTAINABLE ENGISAFE PVT. LTD.
          </div>
        </div>

        {/* Apple Frosted Multi-Color Progress Indicator */}
        <div
          style={{
            width: 140,
            height: 4,
            borderRadius: 9999,
            background: "rgba(0, 0, 0, 0.06)",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="splash-progress-track" />
        </div>
      </div>

      <style jsx global>{`
        /* Dynamic Multi-Color Filling Animation */
        @keyframes splashLogoRise {
          0% {
            clip-path: inset(100% 0 0 0);
          }
          15% {
            clip-path: inset(80% 0 0 0); /* Green base fills */
          }
          55% {
            clip-path: inset(35% 0 0 0); /* Blue shield fills */
          }
          85% {
            clip-path: inset(0 0 0 0); /* Red flame ignites */
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }

        .splash-color-fill {
          animation: splashLogoRise 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          filter: drop-shadow(0 4px 14px rgba(229, 9, 20, 0.25)) drop-shadow(0 2px 8px rgba(10, 76, 143, 0.2));
        }

        /* Luminous Liquid Wave Rising across logo */
        @keyframes splashWaveRise {
          0% {
            bottom: -6px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            bottom: calc(100% - 2px);
            opacity: 1;
          }
          100% {
            bottom: 105%;
            opacity: 0;
          }
        }

        .splash-fill-line {
          position: absolute;
          left: -15%;
          width: 130%;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            rgba(34, 197, 94, 0.8) 0%,
            rgba(10, 76, 143, 0.95) 45%,
            rgba(229, 9, 20, 1) 100%
          );
          box-shadow: 0 0 12px rgba(229, 9, 20, 0.7), 0 0 6px rgba(10, 76, 143, 0.5);
          animation: splashWaveRise 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          pointer-events: none;
        }

        /* Ambient Aura Pulsing */
        @keyframes splashAuraPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 1;
          }
        }

        /* Progress Bar Filling along with the logo */
        @keyframes splashProgressTrackAnim {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .splash-progress-track {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #22c55e 0%, #0a4c8f 50%, #e50914 100%);
          box-shadow: 0 0 8px rgba(229, 9, 20, 0.5);
          animation: splashProgressTrackAnim 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
