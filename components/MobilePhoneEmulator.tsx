"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Battery,
  Flame,
  AlertTriangle,
  Play,
  Pause,
  ExternalLink,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Search,
} from "lucide-react";

interface ServiceItem {
  id: string;
  step: string;
  category: string;
  title: string;
  tagline: string;
  color: string;
  bgTint: string;
  borderColor: string;
  image: string;
  bullets: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ehs",
    step: "01",
    category: "CONSULTANCY",
    title: "EHS Management & Compliance",
    tagline: "Systems & Legal Compliance",
    color: "#00843d",
    bgTint: "rgba(0, 132, 61, 0.06)",
    borderColor: "rgba(0, 132, 61, 0.2)",
    image: "/service-ehs.png",
    bullets: [
      "EHSMS review & legal compliance support",
      "Hazard identification (HIRA / JSA)",
      "Contractor safety management & oversight",
      "Incident investigation & Root Cause (RCA)",
    ],
  },
  {
    id: "fire",
    step: "02",
    category: "FIRE & LIFE SAFETY",
    title: "Fire Safety & Emergency",
    tagline: "Audits & Emergency Plans",
    color: "#d9251d",
    bgTint: "rgba(217, 37, 29, 0.06)",
    borderColor: "rgba(217, 37, 29, 0.2)",
    image: "/service-fire.png",
    bullets: [
      "Comprehensive Fire Risk Assessments (FRA)",
      "Industrial fire safety audits & gap analysis",
      "Fire protection & hydrant system reviews",
      "Emergency action plans & mock drills",
    ],
  },
  {
    id: "process",
    step: "03",
    category: "PROCESS SAFETY",
    title: "Process Safety Management",
    tagline: "PSM, HAZOP & MOC",
    color: "#d97706",
    bgTint: "rgba(217, 119, 6, 0.06)",
    borderColor: "rgba(217, 119, 6, 0.2)",
    image: "/service-process.png",
    bullets: [
      "HAZID & HAZOP facilitation & reviews",
      "Management of Change (MOC) systems",
      "Pre-Startup Safety Reviews (PSSR)",
      "LOPA support & critical SOP verification",
    ],
  },
  {
    id: "training",
    step: "04",
    category: "COMPETENCY",
    title: "Training & Competency",
    tagline: "Induction, BBS & Drills",
    color: "#7e22ce",
    bgTint: "rgba(126, 34, 206, 0.06)",
    borderColor: "rgba(126, 34, 206, 0.2)",
    image: "/service-risk.png",
    bullets: [
      "Workforce safety induction & orientation",
      "Hands-on fire safety & suppression drills",
      "Emergency response team coordination",
      "Behavior-Based Safety (BBS) programs",
    ],
  },
  {
    id: "env",
    step: "05",
    category: "SUSTAINABILITY",
    title: "Environment & Sustainability",
    tagline: "Consent, Waste & ESG",
    color: "#0d8a43",
    bgTint: "rgba(13, 138, 67, 0.06)",
    borderColor: "rgba(13, 138, 67, 0.2)",
    image: "/service-env.png",
    bullets: [
      "Statutory environmental consent & compliance",
      "Hazardous waste handling guidance",
      "Sustainability initiatives & decarbonization",
      "ESG advisory support & materiality audits",
    ],
  },
  {
    id: "engineering",
    step: "06",
    category: "ENGINEERING",
    title: "Engineering & Project Safety",
    tagline: "Design Risk & PTW/LOTO",
    color: "#0066cc",
    bgTint: "rgba(0, 102, 204, 0.06)",
    borderColor: "rgba(0, 102, 204, 0.2)",
    image: "/service-engineering.png",
    bullets: [
      "Greenfield & brownfield design safety reviews",
      "Construction safety & work at height audits",
      "Permit-to-Work (PTW) & Lockout-Tagout (LOTO)",
      "Pre-commissioning risk engineering checks",
    ],
  },
  {
    id: "products",
    step: "07",
    category: "PRODUCT SUPPLY",
    title: "Fire, Safety & Equipment Supply",
    tagline: "Fire, PPE, LOTO & Engineering Goods",
    color: "#0284c7",
    bgTint: "rgba(2, 132, 199, 0.06)",
    borderColor: "rgba(2, 132, 199, 0.2)",
    image: "/seturaksh-logo.png",
    bullets: [
      "Fire extinguishers, hoses, nozzles & blankets",
      "Certified head-to-toe industrial PPE supplies",
      "LOTO hardware kits & gas detection monitors",
      "Chemical spill kits, booms & containment goods",
    ],
  },
];

