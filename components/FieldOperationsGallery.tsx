"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Users,
  FlaskConical,
  GraduationCap,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Building2,
  Briefcase,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export interface FieldPhoto {
  id: string;
  src: string;
  title: string;
  category: "fire" | "corporate" | "workforce" | "ghs" | "extinguisher";
  categoryLabel: string;
  color: string;
  location: string;
  description: string;
  aspect?: "landscape" | "portrait";
}

export const FIELD_PHOTOS: FieldPhoto[] = [
  // 1. High-Pressure Fire Hydrant & Water Monitor Drills (Single Curated Shot)
  {
    id: "fire-1",
    src: "/photos/fire-hydrant-drill-main.jpg",
    title: "High-Pressure Industrial Fire Hydrant Flow & Monitor Spray Drill",
    category: "fire",
    categoryLabel: "Fire Hydrant Drill",
    color: "#d9251d",
    location: "Industrial Plant Site, Gujarat",
    description: "Hands-on emergency team training conducting live water monitor discharge, branch pipe stabilization and fire hose pressure management.",
    aspect: "landscape",
  },

  // 2. Corporate & Executive Boardroom EHS Seminars (4 Unique Events)
  {
    id: "corp-1",
    src: "/photos/corporate-health-safety-seminar.jpg",
    title: "Executive 'Health & Safety Training' Corporate Seminar",
    category: "corporate",
    categoryLabel: "Corporate EHS Seminar",
    color: "#0071e3",
    location: "Corporate Training Auditorium",
    description: "Director Sachin Patel addressing plant leaders, engineers, and department heads on enterprise safety culture, regulatory compliance, and risk ownership.",
    aspect: "landscape",
  },
  {
    id: "corp-2",
    src: "/photos/corporate-safety-boardroom-training.jpg",
    title: "Data-Driven Safety Governance & 'What is Safety' Boardroom Module",
    category: "corporate",
    categoryLabel: "Corporate EHS Seminar",
    color: "#0071e3",
    location: "Industrial Enterprise Boardroom",
    description: "Executive safety briefing highlighting objective EHS metrics, root cause analysis (RCA), and leadership-level safety stewardship.",
    aspect: "landscape",
  },
  {
    id: "corp-3",
    src: "/photos/plant-safety-committee-briefing.jpg",
    title: "Plant Safety Committee Review & Engineering Layout Analysis",
    category: "corporate",
    categoryLabel: "Corporate EHS Seminar",
    color: "#0071e3",
    location: "Plant Engineering Conference Center",
    description: "Interactive review of facility blueprints, process safety barriers, and plant emergency response routes with cross-functional managers.",
    aspect: "landscape",
  },
  {
    id: "corp-4",
    src: "/photos/corporate-auditorium-ehs-lecture-1.jpg",
    title: "Statutory EHS & Process Safety Compliance Lecture",
    category: "corporate",
    categoryLabel: "Corporate EHS Seminar",
    color: "#0071e3",
    location: "Corporate Convention Auditorium",
    description: "Presentation of legal EHS registers, Factory Act requirements, safety audit checklists, and environmental governance framework.",
    aspect: "landscape",
  },

  // 3. Workforce Induction & 5S Good Housekeeping (2 Unique Sessions)
  {
    id: "work-1",
    src: "/photos/workforce-safety-training-1.jpg",
    title: "Frontline Workforce Safety Induction & 'What is Safety' Coaching",
    category: "workforce",
    categoryLabel: "Workforce Induction",
    color: "#00843d",
    location: "Industrial Training Center",
    description: "Mr. Sachin Patel delivering foundational hazard recognition, personal PPE discipline, and safety habit building to operations personnel.",
    aspect: "landscape",
  },
  {
    id: "work-2",
    src: "/photos/workforce-safety-training-2.jpg",
    title: "5S Housekeeping & Operational Hazard Prevention Workshop",
    category: "workforce",
    categoryLabel: "Workforce Induction",
    color: "#00843d",
    location: "Industrial Conference Facility",
    description: "Interactive session addressing slip/trip mitigation, chemical handling etiquette, organized storage, and frontline accountability.",
    aspect: "landscape",
  },

  // 4. Chemical Safety & GHS Hazard Classification (2 Unique Perspectives)
  {
    id: "ghs-1",
    src: "/photos/chemical-ghs-safety-training-1.jpg",
    title: "GHS Chemical Hazard Classification & Pictogram Training",
    category: "ghs",
    categoryLabel: "Chemical Safety (GHS)",
    color: "#d97706",
    location: "Chemical Manufacturing Facility",
    description: "Detailed instruction on the Globally Harmonized System (GHS), chemical toxicities, health pictograms, and Safety Data Sheet (SDS) interpretation.",
    aspect: "landscape",
  },
  {
    id: "ghs-2",
    src: "/photos/chemical-ghs-safety-training-2.jpg",
    title: "Chemical Process Safety, Spill Containment & HazCom Protocols",
    category: "ghs",
    categoryLabel: "Chemical Safety (GHS)",
    color: "#d97706",
    location: "Process Plant Training Center",
    description: "Plant workforce session on secondary containment, spill control kits, eyewash station maintenance, and toxic vapor mitigation.",
    aspect: "landscape",
  },

  // 5. Live Fire Extinguisher Discharge & School Safety Demos (13 Unique Events)
  {
    id: "ext-1",
    src: "/photos/live-fire-extinguisher-powder-spray.jpg",
    title: "Hands-On Fire Extinguisher Live Powder Discharge Demonstration",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Campus Drive",
    description: "Student actively deploying dry chemical powder extinguisher under direct guidance of Mr. Sachin Patel, mastering the PASS technique in real time.",
    aspect: "landscape",
  },
  {
    id: "ext-2",
    src: "/photos/school-assembly-live-fire-discharge.jpg",
    title: "Full Campus Assembly: Live Fire Extinguisher Discharge Exercise",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Academic Institution Campus",
    description: "Hundreds of seated students and faculty observing practical fire suppression, learning spray trajectory, wind direction, and sweep technique.",
    aspect: "landscape",
  },
  {
    id: "ext-3",
    src: "/photos/co2-fire-extinguisher-horn-demo.jpg",
    title: "CO2 Fire Extinguisher Discharge Horn & Safety Pin Demonstration",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Ground, Gujarat",
    description: "Mr. Sachin Patel explaining frostbite protection, insulated horn grip, and electrical fire suppression using carbon dioxide extinguishers.",
    aspect: "landscape",
  },
  {
    id: "ext-4",
    src: "/photos/co2-extinguisher-practical-drill.jpg",
    title: "Electrical & Gas Fire Preparedness: CO2 Practical Walkthrough",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Campus Safety Workshop",
    description: "Demonstrating how CO2 extinguishes fire by oxygen displacement without leaving chemical residue, essential for computer labs and electrical panels.",
    aspect: "landscape",
  },
  {
    id: "ext-5",
    src: "/photos/student-fire-extinguisher-training.jpg",
    title: "Student Practical Engagement: Pull Pin & Squeeze Lever Protocol",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Life Safety Drive",
    description: "Hands-on participation training students not to panic during unexpected fires and giving them muscle memory for extinguisher actuation.",
    aspect: "landscape",
  },
  {
    id: "ext-6",
    src: "/photos/school-assembly-fire-safety-demo.jpg",
    title: "Campus-Wide Emergency Evacuation & Fire Protocol Assembly",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Educational Complex, Gujarat",
    description: "Instilling early life safety habits, assembly point discipline, emergency alarm recognition, and smoke avoidance crawl techniques.",
    aspect: "landscape",
  },
  {
    id: "ext-7",
    src: "/photos/campus-fire-safety-assembly.jpg",
    title: "Interactive Open-Air Fire Prevention & Safety Mentorship",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "School Assembly Ground",
    description: "Teachers and students learning the fire triangle (Fuel, Heat, Oxygen) and methods of fire extinguishment: Starvation, Smothering, and Cooling.",
    aspect: "landscape",
  },
  {
    id: "ext-8",
    src: "/photos/school-safety-outreach-drive.jpg",
    title: "SETURAKSH Community CSR: Youth Life Safety Outreach Campaign",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Community School Campus",
    description: "Empowering educational facilities with comprehensive fire audit guidance, clear exit signs, and trained teacher marshals.",
    aspect: "landscape",
  },
  {
    id: "ext-9",
    src: "/photos/school-fire-safety-interactive-demo.jpg",
    title: "Extinguisher Gauge Inspection & Pressure Reliability Check",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Campus Ground",
    description: "Teaching facility managers and staff how to inspect pressure needle in the green zone, tamper seal integrity, and nozzle obstruction checks.",
    aspect: "landscape",
  },
  {
    id: "ext-10",
    src: "/photos/campus-fire-prevention-lecture.jpg",
    title: "Pre-Drill Fire Safety Briefing & Emergency Conduct Guidelines",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Assembly Field Pavilion",
    description: "Educating youth on calling emergency services (101 / 112), remaining calm, avoiding panic rushes, and helping elderly or younger peers.",
    aspect: "landscape",
  },
  {
    id: "ext-11",
    src: "/photos/classroom-fire-safety-briefing.jpg",
    title: "Indoor Classroom Safety Orientation & Evacuation Floor Maps",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "School Classroom Facility",
    description: "Orienting students on exit staircases, illuminated signage, never using elevators during fire emergencies, and low-smoke evacuation posture.",
    aspect: "landscape",
  },
  {
    id: "ext-12",
    src: "/photos/school-fire-extinguisher-demo-1.jpg",
    title: "Institutional Life Safety & Fire Extinguisher Demo (PASS Technique)",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "J.D. Patel Vidyalaya, Gujarat",
    description: "Mr. Sachin Patel demonstrating portable dry chemical powder fire extinguisher operation to students and teachers.",
    aspect: "landscape",
  },
  {
    id: "ext-13",
    src: "/photos/school-fire-extinguisher-demo-3.jpg",
    title: "Extinguisher Hardware Inspection & Pressure Gauge Check",
    category: "extinguisher",
    categoryLabel: "Live Extinguisher Drill",
    color: "#7e22ce",
    location: "Educational Institution, Gujarat",
    description: "Portrait view of Mr. Sachin Patel demonstrating fire extinguisher hardware components and maintenance checks.",
    aspect: "portrait",
  },
];

