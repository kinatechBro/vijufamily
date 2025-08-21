import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="/assets/viju_logo.png" 
                  alt="Viju Industries (Nigeria) Limited Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Viju Industries (Nigeria) Limited</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading manufacturer of premium beverages and dairy products. 
              Committed to quality and customer satisfaction since inception.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Gallery</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Activities</Link></li>
              <li><Link to="/vacancies" className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Careers</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              {/* <li><span className="text-gray-300">Fresh Juices</span></li> */}
              <li><span className="text-gray-300">Sparkling Beverages</span></li>
              <li><span className="text-gray-300">Dairy Products</span></li>
              <li><span className="text-gray-300">Organic Range</span></li>
              <li><span className="text-gray-300">Seasonal Specials</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  1, Awose close Awosika Avenue, Off Sapara Street, Off Oba Akran road, Ikeja Industrial Estate, Ikeja, Lagos.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">+2348161674349</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">+2348168108573</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">info@vijuindustries.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Viju Industries. All rights reserved. | 
            <Link to="/privacy" className="hover:text-red-500 transition-colors duration-200 ml-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-red-500 transition-colors duration-200 ml-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;