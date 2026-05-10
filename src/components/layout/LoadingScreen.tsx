"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff6b00]/10 blur-[120px] animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,107,0,0.5)]">
                <img src="/ag-media_icon.jpeg" alt="AG Media Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-[var(--font-space-grotesk)] tracking-wider">
                  AG <span className="gradient-text">MEDIA</span>
                </div>
                <div className="text-[#94a3b8] text-xs tracking-[4px] uppercase">
                  Food & Beverage Marketing
                </div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "280px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative"
            >
              <div className="h-[1px] bg-white/10 rounded-full w-[280px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] rounded-full transition-all duration-100"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="mt-3 text-center text-[#94a3b8] text-sm font-mono">
                {Math.min(Math.round(progress), 100)}%
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#94a3b8] text-xs tracking-[3px] uppercase"
            >
              Crafting your experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
