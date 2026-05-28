"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { icon: "🎯", title: "Strategic Focus", desc: "Laser-focused on food & beverage — no generic playbooks." },
  { icon: "📊", title: "Data-Backed", desc: "Every decision is backed by analytics and real market data." },
  { icon: "🚀", title: "Growth Driven", desc: "Campaigns designed to scale your brand, not just look good." },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#ff6b00]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-[#ff6b00]" />
              <span className="text-[#ff6b00] text-sm font-bold tracking-[4px] uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] leading-[1.1]"
            >
              We Live &amp; Breathe{" "}
              <span className="gradient-text">Food Marketing</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-[#cbd5e1] text-lg md:text-xl leading-relaxed">
                AG Media is a results-driven marketing agency exclusively focused on the food &amp; beverage industry.
                We combine strategic thinking, creative storytelling, and data-backed marketing to help food brands{" "}
                <span className="text-white font-bold border-b-2 border-[#ff6b00]/30">grow, scale, and dominate their market.</span>
              </p>

              <p className="text-[#94a3b8] text-lg leading-relaxed">
                Unlike generalist agencies, we speak your language. From farm-to-table restaurants to FMCG giants,
                our team understands the nuances of what makes food audiences engage, trust, and buy.
              </p>
            </motion.div>

            {/* Pillars */}
            <motion.div variants={containerVariants} className="flex flex-col gap-5 mt-4">
              {pillars.map((p) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  className="flex items-start gap-6 glass rounded-2xl p-6 group hover:border-[#ff6b00]/20 hover:bg-[#ff6b00]/5 transition-all duration-500 shadow-xl"
                >
                  <div className="text-3xl mt-1 group-hover:scale-125 transition-transform duration-500">{p.icon}</div>
                  <div>
                    <div className="font-bold text-white text-lg mb-1 font-[var(--font-space-grotesk)] group-hover:text-[#ff6b00] transition-colors">
                      {p.title}
                    </div>
                    <div className="text-[#94a3b8] text-base leading-relaxed">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex sm:inline-flex items-center justify-center text-center gap-4 px-6 md:px-10 py-4 md:py-5 min-w-[220px] w-full sm:w-fit max-w-full bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] text-white rounded-2xl font-bold text-base md:text-lg hover:opacity-90 hover:scale-105 transition-all duration-500 glow-orange whitespace-nowrap"
              >
                Work With Us
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Premium Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] md:h-[700px] group"
          >
            {/* Ambient glow behind image */}
            <div className="absolute -inset-10 bg-[#ff6b00]/15 blur-[120px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 z-0" />

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full z-10"
            >
              {/* Image container */}
              <div
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px -12px rgba(0,0,0,0.7), 0 0 60px rgba(255,107,0,0.18)",
                }}
              >
                {/* Hover zoom inner wrapper */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full relative z-10 overflow-hidden rounded-[2.5rem]"
                >
                  {/* The actual image */}
                  <img
                    src="/about-us.jpeg"
                    alt="AG Media Premium Marketing Workspace"
                    className="w-full h-auto min-h-full object-cover object-center rounded-[2.5rem] shadow-[0_0_40px_rgba(255,107,0,0.3)] relative z-10"
                    style={{
                      display: "block",
                    }}
                  />
                </motion.div>

                {/* Colour-grade overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,107,0,0.08) 0%, transparent 60%, rgba(245,158,11,0.05) 100%)",
                  }}
                />

                {/* Inner border ring */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }}
                />
              </div>
            </motion.div>

            {/* Floating badge — top left */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 glass-orange rounded-2xl px-5 py-3 text-sm font-black text-[#ff6b00] shadow-[0_0_30px_rgba(255,107,0,0.25)] z-20"
            >
              50+ Brands
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-5 glass-orange rounded-2xl px-5 py-3 text-sm font-black text-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.25)] z-20"
            >
              3× Average ROI
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
