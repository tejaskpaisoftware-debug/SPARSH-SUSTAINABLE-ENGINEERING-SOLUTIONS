import React from "react";
import Image from "next/image";

interface SeturakshLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  subtitle?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function SeturakshLogo({
  size = "md",
  showText = true,
  subtitle = "SUSTAINABLE EngiSafe Pvt. Ltd.",
  className = "",
  theme = "light",
}: SeturakshLogoProps) {
  const iconPixelSize = size === "sm" ? 38 : size === "lg" ? 56 : size === "xl" ? 76 : 46;
  const titleSize = size === "sm" ? "1.1rem" : size === "lg" ? "1.45rem" : size === "xl" ? "1.85rem" : "1.28rem";
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
      <div
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
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: titleSize,
              fontWeight: 950,
              letterSpacing: "0.03em",
              lineHeight: 1.1,
              color: theme === "dark" ? "#ffffff" : "var(--industrial-navy)",
            }}
          >
            SETURAKSH
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 800,
              letterSpacing: "0.1em",
              lineHeight: 1.2,
              color: "var(--primary-red)",
              textTransform: "uppercase",
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
