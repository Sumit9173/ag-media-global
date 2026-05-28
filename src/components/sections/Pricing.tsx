"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Sparkles, Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹11,999",
    desc: "Perfect for local cafes and single-location restaurants starting out.",
    features: [
      "8 Reels/Month",
      "2 Shoot Visit Days",
      "Professional Editing",               
      "Captions & Hashtags",
      "Content Planing",
      "Posting Guidance",
      "Monthly Performance Report",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹19,999",
    desc: "Ideal for growing food brands looking to scale their online presence.",
    features: [
      "15 Reels/Month",
      "4 Shoot Visit Days",
      "Professional Editing",               
      "Captions & Hashtags",
      "Content Planning",
      "Posting Guidance",
      "Lead Form Integration",
      "Monthly Performance Report",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹39,999",
    desc: "Full-stack marketing for established chains and FMCG brands.",
    features: [
      "30 Reels/Month",
      "8 Shoot Visit Days",
      "Advanced Editing",
      "Meta Ads Management",               
      "Captions & Hashtags",
      "Content Planing",
      "Posting Guidance",
      "Lead Form Integration",
      "Full Business Website",
      "24/7 Priority Support",
      "Monthly Performance Report",
    ],
    highlight: false,
  },
];

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<typeof plans[number] | null>(null);

  return (
    <section id="pricing" className="relative section-padding bg-[#0a0a0a]">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#ff6b00]/5 rounded-[100%] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-28 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] mb-8 md:mb-12 break-words"
          >
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-center px-4"
          >
            No hidden fees, no surprises. Just straightforward packages designed to scale with your food brand&apos;s growth and ambitions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7 max-w-6xl mx-auto relative top-10">
          {plans.map((plan, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative flex flex-col glass rounded-[2.5rem] p-8 md:p-10 pb-12 md:pb-14 overflow-visible pt-8 transition-all duration-700 ${plan.highlight ? "border-[#ff6b00]/40 shadow-[0_0_60px_rgba(255,107,0,0.15)]" : "border-white/5"} ${isHovered ? "scale-[1.03] bg-[#111] border-[#ff6b00]/30 z-10" : "z-0"}`}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] text-white text-[10px] uppercase tracking-[5px] rounded-full shadow-[0_0_30px_rgba(255,107,0,0.5)] z-[999] whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-10 pt-2">
                  <h3 className="text-3xl font-bold text-center text-white mb-3 font-[var(--font-space-grotesk)]">
                    {plan.name}
                  </h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed min-h-[3rem]">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-10 pb-10 border-b border-white/10">
                  <div className="flex items-end gap-2">
                    <span className={`text-5xl font-bold font-[var(--font-space-grotesk)] ${plan.highlight ? "text-[#ff6b00]" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className="text-[#64748b] mb-2 font-medium">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow mb-8">
                  <ul className="flex flex-col gap-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-[#ff6b00]/20 text-[#ff6b00]" : "bg-white/5 text-[#94a3b8]"}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base text-[#cbd5e1] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto flex justify-center w-full px-2 mb-4">
                  <button
                    onClick={() => setSelectedPlanForModal(plan)}
                    className={`group relative w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-500 flex items-center justify-center overflow-hidden cursor-pointer ${plan.highlight
                      ? "bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] text-white hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                      : "glass text-white hover:bg-white/10 hover:border-[#ff6b00]/30 hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                  >
                    {/* Background Shine */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    {/* Premium Glow Effect */}
                    <span className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 ${plan.highlight ? "bg-[#ff6b00]" : "bg-white/20"
                      }`} />

                    <span className="relative z-10">
                      Get Started
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Premium Glassmorphic Confirmation Modal */}
      <AnimatePresence>
        {selectedPlanForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with strong blur and dimming */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlanForModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Premium Glassmorphic Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-lg glass bg-[#070707]/80 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_60px_rgba(255,107,0,0.2)] text-center overflow-hidden z-50"
            >
              {/* Top Accent Light Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-to-b from-[#ff6b00]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Header Icon */}
              <div className="relative mx-auto w-16 h-16 rounded-2xl glass-orange flex items-center justify-center text-[#ff6b00] mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 font-[var(--font-space-grotesk)] leading-tight">
                Are you sure you want to get this plan?
              </h3>

              {/* Selected Plan Details Card */}
              <div className="my-6 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-xs uppercase tracking-[2px] font-black text-[#ff6b00] mb-1">
                  Selected Package
                </span>
                <span className="text-xl md:text-2xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                  {selectedPlanForModal.name} Plan
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#f59e0b] font-[var(--font-space-grotesk)]">
                    {selectedPlanForModal.price}
                  </span>
                  <span className="text-xs text-[#64748b]">/month</span>
                </div>
              </div>

              {/* Subtext */}
              <div className="mt-6 mb-6 px-6 py-6 rounded-xl">
              <p className="text-[#94a3b8] text-base text-center">
                Your request will be sent to the <span className="text-white font-semibold">AG Media</span> team and we will contact you shortly. Please fill the contact form to complete your request.
              </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Cancel Button */}
                <button
                  onClick={() => setSelectedPlanForModal(null)}
                  className="w-full sm:w-1/2 py-4 px-6 rounded-xl font-bold text-sm text-white glass border border-white/5 hover:border-white/20 hover:bg-white/5 active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                

                {/* Confirm Button */}
                <button
                  onClick={() => {
                    if (onSelectPlan) {
                      onSelectPlan(selectedPlanForModal.name);
                    }
                    setSelectedPlanForModal(null);
                    
                    // Smooth scroll to contact section
                    setTimeout(() => {
                      const contactEl = document.getElementById("contact");
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="w-full sm:w-1/2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Confirm & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
