import ContactHero from "@/components/ContactHero";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValueSection";
import ValuesTextSection from "@/components/ValuesTextSection";
import VisionSection from "@/components/VisionSection";
import WhatWeDoSection from "@/components/WhatWeDo";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/about.png')", // put image in /public
          }}
        />

        {/* Dark Overlay (important for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center h-screen pt-20">
            <h1 className="text-[130px] font-inter font-[800] tracking-[-5.2px] text-white ">
              About Us
            </h1>
            <p className="text-white font-interDisplay font-normal text-[28px] max-w-[25%] text-center tracking-[-1.3px]">
              Building ambitious, forward looking, relentless eco systems
            </p>
          </div>
        </div>
      </div>

      <WhatWeDoSection />

      <VisionSection />
      <JoinSection />
      <TeamSection />
      <ValuesSection/>
      <ValuesTextSection/>
      <HeroSection/>
      <ContactHero/>
    </main>
  );
}
