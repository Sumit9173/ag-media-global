"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

const stats = [
  { value: 50, suffix: "+", label: "Food Brands Served" },
  { value: 3, suffix: "X", label: "ROI Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Food & Bev Focused" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.round(eased * value);
          if (el) el.textContent = `${start}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text font-[var(--font-space-grotesk)]">
      0{suffix}
    </span>
  );
}

export function Hero() {
  const mouseGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.left = `${e.clientX}px`;
        mouseGlowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Mouse-follow glow */}
      <div
        ref={mouseGlowRef}
        className="hidden md:block pointer-events-none fixed z-10 w-[400px] h-[400px] rounded-full bg-[#ff6b00]/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-[#ff6b00]/10 via-transparent to-transparent" />

      {/* Orange bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#ff6b00]/10 blur-[100px] z-[1] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-4 pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-orange text-sm font-semibold text-[#ff6b00]"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
          Food &amp; Beverage Marketing Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight font-[var(--font-space-grotesk)] max-w-5xl break-words"
        >
          Brewing{" "}
          <span className="gradient-text glow-text-orange">Success</span>{" "}
          <br className="hidden md:block" />
          For Your Food Brand
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.7 }}
          className="text-base md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed mb-4"
        >
          Results-driven marketing for modern food &amp; beverage brands.
          Strategy, creativity, and data — all under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          <a
            id="hero-explore-btn"
            href="#strategy"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("strategy");
            }}
            className="group relative px-6 md:px-10 py-4 md:py-5 min-w-[180px] w-full sm:w-fit max-w-full text-sm md:text-base font-bold text-white bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] flex items-center justify-center text-center gap-3 whitespace-nowrap"
          >
            <span className="relative z-10">Explore Services</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <WhatsAppButton variant="secondary" className="px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 w-full max-w-4xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 glass rounded-2xl p-4 hover:border-[#ff6b00]/20 transition-all duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-[#94a3b8] text-xs md:text-sm text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#94a3b8] text-xs tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#ff6b00] to-transparent animate-float" />
      </motion.div>
    </section>
  );
}
