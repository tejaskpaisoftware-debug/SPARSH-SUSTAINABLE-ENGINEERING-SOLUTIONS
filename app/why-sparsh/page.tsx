import type { Metadata } from "next";
import Link from "next/link";
import {
  CornerDownLeft,
  CornerDownRight,
  Handshake,
  Check,
  Scale,
  Target,
  AlertTriangle,
  Flame,
  Sprout,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why SPARSH | Value Proposition & Proven Track Record",
  description:
    "Discover why leading industrial facilities partner with SPARSH Sustainable Engineering Solutions: 20+ years expertise, certified competencies, and 9-step value delivery.",
};

export default function WhySparshPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge-pill lazy-reveal">
            <span className="dot"></span>
            <span>Value Proposition & Proven Track Record</span>
          </div>
          <h1 className="page-hero-title lazy-reveal delay-1">WHY SPARSH</h1>
          <p className="page-hero-sub lazy-reveal delay-2">
            Backed by over two decades of rigorous cross-sector engineering experience, certified credentials, and an uncompromised commitment to zero-harm operations.
          </p>
        </div>
      </section>

      {/* Slide 6: The 9-Step Connected Value Pipeline */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>Our Core Differentiators</h2>
            <p className="section-subtitle">
              A continuous pipeline of technical mastery, certified competencies, and pragmatic compliance frameworks.
            </p>
          </div>

          <div className="pipeline-flow-container">
            {/* Row 1: Steps 1 to 3 */}
            <div className="pipeline-row">
              <div className="pipeline-step-card lazy-reveal delay-1">
                <div className="step-num-badge">01</div>
                <div className="pipeline-step-text">20+ Years of Industry Experience</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-2">
                <div className="step-num-badge">02</div>
                <div className="pipeline-step-text">Certified EHS Professional (NEBOSH, ADIS, PSM, PGDFLSA, CDM)</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-3">
                <div className="step-num-badge">03</div>
                <div className="pipeline-step-text">Expertise in Chemical, Pharmaceutical, Construction, Engineering, EPC & Oil & Gas Industries</div>
              </div>
            </div>

            {/* Connecting Arrow Indicator Row */}
            <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 50 }} className="pipeline-turn-arrow lazy-reveal">
              <CornerDownLeft style={{ color: "var(--accent-cyan)", width: 28, height: 28 }} />
            </div>

            {/* Row 2: Steps 4 to 6 */}
            <div className="pipeline-row">
              <div className="pipeline-step-card lazy-reveal delay-1">
                <div className="step-num-badge">04</div>
                <div className="pipeline-step-text">Practical Compliance Solutions</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-2">
                <div className="step-num-badge">05</div>
                <div className="pipeline-step-text">Customized Training Programs</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-3">
                <div className="step-num-badge">06</div>
                <div className="pipeline-step-text">Emergency Preparedness & Crisis Management Expertise</div>
              </div>
            </div>

            {/* Connecting Arrow Indicator Row */}
            <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 50 }} className="pipeline-turn-arrow lazy-reveal">
              <CornerDownRight style={{ color: "var(--accent-emerald)", width: 28, height: 28 }} />
            </div>

            {/* Row 3: Steps 7 to 9 */}
            <div className="pipeline-row">
              <div className="pipeline-step-card lazy-reveal delay-1">
                <div className="step-num-badge">07</div>
                <div className="pipeline-step-text">Sustainable and Cost-Effective Solutions</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-2">
                <div className="step-num-badge">08</div>
                <div className="pipeline-step-text">Safety Culture Transformation & Continuous Improvement</div>
              </div>
              <div className="pipeline-step-card lazy-reveal delay-3">
                <div className="step-num-badge">09</div>
                <div className="pipeline-step-text">Well-versed in local and international legal compliance requirements and industry best practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Our Commitment Banner & Operating Principles */}
      <section className="section-padding">
        <div className="container">
          {/* Slide 9: Commitment Banner */}
          <div className="liquid-card lazy-reveal" style={{ padding: "36px 32px", textAlign: "center", background: "linear-gradient(135deg, rgba(0,113,227,0.08), rgba(16,124,65,0.06))", border: "1px solid rgba(0,113,227,0.18)", borderRadius: 24, marginBottom: 40 }}>
            <div className="badge-pill" style={{ marginBottom: 12 }}>
              <Award style={{ width: 14, height: 14 }} />
              <span>OUR COMMITMENT</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.3rem)", fontWeight: 800, color: "var(--text-primary)", fontStyle: "italic", marginBottom: 16 }}>
              “SAFE WORK. SMART WORK. RESPONSIBLE WORK. HAPPY LIFE.”
            </h2>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-cyan)", marginBottom: 8 }}>
              Together, Let’s Build A Culture Of Excellence Through SPARSH!
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 700, margin: "0 auto" }}>
              “Protecting People, Preserving The Environment, And Powering Sustainable Business Success.”
            </p>
          </div>

          <div className="services-header lazy-reveal">
            <h2 className="section-title">Core Operating Principles</h2>
            <p className="section-subtitle">
              Engineered frameworks designed for practical adoption across your production workforce.
            </p>
          </div>

          <div className="why-sparsh-grid">
            <div className="liquid-card why-feature-card lazy-reveal delay-1">
              <div className="why-icon-box"><Shield style={{ width: 22, height: 22 }} /></div>
              <div>
                <h3 className="why-title">Comprehensive EHS Solutions</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Full lifecycle risk governance from factory floor audits to boardroom ESG strategy.
                </p>
              </div>
            </div>

            <div className="liquid-card why-feature-card lazy-reveal delay-2">
              <div className="why-icon-box" style={{ background: "rgba(16,124,65,0.08)", color: "#107c41" }}>
                <Layers style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h3 className="why-title">Experienced Professionals</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Over two decades of hands-on technical mastery across hazardous industrial environments.
                </p>
              </div>
            </div>

            <div className="liquid-card why-feature-card lazy-reveal delay-3">
              <div className="why-icon-box" style={{ background: "rgba(217,119,6,0.08)", color: "#d97706" }}>
                <Sparkles style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h3 className="why-title">Tailored Client Solutions</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Bespoke safety protocols aligned with your specific plant layout, chemistry, and workforce.
                </p>
              </div>
            </div>

            <div className="liquid-card why-feature-card lazy-reveal delay-1">
              <div className="why-icon-box" style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed" }}>
                <Scale style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h3 className="why-title">Practical Compliance</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Pragmatic roadmaps that fulfill statutory requirements while maintaining high plant throughput.
                </p>
              </div>
            </div>

            <div className="liquid-card why-feature-card lazy-reveal delay-2">
              <div className="why-icon-box" style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}>
                <Users style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h3 className="why-title">Focus on Continuous Training</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Empower frontline engineers and contractors with accredited safety drills and certifications.
                </p>
              </div>
            </div>

            <div className="liquid-card why-feature-card lazy-reveal delay-3">
              <div className="why-icon-box" style={{ background: "rgba(2,132,199,0.08)", color: "#0284c7" }}>
                <Sprout style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h3 className="why-title">Commitment to Sustainability</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
                  Carbon reduction, green audits, and ESG frameworks that protect ecosystems and corporate reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10: Why Partner with SPARSH (6 Key Outcomes Showcase) */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="partner-showcase-grid lazy-scale">
            <div className="partner-accent-card">
              <div className="badge-pill" style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)", color: "#fff", width: "fit-content" }}>
                <Handshake style={{ width: 14, height: 14 }} />
                <span>Value Partnership</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.7rem, 5vw, 2.3rem)", fontWeight: 800, lineHeight: 1.15, margin: "16px 0" }}>
                Why Partner with SPARSH?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 24 }}>
                At SPARSH Sustainable Engineering Solutions, we help organizations achieve measurable excellence across all operational frontiers.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: "var(--accent-emerald-light)", fontSize: "0.95rem" }}>
                <Check style={{ width: 18, height: 18 }} />
                <span>People + Process + Property + Planet</span>
              </div>
            </div>

            <div className="partner-points-list">
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#0071e3" }}><Scale style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Regulatory compliance</div>
              </div>
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#f59e0b" }}><Target style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Operational excellence</div>
              </div>
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#ef4444" }}><AlertTriangle style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Risk reduction</div>
              </div>
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#dc2626" }}><Flame style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Fire & process safety</div>
              </div>
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#107c41" }}><Sprout style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Sustainable growth</div>
              </div>
              <div className="partner-point-chip">
                <div className="partner-point-icon" style={{ background: "#7c3aed" }}><Users style={{ width: 20, height: 20 }} /></div>
                <div className="partner-point-title">Workforce competency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Credibility Spotlight & Consultation Link */}
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
                <span>Certified Advisory Team</span>
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 14 }}>
                Ready to Partner with SPARSH?
              </h2>
              <p className="founder-bio-p">
                A highly accomplished EHS professional with over 20 years of experience in Environment, Health, Safety, Fire Protection, Sustainability, Process Safety and Regulatory Compliance across Chemical, Pharmaceutical, Oil &amp; Gas, EPC, Construction, Engineering and Manufacturing sectors.
              </p>
              <div className="credentials-wrap" style={{ marginBottom: 20 }}>
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
              <div>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "13px 28px" }}>
                  <span>Schedule Consultation</span>
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
