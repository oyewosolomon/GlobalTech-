import React, { useState } from 'react';
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  ArrowRight,
  Mail,
  Globe,
  Phone
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    solutions: [
      { name: 'AI & Machine Learning', href: '#' },
      { name: 'Biotechnology', href: '#' },
      { name: 'Clean Energy', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Research', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Annual Reports', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest insights and updates</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors flex items-center"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">GlobalTech Ventures</h2>
            <p className="text-gray-400 mb-6">
              Transforming innovative ideas into world-changing companies through strategic investment and partnership.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-blue-500" />
                <span className="text-gray-400">Global Headquarters</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span className="text-gray-400">contact@globaltech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span className="text-gray-400">+1 (415) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {['company', 'solutions', 'resources'].map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 capitalize">{category}</h3>
              <ul className="space-y-4">
                {footerLinks[category].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left text-sm text-gray-400">
            <p>© {currentYear} GlobalTech Ventures. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;