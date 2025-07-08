
import { Shield, Brain, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Documents auto-deleted after reply. Your data stays secure and private."
    },
    {
      icon: Brain,
      title: "Smart Reply",
      description: "Contextual GPT-4 responses that understand your communication style."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get intelligent replies in under 5 seconds. No waiting, just results."
    }
  ];

  return (
    <section className="py-20 px-6" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
