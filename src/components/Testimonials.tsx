
export const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-lg">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "AutoReply saves me hours every week. It's like having a smart assistant in my inbox."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Jordan Davis</div>
              <div className="text-white/70">Freelance Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
