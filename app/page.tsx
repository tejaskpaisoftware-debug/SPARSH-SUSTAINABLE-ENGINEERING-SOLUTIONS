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
              <h1 className="hero-main-title lazy-reveal delay-1">
                SETURAKSH <br />
                <span style={{ color: "#00843d" }}>EHS</span> •{" "}
                <span style={{ color: "#d9251d" }}>Fire</span> •{" "}
                <span style={{ color: "#d97706" }}>Process</span> <br />
                <span style={{ color: "#0d8a43" }}>Environment</span> •{" "}
                <span style={{ color: "#0066cc" }}>Engineering</span> •{" "}
                <span style={{ color: "#7e22ce" }}>Risk</span>
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
                  <Shield style={{ width: 16, height: 16, color: "var(--accent-cyan)" }} />
                  <span>Zero-Harm Mindset</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4P Liquid Reactor */}
            <ReactorStage />
          </div>

          {/* 6 Core Services Glass Cards */}
          <div className="hero-pillars-grid lazy-scale delay-4">
            {/* 01. EHS CONSULTANCY */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-ehs.png" alt="EHS Consultancy" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#00843d" }}>01</span>
              </div>
              <h3 className="pillar-card-title">EHS CONSULTANCY</h3>
              <p className="pillar-card-sub" style={{ color: "#00843d" }}>Workforce Health & Safety</p>
              <p className="pillar-card-desc">
                Occupational health, statutory compliance, behavioral safety governance, OSHA advisory & workforce training.
              </p>
            </div>

            {/* 02. FIRE SAFETY */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-fire.png" alt="Fire Safety" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#d9251d" }}>02</span>
              </div>
              <h3 className="pillar-card-title">FIRE SAFETY</h3>
              <p className="pillar-card-sub" style={{ color: "#d9251d" }}>Audits & System Engineering</p>
              <p className="pillar-card-desc">
                Hydrant network design, fire load evaluation, life safety audits, and emergency response defense systems.
              </p>
            </div>

            {/* 03. PROCESS SAFETY */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-process.png" alt="Process Safety" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#d97706" }}>03</span>
              </div>
              <h3 className="pillar-card-title">PROCESS SAFETY</h3>
              <p className="pillar-card-sub" style={{ color: "#d97706" }}>PSM, HAZOP & Risk Analysis</p>
              <p className="pillar-card-desc">
                Process Safety Management (PSM), HAZOP, HIRA, mechanical integrity, and standard operational risk control.
              </p>
            </div>

            {/* 04. ENVIRONMENT & SUSTAINABILITY */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-env.png" alt="Environment & Sustainability" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#0d8a43" }}>04</span>
              </div>
              <h3 className="pillar-card-title">ENV & SUSTAINABILITY</h3>
              <p className="pillar-card-sub" style={{ color: "#0d8a43" }}>ESG & Ecological Stewardship</p>
              <p className="pillar-card-desc">
                Decarbonization, pollution prevention, statutory emissions, carbon footprinting & environmental compliance.
              </p>
            </div>

            {/* 05. TOTAL ENGINEERING */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-engineering.png" alt="Total Engineering" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#0066cc" }}>05</span>
              </div>
              <h3 className="pillar-card-title">TOTAL ENGINEERING</h3>
              <p className="pillar-card-sub" style={{ color: "#0066cc" }}>Industrial Systems & Precision</p>
              <p className="pillar-card-desc">
                Engineering design review, instrumentation safety systems, plant integrity, and asset reliability solutions.
              </p>
            </div>

            {/* 06. RISK MANAGEMENT */}
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "transparent", padding: 0 }}>
                  <Image src="/service-risk.png" alt="Risk Management" width={34} height={34} style={{ borderRadius: "50%" }} />
                </div>
                <span className="pillar-num-label" style={{ color: "#7e22ce" }}>06</span>
              </div>
              <h3 className="pillar-card-title">RISK MANAGEMENT</h3>
              <p className="pillar-card-sub" style={{ color: "#7e22ce" }}>Governance & Defense Control</p>
              <p className="pillar-card-desc">
                Enterprise risk mitigation, regulatory compliance audits, insurance gap analysis, and incident prevention.
              </p>
            </div>
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
              <div className="stat-label">Core Target & Operating Mindset</div>
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
                <span>Our Foundation</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Professional Consultancy & Engineering Precision
              </h2>
              <p className="about-text">
                SETURAKSH SUSTAINABLE EngiSafe Private Limited is a professional consultancy and engineering service provider specializing in environment, health, safety, fire protection, sustainability, and climate change management. We support industries in achieving regulatory compliance, operational excellence, risk reduction, and sustainable growth through innovative and practical solutions.
              </p>
              <div className="about-badges-flex">
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Regulatory Compliance
                </span>
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Operational Excellence
                </span>
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Risk Reduction
                </span>
                <span className="feature-pill">
                  <Check style={{ width: 14, height: 14, color: "var(--accent-emerald)" }} />
                  Sustainable Growth
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
                  “To become a trusted partner in creating safer, healthier, and sustainable industries.”
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
                  “Protecting People, Process, Property and Planet through innovative engineering solutions and EHS excellence.”
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
              ASSESS → ANALYZE → ADVISE → IMPLEMENT → IMPROVE
            </p>
          </div>

          <div className="approach-timeline">
            <div className="liquid-card approach-step-card lazy-reveal delay-1">
              <div className="step-num-pill">01</div>
              <Search style={{ width: 24, height: 24, color: "var(--accent-cyan)", marginBottom: 8 }} />
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">ASSESS RISKS & COMPLIANCE</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-2">
              <div className="step-num-pill">02</div>
              <BarChart3 style={{ width: 24, height: 24, color: "#0284c7", marginBottom: 8 }} />
              <h3 className="step-name">ANALYZE</h3>
              <p className="step-action-desc">ANALYZE GAPS & OPPORTUNITIES</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-3">
              <div className="step-num-pill">03</div>
              <ClipboardList style={{ width: 24, height: 24, color: "#f59e0b", marginBottom: 8 }} />
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">ADVISE PRACTICAL SOLUTIONS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-4">
              <div className="step-num-pill">04</div>
              <Settings style={{ width: 24, height: 24, color: "#7c3aed", marginBottom: 8 }} />
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-5">
              <div className="step-num-pill">05</div>
              <TrendingUp style={{ width: 24, height: 24, color: "#107c41", marginBottom: 8 }} />
              <h3 className="step-name">IMPROVE</h3>
              <p className="step-action-desc">DRIVE CONTINUOUS IMPROVEMENT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight */}
      <section className="section-padding">
        <div className="container">
          <div className="liquid-card founder-card lazy-scale">
            <div className="founder-avatar-wrap">
              <div className="founder-avatar-liquid">
                <span className="founder-initials">SP</span>
              </div>
              <h3 className="founder-name">Mr. Sachin Patel</h3>
              <div className="founder-role">
                <Award style={{ width: 14, height: 14, color: "var(--accent-cyan)" }} />
                <span>Founder & Principal Consultant</span>
              </div>
            </div>

            <div className="founder-bio-wrap">
              <div className="badge-pill" style={{ marginBottom: 12 }}>
                <CheckCircle style={{ width: 14, height: 14 }} />
                <span>20+ Years Cross-Sector Leadership</span>
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 14 }}>
                Driving Industrial Safety & Environmental Excellence
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

      {/* Industries Matrix */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <h2 className="section-title">Specialized Industry Domains</h2>
            <p className="section-subtitle">
              Comprehensive regulatory governance and risk advisory for India&apos;s most critical industrial environments.
            </p>
          </div>

          <div className="industries-grid lazy-reveal">
            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(0,113,227,0.08)", color: "#0071e3" }}>
                <FlaskConical style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Chemical Manufacturing</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(217,119,6,0.08)", color: "#d97706" }}>
                <Pill style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Pharmaceuticals &amp; API</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(234,88,12,0.08)", color: "#ea580c" }}>
                <Flame style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Oil &amp; Gas</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(16,124,65,0.08)", color: "#107c41" }}>
                <HardHat style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Construction &amp; Infrastructure</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(245,158,11,0.08)", color: "#f59e0b" }}>
                <Flame style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Power &amp; Energy</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed" }}>
                <Factory style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Logistics &amp; Warehousing</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(2,132,199,0.08)", color: "#0284c7" }}>
                <ShieldCheck style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Commercial Facilities</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}>
                <Wrench style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Engineering &amp; Manufacturing</div>
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
