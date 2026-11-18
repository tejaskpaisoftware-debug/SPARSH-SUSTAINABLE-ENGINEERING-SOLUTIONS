"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Wrench,
  Eye,
  GraduationCap,
  Flame,
  CheckCircle2,
  Database,
  Leaf,
  HeartPulse,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface AcrosticItem {
  letter: string;
  word: string;
  title: string;
  tag: string;
  meaning: string;
  color: string;
  glow: string;
  gradient: string;
  icon: React.ElementType;
  deliverable: string;
}

const SETURAKSH_PILLARS: AcrosticItem[] = [
  {
    letter: "S",
    word: "SAFETY FIRST",
    title: "Proactive Hazard Control & Legal Compliance",
    tag: "Factories Act 1948 • DISH Statutory",
    meaning:
      "Systematic hazard identification (HIRA/JSA), statutory safety audits, and zero-compromise human defense across high-risk manufacturing plants.",
    color: "#e50914",
    glow: "rgba(229, 9, 20, 0.35)",
    gradient: "linear-gradient(135deg, #e50914 0%, #b30006 100%)",
    icon: ShieldAlert,
    deliverable: "Statutory DISH Section 40-B audits & comprehensive HIRA risk registries.",
  },
  {
    letter: "E",
    word: "ENGINEERING EXCELLENCE",
    title: "Technical Rigor & Scientific Safety Modeling",
    tag: "QRA • Hydraulic Engineering",
    meaning:
      "Quantitative risk analysis, toxic dispersion simulations, fire hydrant hydraulics, and process engineering solutions built on absolute scientific precision.",
    color: "#0284c7",
    glow: "rgba(2, 132, 199, 0.35)",
    gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    icon: Wrench,
    deliverable: "Certified structural engineering safety, PTW/LOTO design & DISH inspections.",
  },
  {
    letter: "T",
    word: "TRANSPARENCY",
    title: "Auditable Governance & Empirical Data",
    tag: "ISO 45001 • Form 37 Documentation",
    meaning:
      "Unbiased safety assessments, transparent risk registers, empirical audit trails, and data-backed compliance reports that earn executive and regulatory trust.",
    color: "#7c3aed",
    glow: "rgba(124, 58, 237, 0.35)",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    icon: Eye,
    deliverable: "100% auditable documentation for DISH, PESO, GPCB & global certifications.",
  },
  {
    letter: "U",
    word: "UPSKILLING",
    title: "Workforce Competency & Emergency Drills",
    tag: "30,000+ Personnel Empowered",
    meaning:
      "Hands-on tactical training, PASS fire extinguisher drills, live hydrant line handling, and behavioral safety transformation across operational crews.",
    color: "#059669",
    glow: "rgba(5, 150, 105, 0.35)",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    icon: GraduationCap,
    deliverable: "Multi-tier safety inductions, live drill simulations & emergency team readiness.",
  },
  {
    letter: "R",
    word: "RISK RESILIENCE",
    title: "HAZOP Facilitation & Barrier Defense",
    tag: "LOPA • Layer of Protection",
    meaning:
      "Proactive process safety barrier defense, critical procedure reviews, MOC governance, PSSR rigor, and chemical reaction hazard modeling.",
    color: "#ea580c",
    glow: "rgba(234, 88, 12, 0.35)",
    gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    icon: Flame,
    deliverable: "Certified HAZOP, SIL allocation, and multi-tier defense barriers for hazardous plants.",
  },
  {
    letter: "A",
    word: "ACCOUNTABILITY",
    title: "Operational Ownership & Zero Excuses",
    tag: "DISH Rule 68-O • PTW Discipline",
    meaning:
      "Contractor safety controls, life-critical work-at-height permits, strict lockout-tagout execution, and measurable safety KPIs that ensure zero excuses.",
    color: "#d946ef",
    glow: "rgba(217, 70, 239, 0.35)",
    gradient: "linear-gradient(135deg, #d946ef 0%, #c026d3 100%)",
    icon: CheckCircle2,
    deliverable: "End-to-end contractor onboarding safety, PTW audit trails & incident investigation RCA.",
  },
  {
    letter: "K",
    word: "KNOWLEDGE MASTERY",
    title: "20+ Years Proven Industrial Wisdom",
    tag: "500+ Multi-Sector Audits",
    meaning:
      "Deep institutional memory across chemical synthesis, API pharmaceutical plants, hazardous petroleum refineries, and mega EPC infrastructure projects.",
    color: "#2563eb",
    glow: "rgba(37, 99, 235, 0.35)",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    icon: Database,
    deliverable: "Benchmarked best practices tailored to Gujarat's Dahej, Ankleshwar & Pan-India hubs.",
  },
  {
    letter: "S",
    word: "SUSTAINABILITY",
    title: "Environmental Governance & ESG Decarbonization",
    tag: "GPCB Compliance • Waste Reduction",
    meaning:
      "Consent to Establish (CTE) & Consent to Operate (CTO) advisory, hazardous waste stewardship, resource efficiency, and forward-looking ESG strategies.",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.35)",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: Leaf,
    deliverable: "GPCB compliance audits, industrial decarbonization roadmap & environmental monitoring.",
  },
  {
    letter: "H",
    word: "HUMAN LIFE SAFEGUARD",
    title: "The Ultimate Mission Behind Every Audit",
    tag: "Zero-Harm Operating Culture",
    meaning:
      "Protecting every industrial worker so they return home safely to their families at the end of every shift. Safety is not a box to check — it is a moral pact.",
    color: "#dc2626",
    glow: "rgba(220, 38, 38, 0.4)",
    gradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    icon: HeartPulse,
    deliverable: "Human-centric behavior-based safety (BBS) & zero-fatality operational culture.",
  },
];

