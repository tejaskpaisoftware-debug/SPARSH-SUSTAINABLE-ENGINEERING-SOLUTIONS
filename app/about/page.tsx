import type { Metadata } from "next";
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
  title: "About Us | SPARSH Sustainable Engineering Solutions",
  description: "Learn about SPARSH Sustainable Engineering Solutions - our foundation, vision, mission, 6-pillar framework, and core policy commitments.",
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
              <div className="badge-pill">
                <ShieldCheck style={{ width: 14, height: 14 }} />
                <span>Our Foundation</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Professional Consultancy & Engineering Precision
              </h2>
              <p className="about-text">
                SPARSH Sustainable Engineering Solutions provides specialized professional consultancy and technical advisory services in Occupational Health, Safety, Environment, Fire Protection, and Sustainability. We support industries in achieving regulatory compliance, operational excellence, risk reduction, and sustainable growth through innovative and practical solutions.
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
            <h2 className="section-title">SPARSH FRAMEWORK</h2>
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
              <p className="letter-desc">Own your actions, decisions, and responsibilities across all operations.</p>
            </div>

            {/* R – RESOURCES */}
            <div className="liquid-card framework-card lazy-reveal delay-1">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-r">R</div>
                <Database style={{ color: "#d97706", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">R – RESOURCES</h3>
              <p className="letter-desc">Optimize assets, materials, time, and human talent efficiently.</p>
            </div>

            {/* S – SUSTAINABILITY */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-s2">S</div>
                <Sprout style={{ color: "#107c41", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">S – SUSTAINABILITY</h3>
              <p className="letter-desc">Protect the environment and create lasting positive impact.</p>
            </div>

            {/* H – HEALTH */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-h">H</div>
                <HeartPulse style={{ color: "#ec4899", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">H – HEALTH</h3>
              <p className="letter-desc">Prioritize physical and mental well-being for all employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: SPARSH POLICY STATEMENT (8 Core Principles) */}
      <section className="section-padding">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <FileCheck style={{ width: 14, height: 14 }} />
              <span>Governance Commitments</span>
            </div>
            <h2 className="section-title">SPARSH Policy Statement</h2>
            <p className="section-subtitle">
              At SPARSH Sustainable Engineering Solutions, we are committed to conducting our operations and consultancy with the highest standards of safety, quality, and environmental stewardship.
            </p>
          </div>

          <div className="policy-statement-grid-8">
            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><Flame style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Safety First:</strong> Prioritize health and safety above all business objectives.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><CheckCircle style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Zero Harm:</strong> Strive for zero incidents, injuries, and occupational illnesses.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><FileCheck style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Legal Compliance:</strong> Comply with all applicable statutory and regulatory requirements.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><ShieldCheck style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Risk Management:</strong> Implement effective risk assessment and control measures.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><Sprout style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Environmental Stewardship:</strong> Minimize impact through pollution control and resource efficiency.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><Award style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Competency & Training:</strong> Continuously train and empower employees.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><TrendingUp style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Continuous Improvement:</strong> Regularly review and enhance EHS performance.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><Target style={{ width: 24, height: 24 }} /></div>
              <div className="policy-card-desc">
                <strong>Quality Solutions:</strong> Deliver reliable and sustainable engineering advisory.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Founder Spotlight */}
      <section className="section-padding" style={{ paddingTop: 0, paddingBottom: 60 }}>
        <div className="container">
          <div className="liquid-card founder-card lazy-scale">
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
                Engineering Credibility & Certifications
              </h2>
              <p className="founder-bio-p">
                Dedicated to helping industrial organizations establish self-sustaining safety cultures and world-class process hazard prevention systems.
              </p>
              <div className="credentials-wrap">
                <span className="cred-chip">B.E. (Mechanical)</span>
                <span className="cred-chip">M.Tech (HSE)</span>
                <span className="cred-chip">NEBOSH IGC Certified</span>
                <span className="cred-chip">ADIS (Advanced Diploma in Industrial Safety)</span>
                <span className="cred-chip">Certified PSM Professional</span>
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
