"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    serviceType: "Safety Audit & Compliance",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="liquid-card contact-form-card lazy-reveal delay-1">
      <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>
        Request Professional Consultation
      </h3>
      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
        Provide brief facility details below and our lead EHS consultant will coordinate an exploratory technical evaluation.
      </p>

      {submitted ? (
        <div style={{ padding: "32px 20px", textAlign: "center", background: "rgba(16, 124, 65, 0.08)", borderRadius: 18, border: "1px solid rgba(16, 124, 65, 0.2)" }}>
          <CheckCircle2 style={{ width: 44, height: 44, color: "var(--accent-emerald)", margin: "0 auto 12px" }} />
          <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 6 }}>
            Inquiry Submitted Successfully
          </h4>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Thank you, {formData.name || "Customer"}. Our advisory team will reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="e.g. Rajesh Sharma"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="emailAddress">Corporate Email Address</label>
            <input
              type="email"
              id="emailAddress"
              className="form-input"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="organization">Organization / Facility Name</label>
            <input
              type="text"
              id="organization"
              className="form-input"
              placeholder="e.g. Apex Chemical Manufacturing Ltd."
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="serviceType">Primary Consulting Need</label>
            <select
              id="serviceType"
              className="form-select"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            >
              <option value="Safety Audit & Compliance">Safety Audit & Compliance</option>
              <option value="Process Safety Management (PSM)">Process Safety Management (PSM)</option>
              <option value="Fire Safety & Hydraulic Analysis">Fire Safety & Hydraulic Analysis</option>
              <option value="Workforce Safety Training">Workforce Safety Training</option>
              <option value="Environmental Compliance & ESG">Environmental Compliance & ESG</option>
              <option value="Comprehensive 4P Framework Advisory">Comprehensive 4P Framework Advisory</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Facility Overview & Objectives</label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="Specify location, industry sector, specific compliance objectives or plant challenges..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center", padding: "14px 24px", fontSize: "1rem" }}
          >
            <span>Submit Consultation Request</span>
            <Send style={{ width: 18, height: 18 }} />
          </button>
        </form>
      )}
    </div>
  );
}
