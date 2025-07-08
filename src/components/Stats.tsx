
export const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Replies Sent" },
    { number: "99.9%", label: "Relevance Accuracy" },
    { number: "2 min", label: "Setup Time" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Divider before stats */}
        <div className="divider mb-16"></div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-1 geist-font tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm inter-font font-normal">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block vertical-divider h-12 ml-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
