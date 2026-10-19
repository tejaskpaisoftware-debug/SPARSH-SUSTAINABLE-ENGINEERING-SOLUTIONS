"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Why SPARSH", href: "/why-sparsh" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="header-nav-wrap">
      <nav className="glass-nav" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link href="/" className="nav-brand">
          <div className="nav-logo-mark">
            <span>S</span>
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-title">SPARSH</span>
            <span className="nav-brand-sub">Sustainable Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
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
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            style={
              pathname === item.href
                ? { color: "var(--accent-cyan)", fontWeight: 700 }
                : undefined
            }
          >
            <span>{item.label}</span>
            <ChevronRight style={{ width: 18, height: 18 }} />
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          style={{ color: "var(--accent-cyan)", fontWeight: 700 }}
        >
          <span>Schedule Facility Consultation</span>
          <ArrowUpRight style={{ width: 18, height: 18 }} />
        </Link>
      </div>
    </header>
  );
}
