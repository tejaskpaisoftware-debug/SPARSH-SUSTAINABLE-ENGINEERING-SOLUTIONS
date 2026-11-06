"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface ServiceDivision {
  num: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  href: string;
  tag: string;
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    num: "01",
    title: "Strategic EHS & Statutory Compliance",
    category: "Regulatory Governance",
    image: "/images/divisions/engineers-plant-inspection.jpg",
    desc: "Comprehensive statutory safety audits, Factories Act 1948 & DISH compliance verification, EHSMS legal registers, and Root Cause Analysis (RCA).",
    href: "/services?service=ehs",
    tag: "DISH & Statutory Audit",
  },
  {
    num: "02",
    title: "Integrity Inspection Cell",
    category: "Mechanical & Asset Defense",
    image: "/images/divisions/switch-yard-testing.jpg",
    desc: "Competent Person testing under DISH Sections 28, 29, 31 for pressure vessels, hoists, lifting machinery, structural integrity, and switchyards.",
    href: "/services?service=engineering",
    tag: "Competent Person Certified",
  },
  {
    num: "03",
    title: "Hazard Intelligence Lab",
    category: "Quantitative Risk & QRA",
    image: "/images/hero/seturaksh-psm-control-room-operations.jpg",
    desc: "Advanced consequence modeling, toxic gas dispersion, flammable vapor cloud analysis, DOW fire & explosion indices, and Quantitative Risk Assessments.",
    href: "/services?service=process",
    tag: "Advanced QRA & Dispersion",
  },
  {
    num: "04",
    title: "Process Safety Engineering Suite",
    category: "Hazard Barrier Protection",
    image: "/images/divisions/chemical-processing-plant.jpg",
    desc: "Industry-standard HAZOP facilitation, HAZID, Pre-Startup Safety Reviews (PSSR), and Layer of Protection Analysis (LOPA) for chemical & API plants.",
    href: "/services?service=process",
    tag: "HAZOP & LOPA Certified",
  },
  {
    num: "05",
    title: "Functional Safety Precision Division",
    category: "Safety Instrumented Systems",
    image: "/images/hero/seturaksh-corporate-governance-poster.jpg",
    desc: "Safety Integrity Level (SIL) allocation & verification, SIS design reviews, emergency interlocks, fail-safe protocols, and alarm management.",
    href: "/services?service=engineering",
    tag: "SIL Allocation & SIS",
  },
  {
    num: "06",
    title: "Comprehensive Fire Engineering & Life Safety",
    category: "Active & Passive Fire Solutions",
    image: "/photos/fire-hydrant-drill-main.jpg",
    desc: "Rigorous Fire Risk Assessments (FRA), NBC 2016 & NFPA compliance, fire compartmentation, sprinkler layout design, and exit egress planning.",
    href: "/services?service=fire",
    tag: "NBC 2016 & NFPA Compliant",
  },
  {
    num: "07",
    title: "High-Pressure Hydrant & Active Suppression",
    category: "Emergency Fire Response",
    image: "/photos/live-fire-extinguisher-powder-spray.jpg",
    desc: "On-site hydrant network hydrostatic pressure testing, water monitor flow rate calibration, foam induction systems, and emergency pump audits.",
    href: "/services?service=fire",
    tag: "Hydrant & Monitor Flow",
  },
  {
    num: "08",
    title: "Workforce Safety Academy & Competency",
    category: "Safety Culture Transformation",
    image: "/photos/workforce-safety-training-1.jpg",
    desc: "Empowering frontline operators and supervisors through Behavior-Based Safety (BBS), 5S visual factory audits, and hands-on firefighting drills.",
    href: "/services?service=training",
    tag: "Behavior-Based Safety (BBS)",
  },
  {
    num: "09",
    title: "Environmental & ESG Sustainability Cell",
    category: "Industrial Decarbonization",
    image: "/images/divisions/thermal-power-safety-audit.jpg",
    desc: "State Pollution Control Board (GPCB) regulatory support, industrial hazardous waste governance, effluent compliance, water neutrality, and ESG metrics.",
    href: "/services?service=env",
    tag: "GPCB & ESG Compliance",
  },
  {
    num: "10",
    title: "Chemical & Hazardous Material (GHS) Protocol",
    category: "Toxic Material Defense",
    image: "/photos/chemical-ghs-safety-training-1.jpg",
    desc: "GHS classification, Chemical Safety Data Sheets (CSDS), toxic chemical storage licensing (PESO), secondary containment, and chemical spill control.",
    href: "/services?service=process",
    tag: "GHS Chemical Protocols",
  },
  {
    num: "11",
    title: "Strategic Documentation & Planning Cell",
    category: "Operational Governance",
    image: "/photos/corporate-safety-boardroom-training.jpg",
    desc: "On-site Emergency Plans (OEP), Disaster Management Plans (DMP), Safety Health & Environment manuals, and corporate boardroom risk reporting.",
    href: "/services?service=ehs",
    tag: "On-site ERP & DMP Audits",
  },
  {
    num: "12",
    title: "Infrastructure & Construction Safety Command",
    category: "High-Risk Field Defense",
    image: "/images/divisions/safety-inspection-height.jpg",
    desc: "Scaffolding certification, Working at Height (WAH) fall-protection systems, deep excavation safety, crane lifting plans, and contractor safety audits.",
    href: "/services?service=engineering",
    tag: "Scaffold & Height Safety",
  },
  {
    num: "13",
    title: "Engineering Safety Design Cell",
    category: "Plant Layout & Piping",
    image: "/images/divisions/architect-engineer-inspection.jpg",
    desc: "Greenfield & brownfield layout safety analysis, P&ID safety reviews, emergency relief vent sizing, flare system verification, and explosion venting.",
    href: "/services?service=engineering",
    tag: "P&ID Safety & Venting",
  },
  {
    num: "14",
    title: "Digital Risk & Safety Transformation",
    category: "Smart Industrial Tech",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    desc: "Digital Permit to Work (e-PTW), IoT sensor hazard telemetry, incident management systems, barcode inspection workflows, and compliance dashboards.",
    href: "/services?service=ehs",
    tag: "Digital PTW & Telemetry",
  },
];

