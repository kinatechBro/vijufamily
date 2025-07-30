import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Droplets, Zap, Milk, Sparkles, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const ProductCategories: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'juices',
      title: 'Fresh Juices',
      description: 'Premium quality juices made from the finest fruits, bursting with natural flavors and essential nutrients',
      image: '/assets/viju_milk_apple.jpeg',
      icon: Droplets,
      emoji: '🥤',
      gradient: 'from-red-600 via-orange-500 to-red-500',
      glowGradient: 'from-red-600/20 via-orange-500/20 to-red-500/20',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.12) 0%, transparent 50%)',
      products: ['Orange Juice', 'Apple Juice', 'Mixed Fruit', 'Seasonal Specials'],
      stats: { products: '12+', customers: '5K+', rating: 4.9 }
    },
    {
      id: 'beverages',
      title: 'Refreshing Beverages',
      description: 'Sparkling and still beverages crafted for every occasion, delivering refreshment and energy',
      image: '/assets/mr_V.jpeg',
      icon: Zap,
      emoji: '⚡',
      gradient: 'from-orange-500 via-red-500 to-orange-600',
      glowGradient: 'from-orange-500/20 via-red-500/20 to-orange-600/20',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 50%)',
      products: ['Sparkling Water', 'Flavored Drinks', 'Energy Drinks', 'Soft Drinks'],
      stats: { products: '8+', customers: '3K+', rating: 4.8 }
    },
    {
      id: 'dairy',
      title: 'Pure Dairy',
      description: 'Fresh dairy products from trusted local farms, rich in nutrients and authentic taste',
      image: '/assets/vigor_energy_drink.jpeg',
      icon: Milk,
      emoji: '🥛',
      gradient: 'from-red-500 via-orange-500 to-red-600',
      glowGradient: 'from-red-500/20 via-orange-500/20 to-red-600/20',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.12) 0%, transparent 50%)',
      products: ['Fresh Milk', 'Yogurt', 'Cheese', 'Butter'],
      stats: { products: '15+', customers: '7K+', rating: 4.9 }
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-900/30 dark:to-orange-900/30 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900/30 dark:to-red-900/30 rounded-full blur-3xl translate-x-48 translate-y-48" />
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl border border-red-200/30 dark:border-red-700/30 rounded-2xl text-red-700 dark:text-red-300 text-sm font-semibold mb-8 shadow-lg"
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
            <span className="bg-gradient-to-r from-slate-900 via-red-600 to-orange-600 dark:from-white dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              Premium Product
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
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

        {/* Enhanced Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
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
              className="group relative"
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
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.glowGradient.replace('from-', '').replace('via-', ', ').replace('to-', ', ')}, transparent 70%)`
                  }}
                />

                {/* Enhanced Image Section */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 25px 25px, rgba(249, 115, 22, 0.4) 2px, transparent 2px)`,
                      backgroundSize: '50px 50px'
                    }} />
                  </div>

                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className="absolute top-6 right-6"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/30`}>
                      <span className="text-2xl">{category.emoji}</span>
                    </div>
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: hoveredCategory === category.id ? 1 : 0, x: hoveredCategory === category.id ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/30"
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{category.stats.rating}</span>
                  </motion.div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="p-8 relative z-10">
                  {/* Category Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
                    whileHover={{ scale: 1.02 }}
                  >
                    {category.title}
                  </motion.h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                    {category.description}
                  </p>
                  
                  {/* Enhanced Product List */}
                  <div className="space-y-3 mb-8">
                    {category.products.map((product, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center text-slate-700 dark:text-slate-300 font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 flex-shrink-0 shadow-lg`} />
                        <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                          {product}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-slate-50/80 dark:bg-slate-700/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{category.stats.products}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{category.stats.customers}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-lg font-bold text-slate-900 dark:text-white">{category.stats.rating}</span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Rating</div>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA Button */}
                  <Link to={`/products?category=${category.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 bg-gradient-to-r ${category.gradient} hover:shadow-xl text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg`}
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </div>
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
          <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-red-500 rounded-4xl p-16 text-white overflow-hidden shadow-2xl">
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