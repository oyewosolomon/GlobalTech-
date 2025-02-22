import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

// Define types for the team member and social links
type SocialLinks = {
  linkedin: string;
  twitter: string;
  email: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
};

type TeamMembers = {
  leadership: TeamMember[];
  advisors: TeamMember[];
};

const TeamShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'advisors'>('leadership');

  const teamMembers: TeamMembers = {
    leadership: [
      {
        name: "Sarah Chen",
        role: "Chief Executive Officer",
        bio: "Former VP at Goldman Sachs with 15+ years in technology investment. Led $5B+ in successful exits.",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "sarah@globaltech.com"
        }
      },
      {
        name: "Dr. Michael Rahman",
        role: "Chief Technology Officer",
        bio: "PhD in Quantum Computing. Previously led R&D at IBM Quantum. 20+ patents in AI and quantum technologies.",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "michael@globaltech.com"
        }
      },
      {
        name: "Elena Rodriguez",
        role: "Chief Investment Officer",
        bio: "Former Partner at Andreessen Horowitz. Specialized in deep tech investments with 12+ unicorn exits.",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "elena@globaltech.com"
        }
      }
    ],
    advisors: [
      {
        name: "Prof. James Wilson",
        role: "Scientific Advisor",
        bio: "Nobel Laureate in Physics. Pioneer in quantum computing and AI systems.",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "james@globaltech.com"
        }
      },
      {
        name: "Dr. Lisa Chang",
        role: "Biotech Advisor",
        bio: "Leading researcher in CRISPR technology. Founded three successful biotech startups.",
        image: "/api/placeholder/300/300",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "lisa@globaltech.com"
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders and visionaries driving the future of technology investment
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {(['leadership', 'advisors'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers[activeTab].map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-blue-400 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;