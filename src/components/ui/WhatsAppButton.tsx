"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917043359487";
const DEFAULT_MESSAGE = "Hello AG Media, I want to book a consultation for my business.";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  showIcon?: boolean;
}

export function WhatsAppButton({ 
  className = "", 
  variant = "primary",
  showIcon = true 
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const baseStyles = "relative flex items-center justify-center text-center gap-3 px-6 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold rounded-xl transition-all duration-500 overflow-hidden group";
  
  const variantStyles = {
    primary: "text-white bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] hover:scale-105 active:scale-95",
    secondary: "text-white glass border border-white/10 hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/5 hover:scale-105 active:scale-95"
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {/* Background Shine Animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {/* Glow Effect */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#f59e0b] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
      )}

      {showIcon && (
        <MessageCircle className="w-5 h-5 group-hover:rotate-[15deg] transition-transform duration-300" />
      )}
      <span className="relative z-10">Book Consultation</span>
    </motion.button>
  );
}
