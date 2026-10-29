import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  Target,
  Check,
  ShieldAlert,
  TrendingUp,
  Award,
  Database,
  Sprout,
  HeartPulse,
  Flame,
  FileCheck,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SETURAKSH SUSTAINABLE EngiSafe Private Limited",
  description: "Learn about SETURAKSH SUSTAINABLE EngiSafe Private Limited - our foundation, vision, mission, operating framework, and core policy commitments.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge-pill lazy-reveal">
            <span className="dot"></span>
            <span>Organization Profile & Operating Core</span>
          </div>
          <h1 className="page-hero-title lazy-reveal delay-1">ABOUT US</h1>
          <p className="page-hero-sub lazy-reveal delay-2">
            Protecting People, Process, Property and Planet through innovative engineering solutions and EHS excellence.
          </p>
        </div>
      </section>

      {/* Slide 2 & 3: Foundation & Vision / Mission */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="about-grid">
            <div className="liquid-card lazy-reveal">
              {/* Master Brand Identity & 6 Pillars Lockup */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "22px 16px",
                  marginBottom: 26,
                  background: "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 247, 0.75) 100%)",
                  borderRadius: 18,
                  border: "1px solid rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 10px 28px rgba(0, 113, 227, 0.08), inset 0 1px 0 #ffffff",
                }}
              >
                <Image
                  src="/seturaksh-master-logo.png"
                  alt="SETURAKSH SUSTAINABLE EngiSafe Private Limited - Master Identity"
                  width={520}
                  height={507}
                  priority
                  style={{
                    width: "auto",
                    height: "260px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 14px 32px rgba(0, 113, 227, 0.18))",
                  }}
                />
              </div>

              <div className="badge-pill">
                <ShieldCheck style={{ width: 14, height: 14 }} />
                <span>Our Foundation</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Professional Consultancy & Engineering Precision
              </h2>
              <p className="about-text">
                SETURAKSH SUSTAINABLE EngiSafe Private Limited provides specialized professional consultancy and technical advisory services in Occupational Health, Safety, Environment, Fire Protection, and Sustainability. We support industries in achieving regulatory compliance, operational excellence, risk reduction, and sustainable growth through innovative and practical solutions.
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

      {/* Slide 4: SPARSH FRAMEWORK (DRIVING SAFETY, PERFORMANCE & WELL-BEING) */}
      <section className="section-padding framework-section">
        <div className="container">
          <div className="framework-intro-header lazy-reveal">
            <div className="badge-pill">
              <Award style={{ width: 14, height: 14 }} />
              <span>Operating Framework</span>
            </div>
            <h2 className="section-title">SETURAKSH OPERATING FRAMEWORK</h2>
            <p className="section-subtitle" style={{ fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)" }}>
              DRIVING SAFETY, PERFORMANCE & WELL-BEING
            </p>
          </div>

          <div className="framework-grid">
            {/* S – SAFETY */}
            <div className="liquid-card framework-card lazy-reveal delay-1">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-s1">S</div>
                <ShieldAlert style={{ color: "#dc2626", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">S – SAFETY</h3>
              <p className="letter-desc">Zero harm mindset through proactive risk identification and control.</p>
            </div>

            {/* P – PRODUCTIVITY */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-p">P</div>
                <TrendingUp style={{ color: "#0284c7", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">P – PRODUCTIVITY</h3>
              <p className="letter-desc">Deliver efficient, high-quality results without compromising safety.</p>
            </div>

            {/* A – ACCOUNTABILITY */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-a">A</div>
                <Award style={{ color: "#7c3aed", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">A – ACCOUNTABILITY</h3>
              <p className="letter-desc">Own your actions, decisions, and responsibilities.</p>
            </div>

            {/* R – RESOURCES */}
            <div className="liquid-card framework-card lazy-reveal delay-1">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-r">R</div>
                <Database style={{ color: "#d97706", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">R – RESOURCES</h3>
              <p className="letter-desc">Utilize manpower, materials, and tools effectively and sustainably.</p>
            </div>

            {/* S – SYSTEMATIC WORKING */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-s2">S</div>
                <Sprout style={{ color: "#107c41", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">S – SYSTEMATIC WORKING</h3>
              <p className="letter-desc">Follow SOPs, structured processes, and continuous improvement.</p>
            </div>

            {/* H – HAPPY LIFE */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-h">H</div>
                <HeartPulse style={{ color: "#ec4899", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">H – HAPPY LIFE</h3>
              <p className="letter-desc">Promote well-being, work-life balance, and a positive culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: SPARSH POLICY STATEMENT */}
      <section className="section-padding">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <FileCheck style={{ width: 14, height: 14 }} />
              <span>Governance Commitments</span>
            </div>
            <h2 className="section-title">SETURAKSH Policy Statement</h2>
            <p className="section-subtitle">
              At SETURAKSH SUSTAINABLE EngiSafe Private Limited, we are committed to fostering a safe, efficient and people-centric workplace through these foundational principles.
            </p>
          </div>

          <div className="policy-statement-grid-8">
            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><ShieldAlert style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Safety:</strong> We prioritize Safety above all, ensuring that every activity is conducted with a proactive approach to hazard identification and risk mitigation, striving for zero harm to people, property and the environment.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><TrendingUp style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Productivity:</strong> We drive Productivity by promoting efficient and quality-focused work practices, ensuring that operational excellence is achieved without compromising safety or well-being.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><Award style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Accountability:</strong> We uphold Accountability at all levels, where every individual takes ownership of their actions, responsibilities and outcomes, contributing to a culture of trust and integrity.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><Database style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Resources:</strong> We ensure optimal use of Resources, including manpower, materials, and equipment, to enhance efficiency, reduce waste and support sustainable operations.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><CheckCircle style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Systematic Working:</strong> We follow a Systematic way of working by implementing structured processes, standard operating procedures (sops), and continuous improvement practices to maintain consistency and reliability in all operations.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><HeartPulse style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Happy Life:</strong> We believe in enabling a Happy life by promoting employee well-being, work-life balance and a positive organizational culture that supports personal and professional growth.
              </div>
            </div>
          </div>

          <div className="liquid-card lazy-reveal" style={{ marginTop: 24, padding: "20px 24px", textAlign: "center", background: "rgba(0,113,227,0.05)", border: "1px solid rgba(0,113,227,0.15)", borderRadius: 18 }}>
            <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
              “Through the SETURAKSH framework, we aim to build a resilient, responsible and high-performing organization where safety, efficiency, and well-being go hand in hand.”
            </p>
          </div>
        </div>
      </section>

      {/* Slide 8: Founder Spotlight */}
      <section className="section-padding" style={{ paddingTop: 0, paddingBottom: 60 }}>
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
                Founder & Principal Consultant
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
    </>
  );
}
