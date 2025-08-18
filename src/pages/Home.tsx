import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Hero from '../components/Home/Hero';
import Slider from '../components/Home/Slider';
import ProductCategories from '../components/Home/ProductCategories';
import NewsSection from '../components/Home/NewsSection';
import ContactForm from '../components/Forms/ContactForm';

const Home: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <Hero />
      <Slider />
      <ProductCategories />
      <NewsSection />
      <ContactForm />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center animate-bounce-slow"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-300"></div>
          
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full border-2 border-red-300 opacity-0 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500"></div>
        </button>
      )}

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;