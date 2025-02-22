import React from 'react';
import { Brain, Microscope, Wind, ArrowRight } from 'lucide-react';

const Technology = () => {
  const areas = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Investing in transformative AI technologies from machine learning infrastructure to autonomous systems and natural language processing.",
      examples: ["Machine Learning", "Computer Vision", "NLP", "Robotics"]
    },
    {
      icon: Microscope,
      title: "Biotechnology",
      description: "Advancing breakthrough discoveries in genomics, synthetic biology, and personalized medicine to revolutionize healthcare.",
      examples: ["Gene Therapy", "Drug Discovery", "Synthetic Biology", "Diagnostics"]
    },
    {
      icon: Wind,
      title: "Clean Energy",
      description: "Supporting innovative solutions for sustainable energy production, storage, and distribution systems.",
      examples: ["Renewable Energy", "Energy Storage", "Smart Grid", "Carbon Capture"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Focus Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in revolutionary technologies that shape the future of humanity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6">
                <area.icon className="h-12 w-12 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              
              <div className="space-y-2">
                {area.examples.map((example, i) => (
                  <div key={i} className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {example}
                  </div>
                ))}
              </div>

              <button className="mt-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;