import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Phone, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="grspl-footer">
      <div className="container">
        {/* Top 4-Column Industrial Grid */}
        <div className="grspl-footer-top">
          {/* Column 1: Company Profile & Positioning */}
          <div className="grspl-footer-col">
            <Link href="/" style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image
                src="/seturaksh-logo.png"
                alt="SETURAKSH SUSTAINABLE EngiSafe Logo"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
              <div>
                <div style={{ fontSize: "1.35rem", fontWeight: 950, color: "#1d1d1f", letterSpacing: "0.04em", lineHeight: 1.1 }}>
                  SETURAKSH
                </div>
                <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--primary-red)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  SUSTAINABLE EngiSafe Pvt. Ltd.
                </div>
              </div>
            </Link>

            <p style={{ fontSize: "0.88rem", color: "#424245", lineHeight: 1.65, marginBottom: 20 }}>
              Dynamic risk engineering, fire safety, and resilience advisory organization committed to enabling safer, smarter, and zero-harm industrial ecosystems across Gujarat and Pan-India.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#1d1d1f" }}>
                <CheckCircle2 size={14} style={{ color: "var(--primary-red)" }} />
                <span>Govt. Approved Competent Persons (DISH)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#1d1d1f" }}>
                <CheckCircle2 size={14} style={{ color: "var(--primary-red)" }} />
                <span>NEBOSH &amp; PSM Certified Lead Auditors</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="grspl-footer-col">
            <h4>Quick Links</h4>
            <ul className="grspl-footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Service Arena</Link></li>
              <li><Link href="/#field-operations">Flagship Projects</Link></li>
              <li><Link href="/why-sparsh">Why Seturaksh</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Arena Divisions */}
          <div className="grspl-footer-col">
            <h4>Service Arena</h4>
            <ul className="grspl-footer-links">
              <li><Link href="/services?service=ehs">01 EHS Compliance</Link></li>
              <li><Link href="/services?service=fire">02 Fire Engineering</Link></li>
              <li><Link href="/services?service=process">03 Process Safety (PSM)</Link></li>
              <li><Link href="/services?service=training">04 Safety Academy</Link></li>
              <li><Link href="/services?service=env">05 ESG &amp; Sustainability</Link></li>
              <li><Link href="/services?service=engineering">06 Engineering Safety</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Cell */}
          <div className="grspl-footer-col">
            <h4>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.88rem", color: "#424245" }}>
                <MapPin size={18} style={{ color: "var(--primary-red)", flexShrink: 0, marginTop: 2 }} />
                <span>Industrial Safety Advisory Hub, Bharuch / Gujarat – 392001, India</span>
              </div>

              <a
                href="mailto:info@seturaksh.com"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", color: "#424245", textDecoration: "none" }}
              >
                <Mail size={16} style={{ color: "var(--primary-red)", flexShrink: 0 }} />
                <span>info@seturaksh.com</span>
              </a>

              <a
                href="tel:+918780884947"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", color: "#424245", textDecoration: "none" }}
              >
                <Phone size={16} style={{ color: "var(--primary-red)", flexShrink: 0 }} />
                <span>+91 87808 84947</span>
              </a>

              <div style={{ marginTop: 8 }}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "10px 16px", fontSize: "0.84rem", justifyContent: "center" }}
                >
                  <span>Request Plant Inspection</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grspl-footer-bottom">
          <div>
            © {new Date().getFullYear()} SETURAKSH SUSTAINABLE EngiSafe Private Limited. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span>Engineering Safety • Managing Risk • Protecting Life</span>
            <span>|</span>
            <span>Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
