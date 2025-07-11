
export const Security = () => {
  const securityFeatures = [
    {
      icon: "fas fa-shield-alt",
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: "fas fa-user-shield",
      title: "Privacy by Design",
      description: "Your documents are automatically deleted after processing. We never store your email content."
    },
    {
      icon: "fas fa-lock",
      title: "SOC 2 Compliant",
      description: "Independently audited security controls and data protection measures."
    },
    {
      icon: "fas fa-certificate",
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations and user rights."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="divider mb-16"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white geist-font">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto inter-font">
            Your data security is our top priority. We implement multiple layers of protection 
            to keep your information safe and private.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-blue-400 text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold mb-3 geist-font">{feature.title}</h3>
              <p className="text-gray-300 text-sm inter-font leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span className="text-white text-sm inter-font">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span className="text-white text-sm inter-font">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span className="text-white text-sm inter-font">GDPR Ready</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm inter-font">
              Independently verified security and compliance certifications you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
