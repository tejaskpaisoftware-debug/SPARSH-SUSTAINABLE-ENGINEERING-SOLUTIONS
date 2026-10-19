import Link from "next/link";
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
              <div className="hero-status-pill">
                <span className="dot" style={{ background: "var(--accent-emerald)" }}></span>
                <span>Gujarat, India • Industrial EHS & Process Safety Advisory</span>
              </div>

              <h1 className="hero-main-title">
                SPARSH <br />
                <span className="txt-people">People</span> •{" "}
                <span className="txt-process">Process</span> <br />
                <span className="txt-property">Property</span> •{" "}
                <span className="txt-planet">Planet</span>
              </h1>

              <p className="hero-lead-text">
                Your premier engineering & compliance partner for Environment, Health, Safety & Fire Excellence. We empower industrial enterprises to achieve zero harm, full statutory compliance, and sustainable operational growth.
              </p>

              <div className="hero-cta-cluster">
                <Link href="/contact" className="btn btn-primary">
                  <span>Schedule Facility Audit</span>
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  <span>Explore Capabilities</span>
                </Link>
              </div>

              <div className="hero-cred-ticker">
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

          {/* 4 Core Pillars Glass Cards */}
          <div className="hero-pillars-grid">
            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "linear-gradient(135deg, #0071e3, #47a3ff)" }}>
                  <Users style={{ width: 22, height: 22 }} />
                </div>
                <span className="pillar-num-label">01</span>
              </div>
              <h3 className="pillar-card-title">PEOPLE</h3>
              <p className="pillar-card-sub">Workforce Health & Behavior</p>
              <p className="pillar-card-desc">
                Promote zero-harm safety culture, occupational hygiene, and behavioral ergonomics across all operational levels.
              </p>
            </div>

            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "linear-gradient(135deg, #d97706, #fbbf24)" }}>
                  <Cog style={{ width: 22, height: 22 }} />
                </div>
                <span className="pillar-num-label">02</span>
              </div>
              <h3 className="pillar-card-title">PROCESS</h3>
              <p className="pillar-card-sub">Engineering & Risk Governance</p>
              <p className="pillar-card-desc">
                Rigorous Process Safety Management (PSM), HAZOP, HIRA, mechanical integrity, and standard operating procedures.
              </p>
            </div>

            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "linear-gradient(135deg, #dc2626, #f87171)" }}>
                  <ShieldCheck style={{ width: 22, height: 22 }} />
                </div>
                <span className="pillar-num-label">03</span>
              </div>
              <h3 className="pillar-card-title">PROPERTY</h3>
              <p className="pillar-card-sub">Asset & Infrastructure Resilience</p>
              <p className="pillar-card-desc">
                Fire load assessment, hydraulic calculations, emergency mitigation systems, and plant asset preservation.
              </p>
            </div>

            <div className="pillar-glass-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-wrap" style={{ background: "linear-gradient(135deg, #107c41, #34c759)" }}>
                  <Leaf style={{ width: 22, height: 22 }} />
                </div>
                <span className="pillar-num-label">04</span>
              </div>
              <h3 className="pillar-card-title">PLANET</h3>
              <p className="pillar-card-sub">Ecological Stewardship & ESG</p>
              <p className="pillar-card-desc">
                Pollution prevention, environmental audits, carbon footprint evaluation, and sustainable resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Counter Ribbon */}
      <section className="section-padding" style={{ paddingTop: 30, paddingBottom: 40 }}>
        <div className="container">
          <div className="stats-glass-container">
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
            <div className="liquid-card">
              <div className="badge-pill">
                <ShieldCheck style={{ width: 14, height: 14 }} />
                <span>Our Foundation</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Professional Consultancy & Engineering Precision
              </h2>
              <p className="about-text">
                SPARSH Sustainable Engineering Solutions provides specialized professional consultancy and technical advisory services in Occupational Health, Safety, Environment, Fire Protection, and Sustainability. We support industries in achieving regulatory compliance, operational excellence, risk reduction, and continuous workforce development.
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
              <div className="liquid-card vm-card">
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

              <div className="liquid-card vm-card mission">
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
          <div className="services-header">
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
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">01</div>
              <Search style={{ width: 24, height: 24, color: "var(--accent-cyan)", marginBottom: 8 }} />
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">ASSESS RISKS & COMPLIANCE</p>
            </div>

            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">02</div>
              <BarChart3 style={{ width: 24, height: 24, color: "#0284c7", marginBottom: 8 }} />
              <h3 className="step-name">ANALYZE</h3>
              <p className="step-action-desc">ANALYZE GAPS & OPPORTUNITIES</p>
            </div>

            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">03</div>
              <ClipboardList style={{ width: 24, height: 24, color: "#f59e0b", marginBottom: 8 }} />
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">ADVISE PRACTICAL SOLUTIONS</p>
            </div>

            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">04</div>
              <Settings style={{ width: 24, height: 24, color: "#7c3aed", marginBottom: 8 }} />
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION</p>
            </div>

            <div className="liquid-card approach-step-card">
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
          <div className="liquid-card founder-card">
            <div className="founder-avatar-wrap">
              <div className="founder-avatar-liquid">
                <span className="founder-initials">TP</span>
              </div>
              <h3 className="founder-name">Tejas Patel</h3>
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
                A seasoned EHS Professional with over two decades of extensive field and advisory experience across chemical, petrochemical, EPC, and manufacturing facilities throughout India. Specializing in high-hazard operations, process safety systems, and sustainable plant transformation.
              </p>

              <div className="credentials-wrap">
                <span className="cred-chip">B.E. (Mechanical)</span>
                <span className="cred-chip">M.Tech (HSE)</span>
                <span className="cred-chip">NEBOSH IGC Certified</span>
                <span className="cred-chip">ADIS (Advanced Diploma in Industrial Safety)</span>
                <span className="cred-chip">Certified PSM Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">Specialized Industry Domains</h2>
            <p className="section-subtitle">
              Comprehensive regulatory governance and risk advisory for India&apos;s most critical industrial environments.
            </p>
          </div>

          <div className="industries-grid">
            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(0,113,227,0.08)", color: "#0071e3" }}>
                <FlaskConical style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Chemical & Petrochemical</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(217,119,6,0.08)", color: "#d97706" }}>
                <Pill style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Pharmaceutical & API</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(16,124,65,0.08)", color: "#107c41" }}>
                <HardHat style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Construction & Infra</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}>
                <Wrench style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Engineering & Heavy Plants</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed" }}>
                <Factory style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">EPC & Turnkey Projects</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(234,88,12,0.08)", color: "#ea580c" }}>
                <Flame style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Oil & Gas Terminals</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(5,150,105,0.08)", color: "#059669" }}>
                <Factory style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">Fertilizer & Agrochem</div>
            </div>

            <div className="industry-chip">
              <div className="industry-icon-wrap" style={{ background: "rgba(2,132,199,0.08)", color: "#0284c7" }}>
                <ShieldCheck style={{ width: 22, height: 22 }} />
              </div>
              <div className="industry-chip-title">General Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation CTA Banner */}
      <section className="section-padding" style={{ paddingTop: 10, paddingBottom: 60 }}>
        <div className="container">
          <div className="liquid-card cta-banner-card" style={{ textAlign: "center", background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,245,255,0.7))" }}>
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
