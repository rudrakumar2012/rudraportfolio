"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Terminal } from "lucide-react";

function HexBars() {
  const [bars, setBars] = useState(
    Array.from({ length: 6 }, () => ({ hex: 0, width: 0 }))
  );
  useEffect(() => {
    setBars(
      Array.from({ length: 6 }, () => ({
        hex: Math.floor(Math.random() * 1000),
        width: Math.floor(Math.random() * 60 + 40),
      }))
    );
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-4 min-w-[200px] opacity-60">
      {bars.map((bar, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-[2px] w-full bg-outline-variant relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-secondary"
              initial={{ width: "0%" }}
              whileInView={{ width: `${bar.width > 0 ? bar.width : 0}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
            />
          </div>
          <span className="font-mono text-[10px] text-outline">
            HEX_{bar.hex}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AboutSystem() {
  const skills = [
    "React.js", "Node.js", "Express.js",
    "PostgreSQL", "MongoDB", "REST APIs",
    "Tailwind CSS", "HTML/CSS", "JavaScript", "EJS"
  ];

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-secondary tracking-tighter uppercase">
          IDENTITY_READOUT
        </h2>
        <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
        <span className="font-mono text-[10px] text-outline">SYS::BIO</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-1 bg-gradient-to-br from-secondary/10 to-transparent"
      >
        <div className="bg-surface p-8 sm:p-12 rounded-[inherit] flex flex-col md:flex-row gap-12 items-start">

          <div className="flex-grow flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-secondary" />
              <span className="technical-readout">SYSTEM_OPERATOR_PROFILE</span>
            </div>

            <p className="text-lg text-outline leading-relaxed max-w-3xl">
              Experienced Full Stack Developer proficient in building robust web applications with a keen focus on usability and performance optimization. Dedicated to tackling complex challenges through extensive experience in scalable architecture, clean code, and high-quality solution delivery.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-primary-neon" />
                <span className="technical-readout text-primary-neon">CORE_PROFICIENCIES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-foreground bg-surface-highest/50 border border-outline-variant px-3 py-1.5 rounded-sm hover:border-secondary/50 hover:text-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract Data Representation */}
          <HexBars />

        </div>
      </motion.div>
    </section>
  );
}
