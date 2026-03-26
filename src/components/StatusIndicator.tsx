"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export default function StatusIndicator() {
  const [status, setStatus] = useState<"LOADING" | "LIVE" | "OFFLINE" | "UNREACHABLE">("LOADING");

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();
        setStatus(data.status);
      } catch (err) {
        setStatus("UNREACHABLE");
      }
    }
    checkStatus();
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case "LIVE":
        return "bg-secondary shadow-[0_0_10px_#C3F400]";
      case "OFFLINE":
        return "bg-red-500 shadow-[0_0_10px_#EF4444]";
      case "UNREACHABLE":
        return "bg-orange-500 shadow-[0_0_10px_#F97316]";
      default:
        return "bg-outline animate-pulse";
    }
  };

  return (
    <div className="flex items-center gap-3 bg-surface-highest/15 backdrop-blur-md px-4 py-2 rounded-md border border-outline-variant">
      <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
      <span className="text-[12px] font-mono tracking-widest uppercase">
        {status === "LOADING" ? "CHECKING SYSTEM..." : `SYSTEM ${status}`}
      </span>
      {status === "LIVE" && (
        <Activity className="w-4 h-4 text-secondary animate-pulse ml-2" />
      )}
    </div>
  );
}
