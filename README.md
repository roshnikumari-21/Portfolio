<div align="center">

# ✦ Roshni Kumari — Developer Portfolio

**A cinematic, award-worthy developer portfolio built with cutting-edge web technologies.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

[**Live Demo →**](#) · [**LinkedIn**](https://linkedin.com/in/roshnikumari-21) · [**GitHub**](https://github.com/roshnikumari-21)

</div>

---

## ⚡ Overview

A high-performance, visually immersive portfolio website that goes beyond a typical developer page. Featuring **cinematic background effects**, **GSAP-powered scroll animations**, **smooth Lenis scrolling**, **AI-powered chatbot**, and a **contact form with email delivery** — all wrapped in a premium dark-themed editorial design with custom typography.

---

## 🎬 Features

| Feature | Description |
|---|---|
| 🎥 **Cinematic Background** | Dynamic ambient background with grain & vignette overlays for a filmic feel |
| 🖱️ **Custom Cursor** | Context-aware magnetic cursor that reacts to interactive elements |
| 🌀 **Smooth Scrolling** | Lenis-powered buttery-smooth scrolling with GSAP ScrollTrigger integration |
| 🤖 **AI Chatbot** | Gemini 2.5 Flash–powered conversational assistant that answers questions about the portfolio |
| 📧 **Contact Form** | Working email delivery via Nodemailer — messages land directly in the inbox |
| 🎞️ **Scroll Animations** | Staggered fade-ups, parallax, and reveal animations using GSAP ScrollTrigger |
| 🧲 **Magnetic Elements** | Interactive magnetic hover effects on buttons and CTAs |
| 📜 **Resume Viewer** | Embedded PDF resume with one-click download |
| 🏅 **Certificates Gallery** | Grid showcase of 11 verified certificates with image previews |
| 📊 **CP Ratings** | Live competitive programming stats — LeetCode, CodeChef, Codeforces |
| 🎨 **Tech Marquee** | Auto-scrolling ticker displaying the full tech stack |
| 📱 **Fully Responsive** | Pixel-perfect across desktop, tablet, and mobile viewports |

---

## 🏗️ Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16 | React framework with App Router, API routes, SSR |
| **React** | 19 | UI library with latest concurrent features |
| **TypeScript** | 5 | End-to-end type safety |

### Styling & Animation
| Technology | Purpose |
|---|---|
| **Tailwind CSS v4** | Utility-first CSS with `@theme` design tokens |
| **GSAP 3.13** | Timeline animations, ScrollTrigger, stagger effects |
| **Lenis** | Smooth scroll engine with momentum |
| **Custom CSS** | Grain overlays, vignette, cinematic effects, skip-link, editorial layout |

### AI & Backend
| Technology | Purpose |
|---|---|
| **Vercel AI SDK** | Streaming chat interface with `streamText` |
| **Google Gemini 2.5 Flash** | LLM powering the portfolio chatbot |
| **Nodemailer** | SMTP email delivery for the contact form |
| **Next.js API Routes** | Serverless backend for chat & email endpoints |

### Typography (Google Fonts)
| Font | Usage |
|---|---|
| **Instrument Serif** | Display headings — elegant, editorial feel |
| **Syne** | Section headings — bold, modern geometric |
| **Geist Sans** | Body text — clean, highly readable |
| **Geist Mono** | Code & kickers — monospaced accents |

---

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # AI chatbot API (Gemini)
│   │   └── contact/route.ts       # Contact form email API
│   ├── components/
│   │   ├── Hero.tsx                # Landing section with photo & CTA
│   │   ├── About.tsx               # Bio, education, CP stats
│   │   ├── Experience.tsx          # Work experience timeline
│   │   ├── Project.tsx             # Projects + CP ratings grid
│   │   ├── Skills.tsx              # Skills grid
│   │   ├── Certificates.tsx        # Certificates gallery (11 certs)
│   │   ├── Contact.tsx             # Contact form + social links
│   │   ├── Resume.tsx              # PDF resume viewer/download
│   │   ├── Header.tsx              # Sticky navigation
│   │   ├── TechMarquee.tsx         # Auto-scrolling tech ticker
│   │   ├── CinematicBackground.tsx # Ambient background effects
│   │   ├── CustomCursor.tsx        # Magnetic custom cursor
│   │   ├── SmoothScroll.tsx        # Lenis scroll wrapper
│   │   ├── AnimationWrapper.tsx    # GSAP ScrollTrigger wrapper
│   │   ├── Magnetic.tsx            # Magnetic hover effect
│   │   ├── PortfolioChatbot.tsx    # AI chat panel UI
│   │   ├── SectionHeading.tsx      # Reusable section header
│   │   └── WireSculpture.tsx       # Decorative SVG element
│   ├── lib/                        # Motion utilities
│   ├── globals.css                 # Design system & theme tokens
│   ├── layout.tsx                  # Root layout with fonts & effects
│   └── page.tsx                    # Page composition
├── public/
│   ├── certs/                      # Certificate images (11 files)
│   ├── myfacelogo.png              # Profile photo
│   └── resume.pdf                  # Downloadable resume
└── utils/
    └── portfolio-context.ts        # AI chatbot knowledge base
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- A **Google AI API key** (for the chatbot)
- An **email account** with SMTP access (for the contact form)

### Installation

```bash
# Clone the repository
git clone https://github.com/roshnikumari-21/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Google Gemini AI (Chatbot)
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_key

# Contact Form (Nodemailer SMTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design Philosophy

This portfolio follows an **editorial / cinematic** design language:

- **Dark ink background** with warm paper-toned typography
- **Film grain & vignette overlays** for depth and atmosphere
- **Accent color system** using warm copper/gold tones
- **Editorial grid layouts** with generous whitespace
- **Scroll-triggered reveals** that unfold the story progressively
- **Reduced motion support** — respects `prefers-reduced-motion`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ☕ and ambition by [Roshni Kumari](https://github.com/roshnikumari-21)**

</div>
