
import { Shield, Brain, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Documents auto-deleted after reply. Your data stays secure and private.",
      color: "blue"
    },
    {
      icon: Brain,
      title: "Smart Reply",
      description: "Contextual GPT-4 responses that understand your communication style.",
      color: "indigo"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get intelligent replies in under 5 seconds. No waiting, just results.",
      color: "purple"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10 border-blue-400/20';
      case 'indigo': return 'bg-indigo-500/10 border-indigo-400/20';
      case 'purple': return 'bg-purple-500/10 border-purple-400/20';
      default: return 'bg-blue-500/10 border-blue-400/20';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-400';
      case 'indigo': return 'text-indigo-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <section className="py-20 px-6" id="features">
      <div className="container mx-auto">
        {/* Divider before feature cards */}
        <div className="divider mb-16"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent geist-font">
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 shadow-lg">
              <div className={`w-12 h-12 rounded-xl ${getIconBgColor(feature.color)} backdrop-blur-sm border flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`h-6 w-6 ${getIconColor(feature.color)}`} />
              </div>
              <h3 className="text-lg font-light text-white mb-2 geist-font tracking-tight">{feature.title}</h3>
              <p className="text-gray-300 text-sm inter-font font-normal leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
