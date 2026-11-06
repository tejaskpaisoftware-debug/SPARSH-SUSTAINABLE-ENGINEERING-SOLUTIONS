"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FieldOperationsGallery from "@/components/FieldOperationsGallery";
import FieldVideoShowcase from "@/components/FieldVideoShowcase";
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
  ChevronRight,
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
} from "lucide-react";

const SERVICE_ARENA = [
  {
    num: "01",
    title: "EHS Management & Regulatory Compliance",
    category: "Resilience Assurance Framework",
    desc: "Comprehensive statutory safety audits, Factories Act 1948 & DISH compliance verification, EHSMS gap reviews, and Root Cause Analysis (RCA).",
    bullets: [
      "Factories Act & State DISH compliance audits",
      "Hazard Identification & Risk Assessment (HIRA)",
      "Comprehensive EHS legal registers & checklists",
      "Contractor safety management & permit audits",
    ],
    href: "/services?service=ehs",
    icon: Factory,
  },
  {
    num: "02",
    title: "Comprehensive Fire Engineering & Life Safety",
    category: "Active & Passive Fire Solutions",
    desc: "Rigorous Fire Risk Assessments (FRA), hydrant network pressure verification, NBC/NFPA compliance, and hands-on emergency evacuation drills.",
    bullets: [
      "Fire risk assessment (FRA) & NBC 2016 audits",
      "Hydrant line pressure & monitor flow testing",
      "On-site emergency response plan (ERP/DMP)",
      "Live PASS fire extinguisher team drills",
    ],
    href: "/services?service=fire",
    icon: Flame,
  },
  {
    num: "03",
    title: "Process Safety Engineering (PSM) Suite",
    category: "Hazard Intelligence & Barrier Protection",
    desc: "Quantitative and qualitative process safety studies, HAZOP facilitation, Management of Change (MOC), and Pre-Startup Safety Reviews (PSSR).",
    bullets: [
      "HAZOP & HAZID expert study facilitation",
      "Management of Change (MOC) process audit",
      "Pre-Startup Safety Review (PSSR) sign-off",
      "Layer of Protection Analysis (LOPA) support",
    ],
    href: "/services?service=process",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Workforce Safety Academy & Competency",
    category: "Safety Culture Transformation",
    desc: "Empowering frontline operators, line engineers, and executive leaders through practical drills, Behavioral-Based Safety (BBS), and 5S housekeeping.",
    bullets: [
      "Workforce EHS induction & tool-box talks",
      "Behavior-Based Safety (BBS) programs",
      "GHS chemical hazard communication training",
      "Emergency response squad certification",
    ],
    href: "/services?service=training",
    icon: GraduationCap,
  },
  {
    num: "05",
    title: "Environmental & ESG Sustainability Cell",
    category: "Industrial Decarbonization & Ecology",
    desc: "State Pollution Control Board (GPCB) regulatory support, industrial hazardous waste governance, water neutrality, and corporate ESG metrics.",
    bullets: [
      "Consent to Establish (CTE) & Operate (CTO) review",
      "Hazardous waste & effluent compliance audit",
      "Decarbonization & energy efficiency roadmaps",
      "ESG reporting & sustainability metrics",
    ],
    href: "/services?service=env",
    icon: Leaf,
  },
  {
    num: "06",
    title: "Engineering Safety & Plant Commissioning",
    category: "Mechanical Integrity & Asset Defense",
    desc: "Statutory inspections under DISH Sections 28, 29, and 31 (pressure vessels, lifting machinery, hoists), PTW/LOTO systems, and design safety review.",
    bullets: [
      "Competent Person statutory DISH certifications",
      "Pressure vessel & lifting equipment testing",
      "Permit to Work (PTW) & LOTO architecture",
      "Greenfield & brownfield layout safety checks",
    ],
    href: "/services?service=engineering",
    icon: Wrench,
  },
];

