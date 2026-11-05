"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Plus,
  Check,
  ThumbsUp,
  Info,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Flame,
  Award,
  ChevronRight,
  RotateCcw,
  Film,
} from "lucide-react";

interface NetflixEpisode {
  id: string;
  episodeNumber: number;
  src: string;
  poster: string;
  title: string;
  subTitle: string;
  badge: string;
  matchScore: string;
  maturityRating: string;
  duration: string;
  resolution: string;
  audioSpec: string;
  location: string;
  presenter: string;
  description: string;
  tags: string[];
}

const NETFLIX_DRILLS: NetflixEpisode[] = [
  {
    id: "drill-01",
    episodeNumber: 1,
    src: "/videos/live-fire-extinguisher-training-demo.mp4",
    poster: "/photos/video-poster-training-demo.jpg",
    title: "Live Extinguisher Operations & Protocol Masterclass",
    subTitle: "E1 • Academic Life Safety & Fire Triangle Briefing",
    badge: "#1 IN INDUSTRIAL SAFETY TODAY",
    matchScore: "99% Match",
    maturityRating: "IS 2190 / NFPA 10",
    duration: "30s",
    resolution: "4K ULTRA HD",
    audioSpec: "5.1 SURROUND",
    location: "Educational Campus Safety Drive, Gujarat",
    presenter: "Mr. Sachin Patel (Founder & Director)",
    description:
      "Director Sachin Patel takes the stage before an auditorium and courtyard cohort of faculty and students, breaking down fire extinguisher mechanics, optimal safety standoff distance, pressure gauges, and panic mitigation.",
    tags: ["Live Field Action", "Emergency Response", "Workforce Mentorship", "Fire Protection"],
  },
  {
    id: "drill-02",
    episodeNumber: 2,
    src: "/videos/live-fire-extinguisher-pin-pull-drill.mp4",
    poster: "/photos/video-poster-pin-pull.jpg",
    title: "Tactical Safety Pin Extraction & PASS Deployment",
    subTitle: "E2 • Ground-Level Tamper Seal & Discharge Readiness",
    badge: "TOP RATED GROUND DRILL",
    matchScore: "98% Match",
    maturityRating: "FACTORY ACT COMPLIANT",
    duration: "30s",
    resolution: "4K ULTRA HD",
    audioSpec: "SPATIAL AUDIO",
    location: "Institutional Campus Ground, Gujarat",
    presenter: "Mr. Sachin Patel (Founder & Director)",
    description:
      "Tactical on-ground instruction mastering the four critical PASS steps: Pull the safety pin, Aim low at the base of fire, Squeeze the lever handle, and Sweep side to side while verifying tamper seal integrity and hose flexibility.",
    tags: ["Practical Drill", "PASS Technique", "Chemical Powder", "Student Drills"],
  },
];

