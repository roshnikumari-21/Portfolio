import type { Metadata } from "next";
import { Orbitron, Fira_Code } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roshni | Portfolio",
  description: "Cyberpunk Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${firaCode.variable} antialiased bg-[#050505] text-white font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
