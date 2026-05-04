import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import Different from "@/components/Different";
import WhatWeAre from "@/components/WhatWeAre";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tagline />
      <Different />
      <WhatWeAre />
      <Membership />
      <Footer />
    </main>
  );
}
