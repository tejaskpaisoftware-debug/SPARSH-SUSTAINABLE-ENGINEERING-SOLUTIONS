"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, ArrowUpRight, ArrowRight, Package } from "lucide-react";
import SeturakshLogo from "@/components/SeturakshLogo";

const servicesList = [
  {
    id: "ehs",
    title: "EHS Management & Compliance",
    step: "01",
    sub: "Audits, Legal Compliance & HIRA/RCA",
    color: "#00843d",
    glow: "rgba(0, 132, 61, 0.28)",
    image: "/service-ehs.png",
  },
  {
    id: "fire",
    title: "Fire Safety & Emergency",
    step: "02",
    sub: "FRA, Fire Safety Audits & Mock Drills",
    color: "#d9251d",
    glow: "rgba(217, 37, 29, 0.28)",
    image: "/service-fire.png",
  },
  {
    id: "process",
    title: "Process Safety Management",
    step: "03",
    sub: "HAZOP, MOC, PSSR & LOPA Advisory",
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.28)",
    image: "/service-process.png",
  },
  {
    id: "training",
    title: "Training & Competency",
    step: "04",
    sub: "Safety Inductions, BBS & Drill Exercises",
    color: "#7e22ce",
    glow: "rgba(126, 34, 206, 0.28)",
    image: "/service-risk.png",
  },
  {
    id: "env",
    title: "Environment & Sustainability",
    step: "05",
    sub: "Consent to Operate, Waste & ESG Support",
    color: "#0d8a43",
    glow: "rgba(13, 138, 67, 0.28)",
    image: "/service-env.png",
  },
  {
    id: "engineering",
    title: "Engineering & Project Safety",
    step: "06",
    sub: "Greenfield Reviews, PTW & Construction",
    color: "#0066cc",
    glow: "rgba(0, 102, 204, 0.28)",
    image: "/service-engineering.png",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMobileServicesOpen(false);
        setDesktopDropdownOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="header-nav-wrap">
      <nav className="glass-nav" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link href="/" className="nav-brand" aria-label="SETURAKSH Home">
          <SeturakshLogo size="md" subtitle="SUSTAINABLE EngiSafe" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>
              About Us
            </Link>
          </li>

          {/* Desktop "Our Services" with Dropdown Menu */}
          <li
            className="nav-item-dropdown"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
              style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
            >
              <span>Our Services</span>
              <ChevronDown
                style={{
                  width: 14,
                  height: 14,
                  transition: "transform 0.2s ease",
                  transform: desktopDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Link>

            {/* Floating Desktop Dropdown Card */}
            <div className={`desktop-services-dropdown ${desktopDropdownOpen ? "show" : ""}`}>
              {/* Dropdown Header */}
              <div className="desktop-dropdown-header">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      padding: "3px 9px",
                      borderRadius: 6,
                      background: "rgba(0, 132, 61, 0.12)",
                      color: "#00843d",
                      textTransform: "uppercase",
                    }}
                  >
                    Consulting Services
                  </span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 750, color: "#1d1d1f" }}>
                    6 Core Advisory Disciplines
                  </span>
                </div>
                <Link
                  href="/services"
                  onClick={() => setDesktopDropdownOpen(false)}
                  style={{
                    fontSize: "0.80rem",
                    fontWeight: 700,
                    color: "#0071e3",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span>Explore Full Scope</span>
                  <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>

              {/* 2-Column Services Grid */}
              <div className="desktop-services-grid">
                {servicesList.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services?service=${srv.id}`}
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="desktop-service-item"
                  >
                    <div className="desktop-service-icon-box">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        width={36}
                        height={36}
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                    </div>
                    <div className="desktop-service-content">
                      <div className="desktop-service-top-row">
                        <span
                          className="desktop-service-step-pill"
                          style={{
                            background: `${srv.color}15`,
                            color: srv.color,
                          }}
                        >
                          {srv.step}
                        </span>
                        <span className="desktop-service-title">
                          {srv.title}
                        </span>
                      </div>
                      <span className="desktop-service-sub">
                        {srv.sub}
                      </span>
                    </div>
                    <ChevronRight
                      className="desktop-service-arrow"
                      style={{ width: 16, height: 16, color: srv.color }}
                    />
                  </Link>
                ))}
              </div>

              {/* Product Supply Solutions Footer Showcase */}
              <div className="desktop-dropdown-footer">
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(0, 113, 227, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0071e3",
                      flexShrink: 0,
                    }}
                  >
                    <Package style={{ width: 18, height: 18 }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          padding: "1px 6px",
                          borderRadius: 4,
                          background: "rgba(0, 113, 227, 0.12)",
                          color: "#0071e3",
                          textTransform: "uppercase",
                        }}
                      >
                        Supply
                      </span>
                      <span style={{ fontSize: "0.84rem", fontWeight: 750, color: "#1d1d1f" }}>
                        Fire, Safety &amp; Engineering Product Supply
                      </span>
                    </div>
                    <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "#6e6e73", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      Extinguishers, Hydrants, PPE, LOTO systems, spill kits &amp; industrial equipment sourcing.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#products"
                  onClick={() => setDesktopDropdownOpen(false)}
                  style={{
                    flexShrink: 0,
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    padding: "7px 14px",
                    borderRadius: 999,
                    background: "rgba(0, 113, 227, 0.1)",
                    color: "#0071e3",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0071e3";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 113, 227, 0.1)";
                    e.currentTarget.style.color = "#0071e3";
                  }}
                >
                  <span>Explore Products</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/why-sparsh"
              className={pathname === "/why-sparsh" ? "active" : ""}
            >
              WHY SETURAKSH
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="nav-actions">
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: "0.85rem" }}
          >
            <span>Schedule Audit</span>
            <ArrowUpRight style={{ width: 16, height: 16 }} />
          </Link>
          <button
            ref={toggleRef}
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X style={{ width: 22, height: 22 }} />
            ) : (
              <Menu style={{ width: 22, height: 22 }} />
            )}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Drawer */}
      <div
        ref={menuRef}
        className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}
        id="mobileMenu"
      >
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
          }}
          style={
            pathname === "/"
              ? { color: "var(--accent-cyan)", fontWeight: 700 }
              : undefined
          }
        >
          <span>Home</span>
          <ChevronRight style={{ width: 18, height: 18 }} />
        </Link>

        <Link
          href="/about"
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
          }}
          style={
            pathname === "/about"
              ? { color: "var(--accent-cyan)", fontWeight: 700 }
              : undefined
          }
        >
          <span>About Us</span>
          <ChevronRight style={{ width: 18, height: 18 }} />
        </Link>

        {/* Mobile "Our Services" Accordion Item */}
        <div>
          <button
            type="button"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            style={{
              width: "100%",
              textDecoration: "none",
              color: pathname === "/services" ? "var(--accent-cyan)" : "var(--text-primary)",
              fontSize: "1.05rem",
              fontWeight: pathname === "/services" ? 700 : 600,
              padding: "12px 16px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: mobileServicesOpen ? "rgba(0, 0, 0, 0.04)" : "transparent",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>Our Services</span>
            </div>
            <ChevronDown
              style={{
                width: 18,
                height: 18,
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Subservices Dropdown List inside Mobile Drawer */}
          {mobileServicesOpen && (
            <div className="mobile-subservices-menu">
              {servicesList.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services?service=${srv.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="mobile-subservice-item"
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      position: "relative",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      width={32}
                      height={32}
                      style={{ borderRadius: "50%", objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          padding: "1px 5px",
                          borderRadius: 4,
                          background: `${srv.color}15`,
                          color: srv.color,
                          flexShrink: 0,
                        }}
                      >
                        {srv.step}
                      </span>
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1d1d1f", lineHeight: 1.25 }}>
                        {srv.title}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "#6e6e73", marginTop: 2 }}>
                      {srv.sub}
                    </span>
                  </div>
                  <ArrowRight style={{ width: 14, height: 14, color: srv.color, flexShrink: 0 }} />
                </Link>
              ))}

              {/* Mobile Product Supply Solutions Card */}
              <Link
                href="/services#products"
                onClick={() => {
                  setIsOpen(false);
                  setMobileServicesOpen(false);
                }}
                className="mobile-subservice-item"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 113, 227, 0.05), rgba(16, 124, 65, 0.05))",
                  border: "1px solid rgba(0, 113, 227, 0.15)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    position: "relative",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    borderRadius: 8,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    color: "#0071e3",
                  }}
                >
                  <Package style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        padding: "1px 5px",
                        borderRadius: 4,
                        background: "rgba(0, 113, 227, 0.12)",
                        color: "#0071e3",
                      }}
                    >
                      SUPPLY
                    </span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1d1d1f" }}>
                      Product Supply Solutions
                    </span>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#6e6e73", marginTop: 2 }}>
                    Fire Protection, PPE, LOTO &amp; Engineering Gear
                  </span>
                </div>
                <ArrowRight style={{ width: 14, height: 14, color: "#0071e3", flexShrink: 0 }} />
              </Link>

              {/* View All Services Link */}
              <Link
                href="/services"
                onClick={() => {
                  setIsOpen(false);
                  setMobileServicesOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "11px",
                  marginTop: 4,
                  borderRadius: 12,
                  background: "rgba(0, 113, 227, 0.08)",
                  color: "#0071e3",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <span>Explore All 6 Consulting Disciplines</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/why-sparsh"
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
          }}
          style={
            pathname === "/why-sparsh"
              ? { color: "var(--accent-cyan)", fontWeight: 700 }
              : undefined
          }
        >
          <span>WHY SETURAKSH</span>
          <ChevronRight style={{ width: 18, height: 18 }} />
        </Link>

        <Link
          href="/contact"
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
          }}
          style={
            pathname === "/contact"
              ? { color: "var(--accent-cyan)", fontWeight: 700 }
              : undefined
          }
        >
          <span>Contact Us</span>
          <ChevronRight style={{ width: 18, height: 18 }} />
        </Link>

        {/* Mobile Quick Action Pill */}
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
          <Link
            href="/contact"
            onClick={() => {
              setIsOpen(false);
              setMobileServicesOpen(false);
            }}
            className="btn btn-primary"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "13px 20px",
              borderRadius: 14,
              fontSize: "0.92rem",
              fontWeight: 750,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0, 113, 227, 0.35)",
            }}
          >
            <span>Schedule Facility Audit</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>
    </header>
  );
}
