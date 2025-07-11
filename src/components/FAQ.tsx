
export const FAQ = () => {
  const faqs = [
    {
      question: "How does AutoReply protect my privacy?",
      answer: "Your documents are encrypted in transit and at rest. We automatically delete uploaded documents after processing, and your emails are never stored on our servers. All AI processing happens in secure, isolated environments."
    },
    {
      question: "Can I customize the AI responses?",
      answer: "Yes! You can upload your own documents, set custom response templates, and train the AI on your preferred communication style. The Pro plan includes advanced customization options."
    },
    {
      question: "Which email providers do you support?",
      answer: "AutoReply works with Gmail, Outlook, Yahoo Mail, and any IMAP-enabled email provider. We also support popular email clients like Apple Mail and Thunderbird."
    },
    {
      question: "How accurate are the AI responses?",
      answer: "Our AI achieves 99.9% relevance accuracy in our testing. The system continuously learns from your feedback and improves over time. You can always review and edit responses before sending."
    },
    {
      question: "Can I use AutoReply for my team?",
      answer: "Absolutely! Our Pro and Enterprise plans support team collaboration, shared templates, and centralized billing. Enterprise customers get dedicated support and custom integrations."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "Free users can upgrade anytime. Pro users get soft limits with the option to purchase additional replies. We'll always notify you before any charges and never interrupt your service unexpectedly."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="divider mb-16"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white geist-font">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto inter-font">
            Everything you need to know about AutoReply. Can't find the answer you're looking for? 
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors"> Contact us</a>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-white font-semibold text-lg geist-font pr-4">{faq.question}</h3>
                  <i className="fas fa-chevron-down text-gray-400 transition-transform group-open:rotate-180"></i>
                </summary>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-300 inter-font leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
