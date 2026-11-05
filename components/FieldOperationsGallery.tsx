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
  MapPin,
  CheckCircle2,
  Film,
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
    categoryLabel: "Hydrant Spray Drill",
    color: "#E50914",
    location: "Industrial Plant Site, Gujarat",
    description:
      "Hands-on emergency team training conducting live water monitor discharge, branch pipe stabilization and fire hose pressure management.",
    aspect: "landscape",
  },

  // 2. Corporate & Executive Boardroom EHS Seminars (4 Unique Events)
  {
    id: "corp-1",
    src: "/photos/corporate-health-safety-seminar.jpg",
    title: "Executive 'Health & Safety Training' Corporate Seminar",
    category: "corporate",
    categoryLabel: "Corporate EHS",
    color: "#0071e3",
    location: "Corporate Training Auditorium",
    description:
      "Director Sachin Patel addressing plant leaders, engineers, and department heads on enterprise safety culture, regulatory compliance, and risk ownership.",
    aspect: "landscape",
  },
  {
    id: "corp-2",
    src: "/photos/corporate-safety-boardroom-training.jpg",
    title: "Data-Driven Safety Governance & 'What is Safety' Boardroom Module",
    category: "corporate",
    categoryLabel: "Corporate EHS",
    color: "#0071e3",
    location: "Industrial Enterprise Boardroom",
    description:
      "Executive safety briefing highlighting objective EHS metrics, root cause analysis (RCA), and leadership-level safety stewardship.",
    aspect: "landscape",
  },
  {
    id: "corp-3",
    src: "/photos/plant-safety-committee-briefing.jpg",
    title: "Plant Safety Committee Review & Engineering Layout Analysis",
    category: "corporate",
    categoryLabel: "Corporate EHS",
    color: "#0071e3",
    location: "Plant Engineering Conference Center",
    description:
      "Interactive review of facility blueprints, process safety barriers, and plant emergency response routes with cross-functional managers.",
    aspect: "landscape",
  },
  {
    id: "corp-4",
    src: "/photos/corporate-auditorium-ehs-lecture-1.jpg",
    title: "Statutory EHS & Process Safety Compliance Lecture",
    category: "corporate",
    categoryLabel: "Corporate EHS",
    color: "#0071e3",
    location: "Corporate Convention Auditorium",
    description:
      "Presentation of legal EHS registers, Factory Act requirements, safety audit checklists, and environmental governance framework.",
    aspect: "landscape",
  },

  // 3. Workforce Induction & 5S Good Housekeeping (2 Unique Sessions)
  {
    id: "work-1",
    src: "/photos/workforce-safety-training-1.jpg",
    title: "Frontline Workforce Safety Induction & 'What is Safety' Coaching",
    category: "workforce",
    categoryLabel: "Workforce 5S",
    color: "#00843d",
    location: "Industrial Training Center",
    description:
      "Mr. Sachin Patel delivering foundational hazard recognition, personal PPE discipline, and safety habit building to operations personnel.",
    aspect: "landscape",
  },
  {
    id: "work-2",
    src: "/photos/workforce-safety-training-2.jpg",
    title: "5S Housekeeping & Operational Hazard Prevention Workshop",
    category: "workforce",
    categoryLabel: "Workforce 5S",
    color: "#00843d",
    location: "Industrial Conference Facility",
    description:
      "Interactive session addressing slip/trip mitigation, chemical handling etiquette, organized storage, and frontline accountability.",
    aspect: "landscape",
  },

  // 4. Chemical Safety & GHS Hazard Classification (2 Unique Perspectives)
  {
    id: "ghs-1",
    src: "/photos/chemical-ghs-safety-training-1.jpg",
    title: "GHS Chemical Hazard Classification & Pictogram Training",
    category: "ghs",
    categoryLabel: "Chemical GHS",
    color: "#d97706",
    location: "Chemical Manufacturing Facility",
    description:
      "Detailed instruction on the Globally Harmonized System (GHS), chemical toxicities, health pictograms, and Safety Data Sheet (SDS) interpretation.",
    aspect: "landscape",
  },
  {
    id: "ghs-2",
    src: "/photos/chemical-ghs-safety-training-2.jpg",
    title: "Chemical Process Safety, Spill Containment & HazCom Protocols",
    category: "ghs",
    categoryLabel: "Chemical GHS",
    color: "#d97706",
    location: "Process Plant Training Center",
    description:
      "Plant workforce session on secondary containment, spill control kits, eyewash station maintenance, and toxic vapor mitigation.",
    aspect: "landscape",
  },

  // 5. Live Fire Extinguisher Discharge & School Safety Demos (13 Unique Events)
  {
    id: "ext-1",
    src: "/photos/live-fire-extinguisher-powder-spray.jpg",
    title: "Hands-On Fire Extinguisher Live Powder Discharge Demonstration",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Campus Drive",
    description:
      "Student actively deploying dry chemical powder extinguisher under direct guidance of Mr. Sachin Patel, mastering the PASS technique in real time.",
    aspect: "landscape",
  },
  {
    id: "ext-2",
    src: "/photos/school-assembly-live-fire-discharge.jpg",
    title: "Full Campus Assembly: Live Fire Extinguisher Discharge Exercise",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Academic Institution Campus",
    description:
      "Hundreds of seated students and faculty observing practical fire suppression, learning spray trajectory, wind direction, and sweep technique.",
    aspect: "landscape",
  },
  {
    id: "ext-3",
    src: "/photos/co2-fire-extinguisher-horn-demo.jpg",
    title: "CO2 Fire Extinguisher Discharge Horn & Safety Pin Demonstration",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Ground, Gujarat",
    description:
      "Mr. Sachin Patel explaining frostbite protection, insulated horn grip, and electrical fire suppression using carbon dioxide extinguishers.",
    aspect: "landscape",
  },
  {
    id: "ext-4",
    src: "/photos/co2-extinguisher-practical-drill.jpg",
    title: "Electrical & Gas Fire Preparedness: CO2 Practical Walkthrough",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Campus Safety Workshop",
    description:
      "Demonstrating how CO2 extinguishes fire by oxygen displacement without leaving chemical residue, essential for computer labs and electrical panels.",
    aspect: "landscape",
  },
  {
    id: "ext-5",
    src: "/photos/student-fire-extinguisher-training.jpg",
    title: "Student Practical Engagement: Pull Pin & Squeeze Lever Protocol",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Life Safety Drive",
    description:
      "Hands-on participation training students not to panic during unexpected fires and giving them muscle memory for extinguisher actuation.",
    aspect: "landscape",
  },
  {
    id: "ext-6",
    src: "/photos/school-assembly-fire-safety-demo.jpg",
    title: "Campus-Wide Emergency Evacuation & Fire Protocol Assembly",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Educational Complex, Gujarat",
    description:
      "Instilling early life safety habits, assembly point discipline, emergency alarm recognition, and smoke avoidance crawl techniques.",
    aspect: "landscape",
  },
  {
    id: "ext-7",
    src: "/photos/campus-fire-safety-assembly.jpg",
    title: "Interactive Open-Air Fire Prevention & Safety Mentorship",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "School Assembly Ground",
    description:
      "Teachers and students learning the fire triangle (Fuel, Heat, Oxygen) and methods of fire extinguishment: Starvation, Smothering, and Cooling.",
    aspect: "landscape",
  },
  {
    id: "ext-8",
    src: "/photos/school-safety-outreach-drive.jpg",
    title: "SETURAKSH Community CSR: Youth Life Safety Outreach Campaign",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Community School Campus",
    description:
      "Empowering educational facilities with comprehensive fire audit guidance, clear exit signs, and trained teacher marshals.",
    aspect: "landscape",
  },
  {
    id: "ext-9",
    src: "/photos/school-fire-safety-interactive-demo.jpg",
    title: "Extinguisher Gauge Inspection & Pressure Reliability Check",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Institutional Campus Ground",
    description:
      "Teaching facility managers and staff how to inspect pressure needle in the green zone, tamper seal integrity, and nozzle obstruction checks.",
    aspect: "landscape",
  },
  {
    id: "ext-10",
    src: "/photos/campus-fire-prevention-lecture.jpg",
    title: "Pre-Drill Fire Safety Briefing & Emergency Conduct Guidelines",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Assembly Field Pavilion",
    description:
      "Educating youth on calling emergency services (101 / 112), remaining calm, avoiding panic rushes, and helping elderly or younger peers.",
    aspect: "landscape",
  },
  {
    id: "ext-11",
    src: "/photos/classroom-fire-safety-briefing.jpg",
    title: "Indoor Classroom Safety Orientation & Evacuation Floor Maps",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "School Classroom Facility",
    description:
      "Orienting students on exit staircases, illuminated signage, never using elevators during fire emergencies, and low-smoke evacuation posture.",
    aspect: "landscape",
  },
  {
    id: "ext-12",
    src: "/photos/school-fire-extinguisher-demo-1.jpg",
    title: "Institutional Life Safety & Fire Extinguisher Demo (PASS Technique)",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "J.D. Patel Vidyalaya, Gujarat",
    description:
      "Mr. Sachin Patel demonstrating portable dry chemical powder fire extinguisher operation to students and teachers.",
    aspect: "landscape",
  },
  {
    id: "ext-13",
    src: "/photos/school-fire-extinguisher-demo-3.jpg",
    title: "Extinguisher Hardware Inspection & Pressure Gauge Check",
    category: "extinguisher",
    categoryLabel: "Extinguisher Drill",
    color: "#7e22ce",
    location: "Educational Institution, Gujarat",
    description:
      "Portrait view of Mr. Sachin Patel demonstrating fire extinguisher hardware components and maintenance checks.",
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
  subtitle = "Authentic high-resolution photographs documenting on-site industrial plant audits, live fire hydrant flow monitor drills, executive boardroom compliance lectures, chemical GHS workshops, and institutional youth life safety demonstrations.",
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

  const countFor = (cat: string) => FIELD_PHOTOS.filter((p) => p.category === cat).length;

  return (
    <section
      id="field-operations"
      className="netflix-gallery-section"
      style={{
        width: "100%",
        background: "#141414",
        color: "#ffffff",
        padding: "70px 0 80px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Cinematic Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "50vw",
          height: "50vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.1) 0%, rgba(20, 20, 20, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: "40vw",
          height: "40vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, rgba(20, 20, 20, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="section-container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Netflix Brand Ribbon Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 4,
              background: "#E50914",
              color: "#ffffff",
              fontSize: "0.72rem",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              boxShadow: "0 2px 10px rgba(229, 9, 20, 0.4)",
              marginBottom: 14,
            }}
          >
            <Sparkles size={13} fill="currentColor" />
            <span>SETURAKSH ON-SITE FIELD DOCUMENTARY</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.45rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>

          <p
            style={{
              maxWidth: 780,
              margin: "0 auto",
              fontSize: "0.98rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Netflix Category Rail Filter Pills */}
        {showFilters && (
          <div
            className="netflix-filter-tabs"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 36,
              flexWrap: "wrap",
              padding: "0 10px",
            }}
          >
            {/* All */}
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "all" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "all" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "all" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <span>All Field Operations ({FIELD_PHOTOS.length})</span>
            </button>

            {/* Fire Hydrant */}
            <button
              type="button"
              onClick={() => setActiveTab("fire")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "fire" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "fire" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "fire" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <Flame size={14} style={{ color: activeTab === "fire" ? "#ffffff" : "#f87171" }} />
              <span>Hydrant Spray Drill ({countFor("fire")})</span>
            </button>

            {/* Corporate */}
            <button
              type="button"
              onClick={() => setActiveTab("corporate")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "corporate" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "corporate" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "corporate" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <Building2 size={14} style={{ color: activeTab === "corporate" ? "#ffffff" : "#60a5fa" }} />
              <span>Corporate EHS ({countFor("corporate")})</span>
            </button>

            {/* Workforce */}
            <button
              type="button"
              onClick={() => setActiveTab("workforce")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "workforce" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "workforce" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "workforce" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <Users size={14} style={{ color: activeTab === "workforce" ? "#ffffff" : "#4ade80" }} />
              <span>Workforce 5S ({countFor("workforce")})</span>
            </button>

            {/* Chemical GHS */}
            <button
              type="button"
              onClick={() => setActiveTab("ghs")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "ghs" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "ghs" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "ghs" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <FlaskConical size={14} style={{ color: activeTab === "ghs" ? "#ffffff" : "#fbbf24" }} />
              <span>Chemical GHS ({countFor("ghs")})</span>
            </button>

            {/* Extinguisher */}
            <button
              type="button"
              onClick={() => setActiveTab("extinguisher")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                border: activeTab === "extinguisher" ? "1.5px solid #E50914" : "1px solid rgba(255, 255, 255, 0.14)",
                background: activeTab === "extinguisher" ? "#E50914" : "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                boxShadow: activeTab === "extinguisher" ? "0 4px 16px rgba(229, 9, 20, 0.45)" : "none",
              }}
            >
              <GraduationCap size={14} style={{ color: activeTab === "extinguisher" ? "#ffffff" : "#c084fc" }} />
              <span>Live Extinguisher Drills ({countFor("extinguisher")})</span>
            </button>
          </div>
        )}

        {/* Netflix Card Grid */}
        <div
          className="netflix-gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(295px, 1fr))",
            gap: 22,
          }}
        >
          {displayPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(idx)}
              className="netflix-photo-card"
              style={{
                cursor: "pointer",
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                borderRadius: 16,
                background: "linear-gradient(180deg, #1e1e24 0%, #141416 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
              }}
            >
              {/* Image Container with Zoom */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 220,
                  overflow: "hidden",
                  background: "#0a0a0c",
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
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="netflix-img-zoom"
                />

                {/* Netflix Gradient Shading */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(20,20,22,0.95) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Top Netflix Red Category Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    zIndex: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "#E50914",
                    color: "#ffffff",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  <span>{photo.categoryLabel}</span>
                </div>

                {/* Top Right Match Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 2,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(6px)",
                    color: "#46d369",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  99% Match
                </div>

                {/* Center Expand Icon on Hover */}
                <div
                  className="netflix-hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
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
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E50914",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.8), 0 0 0 4px rgba(229, 9, 20, 0.3)",
                    }}
                  >
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              {/* Photo Content Card */}
              <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.74rem", color: "#f87171", fontWeight: 700 }}>
                  <MapPin size={12} />
                  <span>{photo.location}</span>
                </div>

                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {photo.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255, 255, 255, 0.68)",
                    lineHeight: 1.5,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {photo.description}
                </p>

                {/* Bottom Netflix Meta Bar */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 10,
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.7rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: "#46d369" }}>Verified Field Evidence</span>
                  <span style={{ padding: "1px 6px", borderRadius: 3, border: "1px solid rgba(255,255,255,0.2)" }}>HD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Netflix Theatre Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={handleCloseLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            background: "rgba(0, 0, 0, 0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
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

          {/* Lightbox Cinema Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 980,
              width: "100%",
              maxHeight: "92vh",
              background: "#18181b",
              border: "1.5px solid rgba(229, 9, 20, 0.35)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.9), 0 0 30px rgba(229, 9, 20, 0.2)",
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
            <div style={{ padding: "20px 26px", background: "#141416", color: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "#E50914",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {displayPhotos[selectedPhotoIndex].categoryLabel}
                </span>
                <span style={{ fontSize: "0.78rem", color: "#f87171", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={12} />
                  <span>{displayPhotos[selectedPhotoIndex].location}</span>
                </span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginLeft: "auto" }}>
                  {selectedPhotoIndex + 1} of {displayPhotos.length}
                </span>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", margin: "0 0 6px 0", lineHeight: 1.3 }}>
                {displayPhotos[selectedPhotoIndex].title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.72)", margin: 0, lineHeight: 1.55 }}>
                {displayPhotos[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Netflix Hover Effects */}
      <style jsx global>{`
        .netflix-photo-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9), 0 0 0 1.5px #E50914 !important;
        }
        .netflix-photo-card:hover .netflix-img-zoom {
          transform: scale(1.06);
        }
        .netflix-photo-card:hover .netflix-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
