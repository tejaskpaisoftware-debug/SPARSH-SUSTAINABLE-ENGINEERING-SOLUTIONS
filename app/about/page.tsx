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

      {/* Slide 2 & 3: Foundation, Purpose, Approach, Commitment & Vision / Mission */}
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
                <span>About Us</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Practical Safety, Engineering and Sustainability Support for Industry
              </h2>
              <p className="about-text">
                SETURAKSH SUSTAINABLE EngiSafe Private Limited is a professional consultancy and supply business focused on Environment, Health &amp; Safety (EHS), Fire Safety, Process Safety and related engineering solutions.
              </p>
              <p className="about-text" style={{ marginTop: -8 }}>
                We aim to help organisations strengthen compliance, reduce operational risk, build workforce capability and protect people, assets, processes and the environment through practical, risk-based support.
              </p>

              {/* Purpose, Approach & Commitment Trio */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 24 }}>
                <div style={{ background: "rgba(0, 113, 227, 0.05)", padding: "16px 18px", borderRadius: 14, border: "1px solid rgba(0, 113, 227, 0.15)" }}>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-cyan)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    Our Purpose
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                    Make safety practical, measurable and part of everyday operations.
                  </p>
                </div>

                <div style={{ background: "rgba(16, 124, 65, 0.05)", padding: "16px 18px", borderRadius: 14, border: "1px solid rgba(16, 124, 65, 0.15)" }}>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-emerald)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    Our Approach
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                    Combine technical advice, implementation support and fit-for-purpose product supply.
                  </p>
                </div>

                <div style={{ background: "rgba(217, 119, 6, 0.05)", padding: "16px 18px", borderRadius: 14, border: "1px solid rgba(217, 119, 6, 0.15)" }}>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#d97706", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    Our Commitment
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                    Professional integrity, client partnership and continual improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision, Mission & Brand Promise Stack */}
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

              <div className="liquid-card vm-card lazy-reveal delay-3" style={{ background: "linear-gradient(135deg, rgba(0, 113, 227, 0.08), rgba(16, 124, 65, 0.08))", border: "1px solid rgba(0, 113, 227, 0.2)" }}>
                <div className="vm-icon-header">
                  <div className="vm-icon" style={{ background: "rgba(0, 113, 227, 0.15)", color: "#0071e3" }}>
                    <Award style={{ width: 22, height: 22 }} />
                  </div>
                  <h3 className="vm-title">Brand Promise</h3>
                </div>
                <p className="vm-quote" style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "1.2rem" }}>
                  “Engineering Safety. Managing Risk. Protecting Life.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Our Core Values */}
      <section className="section-padding" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="framework-intro-header lazy-reveal">
            <div className="badge-pill">
              <CheckCircle style={{ width: 14, height: 14 }} />
              <span>Core Values</span>
            </div>
            <h2 className="section-title">OUR CORE VALUES</h2>
            <p className="section-subtitle">
              Principles that guide every recommendation, service and client relationship.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {/* Value 1 */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(0, 113, 227, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0071e3", fontWeight: 800 }}>01</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Integrity</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Act honestly, transparently and ethically in every engagement.
              </p>
            </div>

            {/* Value 2 */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(220, 38, 38, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#dc2626", fontWeight: 800 }}>02</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Safety First</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Prioritise prevention, protection and life preservation above all.
              </p>
            </div>

            {/* Value 3 */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(2, 132, 199, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0284c7", fontWeight: 800 }}>03</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Technical Excellence</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Use competent, evidence-based and practical engineering methods.
              </p>
            </div>

            {/* Value 4 */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(124, 58, 237, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c3aed", fontWeight: 800 }}>04</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Accountability</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Own commitments, decisions and measurable operational outcomes.
              </p>
            </div>

            {/* Value 5 */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(217, 119, 6, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", fontWeight: 800 }}>05</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Client Partnership</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Tailor solutions to actual operating needs and plant realities.
              </p>
            </div>

            {/* Value 6 */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(16, 124, 65, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#107c41", fontWeight: 800 }}>06</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Sustainability</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Consider environmental impact and create long-term enterprise value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: The SETURAKSH Framework (S-E-T-U-R-A-K-S-H) */}
      <section className="section-padding framework-section">
        <div className="container">
          <div className="framework-intro-header lazy-reveal">
            <div className="badge-pill">
              <Award style={{ width: 14, height: 14 }} />
              <span>Operational Framework</span>
            </div>
            <h2 className="section-title">THE SETURAKSH FRAMEWORK</h2>
            <p className="section-subtitle">
              A practical framework for safer operations, risk control and sustainable performance.
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
              <p className="letter-desc">Identify hazards early and apply effective controls.</p>
            </div>

            {/* E – ENGINEERING EXCELLENCE */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-p">E</div>
                <CheckCircle style={{ color: "#0284c7", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">E – ENGINEERING EXCELLENCE</h3>
              <p className="letter-desc">Use sound technical thinking and fit-for-purpose solutions.</p>
            </div>

            {/* T – TRANSPARENCY */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-a">T</div>
                <Eye style={{ color: "#7c3aed", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">T – TRANSPARENCY</h3>
              <p className="letter-desc">Communicate clearly, document decisions and build trust.</p>
            </div>

            {/* U – UPSKILLING */}
            <div className="liquid-card framework-card lazy-reveal delay-1">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-r">U</div>
                <TrendingUp style={{ color: "#059669", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">U – UPSKILLING</h3>
              <p className="letter-desc">Build workforce competence and emergency readiness.</p>
            </div>

            {/* R – RISK OWNERSHIP */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-s2">R</div>
                <ShieldCheck style={{ color: "#ea580c", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">R – RISK OWNERSHIP</h3>
              <p className="letter-desc">Make risk control a shared operational responsibility.</p>
            </div>

            {/* A – ACCOUNTABILITY */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-h">A</div>
                <Award style={{ color: "#d946ef", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">A – ACCOUNTABILITY</h3>
              <p className="letter-desc">Deliver commitments and learn from performance.</p>
            </div>

            {/* K – KNOWLEDGE */}
            <div className="liquid-card framework-card lazy-reveal delay-1">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-p">K</div>
                <Database style={{ color: "#0284c7", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">K – KNOWLEDGE</h3>
              <p className="letter-desc">Apply standards, learning and good industry practice.</p>
            </div>

            {/* S – SUSTAINABILITY */}
            <div className="liquid-card framework-card lazy-reveal delay-2">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-r">S</div>
                <Sprout style={{ color: "#059669", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">S – SUSTAINABILITY</h3>
              <p className="letter-desc">Protect the environment and support resilience.</p>
            </div>

            {/* H – HUMAN LIFE */}
            <div className="liquid-card framework-card lazy-reveal delay-3">
              <div className="letter-badge-wrap">
                <div className="letter-circle bg-s1">H</div>
                <HeartPulse style={{ color: "#dc2626", width: 24, height: 24 }} />
              </div>
              <h3 className="letter-word">H – HUMAN LIFE</h3>
              <p className="letter-desc">Respect people, health, dignity and well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: EHS, Fire & Process Safety Policy Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <FileCheck style={{ width: 14, height: 14 }} />
              <span>Governance Commitments</span>
            </div>
            <h2 className="section-title">EHS, Fire &amp; Process Safety Policy Statement</h2>
            <p className="section-subtitle" style={{ maxWidth: 840, margin: "0 auto 30px" }}>
              SETURAKSH SUSTAINABLE EngiSafe Private Limited is committed to promoting safe, healthy, responsible and sustainable workplaces through professional consultancy, engineering support and product solutions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><ShieldAlert style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Identify hazards, assess risks and recommend practical controls based on the work and operating context.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><FileCheck style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Support clients in understanding applicable statutory, regulatory and other compliance obligations.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><Flame style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Promote prevention of injury, ill health, fire, process incidents, environmental harm and property loss.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-1">
              <div className="policy-circle-icon"><TrendingUp style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Encourage competent people, effective procedures, emergency preparedness and continual learning.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-2">
              <div className="policy-circle-icon"><ShieldCheck style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Provide products and technical recommendations suited to defined requirements and applicable specifications.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-3">
              <div className="policy-circle-icon"><Award style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Act with integrity, protect confidential information and communicate findings objectively.
              </div>
            </div>

            <div className="policy-grid-card lazy-reveal delay-1" style={{ gridColumn: "1 / -1" }}>
              <div className="policy-circle-icon"><Sprout style={{ width: 22, height: 22 }} /></div>
              <div className="policy-card-desc">
                Consider environmental responsibility, resource efficiency and continual improvement in our work.
              </div>
            </div>
          </div>

          <div className="liquid-card lazy-reveal" style={{ marginTop: 24, padding: "18px 24px", textAlign: "center", background: "rgba(0,113,227,0.05)", border: "1px solid rgba(0,113,227,0.15)", borderRadius: 16 }}>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)", margin: 0, fontStyle: "italic" }}>
              Company commitment statement; it does not replace client-specific legal duties or statutory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 8: Founder Spotlight */}
      <section className="section-padding" style={{ paddingTop: 0, paddingBottom: 60 }}>
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
                Founder & Director
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
