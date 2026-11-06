"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  shortName: string;
  image: string;
  firmBadge: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "chemical-process",
    shortName: "Chemical & Process",
    image: "/images/hero/seturaksh-ehs-chemical-plant-inspection.jpg",
    firmBadge: "SETURAKSH • CHEMICAL & PROCESS MANUFACTURING",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "PREVENTING PROCESS HAZARDS & SECURING CHEMICAL OPERATIONS",
    subtitle:
      "Chemical handling, process hazards, fire prevention and operational risk — engineered through statutory DISH audits, toxic dispersion analysis, HAZOP barrier protection, and active mitigation.",
    primaryCtaText: "SCHEDULE CHEMICAL AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "EXPLORE SERVICES",
    secondaryCtaLink: "/services?service=ehs",
  },
  {
    id: "pharma-api",
    shortName: "Pharmaceuticals & API",
    image: "/images/hero/seturaksh-pharmaceuticals-api-poster.jpg",
    firmBadge: "SETURAKSH • PHARMACEUTICALS & API SPECIALIZED EHS",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "EHS GOVERNANCE & PROCESS SAFETY FOR PHARMA & API",
    subtitle:
      "Plant EHS, contractor safety, process safety and compliance support — ensuring strict solvent recovery protection, containment safety, and statutory DISH/PESO readiness across manufacturing plants.",
    primaryCtaText: "SCHEDULE PHARMA AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "PSM SAFETY SUITE",
    secondaryCtaLink: "/services?service=process",
  },
  {
    id: "oil-gas-epc",
    shortName: "Oil, Gas & EPC",
    image: "/images/hero/seturaksh-oil-gas-epc-poster.jpg",
    firmBadge: "SETURAKSH • OIL, GAS, EPC & ENGINEERING",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "RISK RESILIENCE FOR OIL, GAS & HEAVY EPC MEGAPROJECTS",
    subtitle:
      "Project safety, PTW, construction risk and commissioning readiness — certified quantitative risk assessments (QRA), SIL allocation, and advanced fire engineering for industrial giants across Gujarat and Pan-India.",
    primaryCtaText: "SCHEDULE EPC AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "ENGINEERING SAFETY",
    secondaryCtaLink: "/services?service=engineering",
  },
  {
    id: "construction-infra",
    shortName: "Construction & Infra",
    image: "/images/hero/seturaksh-construction-infrastructure-poster.jpg",
    firmBadge: "SETURAKSH • CONSTRUCTION & INFRASTRUCTURE",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "ZERO-INCIDENT CONTROLS FOR CONSTRUCTION & INFRASTRUCTURE",
    subtitle:
      "Greenfield/brownfield projects, work at height and contractor controls — scaffolding load certification, structural rigging safety, deep excavation protection, and life-critical PTW execution.",
    primaryCtaText: "SCHEDULE SITE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WATCH FIELD DRILLS",
    secondaryCtaLink: "/#field-operations",
  },
  {
    id: "manufacturing-warehouse",
    shortName: "Manufacturing & Warehousing",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    firmBadge: "SETURAKSH • MANUFACTURING & WAREHOUSING",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "PROACTIVE RESILIENCE FOR MODERN WAREHOUSES & FACTORIES",
    subtitle:
      "Workplace safety, fire readiness, material handling and emergency planning — DISH Sections 28, 29, 31 statutory equipment testing, high-bay fire hydrant engineering, and 5S safety architecture.",
    primaryCtaText: "GET INSPECTION QUOTE",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WHY SETURAKSH",
    secondaryCtaLink: "/why-sparsh",
  },
  {
    id: "commercial-institutional",
    shortName: "Commercial & Institutional",
    image: "/images/hero/seturaksh-institutional-safety-poster.jpg",
    firmBadge: "SETURAKSH • COMMERCIAL & INSTITUTIONAL FACILITIES",
    categoryTag: "EXPERIENCE-INFORMED SOLUTIONS FOR COMPLEX & HIGH-RISK WORKPLACES",
    title: "LIFE SAFETY AUDITS FOR INSTITUTIONS & COMMERCIAL COMPLEXES",
    subtitle:
      "Fire risk awareness, evacuation planning and safety systems review — National Building Code (NBC 2016) compliance, emergency mock drills, and practical fire safety demonstrations for campuses and schools.",
    primaryCtaText: "SCHEDULE CAMPUS AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WATCH FIELD DEMOS",
    secondaryCtaLink: "/#field-operations",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isHovered, setIsHovered] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger smooth transition between slides
  const changeSlide = (newIndex: number, direction: "next" | "prev") => {
    if (newIndex === currentSlide || isTransitioning) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(newIndex);
    setSlideDirection(direction);
    setIsTransitioning(true);
    setAnimKey((k) => k + 1);

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevSlide(null);
    }, 950);
  };

  // Auto-advance slides every 6.8 seconds
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
      changeSlide(nextIndex, "next");
    }, 6800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isHovered, isTransitioning]);

  const goToPrev = () => {
    const prevIndex = currentSlide === 0 ? HERO_SLIDES.length - 1 : currentSlide - 1;
    changeSlide(prevIndex, "prev");
  };

  const goToNext = () => {
    const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
    changeSlide(nextIndex, "next");
  };

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    changeSlide(idx, idx > currentSlide ? "next" : "prev");
  };

  return (
    <div
      className="grspl-hero-slider-wrap"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#060b10",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Poster Panes with GRSPL Diagonal Wipe & 3D Depth Transitions */}
      {HERO_SLIDES.map((slide, index) => {
        const isCurrent = index === currentSlide;
        const isPrevious = index === prevSlide && isTransitioning;

        // If not current and not previous, hide completely
        if (!isCurrent && !isPrevious) return null;

        // Determine transition state classes
        let posterStateClass = "";
        let zIndex = 1;

        if (isCurrent && isTransitioning) {
          posterStateClass = `poster-entering enter-${slideDirection}`;
          zIndex = 3; // Above outgoing
        } else if (isCurrent && !isTransitioning) {
          posterStateClass = "poster-active-idle";
          zIndex = 2;
        } else if (isPrevious) {
          posterStateClass = `poster-exiting exit-${slideDirection}`;
          zIndex = 1;
        }

        return (
          <div
            key={`${slide.id}-${animKey}-${index}`}
            aria-hidden={!isCurrent}
            className={`hero-slide-pane ${posterStateClass}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex,
              pointerEvents: isCurrent ? "auto" : "none",
            }}
          >
            {/* 4K Multi-Sector Landscape Backdrop */}
            <div
              className="hero-poster-clipper"
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-poster-img"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 45%",
                }}
              />

              {/* Multi-Layered Cinematic Darkening Gradients */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(6, 11, 16, 0.95) 0%, rgba(6, 11, 16, 0.84) 48%, rgba(6, 11, 16, 0.45) 82%, rgba(6, 11, 16, 0.68) 100%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(6, 11, 16, 0.62) 0%, transparent 40%, rgba(6, 11, 16, 0.94) 100%)",
                  zIndex: 2,
                }}
              />

              {/* Leading Edge Light Beam along Diagonal Wipe */}
              {isCurrent && isTransitioning && (
                <div
                  className={`hero-wipe-light-edge edge-${slideDirection}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>

            {/* Main Slide Content with Staggered Cascading Entrances */}
            {isCurrent && (
              <div
                className="container"
                style={{
                  position: "relative",
                  zIndex: 10,
                  paddingTop: "clamp(135px, 18vh, 185px)",
                  paddingBottom: "110px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ maxWidth: 900 }}>
                  {/* 1. Prominent Firm Badge */}
                  <div
                    className="hero-stagger-item anim-badge"
                    style={{ marginBottom: 12 }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 14px",
                        background: "#c20101",
                        borderRadius: 4,
                        fontSize: "0.78rem",
                        fontWeight: 900,
                        letterSpacing: "0.12em",
                        color: "#ffffff",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 12px rgba(194, 1, 1, 0.4)",
                      }}
                    >
                      <span>{slide.firmBadge}</span>
                    </div>
                  </div>

                  {/* 2. Category Tagline */}
                  <div
                    className="hero-stagger-item anim-tag"
                    style={{
                      fontSize: "clamp(0.78rem, 1.1vw, 0.88rem)",
                      fontWeight: 850,
                      letterSpacing: "0.14em",
                      color: "rgba(255, 255, 255, 0.8)",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    <span>{slide.categoryTag}</span>
                  </div>

                  {/* 3. Huge Bold Uppercase Title */}
                  <h1
                    className="hero-stagger-item anim-title"
                    style={{
                      fontSize: "clamp(2rem, 4.4vw, 3.6rem)",
                      fontWeight: 950,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.15,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: 20,
                      textShadow: "0 4px 20px rgba(0, 0, 0, 0.85)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* 4. Lead Subtitle */}
                  <p
                    className="hero-stagger-item anim-subtitle"
                    style={{
                      fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.65,
                      maxWidth: 780,
                      marginBottom: 34,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* 5. Dual CTAs matching Seturaksh Brand */}
                  <div
                    className="hero-stagger-item anim-ctas"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href={slide.primaryCtaLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        padding: "16px 36px",
                        background: "#c20101",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: 900,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: 4,
                        boxShadow: "0 6px 20px rgba(194, 1, 1, 0.45)",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#990101";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#c20101";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        padding: "15px 30px",
                        background: "rgba(10, 17, 24, 0.7)",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: 4,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#c20101";
                        e.currentTarget.style.background = "rgba(194, 1, 1, 0.2)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                        e.currentTarget.style.background = "rgba(10, 17, 24, 0.7)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Navigation Arrow Controls: Left (<) and Right (>) */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        className="hero-nav-arrow hero-nav-prev"
        style={{
          position: "absolute",
          top: "50%",
          left: 18,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(6, 11, 16, 0.55)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          width: 50,
          height: 50,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c20101";
          e.currentTarget.style.borderColor = "#c20101";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(6, 11, 16, 0.55)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="hero-nav-arrow hero-nav-next"
        style={{
          position: "absolute",
          top: "50%",
          right: 18,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(6, 11, 16, 0.55)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          width: 50,
          height: 50,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c20101";
          e.currentTarget.style.borderColor = "#c20101";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(6, 11, 16, 0.55)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Interactive 6-Industry Liquid Glass Navigation Bar (Bottom Center) */}
      <div
        style={{
          position: "absolute",
          bottom: 22,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(6, 11, 16, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "6px 10px",
          borderRadius: 36,
          border: "1px solid rgba(255, 255, 255, 0.16)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
          maxWidth: "92vw",
          overflowX: "auto",
        }}
        className="hide-scrollbar"
      >
        {HERO_SLIDES.map((slide, i) => {
          const isSelected = currentSlide === i;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Switch to ${slide.shortName}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: isSelected ? "6px 14px" : "6px 10px",
                background: isSelected ? "#c20101" : "transparent",
                color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.72)",
                borderRadius: 24,
                border: "none",
                cursor: "pointer",
                fontSize: "0.76rem",
                fontWeight: isSelected ? 900 : 700,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: isSelected ? "0 2px 10px rgba(194, 1, 1, 0.45)" : "none",
              }}
            >
              <span style={{ opacity: isSelected ? 1 : 0.6, fontSize: "0.7rem", fontWeight: 850 }}>
                {`0${i + 1}`}
              </span>
              <span className="hero-pill-label">{slide.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Global CSS for GRSPL.com Dynamic Poster Change Animation */}
      <style jsx global>{`
        /* ============================================================
           GRSPL SIGNATURE POSTER TRANSITION (DIAGONAL WIPE + 3D DEPTH)
           ============================================================ */

        /* 1. OUTGOING POSTER: Shrinks back into space with subtle blur */
        .poster-exiting {
          animation: grsplPosterExit 0.95s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          will-change: transform, opacity, filter;
        }

        @keyframes grsplPosterExit {
          0% {
            transform: scale(1.02);
            opacity: 1;
            filter: brightness(1) blur(0px);
          }
          100% {
            transform: scale(0.86);
            opacity: 0;
            filter: brightness(0.35) blur(6px);
          }
        }

        /* 2. INCOMING POSTER: Sweeps across with Dynamic Diagonal Curtain Slice */
        .poster-entering.enter-next .hero-poster-clipper {
          animation: grsplWipeNext 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: clip-path;
        }

        .poster-entering.enter-prev .hero-poster-clipper {
          animation: grsplWipePrev 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: clip-path;
        }

        @keyframes grsplWipeNext {
          0% {
            -webkit-clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
          }
          100% {
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        @keyframes grsplWipePrev {
          0% {
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
            clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
          }
          100% {
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        /* 3. INCOMING IMAGE: Counter-Zoom from Scale 1.22 down to 1.03 */
        .poster-entering .hero-poster-img {
          animation: grsplPosterCounterZoom 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform;
        }

        @keyframes grsplPosterCounterZoom {
          0% {
            transform: scale(1.22) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.03) translate3d(0, 0, 0);
          }
        }

        /* 4. ACTIVE POSTER IDLE: Continuous Gentle Ambient Drift */
        .poster-active-idle .hero-poster-img {
          animation: posterIdleKenBurns 7.5s ease-out forwards;
        }

        @keyframes posterIdleKenBurns {
          0% {
            transform: scale(1.03) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.0) translate3d(0, 0, 0);
          }
        }

        /* 5. LEADING EDGE SPECULAR BEAM */
        .hero-wipe-light-edge.edge-next {
          animation: lightBeamFollowNext 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-wipe-light-edge.edge-prev {
          animation: lightBeamFollowPrev 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes lightBeamFollowNext {
          0% {
            transform: translateX(100%);
            opacity: 1;
            background: linear-gradient(
              105deg,
              transparent 0%,
              rgba(255, 255, 255, 0.35) 48%,
              rgba(229, 9, 20, 0.5) 52%,
              transparent 100%
            );
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
            background: linear-gradient(
              105deg,
              transparent 0%,
              rgba(255, 255, 255, 0.35) 48%,
              rgba(229, 9, 20, 0.5) 52%,
              transparent 100%
            );
          }
        }

        @keyframes lightBeamFollowPrev {
          0% {
            transform: translateX(-100%);
            opacity: 1;
            background: linear-gradient(
              75deg,
              transparent 0%,
              rgba(255, 255, 255, 0.35) 48%,
              rgba(229, 9, 20, 0.5) 52%,
              transparent 100%
            );
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
            background: linear-gradient(
              75deg,
              transparent 0%,
              rgba(255, 255, 255, 0.35) 48%,
              rgba(229, 9, 20, 0.5) 52%,
              transparent 100%
            );
          }
        }

        /* 6. STAGGERED TEXT CASCADING ENTRANCES */
        .hero-stagger-item {
          opacity: 0;
          transform: translateY(28px);
          will-change: opacity, transform;
        }

        .hero-stagger-item.anim-badge {
          animation: heroTextCascade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s forwards;
        }

        .hero-stagger-item.anim-tag {
          animation: heroTextCascade 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.24s forwards;
        }

        .hero-stagger-item.anim-title {
          animation: heroTextCascade 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.38s forwards;
        }

        .hero-stagger-item.anim-subtitle {
          animation: heroTextCascade 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.52s forwards;
        }

        .hero-stagger-item.anim-ctas {
          animation: heroTextCascade 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.66s forwards;
        }

        @keyframes heroTextCascade {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .hero-pill-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
