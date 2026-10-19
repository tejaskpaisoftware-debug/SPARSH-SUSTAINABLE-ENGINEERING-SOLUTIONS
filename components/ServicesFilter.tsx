"use client";

import { useState } from "react";
import { Shield, Flame, GraduationCap, Sprout, CheckCircle2 } from "lucide-react";

interface ServiceCategory {
  id: string;
  category: string;
  badgeClass: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  items: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "ohs",
    category: "ohs",
    badgeClass: "cat-badge-ohs",
    icon: <Shield style={{ width: 24, height: 24 }} />,
    title: "Occupational Health & Safety",
    subtitle: "EHS Systems & Risk Governance",
    color: "var(--accent-cyan)",
    items: [
      "EHS Management Systems",
      "Risk Assessment & HIRA",
      "Contractor Safety Management",
      "Safety Audits & Compliance Assessments",
      "Incident Investigation & Root Cause Analysis",
      "Process Safety Management (PSM)",
    ],
  },
  {
    id: "fire",
    category: "fire",
    badgeClass: "cat-badge-fire",
    icon: <Flame style={{ width: 24, height: 24 }} />,
    title: "Fire & Emergency Management",
    subtitle: "Asset Protection & Crisis Readiness",
    color: "#dc2626",
    items: [
      "Fire Safety Audits",
      "Fire Load Calculations & Hydraulic Analysis",
      "Emergency Response Plans (On-site / Off-site)",
      "Crisis Management & Business Continuity Planning",
      "Mock Drills, Evacuation Planning & Training",
    ],
  },
  {
    id: "training",
    category: "training",
    badgeClass: "cat-badge-training",
    icon: <GraduationCap style={{ width: 24, height: 24 }} />,
    title: "Training & Competency",
    subtitle: "Workforce Safety Mastery",
    color: "#d97706",
    items: [
      "Behavior-Based Safety (BBS)",
      "Leadership Safety Training",
      "Fire Safety & Emergency Response",
      "Chemical Safety & Hazchem Handling",
      "Work at Height & Confined Space Safety",
      "Electrical Safety & LOTO (Lockout/Tagout)",
      "Ergonomics & Occupational Health",
    ],
  },
  {
    id: "environment",
    category: "environment",
    badgeClass: "cat-badge-env",
    icon: <Sprout style={{ width: 24, height: 24 }} />,
    title: "Environment & Sustainability",
    subtitle: "Decarbonization & ESG Advisory",
    color: "var(--accent-emerald)",
    items: [
      "Environmental Compliance",
      "Environmental Audits",
      "Waste Management",
      "Sustainability Initiatives",
      "Environmental Impact Assessment Support",
      "Carbon Footprint Assessment",
      "ESG & Sustainability Advisory",
    ],
  },
];

export default function ServicesFilter() {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Disciplines" },
    { id: "ohs", label: "Occupational Health & Safety" },
    { id: "fire", label: "Fire & Emergency" },
    { id: "training", label: "Training & Competency" },
    { id: "environment", label: "Environment & Sustainability" },
  ];

  const visibleCategories =
    filter === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.category === filter);

  return (
    <>
      {/* Category Filter Nav */}
      <div className="service-filter-nav">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${filter === tab.id ? "active" : ""}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {visibleCategories.map((cat) => (
          <div key={cat.id} className="liquid-card service-category-card">
            <div className="service-cat-header">
              <div className={`cat-icon-badge ${cat.badgeClass}`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="service-cat-title">{cat.title}</h3>
                <span style={{ fontSize: "0.8rem", color: cat.color, fontWeight: 600 }}>
                  {cat.subtitle}
                </span>
              </div>
            </div>
            <ul className="service-items-list">
              {cat.items.map((item, idx) => (
                <li key={idx} className="service-item-row">
                  <CheckCircle2
                    className="service-item-bullet"
                    style={{ width: 18, height: 18 }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
