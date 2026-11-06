"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show quick high-end corporate entrance then fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 700);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#0a1118",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.3s ease-out",
        pointerEvents: "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ width: 68, height: 68, position: "relative" }}>
          <Image
            src="/seturaksh-logo.png"
            alt="SETURAKSH Logo"
            width={68}
            height={68}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: 950,
              letterSpacing: "0.08em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            SETURAKSH
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 850,
              letterSpacing: "0.18em",
              color: "var(--primary-red)",
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            SUSTAINABLE ENGISAFE PVT. LTD.
          </div>
        </div>
      </div>
    </div>
  );
}
