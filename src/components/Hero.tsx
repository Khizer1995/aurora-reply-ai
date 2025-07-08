
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8 float-animation">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] geist-font tracking-tight">
            Automated Email Replies.
            <br />
            <span className="gradient-text block tracking-tight">
              Powered by AI.
            </span>
            <br />
            <span className="text-white/90">
              Backed by your knowledge.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed inter-font font-normal">
            AutoReply reads your emails, analyzes your documents, and sends intelligent, 
            context-aware replies — all in seconds.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inter-font">
            Try it Free
          </button>
          <button className="secondary-button px-8 py-6 rounded-lg text-white font-semibold text-lg transition-all duration-300 inter-font flex items-center">
            <Play className="mr-2 h-5 w-5" />
            See it in Action
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 inter-font font-normal">Discover More</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
