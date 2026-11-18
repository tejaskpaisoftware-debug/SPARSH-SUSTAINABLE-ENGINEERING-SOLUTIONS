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
  ChevronRight,
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
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
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
    }, 220);
  };

  // Only use dark poster theme on the homepage when not scrolled past the hero
  const isPosterTheme = pathname === "/" && !scrolled;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 1. iOS Liquid Glass Top Ticker Utility Ribbon */}
      <div
        className="grspl-ticker-bar"
        style={{
          background: isPosterTheme
            ? "rgba(10, 16, 26, 0.55)"
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
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="container grspl-ticker-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            width: "100%",
            maxWidth: 1260,
            margin: "0 auto",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {/* Urgent Industrial Ticker Marquee with overflow guard */}
          <div
            className="grspl-ticker-marquee"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              overflow: "hidden",
              whiteSpace: "nowrap",
              flex: 1,
              minWidth: 0,
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 850,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: isPosterTheme ? "#ffffff" : "#1d1d1f",
                textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                flexShrink: 0,
              }}
            >
              SETURAKSH • TRANSFORMING RISK INTO RESILIENCE
            </span>
            <span style={{ opacity: 0.35, color: isPosterTheme ? "#ffffff" : "#1d1d1f", flexShrink: 0 }}>•</span>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isPosterTheme ? "#ffffff" : "#1d1d1f",
                textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                flexShrink: 0,
              }}
            >
              CERTIFIED DISH &amp; PESO AUDITS
            </span>
            <span style={{ opacity: 0.35, color: isPosterTheme ? "#ffffff" : "#1d1d1f", flexShrink: 0 }}>•</span>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isPosterTheme ? "#ffffff" : "#1d1d1f",
                textShadow: isPosterTheme ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
                flexShrink: 0,
              }}
            >
              INDUSTRIAL EHS &amp; FIRE SAFETY
            </span>
          </div>

          {/* Direct Industrial Contact Strip */}
          <div
            className="grspl-ticker-contacts"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexShrink: 0,
            }}
          >
            <a
              href="tel:+918780884947"
              className="grspl-ticker-link"
              style={{
                color: isPosterTheme ? "#ffffff" : "#424245",
                textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: "0.76rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <Phone size={12} style={{ color: "#e50914" }} />
              <span>+91 87808 84947</span>
            </a>
            <span style={{ opacity: 0.25, color: isPosterTheme ? "#ffffff" : "#1d1d1f" }}>|</span>
            <a
              href="mailto:info@seturaksh.com"
              className="grspl-ticker-link"
              style={{
                color: isPosterTheme ? "#ffffff" : "#424245",
                textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: "0.76rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <Mail size={12} style={{ color: "#e50914" }} />
              <span>info@seturaksh.com</span>
            </a>
            <span style={{ opacity: 0.25, color: isPosterTheme ? "#ffffff" : "#1d1d1f" }}>|</span>
            <div
              className="grspl-ticker-link"
              style={{
                cursor: "default",
                color: isPosterTheme ? "#ffffff" : "#424245",
                textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: "0.76rem",
                fontWeight: 700,
              }}
            >
              <MapPin size={12} style={{ color: "#e50914" }} />
              <span>Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Apple iOS / Liquid Glass Header Bar */}
      <header
        className={`grspl-navbar ${isPosterTheme ? "poster-mode" : "scrolled"}`}
        style={{
          background: isPosterTheme
            ? "rgba(10, 16, 26, 0.78)"
            : "rgba(255, 255, 255, 0.88)",
          backdropFilter: isPosterTheme
            ? "blur(32px) saturate(210%) contrast(105%)"
            : "blur(24px) saturate(190%)",
          WebkitBackdropFilter: isPosterTheme
            ? "blur(32px) saturate(210%) contrast(105%)"
            : "blur(24px) saturate(190%)",
          borderBottom: isPosterTheme
            ? "1px solid rgba(255, 255, 255, 0.16)"
            : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isPosterTheme
            ? "inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 0 0 rgba(255, 255, 255, 0.08), 0 12px 36px 0 rgba(0, 0, 0, 0.35)"
            : "0 10px 30px 0 rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.95)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="container grspl-nav-inner"
          style={{
            height: isPosterTheme ? 82 : 72,
            transition: "height 0.3s ease",
            width: "100%",
            maxWidth: 1260,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo with Specular Glass Aura */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
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
                  fontSize: "1.3rem",
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
                  fontSize: "0.66rem",
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

          {/* Desktop Navigation Links with Balanced Capsule Styling */}
          <nav className="desktop-nav-wrap">
            <ul
              className="grspl-nav-links"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              {/* Home */}
              <li className="grspl-nav-item">
                <Link
                  href="/"
                  className={`grspl-nav-link grspl-nav-capsule ${pathname === "/" ? "active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: pathname === "/" ? 800 : 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme
                      ? "#ffffff"
                      : pathname === "/" ? "#E50914" : "#1d1d1f",
                    background: isPosterTheme
                      ? "rgba(255, 255, 255, 0.2)"
                      : pathname === "/" ? "rgba(229, 9, 20, 0.08)" : "transparent",
                    border: isPosterTheme
                      ? "1px solid rgba(255, 255, 255, 0.35)"
                      : pathname === "/" ? "1px solid rgba(229, 9, 20, 0.2)" : "1px solid transparent",
                    boxShadow: isPosterTheme
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 8px rgba(0, 0, 0, 0.25)"
                      : "none",
                    backdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    WebkitBackdropFilter: isPosterTheme ? "blur(8px)" : "none",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li className="grspl-nav-item">
                <Link
                  href="/about"
                  className={`grspl-nav-link grspl-nav-capsule ${pathname === "/about" ? "active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: pathname === "/about" ? 800 : 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme
                      ? "rgba(255, 255, 255, 0.92)"
                      : pathname === "/about" ? "#E50914" : "#1d1d1f",
                    background: isPosterTheme
                      ? "transparent"
                      : pathname === "/about" ? "rgba(229, 9, 20, 0.08)" : "transparent",
                    border: isPosterTheme
                      ? "1px solid transparent"
                      : pathname === "/about" ? "1px solid rgba(229, 9, 20, 0.2)" : "1px solid transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  About Us
                </Link>
              </li>

              {/* Service Arena Mega Dropdown Trigger */}
              <li
                className="grspl-nav-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <Link
                  href="/services"
                  className={`grspl-nav-link grspl-nav-capsule ${pathname.startsWith("/services") ? "active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: pathname.startsWith("/services") ? 800 : 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme
                      ? "rgba(255, 255, 255, 0.92)"
                      : pathname.startsWith("/services") ? "#E50914" : "#1d1d1f",
                    background: isPosterTheme
                      ? "transparent"
                      : pathname.startsWith("/services") ? "rgba(229, 9, 20, 0.08)" : "transparent",
                    border: isPosterTheme
                      ? "1px solid transparent"
                      : pathname.startsWith("/services") ? "1px solid rgba(229, 9, 20, 0.2)" : "1px solid transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <span>Service Arena</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: servicesDropdownOpen ? "rotate(180deg)" : "none",
                    }}
                  />
                </Link>

                {/* Dropdown Panel with Seamless Centered Alignment & Hover Bridge */}
                {servicesDropdownOpen && (
                  <div
                    className="grspl-dropdown-wrapper"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 2px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: 8,
                      zIndex: 200,
                      whiteSpace: "normal",
                      animation: "navDropdownFade 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Top Pointer Pip */}
                    <div
                      style={{
                        position: "absolute",
                        top: 2,
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: 12,
                        height: 12,
                        background: isPosterTheme ? "rgba(10, 16, 26, 0.98)" : "rgba(255, 255, 255, 0.98)",
                        borderLeft: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.18)" : "1px solid rgba(0, 0, 0, 0.08)",
                        borderTop: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.18)" : "1px solid rgba(0, 0, 0, 0.08)",
                        zIndex: 2,
                      }}
                    />

                    {/* Dropdown Card */}
                    <div
                      style={{
                        width: 780,
                        maxWidth: "calc(100vw - 32px)",
                        boxSizing: "border-box",
                        background: isPosterTheme
                          ? "rgba(10, 16, 26, 0.98)"
                          : "rgba(255, 255, 255, 0.98)",
                        backdropFilter: "blur(32px) saturate(200%)",
                        WebkitBackdropFilter: "blur(32px) saturate(200%)",
                        border: isPosterTheme
                          ? "1px solid rgba(255, 255, 255, 0.16)"
                          : "1px solid rgba(0, 0, 0, 0.08)",
                        borderRadius: 22,
                        boxShadow: isPosterTheme
                          ? "0 28px 70px -10px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.25)"
                          : "0 24px 60px -10px rgba(0, 0, 0, 0.16), inset 0 1px 1px #ffffff",
                        padding: "22px 24px 18px",
                        position: "relative",
                        zIndex: 1,
                        overflow: "hidden",
                      }}
                    >
                      {/* Dropdown Top Header Bar */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingBottom: 14,
                          marginBottom: 14,
                          borderBottom: isPosterTheme
                            ? "1px solid rgba(255, 255, 255, 0.1)"
                            : "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: "var(--primary-red)",
                              boxShadow: "0 0 10px rgba(229, 9, 20, 0.8)",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 850,
                              color: isPosterTheme ? "#ff4d4f" : "var(--primary-red)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            6 Specialized Safety Engineering Divisions
                          </span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 750,
                            color: isPosterTheme ? "rgba(255, 255, 255, 0.85)" : "var(--slate-700)",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            transition: "color 0.2s ease",
                          }}
                        >
                          <span>Full Service Architecture</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* 2-Column Grid: 6 Precision Divisions (minmax(0, 1fr) with generous width and full text visibility) */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                          gap: 12,
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        {SERVICE_ARENA_DIVISIONS.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="grspl-dropdown-card"
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 12,
                                padding: "12px 14px",
                                borderRadius: 14,
                                textDecoration: "none",
                                color: "inherit",
                                background: "transparent",
                                minWidth: 0,
                                width: "100%",
                                minHeight: 76,
                                boxSizing: "border-box",
                                border: isPosterTheme
                                  ? "1px solid transparent"
                                  : "1px solid transparent",
                                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                            >
                              {/* Left Icon with Number Badge */}
                              <div
                                style={{
                                  width: 42,
                                  height: 42,
                                  borderRadius: 12,
                                  background: isPosterTheme
                                    ? "rgba(229, 9, 20, 0.16)"
                                    : "var(--primary-red-light)",
                                  border: isPosterTheme
                                    ? "1px solid rgba(229, 9, 20, 0.35)"
                                    : "1px solid rgba(229, 9, 20, 0.14)",
                                  color: isPosterTheme ? "#ff4d4f" : "var(--primary-red)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 1,
                                  position: "relative",
                                }}
                              >
                                <IconComp size={20} strokeWidth={2.2} />
                                <span
                                  style={{
                                    position: "absolute",
                                    bottom: -4,
                                    right: -4,
                                    fontSize: "0.62rem",
                                    fontWeight: 900,
                                    background: isPosterTheme ? "#0a101a" : "#ffffff",
                                    color: isPosterTheme ? "#ff4d4f" : "var(--primary-red)",
                                    borderRadius: 4,
                                    padding: "1px 4px",
                                    lineHeight: 1,
                                    border: isPosterTheme
                                      ? "1px solid rgba(255, 255, 255, 0.2)"
                                      : "1px solid rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  {item.num}
                                </span>
                              </div>

                              {/* Title and Full Description with natural 2-line wrapping */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  className="grspl-dropdown-title"
                                  style={{
                                    fontSize: "0.88rem",
                                    fontWeight: 800,
                                    color: isPosterTheme ? "#ffffff" : "#1d1d1f",
                                    lineHeight: 1.3,
                                    marginBottom: 4,
                                    letterSpacing: "-0.01em",
                                    whiteSpace: "normal",
                                    transition: "color 0.2s ease",
                                  }}
                                >
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    fontSize: "0.75rem",
                                    color: isPosterTheme ? "rgba(255, 255, 255, 0.74)" : "#5a5a60",
                                    lineHeight: 1.45,
                                    whiteSpace: "normal",
                                    wordBreak: "normal",
                                  }}
                                >
                                  {item.desc}
                                </div>
                              </div>

                              {/* Subtle arrow indicator */}
                              <ChevronRight
                                size={16}
                                className="grspl-dropdown-chevron"
                                style={{
                                  color: isPosterTheme ? "rgba(255, 255, 255, 0.35)" : "var(--slate-400)",
                                  flexShrink: 0,
                                  marginTop: 4,
                                  transition: "all 0.2s ease",
                                }}
                              />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Bottom Advisory Bar */}
                      <div
                        style={{
                          marginTop: 14,
                          paddingTop: 12,
                          borderTop: isPosterTheme
                            ? "1px solid rgba(255, 255, 255, 0.08)"
                            : "1px solid rgba(0, 0, 0, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.76rem",
                        }}
                      >
                        <div
                          style={{
                            color: isPosterTheme ? "rgba(255, 255, 255, 0.72)" : "#6e6e73",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <ShieldCheck size={14} style={{ color: "var(--primary-red)" }} />
                          <span>Need a statutory DISH or PESO facility assessment?</span>
                        </div>
                        <Link
                          href="/contact"
                          onClick={() => setServicesDropdownOpen(false)}
                          style={{
                            color: isPosterTheme ? "#ff4d4f" : "var(--primary-red)",
                            fontWeight: 800,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <span>Talk to Lead Auditor →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Flagship Projects */}
              <li className="grspl-nav-item">
                <Link
                  href="/#field-operations"
                  className="grspl-nav-link grspl-nav-capsule"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme ? "rgba(255, 255, 255, 0.92)" : "#1d1d1f",
                    background: "transparent",
                    border: "1px solid transparent",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Flagship Projects
                </Link>
              </li>

              {/* Why Seturaksh */}
              <li className="grspl-nav-item">
                <Link
                  href="/why-sparsh"
                  className={`grspl-nav-link grspl-nav-capsule ${pathname === "/why-sparsh" ? "active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: pathname === "/why-sparsh" ? 800 : 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme
                      ? "rgba(255, 255, 255, 0.92)"
                      : pathname === "/why-sparsh" ? "#E50914" : "#1d1d1f",
                    background: isPosterTheme
                      ? "transparent"
                      : pathname === "/why-sparsh" ? "rgba(229, 9, 20, 0.08)" : "transparent",
                    border: isPosterTheme
                      ? "1px solid transparent"
                      : pathname === "/why-sparsh" ? "1px solid rgba(229, 9, 20, 0.2)" : "1px solid transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Why Seturaksh
                </Link>
              </li>

              {/* Contact */}
              <li className="grspl-nav-item">
                <Link
                  href="/contact"
                  className={`grspl-nav-link grspl-nav-capsule ${pathname === "/contact" ? "active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 13px",
                    borderRadius: 9999,
                    fontSize: "0.84rem",
                    fontWeight: pathname === "/contact" ? 800 : 600,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isPosterTheme
                      ? "rgba(255, 255, 255, 0.92)"
                      : pathname === "/contact" ? "#E50914" : "#1d1d1f",
                    background: isPosterTheme
                      ? "transparent"
                      : pathname === "/contact" ? "rgba(229, 9, 20, 0.08)" : "transparent",
                    border: isPosterTheme
                      ? "1px solid transparent"
                      : pathname === "/contact" ? "1px solid rgba(229, 9, 20, 0.2)" : "1px solid transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    textShadow: isPosterTheme ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right CTA: Pill Button (Guaranteed Zero Clip) */}
          <div className="desktop-cta-wrap">
            <Link
              href="/contact"
              className="grspl-brochure-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 9999,
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                flexShrink: 0,
                background: "linear-gradient(135deg, #e50914 0%, #c20101 100%)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                boxShadow: "0 4px 14px rgba(229, 9, 20, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span>Get Brochure</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: isPosterTheme ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.05)",
              backdropFilter: isPosterTheme ? "blur(12px)" : "none",
              WebkitBackdropFilter: isPosterTheme ? "blur(12px)" : "none",
              border: isPosterTheme ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.1)",
              boxShadow: isPosterTheme ? "inset 0 1px 1px rgba(255, 255, 255, 0.3)" : "none",
              borderRadius: 9999,
              padding: 9,
              cursor: "pointer",
              color: isPosterTheme ? "#ffffff" : "#1d1d1f",
              transition: "all 0.25s ease",
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer with Liquid Glass Backdrop & Service Accordion */}
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
              width: "84%",
              maxWidth: 390,
              height: "100%",
              background: "rgba(255, 255, 255, 0.98)",
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
            {/* Drawer Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid var(--slate-100)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image src="/seturaksh-logo.png" alt="Logo" width={36} height={36} />
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--industrial-navy)", lineHeight: 1.1 }}>
                    SETURAKSH
                  </div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "var(--primary-red)", letterSpacing: "0.08em" }}>
                    SUSTAINABLE ENGISAFE
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: "rgba(0,0,0,0.05)",
                  border: "none",
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--slate-700)",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  color: pathname === "/" ? "var(--primary-red)" : "var(--text-dark)",
                  textDecoration: "none",
                  background: pathname === "/" ? "var(--primary-red-light)" : "transparent",
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  color: pathname === "/about" ? "var(--primary-red)" : "var(--text-dark)",
                  textDecoration: "none",
                  background: pathname === "/about" ? "var(--primary-red-light)" : "transparent",
                }}
              >
                About Us
              </Link>

              {/* Service Arena Accordion on Mobile */}
              <div>
                <div
                  onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "11px 14px",
                    borderRadius: 10,
                    fontSize: "0.95rem",
                    fontWeight: 750,
                    color: pathname.startsWith("/services") ? "var(--primary-red)" : "var(--text-dark)",
                    cursor: "pointer",
                    background: pathname.startsWith("/services") ? "var(--primary-red-light)" : "transparent",
                  }}
                >
                  <span>Service Arena (6 Divisions)</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: mobileServicesAccordionOpen ? "rotate(180deg)" : "none",
                    }}
                  />
                </div>

                {mobileServicesAccordionOpen && (
                  <div
                    style={{
                      marginTop: 4,
                      marginBottom: 8,
                      marginLeft: 10,
                      paddingLeft: 12,
                      borderLeft: "2px solid rgba(229, 9, 20, 0.25)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {SERVICE_ARENA_DIVISIONS.map((div) => {
                      return (
                        <Link
                          key={div.id}
                          href={div.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "8px 10px",
                            borderRadius: 8,
                            textDecoration: "none",
                            color: "var(--slate-800)",
                            fontSize: "0.85rem",
                            fontWeight: 650,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 900,
                              color: "var(--primary-red)",
                              background: "var(--primary-red-light)",
                              padding: "2px 5px",
                              borderRadius: 4,
                            }}
                          >
                            {div.num}
                          </span>
                          <span style={{ flex: 1, lineHeight: 1.25 }}>{div.title}</span>
                          <ChevronRight size={14} style={{ color: "var(--slate-400)" }} />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/#field-operations"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                }}
              >
                Flagship Projects &amp; Field Drills
              </Link>
              <Link
                href="/why-sparsh"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  color: pathname === "/why-sparsh" ? "var(--primary-red)" : "var(--text-dark)",
                  textDecoration: "none",
                  background: pathname === "/why-sparsh" ? "var(--primary-red-light)" : "transparent",
                }}
              >
                Why Seturaksh
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                  fontWeight: 750,
                  color: pathname === "/contact" ? "var(--primary-red)" : "var(--text-dark)",
                  textDecoration: "none",
                  background: pathname === "/contact" ? "var(--primary-red-light)" : "transparent",
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Actions */}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "13px 18px",
                  fontSize: "0.92rem",
                  borderRadius: 9999,
                }}
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
                  padding: "11px 18px",
                  borderRadius: 9999,
                  background: "#25d366",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 750,
                  fontSize: "0.88rem",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                }}
              >
                <Phone size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes navDropdownFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -8px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        .grspl-dropdown-wrapper,
        .grspl-dropdown-wrapper * {
          white-space: normal;
        }

        .desktop-nav-wrap {
          display: none;
        }
        .desktop-cta-wrap {
          display: none;
        }
        .mobile-toggle-btn {
          display: flex !important;
          align-items: center;
          justify-content: center;
        }

        /* Desktop Breakpoint: Graceful handling so NOTHING is cut off */
        @media (min-width: 1100px) {
          .desktop-nav-wrap {
            display: block !important;
          }
          .desktop-cta-wrap {
            display: flex !important;
            align-items: center;
            gap: 12px;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }

        /* Intermediate Desktop Scaling (1100px - 1240px) */
        @media (min-width: 1100px) and (max-width: 1240px) {
          .grspl-nav-links {
            gap: 2px !important;
          }
          .grspl-nav-capsule {
            padding: 6px 9px !important;
            font-size: 0.81rem !important;
          }
          .grspl-brochure-pill {
            padding: 7px 14px !important;
            font-size: 0.76rem !important;
          }
        }

        /* Hover interactions for navigation capsules */
        .poster-mode .grspl-nav-capsule:hover {
          background: rgba(255, 255, 255, 0.16) !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        .scrolled .grspl-nav-capsule:hover {
          background: rgba(0, 0, 0, 0.05) !important;
          color: #1d1d1f !important;
          transform: translateY(-1px);
        }

        /* Dropdown Card Hover in Poster vs Light Theme */
        .poster-mode .grspl-dropdown-card:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          transform: translateX(2px);
        }
        .poster-mode .grspl-dropdown-card:hover .grspl-dropdown-title {
          color: #ff4d4f !important;
        }

        .scrolled .grspl-dropdown-card:hover {
          background: #f5f5f7 !important;
          transform: translateX(2px);
        }
        .scrolled .grspl-dropdown-card:hover .grspl-dropdown-title {
          color: #e50914 !important;
        }

        .grspl-dropdown-card:hover .grspl-dropdown-chevron {
          transform: translateX(3px);
          color: var(--primary-red) !important;
          opacity: 1 !important;
        }

        .grspl-brochure-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(229, 9, 20, 0.55), inset 0 1px 1.5px rgba(255, 255, 255, 0.6) !important;
        }
        .grspl-brochure-pill:active {
          transform: scale(0.96) !important;
        }
      `}</style>
    </div>
  );
}
