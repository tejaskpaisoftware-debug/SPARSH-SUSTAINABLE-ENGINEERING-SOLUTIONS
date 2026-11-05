"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Video,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
  Flame,
  CheckCircle2,
} from "lucide-react";

interface FieldVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  badge: string;
  badgeColor: string;
  presenter: string;
  location: string;
  duration: string;
  summary: string;
  keyPoints: string[];
}

const FIELD_VIDEOS: FieldVideo[] = [
  {
    id: "video-1",
    src: "/videos/live-fire-extinguisher-training-demo.mp4",
    poster: "/photos/video-poster-training-demo.jpg",
    title: "Live Fire Extinguisher Operations & Safety Protocol Lecture",
    badge: "Live Training Video 01",
    badgeColor: "#d9251d",
    presenter: "Mr. Sachin Patel (Founder & Director)",
    location: "Educational Campus Safety Drive, Gujarat",
    duration: "0:30 • High Definition Audio",
    summary:
      "Director Sachin Patel directly coaching students and faculty on operational fire extinguisher handling, spray range, and calm emergency reaction.",
    keyPoints: [
      "Real-time explanation of extinguisher pressure & discharge safety",
      "Interactive Q&A addressing student panic prevention",
      "Practical instructions on wind direction and spray aiming",
    ],
  },
  {
    id: "video-2",
    src: "/videos/live-fire-extinguisher-pin-pull-drill.mp4",
    poster: "/photos/video-poster-pin-pull.jpg",
    title: "Safety Pin Pull & Discharge Preparation Ground Drill",
    badge: "Live Training Video 02",
    badgeColor: "#00843d",
    presenter: "Mr. Sachin Patel (Founder & Director)",
    location: "Institutional Campus Ground, Gujarat",
    duration: "0:30 • Live Field Recording",
    summary:
      "Ground-level tactical demonstration showing how to break the tamper seal, disengage the safety pin, test hose flexibility, and prepare for instant suppression.",
    keyPoints: [
      "Mastering the PASS technique: Pull, Aim, Squeeze, Sweep",
      "Tamper seal integrity & pressure verification check",
      "Safe physical stance to absorb recoil during discharge",
    ],
  },
];

export default function FieldVideoShowcase() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mutedVideoId, setMutedVideoId] = useState<{ [id: string]: boolean }>({
    "video-1": false,
    "video-2": false,
  });

  const videoRefs = useRef<{ [id: string]: HTMLVideoElement | null }>({});

  const handleTogglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideoId === id) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      // Pause other videos if running
      Object.keys(videoRefs.current).forEach((k) => {
        if (k !== id && videoRefs.current[k]) {
          videoRefs.current[k]?.pause();
        }
      });
      video.play().catch(() => {});
      setPlayingVideoId(id);
    }
  };

  const handleToggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    const newMuted = !mutedVideoId[id];
    video.muted = newMuted;
    setMutedVideoId((prev) => ({ ...prev, [id]: newMuted }));
  };

  const handleFullscreen = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    }
  };

  return (
    <section
      className="field-video-showcase-section"
      style={{
        padding: "80px 0 60px",
        background: "linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, rgba(241, 245, 249, 0.9) 100%)",
        position: "relative",
      }}
    >
      <div className="section-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(217, 37, 29, 0.08)",
              border: "1px solid rgba(217, 37, 29, 0.2)",
              color: "#d9251d",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <Video size={14} />
            <span>AUTHENTIC LIVE FIELD FOOTAGE</span>
            <Sparkles size={13} />
          </div>

          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.2vw, 2.45rem)",
              fontWeight: 850,
              color: "var(--text-primary)",
              lineHeight: 1.22,
              marginBottom: 14,
            }}
          >
            Real Training Drills In Live Motion
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Watch Founder &amp; Director <strong style={{ color: "var(--text-primary)" }}>Mr. Sachin Patel</strong> personally conducting live life safety and fire extinguisher drills with full student, faculty, and emergency team participation.
          </p>
        </div>

        {/* 2 Video Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          {FIELD_VIDEOS.map((video) => {
            const isPlaying = playingVideoId === video.id;
            const isMuted = mutedVideoId[video.id];

            return (
              <div
                key={video.id}
                className="liquid-card"
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: isPlaying
                    ? `0 20px 40px ${video.badgeColor}22, 0 4px 16px rgba(0,0,0,0.06)`
                    : "0 10px 30px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  background: "#ffffff",
                }}
              >
                {/* Video Player Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "9 / 14",
                    maxHeight: 520,
                    background: "#0a0e17",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTogglePlay(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={video.src}
                    poster={video.poster}
                    playsInline
                    preload="metadata"
                    onEnded={() => setPlayingVideoId(null)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isPlaying
                        ? "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)",
                      pointerEvents: "none",
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      right: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: "rgba(0, 0, 0, 0.75)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        color: "#ffffff",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        border: `1.5px solid ${video.badgeColor}`,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: isPlaying ? "#22c55e" : video.badgeColor,
                          boxShadow: `0 0 8px ${isPlaying ? "#22c55e" : video.badgeColor}`,
                        }}
                      />
                      <span>{video.badge}</span>
                    </span>

                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        background: "rgba(0, 0, 0, 0.65)",
                        color: "#e2e8f0",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Clock size={11} />
                      <span>30s</span>
                    </span>
                  </div>

                  {/* Center Animated Play Button when paused */}
                  {!isPlaying && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 3,
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.25)",
                          color: video.badgeColor,
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <Play size={30} style={{ marginLeft: 4 }} fill="currentColor" />
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: 12,
                          color: "#ffffff",
                          fontSize: "0.78rem",
                          fontWeight: 750,
                          textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Tap to Play Live Video
                      </div>
                    </div>
                  )}

                  {/* Bottom Controls Bar */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <MapPin size={12} color="#f87171" />
                      <span>{video.location.split(",")[0]}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {/* Audio Mute/Unmute */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleMute(video.id, e)}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.65)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "background 0.2s ease",
                        }}
                      >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      </button>

                      {/* Fullscreen */}
                      <button
                        type="button"
                        onClick={(e) => handleFullscreen(video.id, e)}
                        aria-label="Fullscreen video"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.65)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "background 0.2s ease",
                        }}
                      >
                        <Maximize2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div style={{ padding: "24px 22px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#0071e3",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      marginBottom: 8,
                    }}
                  >
                    <UserCheck size={14} />
                    <span>{video.presenter}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      lineHeight: 1.35,
                      marginBottom: 10,
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: 16,
                      flexGrow: 1,
                    }}
                  >
                    {video.summary}
                  </p>

                  {/* Key Training Takeaways */}
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.02)",
                      borderRadius: 14,
                      padding: "12px 14px",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 8,
                      }}
                    >
                      Live Drill Observations
                    </span>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                      {video.keyPoints.map((pt, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            fontSize: "0.8rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.4,
                          }}
                        >
                          <CheckCircle2 size={13} style={{ color: video.badgeColor, marginTop: 2, flexShrink: 0 }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee / Verified Badge */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            padding: "14px 24px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            maxWidth: 680,
            margin: "40px auto 0",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(0, 132, 61, 0.12)",
              color: "#00843d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CheckCircle2 size={16} />
          </div>
          <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)", fontWeight: 600 }}>
            Every training session conducted by <strong style={{ color: "var(--text-primary)" }}>SETURAKSH</strong> adheres strictly to IS 2190 &amp; NFPA 10 standards for portable fire extinguishers.
          </span>
        </div>
      </div>
    </section>
  );
}