export default function ServiceArenaSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Check scroll bounds
  const updateScrollBounds = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    if (scrollWidth - clientWidth > 0) {
      setScrollProgress((scrollLeft / (scrollWidth - clientWidth)) * 100);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollBounds, { passive: true });
    updateScrollBounds();
    window.addEventListener("resize", updateScrollBounds);
    return () => {
      el.removeEventListener("scroll", updateScrollBounds);
      window.removeEventListener("resize", updateScrollBounds);
    };
  }, []);

  // Smooth scroll left/right
  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 350; // card width + gap
    const targetScroll =
      direction === "left" ? el.scrollLeft - cardWidth : el.scrollLeft + cardWidth;
    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // Continuous auto-progression when not hovered
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        // Smoothly loop back to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: scrollLeft + 350, behavior: "smooth" });
      }
    }, 4200);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered]);

  return (
    <section
      id="service-arena"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0d1726 0%, #08111e 50%, #050b14 100%)",
        padding: "100px 0 110px 0",
        overflow: "hidden",
      }}
    >
      {/* 1. iOS Liquid Glass Ambient Lighting Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          left: "20%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.14) 0%, rgba(229, 9, 20, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Subtle Liquid Glass Grid Mesh */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), radial-gradient(rgba(229, 9, 20, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* 2. Section Header with GRSPL Subtitle + Bold Heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          {/* Glowing Red Tagline like GRSPL */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(229, 9, 20, 0.12)",
              border: "1px solid rgba(229, 9, 20, 0.35)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 4px 16px rgba(229, 9, 20, 0.2)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#E50914",
                boxShadow: "0 0 10px #E50914",
              }}
            />
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 900,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ff4d4f",
              }}
            >
              OUR SERVICE ARENA
            </span>
          </div>

          {/* Heading in Clean Modern Typography */}
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)",
            }}
          >
            Crafted for Resilience
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.12rem)",
              color: "rgba(255, 255, 255, 0.72)",
              maxWidth: "760px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Fourteen specialized engineering suites, statutory DISH &amp; PESO audit cells, process safety divisions, and life safety academies engineered for zero harm and total compliance.
          </p>

          {/* Slider Controls Strip (Liquid Glass Pill) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 28,
            }}
          >
            {/* Auto-Scroll Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: "30px",
                padding: "7px 16px",
                color: isAutoPlay ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
                fontSize: "0.78rem",
                fontWeight: 750,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                transition: "all 0.25s ease",
              }}
              title={isAutoPlay ? "Pause Auto Progression" : "Start Auto Progression"}
            >
              {isAutoPlay ? <Pause size={12} color="#E50914" /> : <Play size={12} />}
              <span>{isAutoPlay ? "Auto-Scroll Active" : "Auto-Scroll Paused"}</span>
            </button>

            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: canScrollLeft ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                color: canScrollLeft ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollLeft ? "pointer" : "not-allowed",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: canScrollLeft ? "inset 0 1px 1px rgba(255, 255, 255, 0.3)" : "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "rgba(229, 9, 20, 0.85)";
                  e.currentTarget.style.borderColor = "rgba(229, 9, 20, 1)";
                  e.currentTarget.style.transform = "scale(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: canScrollRight ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                color: canScrollRight ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollRight ? "pointer" : "not-allowed",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: canScrollRight ? "inset 0 1px 1px rgba(255, 255, 255, 0.3)" : "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "rgba(229, 9, 20, 0.85)";
                  e.currentTarget.style.borderColor = "rgba(229, 9, 20, 1)";
                  e.currentTarget.style.transform = "scale(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3. Horizontal Scroll Track of GRSPL Diagonal Cut Cards */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "20px 8px 36px 8px",
            cursor: "grab",
          }}
          className="hide-scrollbar"
        >
          {SERVICE_DIVISIONS.map((svc) => (
            <Link
              key={svc.num}
              href={svc.href}
              className="grspl-arena-card-item"
              style={{
                flex: "0 0 315px",
                scrollSnapAlign: "start",
                background: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                position: "relative",
                boxShadow: "0 18px 40px -10px rgba(0, 0, 0, 0.45), 0 2px 8px rgba(0, 0, 0, 0.15)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
              }}
            >
              {/* Top-Left Red Sequence Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  background: "#c20101",
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  fontWeight: 900,
                  width: 46,
                  height: 46,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottomRightRadius: "8px",
                  boxShadow: "0 4px 12px rgba(194, 1, 1, 0.35)",
                }}
              >
                {svc.num}
              </div>

              {/* Upper White Card Cap Space */}
              <div style={{ height: "42px", background: "#ffffff" }} />

              {/* GRSPL Signature Slow-Opening Morphing Image Container */}
              <div
                className="grspl-image-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "225px",
                  overflow: "hidden",
                  background: "#0c1726",
                }}
              >
                {/* Morphing Diagonal Clip-Path Container */}
                <div
                  className="grspl-morph-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="350px"
                    style={{
                      objectFit: "cover",
                    }}
                    className="grspl-card-photo"
                  />

                  {/* Subtle contrast gradient */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(12, 23, 38, 0.08) 0%, rgba(12, 23, 38, 0.35) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Floating White Arrow Badge at bottom right */}
                <div
                  className="grspl-arrow-badge"
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 14,
                    zIndex: 6,
                    width: 40,
                    height: 40,
                    background: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c20101",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.22)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  »
                </div>
              </div>

              {/* Card Body & Title Section */}
              <div
                style={{
                  padding: "20px 22px 24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  background: "#ffffff",
                }}
              >
                {/* Title with Red Accent Marker */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      minWidth: 4,
                      height: 22,
                      background: "#c20101",
                      borderRadius: 2,
                      marginTop: 2,
                    }}
                  />
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.12rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {svc.title}
                  </h3>
                </div>

                {/* Scope Description */}
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#64748b",
                    lineHeight: 1.5,
                    margin: "0 0 16px 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {svc.desc}
                </p>

                {/* Bottom Scope Pill / Tag */}
                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#f1f5f9",
                      borderRadius: 4,
                      padding: "4px 10px",
                      fontSize: "0.74rem",
                      fontWeight: 750,
                      color: "#334155",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#c20101",
                      }}
                    />
                    <span>{svc.tag}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 4. Bottom Liquid Glass Progress Bar */}
        <div
          style={{
            maxWidth: "320px",
            margin: "0 auto",
            height: 4,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 10,
            overflow: "hidden",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.max(15, scrollProgress)}%`,
              background: "linear-gradient(90deg, #E50914, #ff6b6b)",
              borderRadius: 10,
              transition: "width 0.2s ease-out",
            }}
          />
        </div>
      </div>

      {/* Global Embedded Hover & Animation Styles matching GRSPL.com */}
      <style jsx global>{`
        /* 1. Initial State: Slanted / Diagonal Image Cut */
        .grspl-morph-container {
          -webkit-clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
          clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
          -webkit-transition: -webkit-clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1);
          transition: clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1), -webkit-clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: clip-path;
        }

        .grspl-card-photo {
          -webkit-transition: transform 0.9s cubic-bezier(0.25, 1, 0.5, 1);
          transition: transform 0.9s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        /* 2. Hover State: Image Slowly Opens to Full Rectangle like GRSPL.com */
        .grspl-arena-card-item:hover .grspl-morph-container {
          -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
        }

        .grspl-arena-card-item:hover .grspl-card-photo {
          transform: scale(1.06);
        }

        /* 3. Card Elevation & Ruby Specular Highlight */
        .grspl-arena-card-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 56px -12px rgba(0, 0, 0, 0.7),
                      0 0 32px rgba(229, 9, 20, 0.22) !important;
          border-color: rgba(255, 255, 255, 1) !important;
        }

        /* 4. Arrow Badge Transitions to Solid Red on Hover */
        .grspl-arena-card-item:hover .grspl-arrow-badge {
          background: #c20101 !important;
          color: #ffffff !important;
          transform: translateX(4px);
          box-shadow: 0 6px 16px rgba(194, 1, 1, 0.45) !important;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
