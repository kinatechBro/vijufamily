import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Droplets, Zap, Milk, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCategories: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'beverages',
      title: 'Mr V',
      image: '/assets/mr_V.jpeg',
      gradient: 'from-red-500 to-red-600',
      glowGradient: 'from-red-500/20 to-red-600/20',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 50%)',
    },
    {
      id: 'dairy',
      title: 'Vigor energy drink',
      image: '/assets/vigor_energy_drink.jpeg',
      gradient: 'from-red-500 to-red-600',
      glowGradient: 'from-red-500/20 to-red-600/20',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.12) 0%, transparent 50%)',
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200 to-red-200 dark:from-red-900/30 dark:to-red-900/30 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200 to-red-200 dark:from-red-900/30 dark:to-red-900/30 rounded-full blur-3xl translate-x-48 translate-y-48" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-500/10 backdrop-blur-xl border border-red-200/30 dark:border-red-700/30 rounded-2xl text-red-700 dark:text-red-300 text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            Our Product Range
            <TrendingUp className="w-4 h-4" />
          </motion.div>
          
          {/* Main Title with Gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-red-600 to-red-600 dark:from-white dark:via-red-400 dark:to-red-400 bg-clip-text text-transparent">
              Premium Product
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Categories
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Discover our wide range of premium products, each crafted with care and 
            <br className="hidden md:block" />
            attention to quality, bringing you the finest taste experiences
          </motion.p>
        </motion.div>

        {/* Simplified Category Cards - Just Image and Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 justify-items-center max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative w-full max-w-md"
            >
              {/* Enhanced Card Container */}
              <motion.div
                layout
                whileHover={{ 
                  y: -16,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
                className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-700/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                style={{
                  background: hoveredCategory === category.id 
                    ? category.bgPattern
                    : undefined
                }}
              >
                {/* Floating Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.glowGradient.replace('from-', '').replace('to-', ', ')}, transparent 70%)`
                  }}
                />

                {/* Enhanced Image Section */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* Simple Gradient Overlay for visibility of text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Simplified Content Section - Only Title */}
                <div className="p-8 relative z-10 flex justify-center items-center">
                  {/* Category Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    {category.title}
                  </motion.h3>
                </div>
                
                {/* Link to products page */}
                <Link to={`/products?category=${category.id}`} className="absolute inset-0 z-20">
                  <span className="sr-only">View {category.title}</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-red-600 to-red-500 rounded-4xl p-16 text-white overflow-hidden shadow-2xl">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-32 -translate-y-32 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-40 translate-y-40 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full blur-2xl -translate-x-20 -translate-y-20 animate-pulse" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-3xl backdrop-blur-sm"
              />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <Sparkles className="w-8 h-8" />
                <span className="text-xl font-bold">Premium Experience Awaits</span>
                <Sparkles className="w-8 h-8" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Ready to Experience
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  Quality?
                </span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-xl md:text-2xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Explore our complete product range and discover why thousands of customers 
                trust Viju Family for their beverage and dairy needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-2xl hover:bg-red-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 group"
                  >
                    <span>View All Products</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;