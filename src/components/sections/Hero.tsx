import React from 'react';
import { ArrowRight } from 'lucide-react';
import "./style.css";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8 opacity-0 animate-fade-in-up">
            Investing in Tomorrow's
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Technology
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 opacity-0 animate-fade-in-up animation-delay-300">
            Managing a $2B portfolio focused on AI, biotechnology, and clean energy innovations.
            Transforming groundbreaking ideas into global solutions.
          </p>

          <div className="flex justify-center space-x-6 opacity-0 animate-fade-in-up animation-delay-600">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center">
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105">
              Partner With Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up animation-delay-900">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2B+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Global Innovation Labs</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;