"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceDivision {
  num: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    num: "01",
    title: "Strategic EHS & Statutory Compliance",
    category: "Regulatory Governance",
    image: "/images/divisions/engineers-plant-inspection.jpg",
    href: "/services?service=ehs",
  },
  {
    num: "02",
    title: "Integrity Inspection Cell",
    category: "Mechanical & Asset Defense",
    image: "/images/divisions/switch-yard-testing.jpg",
    href: "/services?service=engineering",
  },
  {
    num: "03",
    title: "Hazard Intelligence Lab",
    category: "Quantitative Risk & QRA",
    image: "/images/hero/seturaksh-psm-control-room-operations.jpg",
    href: "/services?service=process",
  },
  {
    num: "04",
    title: "Process Safety Engineering Suite",
    category: "Hazard Barrier Protection",
    image: "/images/divisions/chemical-processing-plant.jpg",
    href: "/services?service=process",
  },
  {
    num: "05",
    title: "Functional Safety Precision Division",
    category: "Safety Instrumented Systems",
    image: "/images/hero/seturaksh-corporate-governance-poster.jpg",
    href: "/services?service=engineering",
  },
  {
    num: "06",
    title: "Comprehensive Fire Engineering & Life Safety",
    category: "Active & Passive Fire Solutions",
    image: "/photos/fire-hydrant-drill-main.jpg",
    href: "/services?service=fire",
  },
  {
    num: "07",
    title: "High-Pressure Hydrant & Active Suppression",
    category: "Emergency Fire Response",
    image: "/photos/live-fire-extinguisher-powder-spray.jpg",
    href: "/services?service=fire",
  },
  {
    num: "08",
    title: "Workforce Safety Academy & Competency",
    category: "Safety Culture Transformation",
    image: "/photos/workforce-safety-training-1.jpg",
    href: "/services?service=training",
  },
  {
    num: "09",
    title: "Environmental & ESG Sustainability Cell",
    category: "Industrial Decarbonization",
    image: "/images/divisions/thermal-power-safety-audit.jpg",
    href: "/services?service=env",
  },
  {
    num: "10",
    title: "Chemical & Hazardous Material (GHS) Protocol",
    category: "Toxic Material Defense",
    image: "/photos/chemical-ghs-safety-training-1.jpg",
    href: "/services?service=process",
  },
  {
    num: "11",
    title: "Strategic Documentation & Planning Cell",
    category: "Operational Governance",
    image: "/photos/corporate-safety-boardroom-training.jpg",
    href: "/services?service=ehs",
  },
  {
    num: "12",
    title: "Infrastructure & Construction Safety Command",
    category: "Civil & Structural Protection",
    image: "/photos/field-site-safety-briefing.jpg",
    href: "/services?service=engineering",
  },
  {
    num: "13",
    title: "Engineering Safety Design Cell",
    category: "Design Safety & Loss Prevention",
    image: "/photos/fire-tender-testing-ground.jpg",
    href: "/services?service=fire",
  },
  {
    num: "14",
    title: "Digital Risk & Safety Transformation",
    category: "Smart Industrial Tech",
    image: "/images/hero/seturaksh-infrastructure-warehouse-poster.jpg",
    href: "/services?service=ehs",
  },
];

