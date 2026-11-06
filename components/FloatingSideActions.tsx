"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function FloatingSideActions() {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: "45%",
        transform: "translateY(-50%)",
        zIndex: 990,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
      className="floating-side-actions"
    >
      {/* 1. Email Box (Apple Liquid Glass Crimson) */}
      <a
        href="mailto:info@seturaksh.com"
        title="Email Us: info@seturaksh.com"
        aria-label="Send Email"
        style={{
          width: 46,
          height: 46,
          background: "linear-gradient(135deg, rgba(229, 9, 20, 0.95) 0%, rgba(194, 1, 1, 0.9) 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          borderTopLeftRadius: "14px",
          borderBottomLeftRadius: "14px",
          border: "1px solid rgba(255, 255, 255, 0.32)",
          borderRight: "none",
          backdropFilter: "blur(24px) saturate(190%)",
          WebkitBackdropFilter: "blur(24px) saturate(190%)",
          boxShadow: "0 8px 24px rgba(229, 9, 20, 0.4), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-6px) scale(1.06)";
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(229, 9, 20, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.75)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(229, 9, 20, 0.4), inset 0 1px 1.5px rgba(255, 255, 255, 0.55)";
        }}
      >
        <Mail size={19} />
      </a>

      {/* 2. Phone Box (Apple Liquid Glass Titanium Obsidian) */}
      <a
        href="tel:+918780884947"
        title="Call Us: +91 87808 84947"
        aria-label="Call Phone"
        style={{
          width: 46,
          height: 46,
          background: "linear-gradient(135deg, rgba(20, 30, 48, 0.92) 0%, rgba(10, 16, 26, 0.95) 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          borderTopLeftRadius: "14px",
          borderBottomLeftRadius: "14px",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRight: "none",
          backdropFilter: "blur(24px) saturate(190%)",
          WebkitBackdropFilter: "blur(24px) saturate(190%)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 1.2px rgba(255, 255, 255, 0.35)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-6px) scale(1.06)";
          e.currentTarget.style.background =
            "linear-gradient(135deg, rgba(229, 9, 20, 0.95) 0%, rgba(194, 1, 1, 0.9) 100%)";
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(229, 9, 20, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.75)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0) scale(1)";
          e.currentTarget.style.background =
            "linear-gradient(135deg, rgba(20, 30, 48, 0.92) 0%, rgba(10, 16, 26, 0.95) 100%)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 1.2px rgba(255, 255, 255, 0.35)";
        }}
      >
        <Phone size={19} />
      </a>
    </div>
  );
}
