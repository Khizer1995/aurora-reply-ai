
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent geist-font">
            Ready to put your inbox on autopilot?
          </h2>
          
          <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4 inter-font">
            Get Started Free
          </button>
          
          <p className="text-white/70 inter-font">No credit card required.</p>
        </div>
      </div>
    </section>
  );
};
