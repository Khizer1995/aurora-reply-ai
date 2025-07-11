
export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text geist-font">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto inter-font">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 geist-font">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2 inter-font">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none inter-font"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2 inter-font">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none inter-font"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2 inter-font">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none inter-font"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2 inter-font">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none inter-font"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2 inter-font">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none inter-font resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button className="primary-button w-full py-3 text-white rounded-lg font-medium text-sm inter-font">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 geist-font">Email</h4>
                  <p className="text-gray-300 inter-font">support@autoreply.ai</p>
                  <p className="text-gray-400 text-sm inter-font mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-comments text-green-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 geist-font">Live Chat</h4>
                  <p className="text-gray-300 inter-font">Available 24/7</p>
                  <p className="text-gray-400 text-sm inter-font mt-1">Get instant help from our team</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-book text-purple-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 geist-font">Documentation</h4>
                  <p className="text-gray-300 inter-font">Comprehensive guides</p>
                  <p className="text-gray-400 text-sm inter-font mt-1">Step-by-step tutorials and API docs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
