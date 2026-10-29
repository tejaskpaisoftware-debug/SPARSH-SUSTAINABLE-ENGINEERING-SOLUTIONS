"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";
import SeturakshLogo from "@/components/SeturakshLogo";

const servicesList = [
  {
    id: "ehs",
    title: "EHS Consultancy",
    step: "01",
    sub: "Workforce & Compliance",
    color: "#00843d",
    glow: "rgba(0, 132, 61, 0.28)",
    image: "/service-ehs.png",
  },
  {
    id: "fire",
    title: "Fire Safety",
    step: "02",
    sub: "Audits & Protection",
    color: "#d9251d",
    glow: "rgba(217, 37, 29, 0.28)",
    image: "/service-fire.png",
  },
  {
    id: "process",
    title: "Process Safety",
    step: "03",
    sub: "PSM & Risk Control",
    color: "#d97706",
    glow: "rgba(217, 119, 6, 0.28)",
    image: "/service-process.png",
  },
  {
    id: "env",
    title: "Environment & Sustainability",
    step: "04",
    sub: "ESG & Decarbonization",
    color: "#0d8a43",
    glow: "rgba(13, 138, 67, 0.28)",
    image: "/service-env.png",
  },
  {
    id: "engineering",
    title: "Total Engineering",
    step: "05",
    sub: "Industrial Systems",
    color: "#0066cc",
    glow: "rgba(0, 102, 204, 0.28)",
    image: "/service-engineering.png",
  },
  {
    id: "risk",
    title: "Risk Management",
    step: "06",
    sub: "Enterprise Defense",
    color: "#7e22ce",
    glow: "rgba(126, 34, 206, 0.28)",
    image: "/service-risk.png",
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

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 8px 12px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "rgba(0, 132, 61, 0.12)",
                      color: "#00843d",
                      textTransform: "uppercase",
                    }}
                  >
                    6 Core Disciplines
                  </span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1d1d1f" }}>
                    Expertise & Solutions
                  </span>
                </div>
                <Link
                  href="/services"
                  onClick={() => setDesktopDropdownOpen(false)}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#0071e3",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <span>View All</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="desktop-services-grid">
                {servicesList.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services?service=${srv.id}`}
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="desktop-service-item"
                  >
                    <div style={{ width: 34, height: 34, flexShrink: 0, position: "relative" }}>
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        width={34}
                        height={34}
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            fontSize: "0.62rem",
                            fontWeight: 800,
                            padding: "1px 5px",
                            borderRadius: 4,
                            background: `${srv.color}15`,
                            color: srv.color,
                          }}
                        >
                          {srv.step}
                        </span>
                        <span
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 750,
                            color: "#1d1d1f",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {srv.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-secondary)",
                          marginTop: 2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {srv.sub}
                      </span>
                    </div>
                  </Link>
                ))}
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
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: 6,
                  background: "rgba(0, 132, 61, 0.12)",
                  color: "#00843d",
                }}
              >
                6
              </span>
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
                  <div style={{ width: 26, height: 26, position: "relative", flexShrink: 0 }}>
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      width={26}
                      height={26}
                      style={{ borderRadius: "50%", objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          padding: "1px 5px",
                          borderRadius: 4,
                          background: `${srv.color}15`,
                          color: srv.color,
                        }}
                      >
                        {srv.step}
                      </span>
                      <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "#1d1d1f" }}>
                        {srv.title}
                      </span>
                    </div>
                  </div>
                  <ArrowRight style={{ width: 14, height: 14, color: srv.color, flexShrink: 0 }} />
                </Link>
              ))}

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
                  padding: "10px",
                  marginTop: 4,
                  borderRadius: 10,
                  background: "rgba(0, 113, 227, 0.08)",
                  color: "#0071e3",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <span>Explore All 6 Services</span>
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

        <Link
          href="/contact"
          onClick={() => {
            setIsOpen(false);
            setMobileServicesOpen(false);
          }}
          style={{ color: "var(--accent-cyan)", fontWeight: 700, borderTop: "1px solid rgba(0, 0, 0, 0.06)", paddingTop: 14, marginTop: 4 }}
        >
          <span>Schedule Facility Consultation</span>
          <ArrowUpRight style={{ width: 18, height: 18 }} />
        </Link>
      </div>
    </header>
  );
}