const INDUSTRIES_SERVED = [
  {
    icon: "🧪",
    name: "Chemical & Petrochemicals",
    desc: "Hazardous chemical handling, toxic gas dispersion control, and DISH statutory compliance.",
  },
  {
    icon: "💊",
    name: "Pharmaceuticals & API",
    desc: "Cleanroom EHS, solvent recovery safety, process barrier reviews, and regulatory readiness.",
  },
  {
    icon: "🛢️",
    name: "Oil, Gas & Energy",
    desc: "Process safety management, flammable storage compliance, and explosive atmosphere safety.",
  },
  {
    icon: "🏗️",
    name: "Heavy Engineering & EPC",
    desc: "Fabrication safety, heavy lift verification, work-at-height audits, and turnkey commissioning.",
  },
  {
    icon: "🏭",
    name: "Manufacturing & Logistics",
    desc: "Material handling, warehouse fire suppression, 5S good housekeeping, and workforce inductions.",
  },
  {
    icon: "🏢",
    name: "Institutions & Campuses",
    desc: "Fire safety NOC compliance, evacuation route planning, life safety audits, and emergency mock drills.",
  },
];

const FAQS = [
  {
    q: "How long does a typical plant safety audit or EHS assessment take?",
    a: "Project timelines depend on facility footprint, hazardous process complexity, and study scope. A focused statutory audit or fire risk assessment typically takes 2–4 days of on-site inspection followed by data analysis, while enterprise-wide PSM or HAZOP studies are structured across 2–4 weeks with phased deliverables.",
  },
  {
    q: "Are your auditors and technical specialists certified by statutory authorities?",
    a: "Yes. Our senior consultants and associates include Government-approved Competent Persons under the Factories Act (DISH Gujarat), NEBOSH certified auditors, ADIS diploma holders, and certified Fire Engineers with over 20 years of active field leadership.",
  },
  {
    q: "Can Seturaksh assist with Fire Safety NOC issuance and renewal?",
    a: "Absolutely. We conduct complete Fire Safety Audits aligned with the National Building Code (NBC 2016) and state fire regulations, inspect active and passive protection systems, verify water delivery networks, and assist facility teams in meeting all technical compliance criteria for Fire NOC documentation.",
  },
  {
    q: "Do you deliver customized on-site training for plant operators and supervisors?",
    a: "Yes. We conduct hands-on training sessions in regional languages (Gujarati, Hindi, English) directly at your industrial site. Modules include live fire extinguisher drills (PASS technique), chemical spill response (GHS HazCom), 5S housekeeping, and Permit-to-Work (PTW/LOTO) execution.",
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
          SECTION 1: HERO SECTION (GRSPL Corporate Industrial Aesthetic)
          ========================================================================= */}
      <section className="grspl-hero" id="hero">
        <div className="grspl-hero-overlay" />
        <div className="grspl-hero-accent-glow" />

        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div className="grspl-hero-content">
            <div className="grspl-hero-tagline">
              SETURAKSH • SUSTAINABLE ENGISAFE PVT. LTD.
            </div>

            <h1 className="grspl-hero-title">
              ANCHORING INDUSTRY WITH <span className="highlight">SAFETY &amp; RISK RESILIENCE</span>
            </h1>

            <p className="grspl-hero-desc">
              From Process Safety Management (PSM), HAZOP &amp; Fire Life Safety Audits to Environmental Compliance and Workforce Excellence — we identify hazards, engineer robust barriers, and deliver certified, zero-harm workplaces across Gujarat and Pan-India.
            </p>

            <div className="grspl-hero-ctas">
              <Link href="/contact" className="btn btn-primary" style={{ padding: "15px 32px", fontSize: "1rem" }}>
                <span>Schedule Facility Audit</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn btn-secondary" style={{ padding: "15px 28px", fontSize: "1rem" }}>
                <span>Explore Service Arena</span>
              </Link>
              <a
                href="#field-operations"
                className="btn btn-outline-red"
                style={{ padding: "15px 24px", fontSize: "1rem", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
              >
                <span>View Field Proof</span>
              </a>
            </div>

            {/* Floating Credibility Stats Strip */}
            <div className="grspl-hero-stats">
              <div className="grspl-hero-stat-item">
                <div className="grspl-hero-stat-num">
                  <Counter target={30000} suffix="" />
                  <span className="plus">+</span>
                </div>
                <div className="grspl-hero-stat-label">Workforce &amp; Engineers Trained</div>
              </div>

              <div className="grspl-hero-stat-item">
                <div className="grspl-hero-stat-num">
                  <Counter target={500} suffix="" />
                  <span className="plus">+</span>
                </div>
                <div className="grspl-hero-stat-label">Safety &amp; Statutory Audits</div>
              </div>

              <div className="grspl-hero-stat-item">
                <div className="grspl-hero-stat-num">
                  <Counter target={200} suffix="" />
                  <span className="plus">+</span>
                </div>
                <div className="grspl-hero-stat-label">Industrial Clients Served</div>
              </div>

              <div className="grspl-hero-stat-item">
                <div className="grspl-hero-stat-num">
                  <Counter target={100} suffix="%" />
                </div>
                <div className="grspl-hero-stat-label">Statutory DISH Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORPORATE ABOUT & PHILOSOPHY (GRSPL Section 3 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff" }} id="about-overview">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 50, alignItems: "center" }}>
            <div>
              <div className="section-badge">Crafted for Resilience</div>
              <h2 className="section-title">
                Transforming Complex Industrial Risk into Long-Term Resilience
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.7, marginBottom: 18 }}>
                <strong>SETURAKSH SUSTAINABLE EngiSafe Private Limited</strong> is a dynamic risk engineering and resilience advisory organization committed to enabling safer, smarter, and more sustainable industrial ecosystems.
              </p>
              <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                Just as <em>gravity</em> is the fundamental force anchoring our physical universe, rigorous safety governance and proactive risk engineering form the steadfast anchor of industrial productivity. From heavy chemical corridors to high-tech manufacturing, we bridge regulatory requirements with practical on-the-ground engineering barriers.
              </p>

              {/* 4 Foundational Pillars */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--text-dark)" }}>Statutory Compliance</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Factories Act, DISH &amp; PESO mastery</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--text-dark)" }}>Process Safety (PSM)</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>HAZOP, HIRA, MOC &amp; LOPA rigor</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--text-dark)" }}>Fire Protection</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>NBC audits &amp; hydrant testing</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--text-dark)" }}>Workforce Competency</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Practical drills &amp; BBS culture</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Link href="/about" className="btn btn-primary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/why-sparsh" className="btn btn-outline-red">
                  <span>Why Work With Us</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Director Spotlight */}
            <div
              className="industrial-card"
              style={{
                background: "var(--industrial-navy-surface)",
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                padding: "36px 30px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ position: "relative", width: 84, height: 84, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--primary-red)", flexShrink: 0 }}>
                  <Image
                    src="/sachin.jpeg"
                    alt="Mr. Sachin Patel"
                    fill
                    sizes="84px"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#ffffff", lineHeight: 1.2 }}>
                    Mr. Sachin Patel
                  </div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 750, color: "var(--primary-red)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>
                    Founder &amp; Director
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.65)", marginTop: 2 }}>
                    20+ Years EHS &amp; Fire Protection Leadership
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.6, marginBottom: 18 }}>
                “True industrial safety is never achieved by mere documentation. It is forged on the shop-floor through rigorous engineering barriers, competent people, and disciplined execution.”
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {["B.Sc. Fire", "M.Sc. Climate Change", "MBA Safety Engg", "ADIS", "NEBOSH IGC", "NEBOSH PSM", "PGDFLSA"].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      padding: "3px 8px",
                      borderRadius: 4,
                      color: "#ffffff",
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
                <span>View Full Executive Profile</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR SERVICE ARENA (GRSPL Section 4 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "var(--slate-50)" }} id="service-arena">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Our Service Arena</div>
            <h2 className="section-title">Precision Engineering Suites Crafted for Resilience</h2>
            <p className="section-subtitle">
              Structured divisions engineered to assist chemical, pharmaceutical, oil &amp; gas, and heavy manufacturing organizations achieve zero harm and total compliance.
            </p>
          </div>

          <div className="service-arena-grid">
            {SERVICE_ARENA.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link key={svc.num} href={svc.href} className="service-division-card">
                  <div className="service-division-header">
                    <span className="service-division-num">{svc.num}</span>
                    <div className="service-division-icon">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="service-division-sub">{svc.category}</div>
                  <h3 className="service-division-title">{svc.title}</h3>
                  <p className="service-division-desc">{svc.desc}</p>

                  <ul className="service-division-bullets">
                    {svc.bullets.map((b, i) => (
                      <li key={i} className="service-division-bullet">
                        <CheckCircle2 size={14} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-division-cta">
                    <span>Explore Full Division Scope</span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MEASURING OUR IMPACT (GRSPL Section 5 & 6 Style)
          ========================================================================= */}
      <section className="grspl-impact-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge dark">Measuring Our Impact</div>
            <h2 className="section-title light">Creating Impact Beyond Numbers</h2>
            <p className="section-subtitle light">
              Every milestone represents lives protected, organizations strengthened, and our unwavering commitment to creating safer industrial workplaces across India.
            </p>
          </div>

          <div className="grspl-impact-grid">
            <div className="grspl-impact-card">
              <div className="grspl-impact-num">
                <Counter target={30000} suffix="" />
                <span className="plus">+</span>
              </div>
              <div className="grspl-impact-title">Workforce Transformed</div>
              <div className="grspl-impact-sub">Empowering safer, smarter workforces through hands-on safety training</div>
            </div>

            <div className="grspl-impact-card">
              <div className="grspl-impact-num">
                <Counter target={200} suffix="" />
                <span className="plus">+</span>
              </div>
              <div className="grspl-impact-title">Clients Served</div>
              <div className="grspl-impact-sub">Trusted across chemical, pharma, EPC and energy sectors</div>
            </div>

            <div className="grspl-impact-card">
              <div className="grspl-impact-num">
                <Counter target={500} suffix="" />
                <span className="plus">+</span>
              </div>
              <div className="grspl-impact-title">Audits Completed</div>
              <div className="grspl-impact-sub">Beyond compliance: towards operational excellence and zero harm</div>
            </div>

            <div className="grspl-impact-card">
              <div className="grspl-impact-num">
                <Counter target={300} suffix="" />
                <span className="plus">+</span>
              </div>
              <div className="grspl-impact-title">Fire Risk Assessments</div>
              <div className="grspl-impact-sub">Protecting industrial lives and critical assets through prevention</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONSULTING METHODOLOGY (5-Step Engineering Approach)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Methodology &amp; Governance</div>
            <h2 className="section-title">Our Consulting Approach</h2>
            <p className="section-subtitle">
              A disciplined, risk-based five-phase engineering lifecycle that moves organizations from vulnerability to resilient operational excellence.
            </p>
          </div>

          <div className="grspl-process-grid">
            <div className="grspl-process-step">
              <div className="grspl-process-num">01</div>
              <div className="grspl-process-action">Phase One</div>
              <h3 className="grspl-process-title">ASSESS</h3>
              <p className="grspl-process-desc">
                Identify physical hazards, process bottlenecks, and current DISH / Factories Act compliance status.
              </p>
            </div>

            <div className="grspl-process-step">
              <div className="grspl-process-num">02</div>
              <div className="grspl-process-action">Phase Two</div>
              <h3 className="grspl-process-title">ANALYSE</h3>
              <p className="grspl-process-desc">
                Evaluate regulatory gaps, failure modes, barrier degradation, and root causes of operational vulnerability.
              </p>
            </div>

            <div className="grspl-process-step">
              <div className="grspl-process-num">03</div>
              <div className="grspl-process-action">Phase Three</div>
              <h3 className="grspl-process-title">ADVISE</h3>
              <p className="grspl-process-desc">
                Deliver pragmatic, engineered recommendations and customized risk mitigation roadmaps with prioritized actions.
              </p>
            </div>

            <div className="grspl-process-step">
              <div className="grspl-process-num">04</div>
              <div className="grspl-process-action">Phase Four</div>
              <h3 className="grspl-process-title">IMPLEMENT</h3>
              <p className="grspl-process-desc">
                Support on-the-ground execution, SOP rollouts, live emergency drills, and workforce competency inductions.
              </p>
            </div>

            <div className="grspl-process-step">
              <div className="grspl-process-num">05</div>
              <div className="grspl-process-action">Phase Five</div>
              <h3 className="grspl-process-title">IMPROVE</h3>
              <p className="grspl-process-desc">
                Monitor lagging and leading safety indicators to sustain continual compliance and institutional resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INDUSTRIES & WORK ENVIRONMENTS (GRSPL Sector Presence)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "var(--slate-50)" }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Pan-Industry Presence</div>
            <h2 className="section-title">Industries &amp; Work Environments Served</h2>
            <p className="section-subtitle">
              Deep, sector-specific risk engineering expertise for high-hazard and complex industrial operating environments.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {INDUSTRIES_SERVED.map((ind, i) => (
              <div key={i} className="industrial-card" style={{ padding: "28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{ind.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 850, color: "var(--text-dark)", marginBottom: 8 }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FLAGSHIP PROJECTS & ON-SITE INTERVENTIONS (GRSPL Section 8)
          Live Drills, Hydrant Flow Testing, Boardroom Seminars, PASS Demos
          ========================================================================= */}
      <FieldVideoShowcase />
      <FieldOperationsGallery />

      {/* =========================================================================
          SECTION 8: CLIENT VOICES & TESTIMONIALS (GRSPL Section 10 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Testimonials</div>
            <h2 className="section-title">What Industrial Leaders Say About Us</h2>
            <p className="section-subtitle">
              Trusted by corporate plant heads, EHS directors, and safety engineers across major manufacturing corridors.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            <div className="industrial-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2.2rem", lineHeight: 1, marginBottom: 12 }}>“</div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.65, marginBottom: 20, flexGrow: 1 }}>
                “Structured, highly professional, and strictly aligned with state DISH regulations. SETURAKSH conducted our chemical plant’s fire hydrant audit and workforce drill with tremendous practical clarity.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 14 }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 850, color: "var(--text-dark)" }}>Senior General Manager – EHS</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Specialty Chemical Manufacturing Complex, Dahej, Gujarat</div>
              </div>
            </div>

            <div className="industrial-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2.2rem", lineHeight: 1, marginBottom: 12 }}>“</div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.65, marginBottom: 20, flexGrow: 1 }}>
                “The engineering team led by Mr. Sachin Patel has exceptional technical depth in Process Safety Management and HAZOP studies. They provided practical barrier solutions rather than theoretical paperwork.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 14 }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 850, color: "var(--text-dark)" }}>Head of Operations &amp; Engineering</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>API Pharmaceutical Enterprise, Ankleshwar, Gujarat</div>
              </div>
            </div>

            <div className="industrial-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "var(--primary-red)", fontSize: "2.2rem", lineHeight: 1, marginBottom: 12 }}>“</div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.65, marginBottom: 20, flexGrow: 1 }}>
                “Their live hands-on extinguisher training and emergency evacuation drills engaged our entire workforce from shop-floor workers to department heads. Outstanding commitment to safety excellence.”
              </p>
              <div style={{ borderTop: "1px solid var(--slate-200)", paddingTop: 14 }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 850, color: "var(--text-dark)" }}>VP – Human Resources &amp; Safety</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Heavy Engineering &amp; Infrastructure Ltd., Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (GRSPL Section 11 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "var(--slate-50)" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="section-header-center">
            <div className="section-badge">Frequently Asked Questions</div>
            <h2 className="section-title">Why Work With Seturaksh?</h2>
            <p className="section-subtitle">
              Clear answers to common questions about our audit timelines, certification pedigree, and execution methodologies.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    background: "#ffffff",
                    border: isOpen ? "1.5px solid var(--primary-red)" : "1px solid var(--slate-200)",
                    borderRadius: 8,
                    overflow: "hidden",
                    transition: "all 0.2s ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
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
                    <span style={{ fontSize: "1.05rem", fontWeight: 850, color: "var(--text-dark)" }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: isOpen ? "var(--primary-red)" : "var(--slate-500)",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 24px 22px", color: "var(--text-body)", fontSize: "0.95rem", lineHeight: 1.65, borderTop: "1px solid var(--slate-100)", paddingTop: 14 }}>
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
          SECTION 10: HIGH-CONVERTING CORPORATE CTA (GRSPL Section 14 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "var(--industrial-navy)", color: "#ffffff", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-badge dark">Get In Touch</div>
          <h2 className="section-title light" style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", marginBottom: 16 }}>
            Ready to Anchor Your Industrial Safety with Certified Resilience?
          </h2>
          <p className="section-subtitle light" style={{ margin: "0 auto 36px", fontSize: "1.1rem" }}>
            Connect directly with our senior EHS engineers and Competent Persons to schedule a diagnostic audit or discuss customized safety training for your facility.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <span>Request Diagnostic Audit</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20I%20would%20like%20to%20schedule%20a%20safety%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: "16px 30px", fontSize: "1.05rem" }}
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
