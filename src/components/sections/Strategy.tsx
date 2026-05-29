"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    desc: "Positioning your food brand to stand out in a crowded market through deep audience research and competitive analysis.",
    icon: "🎯",
  },
  {
    id: "02",
    title: "Social Media",
    desc: "Platform-specific content that drives engagement, builds community, and converts followers into loyal customers.",
    icon: "📱",
  },
  {
    id: "03",
    title: "Food Photography",
    desc: "Drool-worthy visual assets that capture the essence of your product and make audiences crave your food.",
    icon: "📸",
  },
  {
    id: "04",
    title: "Content Marketing",
    desc: "SEO-optimized blogs, newsletters, and digital content that establish authority and drive organic traffic.",
    icon: "✍️",
  },
  {
    id: "05",
    title: "Paid Advertising",
    desc: "Data-driven Meta, TikTok, and Google ad campaigns designed specifically for high-ROI food & beverage conversions.",
    icon: "📈",
  },
  {
    id: "06",
    title: "Influencer Marketing",
    desc: "Connecting your brand with authentic food creators to scale reach and build trust instantly.",
    icon: "🤝",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="relative section-padding bg-[#0a0a0a]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="h-px w-12 bg-[#ff6b00]" />
              <span className="text-[#ff6b00] text-sm font-bold tracking-[4px] uppercase">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] leading-[1.1] break-words"
            >
              The Recipe For <br />
              <span className="gradient-text">Brand Dominance</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#94a3b8] text-lg max-w-md mt-4 md:mt-20 leading-relaxed"
          >
            A full-stack approach to food &amp; beverage marketing. We don&apos;t just post content; we engineer growth through tactical precision.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full glass rounded-[2rem] p-10 md:p-12 hover:bg-[#111] transition-all duration-500 overflow-hidden border-white/5 hover:border-[#ff6b00]/20"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full gap-8">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl glass-orange flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[#ff6b00]/20">
                    {service.icon}
                  </div>
                  <span className="text-[#475569] font-mono text-sm font-bold group-hover:text-[#ff6b00] transition-colors">
                    {service.id}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-space-grotesk)] group-hover:text-[#ff6b00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="pt-10 mt-auto border-t border-white/5 group-hover:border-[#ff6b00]/20 transition-colors flex justify-center pb-2">
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#ff6b00] text-base font-bold flex items-center justify-center text-center gap-3 group-hover:gap-5 transition-all duration-300 py-3 px-8 w-full sm:w-auto rounded-full hover:bg-[#ff6b00]/10 border border-transparent hover:border-[#ff6b00]/20"
                  >
                    Learn more <span className="text-2xl leading-none group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
