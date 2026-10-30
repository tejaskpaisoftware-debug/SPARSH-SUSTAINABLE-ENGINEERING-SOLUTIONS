import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Linkedin, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SETURAKSH SUSTAINABLE EngiSafe Private Limited",
  description:
    "Get in touch with SETURAKSH SUSTAINABLE EngiSafe Private Limited in Gujarat, India. Request facility audits, PSM advisory, or fire safety consulting.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge-pill lazy-reveal">
            <span className="dot"></span>
            <span>YOUR TRUSTED PARTNER FOR ENVIRONMENT, HEALTH, SAFETY & FIRE EXCELLENCE</span>
          </div>
          <h1 className="page-hero-title lazy-reveal delay-1">CONTACT US</h1>
          <p className="page-hero-sub lazy-reveal delay-2" style={{ fontWeight: 600, color: "#1d1d1f" }}>
            “PARTNERING WITH ORGANIZATIONS TO CREATE SAFER WORKPLACES, ENSURE REGULATORY COMPLIANCE, AND DRIVE SUSTAINABLE BUSINESS EXCELLENCE.”
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="section-padding" style={{ paddingTop: 10, paddingBottom: 60 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Card */}
            <div className="liquid-card contact-info-card lazy-reveal">
              <div>
                <div className="badge-pill" style={{ marginBottom: 12 }}>
                  <MapPin style={{ width: 14, height: 14 }} />
                  <span>Gujarat, India Hub</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>
                  SETURAKSH SUSTAINABLE EngiSafe Private Limited
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Reach out to our principal advisory team to schedule an audit, consultation, or customized safety program for your facility.
                </p>

                <div className="contact-details-list">
                  <div className="contact-item-box">
                    <div className="contact-item-icon">
                      <MapPin style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>Location</h4>
                      <p>Gujarat, India</p>
                    </div>
                  </div>

                  <a href="mailto:info@seturaksh.com" className="contact-item-box">
                    <div className="contact-item-icon">
                      <Mail style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>Email Address</h4>
                      <p>info@seturaksh.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918780884947?text=Hello%20SETURAKSH%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-box"
                  >
                    <div className="contact-item-icon" style={{ background: "rgba(37, 211, 102, 0.12)", color: "#25d366" }}>
                      <Phone style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>WhatsApp Support</h4>
                      <p>+91 87808 84947 (Instant Message)</p>
                    </div>
                  </a>

                  <a href="tel:+918780884947" className="contact-item-box">
                    <div className="contact-item-icon">
                      <Phone style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>Direct Consultant Line</h4>
                      <p>+91 87808 84947</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-box"
                  >
                    <div className="contact-item-icon">
                      <Linkedin style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>LinkedIn Profile</h4>
                      <p>SETURAKSH SUSTAINABLE EngiSafe on LinkedIn</p>
                    </div>
                  </a>

                  <div className="contact-item-box">
                    <div className="contact-item-icon">
                      <Globe style={{ width: 20, height: 20 }} />
                    </div>
                    <div className="contact-item-info">
                      <h4>Official Website</h4>
                      <p>www.seturaksh.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 32, padding: "18px 20px", background: "rgba(0,113,227,0.06)", borderRadius: 16, border: "1px solid rgba(0,113,227,0.12)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--accent-cyan)", fontWeight: 700, fontSize: "0.9rem", marginBottom: 4 }}>
                  <ShieldCheck style={{ width: 18, height: 18 }} />
                  <span>Confidential Advisory</span>
                </div>
                <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  All facility data, plant layouts, and audit inquiries are governed under strict Non-Disclosure Agreements (NDA).
                </p>
              </div>
            </div>

            {/* Interactive Form Component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
