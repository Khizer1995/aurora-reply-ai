
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to put your inbox on autopilot?
          </h2>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
          >
            Get Started Free
          </Button>
          
          <p className="text-white/70">No credit card required.</p>
        </div>
      </div>
    </section>
  );
};
