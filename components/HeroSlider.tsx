"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import HeroSafetyDottedVisual from "@/components/HeroSafetyDottedVisual";

export interface HeroSlide {
  id: string;
  shortName: string;
  image: string;
  firmBadge: string;
  categoryTag: string;
  title: string;
  mobileTitle: string;
  subtitle: string;
  mobileSubtitle: string;
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
    firmBadge: "SETURAKSH • CHEMICAL & PROCESS",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "PREVENTING PROCESS HAZARDS & SECURING CHEMICAL OPERATIONS",
    mobileTitle: "PREVENTING HAZARDS & CHEMICAL DEFENSE",
    subtitle:
      "Statutory DISH audits, toxic dispersion modeling, and quantitative process safety barriers.",
    mobileSubtitle: "Statutory DISH audits, toxic dispersion modeling & HAZOP barriers.",
    primaryCtaText: "SCHEDULE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "SERVICES",
    secondaryCtaLink: "/services?service=ehs",
    transitionType: "diagonal-slice", // 1. 35° Diagonal Curtain Slice with Trailing Laser Seam
  },
  {
    id: "pharma-api",
    shortName: "Pharmaceuticals & API",
    image: "/images/hero/seturaksh-pharmaceuticals-api-poster.jpg",
    firmBadge: "SETURAKSH • PHARMA & API SAFETY",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "EHS GOVERNANCE & PROCESS SAFETY FOR PHARMA & API",
    mobileTitle: "PHARMA & API PROCESS SAFETY",
    subtitle:
      "Solvent safety, containment rigor, and statutory DISH/PESO compliance for API facilities.",
    mobileSubtitle: "Solvent recovery safety, containment rigor & DISH/PESO compliance.",
    primaryCtaText: "SCHEDULE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "PSM SUITE",
    secondaryCtaLink: "/services?service=process",
    transitionType: "center-iris", // 2. Cinematic Lens Aperture with Expanding Aura Ring
  },
  {
    id: "oil-gas-epc",
    shortName: "Oil, Gas & EPC",
    image: "/images/hero/seturaksh-oil-gas-epc-poster.jpg",
    firmBadge: "SETURAKSH • OIL, GAS & EPC",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "RISK RESILIENCE FOR OIL, GAS & HEAVY EPC MEGAPROJECTS",
    mobileTitle: "OIL, GAS & HEAVY EPC RESILIENCE",
    subtitle:
      "Quantitative risk assessment (QRA), SIL allocation, and high-risk PTW governance.",
    mobileSubtitle: "Certified QRA, SIL allocation, high-risk PTW & commissioning safety.",
    primaryCtaText: "SCHEDULE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "EPC SAFETY",
    secondaryCtaLink: "/services?service=engineering",
    transitionType: "center-split", // 3. Double-Door Blast Curtain Split from Center
  },
  {
    id: "construction-infra",
    shortName: "Construction & Infra",
    image: "/images/hero/seturaksh-construction-infrastructure-poster.jpg",
    firmBadge: "SETURAKSH • CONSTRUCTION & INFRA",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "ZERO-INCIDENT CONTROLS FOR CONSTRUCTION & INFRASTRUCTURE",
    mobileTitle: "CONSTRUCTION & INFRASTRUCTURE",
    subtitle:
      "Work-at-height controls, scaffolding certification, and life-critical site safety.",
    mobileSubtitle: "Work-at-height controls, scaffolding certification & life-critical PTW.",
    primaryCtaText: "SCHEDULE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "FIELD DRILLS",
    secondaryCtaLink: "/#field-operations",
    transitionType: "vertical-curtain", // 4. Descending Industrial Guillotine Drop Curtain
  },
  {
    id: "manufacturing-warehouse",
    shortName: "Manufacturing & Warehousing",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    firmBadge: "SETURAKSH • MANUFACTURING & LOGISTICS",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "PROACTIVE RESILIENCE FOR MODERN WAREHOUSES & FACTORIES",
    mobileTitle: "WAREHOUSE & FACTORY SAFETY",
    subtitle:
      "Statutory equipment inspection, fire hydrant verification, and proactive workplace safety.",
    mobileSubtitle: "Statutory DISH equipment testing, fire hydrant readiness & 5S safety.",
    primaryCtaText: "GET QUOTE",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WHY US",
    secondaryCtaLink: "/why-sparsh",
    transitionType: "diamond-prism", // 5. Holographic Diamond Prism Radial Expansion
  },
  {
    id: "commercial-institutional",
    shortName: "Commercial & Institutional",
    image: "/images/hero/seturaksh-institutional-safety-poster.jpg",
    firmBadge: "SETURAKSH • COMMERCIAL & INSTITUTIONAL",
    categoryTag: "RISK ENGINEERING & RESILIENCE ADVISORY",
    title: "LIFE SAFETY AUDITS FOR INSTITUTIONS & COMMERCIAL COMPLEXES",
    mobileTitle: "COMMERCIAL & CAMPUS SAFETY",
    subtitle:
      "NBC 2016 life safety audits, evacuation architecture, and Fire NOC certification.",
    mobileSubtitle: "NBC 2016 life safety audits, evacuation drills & fire systems review.",
    primaryCtaText: "SCHEDULE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "FIELD DEMOS",
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
        minHeight: "clamp(680px, 94vh, 980px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#f5f5f7",
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

              {/* Multi-Layered Apple Ceramic Liquid Glass Overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(245, 245, 247, 0.96) 0%, rgba(245, 245, 247, 0.92) 42%, rgba(245, 245, 247, 0.68) 70%, rgba(245, 245, 247, 0.35) 100%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(245, 245, 247, 0.82) 0%, transparent 40%, rgba(245, 245, 247, 0.88) 100%)",
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
                className="container hero-content-container"
                style={{
                  position: "relative",
                  zIndex: 10,
                  paddingTop: "clamp(150px, 18vh, 220px)",
                  paddingBottom: "clamp(90px, 12vh, 130px)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  className="hero-two-col-layout"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "clamp(24px, 4vw, 56px)",
                    width: "100%",
                    marginTop: "clamp(10px, 2.5vh, 32px)",
                    marginBottom: "auto",
                  }}
                >
                  {/* Left Column: Heading, Subtitle & CTAs */}
                  <div style={{ maxWidth: 740, flex: "1 1 500px" }}>
                  {/* 1. Prominent Firm Badge */}
                  <div
                    className="hero-stagger-item anim-badge"
                    style={{ marginBottom: 10 }}
                  >
                    <div
                      className="hero-firm-badge"
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
                      <span className="desktop-firm-badge">{slide.firmBadge}</span>
                      <span className="mobile-firm-badge">{`SETURAKSH • ${slide.shortName}`}</span>
                    </div>
                  </div>

                  {/* 2. Category Tagline (Desktop Only - Hidden on Mobile to prevent text merger) */}
                  <div
                    className="hero-stagger-item anim-tag hero-category-tag"
                    style={{
                      fontSize: "clamp(0.72rem, 2.2vw, 0.88rem)",
                      fontWeight: 850,
                      letterSpacing: "0.12em",
                      color: "#c20101",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    <span>{slide.categoryTag}</span>
                  </div>

                  {/* 3. Bold Uppercase Title - Desktop Full & Mobile Concise (2-3 lines max) */}
                  <h1
                    className="hero-stagger-item anim-title hero-heading"
                    style={{
                      fontSize: "clamp(1.5rem, 4.4vw, 3.6rem)",
                      fontWeight: 950,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.15,
                      color: "#1d1d1f",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    <span className="desktop-hero-title">{slide.title}</span>
                    <span className="mobile-hero-title">{slide.mobileTitle}</span>
                  </h1>

                  {/* 4. Lead Subtitle - Desktop Full & Mobile Concise 2-line snippet */}
                  <p
                    className="hero-stagger-item anim-subtitle hero-subtitle-p"
                    style={{
                      fontSize: "clamp(0.86rem, 2.8vw, 1.15rem)",
                      color: "#424245",
                      lineHeight: 1.55,
                      maxWidth: 780,
                      marginBottom: 22,
                    }}
                  >
                    <span className="desktop-hero-subtitle">{slide.subtitle}</span>
                    <span className="mobile-hero-subtitle">{slide.mobileSubtitle}</span>
                  </p>

                  {/* 5. Dual CTAs matching Apple Liquid Glass (Side-by-Side on Mobile) */}
                  <div
                    className="hero-stagger-item anim-ctas hero-ctas-group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href={slide.primaryCtaLink}
                      className="hero-cta-btn hero-cta-primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "14px 28px",
                        background: "linear-gradient(135deg, #e50914 0%, #c20101 60%, #990101 100%)",
                        color: "#ffffff",
                        fontSize: "clamp(0.8rem, 2.4vw, 0.95rem)",
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
                      className="hero-cta-btn hero-cta-secondary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "14px 26px",
                        background: "#ffffff",
                        color: "#1d1d1f",
                        fontSize: "clamp(0.8rem, 2.4vw, 0.95rem)",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: 9999,
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        backdropFilter: "blur(24px) saturate(190%)",
                        WebkitBackdropFilter: "blur(24px) saturate(190%)",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 1.5px #ffffff",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)";
                        e.currentTarget.style.background = "#f0f0f2";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 1.5px #ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 1.5px #ffffff";
                      }}
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Interactive 3D Dotted Safety Model (Fire Extinguisher & Safety Helmet) */}
                <div className="hero-dotted-interactive-col" style={{ flexShrink: 0 }}>
                  <HeroSafetyDottedVisual />
                </div>
              </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Navigation Arrow Controls: Left (<) and Right (>) in Apple Liquid Glass (Desktop & Mobile) */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        className="hero-nav-arrow hero-nav-prev"
        style={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(255, 255, 255, 0.9)",
          color: "#1d1d1f",
          border: "1px solid rgba(0, 0, 0, 0.08)",
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
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px #ffffff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.borderColor = "rgba(229, 9, 20, 0.5)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 34px rgba(229, 9, 20, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          e.currentTarget.style.color = "#1d1d1f";
          e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px #ffffff";
        }}
      >
        <ChevronLeft className="hero-chevron-icon" size={24} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="hero-nav-arrow hero-nav-next"
        style={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          zIndex: 25,
          background: "rgba(255, 255, 255, 0.9)",
          color: "#1d1d1f",
          border: "1px solid rgba(0, 0, 0, 0.08)",
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
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px #ffffff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.borderColor = "rgba(229, 9, 20, 0.5)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 34px rgba(229, 9, 20, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          e.currentTarget.style.color = "#1d1d1f";
          e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px #ffffff";
        }}
      >
        <ChevronRight className="hero-chevron-icon" size={24} />
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
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(32px) saturate(210%)",
          WebkitBackdropFilter: "blur(32px) saturate(210%)",
          padding: "7px 12px",
          borderRadius: 9999,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px #ffffff",
          maxWidth: "92vw",
          overflowX: "auto",
        }}
        className="hero-industry-dock hide-scrollbar"
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
                color: isSelected ? "#ffffff" : "#424245",
                borderRadius: 9999,
                border: isSelected ? "1px solid rgba(229, 9, 20, 0.3)" : "1px solid transparent",
                cursor: "pointer",
                fontSize: "0.78rem",
                fontWeight: isSelected ? 900 : 700,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: isSelected
                  ? "0 4px 16px rgba(229, 9, 20, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.45)"
                  : "none",
              }}
            >
              <span style={{ opacity: isSelected ? 1 : 0.65, fontSize: "0.72rem", fontWeight: 850, color: isSelected ? "#ffffff" : "#86868b" }}>
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

        /* Desktop Text Defaults */
        .mobile-firm-badge {
          display: none;
        }
        .desktop-firm-badge {
          display: inline;
        }
        .mobile-hero-title {
          display: none;
        }
        .desktop-hero-title {
          display: inline;
        }
        .mobile-hero-subtitle {
          display: none;
        }
        .desktop-hero-subtitle {
          display: inline;
        }

        /* 3D Dotted Safety Model (Extinguisher & Helmet) */
        .hero-dotted-interactive-col {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: heroDottedFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes heroDottedFadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 1040px) {
          .hero-two-col-layout {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 18px !important;
          }
          .hero-dotted-interactive-col {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
            margin: 12px 0 0 0 !important;
            align-self: center !important;
          }
          .hero-dotted-widget-container {
            max-width: 320px !important;
            height: 270px !important;
          }
        }

        /* Mobile Viewport (< 768px): Apple iOS Minimalist Hierarchy - Zero Text Merge */
        @media (max-width: 768px) {
          .grspl-hero-slider-wrap {
            min-height: max(780px, 100svh) !important;
            height: auto !important;
          }
          .hero-slide-pane {
            min-height: 100% !important;
          }
          /* Mobile Navigation Arrows: Sleek, Frosted Glass, Touch-Friendly */
          .hero-nav-arrow {
            width: 34px !important;
            height: 34px !important;
            background: rgba(255, 255, 255, 0.9) !important;
            color: #1d1d1f !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08), inset 0 1px 1px #ffffff !important;
            z-index: 35 !important;
          }
          .hero-nav-prev {
            left: 6px !important;
          }
          .hero-nav-next {
            right: 6px !important;
          }
          .hero-chevron-icon {
            width: 16px !important;
            height: 16px !important;
          }
          .hero-nav-arrow:active {
            transform: translateY(-50%) scale(0.88) !important;
            background: linear-gradient(135deg, #e50914 0%, #c20101 100%) !important;
          }

          /* Generous safe side and top clearance so badge and text NEVER cut with the header */
          .hero-content-container {
            padding-top: max(115px, 14vh) !important;
            padding-bottom: 85px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            height: auto !important;
          }
          .hero-two-col-layout {
            gap: 6px !important;
            margin-top: 2px !important;
          }
          .hero-dotted-interactive-col {
            margin-top: 6px !important;
            margin-bottom: 26px !important;
          }

          .hero-pill-label {
            display: none !important;
          }

          /* Hide redundant multi-line category tagline on mobile */
          .hero-category-tag {
            display: none !important;
          }

          /* Switch to concise, punchy mobile badge */
          .desktop-firm-badge {
            display: none !important;
          }
          .mobile-firm-badge {
            display: inline !important;
            font-size: 0.72rem !important;
            letter-spacing: 0.08em !important;
          }
          .hero-firm-badge {
            padding: 5px 12px !important;
          }

          /* Mobile Title: 2 clean lines max */
          .desktop-hero-title {
            display: none !important;
          }
          .mobile-hero-title {
            display: inline !important;
            font-size: clamp(1.2rem, 4.4vw, 1.45rem) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.02em !important;
            color: #1d1d1f !important;
            text-shadow: none !important;
          }
          .hero-heading {
            margin-bottom: 6px !important;
            color: #1d1d1f !important;
            text-shadow: none !important;
          }

          /* Mobile Subtitle: Crisp 2-line snippet */
          .desktop-hero-subtitle {
            display: none !important;
          }
          .mobile-hero-subtitle {
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            font-size: 0.8rem !important;
            line-height: 1.35 !important;
            color: #424245 !important;
            text-shadow: none !important;
          }
          .hero-subtitle-p {
            margin-bottom: 10px !important;
          }

          /* CTAs: Side-by-side sleek iOS action pills with safe padding */
          .hero-ctas-group {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            margin-bottom: 6px !important;
          }
          .hero-cta-btn {
            padding: 8px 15px !important;
            font-size: 0.74rem !important;
            white-space: nowrap !important;
            letter-spacing: 0.04em !important;
          }

          /* Bottom Dock: Compact & sleek at bottom of hero */
          .hero-industry-dock {
            bottom: 12px !important;
            padding: 3px 6px !important;
          }
        }
      `}</style>
    </div>
  );
}
