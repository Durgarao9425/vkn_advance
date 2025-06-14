import React from "react";
import {
  TrendingUp,
  DollarSign,
  Users,
  Target,
  BarChart3,
  Shield,
  Lightbulb,
  Cog,
  FileText,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development to drive growth and competitive advantage.",
      features: [
        "Market Analysis",
        "Growth Strategy",
        "Competitive Intelligence",
        "Strategic Roadmaps",
      ],
    },
    {
      icon: DollarSign,
      title: "Financial Consulting",
      description:
        "Expert financial guidance to optimize your business performance and profitability.",
      features: [
        "Financial Planning",
        "Investment Advisory",
        "Cost Optimization",
        "Risk Assessment",
      ],
    },
    {
      icon: Users,
      title: "Tax Planning & Filing",
      description:
        "Comprehensive tax services including planning, preparation, and filing for individuals and businesses.",
      features: [
        "Income Tax Returns",
        "Tax Planning Strategies",
        "TDS Compliance",
        "Tax Advisory Services",
      ],
    },
    {
      icon: Target,
      title: "Business Process Optimization",
      description:
        "Streamline operations and improve efficiency across all business functions.",
      features: [
        "Process Mapping",
        "Workflow Optimization",
        "Quality Improvement",
        "Automation Strategy",
      ],
    },
    {
      icon: BarChart3,
      title: "Accounting Services",
      description:
        "Complete bookkeeping, financial statements preparation, and accounting software implementation.",
      features: [
        "Financial Statement Preparation",
        "Bookkeeping & Reconciliation",
        "Cash Flow Management",
        "Accounting Software Setup",
      ],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate risks to protect your business interests.",
      features: [
        "Risk Assessment",
        "Compliance Management",
        "Crisis Management",
        "Business Continuity",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation & Digital Transformation",
      description:
        "Embrace digital technologies to innovate and stay ahead of the competition.",
      features: [
        "Digital Strategy",
        "Technology Integration",
        "Innovation Labs",
        "Digital Culture",
      ],
    },
    {
      icon: FileText,
      title: "Audit & Assurance",
      description:
        "Professional audit services ensuring compliance and providing valuable business insights.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Due Diligence",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive consultancy services designed to address
            every aspect of your business needs and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Let's discuss how our expertise can help you achieve your business
              goals.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#booking");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;