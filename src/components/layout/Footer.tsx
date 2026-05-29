"use client";


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b00]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#ff6b00]/10 rounded-t-full blur-[50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110">
              <img
                src="/ag-media_icon.jpeg"
                alt="AG Media - Creative Food & Beverage Marketing Agency Logo"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-wide font-[var(--font-space-grotesk)]">
              AG <span className="gradient-text">MEDIA</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-[#94a3b8] text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:text-[#ff6b00] transition-all group border border-white/5"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-[#94a3b8]">
          <p>&copy; {new Date().getFullYear()} AG Media. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
