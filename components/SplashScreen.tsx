"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BRAND_NAME = "SETURAKSH";
const SUBTITLE_WORDS = [
  { text: "SUSTAINABLE", color: "#107c41" },
  { text: "•", color: "#0071e3", isDot: true },
  { text: "EngiSafe", color: "#2c2c2e" },
  { text: "Private", color: "#2c2c2e" },
  { text: "Limited", color: "#2c2c2e" },
];

const SERVICES = [
  {
    id: "ehs",
    line1: "EHS",
    line2: "CONSULTANCY",
    image: "/service-ehs.png",
    color: "#00843d",
    glow: "rgba(0, 132, 61, 0.32)",
  },
  {
    id: "fire",
    line1: "FIRE",
    line2: "SAFETY",
    image: "/service-fire.png",
    color: "#d9251d",
    glow: "rgba(217, 37, 29, 0.32)",
  },
  {
    id: "process",
    line1: "PROCESS",
    line2: "SAFETY",
    image: "/service-process.png",
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.32)",
  },
  {
    id: "env",
    line1: "ENVIRONMENT &",
    line2: "SUSTAINABILITY",
    image: "/service-env.png",
    color: "#0d8a43",
    glow: "rgba(13, 138, 67, 0.32)",
  },
  {
    id: "engineering",
    line1: "TOTAL",
    line2: "ENGINEERING",
    image: "/service-engineering.png",
    color: "#0066cc",
    glow: "rgba(0, 102, 204, 0.32)",
  },
  {
    id: "risk",
    line1: "RISK",
    line2: "MANAGEMENT",
    image: "/service-risk.png",
    color: "#7e22ce",
    glow: "rgba(126, 34, 206, 0.32)",
  },
];

