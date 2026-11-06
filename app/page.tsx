"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
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
} from "lucide-react";

const INDUSTRIES_SERVED = [
  {
    name: "Chemical & Process Manufacturing",
    desc: "Chemical handling, process hazards, fire prevention and operational risk.",
    accentColor: "#0a4c8f",
    tag: "HAZOP & QRA Rigor",
    icon: FlaskConical,
    href: "/services?service=process",
  },
  {
    name: "Pharmaceuticals & API",
    desc: "Plant EHS, contractor safety, process safety and compliance support.",
    accentColor: "#008b9e",
    tag: "Cleanroom & GMP EHS",
    icon: Pill,
    href: "/services?service=ehs",
  },
  {
    name: "Oil, Gas, EPC & Engineering",
    desc: "Project safety, PTW, construction risk and commissioning readiness.",
    accentColor: "#5ea434",
    tag: "Offshore & EPC Protocol",
    icon: Flame,
    href: "/services?service=engineering",
  },
  {
    name: "Construction & Infrastructure",
    desc: "Greenfield/brownfield projects, work at height and contractor controls.",
    accentColor: "#084f9c",
    tag: "Work at Height & PTW",
    icon: HardHat,
    href: "/services?service=engineering",
  },
  {
    name: "Manufacturing & Warehousing",
    desc: "Workplace safety, fire readiness, material handling and emergency planning.",
    accentColor: "#0097a7",
    tag: "Material Flow & 5S",
    icon: Warehouse,
    href: "/services?service=fire",
  },
  {
    name: "Commercial & Institutional Facilities",
    desc: "Fire risk awareness, evacuation planning and safety systems review.",
    accentColor: "#7cb342",
    tag: "NBC & Evacuation Planning",
    icon: Building2,
    href: "/services?service=fire",
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
          SECTION 1: HERO SLIDER (Exact GRSPL 4K Landscape Refinery Slider)
          ========================================================================= */}
      <HeroSlider />

      {/* =========================================================================
          CLIENT LOGOS STRIP (Trusted by Heavy Industrial Enterprises)
          ========================================================================= */}
      <ClientLogosMarquee />

      {/* =========================================================================
          SECTION 2: CORPORATE ABOUT & RESILIENCE (GRSPL Section 3 Style)
          ========================================================================= */}
      <section className="section-padding" style={{ background: "#ffffff", overflow: "hidden" }} id="about-overview">
        <div className="container">
          <div className="corporate-about-grid">
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
              <div className="pillars-grid">
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

              <div className="about-cta-btns">
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
          SECTION 4: OUR SERVICE ARENA (GRSPL Diagonal Cards in iOS Liquid Glass Theme)
          ========================================================================= */}
      <ServiceArenaSection />

      {/* =========================================================================
          SECTION 5: MEASURING OUR IMPACT (GRSPL Section 5 & 6 Style)
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
          SECTION 6: CONSULTING METHODOLOGY (5-Step Engineering Approach)
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
          <div style={{ textAlign: "left", marginBottom: "40px" }}>
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
                fontSize: "1.05rem",
                color: "#556987",
                margin: "0 0 16px 0",
                maxWidth: 720,
              }}
            >
              Experience-informed solutions for complex, high-risk and evolving workplaces across heavy chemical, pharmaceutical, oil &amp; gas, and infrastructure corridors.
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
              gap: "24px",
            }}
          >
            {INDUSTRIES_SERVED.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <Link
                  key={i}
                  href={ind.href}
                  className="industry-env-card"
                  style={{
                    position: "relative",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(246, 248, 252, 0.92) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "28px 24px 26px 28px",
                    overflow: "hidden",
                    border: "1px solid rgba(226, 232, 240, 0.9)",
                    boxShadow: "0 8px 24px -6px rgba(0, 0, 0, 0.05), inset 0 1px 1.5px rgba(255, 255, 255, 1)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Thick colored vertical accent bar on the left (matching exact image) */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: 6,
                      background: ind.accentColor,
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />

                  {/* Header: Graphical Icon + Sector Specialization Pill */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${ind.accentColor}14`,
                        border: `1px solid ${ind.accentColor}28`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ind.accentColor,
                        flexShrink: 0,
                        boxShadow: `0 4px 12px ${ind.accentColor}18`,
                      }}
                    >
                      <IconComp size={22} strokeWidth={2.2} />
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        color: ind.accentColor,
                        background: `${ind.accentColor}10`,
                        border: `1px solid ${ind.accentColor}22`,
                        padding: "4px 10px",
                        borderRadius: 9999,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ind.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 850,
                      color: "#0a2540",
                      margin: "0 0 12px 0",
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.94rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      margin: "0 0 20px 0",
                      flexGrow: 1,
                    }}
                  >
                    {ind.desc}
                  </p>

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
                      borderTop: "1px solid rgba(226, 232, 240, 0.7)",
                    }}
                    className="industry-explore-pill"
                  >
                    <span>Explore Safety Protocols</span>
                    <ArrowRight size={14} className="industry-arrow-icon" style={{ transition: "transform 0.25s ease" }} />
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
            transform: translateY(-6px);
            box-shadow: 0 18px 40px -8px rgba(10, 25, 45, 0.12), inset 0 1px 2px #ffffff !important;
            border-color: rgba(255, 255, 255, 1) !important;
          }
          .industry-env-card:hover .industry-arrow-icon {
            transform: translateX(4px);
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
      <FieldVideoShowcase />
      <FieldOperationsGallery />

      {/* =========================================================================
          SECTION 9: CLIENT VOICES & TESTIMONIALS (GRSPL Section 10 Style)
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
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
          SECTION 10: FREQUENTLY ASKED QUESTIONS (Apple Liquid Glass Accordion)
          ========================================================================= */}
      <section className="section-padding" style={{ position: "relative", background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: 960, position: "relative", zIndex: 2 }}>
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
          background: "linear-gradient(180deg, #0e1726 0%, #080f1a 100%)",
          color: "#ffffff",
          textAlign: "center",
          overflow: "hidden",
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
            background: "radial-gradient(circle, rgba(229, 9, 20, 0.18) 0%, rgba(229, 9, 20, 0) 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ maxWidth: 860, position: "relative", zIndex: 2 }}>
          <div className="section-badge dark">Get In Touch</div>
          <h2 className="section-title light" style={{ fontSize: "clamp(2rem, 3.8vw, 2.9rem)", marginBottom: 16 }}>
            Ready to Anchor Your Industrial Safety with Certified Resilience?
          </h2>
          <p className="section-subtitle light" style={{ margin: "0 auto 38px", fontSize: "1.1rem" }}>
            Connect directly with our senior EHS engineers and Competent Persons to schedule a diagnostic audit or discuss customized safety training for your facility.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: "16px 38px",
                fontSize: "1.02rem",
                borderRadius: 9999,
                boxShadow: "0 8px 30px rgba(229, 9, 20, 0.55), inset 0 1px 1.5px rgba(255, 255, 255, 0.5)",
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
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1.2px rgba(255, 255, 255, 0.35)",
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
