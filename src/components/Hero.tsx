
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          Automated Email Replies.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Powered by AI.
          </span>
          <br />
          <span className="text-white/90">
            Backed by your knowledge.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          AutoReply reads your emails, analyzes your documents, and sends intelligent, 
          context-aware replies — all in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try it Free
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            See it in Action
          </Button>
        </div>
      </div>
    </section>
  );
};
