import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          {/* Brand Bio Column */}
          <div className="footer-brand-col">
            <Link href="/" className="nav-brand" style={{ display: "inline-flex", textDecoration: "none" }}>
              <div className="nav-logo-mark">
                <span>S</span>
              </div>
              <div className="nav-brand-text">
                <span className="nav-brand-title">SPARSH</span>
                <span className="nav-brand-sub">Sustainable Engineering</span>
              </div>
            </Link>
            <p className="footer-brand-bio">
              Protecting People, Process, Property and Planet through innovative engineering solutions and EHS excellence.
            </p>
          </div>

          {/* 2-Column Responsive Nav Grid for Mobile & Desktop */}
          <div className="footer-nav-grid">
            {/* Column 1: Navigation Pages */}
            <div className="footer-col">
              <h4>Pages</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/why-sparsh">Why SPARSH</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Key Capabilities */}
            <div className="footer-col">
              <h4>Capabilities</h4>
              <ul className="footer-links">
                <li><Link href="/services">Safety Management</Link></li>
                <li><Link href="/services">Process Safety (PSM)</Link></li>
                <li><Link href="/services">Fire Safety Audits</Link></li>
                <li><Link href="/services">ESG & Sustainability</Link></li>
                <li><Link href="/services">Workforce Training</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Consultancy Hub Card */}
          <div className="footer-col footer-hub-col">
            <h4>Consultancy Hub</h4>
            <div className="footer-hub-card">
              <div className="hub-card-item">
                <MapPin style={{ width: 16, height: 16, color: "var(--accent-cyan)", flexShrink: 0 }} />
                <span>Gujarat, India</span>
              </div>
              <a href="mailto:info@sparshengineering.com" className="hub-card-item">
                <Mail style={{ width: 16, height: 16, color: "var(--accent-cyan)", flexShrink: 0 }} />
                <span>info@sparshengineering.com</span>
              </a>
              <Link href="/contact" className="hub-cta-btn">
                <span>Request Facility Audit</span>
                <ArrowUpRight style={{ width: 15, height: 15 }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SPARSH Sustainable Engineering Solutions. All rights reserved.</p>
          <div className="footer-bottom-meta">
            <span>Engineering Zero Harm Since 2004</span>
            <span className="footer-dot">•</span>
            <span>ISO / OHSAS / PSM Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
