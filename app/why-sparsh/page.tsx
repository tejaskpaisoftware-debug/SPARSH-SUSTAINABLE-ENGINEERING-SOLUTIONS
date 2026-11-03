import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "Why SETURAKSH | Value Proposition & Proven Track Record",
  description:
    "Discover why leading industrial facilities partner with SETURAKSH SUSTAINABLE EngiSafe Private Limited: 20+ years expertise, certified competencies, and 9-step value delivery.",
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
          <h1 className="page-hero-title lazy-reveal delay-1">WHY SETURAKSH</h1>
          <p className="page-hero-sub lazy-reveal delay-2">
            Backed by over two decades of rigorous cross-sector engineering experience, certified credentials, and an uncompromised commitment to zero-harm operations.
          </p>
        </div>
      </section>

      {/* Slide 10: Why Partner with SETURAKSH Differentiators Grid */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Handshake style={{ width: 14, height: 14 }} />
              <span>Value Partnership</span>
            </div>
            <h2 className="section-title" style={{ fontSize: "2.1rem" }}>WHY PARTNER WITH SETURAKSH?</h2>
            <p className="section-subtitle" style={{ maxWidth: 720, margin: "0 auto" }}>
              A practical, collaborative and business-aware approach to safety designed for real operating conditions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 50 }}>
            {/* Differentiator 1 */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(0,113,227,0.1)", color: "#0071e3", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>01</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Founder-Level Leadership</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                20+ years of professional EHS and fire safety experience at founder level guiding strategic and tactical decisions.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(16,124,65,0.1)", color: "#107c41", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>02</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Cross-Sector Exposure</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Proven hands-on track record across chemical, pharmaceutical, EPC, oil &amp; gas, construction and manufacturing.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(217,119,6,0.1)", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>03</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Practical Recommendations</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Recommendations engineered for real operating conditions rather than theoretical compliance checklists.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(124,58,237,0.1)", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>04</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Integrated 4P Perspective</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Holistic protection and value creation across people, process, property and planet simultaneously.
              </p>
            </div>

            {/* Differentiator 5 */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(2,132,199,0.1)", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>05</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>End-to-End Execution</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Active support from initial diagnostic assessment and planning all the way through implementation follow-up.
              </p>
            </div>

            {/* Differentiator 6 */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(220,38,38,0.1)", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>06</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Consultancy &amp; Supply Synergy</h3>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Flexible professional consultancy combined with fit-for-purpose safety and engineering product supply in one partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10: Our Consulting Approach 5-Step Process */}
      <section className="section-padding approach-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Sparkles style={{ width: 14, height: 14 }} />
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
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">IDENTIFY HAZARDS &amp; COMPLIANCE STATUS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-2">
              <div className="step-num-pill">02</div>
              <h3 className="step-name">ANALYSE</h3>
              <p className="step-action-desc">EVALUATE GAPS &amp; OPERATIONAL CONTEXT</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-3">
              <div className="step-num-pill">03</div>
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">DELIVER PRACTICAL RECOMMENDATIONS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-4">
              <div className="step-num-pill">04</div>
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION &amp; DRILLS</p>
            </div>

            <div className="liquid-card approach-step-card lazy-reveal delay-5">
              <div className="step-num-pill">05</div>
              <h3 className="step-name">IMPROVE</h3>
              <p className="step-action-desc">MEASURE PERFORMANCE &amp; CONTINUAL GROWTH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Industries & Work Environments */}
      <section className="section-padding">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Layers style={{ width: 14, height: 14 }} />
              <span>Sector Expertise</span>
            </div>
            <h2 className="section-title">INDUSTRIES &amp; WORK ENVIRONMENTS</h2>
            <p className="section-subtitle" style={{ maxWidth: 750, margin: "0 auto" }}>
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
                Plant EHS governance, contractor safety oversight, process safety and statutory compliance support.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🛢️</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Oil, Gas, EPC &amp; Engineering</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Project safety management, Permit-to-Work (PTW), construction risk and commissioning readiness.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏗️</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Construction &amp; Infrastructure</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Greenfield/brownfield project safety, work at height controls and contractor site supervision.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏭</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Manufacturing &amp; Warehousing</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Workplace safety standards, fire readiness, mechanical material handling and emergency action planning.
              </p>
            </div>

            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "26px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>🏢</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Commercial &amp; Institutional Facilities</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                Life safety and fire risk awareness, safe evacuation planning and safety systems engineering review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 12: Our Commitment Banner (People, Process, Planet) */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="liquid-card lazy-reveal" style={{ padding: "40px 32px", textAlign: "center", background: "linear-gradient(135deg, rgba(0,113,227,0.08), rgba(16,124,65,0.08))", border: "1px solid rgba(0,113,227,0.2)", borderRadius: 24, marginBottom: 40 }}>
            <div className="badge-pill" style={{ marginBottom: 12 }}>
              <Award style={{ width: 14, height: 14 }} />
              <span>OUR COMMITMENT</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4.5vw, 2.4rem)", fontWeight: 850, color: "var(--text-primary)", marginBottom: 12 }}>
              Safe Work. Smart Work. Responsible Work.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: 760, margin: "0 auto 30px" }}>
              Our objective is to help clients build resilient operations where safety, performance and sustainability reinforce one another.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, textAlign: "left" }}>
              <div style={{ background: "rgba(255,255,255,0.85)", padding: "22px 24px", borderRadius: 16, border: "1px solid rgba(0,113,227,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Users style={{ width: 22, height: 22, color: "#0071e3" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0071e3", margin: 0 }}>PEOPLE</h3>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                  Protect health, safety, capability and well-being across the entire workforce.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.85)", padding: "22px 24px", borderRadius: 16, border: "1px solid rgba(217,119,6,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Layers style={{ width: 22, height: 22, color: "#d97706" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#d97706", margin: 0 }}>PROCESS</h3>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                  Strengthen operational risk control, plant asset reliability and statutory compliance.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.85)", padding: "22px 24px", borderRadius: 16, border: "1px solid rgba(16,124,65,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Sprout style={{ width: 22, height: 22, color: "#107c41" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#107c41", margin: 0 }}>PLANET</h3>
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                  Support responsible resource efficiency, waste management and environmental care.
                </p>
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
                <span>Certified Advisory Team</span>
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 14 }}>
                Ready to Partner with SETURAKSH?
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
