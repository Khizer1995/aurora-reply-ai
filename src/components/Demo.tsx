
export const Demo = () => {
  return (
    <section id="demo" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text geist-font">
            See AutoReply in Action
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto inter-font">
            Watch how AutoReply transforms your email workflow in seconds
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="primary-button p-6 rounded-full hover:scale-110 transition-transform">
                  <i className="fas fa-play text-2xl"></i>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm inter-font opacity-80">Demo Video</div>
                <div className="text-xs inter-font opacity-60">2:30 minutes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-inbox text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 geist-font">Email Integration</h3>
              <p className="text-gray-300 text-sm inter-font">Connect your email in one click and start receiving intelligent reply suggestions instantly.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 geist-font">AI Analysis</h3>
              <p className="text-gray-300 text-sm inter-font">Our AI understands context, tone, and intent to craft perfect responses every time.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-paper-plane text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold mb-2 geist-font">Smart Replies</h3>
              <p className="text-gray-300 text-sm inter-font">Review, edit, and send professionally crafted responses with just one click.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
