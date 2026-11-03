import Link from "next/link";
import Image from "next/image";
import ReactorStage from "@/components/ReactorStage";
import Counter from "@/components/Counter";
import {
  Users,
  Cog,
  ShieldCheck,
  Leaf,
  Shield,
  Award,
  CheckCircle,
  GraduationCap,
  Eye,
  Target,
  ArrowRight,
  ArrowUpRight,
  Check,
  Search,
  BarChart3,
  ClipboardList,
  Settings,
  TrendingUp,
  FlaskConical,
  Pill,
  HardHat,
  Wrench,
  Flame,
  Factory,
  Cpu,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-grid-2col">
            {/* Left Content */}
            <div className="hero-left-content">
              <div className="hero-status-pill lazy-reveal">
                <span className="dot"></span>
                <span>SETURAKSH SUSTAINABLE ENGISAFE</span>
              </div>

              <h1 className="hero-main-title lazy-reveal delay-1">
                <span className="hero-tagline-segment txt-people">Engineering Safety.</span>{" "}
                <span className="hero-tagline-segment txt-process">Managing Risk.</span>{" "}
                <span className="hero-tagline-segment txt-planet">Protecting Life.</span>
              </h1>

              <p className="hero-lead-text lazy-reveal delay-2">
                Your premier engineering & compliance partner for Environment, Health, Safety & Fire Excellence. We empower industrial enterprises to achieve zero harm, full statutory compliance, and sustainable operational growth.
              </p>

              <div className="hero-cta-cluster lazy-reveal delay-3">
                <Link href="/contact" className="btn btn-primary">
                  <span>Schedule Facility Audit</span>
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  <span>Explore Capabilities</span>
                </Link>
              </div>

              <div className="hero-cred-ticker lazy-reveal delay-4">
                <div className="cred-ticker-item">
                  <Award style={{ width: 16, height: 16, color: "var(--accent-cyan)" }} />
                  <span>20+ Years EHS Advisory</span>
                </div>
                <div className="cred-ticker-item">
                  <CheckCircle style={{ width: 16, height: 16, color: "var(--accent-cyan)" }} />
                  <span>NEBOSH & PSM Certified</span>
                </div>
                <div className="cred-ticker-item">
                  <GraduationCap style={{ width: 16, height: 16, color: "var(--accent-cyan)", flexShrink: 0 }} />
                  <span>PG Diploma in Fire Prevention and Life Safety Audit</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4P Liquid Reactor */}
            <ReactorStage />
          </div>

          {/* 6 Core Services Glass Cards */}
          <div className="hero-pillars-grid lazy-scale delay-4">
            {/* 01. EHS MANAGEMENT & COMPLIANCE */}
            <Link
              href="/services?service=ehs"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-ehs.png" alt="EHS Management & Compliance" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#00843d" }}>01</span>
              </div>
              <h3 className="pillar-card-title">EHS MANAGEMENT &amp; COMPLIANCE</h3>
              <p className="pillar-card-sub" style={{ color: "#00843d" }}>Systems &amp; Legal Compliance</p>
              <p className="pillar-card-desc">
                EHSMS review, legal compliance support, HIRA/JSA, contractor safety &amp; incident investigation RCA.
              </p>
              <span
                style={{
                  color: "#00843d",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>

            {/* 02. FIRE SAFETY & EMERGENCY MANAGEMENT */}
            <Link
              href="/services?service=fire"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-fire.png" alt="Fire Safety & Emergency Management" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#d9251d" }}>02</span>
              </div>
              <h3 className="pillar-card-title">FIRE SAFETY &amp; EMERGENCY</h3>
              <p className="pillar-card-sub" style={{ color: "#d9251d" }}>Audits &amp; Emergency Plans</p>
              <p className="pillar-card-desc">
                Fire risk assessments (FRA), fire safety audits, system reviews, emergency action plans &amp; mock drills.
              </p>
              <span
                style={{
                  color: "#d9251d",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>

            {/* 03. PROCESS SAFETY MANAGEMENT */}
            <Link
              href="/services?service=process"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-process.png" alt="Process Safety Management" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#d97706" }}>03</span>
              </div>
              <h3 className="pillar-card-title">PROCESS SAFETY MANAGEMENT</h3>
              <p className="pillar-card-sub" style={{ color: "#d97706" }}>PSM, HAZOP &amp; MOC</p>
              <p className="pillar-card-desc">
                HAZID/HAZOP facilitation, MOC, PSSR, LOPA support, critical procedure reviews &amp; awareness.
              </p>
              <span
                style={{
                  color: "#d97706",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>

            {/* 04. TRAINING & COMPETENCY */}
            <Link
              href="/services?service=training"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-risk.png" alt="Training & Competency" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#7e22ce" }}>04</span>
              </div>
              <h3 className="pillar-card-title">TRAINING &amp; COMPETENCY</h3>
              <p className="pillar-card-sub" style={{ color: "#7e22ce" }}>Induction, BBS &amp; Drills</p>
              <p className="pillar-card-desc">
                Workforce safety inductions, fire safety awareness, emergency response training &amp; BBS programs.
              </p>
              <span
                style={{
                  color: "#7e22ce",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>

            {/* 05. ENVIRONMENT & SUSTAINABILITY */}
            <Link
              href="/services?service=env"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-env.png" alt="Environment & Sustainability" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#0d8a43" }}>05</span>
              </div>
              <h3 className="pillar-card-title">ENV &amp; SUSTAINABILITY</h3>
              <p className="pillar-card-sub" style={{ color: "#0d8a43" }}>Compliance, Waste &amp; ESG</p>
              <p className="pillar-card-desc">
                Environmental compliance support, industrial waste management, decarbonization &amp; ESG advisory.
              </p>
              <span
                style={{
                  color: "#0d8a43",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>

            {/* 06. ENGINEERING & PROJECT SAFETY */}
            <Link
              href="/services?service=engineering"
              className="pillar-glass-card"
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-engineering.png" alt="Engineering & Project Safety" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#0066cc" }}>06</span>
              </div>
              <h3 className="pillar-card-title">ENGINEERING &amp; PROJECT SAFETY</h3>
              <p className="pillar-card-sub" style={{ color: "#0066cc" }}>Design Risk &amp; PTW/LOTO</p>
              <p className="pillar-card-desc">
                Greenfield/brownfield reviews, construction safety, PTW/LOTO reviews &amp; design-stage risk verification.
              </p>
              <span
                style={{
                  color: "#0066cc",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: "auto",
                  paddingTop: 12,
                }}
              >
                <span>View Full Scope</span>
                <span style={{ transition: "transform 0.2s ease" }}>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Impact Counter Ribbon */}
      <section className="section-padding" style={{ paddingTop: 30, paddingBottom: 40 }}>
        <div className="container">
          <div className="stats-glass-container lazy-scale">
            <div className="stat-item">
              <div className="stat-number">
                <Counter target={20} suffix="+" />
              </div>
              <div className="stat-label">Years Cross-Sector Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <Counter target={100} suffix="%" />
              </div>
              <div className="stat-label">Statutory Compliance Assurance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <Counter target={6} suffix="+" />
              </div>
              <div className="stat-label">Major Heavy Industry Sectors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <Counter target={0} suffix=" Harm" />
              </div>
              <div className="stat-label">Zero-Harm Operating Mindset</div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation & Strategic Direction Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="liquid-card about-main-card lazy-reveal">
              <div className="badge-pill">
                <ShieldCheck style={{ width: 14, height: 14 }} />
                <span>About SETURAKSH</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Practical Safety, Engineering and Sustainability Support for Industry
              </h2>
              <p className="about-text">
                SETURAKSH SUSTAINABLE EngiSafe Private Limited is a professional consultancy and supply business focused on Environment, Health &amp; Safety (EHS), Fire Safety, Process Safety and related engineering solutions.
              </p>
              <p className="about-text" style={{ marginTop: -8 }}>
                We help organisations strengthen compliance, reduce operational risk, build workforce capability and protect people, assets, processes and the environment through practical, risk-based support.
              </p>
              <div className="about-badges-flex">
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Our Purpose: Practical &amp; Measurable Safety
                </span>
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Our Approach: Technical Advice + Product Supply
                </span>
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Our Commitment: Professional Integrity
                </span>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link href="/about" className="btn btn-secondary" style={{ padding: "10px 22px" }}>
                  <span>Read Full About Us</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </div>

            {/* Vision & Mission Stack */}
            <div className="vision-mission-column">
              <div className="liquid-card vm-card lazy-reveal delay-1">
                <div className="vm-icon-header">
                  <div className="vm-icon" style={{ background: "rgba(124, 58, 237, 0.1)", color: "#7c3aed" }}>
                    <Eye style={{ width: 22, height: 22 }} />
                  </div>
                  <h3 className="vm-title">Vision</h3>
                </div>
                <p className="vm-quote">
                  “To become a trusted partner for safer, more resilient and sustainable industries across India and beyond.”
                </p>
              </div>

              <div className="liquid-card vm-card mission lazy-reveal delay-2">
                <div className="vm-icon-header">
                  <div className="vm-icon" style={{ background: "rgba(16, 124, 65, 0.1)", color: "#107c41" }}>
                    <Target style={{ width: 22, height: 22 }} />
                  </div>
                  <h3 className="vm-title">Mission</h3>
                </div>
                <p className="vm-quote">
                  “To protect people, processes, property and the planet through practical EHS, fire and process safety solutions, responsible engineering advice and dependable product supply.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach 5-Step Cycle */}
      <section className="section-padding approach-section">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Cpu style={{ width: 14, height: 14 }} />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="section-title">OUR CONSULTING APPROACH</h2>
            <p className="section-subtitle" style={{ fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.05em" }}>
              ASSESS → ANALYSE → ADVISE → SUPPORT IMPLEMENTATION → IMPROVE
            </p>
          </div>

          <div className="approach-timeline">
            <div className="liquid-card approach-step-card lazy-reveal delay-1">
              <div className="step-num-pill">01</div>
              <Search style={{ width: 24, height: 24, color: "var(--accent-cyan)", marginBottom: 8 }} />
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">IDENTIFY HAZARDS &amp; COMPLIANCE STATUS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-2">
              <div className="step-num-pill">02</div>
              <BarChart3 style={{ width: 24, height: 24, color: "#0284c7", marginBottom: 8 }} />
              <h3 className="step-name">ANALYSE</h3>
              <p className="step-action-desc">EVALUATE GAPS &amp; OPERATIONAL CONTEXT</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-3">
              <div className="step-num-pill">03</div>
              <ClipboardList style={{ width: 24, height: 24, color: "#f59e0b", marginBottom: 8 }} />
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">DELIVER PRACTICAL SOLUTIONS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-4">
              <div className="step-num-pill">04</div>
              <Settings style={{ width: 24, height: 24, color: "#7c3aed", marginBottom: 8 }} />
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION &amp; DRILLS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-5">
              <div className="step-num-pill">05</div>
              <TrendingUp style={{ width: 24, height: 24, color: "#107c41", marginBottom: 8 }} />
              <h3 className="step-name">IMPROVE</h3>
              <p className="step-action-desc">MEASURE PERFORMANCE &amp; CONTINUAL GROWTH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Industries & Work Environments */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Factory style={{ width: 14, height: 14 }} />
              <span>Sector Expertise</span>
            </div>
            <h2 className="section-title">INDUSTRIES &amp; WORK ENVIRONMENTS</h2>
            <p className="section-subtitle" style={{ maxWidth: 760, margin: "0 auto" }}>
              Experience-informed solutions for complex, high-risk and evolving workplaces.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🧪</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Chemical &amp; Process Manufacturing</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Chemical handling, process hazards, fire prevention and operational risk control.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>💊</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Pharmaceuticals &amp; API</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Plant EHS governance, contractor safety oversight, process safety and compliance support.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🛢️</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Oil, Gas, EPC &amp; Engineering</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Project safety, Permit-to-Work (PTW), construction risk and commissioning readiness.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏗️</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Construction &amp; Infrastructure</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Greenfield/brownfield project safety, work at height controls and contractor supervision.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏭</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Manufacturing &amp; Warehousing</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Workplace safety standards, fire readiness, material handling and emergency action planning.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏢</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Commercial &amp; Institutional Facilities</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Fire risk awareness, safe evacuation planning and safety systems engineering review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="section-padding">
        <div className="container">
          <div className="liquid-card founder-card lazy-scale">
            <div className="founder-avatar-wrap">
              <div className="founder-avatar-liquid" style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/sachin.jpeg"
                  alt="Mr. Sachin Patel - Founder & Director"
                  fill
                  sizes="170px"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  priority
                />
              </div>
              <h3 className="founder-name">Mr. Sachin Patel</h3>
              <div className="founder-role">
                <Award style={{ width: 14, height: 14, color: "var(--accent-cyan)" }} />
                <span>Founder & Director</span>
              </div>
            </div>

            <div className="founder-bio-wrap">
              <div className="badge-pill" style={{ marginBottom: 12 }}>
                <CheckCircle style={{ width: 14, height: 14 }} />
                <span>20+ Years Cross-Sector Leadership</span>
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 14 }}>
                Engineering Safety & Sustainability Across Industrial, Commercial & Residential Infrastructure.
              </h2>
              <p className="founder-bio-p">
                A highly accomplished EHS professional with over 20 years of experience in Environment, Health, Safety, Fire Protection, Sustainability, Process Safety and Regulatory Compliance across Chemical, Pharmaceutical, Oil &amp; Gas, EPC, Construction, Engineering and Manufacturing sectors.
              </p>

              <div className="credentials-wrap">
                <span className="cred-chip">M.Sc. (Climate Change &amp; Impact Management)</span>
                <span className="cred-chip">MBA (Safety Engineering)</span>
                <span className="cred-chip">B.Sc. Fire</span>
                <span className="cred-chip">ADIS</span>
                <span className="cred-chip">NEBOSH IGC</span>
                <span className="cred-chip">NEBOSH PSM</span>
                <span className="cred-chip">PDIETM</span>
                <span className="cred-chip">PGDFLSA</span>
                <span className="cred-chip">CDM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation CTA Banner */}
      <section className="section-padding" style={{ paddingTop: 10, paddingBottom: 60 }}>
        <div className="container">
          <div className="liquid-card cta-banner-card lazy-reveal" style={{ textAlign: "center", background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,245,255,0.7))" }}>
            <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#1d1d1f", marginBottom: 12 }}>
              Ready to Upgrade Your Industrial Safety & EHS Standards?
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: 650, margin: "0 auto 28px" }}>
              Connect directly with our senior consultant to schedule a comprehensive diagnostic audit for your manufacturing facility.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
              <span>Request Consultation</span>
              <ArrowUpRight style={{ width: 18, height: 18 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
