"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Strategy", href: "#strategy" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "py-5 bg-transparent"
          }`}
      >
        <nav aria-label="Main Navigation" className="w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-13 h-13 rounded-xl overflow-hidden glow-orange transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <img
                  src="/ag-media_icon.jpeg"
                  alt="AG Media - Creative Food & Beverage Marketing Agency Logo"
                  width={52}
                  height={52}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight font-[var(--font-space-grotesk)]">
                AG <span className="gradient-text">MEDIA</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`relative px-4 py-2 text-[15px] font-medium transition-all duration-300 rounded-lg ${isActive
                      ? "text-[#ff6b00]"
                      : "text-[#94a3b8] hover:text-[#ff6b00] hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-white/5 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 transition-colors duration-300">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <WhatsAppButton className="px-6 py-3 text-sm" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden flex flex-col gap-1.5 p-3 group glass rounded-xl border-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-200 text-[15px] font-medium ${isActive
                      ? "text-[#ff6b00] bg-white/5"
                      : "text-[#94a3b8] hover:text-[#ff6b00] hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <WhatsAppButton className="mt-2 px-5 py-3 text-sm" />
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
}
