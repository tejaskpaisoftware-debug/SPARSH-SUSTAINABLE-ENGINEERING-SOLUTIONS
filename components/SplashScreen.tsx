"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1.6s for the liquid wave to fill inside the logo shape, then smooth fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1900);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2350);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
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
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: fading ? "scale(1.02)" : "scale(1)",
        pointerEvents: fading ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* Subtle Multi-Color Ambient Backlight (Green, Blue, Red spectrum from logo) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229, 9, 20, 0.09) 0%, rgba(10, 76, 143, 0.08) 45%, rgba(34, 197, 94, 0.07) 75%, transparent 100%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Center Brand Group - Sitting directly and cleanly on the #f5f5f7 canvas (NO square card/box) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Animated Multi-Color Logo - Filling Strictly INSIDE the Logo Contour */}
        <div
          style={{
            position: "relative",
            width: 104,
            height: 104,
          }}
        >
          {/* Base Layer: Logo Contour in Subtle Monochrome Outline */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: "grayscale(100%) contrast(110%) opacity(0.2)",
            }}
          >
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo Outline"
              fill
              sizes="104px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Color Fill Mask Container: Strictly Alpha-Clipped to the Logo Shape */}
          <div className="splash-logo-mask-container">
            {/* Liquid Wavy Color Fill (Rising from bottom to top inside the logo's multiple colors) */}
            <div className="splash-liquid-layer">
              <Image
                src="/seturaksh-logo.png"
                alt="SETURAKSH Logo Color Fill"
                fill
                sizes="104px"
                priority
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Glowing Liquid Wave Crest (Also strictly masked inside the logo contours) */}
            <div className="splash-wave-crest" />
          </div>
        </div>

        {/* Brand Typography */}
        <div style={{ textAlign: "center", marginTop: 4 }}>
          <div
            style={{
              fontSize: "1.55rem",
              fontWeight: 950,
              letterSpacing: "0.08em",
              color: "#1d1d1f",
              lineHeight: 1.15,
            }}
          >
            SETURAKSH
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 850,
              letterSpacing: "0.18em",
              color: "#c20101",
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            SUSTAINABLE ENGISAFE PVT. LTD.
          </div>
        </div>

        {/* Apple Minimalist Multi-Color Liquid Fill Indicator */}
        <div
          style={{
            width: 130,
            height: 3,
            borderRadius: 9999,
            background: "rgba(0, 0, 0, 0.06)",
            overflow: "hidden",
            position: "relative",
            marginTop: 6,
          }}
        >
          <div className="splash-progress-track" />
        </div>
      </div>

      <style jsx global>{`
        /* The Mask Container ensures ZERO pixel leaks outside the logo contour */
        .splash-logo-mask-container {
          position: absolute;
          inset: 0;
          -webkit-mask-image: url('/seturaksh-logo.png');
          mask-image: url('/seturaksh-logo.png');
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }

        /* Fluid Rising Liquid Wave Animation */
        @keyframes liquidWaveFill {
          0% {
            clip-path: polygon(
              0% 105%,
              25% 105%,
              50% 105%,
              75% 105%,
              100% 105%,
              100% 105%,
              0% 105%
            );
          }
          15% {
            clip-path: polygon(
              0% 86%,
              25% 82%,
              50% 88%,
              75% 83%,
              100% 86%,
              100% 105%,
              0% 105%
            );
          }
          45% {
            clip-path: polygon(
              0% 56%,
              25% 61%,
              50% 54%,
              75% 59%,
              100% 56%,
              100% 105%,
              0% 105%
            );
          }
          75% {
            clip-path: polygon(
              0% 26%,
              25% 21%,
              50% 28%,
              75% 22%,
              100% 26%,
              100% 105%,
              0% 105%
            );
          }
          95% {
            clip-path: polygon(
              0% 0%,
              25% -2%,
              50% 2%,
              75% -2%,
              100% 0%,
              100% 105%,
              0% 105%
            );
          }
          100% {
            clip-path: polygon(
              0% -5%,
              100% -5%,
              100% 105%,
              0% 105%
            );
          }
        }

        .splash-liquid-layer {
          position: absolute;
          inset: 0;
          animation: liquidWaveFill 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Luminous Liquid Surface Line - Waves across the rising level inside the logo */
        @keyframes waveCrestRise {
          0% {
            bottom: -8px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            bottom: 96%;
            opacity: 1;
          }
          100% {
            bottom: 104%;
            opacity: 0;
          }
        }

        .splash-wave-crest {
          position: absolute;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(
            90deg,
            rgba(34, 197, 94, 0.9) 0%,
            rgba(10, 76, 143, 0.95) 50%,
            rgba(229, 9, 20, 1) 100%
          );
          filter: blur(1.5px);
          animation: waveCrestRise 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          pointer-events: none;
        }

        /* Progress Bar Filling in sync */
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
          animation: splashProgressTrackAnim 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
