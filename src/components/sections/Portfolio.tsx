import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'AI', 'Biotech', 'Clean Energy'];
  
  const portfolioItems = [
    {
      name: "NeuraTech AI",
      category: "AI",
      description: "Advanced neural network infrastructure for enterprise applications",
      metrics: { growth: "140%", valuation: "$450M" },
      image: "/images/e.jpg"
    },
    {
      name: "GenomeCure",
      category: "Biotech",
      description: "Pioneering gene therapy solutions for rare diseases",
      metrics: { growth: "85%", valuation: "$320M" },
    image: "/images/b.jpg"
    },
    {
      name: "SolarFlow",
      category: "Clean Energy",
      description: "Revolutionary solar energy storage solutions",
      metrics: { growth: "120%", valuation: "$280M" },
     image: "/images/c.jpg"
    },
    {
      name: "Quantum Computing Labs",
      category: "AI",
      description: "Quantum-inspired algorithms for optimization",
      metrics: { growth: "95%", valuation: "$220M" },
     image: "/images/a.jpg"
    },
    {
      name: "BioMatrix",
      category: "Biotech",
      description: "AI-powered drug discovery platform",
      metrics: { growth: "110%", valuation: "$390M" },
     image: "/images/e.jpg"
    },
    {
      name: "WindGrid",
      category: "Clean Energy",
      description: "Smart grid solutions for renewable energy",
      metrics: { growth: "75%", valuation: "$180M" },
     image: "/images/c.jpg"
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with visionary entrepreneurs to build category-defining companies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500">
                    <div>Growth: {item.metrics.growth}</div>
                    <div>Valuation: {item.metrics.valuation}</div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ArrowUpRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;