export default function ServiceArenaSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const updateScrollBoundsAndActive = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Active Card detection on scrolling using getBoundingClientRect
    const cardElements = el.querySelectorAll(".grspl-arena-card-item");
    if (!cardElements || cardElements.length === 0) return;

    const elRect = el.getBoundingClientRect();
    const containerCenter = elRect.left + elRect.width / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardElements.forEach((card, idx) => {
      const cardEl = card as HTMLElement;
      const cardRect = cardEl.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveCardIndex(closestIndex);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollBoundsAndActive, { passive: true });
    updateScrollBoundsAndActive();
    window.addEventListener("resize", updateScrollBoundsAndActive);
    return () => {
      el.removeEventListener("scroll", updateScrollBoundsAndActive);
      window.removeEventListener("resize", updateScrollBoundsAndActive);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".grspl-arena-card-item");
    if (!cards || cards.length === 0) return;

    let targetIndex = activeCardIndex;
    if (direction === "left") {
      targetIndex = Math.max(0, activeCardIndex - 1);
    } else {
      targetIndex = Math.min(SERVICE_DIVISIONS.length - 1, activeCardIndex + 1);
    }

    const targetCard = cards[targetIndex] as HTMLElement | undefined;
    if (targetCard) {
      const elRect = el.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();
      const currentScroll = el.scrollLeft;
      const offset = (cardRect.left + cardRect.width / 2) - (elRect.left + elRect.width / 2);
      el.scrollTo({
        left: currentScroll + offset,
        behavior: "smooth",
      });
      setActiveCardIndex(targetIndex);
    } else {
      const cardEl = el.querySelector(".grspl-arena-card-item") as HTMLElement | null;
      const scrollAmount = cardEl ? cardEl.offsetWidth + 20 : el.clientWidth * 0.75;
      const targetScroll =
        direction === "left" ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount;
      el.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Subtle auto-scroll every 5s when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: scrollLeft + 320, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="service-arena"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #131f36 0%, #172744 50%, #101c30 100%)",
        padding: "90px 0 100px 0",
        overflow: "hidden",
      }}
    >
      {/* Apple Liquid Glass Ambient Backlight Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          left: "20%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(0, 242, 254, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "15%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.14) 0%, rgba(229, 9, 20, 0) 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ maxWidth: "1400px", position: "relative", zIndex: 5 }}>
        {/* Section Header matching exact GRSPL Image 2 & 3 in Apple Liquid Theme */}
        <div
          className="arena-header-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          {/* Subtitle with delta icon: ⟁ OUR SERVICE ARENA in Liquid Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#ff4d4f",
              background: "rgba(229, 9, 20, 0.15)",
              border: "1px solid rgba(229, 9, 20, 0.38)",
              borderRadius: "9999px",
              padding: "6px 18px",
              fontWeight: 850,
              fontSize: "0.82rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 4px 16px rgba(229, 9, 20, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
            }}
          >
            <span style={{ fontSize: "0.75rem", transform: "translateY(-1px)" }}>▲</span>
            <span>OUR SERVICE ARENA</span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
              fontWeight: 850,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
              textShadow: "0 2px 14px rgba(0, 0, 0, 0.4)",
            }}
          >
            Crafted for Resilience
          </h2>

          {/* Navigation Arrows positioned on the right on Desktop, Centered on Mobile */}
          <div
            className="arena-header-arrows"
            style={{
              position: "absolute",
              right: 0,
              bottom: 4,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous services"
              className="arena-nav-btn arena-nav-prev"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: canScrollLeft ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: canScrollLeft ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollLeft ? "pointer" : "default",
                boxShadow: canScrollLeft ? "0 6px 20px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)" : "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(229, 9, 20, 0.5), inset 0 1px 1.5px rgba(255, 255, 255, 0.6)";
                }
              }}
              onMouseLeave={(e) => {
                if (canScrollLeft) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)";
                }
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Mobile Active Division Counter Pill */}
            <div className="arena-mobile-counter">
              <span className="counter-curr">{SERVICE_DIVISIONS[activeCardIndex]?.num || "01"}</span>
              <span className="counter-div">/</span>
              <span className="counter-total">{String(SERVICE_DIVISIONS.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next services"
              className="arena-nav-btn arena-nav-next"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: canScrollRight ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: canScrollRight ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollRight ? "pointer" : "default",
                boxShadow: canScrollRight ? "0 6px 20px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)" : "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e50914 0%, #c20101 100%)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(229, 9, 20, 0.5), inset 0 1px 1.5px rgba(255, 255, 255, 0.6)";
                }
              }}
              onMouseLeave={(e) => {
                if (canScrollRight) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.25), inset 0 1px 1.2px rgba(255, 255, 255, 0.4)";
                }
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track matching Image 2 & 3 */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: "relative",
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "8px 2px 24px 2px",
          }}
          className="hide-scrollbar grspl-scroll-track"
        >
          {SERVICE_DIVISIONS.map((svc, index) => {
            const isCardActive = activeCardIndex === index;
            return (
              <Link
                key={svc.num}
                href={svc.href}
                className={`grspl-arena-card-item ${isCardActive ? "card-in-view-active" : ""}`}
                style={{
                  flex: "0 0 clamp(270px, 80vw, 320px)",
                  scrollSnapAlign: "center",
                  background: "#ffffff",
                  borderRadius: "2px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  position: "relative",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.28), inset 0 1px 1.5px rgba(255, 255, 255, 0.95)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
              {/* Flat Red Sequence Badge at Top-Left */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  background: "#c20101",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 800,
                  width: 44,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0px",
                }}
              >
                {svc.num}
              </div>

              {/* White spacer at top */}
              <div style={{ height: "38px", background: "#ffffff" }} />

              {/* Slanted Image Container with Slow Morphing Animation */}
              <div
                className="grspl-image-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  overflow: "hidden",
                  background: "#ffffff",
                }}
              >
                {/* Diagonal Cut Polygon */}
                <div
                  className="grspl-morph-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="350px"
                    style={{
                      objectFit: "cover",
                    }}
                    className="grspl-card-photo"
                  />
                </div>

                {/* White Arrow Box with Red >> in Bottom-Right Corner */}
                <div
                  className="grspl-arrow-badge"
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    zIndex: 6,
                    width: 36,
                    height: 36,
                    background: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c20101",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  »
                </div>
              </div>

              {/* Card Title Area with Red Vertical Pip on Left */}
              <div
                style={{
                  padding: "24px 20px 32px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  background: "#ffffff",
                  flexGrow: 1,
                }}
              >
                {/* Red Vertical Bar */}
                <span
                  style={{
                    width: 3,
                    minWidth: 3,
                    height: 20,
                    background: "#c20101",
                    marginTop: 3,
                    flexShrink: 0,
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 750,
                    color: "#0f172a",
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.title}
                </h3>
              </div>
            </Link>
          );
        })}
        </div>
      </div>

      {/* Global CSS for GRSPL Slanted Image Morph on Hover */}
      <style jsx global>{`
        /* 1. Initial State: Slanted / Angled Image Cut */
        .grspl-morph-container {
          -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 82%, 0% 100%);
          clip-path: polygon(0% 18%, 100% 0%, 100% 82%, 0% 100%);
          -webkit-transition: -webkit-clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          transition: clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1), -webkit-clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: clip-path;
        }

        .grspl-card-photo {
          -webkit-transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        /* 2. Hover, Touch Active & In-View Scroll Active State: Image Slowly Opens to Full Rectangle like GRSPL */
        .grspl-arena-card-item:hover .grspl-morph-container,
        .grspl-arena-card-item:active .grspl-morph-container,
        .grspl-arena-card-item.card-in-view-active .grspl-morph-container {
          -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
        }

        .grspl-arena-card-item:hover .grspl-card-photo,
        .grspl-arena-card-item:active .grspl-card-photo,
        .grspl-arena-card-item.card-in-view-active .grspl-card-photo {
          transform: scale(1.08);
        }

        /* 3. Card Elevation on Hover, Press feedback & In-View Scroll Active */
        .grspl-arena-card-item:hover,
        .grspl-arena-card-item.card-in-view-active {
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.38) !important;
        }

        .grspl-arena-card-item:hover {
          transform: translateY(-6px);
        }

        .grspl-arena-card-item:active {
          transform: scale(0.97) !important;
        }

        /* 4. Arrow Badge Transitions to Solid Red on Hover, Active & In-View Scroll Active */
        .grspl-arena-card-item:hover .grspl-arrow-badge,
        .grspl-arena-card-item:active .grspl-arrow-badge,
        .grspl-arena-card-item.card-in-view-active .grspl-arrow-badge {
          background: #c20101 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 14px rgba(194, 1, 1, 0.45) !important;
        }

        .arena-mobile-counter {
          display: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Mobile Viewport (< 768px): Proper Centered Arrow Alignment & Ergonomics */
        @media (max-width: 768px) {
          .arena-header-container {
            margin-bottom: 24px !important;
          }

          .arena-header-arrows {
            position: static !important;
            margin-top: 18px !important;
            display: flex !important;
            align-items: center !important;
            justifyContent: center !important;
            gap: 14px !important;
          }

          .arena-mobile-counter {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            padding: 7px 16px !important;
            background: rgba(255, 255, 255, 0.08) !important;
            border: 1px solid rgba(255, 255, 255, 0.22) !important;
            border-radius: 9999px !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.35) !important;
            font-size: 0.88rem !important;
            font-weight: 750 !important;
            color: #ffffff !important;
            letter-spacing: 0.06em !important;
          }

          .counter-curr {
            color: #ff4d4f !important;
            font-weight: 850 !important;
          }

          .counter-div {
            opacity: 0.4 !important;
          }

          .counter-total {
            opacity: 0.75 !important;
          }

          .arena-nav-btn {
            width: 44px !important;
            height: 44px !important;
          }

          .arena-nav-btn:active {
            transform: scale(0.92) !important;
            background: linear-gradient(135deg, #e50914 0%, #c20101 100%) !important;
          }

          .grspl-scroll-track {
            padding-left: max(16px, calc((100vw - clamp(270px, 80vw, 320px)) / 2)) !important;
            padding-right: max(16px, calc((100vw - clamp(270px, 80vw, 320px)) / 2)) !important;
          }
        }
      `}</style>
    </section>
  );
}