export default function FieldVideoShowcase() {
  const [activeDrillIndex, setActiveDrillIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isInList, setIsInList] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30);
  const [showControls, setShowControls] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeDrill = NETFLIX_DRILLS[activeDrillIndex];

  // Auto-switch video source when episode changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activeDrillIndex]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if ((videoRef.current as any).webkitRequestFullscreen) {
      (videoRef.current as any).webkitRequestFullscreen();
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className="netflix-video-section"
      style={{
        background: "#141414",
        color: "#ffffff",
        padding: "70px 0 80px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Cinematic Ambient Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "20%",
          width: "60vw",
          height: "60vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 9, 20, 0.15) 0%, rgba(20, 20, 20, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "10%",
          width: "45vw",
          height: "45vh",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 132, 61, 0.12) 0%, rgba(20, 20, 20, 0) 70%)",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Red "N" / SETURAKSH emblem */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "linear-gradient(135deg, #E50914 0%, #B81D24 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(229, 9, 20, 0.4)",
                fontWeight: 900,
                fontSize: "1.25rem",
                color: "#ffffff",
                letterSpacing: "-0.05em",
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: "#E50914",
                    fontSize: "0.74rem",
                    fontWeight: 900,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  SETURAKSH
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  ORIGINALS
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.95rem)",
                  fontWeight: 850,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  margin: "2px 0 0",
                  lineHeight: 1.2,
                }}
              >
                Trending Now: Live Field Action &amp; Drills
              </h2>
            </div>
          </div>

          {/* Season Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#e2e8f0",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            <Film size={13} style={{ color: "#E50914" }} />
            <span>Season 1 • 2 Live Episodes</span>
          </div>
        </div>

        {/* Main Netflix Billboard Cinema Stage */}
        <div
          className="netflix-billboard"
          style={{
            background: "linear-gradient(135deg, rgba(28, 28, 30, 0.95) 0%, rgba(18, 18, 20, 0.98) 100%)",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(229, 9, 20, 0.15)",
            display: "grid",
            gridTemplateColumns: "minmax(300px, 420px) 1fr",
            gap: 0,
            marginBottom: 44,
          }}
        >
          {/* Left Column: Vertical Video Player in Netflix Phone Bezel Frame */}
          <div
            className="netflix-player-wrap"
            style={{
              position: "relative",
              background: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 460,
              cursor: "pointer",
            }}
            onClick={handleTogglePlay}
            onMouseEnter={() => setShowControls(true)}
          >
            <video
              ref={videoRef}
              src={activeDrill.src}
              poster={activeDrill.poster}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                maxHeight: 560,
              }}
            />

            {/* Subtle Vignette Shading */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isPlaying
                  ? "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.85) 100%)"
                  : "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.85) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Top Player Badges */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                right: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 4,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(229, 9, 20, 0.9)",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 8px rgba(229, 9, 20, 0.4)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#ffffff",
                    animation: isPlaying ? "pulse 1.5s infinite" : "none",
                  }}
                />
                <span>LIVE DRILL</span>
              </div>

              <div
                style={{
                  padding: "3px 8px",
                  borderRadius: 4,
                  background: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {activeDrill.resolution}
              </div>
            </div>

            {/* Center Big Play Button (Netflix Style) */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 4,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.92)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8), 0 0 0 6px rgba(229, 9, 20, 0.3)",
                    color: "#E50914",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Play size={32} style={{ marginLeft: 4 }} fill="currentColor" />
                </div>
              </div>
            )}

            {/* Bottom Quick Controls Floating Over Player */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 14,
                right: 14,
                zIndex: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: "0.72rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 700,
                  textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                }}
              >
                <Clock size={12} style={{ color: "#E50914" }} />
                <span>
                  {Math.floor(currentTime)}s / {Math.floor(duration)}s
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  type="button"
                  onClick={handleToggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(0, 0, 0, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                <button
                  type="button"
                  onClick={handleFullscreen}
                  aria-label="Fullscreen video"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(0, 0, 0, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Maximize2 size={15} />
                </button>
              </div>
            </div>

            {/* Signature Netflix Red Scrubber Progress Line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "rgba(255, 255, 255, 0.2)",
                zIndex: 5,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progressPercent}%`,
                  background: "#E50914",
                  boxShadow: "0 0 8px #E50914",
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          </div>

          {/* Right Column: Netflix Details & Action Billboard */}
          <div
            style={{
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Badge & Top 10 Callout */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "#E50914",
                    color: "#ffffff",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "0.06em",
                  }}
                >
                  <Flame size={13} fill="currentColor" />
                  <span>{activeDrill.badge}</span>
                </span>

                <span
                  style={{
                    color: "#46d369",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                  }}
                >
                  {activeDrill.matchScore}
                </span>

                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  {activeDrill.maturityRating}
                </span>

                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 3,
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  {activeDrill.audioSpec}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.22,
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                }}
              >
                {activeDrill.title}
              </h3>

              <div
                style={{
                  color: "#E50914",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{activeDrill.subTitle}</span>
              </div>

              {/* Presenter & Location Chips */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 20,
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <ShieldCheck size={14} style={{ color: "#46d369" }} />
                  <strong style={{ color: "#ffffff" }}>{activeDrill.presenter}</strong>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <MapPin size={14} style={{ color: "#E50914" }} />
                  <span>{activeDrill.location}</span>
                </div>
              </div>

              {/* Synopsis */}
              <p
                style={{
                  fontSize: "0.96rem",
                  color: "rgba(255, 255, 255, 0.82)",
                  lineHeight: 1.62,
                  marginBottom: 26,
                  maxWidth: 620,
                }}
              >
                {activeDrill.description}
              </p>

              {/* Netflix Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                {/* Big White Netflix Play Button */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 28px",
                    borderRadius: 8,
                    background: isPlaying ? "#E50914" : "#ffffff",
                    color: isPlaying ? "#ffffff" : "#000000",
                    border: "none",
                    fontSize: "0.98rem",
                    fontWeight: 850,
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={18} fill="currentColor" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={18} fill="currentColor" />
                      <span>Play Drill</span>
                    </>
                  )}
                </button>

                {/* My List Button */}
                <button
                  type="button"
                  onClick={() => setIsInList(!isInList)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 20px",
                    borderRadius: 8,
                    background: "rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontSize: "0.9rem",
                    fontWeight: 750,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isInList ? (
                    <>
                      <Check size={16} style={{ color: "#46d369" }} />
                      <span>In My Watchlist</span>
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      <span>My Watchlist</span>
                    </>
                  )}
                </button>

                {/* Like Button */}
                <button
                  type="button"
                  onClick={() => setIsLiked(!isLiked)}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: isLiked ? "rgba(229, 9, 20, 0.2)" : "rgba(255, 255, 255, 0.12)",
                    color: isLiked ? "#E50914" : "#ffffff",
                    border: `1px solid ${isLiked ? "#E50914" : "rgba(255, 255, 255, 0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  aria-label="Like this training drill"
                >
                  <ThumbsUp size={18} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Genre Tags Strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: 16,
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.45)", fontWeight: 700 }}>
                Categories:
              </span>
              {activeDrill.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: 600,
                  }}
                >
                  {t}
                  {idx < activeDrill.tags.length - 1 && " • "}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Netflix Episodes Row: Selectable Episode Cards */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Episodes &amp; Live Drills
            </h4>
            <span
              style={{
                fontSize: "0.82rem",
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: 600,
              }}
            >
              Select an episode to stream
            </span>
          </div>

          {/* 2 Episode Cards Side-by-Side (Netflix Format) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {NETFLIX_DRILLS.map((drill, index) => {
              const isSelected = activeDrillIndex === index;

              return (
                <div
                  key={drill.id}
                  onClick={() => {
                    setActiveDrillIndex(index);
                    setIsPlaying(true);
                  }}
                  className="netflix-episode-card"
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, rgba(38, 38, 42, 0.95), rgba(28, 28, 32, 0.98))"
                      : "rgba(255, 255, 255, 0.04)",
                    borderRadius: 16,
                    padding: 16,
                    border: isSelected
                      ? "2px solid #E50914"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    cursor: "pointer",
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    boxShadow: isSelected
                      ? "0 10px 30px rgba(229, 9, 20, 0.25)"
                      : "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Episode Number */}
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 900,
                      color: isSelected ? "#E50914" : "rgba(255, 255, 255, 0.4)",
                      minWidth: 26,
                      textAlign: "center",
                    }}
                  >
                    {drill.episodeNumber}
                  </div>

                  {/* Thumbnail with Netflix Play Hover */}
                  <div
                    style={{
                      position: "relative",
                      width: 120,
                      height: 75,
                      borderRadius: 10,
                      overflow: "hidden",
                      flexShrink: 0,
                      background: "#000000",
                    }}
                  >
                    <Image
                      src={drill.poster}
                      alt={drill.title}
                      fill
                      sizes="140px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: isSelected
                          ? "rgba(0, 0, 0, 0.3)"
                          : "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: isSelected ? "#E50914" : "rgba(255, 255, 255, 0.85)",
                          color: isSelected ? "#ffffff" : "#000000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Play size={14} style={{ marginLeft: 2 }} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        marginBottom: 4,
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "0.96rem",
                          fontWeight: 800,
                          color: "#ffffff",
                          margin: 0,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {drill.title}
                      </h5>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          color: "rgba(255, 255, 255, 0.6)",
                          flexShrink: 0,
                        }}
                      >
                        {drill.duration}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255, 255, 255, 0.65)",
                        margin: 0,
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {drill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .netflix-billboard {
            grid-template-columns: 1fr !important;
          }
          .netflix-player-wrap {
            min-height: 420px !important;
          }
        }
        .netflix-episode-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
