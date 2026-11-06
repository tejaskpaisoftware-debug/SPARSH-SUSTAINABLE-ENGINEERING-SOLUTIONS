import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingSideActions from "@/components/FloatingSideActions";
import MobileAppTabBar from "@/components/MobileAppTabBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1118",
};

export const metadata: Metadata = {
  title: "SETURAKSH SUSTAINABLE EngiSafe Private Limited | Environment, Safety & Fire Advisory",
  description:
    "SETURAKSH SUSTAINABLE EngiSafe Private Limited - Gujarat, India. Transforming Risk into Resilience through accredited EHS excellence, process safety management (PSM), fire safety audits, and statutory compliance.",
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
    "DISH Competent Person",
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
        {/* Fast Industrial Splash Entrance */}
        <SplashScreen />

        {/* Global Technical Grid Background */}
        <div className="industrial-grid-bg" aria-hidden="true" />

        {/* Corporate Header & Ticker */}
        <Navbar />

        {/* Global Scroll Animation Observer */}
        <ScrollAnimationObserver />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* GRSPL-Style Right Edge Sticky Floating Contact Actions */}
        <FloatingSideActions />

        {/* Global WhatsApp Chat Floating Widget (Desktop) */}
        <WhatsAppButton />

        {/* Dynamic iOS Native App Tab Bar (Mobile < 768px) */}
        <MobileAppTabBar />
      </body>
    </html>
  );
}
