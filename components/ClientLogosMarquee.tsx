"use client";

import React from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "Zydus Life Sciences", logo: "/images/clients/zydus.png" },
  { name: "Adani Group", logo: "/images/clients/adani.png" },
  { name: "Aditya Birla Group", logo: "/images/clients/aditya-birla.png" },
  { name: "Timken Industrial", logo: "/images/clients/timken.png" },
  { name: "Asian Paints", logo: "/images/clients/asian-paints.png" },
  { name: "GSECL Power", logo: "/images/clients/gsecl.png" },
  { name: "MG Motor", logo: "/images/clients/mg-motor.png" },
];

export default function ClientLogosMarquee() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(246, 248, 252, 0.92) 100%)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(226, 232, 240, 0.85)",
        borderBottom: "1px solid rgba(226, 232, 240, 0.85)",
        padding: "44px 0",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.03), inset 0 1px 1.5px #ffffff",
      }}
    >
      <div className="container">
        {/* Apple Style Frosted Header Pill */}
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.76rem",
              fontWeight: 850,
              letterSpacing: "0.16em",
              color: "#64748b",
              textTransform: "uppercase",
              padding: "5px 16px",
              background: "rgba(241, 245, 249, 0.8)",
              borderRadius: "9999px",
              border: "1px solid rgba(203, 213, 225, 0.5)",
              boxShadow: "inset 0 1px 1px #ffffff",
            }}
          >
            TRUSTED BY HEAVY INDUSTRIAL &amp; PHARMACEUTICAL ENTERPRISES ACROSS GUJARAT
          </span>
        </div>

        {/* Apple Glass Client Logo Tiles */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 2.5vw, 32px)",
            flexWrap: "wrap",
          }}
        >
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: 54,
                width: 140,
                padding: "8px 18px",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03), inset 0 1px 1.2px #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: "grayscale(100%) opacity(0.7)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0, 0, 0, 0.08), 0 0 20px rgba(229, 9, 20, 0.08), inset 0 1px 1.5px #ffffff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) opacity(0.7)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0, 0, 0, 0.03), inset 0 1px 1.2px #ffffff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.9)";
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="140px"
                style={{ objectFit: "contain", padding: "8px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
