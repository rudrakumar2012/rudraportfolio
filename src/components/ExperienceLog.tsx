"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

export default function ExperienceLog() {
  const experiences = [
    {
      company: "Srijan Technologies",
      role: "Drupal Developer",
      duration: "1 year 2 months | 2022 – Present",
      logs: [
        "Develop and maintain Drupal websites and web applications for various high-profile clients.",
        "Collaborate with designers and project managers to translate complex client requirements into functional and user-friendly web architectures.",
        "Ensure website performance and security through best practices and strict adherence to modern coding standards."
      ]
    },
    {
      company: "Srijan Technologies",
      role: "Drupal Developer (Intern)",
      duration: "7 months | 2022",
      logs: [
        "Developed a comprehensive sample web platform featuring detailed book and author intelligence.",
        "Implemented high-performance functionality to sort books by author and genre, significantly enhancing user experience and navigation efficiency.",
        "Collaborated seamlessly with the engineering team to rapidly acquire best practices in web development and agile project management."
      ]
    }
  ];

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-end gap-6 text-right">
        <span className="font-mono text-[10px] text-outline">SYS::TIMELINE</span>
        <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-primary-neon tracking-tighter uppercase">
          MISSION_LOGS
        </h2>
      </div>

      <div className="relative border-l border-outline-variant/40 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-16 py-4">
        {/* Animated Scanner Beam on the timeline */}
        <motion.div
          className="absolute left-[-1px] top-0 w-[2px] bg-primary-neon shadow-[0_0_10px_#00EEFC]"
          initial={{ height: "0%", top: "0%" }}
          whileInView={{ height: "30%", top: ["0%", "70%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col gap-4 relative group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-[10px] h-[10px] bg-surface border border-outline group-hover:bg-primary-neon group-hover:border-primary-neon transition-colors rotate-45" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-primary-neon" />
                <h3 className="text-2xl font-display font-medium tracking-tight">
                  {exp.company}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="text-secondary font-mono">{exp.role}</span>
                <span className="text-outline">//</span>
                <span className="text-outline font-mono text-xs">{exp.duration}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 mt-4 text-outline text-base max-w-3xl">
              {exp.logs.map((log, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ArrowRight className="w-4 h-4 text-outline-variant mt-1 shrink-0" />
                  <span className="leading-relaxed">{log}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
