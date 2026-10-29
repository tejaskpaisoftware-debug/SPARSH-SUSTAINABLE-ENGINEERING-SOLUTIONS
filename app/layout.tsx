import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import SplashScreen from "@/components/SplashScreen";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f5f7",
};

export const metadata: Metadata = {
  title: "SETURAKSH SUSTAINABLE EngiSafe Private Limited | Environment, Safety & Fire Advisory",
  description:
    "SETURAKSH SUSTAINABLE EngiSafe Private Limited - Gujarat, India. Protecting People, Process, Property and Planet through EHS excellence, safety audits, and compliance consultancy.",
  keywords: [
    "SETURAKSH",
    "SETURAKSH SUSTAINABLE EngiSafe Private Limited",
    "EngiSafe",
    "EHS Consultancy Gujarat",
    "Safety Audits Gujarat",
    "Process Safety Management PSM",
    "Fire Safety Audits",
    "Environmental Compliance",
    "Sustainability ESG",
    "NEBOSH ADIS Certified",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {/* Apple Theme Splash Screen */}
        <SplashScreen />

        {/* Ambient Liquid Gradient Blobs */}
        <div className="liquid-canvas-bg" aria-hidden="true">
          <div className="liquid-orb liquid-orb-1"></div>
          <div className="liquid-orb liquid-orb-2"></div>
          <div className="liquid-orb liquid-orb-3"></div>
        </div>

        {/* Floating Apple Glass Navigation */}
        <Navbar />

        {/* Global Scroll Animation Observer */}
        <ScrollAnimationObserver />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
