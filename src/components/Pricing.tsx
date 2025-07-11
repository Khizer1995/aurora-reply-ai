
export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "10 replies per month",
        "Basic email analysis",
        "Simple document upload",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professionals and small teams",
      features: [
        "Unlimited replies",
        "Advanced AI analysis",
        "Priority document processing",
        "Email scheduling",
        "Priority support",
        "Custom templates"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Custom AI training",
        "API access",
        "SSO integration",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text geist-font">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto inter-font">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`glass-card rounded-2xl p-8 text-center relative ${plan.popular ? 'border border-blue-400/30' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium inter-font">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2 geist-font">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-light text-white geist-font">{plan.price}</span>
                <span className="text-gray-400 text-sm inter-font ml-1">/{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-8 inter-font">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="fas fa-check text-green-400 mt-1 mr-3 text-sm"></i>
                    <span className="text-gray-300 inter-font text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-medium text-sm inter-font transition-all duration-300 ${
                plan.popular 
                  ? 'primary-button text-white' 
                  : 'glass-button text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
