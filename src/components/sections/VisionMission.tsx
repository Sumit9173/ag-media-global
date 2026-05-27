"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VisionMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      id="vision" 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden py-32"
    >
      {/* Background with parallax lines */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ y: textY, opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-24"
      >
        {/* Vision */}
        <div className="flex flex-col gap-6">
          <div className="text-[#f59e0b] font-semibold tracking-[4px] uppercase text-sm glass-orange px-4 py-2 rounded-full inline-block mx-auto mb-4">
            Our Vision
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[var(--font-space-grotesk)] leading-tight break-words">
            To become the <span className="gradient-text glow-text-orange">#1</span> marketing partner for <span className="text-white">food brands.</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#ff6b00]/50 to-transparent" />

        {/* Mission */}
        <div className="flex flex-col gap-6">
          <div className="text-[#ff6b00] font-semibold tracking-[4px] uppercase text-sm glass-orange px-4 py-2 rounded-full inline-block mx-auto mb-4">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space-grotesk)] leading-tight text-[#94a3b8] break-words">
            Deliver measurable <span className="text-white">growth</span> through bold <span className="text-white">creative</span> and intelligent <span className="text-white">strategy.</span>
          </h2>
        </div>
      </motion.div>

      {/* Floating Light beams */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]) }}
        className="absolute top-0 left-1/4 w-[2px] h-[40vh] bg-gradient-to-b from-transparent via-[#ff6b00]/30 to-transparent"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]) }}
        className="absolute bottom-0 right-1/4 w-[2px] h-[50vh] bg-gradient-to-b from-transparent via-[#f59e0b]/30 to-transparent"
      />
    </section>
  );
}
