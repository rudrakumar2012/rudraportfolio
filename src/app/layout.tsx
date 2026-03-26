import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import AnimatedGrid from "@/components/AnimatedGrid";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Rudra Kumar | Full Stack & Web3 Developer",
  description: "Portfolio of Rudra Kumar, specializing in Decentralized Systems and Full Stack Applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans relative">
        <MouseGlow />
        <AnimatedGrid />
        <div className="hud-margin" />
        <main className="hud-container relative z-10">{children}</main>
      </body>
    </html>
  );
}
