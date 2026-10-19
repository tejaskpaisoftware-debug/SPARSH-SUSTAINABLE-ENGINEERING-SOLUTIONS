# SPARSH Sustainable Engineering Solutions

A modern, production-grade enterprise website built with **Next.js 14 (App Router)**, **TypeScript**, **Lucide React**, and bespoke **Apple Light Silver glassmorphism CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
├── app/
│   ├── layout.tsx         # Global root layout with Apple floating dock & footer
│   ├── page.tsx           # Home page (4P Liquid Reactor, Pillars, Stats, Preview)
│   ├── about/page.tsx     # About Us (Foundation, Vision/Mission, SPARSH Framework)
│   ├── services/page.tsx  # Our Services (Interactive category filter & 5-stage approach)
│   ├── why-sparsh/page.tsx# Why SPARSH (9-step pipeline, differentiators, partner showcase)
│   ├── contact/page.tsx   # Contact Us (Confidential consultation form & details)
│   └── globals.css        # Apple Light Silver design system & responsive breakpoints
├── components/
│   ├── Navbar.tsx         # Floating Apple glass dock with animated mobile drawer
│   ├── Footer.tsx         # Multi-column responsive footer
│   ├── ReactorStage.tsx   # 4P Liquid Reactor centerpiece with locked clearance
│   ├── ServicesFilter.tsx # Client-side discipline category filter
│   ├── ContactForm.tsx    # Interactive consultation request form
│   └── Counter.tsx        # Intersection-observed number counter animation
├── public/                # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 🎨 Key Features & Design System
- **Next.js 14 App Router**: Clean server-side & client-side component architecture.
- **Apple Light Silver Aesthetic**: `#f5f5f7` canvas, liquid gradient blurs, frosted glassmorphism (`backdrop-filter: blur(24px)`).
- **Interactive 4P Liquid Reactor**: Centered orbit capsules (`PEOPLE`, `PROCESS`, `PROPERTY`, `PLANET`) around `SPARSH 4P CORE` with locked clearance and zero flicker.
- **100% Mobile-Friendly**: Responsive grid scaling from 4K desktop down to 320px ultra-compact phones.
- **TypeScript**: Strict type-checking across all components and pages.
