"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Shield, Factory, CalendarCheck, MessageCircle } from "lucide-react";

export default function MobileAppTabBar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname.startsWith("/services")) {
      setActiveTab("services");
    } else if (pathname.startsWith("/contact")) {
      setActiveTab("audit");
    }
  }, [pathname]);

  const whatsappUrl =
    "https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <nav
      aria-label="Mobile iPhone App Navigation Bar"
      className="ios-app-tabbar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99990,
        display: "none", // Visible only via @media (max-width: 768px)
        background: "rgba(245, 245, 247, 0.88)",
        backdropFilter: "blur(32px) saturate(210%)",
        WebkitBackdropFilter: "blur(32px) saturate(210%)",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 -4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        paddingTop: "8px",
        paddingBottom: "max(10px, env(safe-area-inset-bottom))",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "480px",
          margin: "0 auto",
          padding: "0 10px",
        }}
      >
        {/* Tab 1: Home */}
        <Link
          href="/"
          onClick={() => setActiveTab("home")}
          className="ios-tab-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            textDecoration: "none",
            color: activeTab === "home" ? "#E50914" : "#86868b",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "4px 8px",
            borderRadius: "12px",
            minWidth: "54px",
          }}
        >
          <div
            style={{
              position: "relative",
              transform: activeTab === "home" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Home size={20} strokeWidth={activeTab === "home" ? 2.5 : 2} />
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: activeTab === "home" ? 850 : 600,
              letterSpacing: "0.02em",
            }}
          >
            Home
          </span>
        </Link>

        {/* Tab 2: Service Arena */}
        <Link
          href="/#service-arena"
          onClick={() => setActiveTab("services")}
          className="ios-tab-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            textDecoration: "none",
            color: activeTab === "services" ? "#E50914" : "#86868b",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "4px 8px",
            borderRadius: "12px",
            minWidth: "54px",
          }}
        >
          <div
            style={{
              position: "relative",
              transform: activeTab === "services" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Shield size={20} strokeWidth={activeTab === "services" ? 2.5 : 2} />
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: activeTab === "services" ? 850 : 600,
              letterSpacing: "0.02em",
            }}
          >
            Services
          </span>
        </Link>

        {/* Tab 3: Industries */}
        <Link
          href="/#industries-served"
          onClick={() => setActiveTab("industries")}
          className="ios-tab-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            textDecoration: "none",
            color: activeTab === "industries" ? "#E50914" : "#86868b",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "4px 8px",
            borderRadius: "12px",
            minWidth: "54px",
          }}
        >
          <div
            style={{
              position: "relative",
              transform: activeTab === "industries" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Factory size={20} strokeWidth={activeTab === "industries" ? 2.5 : 2} />
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: activeTab === "industries" ? 850 : 600,
              letterSpacing: "0.02em",
            }}
          >
            Industries
          </span>
        </Link>

        {/* Tab 4: Audit / Contact */}
        <Link
          href="/contact"
          onClick={() => setActiveTab("audit")}
          className="ios-tab-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            textDecoration: "none",
            color: activeTab === "audit" ? "#E50914" : "#86868b",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "4px 8px",
            borderRadius: "12px",
            minWidth: "54px",
          }}
        >
          <div
            style={{
              position: "relative",
              transform: activeTab === "audit" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <CalendarCheck size={20} strokeWidth={activeTab === "audit" ? 2.5 : 2} />
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: activeTab === "audit" ? 850 : 600,
              letterSpacing: "0.02em",
            }}
          >
            Audit
          </span>
        </Link>

        {/* Tab 5: WhatsApp Action Pill */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="ios-tab-item ios-whatsapp-pill"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            textDecoration: "none",
            color: "#ffffff",
            padding: "5px 12px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            boxShadow: "0 4px 14px rgba(37, 211, 102, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
            minWidth: "62px",
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MessageCircle size={16} strokeWidth={2.5} />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 900,
                letterSpacing: "0.02em",
              }}
            >
              Chat
            </span>
          </div>
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .ios-app-tabbar {
            display: block !important;
          }
          /* Active press feedback like native iOS */
          .ios-tab-item:active {
            transform: scale(0.92) !important;
          }
        }
      `}</style>
    </nav>
  );
}
