
import { Mail, Upload, Zap, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Mail,
      title: "Connect Email",
      description: "Link your email account securely with one click"
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Add context with your documents (optional)"
    },
    {
      icon: Zap,
      title: "Smart Replies",
      description: "AutoReply drafts intelligent responses instantly"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          How It Works
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-white/50 mx-4 mt-8 md:mt-0 rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
