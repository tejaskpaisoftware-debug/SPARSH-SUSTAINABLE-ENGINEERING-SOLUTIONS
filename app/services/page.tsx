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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | SPARSH Sustainable Engineering Solutions",
  description:
    "Explore SPARSH services: Occupational Health & Safety, Fire & Emergency Management, Training & Competency, and Environment & Sustainability.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge-pill">
            <span className="dot"></span>
            <span>Environment | Safety | Fire | Sustainability</span>
          </div>
          <h1 className="page-hero-title">OUR SERVICES</h1>
          <p className="page-hero-sub">
            Specialized professional engineering and consultancy services delivering regulatory compliance, operational excellence, risk reduction, and continuous workforce development.
          </p>
        </div>
      </section>

      {/* Slide 7: Interactive Services Section */}
      <section className="section-padding" style={{ paddingTop: 10 }}>
        <div className="container">
          <ServicesFilter />
        </div>
      </section>

      {/* Slide 11: OUR CONSULTING APPROACH (Interactive 5-Stage Cycle) */}
      <section className="section-padding approach-section">
        <div className="container">
          <div className="services-header">
            <div className="badge-pill">
              <Workflow style={{ width: 14, height: 14 }} />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="section-title">OUR CONSULTING APPROACH</h2>
            <p className="section-subtitle" style={{ fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.05em" }}>
              ASSESS → ANALYZE → ADVISE → IMPLEMENT → IMPROVE
            </p>
          </div>

          <div className="approach-timeline">
            {/* Step 1 */}
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">01</div>
              <Search style={{ width: 24, height: 24, color: "var(--accent-cyan)", marginBottom: 8 }} />
              <h3 className="step-name">ASSESS</h3>
              <p className="step-action-desc">ASSESS RISKS & COMPLIANCE</p>
            </div>

            {/* Step 2 */}
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">02</div>
              <BarChart3 style={{ width: 24, height: 24, color: "#0284c7", marginBottom: 8 }} />
              <h3 className="step-name">ANALYZE</h3>
              <p className="step-action-desc">ANALYZE GAPS & OPPORTUNITIES</p>
            </div>

            {/* Step 3 */}
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">03</div>
              <ClipboardList style={{ width: 24, height: 24, color: "#f59e0b", marginBottom: 8 }} />
              <h3 className="step-name">ADVISE</h3>
              <p className="step-action-desc">ADVISE PRACTICAL SOLUTIONS</p>
            </div>

            {/* Step 4 */}
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">04</div>
              <Settings style={{ width: 24, height: 24, color: "#7c3aed", marginBottom: 8 }} />
              <h3 className="step-name">IMPLEMENT</h3>
              <p className="step-action-desc">SUPPORT IMPLEMENTATION</p>
            </div>

            {/* Step 5 */}
            <div className="liquid-card approach-step-card">
              <div className="step-num-pill">05</div>
              <TrendingUp style={{ width: 24, height: 24, color: "#107c41", marginBottom: 8 }} />
              <h3 className="step-name">IMPROVE</h3>
              <p className="step-action-desc">DRIVE CONTINUOUS IMPROVEMENT</p>
            </div>
          </div>

          {/* Consultation CTA Card */}
          <div
            className="liquid-card cta-banner-card"
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
