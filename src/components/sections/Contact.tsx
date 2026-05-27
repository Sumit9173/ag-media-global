"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, Check, Sparkles, X } from "lucide-react";

interface ContactProps {
  selectedPlan?: string | null;
  isHighlighted?: boolean;
  onHighlightComplete?: () => void;
  onClearPlan?: () => void;
}

export function Contact({
  selectedPlan = null,
  isHighlighted = false,
  onHighlightComplete,
  onClearPlan
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [activeHighlight, setActiveHighlight] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Pre-fill message field when plan is selected
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in getting the ${selectedPlan} Plan for my brand. Let's discuss how we can drive growth!`
      }));
    }
  }, [selectedPlan]);

  // Handle active highlighting when requested
  useEffect(() => {
    if (isHighlighted) {
      setActiveHighlight(true);
      
      // Auto-focus the name field for premium interactive experience
      const nameInput = document.getElementById("name");
      if (nameInput) {
        nameInput.focus();
      }

      // Turn off highlight after 3.5 seconds
      const timer = setTimeout(() => {
        setActiveHighlight(false);
        if (onHighlightComplete) {
          onHighlightComplete();
        }
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isHighlighted, onHighlightComplete]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, brand, email, phone, message } = formData;
    if (!name || !brand || !email || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          brand,
          email,
          phone,
          selectedPlan,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        toast.success("Request sent successfully!");
        
        // Reset form
        setFormData({
          name: "",
          brand: "",
          email: "",
          phone: "",
          message: "",
        });
        
        if (onClearPlan) {
          onClearPlan();
        }
      } else {
        setSubmitSuccess(false);
        toast.error(data.error || "Failed to send email. Please check configuration.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitSuccess(false);
      toast.error("Connection error. Failed to reach the email server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full bg-black/60 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-transparent focus:outline-none focus:border-[#ff6b00] focus:bg-[#ff6b00]/5 transition-all peer";
  const labelStyles = "absolute left-8 -top-2.5 bg-[#050505] px-2 text-xs text-[#ff6b00] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#94a3b8] peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#050505]";

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background Map Simulation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b00]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f59e0b]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <h2 className="text-4xl md:text-7xl font-bold font-[var(--font-space-grotesk)] leading-[1.1]">
              Let&apos;s Brew <br />
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-[#94a3b8] text-xl max-w-md leading-relaxed">
              Ready to take your food brand to the next level? Drop us a line and let&apos;s discuss how we can drive measurable growth together.
            </p>

            <div className="flex flex-col gap-10">
              {/* Email */}
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass-orange flex items-center justify-center text-[#ff6b00] group-hover:scale-110 group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[#ff6b00]/20 font-[var(--font-space-grotesk)]">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#64748b] text-xs mb-2 uppercase font-black tracking-[2px]">Email Us</p>
                  <a href="mailto:ojhasumit677@gmail.com" className="text-xl md:text-2xl text-white font-bold hover:text-[#ff6b00] transition-colors font-[var(--font-space-grotesk)]">
                    ojhasumit677@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl font-[var(--font-space-grotesk)]">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#64748b] text-xs mb-2 uppercase font-black tracking-[2px]">Call Us</p>
                  <a href="tel:+917043359487" className="text-xl md:text-2xl text-white font-bold hover:text-[#ff6b00] transition-colors font-[var(--font-space-grotesk)]">
                    +91 70433 59487
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-8 group font-[var(--font-space-grotesk)]">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gradient-to-tr from-[#fd5949] to-[#d6249f] transition-all duration-500 shadow-xl">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#64748b] text-xs mb-2 uppercase font-black tracking-[2px]">Follow Us</p>
                  <a href="https://instagram.com/agmedia_global" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white font-bold hover:text-[#ff6b00] transition-colors font-[var(--font-space-grotesk)]">
                    @agmedia_global
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`glass rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl border-white/10 transition-all duration-500 ${
              activeHighlight
                ? "border-[#ff6b00] ring-4 ring-[#ff6b00]/20 shadow-[0_0_60px_rgba(255,107,0,0.4)] scale-[1.02]"
                : ""
            }`}
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-50 rounded-t-2xl pointer-events-none" />

            {/* Selected Plan Premium Indicator */}
            {selectedPlan && (
              <div className="mb-8 flex items-center justify-between p-4 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-white">
                    Plan Selected: <span className="gradient-text font-black">{selectedPlan}</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (onClearPlan) onClearPlan();
                    setFormData(prev => ({ ...prev, message: "" }));
                  }}
                  className="text-xs text-[#94a3b8] hover:text-[#ff6b00] transition-colors cursor-pointer"
                >
                  Clear Plan
                </button>
              </div>
            )}

            <form className="flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Name" required className={inputStyles} disabled={isSubmitting} />
                  <label htmlFor="name" className={labelStyles}>Your Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className={inputStyles} disabled={isSubmitting} />
                  <label htmlFor="brand" className={labelStyles}>Brand Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={inputStyles} disabled={isSubmitting} />
                  <label htmlFor="email" className={labelStyles}>Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className={inputStyles} disabled={isSubmitting} />
                  <label htmlFor="phone" className={labelStyles}>Phone Number</label>
                </div>
              </div>

              <div className="relative">
                <textarea id="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Message" required className={`${inputStyles} resize-none`} disabled={isSubmitting} />
                <label htmlFor="message" className={labelStyles}>Tell us about your goals</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-5 px-8 text-white font-black text-lg rounded-2xl overflow-hidden mt-6 transition-all duration-500 active:scale-[0.98] flex items-center justify-center cursor-pointer ${
                  isSubmitting ? "opacity-75 cursor-not-allowed scale-[0.99]" : "hover:scale-[1.02]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] transition-transform duration-700 group-hover:scale-110" />
                
                {/* Shine hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10 flex items-center justify-center text-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin shrink-0" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Premium Glassmorphic Success Popup Modal */}
      <AnimatePresence>
        {submitSuccess && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitSuccess(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Premium Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-lg glass bg-[#070707]/80 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_60px_rgba(255,107,0,0.2)] text-center overflow-hidden z-50"
            >
              {/* Top Accent Light Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-to-b from-[#ff6b00]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Glowing Badge */}
              <div className="relative mx-auto w-20 h-20 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00] mb-6 shadow-lg">
                <Check className="w-10 h-10 animate-pulse" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 font-[var(--font-space-grotesk)] leading-tight">
                Request Sent Successfully!
              </h3>

              {/* Success Description */}
              <p className="text-[#cbd5e1] text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                Your request has been sent successfully. <span className="text-[#ff6b00] font-bold">AG Media</span> team will contact you soon.
              </p>

              {/* Action Button */}
              <button
                onClick={() => setSubmitSuccess(null)}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-[var(--font-space-grotesk)]"
              >
                Great, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
