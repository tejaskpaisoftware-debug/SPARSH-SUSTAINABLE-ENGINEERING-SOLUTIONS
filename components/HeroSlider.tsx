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
  transitionType:
    | "diagonal-slice"
    | "center-iris"
    | "center-split"
    | "vertical-curtain"
    | "diamond-prism"
    | "horizontal-curtain";
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
    transitionType: "diagonal-slice", // 1. 35° Diagonal Curtain Slice with Trailing Laser Seam
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
    transitionType: "center-iris", // 2. Cinematic Lens Aperture with Expanding Aura Ring
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
    transitionType: "center-split", // 3. Double-Door Blast Curtain Split from Center
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
    transitionType: "vertical-curtain", // 4. Descending Industrial Guillotine Drop Curtain
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
    transitionType: "diamond-prism", // 5. Holographic Diamond Prism Radial Expansion
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
    transitionType: "horizontal-curtain", // 6. Dual-Side Interlocking Horizontal Shutter
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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Smooth 1.4s cinematic transition pace (normal, graceful speed)
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
    }, 1400); // 1.4s duration for normal, luxurious visibility
  };

  // Auto-advance slides every 7.5 seconds
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
      changeSlide(nextIndex, "next");
    }, 7500);

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

  // iPhone Touch Gesture Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe if delta X > 40px and dominant over vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentTransitionType = HERO_SLIDES[currentSlide].transitionType;

  return (
    <div
      className="grspl-hero-slider-wrap"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(600px, 90vh, 920px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#060b10",
        touchAction: "pan-y",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Poster Panes with 6 Distinct Visual Transitions */}
      {HERO_SLIDES.map((slide, index) => {
        const isCurrent = index === currentSlide;
        const isPrevious = index === prevSlide && isTransitioning;

        // If not current and not previous, hide completely
        if (!isCurrent && !isPrevious) return null;

        let posterStateClass = "";
        let zIndex = 1;

        if (isCurrent && isTransitioning) {
          posterStateClass = `poster-entering anim-${currentTransitionType} enter-${slideDirection}`;
          zIndex = 3;
        } else if (isCurrent && !isTransitioning) {
          posterStateClass = "poster-active-idle";
          zIndex = 2;
        } else if (isPrevious) {
          posterStateClass = `poster-exiting exit-${currentTransitionType} exit-dir-${slideDirection}`;
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
              className={`hero-poster-clipper clip-${currentTransitionType}`}
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

              {/* Dynamic Luminous Edge Beam on Seam */}
              {isCurrent && isTransitioning && (
                <div
                  className={`hero-wipe-edge beam-${currentTransitionType}`}
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
                  paddingTop: "clamp(100px, 14vh, 185px)",
                  paddingBottom: "clamp(80px, 12vh, 110px)",
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
                        padding: "6px 16px",
                        background: "linear-gradient(135deg, #e50914 0%, #c20101 100%)",
                        borderRadius: 9999,
                        fontSize: "clamp(0.7rem, 2.2vw, 0.78rem)",
                        fontWeight: 900,
                        letterSpacing: "0.12em",
                        color: "#ffffff",
                        textTransform: "uppercase",
                        border: "1px solid rgba(255, 255, 255, 0.32)",
                        boxShadow: "0 4px 16px rgba(194, 1, 1, 0.4), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                      }}
                    >
                      <span>{slide.firmBadge}</span>
                    </div>
                  </div>

                  {/* 2. Category Tagline */}
                  <div
                    className="hero-stagger-item anim-tag"
                    style={{
                      fontSize: "clamp(0.72rem, 2.2vw, 0.88rem)",
                      fontWeight: 850,
                      letterSpacing: "0.12em",
                      color: "rgba(255, 255, 255, 0.8)",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    <span>{slide.categoryTag}</span>
                  </div>

                  {/* 3. Huge Bold Uppercase Title */}
                  <h1
                    className="hero-stagger-item anim-title"
                    style={{
                      fontSize: "clamp(1.75rem, 5.8vw, 3.6rem)",
                      fontWeight: 950,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.15,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: 16,
                      textShadow: "0 4px 20px rgba(0, 0, 0, 0.85)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* 4. Lead Subtitle */}
                  <p
                    className="hero-stagger-item anim-subtitle"
                    style={{
                      fontSize: "clamp(0.88rem, 3.2vw, 1.15rem)",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.6,
                      maxWidth: 780,
                      marginBottom: 26,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* 5. Dual CTAs matching Apple Liquid Glass & Seturaksh Brand */}
                  <div
                    className="hero-stagger-item anim-ctas"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href={slide.primaryCtaLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "14px 28px",
                        background: "linear-gradient(135deg, #e50914 0%, #c20101 60%, #990101 100%)",
                        color: "#ffffff",
                        fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)",
                        fontWeight: 900,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: 9999,
                        border: "1px solid rgba(255, 255, 255, 0.35)",
                        boxShadow: "0 8px 28px -4px rgba(229, 9, 20, 0.6), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 14px 36px -4px rgba(229, 9, 20, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.75)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 28px -4px rgba(229, 9, 20, 0.6), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)";
                      }}
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "14px 26px",
                        background: "rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                        fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: 9999,
                        border: "1px solid rgba(255, 255, 255, 0.28)",
                        backdropFilter: "blur(24px) saturate(190%)",
                        WebkitBackdropFilter: "blur(24px) saturate(190%)",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.55)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)";
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

      {/* Navigation Arrow Controls: Left (<) and Right (>) in Apple Liquid Glass (Desktop) */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        className="hero-nav-arrow hero-nav-prev hero-desktop-arrow"
        style={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          width: 52,
          height: 52,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(28px) saturate(190%)",
          WebkitBackdropFilter: "blur(28px) saturate(190%)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 34px rgba(229, 9, 20, 0.55), inset 0 1px 2px rgba(255, 255, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="hero-nav-arrow hero-nav-next hero-desktop-arrow"
        style={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          width: 52,
          height: 52,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(28px) saturate(190%)",
          WebkitBackdropFilter: "blur(28px) saturate(190%)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 34px rgba(229, 9, 20, 0.55), inset 0 1px 2px rgba(255, 255, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)";
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Interactive 6-Industry Apple Liquid Glass Dock (Bottom Center) */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(10, 16, 26, 0.65)",
          backdropFilter: "blur(32px) saturate(210%)",
          WebkitBackdropFilter: "blur(32px) saturate(210%)",
          padding: "7px 12px",
          borderRadius: 9999,
          border: "1px solid rgba(255, 255, 255, 0.22)",
          boxShadow: "0 16px 45px rgba(0, 0, 0, 0.55), inset 0 1px 1.2px rgba(255, 255, 255, 0.35)",
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
                gap: 7,
                padding: isSelected ? "7px 16px" : "7px 12px",
                background: isSelected
                  ? "linear-gradient(135deg, #e50914 0%, #c20101 100%)"
                  : "transparent",
                color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                borderRadius: 9999,
                border: isSelected ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid transparent",
                cursor: "pointer",
                fontSize: "0.78rem",
                fontWeight: isSelected ? 900 : 700,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: isSelected
                  ? "0 4px 16px rgba(229, 9, 20, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.45)"
                  : "none",
              }}
            >
              <span style={{ opacity: isSelected ? 1 : 0.6, fontSize: "0.72rem", fontWeight: 850 }}>
                {`0${i + 1}`}
              </span>
              <span className="hero-pill-label">{slide.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Global CSS for 6 UNIQUE, ATTRACTIVE, CINEMATIC POSTER TRANSITIONS (1.4s Smooth Normal Speed) */}
      <style jsx global>{`
        /* ============================================================
           6 DISTINCT, ATTRACTIVE POSTER ANIMATIONS (1.4s BALANCED PACE)
           ============================================================ */

        /* ------------------------------------------------------------
           ANIMATION 1: 35° DIAGONAL CURTAIN SLICE WIPE (Chemical & Process)
           ------------------------------------------------------------ */
        .poster-entering.anim-diagonal-slice.enter-next .clip-diagonal-slice {
          animation: wipeDiagonalCurtainNext 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-diagonal-slice.enter-prev .clip-diagonal-slice {
          animation: wipeDiagonalCurtainPrev 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-diagonal-slice .hero-poster-img {
          animation: counterZoomDiagonal 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-diagonal-slice {
          animation: exitRecedeSpace 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .hero-wipe-edge.beam-diagonal-slice {
          animation: laserBeamSweep 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes wipeDiagonalCurtainNext {
          0% {
            clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
            -webkit-clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes wipeDiagonalCurtainPrev {
          0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes counterZoomDiagonal {
          0% { transform: scale(1.18); }
          100% { transform: scale(1.02); }
        }
        @keyframes laserBeamSweep {
          0% {
            transform: translateX(100%);
            opacity: 1;
            background: linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.7) 50%, rgba(229,9,20,0.85) 53%, transparent 60%);
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
            background: linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.7) 50%, rgba(229,9,20,0.85) 53%, transparent 60%);
          }
        }

        /* ------------------------------------------------------------
           ANIMATION 2: CINEMATIC LENS IRIS CIRCLE BURST (Pharma & API)
           ------------------------------------------------------------ */
        .poster-entering.anim-center-iris .clip-center-iris {
          animation: irisCircleExpand 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-center-iris .hero-poster-img {
          animation: irisImageZoomOut 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-center-iris {
          animation: exitZoomForward 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .hero-wipe-edge.beam-center-iris {
          animation: irisAuraPulse 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes irisCircleExpand {
          0% {
            clip-path: circle(0% at 50% 50%);
            -webkit-clip-path: circle(0% at 50% 50%);
          }
          100% {
            clip-path: circle(125% at 50% 50%);
            -webkit-clip-path: circle(125% at 50% 50%);
          }
        }
        @keyframes irisImageZoomOut {
          0% { transform: scale(0.9); }
          100% { transform: scale(1.02); }
        }
        @keyframes exitZoomForward {
          0% { transform: scale(1.0); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1.22); opacity: 0; filter: blur(8px); }
        }
        @keyframes irisAuraPulse {
          0% {
            opacity: 1;
            background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(229,9,20,0.6) 20%, transparent 35%);
          }
          100% {
            opacity: 0;
            background: radial-gradient(circle at 50% 50%, transparent 60%, rgba(255,255,255,0.4) 85%, transparent 100%);
          }
        }

        /* ------------------------------------------------------------
           ANIMATION 3: DOUBLE-DOOR BLAST CURTAIN SPLIT (Oil, Gas & EPC)
           ------------------------------------------------------------ */
        .poster-entering.anim-center-split .clip-center-split {
          animation: centerSplitBlast 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-center-split .hero-poster-img {
          animation: centerSplitCounterZoom 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-center-split {
          animation: exitPerspective3D 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .hero-wipe-edge.beam-center-split {
          animation: centerSeamGlow 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes centerSplitBlast {
          0% {
            clip-path: polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%);
            -webkit-clip-path: polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes centerSplitCounterZoom {
          0% { transform: scale(1.16); }
          100% { transform: scale(1.02); }
        }
        @keyframes exitPerspective3D {
          0% { transform: scale(1.0); opacity: 1; }
          100% { transform: scale(0.85); opacity: 0; filter: brightness(0.3) blur(6px); }
        }
        @keyframes centerSeamGlow {
          0% {
            opacity: 1;
            background: linear-gradient(90deg, transparent 48%, #ffffff 50%, rgba(229,9,20,0.8) 52%, transparent 54%);
          }
          100% {
            opacity: 0;
            background: linear-gradient(90deg, rgba(229,9,20,0.3) 0%, transparent 10%, transparent 90%, rgba(229,9,20,0.3) 100%);
          }
        }

        /* ------------------------------------------------------------
           ANIMATION 4: DESCENDING INDUSTRIAL VERTICAL CURTAIN (Construction & Infra)
           ------------------------------------------------------------ */
        .poster-entering.anim-vertical-curtain .clip-vertical-curtain {
          animation: verticalGuillotineDrop 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-vertical-curtain .hero-poster-img {
          animation: verticalImagePan 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-vertical-curtain {
          animation: exitVerticalRecede 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .hero-wipe-edge.beam-vertical-curtain {
          animation: horizontalBeamDrop 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes verticalGuillotineDrop {
          0% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes verticalImagePan {
          0% { transform: translateY(-7%) scale(1.1); }
          100% { transform: translateY(0%) scale(1.02); }
        }
        @keyframes exitVerticalRecede {
          0% { transform: translateY(0%) scale(1); opacity: 1; }
          100% { transform: translateY(-8%) scale(0.9); opacity: 0; filter: blur(6px); }
        }
        @keyframes horizontalBeamDrop {
          0% {
            transform: translateY(-100%);
            opacity: 1;
            background: linear-gradient(180deg, transparent 40%, #ffffff 50%, rgba(229,9,20,0.85) 54%, transparent 60%);
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
            background: linear-gradient(180deg, transparent 40%, #ffffff 50%, rgba(229,9,20,0.85) 54%, transparent 60%);
          }
        }

        /* ------------------------------------------------------------
           ANIMATION 5: HOLOGRAPHIC DIAMOND PRISM RADIAL EXPANSION (Warehousing)
           ------------------------------------------------------------ */
        .poster-entering.anim-diamond-prism .clip-diamond-prism {
          animation: diamondPrismExpand 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-diamond-prism .hero-poster-img {
          animation: diamondImageZoom 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-diamond-prism {
          animation: exitRecedeSpace 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes diamondPrismExpand {
          0% {
            clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
            -webkit-clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
          }
          100% {
            clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
            -webkit-clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
          }
        }
        @keyframes diamondImageZoom {
          0% { transform: scale(1.22) rotate(-1.5deg); }
          100% { transform: scale(1.02) rotate(0deg); }
        }

        /* ------------------------------------------------------------
           ANIMATION 6: DUAL-SIDE INTERLOCKING HORIZONTAL SHUTTER (Commercial/Institutional)
           ------------------------------------------------------------ */
        .poster-entering.anim-horizontal-curtain.enter-next .clip-horizontal-curtain {
          animation: dualHorizontalWipeNext 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-horizontal-curtain.enter-prev .clip-horizontal-curtain {
          animation: dualHorizontalWipePrev 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-entering.anim-horizontal-curtain .hero-poster-img {
          animation: horizontalCounterPan 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }
        .poster-exiting.exit-horizontal-curtain {
          animation: exitRecedeSpace 1.4s cubic-bezier(0.45, 0, 0.25, 1) forwards;
        }

        @keyframes dualHorizontalWipeNext {
          0% {
            clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
            -webkit-clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes dualHorizontalWipePrev {
          0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        @keyframes horizontalCounterPan {
          0% { transform: scale(1.15) translateX(4%); }
          100% { transform: scale(1.02) translateX(0%); }
        }

        /* Common Outgoing Slide Recede into Space */
        @keyframes exitRecedeSpace {
          0% { transform: scale(1.02); opacity: 1; filter: brightness(1) blur(0px); }
          100% { transform: scale(0.86); opacity: 0; filter: brightness(0.35) blur(8px); }
        }

        /* ACTIVE POSTER IDLE: Continuous gentle ambient Ken-Burns camera movement */
        .poster-active-idle .hero-poster-img {
          animation: posterIdleKenBurns 7.5s ease-out forwards;
        }
        @keyframes posterIdleKenBurns {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.0); }
        }

        /* STAGGERED TEXT CASCADING ENTRANCES (Timed smoothly with poster reveal) */
        .hero-stagger-item {
          opacity: 0;
          transform: translateY(32px);
          will-change: opacity, transform;
        }
        .hero-stagger-item.anim-badge {
          animation: heroTextCascade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
        }
        .hero-stagger-item.anim-tag {
          animation: heroTextCascade 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        .hero-stagger-item.anim-title {
          animation: heroTextCascade 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.75s forwards;
        }
        .hero-stagger-item.anim-subtitle {
          animation: heroTextCascade 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        .hero-stagger-item.anim-ctas {
          animation: heroTextCascade 0.75s cubic-bezier(0.16, 1, 0.3, 1) 1.05s forwards;
        }
        @keyframes heroTextCascade {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-desktop-arrow {
            display: none !important;
          }
          .hero-pill-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
