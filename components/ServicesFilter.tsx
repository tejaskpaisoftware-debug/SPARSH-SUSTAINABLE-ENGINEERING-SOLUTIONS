"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  Flame,
  Activity,
  GraduationCap,
  Leaf,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Grid,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Award,
  FileCheck,
} from "lucide-react";

interface ScopeItem {
  title: string;
  detail: string;
}

interface ServiceCategory {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  color: string;
  glow: string;
  gradient: string;
  bannerImage: string;
  iconImage: string;
  tag: string;
  metric: string;
  desc: string;
  scopeItems: ScopeItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "ehs",
    step: "01",
    title: "EHS Management & Compliance",
    subtitle: "Workforce Safety & Legal Compliance",
    color: "#00843d",
    glow: "rgba(0, 132, 61, 0.3)",
    gradient: "linear-gradient(135deg, #00843d 0%, #005a28 100%)",
    bannerImage: "/images/divisions/engineers-plant-inspection.jpg",
    iconImage: "/service-ehs.png",
    tag: "Factories Act 1948 • DISH Sec 40-B",
    metric: "100% Legal & Regulatory Defense",
    desc: "Rigorous statutory compliance advisory, environmental health and safety management systems (EHSMS), and on-site hazard defense across high-risk manufacturing sites.",
    scopeItems: [
      { title: "EHSMS System Audit & Review", detail: "Comprehensive health check against ISO 45001 & State Factory Rules." },
      { title: "Statutory Legal Advisory", detail: "Full DISH Sec 40-B compliance, register maintenance & legal notices." },
      { title: "HIRA & Quantitative JSA", detail: "Hazard identification, job safety matrices & residual risk controls." },
      { title: "Contractor Safety Governance", detail: "High-risk permit enforcement & contractor onboarding protocols." },
      { title: "Incident Investigation & RCA", detail: "Root cause analysis, barrier defense & preventive action design." },
    ],
  },
  {
    id: "fire",
    step: "02",
    title: "Fire Safety & Emergency Management",
    subtitle: "Asset Protection & Crisis Readiness",
    color: "#d9251d",
    glow: "rgba(217, 37, 29, 0.3)",
    gradient: "linear-gradient(135deg, #d9251d 0%, #a81711 100%)",
    bannerImage: "/photos/fire-hydrant-drill-main.jpg",
    iconImage: "/service-fire.png",
    tag: "NFPA 13/25 • NBC Part IV Mandate",
    metric: "NFPA Hydraulic Flow Rate Verified",
    desc: "End-to-end fire risk assessments, hydraulic network evaluations, tactical fire fighting ground drills, and certified On-Site Emergency Management Plans (OSERP).",
    scopeItems: [
      { title: "Fire Risk Assessments (FRA)", detail: "Fuel load calculations, egress route modeling & passive fire defense." },
      { title: "Statutory Fire Safety Audits", detail: "NBC 2016 Part IV & DISH Rule 66-A compliance verification." },
      { title: "Hydrant & Sprinkler Engineering", detail: "Pump capacity testing, flow pressure verification & ring main diagnostics." },
      { title: "On-Site Emergency Plans (OSERP)", detail: "Zonal evacuation protocols, disaster control & mutual aid frameworks." },
      { title: "Mock Drills & Live Simulations", detail: "Live tactical turnout, smoke drills & response time benchmarking." },
    ],
  },
  {
    id: "process",
    step: "03",
    title: "Process Safety Management",
    subtitle: "PSM, HAZOP & Operational Risk Control",
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.3)",
    gradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    bannerImage: "/images/divisions/chemical-processing-plant.jpg",
    iconImage: "/service-process.png",
    tag: "HAZOP • LOPA • MOC Protocols",
    metric: "Multi-Tier Layer of Protection",
    desc: "High-hazard chemical synthesis and hydrocarbon risk modeling. Node-by-node HAZOP facilitation, Management of Change (MOC), and Pre-Startup Safety Reviews (PSSR).",
    scopeItems: [
      { title: "HAZID & HAZOP Facilitation", detail: "Multidisciplinary node-by-node deviation analysis with certified leaders." },
      { title: "Management of Change (MOC)", detail: "Engineering integrity review for piping, instruments & recipe alterations." },
      { title: "Pre-Startup Safety Review (PSSR)", detail: "Zero-leak line-walk verification before toxic chemical introduction." },
      { title: "Layer of Protection Analysis (LOPA)", detail: "Independent protection layers (IPL) & Safety Integrity Level (SIL) targets." },
      { title: "Critical SOP & Barrier Reviews", detail: "Standardizing safety-critical chemical batch handling & interlock limits." },
    ],
  },
  {
    id: "training",
    step: "04",
    title: "Training & Competency",
    subtitle: "Workforce Induction & Emergency Preparedness",
    color: "#7e22ce",
    glow: "rgba(126, 34, 206, 0.3)",
    gradient: "linear-gradient(135deg, #7e22ce 0%, #581c87 100%)",
    bannerImage: "/photos/workforce-safety-training-1.jpg",
    iconImage: "/service-risk.png",
    tag: "PASS Method • BBS Culture Transformation",
    metric: "30,000+ Workers & Officers Certified",
    desc: "Dynamic safety leadership workshops, hands-on firefighting simulations, PASS method practical extinguisher drills, and site-wide Behavior-Based Safety (BBS) programs.",
    scopeItems: [
      { title: "Multilingual Workforce Induction", detail: "High-retention visual modules in Hindi, Gujarati & English for plant labor." },
      { title: "PASS Live Fire Ground Drills", detail: "Practical extinguisher discharge on controlled industrial hydrocarbon fires." },
      { title: "Emergency Response Team (ERT)", detail: "Breathing apparatus (SCBA), confined space rescue & casualty triage drills." },
      { title: "Executive Safety Leadership", detail: "Empowering plant managers & supervisors to cultivate a zero-harm mindset." },
      { title: "Behavior-Based Safety (BBS)", detail: "Peer-to-peer hazard observation, positive reinforcement & risk reduction." },
    ],
  },
  {
    id: "env",
    step: "05",
    title: "Environment & Sustainability",
    subtitle: "Decarbonization, Waste & ESG Advisory",
    color: "#0d8a43",
    glow: "rgba(13, 138, 67, 0.3)",
    gradient: "linear-gradient(135deg, #0d8a43 0%, #065f2c 100%)",
    bannerImage: "/images/divisions/thermal-power-safety-audit.jpg",
    iconImage: "/service-env.png",
    tag: "GPCB CTE/CTO • Zero Liquid Discharge",
    metric: "Zero-Discharge & Decarbonization",
    desc: "Strategic pollution control governance, GPCB/CPCB statutory consent management, hazardous waste stewardship, ETP/STP optimization, and ESG sustainability roadmaps.",
    scopeItems: [
      { title: "GPCB CTE / CTO Compliance", detail: "Turnkey documentation, online portal filing & statutory consent renewal." },
      { title: "Hazardous Waste Rule 9 Compliance", detail: "TSDF manifesting, storage area audits & authorized co-processing advisory." },
      { title: "Effluent & Air Emission Control", detail: "ETP/STP process optimization, scrubber performance & stack audit." },
      { title: "Zero Liquid Discharge (ZLD)", detail: "RO and MEE water recovery engineering to minimize freshwater consumption." },
      { title: "ESG & Carbon Footprint Advisory", detail: "Scope 1 & Scope 2 greenhouse gas monitoring and green industry certification." },
    ],
  },
  {
    id: "engineering",
    step: "06",
    title: "Engineering & Project Safety",
    subtitle: "Industrial Precision, PTW & Construction Risk",
    color: "#0066cc",
    glow: "rgba(0, 102, 204, 0.3)",
    gradient: "linear-gradient(135deg, #0066cc 0%, #00478f 100%)",
    bannerImage: "/images/hero/seturaksh-construction-infrastructure-poster.jpg",
    iconImage: "/service-engineering.png",
    tag: "DISH Sec 28/29/31 • Structural Rigor",
    metric: "Zero-Incident Design & Commissioning",
    desc: "Rigorous construction safety oversight, Lockout-Tagout (LOTO) engineering, competent person testing under Factory Act Sections 28/29/31, and pre-commissioning risk audits.",
    scopeItems: [
      { title: "Greenfield & Brownfield Audits", detail: "Pre-commissioning safety reviews, battery-limit routing & plot layout verification." },
      { title: "Construction Safety Management", detail: "Engineered scaffolding inspections, deep trench shoring & heavy crane lift plans." },
      { title: "PTW & LOTO Isolation Audits", detail: "Positive physical energy isolation, tagout governance & live breaker checks." },
      { title: "Design-Stage Inherently Safer Input", detail: "Early EPC hazard elimination to protect capital assets before steel is erected." },
      { title: "DISH Competent Person Certifications", detail: "Statutory load testing of lifting equipment, pressure vessels (Form 11/13/14)." },
    ],
  },
];

