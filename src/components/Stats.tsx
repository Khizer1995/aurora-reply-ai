
export const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Replies Sent" },
    { number: "99.9%", label: "Relevance Accuracy" },
    { number: "2 min", label: "Setup Time" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
