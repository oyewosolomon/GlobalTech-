import React from 'react';
import { MapPin, Users, Lightbulb, Trophy } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    {
      city: "San Francisco",
      country: "USA",
      focus: "AI & Machine Learning",
      achievements: "15+ Portfolio Companies"
    },
    {
      city: "London",
      country: "UK",
      focus: "Fintech & AI",
      achievements: "10+ Portfolio Companies"
    },
    {
      city: "Singapore",
      country: "Singapore",
      focus: "Clean Energy",
      achievements: "8+ Portfolio Companies"
    },
    {
      city: "Tel Aviv",
      country: "Israel",
      focus: "Cybersecurity & AI",
      achievements: "12+ Portfolio Companies"
    },
    {
      city: "Tokyo",
      country: "Japan",
      focus: "Robotics & Biotechnology",
      achievements: "7+ Portfolio Companies"
    }
  ];

  const stats = [
    { icon: MapPin, value: "5", label: "Global Innovation Labs" },
    { icon: Users, value: "200+", label: "Team Members" },
    { icon: Lightbulb, value: "50+", label: "Portfolio Companies" },
    { icon: Trophy, value: "25+", label: "Industry Awards" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Operating innovation labs across major technology hubs worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                  <p className="text-gray-600">{location.country}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{location.focus}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{location.achievements}</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;