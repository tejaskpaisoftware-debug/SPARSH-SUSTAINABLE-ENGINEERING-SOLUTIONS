"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
// import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import FieldOperationsGallery from "@/components/FieldOperationsGallery";
import FieldVideoShowcase from "@/components/FieldVideoShowcase";
import ServiceArenaSection from "@/components/ServiceArenaSection";
import Counter from "@/components/Counter";
import {
  ShieldCheck,
  Flame,
  Factory,
  GraduationCap,
  Leaf,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  FileCheck2,
  Award,
  Search,
  BarChart3,
  ClipboardList,
  Settings,
  TrendingUp,
  Cpu,
  Shield,
  FileText,
  AlertTriangle,
  Layers,
  Sparkles,
  FlaskConical,
  Pill,
  HardHat,
  Warehouse,
  Clock,
  Zap,
  Target,
} from "lucide-react";

const INDUSTRIES_SERVED = [
  {
    name: "Chemical & Process Manufacturing",
    desc: "Chemical handling, process hazards, fire prevention and operational risk.",
    accentColor: "#0a4c8f",
    tag: "HAZOP & QRA Rigor",
    icon: FlaskConical,
    href: "/services?service=process",
    image: "/images/hero/seturaksh-ehs-chemical-plant-inspection.jpg",
    chips: ["DISH 68-J Audits", "HAZOP & LOPA", "Toxic Dispersion"],
  },
  {
    name: "Pharmaceuticals & API",
    desc: "Plant EHS, contractor safety, process safety and compliance support.",
    accentColor: "#008b9e",
    tag: "Cleanroom & GMP EHS",
    icon: Pill,
    href: "/services?service=ehs",
    image: "/images/hero/seturaksh-pharmaceuticals-api-poster.jpg",
    chips: ["Cleanroom GMP", "Solvent Recovery", "Containment EHS"],
  },
  {
    name: "Oil, Gas, EPC & Engineering",
    desc: "Project safety, PTW, construction risk and commissioning readiness.",
    accentColor: "#5ea434",
    tag: "Offshore & EPC Protocol",
    icon: Flame,
    href: "/services?service=engineering",
    image: "/images/hero/seturaksh-oil-gas-epc-poster.jpg",
    chips: ["QRA & SIL Allocation", "High-Risk PTW", "Commissioning Rigor"],
  },
  {
    name: "Construction & Infrastructure",
    desc: "Greenfield/brownfield projects, work at height and contractor controls.",
    accentColor: "#084f9c",
    tag: "Work at Height & PTW",
    icon: HardHat,
    href: "/services?service=engineering",
    image: "/images/hero/seturaksh-construction-infrastructure-poster.jpg",
    chips: ["Work-at-Height", "Scaffolding Safety", "Deep Excavation"],
  },
  {
    name: "Manufacturing & Warehousing",
    desc: "Workplace safety, fire readiness, material handling and emergency planning.",
    accentColor: "#0097a7",
    tag: "Material Flow & 5S",
    icon: Warehouse,
    href: "/services?service=fire",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    chips: ["NBC 2016 Hydrant", "Material Flow & 5S", "Forklift Safety"],
  },
  {
    name: "Commercial & Institutional Facilities",
    desc: "Fire risk awareness, evacuation planning and safety systems review.",
    accentColor: "#7cb342",
    tag: "NBC & Evacuation Planning",
    icon: Building2,
    href: "/services?service=fire",
    image: "/images/hero/seturaksh-institutional-safety-poster.jpg",
    chips: ["Fire Safety NOC", "Evacuation Drills", "Life Safety Audit"],
  },
];

