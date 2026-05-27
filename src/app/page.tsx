"use client";

import { useState } from "react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VisionMission } from "@/components/sections/VisionMission";
import { Strategy } from "@/components/sections/Strategy";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <VisionMission />
          <Strategy />
          <WhyChooseUs />
          <Pricing
            onSelectPlan={(planName) => {
              setSelectedPlan(planName);
              setIsHighlighted(true);
            }}
          />
          <Contact
            selectedPlan={selectedPlan}
            isHighlighted={isHighlighted}
            onHighlightComplete={() => setIsHighlighted(false)}
            onClearPlan={() => setSelectedPlan(null)}
          />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
