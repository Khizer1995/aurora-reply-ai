
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Stats />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
