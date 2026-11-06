"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
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
    id: "slide-1",
    image: "/images/hero/seturaksh-corporate-governance-poster.jpg",
    firmBadge: "SETURAKSH • SUSTAINABLE ENGISAFE PVT. LTD.",
    categoryTag: "ENTERPRISE RISK & STATUTORY COMPLIANCE",
    title: "SETURAKSH: ENGINEERING SAFETY. MANAGING RISK. PROTECTING LIFE.",
    subtitle:
      "From executive boardroom safety governance and statutory DISH/PESO compliance to ESG benchmarks — SETURAKSH empowers corporate leaders and enterprises with comprehensive risk engineering and resilience.",
    primaryCtaText: "SCHEDULE FACILITY AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "EXPLORE SERVICES",
    secondaryCtaLink: "/services",
  },
  {
    id: "slide-2",
    image: "/images/hero/seturaksh-institutional-safety-poster.jpg",
    firmBadge: "SETURAKSH • INSTITUTIONAL & CAMPUS LIFE SAFETY",
    categoryTag: "PRACTICAL TRAINING & EMERGENCY READINESS",
    title: "SAFEGUARDING CAMPUSES, INSTITUTIONS & COMMUNITIES",
    subtitle:
      "SETURAKSH delivers certified life safety audits, National Building Code (NBC) assessments, emergency evacuation plans, and hands-on PASS fire extinguisher drills for schools, colleges, hospitals, and commercial complexes.",
    primaryCtaText: "SCHEDULE CAMPUS AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WATCH FIELD DRILLS",
    secondaryCtaLink: "/#field-operations",
  },
  {
    id: "slide-3",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    firmBadge: "SETURAKSH • INFRASTRUCTURE & MODERN WORKPLACES",
    categoryTag: "ASSET INTEGRITY & WORKPLACE PROTECTION",
    title: "PROACTIVE RESILIENCE FOR MODERN WORKPLACES",
    subtitle:
      "SETURAKSH engineers comprehensive fire hydrant defense, warehouse safety demarcations, Permit-to-Work (PTW/LOTO) architecture, and statutory equipment inspections under the Factories Act.",
    primaryCtaText: "GET INSPECTION QUOTE",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WHY SETURAKSH",
    secondaryCtaLink: "/why-sparsh",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 6.5 seconds
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setSlideDirection("next");
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const goToPrev = () => {
    setSlideDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setAnimKey((k) => k + 1);
  };

  const goToNext = () => {
    setSlideDirection("next");
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setAnimKey((k) => k + 1);
  };

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setSlideDirection(idx > currentSlide ? "next" : "prev");
    setCurrentSlide(idx);
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      className="grspl-hero-slider-wrap"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#060b10",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with SmartSlider Ken-Burns + Curtain Zoom Animation */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`hero-slide-pane ${isActive ? "is-active" : "is-inactive"}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : 0,
              visibility: isActive ? "visible" : "hidden",
              transition: "opacity 1s cubic-bezier(0.25, 1, 0.5, 1), visibility 1s ease",
              zIndex: isActive ? 2 : 1,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {/* 4K Multi-Sector Landscape Backdrop with GRSPL Ken-Burns Zoom Animation */}
            <div
              className={`hero-bg-poster ${isActive ? "poster-active" : "poster-idle"}`}
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

              {/* GRSPL-style Shimmer Light Curtain Sweep on Poster Change */}
              <div
                key={`gleam-${animKey}-${index}`}
                className={`hero-curtain-gleam ${isActive ? "active-gleam" : ""}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Main Slide Content with Staggered Cascading Entrances */}
            <div
              className="container"
              style={{
                position: "relative",
                zIndex: 10,
                paddingTop: "clamp(135px, 18vh, 185px)",
                paddingBottom: "80px",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: 890 }}>
                {/* 1. Prominent Firm Badge */}
                <div
                  className={`hero-stagger-item ${isActive ? "anim-badge" : ""}`}
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
                  className={`hero-stagger-item ${isActive ? "anim-tag" : ""}`}
                  style={{
                    fontSize: "clamp(0.8rem, 1.2vw, 0.92rem)",
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
                  className={`hero-stagger-item ${isActive ? "anim-title" : ""}`}
                  style={{
                    fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)",
                    fontWeight: 950,
                    letterSpacing: "-0.01em",
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
                  className={`hero-stagger-item ${isActive ? "anim-subtitle" : ""}`}
                  style={{
                    fontSize: "clamp(1.02rem, 1.7vw, 1.2rem)",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.65,
                    maxWidth: 760,
                    marginBottom: 36,
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* 5. Dual CTAs matching Seturaksh Brand */}
                <div
                  className={`hero-stagger-item ${isActive ? "anim-ctas" : ""}`}
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
          </div>
        );
      })}

      {/* Navigation Arrow Controls: Left (<) and Right (>) with Nudge Animation */}
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

      {/* Slide Indicators Dots with Progress Fill */}
      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(6, 11, 16, 0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          padding: "6px 14px",
          borderRadius: 30,
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: currentSlide === i ? 36 : 10,
              height: 6,
              borderRadius: 3,
              background: currentSlide === i ? "#c20101" : "rgba(255, 255, 255, 0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        ))}
      </div>

      {/* Embedded Animations Matching GRSPL.com Hero Poster Transitions */}
      <style jsx global>{`
        /* 1. Poster Ken-Burns Zoom & Pan on Slide Change */
        .hero-bg-poster .hero-poster-img {
          transform: scale(1.15);
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .hero-bg-poster.poster-active .hero-poster-img {
          animation: posterKenBurns 7.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes posterKenBurns {
          0% {
            transform: scale(1.16) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
        }

        /* 2. Light Gleam / Shimmer Curtain Sweep on Poster Change */
        .hero-curtain-gleam.active-gleam {
          animation: curtainLightSweep 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes curtainLightSweep {
          0% {
            background: linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.18) 35%,
              rgba(229, 9, 20, 0.14) 50%,
              transparent 70%
            );
            transform: translateX(-100%);
            opacity: 0.85;
          }
          100% {
            background: linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.18) 35%,
              rgba(229, 9, 20, 0.14) 50%,
              transparent 70%
            );
            transform: translateX(120%);
            opacity: 0;
          }
        }

        /* 3. Layered Staggered Text Cascading Animations */
        .hero-stagger-item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          will-change: opacity, transform;
        }

        .hero-stagger-item.anim-badge {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s,
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
        }

        .hero-stagger-item.anim-tag {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.24s,
                      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.24s;
        }

        .hero-stagger-item.anim-title {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.38s,
                      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.38s;
        }

        .hero-stagger-item.anim-subtitle {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.52s,
                      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.52s;
        }

        .hero-stagger-item.anim-ctas {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.66s,
                      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.66s;
        }
      `}</style>
    </div>
  );
}
