import React from "react";
import {
  MapPin,
  Calendar,
  Target,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About VKN Associates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading consultancy firm based in Hyderabad, committed to
            delivering exceptional business solutions since 2016.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2016, VKN Associates has been at the forefront of
              providing strategic consultancy services to businesses across
              various industries. Our commitment to excellence and client
              satisfaction has made us a trusted partner for organizations
              seeking growth and transformation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Hyderabad's business district, we combine
              local market knowledge with global best practices to deliver
              solutions that drive real results for our clients.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <MapPin className="h-5 w-5" />
              <a
                href="https://www.google.com/maps?q=5th+Floor,+Vertex+Cute,+504,+Jai+Bharat+Nagar,+Nagarjuna+Homes,+Kukatpally,+Hyderabad,+Telangana+500090"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                5th Floor, Vertex Cute, 504, Jai Bharat Nagar, Nagarjuna Homes,
                Kukatpally, Hyderabad, Telangana 500090
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">2016</h4>
                <p className="text-gray-600">Established</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">15+</h4>
                <p className="text-gray-600">Industries</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">98%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              To empower businesses with strategic insights and innovative
              solutions that drive sustainable growth and competitive advantage
              in today's dynamic marketplace.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-600 text-center">
              To be the leading consultancy firm in South India, recognized for
              our excellence, integrity, and transformative impact on our
              clients' success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Values
            </h3>
            <p className="text-gray-600 text-center">
              Integrity, Excellence, Innovation, and Client-centricity form the
              foundation of everything we do. We believe in building lasting
              relationships based on trust and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
