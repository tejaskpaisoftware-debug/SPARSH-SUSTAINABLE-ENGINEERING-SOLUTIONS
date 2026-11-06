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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

  // Check if we are in "poster theme" (top of page, not scrolled)
  // On launching, header sits in the poster theme (transparent/dark overlay)
  // On scrolling, header transitions to solid white
  const isPosterTheme = !scrolled;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 1. Top Ticker Utility Bar */}
      <div
        className="grspl-ticker-bar"
        style={{
          background: isPosterTheme ? "rgba(6, 11, 16, 0.78)" : "#0b1728",
          backdropFilter: isPosterTheme ? "blur(8px)" : "none",
          borderBottom: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0.12)",
          padding: "7px 0",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container grspl-ticker-inner">
          {/* Urgent Industrial Ticker */}
          <div className="grspl-ticker-marquee" style={{ gap: 24 }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 850, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ffffff" }}>
              SETURAKSH • TRANSFORMING RISK INTO RESILIENCE
            </span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffffff" }}>
              CERTIFIED DISH &amp; PESO AUDITS
            </span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ffffff" }}>
              INSTITUTIONAL &amp; ENTERPRISE LIFE SAFETY
            </span>
          </div>

          {/* Direct Industrial Contact Strip */}
          <div className="grspl-ticker-contacts">
            <a href="tel:+918780884947" className="grspl-ticker-link">
              <Phone size={13} style={{ color: "#ff4d4f" }} />
              <span>+91 87808 84947</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <a href="mailto:info@seturaksh.com" className="grspl-ticker-link">
              <Mail size={13} style={{ color: "#ff4d4f" }} />
              <span>info@seturaksh.com</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <div className="grspl-ticker-link" style={{ cursor: "default" }}>
              <MapPin size={13} style={{ color: "#ff4d4f" }} />
              <span>Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Corporate Header */}
      <header
        className={`grspl-navbar ${scrolled ? "scrolled" : ""}`}
        style={{
          background: isPosterTheme
            ? "linear-gradient(180deg, rgba(6, 11, 16, 0.75) 0%, rgba(6, 11, 16, 0.5) 100%)"
            : "#ffffff",
          backdropFilter: isPosterTheme ? "blur(12px)" : "none",
          borderBottom: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid var(--slate-200)",
          boxShadow: isPosterTheme ? "none" : "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container grspl-nav-inner" style={{ height: isPosterTheme ? 82 : 74, transition: "height 0.25s ease" }}>
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
                  color: isPosterTheme ? "#ffffff" : "var(--industrial-navy)",
                  lineHeight: 1.1,
                  transition: "color 0.3s ease",
                }}
              >
                SETURAKSH
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: isPosterTheme ? "#ff4d4f" : "var(--primary-red)",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
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
                <Link
                  href="/"
                  className={`grspl-nav-link ${pathname === "/" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/" ? "#ff4d4f" : "#ffffff"
                      : pathname === "/" ? "var(--primary-red)" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link
                  href="/about"
                  className={`grspl-nav-link ${pathname === "/about" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/about" ? "#ff4d4f" : "#ffffff"
                      : pathname === "/about" ? "var(--primary-red)" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
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
                  style={{
                    color: isPosterTheme
                      ? pathname.startsWith("/services") ? "#ff4d4f" : "#ffffff"
                      : pathname.startsWith("/services") ? "var(--primary-red)" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
                  <span>Service Arena</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s ease",
                      transform: servicesDropdownOpen ? "rotate(180deg)" : "none",
                    }}
                  />
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
                      boxShadow: "0 18px 40px -8px rgba(10, 17, 24, 0.22)",
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
                        style={{ fontSize: "0.82rem", fontWeight: 750, color: "var(--slate-700)", textDecoration: "none" }}
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
                <Link
                  href="/#field-operations"
                  className="grspl-nav-link"
                  style={{
                    color: isPosterTheme ? "#ffffff" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
                  Flagship Projects
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link
                  href="/why-sparsh"
                  className={`grspl-nav-link ${pathname === "/why-sparsh" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/why-sparsh" ? "#ff4d4f" : "#ffffff"
                      : pathname === "/why-sparsh" ? "var(--primary-red)" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
                  Why Seturaksh
                </Link>
              </li>

              <li className="grspl-nav-item">
                <Link
                  href="/contact"
                  className={`grspl-nav-link ${pathname === "/contact" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/contact" ? "#ff4d4f" : "#ffffff"
                      : pathname === "/contact" ? "var(--primary-red)" : "var(--slate-800)",
                    transition: "color 0.2s ease",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA matching GRSPL GET BROCHURE */}
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
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "stretch",
                border: isPosterTheme ? "1.5px solid #ff4d4f" : "1.5px solid #c20101",
                borderRadius: 4,
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(194, 1, 1, 0.4)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  padding: "9px 18px",
                  fontSize: "0.82rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  color: isPosterTheme ? "#ffffff" : "#c20101",
                  textTransform: "uppercase",
                  background: isPosterTheme ? "rgba(10, 17, 24, 0.55)" : "#ffffff",
                  backdropFilter: isPosterTheme ? "blur(4px)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                GET BROCHURE
              </span>
              <span
                style={{
                  background: "#c20101",
                  color: "#ffffff",
                  padding: "9px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.95rem",
                }}
              >
                »
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: isPosterTheme ? "rgba(255, 255, 255, 0.1)" : "none",
              border: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid var(--slate-200)",
              borderRadius: 6,
              padding: 8,
              cursor: "pointer",
              color: isPosterTheme ? "#ffffff" : "var(--text-dark)",
              transition: "all 0.25s ease",
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
            background: "rgba(10, 17, 24, 0.7)",
            zIndex: 1100,
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
              boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.25)",
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
    </div>
  );
}
