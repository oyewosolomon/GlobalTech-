import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? '' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <svg fill="#2563eb" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 395.44 395.441"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.72,75.825c-67.207,0-121.876,54.681-121.876,121.886c0,67.208,54.677,121.878,121.876,121.878 c67.207,0,121.875-54.686,121.875-121.878C319.596,130.506,264.919,75.825,197.72,75.825z M197.72,270.149 c-40.002,0-72.436-32.429-72.436-72.438c0-40.004,32.434-72.426,72.436-72.426c40.024,0,72.453,32.43,72.453,72.426 C270.173,237.705,237.736,270.149,197.72,270.149z"></path> <path d="M395.433,197.718C395.433,88.52,306.94,0,197.714,0C88.518,0,0.008,88.512,0.008,197.718 c0,109.183,88.498,197.723,197.707,197.723C306.94,395.433,395.433,306.901,395.433,197.718z M367.076,189.161 c5.174,0,9.39,4.218,9.39,9.415c0,5.182-4.216,9.397-9.39,9.397c-5.197,0-9.413-4.216-9.413-9.397 C357.663,193.378,361.879,189.161,367.076,189.161z M28.391,207.973c-5.184,0-9.399-4.216-9.399-9.397 c0-5.197,4.216-9.415,9.399-9.415c5.197,0,9.396,4.218,9.396,9.415C37.786,203.757,33.588,207.973,28.391,207.973z M310.82,72.167 c3.679-3.675,9.629-3.675,13.284,0c3.679,3.681,3.679,9.64,0,13.305c-3.663,3.677-9.622,3.677-13.284,0 C307.133,81.808,307.133,75.849,310.82,72.167z M201.998,18.967c5.202,0,9.418,4.206,9.418,9.403c0,5.189-4.216,9.405-9.418,9.405 c-5.193,0-9.396-4.216-9.396-9.405C192.597,23.173,196.805,18.967,201.998,18.967z M71.328,72.167 c3.685-3.675,9.634-3.675,13.311,0c3.665,3.681,3.665,9.64,0,13.305c-3.685,3.677-9.634,3.677-13.311,0 C67.665,81.808,67.665,75.849,71.328,72.167z M84.645,324.962c-3.683,3.679-9.647,3.679-13.309,0c-3.663-3.679-3.663-9.63,0-13.309 c3.669-3.663,9.634-3.663,13.309,0C88.304,315.333,88.304,321.284,84.645,324.962z M201.998,376.465 c-5.193,0-9.396-4.216-9.396-9.413s4.202-9.413,9.396-9.413c5.202,0,9.418,4.216,9.418,9.413S207.2,376.465,201.998,376.465z M324.104,324.962c-3.663,3.679-9.622,3.679-13.284,0c-3.688-3.679-3.688-9.63,0-13.309c3.679-3.663,9.629-3.663,13.284,0 C327.783,315.333,327.783,321.284,324.104,324.962z M197.72,335.297c-75.851,0-137.577-61.73-137.577-137.579 c0-75.864,61.726-137.587,137.577-137.587c75.871,0,137.577,61.723,137.577,137.587 C335.297,273.567,273.591,335.297,197.72,335.297z"></path> </g> </g></svg>
            <span className="text-2xl font-bold text-blue-600">GlobalTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">AI & Machine Learning</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Biotechnology</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Clean Energy</a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Insights</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Portfolio</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Insights</a>
              <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;