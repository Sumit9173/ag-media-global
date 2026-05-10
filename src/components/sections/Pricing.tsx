"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


const plans = [
  {
    name: "Starter",
    price: "₹11,999",
    desc: "Perfect for local cafes and single-location restaurants starting out.",
    features: [
      "Social Media Management (2 platforms)",
      "12 High-Quality Posts/month",
      "Basic Community Management",
      "Monthly Performance Report",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹19,999",
    desc: "Ideal for growing food brands looking to scale their online presence.",
    features: [
      "Social Media Management (3 platforms)",
      "20 High-Quality Posts/month",
      "Professional Food Photography (1 shoot)",
      "Basic Meta Ads Management",
      "Bi-weekly Strategy Calls",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹39,999",
    desc: "Full-stack marketing for established chains and FMCG brands.",
    features: [
      "Omnichannel Management",
      "Unlimited Content Creation",
      "Advanced Paid Ads & Retargeting",
      "Influencer Campaign Management",
      "SEO & Content Marketing",
      "Dedicated Account Manager",
    ],
    highlight: false,
  },
];

export function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleGetStarted = async (planName: string) => {
    setLoadingPlan(planName);

    // Simulate a brief loading state for "premium" feel
    await new Promise(resolve => setTimeout(resolve, 800));

    const phoneNumber = "917043359487";
    const message = `Hello AG Media, I want to get started with the ${planName} Plan.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast.success(`Request sent for ${planName} plan.`, {
      description: "Opening WhatsApp chat...",
    });

    setLoadingPlan(null);
  };

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
            className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] mb-8 md:mb-12"
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
                className={`relative flex flex-col glass rounded-[2.5rem] p-10 md:p-12 transition-all duration-700 ${plan.highlight ? "border-[#ff6b00]/40 shadow-[0_0_60px_rgba(255,107,0,0.15)]" : "border-white/5"
                  } ${isHovered ? "scale-[1.03] bg-[#111] border-[#ff6b00]/30 z-10" : "z-0"}`}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-10 bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] text-white text-[10px] font-black uppercase tracking-[2px] rounded-full shadow-[0_0_30px_rgba(255,107,0,0.5)] z-20">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-10">
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
                <div className="flex-grow mb-12">
                  <ul className="flex flex-col gap-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-[#ff6b00]/20 text-[#ff6b00]" : "bg-white/5 text-[#94a3b8]"}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base text-[#cbd5e1] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  disabled={loadingPlan !== null}
                  className={`group relative w-full py-5 px-6 rounded-2xl font-bold text-base transition-all duration-500 flex items-center justify-center text-center gap-3 overflow-hidden ${plan.highlight
                    ? "bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] text-white hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    : "glass text-white hover:bg-white/10 hover:border-[#ff6b00]/30 hover:scale-[1.02] active:scale-[0.98]"
                    } ${loadingPlan === plan.name ? "opacity-90 cursor-wait" : ""}`}
                >
                  {/* Background Shine */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  {/* Premium Glow Effect */}
                  <span className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 ${plan.highlight ? "bg-[#ff6b00]" : "bg-white/20"
                    }`} />

                  <span className="relative z-10 flex items-center justify-center text-center gap-3">
                    {loadingPlan === plan.name ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 fill-current group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-300" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Get Started</span>
                      </>
                    )}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
