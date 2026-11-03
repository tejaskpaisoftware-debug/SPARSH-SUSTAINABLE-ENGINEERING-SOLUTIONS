"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Grid, ArrowLeft } from "lucide-react";

interface ServiceCategory {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  color: string;
  glow: string;
  image: string;
  desc: string;
  items: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "ehs",
    step: "01",
    title: "EHS Management & Compliance",
    subtitle: "Workforce Safety & Legal Compliance",
    color: "#00843d",
    glow: "rgba(0, 132, 61, 0.28)",
    image: "/service-ehs.png",
    desc: "Risk-based professional support tailored to each site, project and operating context to ensure full statutory compliance and workforce protection.",
    items: [
      "EHS Management Systems (EHSMS) Review",
      "Legal & Statutory Compliance Support",
      "Hazard Identification & Risk Assessment (HIRA / JSA)",
      "Contractor Safety Management & Oversight",
      "Incident Investigation & Root Cause Analysis (RCA)",
    ],
  },
  {
    id: "fire",
    step: "02",
    title: "Fire Safety & Emergency Management",
    subtitle: "Asset Protection & Crisis Readiness",
    color: "#d9251d",
    glow: "rgba(217, 37, 29, 0.28)",
    image: "/service-fire.png",
    desc: "Comprehensive industrial fire engineering, life safety gap assessments, system design reviews, and emergency defense infrastructure.",
    items: [
      "Comprehensive Fire Risk Assessments (FRA)",
      "Fire Safety Audits & Gap Analysis",
      "Fire Protection & Hydrant System Reviews",
      "Emergency Plans & Disaster Management (ERDMP)",
      "Emergency Evacuation Mock Drills & Evaluation",
    ],
  },
  {
    id: "process",
    step: "03",
    title: "Process Safety Management",
    subtitle: "PSM, HAZOP & Operational Risk Control",
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.28)",
    image: "/service-process.png",
    desc: "Rigorous chemical, pharmaceutical, and oil & gas process safety solutions preventing catastrophic releases, fires, and explosions.",
    items: [
      "HAZID & HAZOP Facilitation & Support",
      "Management of Change (MOC) Procedures",
      "Pre-Startup Safety Reviews (PSSR)",
      "Layers of Protection Analysis (LOPA) Support",
      "Critical Operating Procedure Reviews & SOPs",
      "Process Safety Awareness & Competency Programmes",
    ],
  },
  {
    id: "training",
    step: "04",
    title: "Training & Competency",
    subtitle: "Workforce Induction & Emergency Preparedness",
    color: "#7e22ce",
    glow: "rgba(126, 34, 206, 0.28)",
    image: "/service-risk.png",
    desc: "Building frontline competence, positive safety culture, emergency readiness, and behavioral excellence across technical operations.",
    items: [
      "Workforce Safety Induction & Orientation",
      "Hands-on Fire Safety Awareness",
      "Emergency Response Training Coordination",
      "Safety Leadership & Supervisory Competency",
      "Behavior-Based Safety (BBS) Programs",
    ],
  },
  {
    id: "env",
    step: "05",
    title: "Environment & Sustainability",
    subtitle: "Decarbonization, Waste & ESG Advisory",
    color: "#0d8a43",
    glow: "rgba(13, 138, 67, 0.28)",
    image: "/service-env.png",
    desc: "Practical environmental sustainability, waste management, and regulatory compliance strategies guiding industrial operations.",
    items: [
      "Environmental Statutory Compliance Support",
      "Industrial Waste Management Guidance",
      "Sustainability Initiatives & Carbon Decarbonization",
      "ESG Advisory Support & Materiality Frameworks",
      "Pollution Prevention & Environmental Best Practice",
    ],
  },
  {
    id: "engineering",
    step: "06",
    title: "Engineering & Project Safety",
    subtitle: "Industrial Precision, PTW & Construction Risk",
    color: "#0066cc",
    glow: "rgba(0, 102, 204, 0.28)",
    image: "/service-engineering.png",
    desc: "Lifecycle engineering safety input from greenfield/brownfield design stages through construction, commissioning, and operational PTW.",
    items: [
      "Greenfield & Brownfield Project Safety Reviews",
      "Construction Safety & Work at Height Oversight",
      "Permit-to-Work (PTW) & Lockout-Tagout (LOTO) Reviews",
      "Design-Stage Risk Input & Pre-Commissioning Verification",
      "Plant Site Safety Inspections & Technical Peer Audits",
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
      // Gentle scroll to the services container
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
    <div id="services-filter-container">
      {/* 6 Services Quick Interactive Strip */}
      <div
        className="services-icon-strip-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          padding: "16px 20px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 22,
          border: "1px solid rgba(255, 255, 255, 0.95)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 #ffffff",
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
            padding: "8px 14px",
            borderRadius: 14,
            border: filter === "all" ? "2px solid #1d1d1f" : "1px solid rgba(0, 0, 0, 0.08)",
            background: filter === "all" ? "#1d1d1f" : "rgba(255, 255, 255, 0.9)",
            color: filter === "all" ? "#ffffff" : "#1d1d1f",
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: filter === "all" ? "scale(1.03)" : "scale(1)",
            boxShadow: filter === "all" ? "0 6px 18px rgba(0, 0, 0, 0.18)" : "0 2px 6px rgba(0, 0, 0, 0.02)",
            fontWeight: 750,
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
                padding: "8px 14px",
                borderRadius: 14,
                border: isSelected ? `2px solid ${cat.color}` : "1px solid rgba(0, 0, 0, 0.08)",
                background: isSelected ? `${cat.color}15` : "rgba(255, 255, 255, 0.9)",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isSelected ? "scale(1.04)" : "scale(1)",
                boxShadow: isSelected ? `0 6px 18px ${cat.glow}` : "0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ width: 30, height: 30, position: "relative", flexShrink: 0 }}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%", objectFit: "contain" }}
                />
              </div>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  letterSpacing: "0.03em",
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

      {/* 6 Services Grid (Glitch-Free & Instant Visibility) */}
      <div className={`services-grid ${filter !== "all" ? "single-view" : ""}`}>
        {serviceCategories.map((cat) => {
          const isVisible = filter === "all" || filter === cat.id;
          return (
            <div
              key={cat.id}
              className={`liquid-card service-category-card ${isVisible ? "is-visible" : "is-hidden"}`}
              style={{
                borderColor: `${cat.color}40`,
                boxShadow:
                  isVisible && filter !== "all"
                    ? `0 16px 48px ${cat.glow}, 0 4px 12px rgba(0,0,0,0.04), inset 0 1px 0 #ffffff`
                    : "0 10px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 #ffffff",
                animation: isVisible ? "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" : undefined,
              }}
            >
              <div className="service-cat-header">
                <div
                  className="cat-icon-badge"
                  style={{
                    background: "transparent",
                    boxShadow: `0 8px 22px ${cat.glow}`,
                    padding: 0,
                    width: 56,
                    height: 56,
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={56}
                    height={56}
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ marginLeft: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: `${cat.color}18`,
                        color: cat.color,
                        border: `1px solid ${cat.color}35`,
                        letterSpacing: "0.04em",
                      }}
                    >
                      STEP {cat.step}
                    </span>
                    <h3 className="service-cat-title" style={{ margin: 0, fontSize: "1.35rem" }}>
                      {cat.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: "0.84rem", color: cat.color, fontWeight: 700 }}>
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65, margin: "16px 0 20px" }}>
                {cat.desc}
              </p>

              <ul className="service-items-list" style={{ marginTop: "auto" }}>
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="service-item-row">
                    <CheckCircle2
                      className="service-item-bullet"
                      style={{ width: 18, height: 18, color: cat.color, flexShrink: 0 }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 26,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                    style={{
                      fontSize: "0.85rem",
                      padding: "9px 18px",
                      background: cat.color,
                      borderColor: cat.color,
                      color: "#fff",
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
                      style={{ fontSize: "0.84rem", padding: "8px 16px" }}
                    >
                      <ArrowLeft style={{ width: 14, height: 14 }} />
                      <span>View All 6 Services</span>
                    </button>
                  )}
                </div>

                <span style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", fontWeight: 600 }}>
                  Statutory & ISO Certified
                </span>
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
