
export const SocialProof = () => {
  const companies = [
    { name: "TechCorp", logo: "fas fa-building" },
    { name: "StartupHub", logo: "fas fa-rocket" },
    { name: "InnovateInc", logo: "fas fa-lightbulb" },
    { name: "GlobalTech", logo: "fas fa-globe" },
    { name: "FutureWorks", logo: "fas fa-cogs" },
    { name: "CloudSync", logo: "fas fa-cloud" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-8 inter-font">Trusted by teams at</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <i className={`${company.logo} text-white text-lg`}></i>
                </div>
                <span className="text-gray-400 text-xs inter-font">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
