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
      setScrolled(window.scrollY > 35);
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
  const isPosterTheme = !scrolled;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 1. iOS Liquid Glass Top Ticker Utility Ribbon */}
      <div
        className="grspl-ticker-bar"
        style={{
          background: isPosterTheme
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(245, 245, 247, 0.95)",
          backdropFilter: isPosterTheme ? "blur(28px) saturate(190%)" : "blur(20px)",
          WebkitBackdropFilter: isPosterTheme ? "blur(28px) saturate(190%)" : "blur(20px)",
          borderBottom: isPosterTheme
            ? "1px solid rgba(255, 255, 255, 0.14)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isPosterTheme
            ? "inset 0 1px 0 rgba(255, 255, 255, 0.22)"
            : "none",
          padding: "7px 0",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container grspl-ticker-inner">
          {/* Urgent Industrial Ticker */}
          <div className="grspl-ticker-marquee" style={{ gap: 24 }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 850, letterSpacing: "0.14em", textTransform: "uppercase", color: isPosterTheme ? "#ffffff" : "#1d1d1f", textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none" }}>
              SETURAKSH • TRANSFORMING RISK INTO RESILIENCE
            </span>
            <span style={{ opacity: 0.4, color: isPosterTheme ? "#ffffff" : "#1d1d1f" }}>•</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: isPosterTheme ? "#ffffff" : "#1d1d1f", textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none" }}>
              CERTIFIED DISH &amp; PESO AUDITS
            </span>
            <span style={{ opacity: 0.4, color: isPosterTheme ? "#ffffff" : "#1d1d1f" }}>•</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: isPosterTheme ? "#ffffff" : "#1d1d1f", textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none" }}>
              INSTITUTIONAL &amp; ENTERPRISE LIFE SAFETY
            </span>
          </div>

          {/* Direct Industrial Contact Strip */}
          <div className="grspl-ticker-contacts">
            <a href="tel:+918780884947" className="grspl-ticker-link" style={{ color: isPosterTheme ? "#ffffff" : "#424245", textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none" }}>
              <Phone size={13} style={{ color: "#c20101" }} />
              <span>+91 87808 84947</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <a href="mailto:info@seturaksh.com" className="grspl-ticker-link" style={{ color: isPosterTheme ? "#ffffff" : "#424245", textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none" }}>
              <Mail size={13} style={{ color: "#c20101" }} />
              <span>info@seturaksh.com</span>
            </a>
            <span style={{ opacity: 0.2 }}>|</span>
            <div className="grspl-ticker-link" style={{ cursor: "default", color: isPosterTheme ? "#ffffff" : "#424245", textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none" }}>
              <MapPin size={13} style={{ color: "#c20101" }} />
              <span>Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Apple iOS / iPhone Liquid Glass Header Bar */}
      <header
        className={`grspl-navbar ${scrolled ? "scrolled" : ""}`}
        style={{
          background: isPosterTheme
            ? "rgba(12, 18, 28, 0.22)"
            : "rgba(255, 255, 255, 0.88)",
          backdropFilter: isPosterTheme
            ? "blur(32px) saturate(210%) contrast(105%)"
            : "blur(24px) saturate(190%)",
          WebkitBackdropFilter: isPosterTheme
            ? "blur(32px) saturate(210%) contrast(105%)"
            : "blur(24px) saturate(190%)",
          borderBottom: isPosterTheme
            ? "1px solid rgba(255, 255, 255, 0.18)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isPosterTheme
            ? "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 0 rgba(255, 255, 255, 0.08), 0 12px 36px 0 rgba(0, 0, 0, 0.25)"
            : "0 10px 30px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.95)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="container grspl-nav-inner"
          style={{
            height: isPosterTheme ? 82 : 72,
            transition: "height 0.3s ease",
          }}
        >
          {/* Logo with Specular Glass Aura */}
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>
            <Image
              src="/seturaksh-logo.png"
              alt="SETURAKSH Logo"
              width={46}
              height={46}
              priority
              style={{
                objectFit: "contain",
                filter: isPosterTheme
                  ? "drop-shadow(0 4px 14px rgba(255, 255, 255, 0.25))"
                  : "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))",
                transition: "filter 0.3s ease",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 950,
                  letterSpacing: "0.04em",
                  color: isPosterTheme ? "#ffffff" : "#1d1d1f",
                  lineHeight: 1.1,
                  textShadow: isPosterTheme ? "0 2px 8px rgba(0, 0, 0, 0.6)" : "none",
                  transition: "color 0.3s ease, text-shadow 0.3s ease",
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
                  textShadow: isPosterTheme ? "0 1px 4px rgba(0, 0, 0, 0.5)" : "none",
                  transition: "color 0.3s ease",
                }}
              >
                SUSTAINABLE EngiSafe Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with iOS Glass Capsule Hover */}
          <nav style={{ display: "none" }} className="desktop-nav-wrap">
            <style jsx>{`
              @media (min-width: 960px) {
                .desktop-nav-wrap {
                  display: block !important;
                }
              }
            `}</style>
            <ul className="grspl-nav-links" style={{ gap: 8 }}>
              {/* Home */}
              <li className="grspl-nav-item">
                <Link
                  href="/"
                  className={`grspl-nav-link ${pathname === "/" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/" ? "#ffffff" : "rgba(255, 255, 255, 0.92)"
                      : pathname === "/" ? "var(--primary-red)" : "var(--slate-800)",
                    background: isPosterTheme && pathname === "/"
                      ? "rgba(255, 255, 255, 0.16)"
                      : "transparent",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    border: isPosterTheme && pathname === "/"
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid transparent",
                    boxShadow: isPosterTheme && pathname === "/"
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                      : "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = pathname === "/" ? "rgba(255, 255, 255, 0.16)" : "transparent";
                      e.currentTarget.style.borderColor = pathname === "/" ? "rgba(255, 255, 255, 0.25)" : "transparent";
                      e.currentTarget.style.boxShadow = pathname === "/" ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "none";
                    }
                  }}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li className="grspl-nav-item">
                <Link
                  href="/about"
                  className={`grspl-nav-link ${pathname === "/about" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/about" ? "#ffffff" : "rgba(255, 255, 255, 0.92)"
                      : pathname === "/about" ? "var(--primary-red)" : "var(--slate-800)",
                    background: isPosterTheme && pathname === "/about"
                      ? "rgba(255, 255, 255, 0.16)"
                      : "transparent",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    border: isPosterTheme && pathname === "/about"
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid transparent",
                    boxShadow: isPosterTheme && pathname === "/about"
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                      : "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = pathname === "/about" ? "rgba(255, 255, 255, 0.16)" : "transparent";
                      e.currentTarget.style.borderColor = pathname === "/about" ? "rgba(255, 255, 255, 0.25)" : "transparent";
                      e.currentTarget.style.boxShadow = pathname === "/about" ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "none";
                    }
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
                      ? pathname.startsWith("/services") ? "#ffffff" : "rgba(255, 255, 255, 0.92)"
                      : pathname.startsWith("/services") ? "var(--primary-red)" : "var(--slate-800)",
                    background: isPosterTheme && pathname.startsWith("/services")
                      ? "rgba(255, 255, 255, 0.16)"
                      : "transparent",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    border: isPosterTheme && pathname.startsWith("/services")
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid transparent",
                    boxShadow: isPosterTheme && pathname.startsWith("/services")
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                      : "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = pathname.startsWith("/services") ? "rgba(255, 255, 255, 0.16)" : "transparent";
                      e.currentTarget.style.borderColor = pathname.startsWith("/services") ? "rgba(255, 255, 255, 0.25)" : "transparent";
                      e.currentTarget.style.boxShadow = pathname.startsWith("/services") ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "none";
                    }
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

                {/* Dropdown Panel with Liquid Glass Blur */}
                {servicesDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-160px",
                      width: 660,
                      background: "rgba(255, 255, 255, 0.94)",
                      backdropFilter: "blur(28px) saturate(200%)",
                      WebkitBackdropFilter: "blur(28px) saturate(200%)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      borderRadius: 14,
                      boxShadow: "0 24px 60px -10px rgba(0, 0, 0, 0.28), inset 0 1px 1px #ffffff",
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

              {/* Flagship Projects */}
              <li className="grspl-nav-item">
                <Link
                  href="/#field-operations"
                  className="grspl-nav-link"
                  style={{
                    color: isPosterTheme ? "rgba(255, 255, 255, 0.92)" : "var(--slate-800)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  Flagship Projects
                </Link>
              </li>

              {/* Why Seturaksh */}
              <li className="grspl-nav-item">
                <Link
                  href="/why-sparsh"
                  className={`grspl-nav-link ${pathname === "/why-sparsh" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/why-sparsh" ? "#ffffff" : "rgba(255, 255, 255, 0.92)"
                      : pathname === "/why-sparsh" ? "var(--primary-red)" : "var(--slate-800)",
                    background: isPosterTheme && pathname === "/why-sparsh"
                      ? "rgba(255, 255, 255, 0.16)"
                      : "transparent",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    border: isPosterTheme && pathname === "/why-sparsh"
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid transparent",
                    boxShadow: isPosterTheme && pathname === "/why-sparsh"
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                      : "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = pathname === "/why-sparsh" ? "rgba(255, 255, 255, 0.16)" : "transparent";
                      e.currentTarget.style.borderColor = pathname === "/why-sparsh" ? "rgba(255, 255, 255, 0.25)" : "transparent";
                      e.currentTarget.style.boxShadow = pathname === "/why-sparsh" ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "none";
                    }
                  }}
                >
                  Why Seturaksh
                </Link>
              </li>

              {/* Contact */}
              <li className="grspl-nav-item">
                <Link
                  href="/contact"
                  className={`grspl-nav-link ${pathname === "/contact" ? "active" : ""}`}
                  style={{
                    color: isPosterTheme
                      ? pathname === "/contact" ? "#ffffff" : "rgba(255, 255, 255, 0.92)"
                      : pathname === "/contact" ? "var(--primary-red)" : "var(--slate-800)",
                    background: isPosterTheme && pathname === "/contact"
                      ? "rgba(255, 255, 255, 0.16)"
                      : "transparent",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    border: isPosterTheme && pathname === "/contact"
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid transparent",
                    boxShadow: isPosterTheme && pathname === "/contact"
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                      : "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                      e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255, 255, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isPosterTheme) {
                      e.currentTarget.style.background = pathname === "/contact" ? "rgba(255, 255, 255, 0.16)" : "transparent";
                      e.currentTarget.style.borderColor = pathname === "/contact" ? "rgba(255, 255, 255, 0.25)" : "transparent";
                      e.currentTarget.style.boxShadow = pathname === "/contact" ? "inset 0 1px 1px rgba(255, 255, 255, 0.35)" : "none";
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA: Liquid Glass Capsule Button */}
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
                border: isPosterTheme
                  ? "1px solid rgba(255, 255, 255, 0.35)"
                  : "1.5px solid #c20101",
                borderRadius: 8,
                overflow: "hidden",
                textDecoration: "none",
                backdropFilter: isPosterTheme ? "blur(16px)" : "none",
                WebkitBackdropFilter: isPosterTheme ? "blur(16px)" : "none",
                boxShadow: isPosterTheme
                  ? "inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 8px 24px rgba(0, 0, 0, 0.3)"
                  : "0 4px 14px rgba(194, 1, 1, 0.2)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = isPosterTheme
                  ? "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 12px 30px rgba(229, 9, 20, 0.45)"
                  : "0 6px 20px rgba(194, 1, 1, 0.35)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = isPosterTheme
                  ? "inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 8px 24px rgba(0, 0, 0, 0.3)"
                  : "0 4px 14px rgba(194, 1, 1, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  padding: "9px 20px",
                  fontSize: "0.82rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  color: isPosterTheme ? "#ffffff" : "#c20101",
                  textTransform: "uppercase",
                  background: isPosterTheme ? "rgba(255, 255, 255, 0.1)" : "#ffffff",
                  textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                GET BROCHURE
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #E50914 0%, #c20101 100%)",
                  color: "#ffffff",
                  padding: "9px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.95rem",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4)",
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
              background: isPosterTheme ? "rgba(255, 255, 255, 0.12)" : "none",
              backdropFilter: isPosterTheme ? "blur(12px)" : "none",
              WebkitBackdropFilter: isPosterTheme ? "blur(12px)" : "none",
              border: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid var(--slate-200)",
              boxShadow: isPosterTheme ? "inset 0 1px 1px rgba(255, 255, 255, 0.3)" : "none",
              borderRadius: 8,
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

      {/* Mobile Drawer with Liquid Glass Backdrop */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 17, 24, 0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
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
              background: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              boxShadow: "-8px 0 40px rgba(0, 0, 0, 0.3)",
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