const FAQS = [
  {
    q: "How long does a typical plant safety audit take?",
    a: "Focused statutory or fire audits take 2–4 days on-site, followed by data analysis and prioritized CAPA reporting. Enterprise-wide PSM or HAZOP studies span 2–3 weeks.",
  },
  {
    q: "Are your specialists certified by statutory authorities?",
    a: "Yes. Our advisory team includes DISH-approved Competent Persons, NEBOSH-certified auditors, ADIS diploma holders, and certified Fire Engineers.",
  },
  {
    q: "Can Seturaksh assist with Fire Safety NOC issuance and renewal?",
    a: "Yes. We conduct complete NBC 2016 fire audits, inspect active and passive protection systems, and prepare all technical documentation for Fire NOC approval.",
  },
  {
    q: "Do you deliver customized on-site training for plant personnel?",
    a: "Yes. We deliver hands-on training directly at your facility in Gujarati, Hindi, and English—covering live extinguisher drills (PASS), chemical HazCom, and Permit-to-Work (PTW).",
  },
];

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* =========================================================================
          SECTION 1: HERO SLIDER (Exact GRSPL 4K Landscape Refinery Slider)
          ========================================================================= */}
      <HeroSlider />

      {/* Client Logos Marquee Strip temporarily removed */}
      {/* <ClientLogosMarquee /> */}

      {/* =========================================================================
          SECTION 2: CORPORATE ABOUT & RESILIENCE (GRSPL Section 3 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff", overflow: "hidden" }} id="about-overview">
        <div className="container">
          <div className="corporate-about-grid scroll-stagger">
            <div className="scroll-reveal">
              <div className="section-badge">Crafted for Resilience</div>
              <h2 className="section-title">
                Transforming Industrial Risk into Lasting Resilience
              </h2>
              <p style={{ fontSize: "1.08rem", color: "#424245", lineHeight: 1.65, marginBottom: 26, maxWidth: 620 }}>
                <strong>SETURAKSH</strong> provides accredited risk engineering, statutory DISH &amp; PESO compliance, and process safety advisory—bridging regulatory mandates with practical shop-floor defense.
              </p>

              {/* 4 Foundational Pillars */}
              <div className="pillars-grid" style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-dark)" }}>Statutory Compliance</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Factories Act, DISH &amp; PESO</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-dark)" }}>Process Safety (PSM)</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>HAZOP, HIRA &amp; QRA</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-dark)" }}>Fire Protection</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>NBC audits &amp; hydrant testing</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-dark)" }}>Workforce Competency</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Practical drills &amp; BBS culture</div>
                  </div>
                </div>
              </div>

              <div className="about-cta-btns">
                <Link href="/about" className="btn btn-primary">
                  <span>About Our Firm</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/why-sparsh" className="btn btn-outline-red">
                  <span>Why Work With Us</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Director Spotlight */}
            <div
              className="industrial-card scroll-reveal"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                color: "#1d1d1f",
                padding: "32px 28px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1.5px #ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <div style={{ position: "relative", width: 76, height: 76, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--primary-red)", flexShrink: 0 }}>
                  <Image
                    src="/sachin.jpeg"
                    alt="Mr. Sachin Patel"
                    fill
                    sizes="76px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1d1d1f", lineHeight: 1.2 }}>
                    Mr. Sachin Patel
                  </div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 750, color: "var(--primary-red)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>
                    Founder &amp; Director
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#6e6e73", marginTop: 2 }}>
                    20+ Years EHS &amp; Fire Protection Leadership
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "0.88rem", color: "#424245", lineHeight: 1.55, marginBottom: 16 }}>
                “Industrial safety is forged on the shop-floor through engineered barriers, competent personnel, and disciplined execution.”
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {["DISH Competent Person", "ADIS (Govt. Approved)", "NEBOSH PSM", "B.Sc. Fire & Safety"].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      background: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      padding: "3px 8px",
                      borderRadius: 4,
                      color: "#1d1d1f",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/about#leadership"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.84rem",
                  fontWeight: 800,
                  color: "var(--primary-red)",
                  textDecoration: "none",
                }}
              >
                <span>View Leadership Profile</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR SERVICE ARENA (GRSPL Diagonal Cards in iOS Liquid Glass Theme)
          ========================================================================= */}
      <ServiceArenaSection />

      {/* =========================================================================
          SECTION 5: THE SETURAKSH ADVANTAGE - MODERN INDUSTRIAL RESILIENCE
          ========================================================================= */}
      <section className="new-firm-section">
        <div className="container">
          <div className="section-header-center scroll-reveal">
            <div className="section-badge dark">The Modern Safety Standard</div>
            <h2 className="section-title" style={{ color: "#1d1d1f" }}>
              Engineered for High-Stakes Industrial Resilience
            </h2>
            <p className="section-subtitle" style={{ color: "#424245" }}>
              Senior statutory mastery, quantitative risk modeling, and rapid on-site execution.
            </p>
          </div>

          <div className="new-firm-grid scroll-stagger">
            {/* Pillar 1: Statutory Authority */}
            <div className="new-firm-card scroll-reveal">
              <div
                className="new-firm-icon-wrap"
                style={{
                  background: "rgba(229, 9, 20, 0.08)",
                  color: "#e50914",
                  border: "1px solid rgba(229, 9, 20, 0.2)",
                }}
              >
                <Award size={24} />
              </div>
              <span
                className="new-firm-tag"
                style={{
                  background: "rgba(229, 9, 20, 0.08)",
                  color: "#c20101",
                  border: "1px solid rgba(229, 9, 20, 0.2)",
                }}
              >
                Statutory Authority
              </span>
              <h3 className="new-firm-title">Statutory Mastery</h3>
              <p className="new-firm-desc">
                DISH, Factories Act, and PESO compliance engineered to eliminate regulatory notices and liabilities.
              </p>
              <ul className="new-firm-bullets">
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#c20101", flexShrink: 0, marginTop: 2 }} />
                  <span>DISH-competent person inspections</span>
                </li>
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#c20101", flexShrink: 0, marginTop: 2 }} />
                  <span>NBC 2016 &amp; PESO SMPV audit readiness</span>
                </li>
              </ul>
              <div className="new-firm-footer-chip">
                <span>Compliance</span>
                <span style={{ color: "#1d1d1f" }}>100% Audit Readiness</span>
              </div>
            </div>

            {/* Pillar 2: 48-Hour Field Mobilization */}
            <div className="new-firm-card scroll-reveal">
              <div
                className="new-firm-icon-wrap"
                style={{
                  background: "rgba(10, 76, 143, 0.08)",
                  color: "#0a4c8f",
                  border: "1px solid rgba(10, 76, 143, 0.2)",
                }}
              >
                <Clock size={24} />
              </div>
              <span
                className="new-firm-tag"
                style={{
                  background: "rgba(10, 76, 143, 0.08)",
                  color: "#0a4c8f",
                  border: "1px solid rgba(10, 76, 143, 0.2)",
                }}
              >
                Agile Deployment
              </span>
              <h3 className="new-firm-title">48h Field Dispatch</h3>
              <p className="new-firm-desc">
                Rapid on-site deployment across Gujarat’s industrial belts without bureaucratic delays.
              </p>
              <ul className="new-firm-bullets">
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#0a4c8f", flexShrink: 0, marginTop: 2 }} />
                  <span>Dahej, Ankleshwar, Hazira &amp; Sanand</span>
                </li>
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#0a4c8f", flexShrink: 0, marginTop: 2 }} />
                  <span>Direct technical access (no middlemen)</span>
                </li>
              </ul>
              <div className="new-firm-footer-chip">
                <span>Mobilization</span>
                <span style={{ color: "#1d1d1f" }}>&lt; 48 Hours On-Site</span>
              </div>
            </div>

            {/* Pillar 3: Quantitative Risk Engineering */}
            <div className="new-firm-card scroll-reveal">
              <div
                className="new-firm-icon-wrap"
                style={{
                  background: "rgba(13, 148, 136, 0.08)",
                  color: "#0d9488",
                  border: "1px solid rgba(13, 148, 136, 0.2)",
                }}
              >
                <Cpu size={24} />
              </div>
              <span
                className="new-firm-tag"
                style={{
                  background: "rgba(13, 148, 136, 0.08)",
                  color: "#0d9488",
                  border: "1px solid rgba(13, 148, 136, 0.2)",
                }}
              >
                Predictive Science
              </span>
              <h3 className="new-firm-title">Quantitative Science</h3>
              <p className="new-firm-desc">
                Replacing paper checklists with 3D consequence modeling, toxic dispersion analyses, and QRA.
              </p>
              <ul className="new-firm-bullets">
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#0d9488", flexShrink: 0, marginTop: 2 }} />
                  <span>ALOHA toxic dispersion modeling</span>
                </li>
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#0d9488", flexShrink: 0, marginTop: 2 }} />
                  <span>HAZOP node analysis &amp; LOPA barriers</span>
                </li>
              </ul>
              <div className="new-firm-footer-chip">
                <span>Methodology</span>
                <span style={{ color: "#1d1d1f" }}>QRA &amp; HAZOP Rigor</span>
              </div>
            </div>

            {/* Pillar 4: Founder-Led Dedication */}
            <div className="new-firm-card scroll-reveal">
              <div
                className="new-firm-icon-wrap"
                style={{
                  background: "rgba(99, 102, 241, 0.08)",
                  color: "#6366f1",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <span
                className="new-firm-tag"
                style={{
                  background: "rgba(99, 102, 241, 0.08)",
                  color: "#4f46e5",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                }}
              >
                Direct Accountability
              </span>
              <h3 className="new-firm-title">Senior Lead Attention</h3>
              <p className="new-firm-desc">
                Audits and safety reviews are personally steered by accredited lead safety directors.
              </p>
              <ul className="new-firm-bullets">
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#6366f1", flexShrink: 0, marginTop: 2 }} />
                  <span>Supervision by certified lead auditors</span>
                </li>
                <li className="new-firm-bullet-item">
                  <CheckCircle2 size={15} style={{ color: "#6366f1", flexShrink: 0, marginTop: 2 }} />
                  <span>End-to-end partnership through CAPA</span>
                </li>
              </ul>
              <div className="new-firm-footer-chip">
                <span>Dedication</span>
                <span style={{ color: "#1d1d1f" }}>1:1 Senior Advisory</span>
              </div>
            </div>
          </div>

          {/* Interactive Apple Ceramic Action Banner */}
          <div className="new-firm-banner scroll-reveal">
            <div>
              <div style={{ fontSize: "1.12rem", fontWeight: 900, color: "#1d1d1f", marginBottom: 4 }}>
                Need an agile, certified safety partner for your plant?
              </div>
              <div style={{ fontSize: "0.9rem", color: "#6e6e73" }}>
                Accredited DISH &amp; PESO compliance, quantitative risk modeling, and rapid deployment.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  padding: "12px 24px",
                  fontSize: "0.88rem",
                  borderRadius: 9999,
                  whiteSpace: "nowrap",
                  boxShadow: "0 6px 22px rgba(229, 9, 20, 0.4), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)",
                }}
              >
                <span>Schedule Audit</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20we%20are%20looking%20for%20a%20safety%20audit%20and%20compliance%20partner."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: "12px 20px",
                  fontSize: "0.88rem",
                  borderRadius: 9999,
                  background: "#ffffff",
                  color: "#1d1d1f",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05), inset 0 1px 1px #ffffff",
                }}
              >
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONSULTING METHODOLOGY (5-Step Engineering Approach)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header-center scroll-reveal">
            <div className="section-badge">Methodology &amp; Governance</div>
            <h2 className="section-title">Our Consulting Approach</h2>
            <p className="section-subtitle">
              A structured 5-phase engineering lifecycle for sustained plant safety.
            </p>
          </div>

          <div className="grspl-process-grid scroll-stagger">
            <div className="grspl-process-step scroll-reveal">
              <div className="grspl-process-num">01</div>
              <div className="grspl-process-action">Phase One</div>
              <h3 className="grspl-process-title">ASSESS</h3>
              <p className="grspl-process-desc">
                Hazard identification and statutory DISH compliance mapping.
              </p>
            </div>

            <div className="grspl-process-step scroll-reveal">
              <div className="grspl-process-num">02</div>
              <div className="grspl-process-action">Phase Two</div>
              <h3 className="grspl-process-title">ANALYSE</h3>
              <p className="grspl-process-desc">
                Failure mode, regulatory gap analysis, and barrier verification.
              </p>
            </div>

            <div className="grspl-process-step scroll-reveal">
              <div className="grspl-process-num">03</div>
              <div className="grspl-process-action">Phase Three</div>
              <h3 className="grspl-process-title">ADVISE</h3>
              <p className="grspl-process-desc">
                Engineered risk mitigation roadmaps with prioritized actions.
              </p>
            </div>

            <div className="grspl-process-step scroll-reveal">
              <div className="grspl-process-num">04</div>
              <div className="grspl-process-action">Phase Four</div>
              <h3 className="grspl-process-title">IMPLEMENT</h3>
              <p className="grspl-process-desc">
                On-site execution, SOP rollouts, and workforce drills.
              </p>
            </div>

            <div className="grspl-process-step scroll-reveal">
              <div className="grspl-process-num">05</div>
              <div className="grspl-process-action">Phase Five</div>
              <h3 className="grspl-process-title">IMPROVE</h3>
              <p className="grspl-process-desc">
                Continuous performance monitoring to sustain resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRIES & WORK ENVIRONMENTS (Exact GRSPL Match in Apple Liquid Glass)
          ========================================================================= */}
      <section
        id="industries-served"
        className="section-padding"
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Glass Lighting Mesh */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, rgba(14, 165, 233, 0) 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(229, 9, 20, 0.05) 0%, rgba(229, 9, 20, 0) 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ maxWidth: "1320px", position: "relative", zIndex: 2 }}>
          <div className="scroll-reveal" style={{ textAlign: "left", marginBottom: "40px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(10, 76, 143, 0.08)",
                border: "1px solid rgba(10, 76, 143, 0.2)",
                fontSize: "0.76rem",
                fontWeight: 850,
                letterSpacing: "0.12em",
                color: "#0a4c8f",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              <span>● SECTORS &amp; WORKPLACES</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
                fontWeight: 850,
                color: "#0f294a",
                letterSpacing: "-0.02em",
                margin: "0 0 10px 0",
              }}
            >
              Industries &amp; Work Environments
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                color: "#556987",
                margin: "0 0 16px 0",
                maxWidth: 680,
              }}
            >
              Tailored risk engineering protocols for complex, high-risk industrial facilities.
            </p>
            {/* Green accent underline matching reference */}
            <div
              style={{
                width: 64,
                height: 5,
                background: "#6ebd34",
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(110, 189, 52, 0.35)",
              }}
            />
          </div>

          <div
            className="scroll-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "24px",
            }}
          >
            {INDUSTRIES_SERVED.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <Link
                  key={i}
                  href={ind.href}
                  className="industry-env-card scroll-reveal"
                  style={{
                    position: "relative",
                    background: "#ffffff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(226, 232, 240, 0.95)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05), inset 0 1px 1.5px rgba(255, 255, 255, 1)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Thick colored vertical accent bar on the left */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: 5,
                      background: ind.accentColor,
                      zIndex: 3,
                    }}
                  />

                  {/* 1. Industry Graphical Photographic Banner */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 155,
                      overflow: "hidden",
                      background: "#0a111a",
                    }}
                  >
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="industry-banner-img"
                    />

                    {/* Gradient Shading Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(10,16,26,0.72) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Floating Sector Glass Icon */}
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 14,
                        zIndex: 2,
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "rgba(255, 255, 255, 0.94)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ind.accentColor,
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <IconComp size={20} strokeWidth={2.4} />
                    </div>

                    {/* Floating Specialization Pill */}
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        zIndex: 2,
                        padding: "4px 11px",
                        borderRadius: 9999,
                        background: "rgba(0, 0, 0, 0.72)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        color: "#ffffff",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      {ind.tag}
                    </div>
                  </div>

                  {/* 2. Industry Content & Technical Chips */}
                  <div
                    style={{
                      padding: "20px 22px 22px 24px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "1.12rem",
                        fontWeight: 850,
                        color: "#1d1d1f",
                        margin: "0 0 8px 0",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {ind.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#556987",
                        lineHeight: 1.55,
                        margin: "0 0 14px 0",
                      }}
                    >
                      {ind.desc}
                    </p>

                    {/* Graphical Technical Chips Strip */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 16,
                      }}
                    >
                      {ind.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#334155",
                            background: "#f1f5f9",
                            border: "1px solid rgba(203, 213, 225, 0.75)",
                            padding: "3px 8px",
                            borderRadius: 6,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Interactive Touch Target: Explore Solutions → */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        color: ind.accentColor,
                        paddingTop: 12,
                        borderTop: "1px solid rgba(226, 232, 240, 0.75)",
                        marginTop: "auto",
                      }}
                      className="industry-explore-pill"
                    >
                      <span>Explore Safety Protocols</span>
                      <ArrowRight size={14} className="industry-arrow-icon" style={{ transition: "transform 0.25s ease" }} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <style jsx global>{`
          .corporate-about-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 50px;
            align-items: center;
          }
          @media (max-width: 960px) {
            .corporate-about-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }

          .pillars-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 32px;
          }
          @media (max-width: 640px) {
            .pillars-grid {
              grid-template-columns: 1fr !important;
              gap: 14px !important;
              margin-bottom: 24px !important;
            }
          }

          .about-cta-btns {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
          }
          @media (max-width: 640px) {
            .about-cta-btns {
              flex-direction: column !important;
              align-items: stretch !important;
              width: 100% !important;
              gap: 12px !important;
            }
            .about-cta-btns .btn {
              width: 100% !important;
              justify-content: center !important;
            }
          }

          .industry-env-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 42px -6px rgba(10, 25, 45, 0.14), inset 0 1px 2px #ffffff !important;
            border-color: rgba(203, 213, 225, 0.9) !important;
          }
          .industry-env-card:hover .industry-banner-img {
            transform: scale(1.08) !important;
          }
          .industry-env-card:hover .industry-arrow-icon {
            transform: translateX(5px);
          }
          /* Native iOS Active Press Feedback */
          .industry-env-card:active {
            transform: scale(0.975) !important;
          }
        `}</style>
      </section>

      {/* =========================================================================
          SECTION 8: FLAGSHIP PROJECTS & ON-SITE INTERVENTIONS (GRSPL Section 8)
          Live Drills, Hydrant Flow Testing, Boardroom Seminars, PASS Demos
          ========================================================================= */}
      <div className="scroll-reveal">
        <FieldVideoShowcase />
      </div>
      <div className="scroll-reveal">
        <FieldOperationsGallery />
      </div>

      {/* =========================================================================
          SECTION 9: CLIENT VOICES & TESTIMONIALS (GRSPL Section 10 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header-center scroll-reveal">
            <div className="section-badge">Testimonials</div>
            <h2 className="section-title">Industry Testimonials</h2>
            <p className="section-subtitle">
              Feedback from corporate plant heads, EHS directors, and safety engineers.
            </p>
          </div>

          <div className="scroll-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
            <div className="industrial-card scroll-reveal" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2rem", lineHeight: 1, marginBottom: 10 }}>“</div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>
                “Structured, professional, and strictly aligned with state DISH regulations. SETURAKSH conducted our chemical facility’s fire audit and drills with exceptional clarity.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 12 }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 850, color: "var(--text-dark)" }}>Senior General Manager – EHS</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Specialty Chemical Complex, Dahej</div>
              </div>
            </div>

            <div className="industrial-card scroll-reveal" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2rem", lineHeight: 1, marginBottom: 10 }}>“</div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>
                “Exceptional technical depth in Process Safety Management and HAZOP studies. They provided engineered barrier solutions rather than paperwork.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 12 }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 850, color: "var(--text-dark)" }}>Head of Operations &amp; Engineering</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>API Pharmaceutical Unit, Ankleshwar</div>
              </div>
            </div>

            <div className="industrial-card scroll-reveal" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2rem", lineHeight: 1, marginBottom: 10 }}>“</div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>
                “Hands-on extinguisher training and emergency evacuation drills engaged our entire workforce from operators to department heads.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 12 }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 850, color: "var(--text-dark)" }}>VP – Human Resources &amp; Safety</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Heavy Infrastructure Ltd., Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (Apple Liquid Glass Accordion)
          ========================================================================= */}
      <section className="section-padding" style={{ position: "relative", background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: 960, position: "relative", zIndex: 2 }}>
          <div className="section-header-center scroll-reveal">
            <div className="section-badge">Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Answers regarding audit timelines, certifications, and compliance.
            </p>
          </div>

          <div className="scroll-stagger" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="scroll-reveal"
                  style={{
                    background: isOpen
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(246, 248, 252, 0.82) 100%)",
                    border: isOpen ? "1.5px solid rgba(229, 9, 20, 0.45)" : "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: 16,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    overflow: "hidden",
                    boxShadow: isOpen
                      ? "0 12px 32px rgba(229, 9, 20, 0.12), inset 0 1px 1.5px #ffffff"
                      : "0 6px 18px rgba(0, 0, 0, 0.03), inset 0 1px 1.2px #ffffff",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      padding: "22px 26px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "1.06rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.01em" }}>
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: isOpen ? "rgba(229, 9, 20, 0.1)" : "rgba(0, 0, 0, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.25s ease",
                      }}
                    >
                      <ChevronDown
                        size={18}
                        style={{
                          color: isOpen ? "var(--primary-red)" : "var(--slate-500)",
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 26px 24px",
                        color: "var(--text-body)",
                        fontSize: "0.96rem",
                        lineHeight: 1.7,
                        borderTop: "1px solid rgba(226, 232, 240, 0.7)",
                        paddingTop: 16,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: HIGH-CONVERTING CORPORATE CTA (Apple Liquid Glass Stadium)
          ========================================================================= */}
      <section
        className="section-padding"
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #f5f5f7 0%, #ebebf0 100%)",
          color: "#1d1d1f",
          textAlign: "center",
          overflow: "hidden",
          borderTop: "1px solid #d2d2d7",
        }}
      >
        {/* Ambient Backlight Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(229, 9, 20, 0.08) 0%, rgba(245, 245, 247, 0) 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div className="container scroll-reveal" style={{ maxWidth: 860, position: "relative", zIndex: 2 }}>
          <div className="section-badge dark">Get In Touch</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)", marginBottom: 14, color: "#1d1d1f" }}>
            Ready to Anchor Your Industrial Safety?
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 34px", fontSize: "1.06rem", color: "#424245" }}>
            Connect with our senior safety engineers to schedule a diagnostic audit or discuss facility compliance.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: "16px 38px",
                fontSize: "1.02rem",
                borderRadius: 9999,
                boxShadow: "0 8px 30px rgba(229, 9, 20, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)",
              }}
            >
              <span>Request Diagnostic Audit</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20I%20would%20like%20to%20schedule%20a%20safety%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                padding: "16px 32px",
                fontSize: "1.02rem",
                borderRadius: 9999,
                background: "#ffffff",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                color: "#1d1d1f",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.05), inset 0 1px 1.2px #ffffff",
              }}
            >
              <Phone size={18} style={{ color: "#25d366" }} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
