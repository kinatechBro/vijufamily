import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, Globe, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { StatCard } from '../UI/Card';

// Typing animation component
const TypewriterText: React.FC<{ 
  text: string; 
  delay?: number; 
  speed?: number; 
  className?: string;
  onComplete?: () => void;
}> = ({ text, delay = 0, speed = 50, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, speed, text, onComplete]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

const Hero: React.FC = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '100K+', label: 'Happy Customers' },
    { icon: Globe, value: '50+', label: 'Cities Served' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay - Mobile Optimized */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: 'url(/assets/slider_images/slider_2.jpeg)',
        }}
      >
        {/* Enhanced mobile-optimized overlay with darker left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-slate-900/80 md:from-black md:via-black/95 md:to-slate-900/70 dark:from-black dark:via-black/95 dark:to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent md:from-black md:via-slate-900/60"></div>
      </motion.div>

      {/* Enhanced Floating Elements with Mobile Responsiveness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 left-4 w-16 h-16 md:top-20 md:left-10 md:w-20 md:h-20 bg-red-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-8 w-24 h-24 md:bottom-32 md:right-16 md:w-32 md:h-32 bg-red-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0], 
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional mobile floating elements */}
        <motion.div
          className="absolute top-1/3 right-4 w-12 h-12 md:w-16 md:h-16 bg-red-400/8 rounded-full blur-lg"
          animate={{ 
            y: [0, -10, 0], 
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-4 w-10 h-10 md:w-14 md:h-14 bg-red-600/8 rounded-full blur-lg"
          animate={{ 
            x: [0, 12, 0], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-0">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge with enhanced mobile animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium mb-4 md:mb-6"
            >
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 text-red-400" />
              <span className="hidden sm:inline">Leading Beverage Company</span>
              <span className="sm:hidden">Premium Quality</span>
            </motion.div>

            {/* Main Heading with typing animation */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <div className="block">
                <TypewriterText 
                  text="Producing Quality" 
                  delay={800}
                  speed={80}
                  onComplete={() => setShowSubtitle(true)}
                />
              </div>
              {showSubtitle && (
                <div className="block">
                  <TypewriterText 
                    text="Beverages" 
                    delay={200}
                    speed={100}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500"
                    onComplete={() => {
                      setTimeout(() => setShowButtons(true), 500);
                    }}
                  />
                  <span className="text-white"> & </span>
                  <TypewriterText 
                    text="Dairy" 
                    delay={1000}
                    speed={120}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400"
                  />
                </div>
              )}
            </div>

            {/* Subtitle with typing animation */}
            {showSubtitle && (
              <div className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                <TypewriterText 
                  text="Leading the industry with premium refreshing beverages and pure dairy products."
                  delay={1500}
                  speed={40}
                />
                <span className="hidden sm:inline">
                  <TypewriterText 
                    text=" Experience the taste of excellence with every sip."
                    delay={4000}
                    speed={45}
                  />
                </span>
              </div>
            )}

            {/* CTA Buttons with enhanced mobile animations - Show after typing */}
            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12 px-4 md:px-0"
              >
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    gradient
                    icon={ChevronRight}
                    iconPosition="right"
                    className="group w-full sm:w-auto text-sm md:text-base shadow-2xl hover:shadow-red-500/25"
                  >
                    <span>Explore Products</span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/40 w-full sm:w-auto text-sm md:text-base"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            )}

            {/* Stats with enhanced mobile responsiveness and animations - Show after typing */}
            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-lg sm:max-w-2xl mx-auto lg:mx-0 px-4 md:px-0"
              >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.9 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="flex items-center justify-center mb-2 md:mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.1 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-300 text-xs md:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with mobile optimization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-1 md:space-y-2"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="text-white/70 text-xs md:text-sm font-medium hidden sm:block"
          >
            Scroll to explore
          </motion.span>
          <motion.div 
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-2 md:w-1 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;