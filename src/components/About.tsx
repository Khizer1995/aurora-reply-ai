
export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="divider mb-16"></div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white geist-font">
            About AutoReply
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed inter-font">
            We believe everyone deserves an intelligent email assistant. Founded by AI researchers and productivity experts, 
            AutoReply was born from the frustration of spending hours on repetitive email responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 geist-font">Our Mission</h3>
            <p className="text-gray-300 mb-6 inter-font leading-relaxed">
              To democratize AI-powered productivity tools and give everyone access to intelligent automation 
              that respects privacy and enhances human capabilities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mr-3">
                  <i className="fas fa-user-shield text-blue-400 text-sm"></i>
                </div>
                <span className="text-white inter-font">Privacy First</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center justify-center mr-3">
                  <i className="fas fa-leaf text-green-400 text-sm"></i>
                </div>
                <span className="text-white inter-font">Sustainable AI</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mr-3">
                  <i className="fas fa-users text-purple-400 text-sm"></i>
                </div>
                <span className="text-white inter-font">Human-Centered</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 geist-font">Our Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-2 inter-font">Transparency</h4>
                <p className="text-gray-300 text-sm inter-font">
                  Clear about how our AI works and what happens to your data.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 inter-font">Innovation</h4>
                <p className="text-gray-300 text-sm inter-font">
                  Constantly improving our AI models and user experience.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 inter-font">Accessibility</h4>
                <p className="text-gray-300 text-sm inter-font">
                  Making advanced AI tools available to everyone, not just big corporations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
