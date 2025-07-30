import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Slider: React.FC = () => {
  const [sliderRef, sliderInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const sliderImages = [
    {
      src: '/assets/slider_images/slider_1.jpeg',
      title: 'Premium Quality Products',
      description: 'Experience the finest beverages crafted with precision and care'
    },
    {
      src: '/assets/slider_images/slider_2.jpeg',
      title: 'State-of-the-Art Facility',
      description: 'Modern manufacturing technology meets traditional quality standards'
    },
    {
      src: '/assets/slider_images/slider_3.jpeg',
      title: 'Sustainable Production',
      description: 'Committed to environmental responsibility and sustainable practices'
    },
    {
      src: '/assets/slider_images/slider_4.jpeg',
      title: 'Innovation & Excellence',
      description: 'Leading the industry with cutting-edge research and development'
    },
    {
      src: '/assets/slider_images/slider_5.jpeg',
      title: 'Community Partnership',
      description: 'Building lasting relationships with local communities and suppliers'
    },
    {
      src: '/assets/slider_images/slider_6.jpeg',
      title: 'Global Distribution',
      description: 'Reaching customers across Nigeria and beyond with premium products'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && sliderInView) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, sliderInView, sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section
      ref={sliderRef}
      initial={{ opacity: 0, y: 100 }}
      animate={sliderInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sliderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Story in Motion
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the journey of excellence, innovation, and quality that defines who we are
          </p>
        </motion.div>

        <div className="relative group">
          {/* Slider Container */}
          <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sliderImages[currentSlide].src})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-2xl"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {sliderImages[currentSlide].title}
                      </h3>
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                        {sliderImages[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Slider;
