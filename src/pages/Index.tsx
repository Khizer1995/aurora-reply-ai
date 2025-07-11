
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Security } from "@/components/Security";
import { SocialProof } from "@/components/SocialProof";
import { Contact } from "@/components/Contact";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Demo />
        <Testimonials />
        <Stats />
        <Pricing />
        <About />
        <FAQ />
        <Security />
        <Contact />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
