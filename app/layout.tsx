import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CinematicBackground from "./components/CinematicBackground";
import CustomCursor from "./components/CustomCursor";
import ChatbotWrapper from "./components/ChatbotWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Roshni Kumari | Full Stack Developer",
  description:
    "Portfolio of Roshni Kumari — Full Stack Developer, competitive programmer, and former Flipkart SDE Intern. B.Tech CSE at NIT Jamshedpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrument.variable} antialiased bg-ink text-paper`}
      >
        <a href="#hero" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <CinematicBackground />
          <div className="grain" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />
          <CustomCursor />
          {children}
          <ChatbotWrapper />
        </SmoothScroll>
      </body>
    </html>
  );
}
