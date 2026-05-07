"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      animate={{
        background:
          mousePosition.x >= 0
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-neon-rgb), 0.08), transparent 80%)`
            : "transparent",
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
}
