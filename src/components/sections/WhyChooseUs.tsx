"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Food Industry Specialists",
    desc: "We don't do tech, we don't do real estate. We only do food and beverage. We know what makes audiences crave your product.",
    highlight: "100%",
    highlightLabel: "Food Focus",
  },
  {
    title: "Full-Service Under One Roof",
    desc: "Stop managing multiple freelancers. We handle strategy, creative, photography, and ads seamlessly.",
    highlight: "360°",
    highlightLabel: "Solutions",
  },
  {
    title: "Data-Driven Approach",
    desc: "Every post, ad, and campaign is tracked. We optimize for ROAS, foot traffic, and actual sales—not just vanity metrics.",
    highlight: "ROI",
    highlightLabel: "Obsessed",
  },
  {
    title: "Transparent Communication",
    desc: "Real-time dashboards, bi-weekly check-ins, and clear reporting. You always know exactly what your marketing dollars are doing.",
    highlight: "24/7",
    highlightLabel: "Visibility",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative section-padding">
      <div className="absolute inset-0 bg-[#050505]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-bold tracking-[4px] uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-[#f59e0b]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] leading-[1.1] break-words"
          >
            Not Just Another <br className="md:hidden" />
            <span className="gradient-text glow-gold">Agency</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass rounded-[2.5rem] p-10 md:p-12 hover:bg-white/[0.03] transition-all duration-700 overflow-hidden border-white/5 hover:border-[#f59e0b]/30"
            >
              {/* Animated border gradient fallback or hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-10 items-start sm:items-center">
                <div className="flex-shrink-0 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex flex-col items-center justify-center group-hover:border-[#f59e0b]/50 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-700 group-hover:rotate-3 shadow-2xl">
                  <span className="text-3xl font-black text-[#f59e0b] font-[var(--font-space-grotesk)] tracking-tighter">{feature.highlight}</span>
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-[#64748b] mt-2">{feature.highlightLabel}</span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[var(--font-space-grotesk)] group-hover:text-[#f59e0b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#94a3b8] text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
