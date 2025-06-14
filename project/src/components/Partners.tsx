import React from "react";
import { Phone, Mail, Linkedin, Award } from "lucide-react";
import naveenImage from "../assets/images/naveen.jpg";
import krishnaImage from "../Assets/Images/krishna.jpeg";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Venkata Krishna Goriparthi",
      designation: "Managing Partner",
      experience: "10+ Years",
      specialization: "Financial Planning & Business Development",
      phone: "+91 7306823404",
      email: "vkn@vknassociates.com",
      image: krishnaImage,
      achievements: [
        "Chartered Accountant (CA)",
        "Expert in Taxation & Compliance",
        "Industry Leader Award 2022",
      ],
    },
    {
      id: 2,
      name: "Naveen Kumar Nagineni",
      designation: "Partner",
      experience: "12+ Years",
      specialization:
        "Technology Consulting, Financial Systems & Digital Transformation",
      phone: "+91 9876543212",
      email: "naveen@vknassociates.com",
      image: naveenImage,
      achievements: [
        "Chartered Accountant (CA)",
        "M.Tech - Computer Science",
        "Digital Innovation Specialist",
        "Tech Leadership Award 2023",
      ],
      linkedin: "https://in.linkedin.com/in/naveen-kumar-nagineni-68034b41",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced partners who bring together decades of
            expertise across various domains to guide your business towards
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {partner.designation}
                </p>
                <p className="text-gray-600 text-sm">
                  {partner.experience} Experience
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Specialization
                </h4>
                <p className="text-gray-600">{partner.specialization}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {partner.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <a
                    href={`tel:${partner.phone}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {partner.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <a
                    href={`mailto:${partner.email}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {partner.email}
                  </a>
                </div>
                {partner.linkedin && (
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </div>
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