export default function SplashScreen() {
  // Gated sequential stages:
  // 1. logo: Logo appears (100ms)
  // 2. title: SETURAKSH letter by letter (700ms)
  // 3. subtitle: SUSTAINABLE • EngiSafe Private Limited (1600ms)
  // 4. services: 6 rounded service badges one-by-one (2250ms)
  // 5. exit: smooth fade out (4100ms)
  // 6. done: unmount (4700ms)
  const [logoVisible, setLogoVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1. Logo appears
    const t1 = setTimeout(() => {
      setLogoVisible(true);
    }, 100);

    // 2. SETURAKSH begins letter-by-letter
    const t2 = setTimeout(() => {
      setTitleVisible(true);
    }, 700);

    // 3. Subtitle begins strictly after SETURAKSH finishes
    const t3 = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1550);

    // 4. Services begin strictly after subtitle is fully shown
    const t4 = setTimeout(() => {
      setServicesVisible(true);
    }, 2250);

    // 5. Smooth exit transition
    const t5 = setTimeout(() => {
      setIsExiting(true);
    }, 4200);

    // 6. Complete unmount
    const t6 = setTimeout(() => {
      setIsDone(true);
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  if (isDone) return null;

  return (
    <>
      <style>{`
        @keyframes splashLogoPop {
          0% {
            opacity: 0;
            transform: scale(0.72) translateY(14px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes splashLetterReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.85);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes splashWordReveal {
          0% {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes splashServicePop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.78);
            filter: blur(5px);
          }
          65% {
            opacity: 1;
            transform: translateY(-3px) scale(1.05);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes splashProgressBar {
          0% {
            width: 0%;
            opacity: 0.6;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes splashGlowPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.1);
          }
        }

        .splash-logo-anim {
          opacity: 0;
          animation: splashLogoPop 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .splash-char-anim {
          display: inline-block;
          opacity: 0;
          animation: splashLetterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .splash-word-anim {
          display: inline-block;
          opacity: 0;
          animation: splashWordReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .splash-service-item {
          opacity: 0;
          animation: splashServicePop 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .splash-progress-fill {
          width: 0%;
          animation: splashProgressBar 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .splash-ambient-glow {
          animation: splashGlowPulse 3s ease-in-out infinite;
        }

        /* Responsive services layout */
        .splash-services-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 12px;
          margin-top: 26px;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          max-width: 96vw;
        }

        .splash-service-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 8px;
          min-width: 78px;
        }

        .splash-service-divider {
          width: 1px;
          height: 60px;
          background: rgba(0, 0, 0, 0.08);
          align-self: center;
        }

        @media (max-width: 768px) {
          .splash-services-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px 8px;
            padding: 12px 10px;
          }
          .splash-service-divider {
            display: none;
          }
          .splash-service-col {
            min-width: unset;
            padding: 0 2px;
          }
        }
      `}</style>

      <div
        aria-label="SETURAKSH Splash Screen"
        className="splash-screen-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f7",
          background: "radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f6f7f9 60%, #eceef1 100%)",
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? "scale(1.03)" : "scale(1)",
          filter: isExiting ? "blur(6px)" : "blur(0px)",
          pointerEvents: isExiting ? "none" : "all",
          transition: "opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease",
          userSelect: "none",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Ambient Brand Light Aura Blobs */}
        <div
          className="splash-ambient-glow"
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 113, 227, 0.16) 0%, rgba(16, 124, 65, 0.12) 50%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Main Content Box */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px 16px",
            maxWidth: "96vw",
          }}
        >
          {/* Step 1: Logo Emblem */}
          <div
            className={logoVisible ? "splash-logo-anim" : ""}
            style={{
              position: "relative",
              width: 110,
              height: 110,
              opacity: logoVisible ? 1 : 0,
              filter: "drop-shadow(0 14px 28px rgba(0, 113, 227, 0.22)) drop-shadow(0 4px 10px rgba(16, 124, 65, 0.18))",
            }}
          >
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo"
              width={110}
              height={110}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Typography Container */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Step 2: Upper Text - SETURAKSH (Letter-by-Letter) */}
            <h1
              style={{
                margin: 0,
                minHeight: "2.4rem",
                fontFamily: "var(--font-display, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif)",
                fontSize: "clamp(1.75rem, 4.8vw, 2.3rem)",
                fontWeight: 850,
                letterSpacing: "0.15em",
                lineHeight: 1.15,
                color: "#1d1d1f",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {titleVisible &&
                BRAND_NAME.split("").map((char, index) => {
                  const delay = index * 0.06;
                  return (
                    <span
                      key={index}
                      className="splash-char-anim"
                      style={{
                        animationDelay: `${delay}s`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
            </h1>

            {/* Step 3: Lower Text - SUSTAINABLE • EngiSafe Private Limited (Word-by-Word ONLY AFTER SETURAKSH) */}
            <div
              style={{
                margin: "8px 0 0",
                minHeight: "1.3rem",
                fontFamily: "var(--font-main, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif)",
                fontSize: "clamp(0.70rem, 2vw, 0.84rem)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              {subtitleVisible &&
                SUBTITLE_WORDS.map((item, index) => {
                  const delay = index * 0.11;
                  return (
                    <span
                      key={index}
                      className="splash-word-anim"
                      style={{
                        color: item.color,
                        fontSize: item.isDot ? "0.85em" : "1em",
                        animationDelay: `${delay}s`,
                      }}
                    >
                      {item.text}
                    </span>
                  );
                })}
            </div>
          </div>

          {/* Step 4: 6 Rounded Services (Shown one-by-one after subtitle) */}
          {servicesVisible && (
            <div className="splash-services-container">
              {SERVICES.map((srv, index) => {
                const delay = index * 0.15;
                const isLast = index === SERVICES.length - 1;
                return (
                  <React.Fragment key={srv.id}>
                    <div
                      className="splash-service-col splash-service-item"
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {/* Rounded Circle Icon with 3D drop shadow */}
                      <div
                        style={{
                          width: "clamp(46px, 6vw, 54px)",
                          height: "clamp(46px, 6vw, 54px)",
                          borderRadius: "50%",
                          position: "relative",
                          filter: `drop-shadow(0 6px 14px ${srv.glow})`,
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <Image
                          src={srv.image}
                          alt={srv.line1 + " " + srv.line2}
                          width={54}
                          height={54}
                          priority
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "50%",
                          }}
                        />
                      </div>

                      {/* Service Title */}
                      <div
                        style={{
                          marginTop: 8,
                          fontFamily: "var(--font-display, -apple-system, sans-serif)",
                          fontSize: "clamp(0.56rem, 1.3vw, 0.66rem)",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          lineHeight: 1.25,
                          color: srv.color,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <div>{srv.line1}</div>
                        <div>{srv.line2}</div>
                      </div>
                    </div>

                    {!isLast && <div className="splash-service-divider" />}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Step 5: Sleek Progress Bar Indicator */}
          <div
            style={{
              marginTop: 20,
              width: 160,
              height: 3,
              borderRadius: 3,
              background: "rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              position: "relative",
              opacity: servicesVisible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {servicesVisible && (
              <div
                className="splash-progress-fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  background: "linear-gradient(90deg, #00843d 0%, #0071e3 50%, #7e22ce 100%)",
                  borderRadius: 3,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
