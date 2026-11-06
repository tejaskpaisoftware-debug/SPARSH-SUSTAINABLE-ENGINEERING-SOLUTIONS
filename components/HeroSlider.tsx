"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Flame, Award, CheckCircle2 } from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero/seturaksh-ehs-chemical-plant-inspection.jpg",
    tag: "STATUTORY EHS & PROCESS SAFETY COMPLIANCE",
    title: "ENGINEERING SAFETY. MANAGING RISK. PROTECTING LIFE.",
    subtitle:
      "Comprehensive EHS consultancy, statutory DISH & PESO compliance audits, and root cause analysis engineered for chemical, pharmaceutical, and manufacturing plants across Gujarat and Pan-India.",
    primaryCtaText: "SCHEDULE FACILITY AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "EXPLORE SERVICES",
    secondaryCtaLink: "/services",
  },
  {
    id: "slide-2",
    image: "/images/hero/seturaksh-industrial-fire-drill.jpg",
    tag: "COMPREHENSIVE FIRE ENGINEERING & LIFE SAFETY",
    title: "PRACTICAL EMERGENCY DRILLS & HYDRANT PROTECTION",
    subtitle:
      "From high-pressure industrial hydrant flow testing to live PASS extinguisher workforce training — we build verifiable on-the-ground emergency readiness for zero harm.",
    primaryCtaText: "REQUEST FIRE AUDIT",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WATCH FIELD DRILLS",
    secondaryCtaLink: "/#field-operations",
  },
  {
    id: "slide-3",
    image: "/images/hero/seturaksh-psm-control-room-operations.jpg",
    tag: "PROCESS SAFETY MANAGEMENT (PSM) SUITE",
    title: "HAZARD INTELLIGENCE & BARRIER INTEGRITY",
    subtitle:
      "HAZOP study facilitation, Management of Change (MOC), Pre-Startup Safety Reviews (PSSR), and Quantitative Risk Assessments led by 20+ years accredited safety professionals.",
    primaryCtaText: "GET INSPECTION QUOTE",
    primaryCtaLink: "/contact",
    secondaryCtaText: "WHY SETURAKSH",
    secondaryCtaLink: "/why-sparsh",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div
      className="grspl-hero-slider-wrap"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "84vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#060b10",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : 0,
              transition: "opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
              zIndex: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {/* Bespoke 4K Landscape Backdrop Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center 45%",
                transform: isActive ? "scale(1.03)" : "scale(1)",
                transition: "transform 7s ease-out",
              }}
            />

            {/* Cinematic Multi-Layered Industrial Gradients */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(6, 11, 16, 0.94) 0%, rgba(6, 11, 16, 0.82) 45%, rgba(6, 11, 16, 0.45) 80%, rgba(6, 11, 16, 0.65) 100%)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(6, 11, 16, 0.65) 0%, transparent 40%, rgba(6, 11, 16, 0.9) 100%)",
                zIndex: 2,
              }}
            />
          </div>
        );
      })}

      {/* Main Slide Content Container */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "60px",
          paddingBottom: "60px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 880 }}>
          {/* Red Tagline (Seturaksh Bespoke Branding) */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)",
              fontWeight: 900,
              letterSpacing: "0.14em",
              color: "#E50914",
              textTransform: "uppercase",
              marginBottom: 14,
              animation: "fadeInUp 0.6s ease-out",
            }}
          >
            <span>{HERO_SLIDES[currentSlide].tag}</span>
          </div>

          {/* Huge Bold Uppercase Title */}
          <h1
            style={{
              fontSize: "clamp(2.3rem, 5.2vw, 4.2rem)",
              fontWeight: 950,
              letterSpacing: "-0.01em",
              lineHeight: 1.12,
              color: "#ffffff",
              textTransform: "uppercase",
              marginBottom: 20,
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.85)",
            }}
          >
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Lead Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              color: "rgba(255, 255, 255, 0.92)",
              lineHeight: 1.65,
              maxWidth: 740,
              marginBottom: 36,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* Dual CTAs matching Seturaksh Branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              href={HERO_SLIDES[currentSlide].primaryCtaLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px 36px",
                background: "#c20101",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 900,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 4,
                boxShadow: "0 6px 20px rgba(194, 1, 1, 0.45)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#990101";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c20101";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>{HERO_SLIDES[currentSlide].primaryCtaText}</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href={HERO_SLIDES[currentSlide].secondaryCtaLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "15px 30px",
                background: "rgba(10, 17, 24, 0.7)",
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 4,
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c20101";
                e.currentTarget.style.background = "rgba(194, 1, 1, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.background = "rgba(10, 17, 24, 0.7)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>{HERO_SLIDES[currentSlide].secondaryCtaText}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrow Controls: Left (<) and Right (>) */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: 18,
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(6, 11, 16, 0.55)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          backdropFilter: "blur(6px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c20101";
          e.currentTarget.style.borderColor = "#c20101";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(6, 11, 16, 0.55)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: 18,
          transform: "translateY(-50%)",
          zIndex: 20,
          background: "rgba(6, 11, 16, 0.55)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          backdropFilter: "blur(6px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c20101";
          e.currentTarget.style.borderColor = "#c20101";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(6, 11, 16, 0.55)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators Dots (Bottom Center) */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: currentSlide === i ? 34 : 10,
              height: 6,
              borderRadius: 3,
              background: currentSlide === i ? "#c20101" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
