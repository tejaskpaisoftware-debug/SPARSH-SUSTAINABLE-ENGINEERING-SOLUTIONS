import React from "react";
import Image from "next/image";

interface SeturakshLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  subtitle?: string;
  className?: string;
}

export default function SeturakshLogo({
  size = "md",
  showText = true,
  subtitle = "SUSTAINABLE EngiSafe",
  className = "",
}: SeturakshLogoProps) {
  // Sizing configurations
  const iconPixelSize = size === "sm" ? 40 : size === "lg" ? 58 : size === "xl" ? 82 : 48;
  const titleSize = size === "sm" ? "1.05rem" : size === "lg" ? "1.42rem" : size === "xl" ? "1.85rem" : "1.18rem";
  const subSize = size === "sm" ? "0.62rem" : size === "lg" ? "0.74rem" : size === "xl" ? "0.85rem" : "0.66rem";

  return (
    <div
      className={`seturaksh-logo-wrap ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size === "sm" ? 10 : size === "xl" ? 16 : 12,
        textDecoration: "none",
        userSelect: "none",
      }}
    >
      {/* 3D Masterpiece Emblem Badge (Physical Titanium Shield + Golden Setu Bridge + Emerald Crystal Leaf) */}
      <div
        className="seturaksh-3d-badge-container"
        style={{
          width: iconPixelSize,
          height: iconPixelSize,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Image
          src="/seturaksh-logo.png"
          alt="SETURAKSH Logo"
          width={iconPixelSize}
          height={iconPixelSize}
          priority
          className="seturaksh-3d-emblem-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 12px rgba(0, 113, 227, 0.22))",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease",
          }}
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="seturaksh-text-col" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              className="seturaksh-title"
              style={{
                fontFamily: "var(--font-display, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif)",
                fontSize: titleSize,
                fontWeight: 850,
                letterSpacing: "0.03em",
                lineHeight: 1.1,
                color: "#1d1d1f",
              }}
            >
              SETURAKSH
            </span>
            <span
              className="seturaksh-pvt-badge"
              style={{
                fontSize: "0.55rem",
                fontWeight: 800,
                letterSpacing: "0.07em",
                padding: "2px 6px",
                borderRadius: 5,
                background: "linear-gradient(135deg, rgba(0, 113, 227, 0.1), rgba(16, 124, 65, 0.1))",
                border: "1px solid rgba(0, 113, 227, 0.2)",
                color: "#0071e3",
                textTransform: "uppercase",
              }}
            >
              PVT LTD
            </span>
          </div>
          <span
            className="seturaksh-sub"
            style={{
              fontSize: subSize,
              fontWeight: 700,
              letterSpacing: "0.09em",
              color: "#107c41",
              textTransform: "uppercase",
              lineHeight: 1.2,
              marginTop: 2,
            }}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
