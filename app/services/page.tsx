import type { Metadata } from "next";
import Link from "next/link";
import ServicesFilter from "@/components/ServicesFilter";
import {
  Workflow,
  Search,
  BarChart3,
  ClipboardList,
  Settings,
  TrendingUp,
  ArrowRight,
  Flame,
  Bell,
  HardHat,
  Lock,
  Package,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultancy Services & Product Supply | SETURAKSH SUSTAINABLE EngiSafe Private Limited",
  description:
    "Explore SETURAKSH professional consultancy services and fire, safety & engineering product supply aligned with client specifications and operational needs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge-pill lazy-reveal">
            <span className="dot"></span>
            <span>EHS Consultancy • Fire &amp; Process Safety • Product Solutions</span>
          </div>
          <h1 className="page-hero-title lazy-reveal delay-1">OUR SERVICES &amp; SOLUTIONS</h1>
          <p className="page-hero-sub lazy-reveal delay-2">
            Risk-based professional support and fit-for-purpose product supply tailored to each site, project and operating context.
          </p>
        </div>
      </section>

      {/* Slide 7: Interactive Consultancy Services Section */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="services-header lazy-reveal" style={{ marginBottom: 30 }}>
            <div className="badge-pill">
              <Workflow style={{ width: 14, height: 14 }} />
              <span>Consultancy Advisory</span>
            </div>
            <h2 className="section-title">OUR CONSULTANCY SERVICES</h2>
            <p className="section-subtitle">
              Risk-based professional support tailored to each site, project and operating context.
            </p>
          </div>
          <ServicesFilter />
        </div>
      </section>

      {/* Slide 8: Fire, Safety & Engineering Product Supply */}
      <section id="products" className="section-padding" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Package style={{ width: 14, height: 14 }} />
              <span>Equipment &amp; Solutions</span>
            </div>
            <h2 className="section-title">FIRE, SAFETY &amp; ENGINEERING PRODUCT SUPPLY</h2>
            <p className="section-subtitle" style={{ maxWidth: 760, margin: "0 auto" }}>
              Sourcing and supply aligned with client specifications and operational needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {/* 01. Fire Protection & Response */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(217, 37, 29, 0.1)", color: "#d9251d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Flame style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#d9251d", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 01</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Fire Protection &amp; Response</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d9251d", flexShrink: 0 }} />
                  <span>Fire extinguishers and accessories</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d9251d", flexShrink: 0 }} />
                  <span>Hoses, branch pipes and nozzles</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d9251d", flexShrink: 0 }} />
                  <span>Hydrant accessories</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d9251d", flexShrink: 0 }} />
                  <span>Fire blankets &amp; suppression gear</span>
                </li>
              </ul>
            </div>

            {/* 02. Fire Detection & Alarm */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(217, 119, 6, 0.1)", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Bell style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#d97706", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 02</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Fire Detection &amp; Alarm</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d97706", flexShrink: 0 }} />
                  <span>Detection &amp; alarm products</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d97706", flexShrink: 0 }} />
                  <span>Manual call points (MCP)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d97706", flexShrink: 0 }} />
                  <span>Sounders, strobes and indicators</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#d97706", flexShrink: 0 }} />
                  <span>Emergency lighting and illuminated signage</span>
                </li>
              </ul>
            </div>

            {/* 03. Personal Protective Equipment (PPE) */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(0, 113, 227, 0.1)", color: "#0071e3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <HardHat style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0071e3", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 03</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Personal Protective Equipment</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0071e3", flexShrink: 0 }} />
                  <span>Head, eye and face protection</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0071e3", flexShrink: 0 }} />
                  <span>Hand, foot and hearing protection</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0071e3", flexShrink: 0 }} />
                  <span>Respiratory protection equipment</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0071e3", flexShrink: 0 }} />
                  <span>Fall-protection &amp; harness equipment</span>
                </li>
              </ul>
            </div>

            {/* 04. Industrial Safety Products */}
            <div className="liquid-card lazy-reveal delay-1" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(124, 58, 237, 0.1)", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Lock style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#7c3aed", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 04</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Industrial Safety Products</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#7c3aed", flexShrink: 0 }} />
                  <span>LOTO products (Lockout / Tagout)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#7c3aed", flexShrink: 0 }} />
                  <span>Gas detection products &amp; monitors</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#7c3aed", flexShrink: 0 }} />
                  <span>Safety signs, demarcation &amp; barricading</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#7c3aed", flexShrink: 0 }} />
                  <span>Spill control supplies &amp; absorbents</span>
                </li>
              </ul>
            </div>

            {/* 05. Environmental & Engineering Supplies */}
            <div className="liquid-card lazy-reveal delay-2" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(16, 124, 65, 0.1)", color: "#107c41", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Layers style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#107c41", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 05</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Environmental &amp; Engineering</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#107c41", flexShrink: 0 }} />
                  <span>Chemical spill kits &amp; booms</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#107c41", flexShrink: 0 }} />
                  <span>Waste handling &amp; containment supplies</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#107c41", flexShrink: 0 }} />
                  <span>Selected engineering accessories</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#107c41", flexShrink: 0 }} />
                  <span>Site safety materials &amp; hardware</span>
                </li>
              </ul>
            </div>

            {/* 06. Sourcing & Coordination */}
            <div className="liquid-card lazy-reveal delay-3" style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(2, 132, 199, 0.1)", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Package style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0284c7", letterSpacing: "0.06em", textTransform: "uppercase" }}>Category 06</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Sourcing &amp; Coordination</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0284c7", flexShrink: 0 }} />
                  <span>Requirement review &amp; gap analysis</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0284c7", flexShrink: 0 }} />
                  <span>Specification-based technical sourcing</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0284c7", flexShrink: 0 }} />
                  <span>Vendor coordination &amp; expediting</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#0284c7", flexShrink: 0 }} />
                  <span>Product documentation where available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="liquid-card lazy-reveal" style={{ marginTop: 24, padding: "16px 24px", textAlign: "center", background: "rgba(0,113,227,0.05)", border: "1px solid rgba(0,113,227,0.15)", borderRadius: 16 }}>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)", margin: 0, fontStyle: "italic" }}>
              Supply is subject to availability, applicable standards, manufacturer specifications and any required licences or approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 10: OUR CONSULTING APPROACH (Interactive 5-Stage Cycle) */}
      <section className="section-padding approach-section">
        <div className="container">
          <div className="services-header lazy-reveal">
            <div className="badge-pill">
              <Workflow style={{ width: 14, height: 14 }} />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="section-title">OUR CONSULTING APPROACH</h2>
            <p className="section-subtitle" style={{ fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.05em" }}>
              ASSESS → ANALYSE → ADVISE → SUPPORT IMPLEMENTATION → IMPROVE
            </p>
          </div>

          <div className="approach-timeline">
            {/* Step 1 */}
            <div className="liquid-card approach-step-card lazy-reveal delay-1">
              <div className="step-num-pill">01</div>
              <Search style={{ width: 24, height: 24, color: "var(--accent-cyan)", marginBottom: 8 }} />
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">IDENTIFY HAZARDS &amp; COMPLIANCE STATUS</p>
            </div>

            {/* Step 2 */}
            <div className="liquid-card approach-step-card lazy-reveal delay-2">
              <div className="step-num-pill">02</div>
              <BarChart3 style={{ width: 24, height: 24, color: "#0284c7", marginBottom: 8 }} />
              <h3 className="step-name">ANALYSE</h3>
              <p className="step-action-desc">EVALUATE GAPS &amp; OPERATIONAL CONTEXT</p>
            </div>

            {/* Step 3 */}
            <div className="liquid-card approach-step-card lazy-reveal delay-3">
              <div className="step-num-pill">03</div>
              <ClipboardList style={{ width: 24, height: 24, color: "#f59e0b", marginBottom: 8 }} />
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">DELIVER PRACTICAL SOLUTIONS</p>
            </div>

            {/* Step 4 */}
            <div className="liquid-card approach-step-card lazy-reveal delay-4">
              <div className="step-num-pill">04</div>
              <Settings style={{ width: 24, height: 24, color: "#7c3aed", marginBottom: 8 }} />
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION &amp; DRILLS</p>
            </div>

            {/* Step 5 */}
            <div className="liquid-card approach-step-card lazy-reveal delay-5">
              <div className="step-num-pill">05</div>
              <TrendingUp style={{ width: 24, height: 24, color: "#107c41", marginBottom: 8 }} />
              <h3 className="step-name">IMPROVE</h3>
              <p className="step-action-desc">MEASURE PERFORMANCE &amp; CONTINUAL GROWTH</p>
            </div>
          </div>

          {/* Consultation CTA Card */}
          <div
            className="liquid-card cta-banner-card lazy-reveal"
            style={{
              marginTop: 50,
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,245,255,0.7))",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1d1d1f", marginBottom: 12 }}>
              Need a Tailored Safety or Environmental Audit?
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: 650, margin: "0 auto 28px" }}>
              Our certified specialists conduct thorough compliance and risk evaluations for your industrial premises across India.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
              <span>Schedule Facility Consultation</span>
              <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