export default function MobilePhoneEmulator() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "consultancy" | "supply">("all");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredServices =
    activeTab === "consultancy"
      ? SERVICES_DATA.filter((s) => s.category !== "PRODUCT SUPPLY")
      : activeTab === "supply"
      ? SERVICES_DATA.filter((s) => s.category === "PRODUCT SUPPLY")
      : SERVICES_DATA;

  // Auto-scroll loop effect
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.65; // pixels per frame

    const step = () => {
      if (isPlaying && el) {
        el.scrollTop += speed;
        // When halfway through the duplicated list, reset smoothly to top
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  return (
    <div className="mobile-emulator-wrapper">
      {/* Ambient Radial Halo behind device */}
      <div className="emulator-ambient-glow" />

      {/* Floating Indicator Pill Badge */}
      <div className="emulator-status-floating-pill">
        <span className="emulator-live-dot" />
        <span>Live Interactive Mobile Emulator</span>
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="emulator-pause-btn"
          title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
        >
          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      {/* Smartphone Chassis Frame (Titanium Style) */}
      <div className="smartphone-device">
        {/* Hardware Action & Volume Buttons on Left Side */}
        <div className="phone-hardware-btn hardware-btn-silent" />
        <div className="phone-hardware-btn hardware-btn-volup" />
        <div className="phone-hardware-btn hardware-btn-voldown" />
        {/* Hardware Power Button on Right Side */}
        <div className="phone-hardware-btn hardware-btn-power" />

        {/* Glossy Screen Rim & Metallic Bezel */}
        <div className="smartphone-inner-bezel">
          {/* Top Dynamic Island Notch */}
          <div className="dynamic-island-notch">
            <div className="island-camera-lens" />
            <div className="island-active-dot" />
          </div>

          {/* Screen Display Container */}
          <div className="smartphone-screen">
            {/* 1. Mobile Status Bar */}
            <div className="phone-status-bar">
              <span className="status-time">9:41</span>
              <div className="status-icons">
                <span className="status-cell">5G</span>
                <Wifi size={13} className="status-wifi" />
                <Battery size={15} className="status-battery" />
              </div>
            </div>

            {/* 2. Mobile In-App Header */}
            <div className="phone-app-header">
              <div className="phone-app-brand">
                <div className="phone-brand-logo-wrap">
                  <Image
                    src="/seturaksh-logo.png"
                    alt="SETURAKSH Logo"
                    width={26}
                    height={26}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div className="phone-brand-title">SETURAKSH</div>
                  <div className="phone-brand-sub">SUSTAINABLE ENGISAFE</div>
                </div>
              </div>
              <div className="phone-header-live-badge">
                <span className="live-pulse-dot" />
                <span>ACTIVE</span>
              </div>
            </div>

            {/* 3. Top Banner Strip inside phone */}
            <div className="phone-banner-strip">
              <div className="phone-banner-text">
                <span className="phone-tagline-lead">Engineering Safety.</span> Managing Risk.
              </div>
              <span className="phone-banner-tag">EHS &amp; SUPPLY HUB</span>
            </div>

            {/* 4. Filter Category Pills */}
            <div className="phone-category-nav">
              <button
                type="button"
                className={`phone-cat-pill ${activeTab === "all" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("all");
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                }}
              >
                All (7)
              </button>
              <button
                type="button"
                className={`phone-cat-pill ${activeTab === "consultancy" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("consultancy");
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                }}
              >
                Consulting
              </button>
              <button
                type="button"
                className={`phone-cat-pill ${activeTab === "supply" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("supply");
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                }}
              >
                Product Supply
              </button>
            </div>

            {/* 5. Smooth Auto-Scrolling Feed of Service Cards (Duplicated for Seamless Infinite Loop) */}
            <div
              ref={scrollContainerRef}
              className="phone-feed-scrollable"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
              onTouchStart={() => setIsPlaying(false)}
              onTouchEnd={() => setIsPlaying(true)}
            >
              {/* Loop Set A */}
              {filteredServices.map((srv, idx) => (
                <div
                  key={`set-a-${srv.id}-${idx}`}
                  className="phone-service-card"
                  style={{
                    borderLeft: `3.5px solid ${srv.color}`,
                    background: srv.bgTint,
                  }}
                >
                  <div className="phone-card-header">
                    <div className="phone-card-icon-wrap">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        width={30}
                        height={30}
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                    </div>
                    <div className="phone-card-titles">
                      <div className="phone-card-meta">
                        <span
                          className="phone-step-chip"
                          style={{ background: `${srv.color}18`, color: srv.color }}
                        >
                          STEP {srv.step}
                        </span>
                        <span className="phone-cat-label" style={{ color: srv.color }}>
                          {srv.category}
                        </span>
                      </div>
                      <h4 className="phone-card-h4">{srv.title}</h4>
                      <p className="phone-card-tagline">{srv.tagline}</p>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="phone-card-bullets">
                    {srv.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2
                          size={11}
                          style={{ color: srv.color, flexShrink: 0, marginTop: 2 }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link inside card */}
                  <div className="phone-card-footer">
                    <Link
                      href={srv.id === "products" ? "/services#products" : `/services?service=${srv.id}`}
                      className="phone-card-btn"
                      style={{ color: srv.color, borderColor: `${srv.color}35` }}
                    >
                      <span>Explore Scope</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Loop Set B (for infinite marquee effect) */}
              {filteredServices.map((srv, idx) => (
                <div
                  key={`set-b-${srv.id}-${idx}`}
                  className="phone-service-card"
                  style={{
                    borderLeft: `3.5px solid ${srv.color}`,
                    background: srv.bgTint,
                  }}
                >
                  <div className="phone-card-header">
                    <div className="phone-card-icon-wrap">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        width={30}
                        height={30}
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                    </div>
                    <div className="phone-card-titles">
                      <div className="phone-card-meta">
                        <span
                          className="phone-step-chip"
                          style={{ background: `${srv.color}18`, color: srv.color }}
                        >
                          STEP {srv.step}
                        </span>
                        <span className="phone-cat-label" style={{ color: srv.color }}>
                          {srv.category}
                        </span>
                      </div>
                      <h4 className="phone-card-h4">{srv.title}</h4>
                      <p className="phone-card-tagline">{srv.tagline}</p>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="phone-card-bullets">
                    {srv.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2
                          size={11}
                          style={{ color: srv.color, flexShrink: 0, marginTop: 2 }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link inside card */}
                  <div className="phone-card-footer">
                    <Link
                      href={srv.id === "products" ? "/services#products" : `/services?service=${srv.id}`}
                      className="phone-card-btn"
                      style={{ color: srv.color, borderColor: `${srv.color}35` }}
                    >
                      <span>Explore Scope</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. In-App Floating Quick-Contact Ribbon */}
            <div className="phone-bottom-cta-ribbon">
              <Link href="/contact" className="phone-audit-pill-cta">
                <ShieldCheck size={13} />
                <span>Book Facility Audit</span>
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* 7. Bottom Home Indicator Bar */}
            <div className="phone-home-indicator-wrap">
              <div className="phone-home-indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
