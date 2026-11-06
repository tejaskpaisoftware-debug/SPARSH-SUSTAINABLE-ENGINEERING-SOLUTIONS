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
        background: "#ffffff",
        borderTop: "1px solid var(--slate-200)",
        borderBottom: "1px solid var(--slate-200)",
        padding: "42px 0",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 850,
              letterSpacing: "0.14em",
              color: "var(--slate-500)",
              textTransform: "uppercase",
            }}
          >
            TRUSTED BY HEAVY INDUSTRIAL &amp; PHARMACEUTICAL ENTERPRISES ACROSS GUJARAT
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(24px, 4vw, 56px)",
            flexWrap: "wrap",
          }}
        >
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: 44,
                width: 120,
                filter: "grayscale(100%) opacity(0.7)",
                transition: "filter 0.25s ease, transform 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%) opacity(0.7)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="140px"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
