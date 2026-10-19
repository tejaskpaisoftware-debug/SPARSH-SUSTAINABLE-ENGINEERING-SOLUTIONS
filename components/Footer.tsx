import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          {/* Brand Bio */}
          <div>
            <div className="nav-brand" style={{ marginBottom: 8 }}>
              <div className="nav-logo-mark">
                <span>S</span>
              </div>
              <div className="nav-brand-text">
                <span className="nav-brand-title">SPARSH</span>
                <span className="nav-brand-sub">Sustainable Engineering</span>
              </div>
            </div>
            <p className="footer-brand-bio">
              Protecting People, Process, Property and Planet through innovative engineering solutions and EHS excellence.
            </p>
          </div>

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
              <li><Link href="/services">Safety Management (OHS)</Link></li>
              <li><Link href="/services">Process Safety Management</Link></li>
              <li><Link href="/services">Fire & Life Safety Audits</Link></li>
              <li><Link href="/services">ESG & Decarbonization</Link></li>
              <li><Link href="/services">Workforce Training</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="footer-col">
            <h4>Consultancy Hub</h4>
            <ul className="footer-links">
              <li><span>Gujarat, India</span></li>
              <li><a href="mailto:info@sparshengineering.com">info@sparshengineering.com</a></li>
              <li>
                <Link href="/contact" style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
                  <span>Request Facility Audit</span>
                  <ArrowUpRight style={{ width: 14, height: 14, display: "inline", verticalAlign: "middle", marginLeft: 4 }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SPARSH Sustainable Engineering Solutions. All rights reserved.</p>
          <div className="footer-bottom-meta">
            <span>Engineering Zero Harm Since 2004</span>
            <span className="footer-dot">•</span>
            <span>ISO / OHSAS / PSM Compliant Methodologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
