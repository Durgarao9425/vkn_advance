import React from 'react';
import { ArrowRight, Building2, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden" style={{ marginTop: '96px' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQtMS43OSA0LTQgNC00LTEuNzktNC00aDJjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            VKN Associates
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-fade-in-up animation-delay-200">
            Your Trusted Consultancy Partner in Hyderabad
          </p>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Providing exceptional consultancy services since 2016, we help businesses grow with strategic guidance and professional expertise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection('#booking')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToSection('#about')}
            className="border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 text-blue-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
          <div className="text-center">
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-3xl font-bold mb-2">8+</h3>
              <p className="text-blue-200">Years of Excellence</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-blue-200">Happy Clients</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-blue-200">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;