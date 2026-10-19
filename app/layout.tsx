import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SPARSH Sustainable Engineering Solutions | Environment, Safety & Fire Advisory",
  description:
    "SPARSH Sustainable Engineering Solutions - Gujarat, India. Protecting People, Process, Property and Planet through EHS excellence, safety audits, and compliance consultancy.",
  keywords: [
    "EHS Consultancy",
    "Safety Audits Gujarat",
    "Process Safety Management PSM",
    "Fire Safety Audits",
    "Environmental Compliance",
    "Sustainability ESG",
    "NEBOSH ADIS Certified",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Ambient Liquid Gradient Blobs */}
        <div className="liquid-canvas-bg" aria-hidden="true">
          <div className="liquid-orb liquid-orb-1"></div>
          <div className="liquid-orb liquid-orb-2"></div>
          <div className="liquid-orb liquid-orb-3"></div>
        </div>

        {/* Floating Apple Glass Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
