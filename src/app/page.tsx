import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import AboutSystem from "@/components/AboutSystem";
import ExperienceLog from "@/components/ExperienceLog";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  const decentralizedProjects = [
    {
      title: "VOTING DAPP",
      description: "A secure, blockchain-based voting system built on Ethereum. Uses Solidity smart contracts to ensure transparency and prevent double-voting. Optimized for gas efficiency and high trust scores.",
      repo: "https://github.com/rudrakumar2012/votingdapp",
      tags: ["Solidity", "Hardhat", "Ethers.js", "React"],
      category: "DECENTRALIZED" as const,
    },
  ];

  const fullStackProjects = [
    {
      title: "IMDB CLONE",
      description: "A high-fidelity recreation of the IMDB cinematic interface. Powered by TMDB API for real-time movie data, featuring dynamic search, rating systems, and a premium Glassmorphic dark UI.",
      repo: "https://github.com/rudrakumar2012/imdb-clone",
      tags: ["React", "TMDB_API", "TailwindCSS", "Vite"],
      category: "FULLSTACK" as const,
    },
    {
      title: "RECIPE KEEPER",
      description: "A centralized recipe management infrastructure. Allows users to archive, categorize, and search culinary data with a focus on performant data fetching and clean UX.",
      repo: "https://github.com/rudrakumar2012/Recipe-Keeper",
      tags: ["Node.js", "Express", "MongoDB", "EJS"],
      category: "FULLSTACK" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      {/* Hero Section */}
      <Hero />

      {/* IDENTITY_READOUT */}
      <AboutSystem />

      {/* MISSION_LOGS */}
      <ExperienceLog />

      {/* Projects Grid */}
      <div className="flex flex-col gap-16 md:gap-24">
        
        {/* Decentralized Systems */}
        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-primary-neon tracking-tighter">
              DECENTRALIZED_SYSTEMS
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
            <span className="font-mono text-[10px] text-outline">COUNT::01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decentralizedProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Full Stack Applications */}
        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-tertiary tracking-tighter">
              FULL_STACK_APPLICATIONS
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
            <span className="font-mono text-[10px] text-outline">COUNT::02</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

      </div>

      {/* Footer / HUD Overlay */}
      <footer className="border-t border-outline-variant pt-12 pb-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        <div className="flex flex-col gap-2">
          <span className="technical-readout">SYSTEM_VERSION_1.0_ANTIGRAVITY</span>
          <p className="text-sm font-light text-outline">
            © 2026 Crafted with precision for the Web3 landscape.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/rudrakumar2012" target="_blank" rel="noopener noreferrer" className="text-outline hover:text-primary-neon transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rudra-kumar-71a180172/" target="_blank" rel="noopener noreferrer" className="text-outline hover:text-tertiary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rudra@example.com" className="text-outline hover:text-secondary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="text-outline hover:text-primary-neon transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col md:items-end w-full md:w-auto">
          <span className="technical-readout text-primary-neon">ENCRYPTED_HANDSHAKE</span>
          <span className="font-mono text-[10px] text-outline underline underline-offset-4">PUBLIC_KEY://0x3E...F9</span>
        </div>
      </footer>
    </div>
  );
}
