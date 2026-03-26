"use client";

import { motion } from "framer-motion";
import StatusIndicator from "./StatusIndicator";
import { Terminal, Cpu, Database, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-start gap-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <Terminal className="text-primary-neon w-5 h-5" />
          <motion.span 
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="technical-readout"
          >
            MISSION_CRITICAL_SYSTEM_ACTIVE
          </motion.span>
        </div>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-display font-medium leading-[1.1] tracking-tighter flex flex-wrap items-center"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
        >
          RUDRA <span className="text-primary-neon ml-2 md:ml-4">KUMAR</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="text-primary-neon"
          >
            _
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl font-display text-outline font-light sm:-mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Full Stack & Web3 Developer
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 w-full items-start md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-1 bg-gradient-to-br from-primary-neon/10 to-transparent"
        >
          <div className="bg-surface p-8 rounded-[inherit]">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="technical-readout text-secondary">FEATURED_SYSTEM</span>
                  <h2 className="text-3xl sm:text-4xl font-display font-medium">STOCKSAGE AI</h2>
                </div>
                <StatusIndicator />
              </div>
              
              <p className="text-base sm:text-lg text-outline leading-relaxed max-w-2xl">
                An advanced AI-powered dashboard for real-time stock market analysis, visualization, and sentiment tracking. Integrating multi-agent intelligence to predict market trends with unprecedented accuracy.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 technical-readout bg-surface-highest/20 px-3 py-1.5 rounded-sm">
                  <Cpu className="w-3 h-3" /> NEURAL_NETS
                </div>
                <div className="flex items-center gap-2 technical-readout bg-surface-highest/20 px-3 py-1.5 rounded-sm">
                  <Globe className="w-3 h-3" /> VERCEL_EDGE
                </div>
                <div className="flex items-center gap-2 technical-readout bg-surface-highest/20 px-3 py-1.5 rounded-sm">
                  <Database className="w-3 h-3" /> REALTIME_DB
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a 
                  href="https://stock-sage-ai-eight.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary text-surface px-6 sm:px-8 py-3 w-full sm:w-auto text-center rounded-sm font-display font-bold hover:brightness-110 active:scale-95 transition-all text-sm tracking-widest"
                >
                  EXECUTE_LIVE_PREVIEW
                </a>
                <a 
                  href="https://github.com/rudrakumar2012/StockSage-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-outline hover:text-primary-neon transition-colors font-mono text-[12px] underline underline-offset-4"
                >
                  VIEW_SOURCE_CODE
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex flex-col gap-8 items-end opacity-40 hover:opacity-100 transition-opacity"
        >
          <div className="flex flex-col items-end group">
            <span className="technical-readout">LOCATION</span>
            <span className="font-mono text-xs group-hover:text-primary-neon transition-colors">GLOBAL_MESH [INDIA]</span>
          </div>
          <div className="flex flex-col items-end group">
            <span className="technical-readout">UPTIME</span>
            <span className="font-mono text-xs group-hover:text-primary-neon transition-colors">99.982%_STABLE</span>
          </div>
          <div className="flex flex-col items-end group">
            <span className="technical-readout">ENCRYPTION</span>
            <span className="font-mono text-xs group-hover:text-primary-neon transition-colors">AES_256_ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