interface FieldOperationsGalleryProps {
  initialCategory?: "all" | "fire" | "corporate" | "workforce" | "ghs" | "extinguisher";
  limit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export default function FieldOperationsGallery({
  initialCategory = "all",
  limit,
  showFilters = true,
  title = "ON-SITE FIELD OPERATIONS & TRAINING SHOWCASE",
  subtitle = "Authentic photographs from real industrial plant audits, live fire hydrant spray drills, corporate executive seminars, chemical safety workshops and institutional life safety demonstrations.",
}: FieldOperationsGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>(initialCategory);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeTab === "all"
      ? FIELD_PHOTOS
      : FIELD_PHOTOS.filter((p) => p.category === activeTab);

  const displayPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : displayPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < displayPhotos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div id="field-operations" className="field-gallery-section" style={{ width: "100%" }}>
      {/* Section Header */}
      <div className="section-header lazy-reveal" style={{ textAlign: "center", marginBottom: 28 }}>
        <div className="badge-pill" style={{ marginBottom: 12 }}>
          <Sparkles style={{ width: 14, height: 14, color: "var(--accent-cyan)" }} />
          <span>Real Field Operations &amp; Audits</span>
        </div>
        <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.3rem)", fontWeight: 850 }}>
          {title}
        </h2>
        <p className="section-subtitle" style={{ maxWidth: 780, margin: "10px auto 0", lineHeight: 1.6 }}>
          {subtitle}
        </p>
      </div>