function ServicesFilterInner() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("all");

  // Read ?service= query param when navigated from Home or elsewhere
  useEffect(() => {
    const serviceParam = searchParams?.get("service");
    if (serviceParam && serviceCategories.some((s) => s.id === serviceParam)) {
      setFilter(serviceParam);
      const timer = setTimeout(() => {
        const el = document.getElementById("services-filter-container");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div id="services-filter-container" style={{ position: "relative" }}>
      {/* 6 Services Quick Interactive Strip */}
      <div
        className="services-icon-strip-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "16px 20px",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: 22,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 10px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 #ffffff",
          marginBottom: 36,
          flexWrap: "wrap",
        }}
      >
        {/* All Services Pill */}
        <button
          type="button"
          onClick={() => setFilter("all")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 16px",
            borderRadius: 14,
            border: filter === "all" ? "2px solid #1d1d1f" : "1px solid rgba(0, 0, 0, 0.08)",
            background: filter === "all" ? "#1d1d1f" : "rgba(255, 255, 255, 0.95)",
            color: filter === "all" ? "#ffffff" : "#1d1d1f",
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: filter === "all" ? "scale(1.03)" : "scale(1)",
            boxShadow: filter === "all" ? "0 6px 18px rgba(0, 0, 0, 0.18)" : "0 2px 6px rgba(0, 0, 0, 0.02)",
            fontWeight: 800,
            fontSize: "0.82rem",
            letterSpacing: "0.03em",
            textTransform: "uppercase",
          }}
        >
          <Grid style={{ width: 16, height: 16 }} />
          <span>All 6 Services</span>
        </button>

        {serviceCategories.map((cat) => {
          const isSelected = filter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(isSelected ? "all" : cat.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 15px",
                borderRadius: 14,
                border: isSelected ? `2px solid ${cat.color}` : "1px solid rgba(0, 0, 0, 0.08)",
                background: isSelected ? `${cat.color}15` : "rgba(255, 255, 255, 0.95)",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isSelected ? "scale(1.04)" : "scale(1)",
                boxShadow: isSelected ? `0 6px 18px ${cat.glow}` : "0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ width: 28, height: 28, position: "relative", flexShrink: 0 }}>
                <Image
                  src={cat.iconImage}
                  alt={cat.title}
                  width={28}
                  height={28}
                  style={{ borderRadius: "50%", objectFit: "contain" }}
                />
              </div>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  color: isSelected ? cat.color : "#1d1d1f",
                  textTransform: "uppercase",
                }}
              >
                {cat.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 6 Graphical Services Cards Grid */}
      <div className={`services-grid ${filter !== "all" ? "single-view" : ""}`}>
        {serviceCategories.map((cat) => {
          const isVisible = filter === "all" || filter === cat.id;
          return (
            <div
              key={cat.id}
              className={`liquid-card service-category-card ${isVisible ? "is-visible" : "is-hidden"}`}
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: 24,
                border: isVisible && filter !== "all" ? `2px solid ${cat.color}` : `1px solid rgba(0, 0, 0, 0.09)`,
                boxShadow:
                  isVisible && filter !== "all"
                    ? `0 20px 50px ${cat.glow}, 0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 #ffffff`
                    : "0 12px 36px rgba(0, 0, 0, 0.05), inset 0 1px 0 #ffffff",
                animation: isVisible ? "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" : undefined,
                background: "#ffffff",
                display: isVisible ? "flex" : "none",
                flexDirection: "column",
              }}
            >
              {/* Top Photographic Hero Banner */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 220,
                  overflow: "hidden",
                  background: "#0d1117",
                }}
              >
                <Image
                  src={cat.bannerImage}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: "scale(1.02)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  priority={cat.id === "ehs" || cat.id === "fire"}
                />

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10, 16, 26, 0.4) 0%, rgba(10, 16, 26, 0.88) 100%)",
                  }}
                />

                {/* Top Badge Strip on Banner */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 18,
                    right: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 2,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 900,
                        padding: "5px 12px",
                        borderRadius: 9999,
                        background: cat.gradient,
                        color: "#ffffff",
                        letterSpacing: "0.06em",
                        boxShadow: `0 4px 14px ${cat.glow}`,
                      }}
                    >
                      STEP {cat.step}
                    </span>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: 9999,
                        background: "rgba(255, 255, 255, 0.18)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        color: "#ffffff",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cat.tag}
                    </span>
                  </div>

                  {/* Icon Emblem on Glass */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: "rgba(255, 255, 255, 0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={cat.iconImage}
                      alt={cat.title}
                      width={32}
                      height={32}
                      style={{ borderRadius: "50%", objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Banner Title & Metric at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 20,
                    right: 20,
                    zIndex: 2,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                      fontWeight: 900,
                      color: "#ffffff",
                      margin: "0 0 6px",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    {cat.title}
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: 700,
                      }}
                    >
                      {cat.subtitle}
                    </span>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 850,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.35)",
                        letterSpacing: "0.03em",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Sparkles size={11} />
                      {cat.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body with Detailed Scope Cards */}
              <div
                style={{
                  padding: "24px 26px 22px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#475569",
                    lineHeight: 1.6,
                    margin: "0 0 20px",
                  }}
                >
                  {cat.desc}
                </p>

                {/* Graphical Deliverable Micro-Cards */}
                <div style={{ marginBottom: 22, marginTop: "auto" }}>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 850,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#64748b",
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <FileCheck size={14} style={{ color: cat.color }} />
                    <span>Statutory Scope &amp; Deliverables</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {cat.scopeItems.map((scope, itemIdx) => (
                      <div
                        key={itemIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          padding: "9px 12px",
                          borderRadius: 12,
                          background: `${cat.color}08`,
                          border: `1px solid ${cat.color}18`,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <ShieldCheck
                          size={16}
                          style={{ color: cat.color, flexShrink: 0, marginTop: 2 }}
                        />
                        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          <span
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 800,
                              color: "#1e293b",
                              lineHeight: 1.3,
                            }}
                          >
                            {scope.title}
                          </span>
                          <span
                            style={{
                              fontSize: "0.76rem",
                              color: "#64748b",
                              lineHeight: 1.35,
                            }}
                          >
                            {scope.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Bar */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 18,
                    borderTop: "1px solid rgba(0, 0, 0, 0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      style={{
                        fontSize: "0.86rem",
                        fontWeight: 800,
                        padding: "10px 20px",
                        background: cat.gradient,
                        borderColor: cat.color,
                        color: "#fff",
                        boxShadow: `0 4px 14px ${cat.glow}`,
                        borderRadius: 12,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span>Request Scope Audit</span>
                      <ArrowRight style={{ width: 14, height: 14 }} />
                    </Link>

                    {filter !== "all" && (
                      <button
                        type="button"
                        onClick={() => setFilter("all")}
                        className="btn btn-secondary"
                        style={{
                          fontSize: "0.84rem",
                          fontWeight: 750,
                          padding: "9px 16px",
                          borderRadius: 12,
                        }}
                      >
                        <ArrowLeft style={{ width: 14, height: 14 }} />
                        <span>All 6 Services</span>
                      </button>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.75rem",
                      fontWeight: 750,
                      color: "#64748b",
                    }}
                  >
                    <Award size={15} style={{ color: cat.color }} />
                    <span>DISH &amp; ISO Lead Audited</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesFilter() {
  return (
    <Suspense fallback={<div style={{ minHeight: 400 }} />}>
      <ServicesFilterInner />
    </Suspense>
  );
}
