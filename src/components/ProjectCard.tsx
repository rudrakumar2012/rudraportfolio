"use client";

import { motion } from "framer-motion";
import { Link2, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  repo: string;
  link?: string;
  tags: string[];
  category: "DECENTRALIZED" | "FULLSTACK";
}

export default function ProjectCard({ title, description, repo, link, tags, category }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card flex flex-col gap-6 p-8 h-full bg-surface-container-low hover:bg-surface-highest/30 hover:border-primary-neon/30 hover:shadow-[0_0_40px_rgba(0,238,252,0.15)] transition-all duration-500 group relative overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className={`technical-readout ${category === "DECENTRALIZED" ? "text-primary-neon" : "text-tertiary"}`}>
            MODULE::{category}_SYSTEM
          </span>
          <h3 className="text-3xl font-display font-medium tracking-tight group-hover:text-primary-neon transition-colors">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-outline hover:text-secondary p-1">
              <Link2 className="w-5 h-5" />
            </a>
          )}
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-outline hover:text-primary-neon p-1">
            <Code className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-outline text-[15px] leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="technical-readout bg-surface-highest px-3 py-1 rounded-sm text-[10px]">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-outline-variant mt-2">
        <span className="font-mono text-[10px] text-outline opacity-40 uppercase">VERSION_1.0_STABLE</span>
      </div>
    </motion.div>
  );
}
