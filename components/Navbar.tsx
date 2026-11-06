"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  FileText,
  Flame,
  Factory,
  GraduationCap,
  Leaf,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const SERVICE_ARENA_DIVISIONS = [
  {
    id: "ehs",
    num: "01",
    title: "EHS Management & Regulatory Compliance",
    desc: "Factories Act 1948, DISH & PESO compliance, statutory safety audits & HIRA.",
    icon: Factory,
    href: "/services?service=ehs",
  },
  {
    id: "fire",
    num: "02",
    title: "Comprehensive Fire Engineering & Life Safety",
    desc: "Hydrant flow tests, NFPA/NBC safety audits, fire prevention & live drills.",
    icon: Flame,
    href: "/services?service=fire",
  },
  {
    id: "process",
    num: "03",
    title: "Process Safety Engineering (PSM) Suite",
    desc: "HAZOP facilitation, MOC, PSSR, LOPA & chemical reaction hazard analysis.",
    icon: ShieldCheck,
    href: "/services?service=process",
  },
  {
    id: "training",
    num: "04",
    title: "Workforce Safety Academy & Competency",
    desc: "Safety inductions, emergency preparedness, PASS drills & BBS transformation.",
    icon: GraduationCap,
    href: "/services?service=training",
  },
  {
    id: "env",
    num: "05",
    title: "Environmental & ESG Sustainability Cell",
    desc: "GPCB consent support, industrial waste governance, ESG & decarbonization.",
    icon: Leaf,
    href: "/services?service=env",
  },
  {
    id: "engineering",
    num: "06",
    title: "Engineering Safety & Plant Commissioning",
    desc: "DISH Sec 28/29/31 inspections, PTW/LOTO review & greenfield safety design.",
    icon: Wrench,
    href: "/services?service=engineering",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      {/* 1. GRSPL Signature Top Utility Bar */}
      <div className="grspl-ticker-bar">
        <div className="container grspl-ticker-inner">
          {/* Urgent Industrial Ticker */}
          <div className="grspl-ticker-marquee">
            <span className="grspl-ticker-badge">Resilience First</span>
            <span className="grspl-ticker-text">
              Transforming Risk into Resilience • Certified DISH &amp; PESO Statutory Audits • 20+ Years Leadership • Gujarat &amp; Pan-India
            </span>
          </div>

          {/* Direct Industrial Contact Strip */}
          <div className="grspl-ticker-contacts">
            <a href="tel:+918780884947" className="grspl-ticker-link">
              <Phone size={13} style={{ color: "var(--primary-red)" }} />
              <span>+91 87808 84947</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <a href="mailto:info@seturaksh.com" className="grspl-ticker-link">
              <Mail size={13} style={{ color: "var(--primary-red)" }} />
              <span>info@seturaksh.com</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <div className="grspl-ticker-link" style={{ cursor: "default" }}>
              <MapPin size={13} style={{ color: "var(--primary-red)" }} />
              <span>Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Corporate Header */}
      <header className={`grspl-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container grspl-nav-inner">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo"
              width={46}
              height={46}
              priority
              style={{ objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 950,
                  letterSpacing: "0.04em",
                  color: "var(--industrial-navy)",
                  lineHeight: 1.1,
                }}
              >
                SETURAKSH
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--primary-red)",
                  textTransform: "uppercase",
                }}
              >
                SUSTAINABLE EngiSafe Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: "none" }} className="desktop-nav-wrap">
            <style jsx>{`
              @media (min-width: 960px) {
                .desktop-nav-wrap {
                  display: block !important;
                }
              }
            `}</style>
            <ul className="grspl-nav-links">
              <li className="grspl-nav-item">
                <Link href="/" className={`grspl-nav-link ${pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link href="/about" className={`grspl-nav-link ${pathname === "/about" ? "active" : ""}`}>
                  About Us
                </Link>
              </li>

              {/* Service Arena Mega Dropdown */}
              <li
                className="grspl-nav-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <Link
                  href="/services"
                  className={`grspl-nav-link ${pathname.startsWith("/services") ? "active" : ""}`}
                >
                  <span>Service Arena</span>
                  <ChevronDown size={14} style={{ transition: "transform 0.2s ease", transform: servicesDropdownOpen ? "rotate(180deg)" : "none" }} />
                </Link>

                {/* Dropdown Panel */}
                {servicesDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-180px",
                      width: 640,
                      background: "#ffffff",
                      border: "1px solid var(--slate-200)",
                      borderRadius: 10,
                      boxShadow: "0 18px 40px -8px rgba(10, 17, 24, 0.16)",
                      padding: 24,
                      zIndex: 150,
                      animation: "fadeIn 0.2s ease-out",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 12,
                        marginBottom: 16,
                        borderBottom: "1px solid var(--slate-100)",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", fontWeight: 850, color: "var(--primary-red)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        6 Precision Engineering Suites
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--slate-700)", textDecoration: "none" }}
                      >
                        View Full Overview →
                      </Link>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      {SERVICE_ARENA_DIVISIONS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              padding: 10,
                              borderRadius: 8,
                              textDecoration: "none",
                              color: "inherit",
                              transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--slate-50)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <div
                              style={{
                                width: 34,
                                height: 34,
                                borderRadius: 6,
                                background: "var(--primary-red-light)",
                                color: "var(--primary-red)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                fontWeight: 900,
                                fontSize: "0.78rem",
                              }}
                            >
                              {item.num}
                            </div>
                            <div>
                              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.25, marginBottom: 4 }}>
                                {item.title}
                              </div>
                              <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: 1.35 }}>
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>

              <li className="grspl-nav-item">
                <Link href="/#field-operations" className="grspl-nav-link">
                  Flagship Projects
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link href="/why-sparsh" className={`grspl-nav-link ${pathname === "/why-sparsh" ? "active" : ""}`}>
                  Why Seturaksh
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link href="/contact" className={`grspl-nav-link ${pathname === "/contact" ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA */}
          <div style={{ display: "none" }} className="desktop-cta-wrap">
            <style jsx>{`
              @media (min-width: 960px) {
                .desktop-cta-wrap {
                  display: flex !important;
                  align-items: center;
                  gap: 12px;
                }
              }
            `}</style>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.88rem" }}>
              <span>Get Inspection Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--slate-200)",
              borderRadius: 6,
              padding: 8,
              cursor: "pointer",
              color: "var(--text-dark)",
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            <style jsx>{`
              @media (max-width: 959px) {
                .mobile-toggle-btn {
                  display: flex !important;
                  align-items: center;
                  justify-content: center;
                }
              }
            `}</style>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 17, 24, 0.65)",
            zIndex: 999,
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "82%",
              maxWidth: 380,
              height: "100%",
              background: "#ffffff",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--slate-100)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image src="/seturaksh-logo.png" alt="Logo" width={36} height={36} />
                <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--industrial-navy)" }}>SETURAKSH</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--slate-600)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: pathname === "/" ? "var(--primary-red)" : "var(--text-dark)", textDecoration: "none", background: pathname === "/" ? "var(--primary-red-light)" : "transparent" }}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: pathname === "/about" ? "var(--primary-red)" : "var(--text-dark)", textDecoration: "none", background: pathname === "/about" ? "var(--primary-red-light)" : "transparent" }}
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: pathname.startsWith("/services") ? "var(--primary-red)" : "var(--text-dark)", textDecoration: "none", background: pathname.startsWith("/services") ? "var(--primary-red-light)" : "transparent" }}
              >
                Service Arena (6 Divisions)
              </Link>
              <Link
                href="/#field-operations"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: "var(--text-dark)", textDecoration: "none" }}
              >
                Flagship Projects &amp; Field Drills
              </Link>
              <Link
                href="/why-sparsh"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: pathname === "/why-sparsh" ? "var(--primary-red)" : "var(--text-dark)", textDecoration: "none", background: pathname === "/why-sparsh" ? "var(--primary-red-light)" : "transparent" }}
              >
                Why Seturaksh
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: "12px 14px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 750, color: pathname === "/contact" ? "var(--primary-red)" : "var(--text-dark)", textDecoration: "none", background: pathname === "/contact" ? "var(--primary-red-light)" : "transparent" }}
              >
                Contact Us
              </Link>
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Request Facility Audit</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "10px",
                  borderRadius: 6,
                  background: "#25d366",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 750,
                  fontSize: "0.88rem",
                }}
              >
                <Phone size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