      {/* Category Filter Tabs */}
      {showFilters && (
        <div
          className="gallery-filter-tabs"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 32,
            flexWrap: "wrap",
            padding: "0 10px",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`gallery-filter-btn ${activeTab === "all" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "all" ? "1.5px solid #0071e3" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "all" ? "#0071e3" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "all" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "all" ? "0 4px 14px rgba(0, 113, 227, 0.3)" : "none",
            }}
          >
            <span>All Field Operations ({FIELD_PHOTOS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("fire")}
            className={`gallery-filter-btn ${activeTab === "fire" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "fire" ? "1.5px solid #d9251d" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "fire" ? "#d9251d" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "fire" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "fire" ? "0 4px 14px rgba(217, 37, 29, 0.3)" : "none",
            }}
          >
            <Flame size={14} />
            <span>Hydrant Spray Drill ({FIELD_PHOTOS.filter((p) => p.category === "fire").length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("corporate")}
            className={`gallery-filter-btn ${activeTab === "corporate" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "corporate" ? "1.5px solid #0071e3" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "corporate" ? "#0071e3" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "corporate" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "corporate" ? "0 4px 14px rgba(0, 113, 227, 0.3)" : "none",
            }}
          >
            <Building2 size={14} />
            <span>Corporate EHS ({FIELD_PHOTOS.filter((p) => p.category === "corporate").length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("workforce")}
            className={`gallery-filter-btn ${activeTab === "workforce" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "workforce" ? "1.5px solid #00843d" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "workforce" ? "#00843d" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "workforce" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "workforce" ? "0 4px 14px rgba(0, 132, 61, 0.3)" : "none",
            }}
          >
            <Users size={14} />
            <span>Workforce 5S ({FIELD_PHOTOS.filter((p) => p.category === "workforce").length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ghs")}
            className={`gallery-filter-btn ${activeTab === "ghs" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "ghs" ? "1.5px solid #d97706" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "ghs" ? "#d97706" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "ghs" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "ghs" ? "0 4px 14px rgba(217, 119, 6, 0.3)" : "none",
            }}
          >
            <FlaskConical size={14} />
            <span>Chemical GHS ({FIELD_PHOTOS.filter((p) => p.category === "ghs").length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("extinguisher")}
            className={`gallery-filter-btn ${activeTab === "extinguisher" ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 750,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeTab === "extinguisher" ? "1.5px solid #7e22ce" : "1px solid rgba(0, 0, 0, 0.08)",
              background: activeTab === "extinguisher" ? "#7e22ce" : "rgba(255, 255, 255, 0.8)",
              color: activeTab === "extinguisher" ? "#ffffff" : "#1d1d1f",
              boxShadow: activeTab === "extinguisher" ? "0 4px 14px rgba(126, 34, 206, 0.3)" : "none",
            }}
          >
            <GraduationCap size={14} />
            <span>Live Extinguisher Drills ({FIELD_PHOTOS.filter((p) => p.category === "extinguisher").length})</span>
          </button>
        </div>
      )}

      {/* Grid of Real Photos */}
      <div
        className="field-gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
          gap: 20,
        }}
      >
        {displayPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => handleOpenLightbox(idx)}
            className="field-photo-card liquid-card lazy-scale"
            style={{
              cursor: "pointer",
              padding: 0,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              borderRadius: 20,
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
              position: "relative",
            }}
          >
            {/* Image Container with Hover Zoom */}
            <div
              className="photo-thumb-wrap"
              style={{
                position: "relative",
                width: "100%",
                height: photo.aspect === "portrait" ? 280 : 210,
                overflow: "hidden",
                background: "#0f172a",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  objectPosition: photo.aspect === "portrait" ? "center 25%" : "center center",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="photo-img-zoom"
              />

              {/* Floating Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(0, 0, 0, 0.72)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  border: `1px solid ${photo.color}`,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: photo.color,
                    boxShadow: `0 0 6px ${photo.color}`,
                  }}
                />
                <span>{photo.categoryLabel}</span>
              </div>

              {/* Magnify Icon Overlay */}
              <div
                className="photo-hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.25s ease",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f172a",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>

            {/* Photo Info Content */}
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", flex: 1, gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 700 }}>
                <MapPin size={12} />
                <span>{photo.location}</span>
              </div>
              <h3
                style={{
                  fontSize: "0.96rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {photo.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  margin: "4px 0 0 0",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={handleCloseLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            background: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.2s ease both",
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            aria-label="Close photo preview"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
          >
            <X size={22} />
          </button>

          {/* Navigation: Prev */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation: Next */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 980,
              width: "100%",
              maxHeight: "92vh",
              background: "rgba(20, 24, 33, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "64vh",
                background: "#000000",
              }}
            >
              <Image
                src={displayPhotos[selectedPhotoIndex].src}
                alt={displayPhotos[selectedPhotoIndex].title}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div style={{ padding: "18px 24px", background: "rgba(15, 23, 42, 0.95)", color: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "3px 9px",
                    borderRadius: 999,
                    background: `${displayPhotos[selectedPhotoIndex].color}25`,
                    color: displayPhotos[selectedPhotoIndex].color,
                    border: `1px solid ${displayPhotos[selectedPhotoIndex].color}50`,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {displayPhotos[selectedPhotoIndex].categoryLabel}
                </span>
                <span style={{ fontSize: "0.78rem", color: "#94a3b8", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={12} />
                  <span>{displayPhotos[selectedPhotoIndex].location}</span>
                </span>
                <span style={{ fontSize: "0.75rem", color: "#64748b", marginLeft: "auto" }}>
                  {selectedPhotoIndex + 1} of {displayPhotos.length}
                </span>
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", margin: "0 0 6px 0", lineHeight: 1.3 }}>
                {displayPhotos[selectedPhotoIndex].title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#cbd5e1", margin: 0, lineHeight: 1.55 }}>
                {displayPhotos[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for hover effects */}
      <style jsx global>{`
        .field-photo-card:hover .photo-img-zoom {
          transform: scale(1.06);
        }
        .field-photo-card:hover .photo-hover-overlay {
          opacity: 1 !important;
        }
        .field-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
