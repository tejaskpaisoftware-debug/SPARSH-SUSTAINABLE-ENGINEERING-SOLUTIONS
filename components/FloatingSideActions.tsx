"use client";

import React from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";

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
        gap: 2,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
      }}
      className="floating-side-actions"
    >
      {/* 1. Email Box (Red) */}
      <a
        href="mailto:info@seturaksh.com"
        title="Email Us: info@seturaksh.com"
        aria-label="Send Email"
        style={{
          width: 44,
          height: 44,
          background: "#c20101",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          transition: "transform 0.2s ease, background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-4px)";
          e.currentTarget.style.background = "#990101";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.background = "#c20101";
        }}
      >
        <Mail size={20} />
      </a>

      {/* 2. Phone Box (Deep Navy / Red Accent) */}
      <a
        href="tel:+918780884947"
        title="Call Us: +91 87808 84947"
        aria-label="Call Phone"
        style={{
          width: 44,
          height: 44,
          background: "#0e1726",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          transition: "transform 0.2s ease, background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-4px)";
          e.currentTarget.style.background = "#c20101";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.background = "#0e1726";
        }}
      >
        <Phone size={19} />
      </a>
    </div>
  );
}