export default function SeturakshAcrosticSection() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const selectedPillar = activeLetter
    ? SETURAKSH_PILLARS.find((p) => p.letter === activeLetter)
    : null;

  return (
    <section
      className="section-padding seturaksh-acrostic-section"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #ffffff 0%, #f4f6fa 50%, #ffffff 100%)",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        overflow: "hidden",
        paddingTop: 70,
        paddingBottom: 80,
      }}
    >
      {/* Decorative Technical Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 400,
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.04) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 46px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 9999,
              background: "linear-gradient(135deg, rgba(229, 9, 20, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%)",
              border: "1px solid rgba(229, 9, 20, 0.25)",
              color: "var(--primary-red)",
              fontSize: "0.78rem",
              fontWeight: 850,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <Sparkles size={14} style={{ color: "var(--primary-red)" }} />
            <span>THE SETURAKSH ENGINEERING CODE</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.85rem)",
              fontWeight: 950,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Decoding <span style={{ color: "var(--primary-red)" }}>S•E•T•U•R•A•K•S•H</span>
          </h2>

          <p
            style={{
              fontSize: "1.06rem",
              color: "#424245",
              lineHeight: 1.65,
              margin: "0 auto",
            }}
          >
            Every letter in our name defines an uncompromising operational pillar — combining technical rigor,
            regulatory compliance, and genuine human safety across India’s industrial corridors.
          </p>

          {/* Interactive Letters Ribbon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {SETURAKSH_PILLARS.map((item, index) => {
              const isSelected = activeLetter === item.letter && selectedPillar?.word === item.word;
              return (
                <button
                  key={`${item.letter}-${index}`}
                  type="button"
                  onClick={() =>
                    setActiveLetter(isSelected ? null : item.letter)
                  }
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 54,
                    borderRadius: 14,
                    background: isSelected
                      ? item.gradient
                      : "rgba(255, 255, 255, 0.95)",
                    color: isSelected ? "#ffffff" : "#1d1d1f",
                    border: isSelected
                      ? `2px solid ${item.color}`
                      : "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: isSelected
                      ? `0 10px 24px ${item.glow}, inset 0 1px 1px rgba(255, 255, 255, 0.6)`
                      : "0 2px 8px rgba(0, 0, 0, 0.04)",
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isSelected ? "translateY(-3px) scale(1.08)" : "translateY(0)",
                  }}
                  title={`Click to explore ${item.word}`}
                >
                  <span style={{ fontSize: "1.25rem", fontWeight: 950, lineHeight: 1 }}>
                    {item.letter}
                  </span>
                  <span
                    style={{
                      fontSize: "0.55rem",
                      fontWeight: 800,
                      opacity: isSelected ? 1 : 0.65,
                      letterSpacing: "0.04em",
                      marginTop: 3,
                    }}
                  >
                    {item.word.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 9 Graphical Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {SETURAKSH_PILLARS.map((item, idx) => {
            const IconComponent = item.icon;
            const isFocal = activeLetter ? item.letter === activeLetter : true;

            return (
              <div
                key={`${item.letter}-${idx}`}
                className="liquid-card seturaksh-letter-card"
                style={{
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  borderRadius: 22,
                  border: isFocal && activeLetter
                    ? `2px solid ${item.color}`
                    : "1px solid rgba(0, 0, 0, 0.07)",
                  boxShadow: isFocal && activeLetter
                    ? `0 18px 45px ${item.glow}, inset 0 1px 1px #ffffff`
                    : "0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 1px #ffffff",
                  padding: "26px 24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  opacity: activeLetter && !isFocal ? 0.45 : 1,
                  transform: isFocal && activeLetter ? "translateY(-4px)" : "translateY(0)",
                  overflow: "hidden",
                }}
              >
                {/* Decorative Colored Top Glow Accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: item.gradient,
                  }}
                />

                {/* Card Top: 3D Giant Letter + Icon Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    {/* Big Stylized Letter Emblem */}
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: item.gradient,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.85rem",
                        fontWeight: 950,
                        boxShadow: `0 8px 20px ${item.glow}, inset 0 1px 1px rgba(255, 255, 255, 0.6)`,
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <span>{item.letter}</span>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 900,
                          color: "#1d1d1f",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.word}
                      </div>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          color: item.color,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Icon Emblem */}
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      background: `${item.color}14`,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <IconComponent size={20} strokeWidth={2.3} />
                  </div>
                </div>

                {/* Pillar Title */}
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    color: "#1d1d1f",
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>

                {/* Pillar Meaning Description */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#52525b",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {item.meaning}
                </p>

                {/* Practical Deliverable Chip */}
                <div
                  style={{
                    marginTop: "auto",
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: `${item.color}09`,
                    border: `1px solid ${item.color}20`,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <ShieldCheck size={15} style={{ color: item.color, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 650, color: "#27272a", lineHeight: 1.4 }}>
                    {item.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Link to Request Audit */}
        <div
          style={{
            marginTop: 46,
            padding: "22px 28px",
            borderRadius: 20,
            background: "rgba(10, 16, 26, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #e50914 0%, #b30006 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 6px 18px rgba(229, 9, 20, 0.4)",
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: "1.05rem", fontWeight: 850, color: "#ffffff", lineHeight: 1.2 }}>
                Put the SETURAKSH Code to Work in Your Plant
              </div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.72)", marginTop: 2 }}>
                Connect with our certified lead auditors for a comprehensive statutory EHS, PSM or Fire Safety assessment.
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              padding: "12px 24px",
              borderRadius: 9999,
              fontSize: "0.88rem",
              fontWeight: 800,
              boxShadow: "0 6px 20px rgba(229, 9, 20, 0.45)",
            }}
          >
            <span>Request Diagnostic Audit</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
