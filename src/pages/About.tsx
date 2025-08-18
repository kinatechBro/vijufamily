
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Heart, Shield, Factory, Building2, TrendingUp, Award, Star, ArrowRight, Sparkles, CheckCircle2, Zap, Milk } from 'lucide-react';

const About: React.FC = () => {
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Shield,
      title: 'INTEGRITY',
      description: 'We conduct business with unwavering honesty, transparency, and ethical principles in all our operations and relationships.'
    },
    {
      icon: CheckCircle2,
      title: 'QUALITY',
      description: 'We maintain the highest standards in every product we manufacture, ensuring excellence from production to delivery.'
    },
    {
      icon: Heart,
      title: 'CUSTOMER SATISFACTION',
      description: 'Our customers are at the heart of everything we do. We are committed to exceeding expectations and building lasting relationships.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Ultra-Modern Hero Section - Brand Colors */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        {/* Dynamic gradient background with brand colors */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-red-50/60 to-red-100/70 dark:from-red-900/20 dark:via-red-800/10 dark:to-red-800/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-red-100/50 via-transparent to-red-100/40 dark:from-red-900/10 dark:via-transparent dark:to-red-900/10"></div>
          
          {/* Animated orbs with brand colors */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-200/40 to-red-200/40 dark:from-red-400/30 dark:to-red-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-200/30 to-red-200/30 dark:from-red-400/20 dark:to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Premium badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-orange-200 dark:bg-white/10 dark:border-white/20 text-orange-700 dark:text-orange-300 font-semibold text-sm shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-red-500" />
                Industrial Excellence Since Era of Innovation
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              </motion.div>

              {/* Main headline */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-6xl md:text-8xl font-black leading-none"
                >
                  <span className="block text-gray-900 dark:text-white">About</span>
                  <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                    Viju Family
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-xl md:text-2xl text-gray-700 dark:text-white/80 leading-relaxed max-w-2xl font-light"
                >
                  Pioneering Nigeria's industrial beverage revolution with cutting-edge technology, sustainable practices, and uncompromising quality standards.
                </motion.p>
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center">
                  Explore Our Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="bg-white/80 backdrop-blur-xl border border-red-200 dark:bg-white/10 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 shadow-xl">
                  Our Products
                </button>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-red-600 mb-1">1M+</div>
                  <div className="text-gray-600 dark:text-white/60 text-sm font-medium">Daily Production</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-600 mb-1">120</div>
                  <div className="text-gray-600 dark:text-white/60 text-sm font-medium">Hectares Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-600 mb-1">3</div>
                  <div className="text-gray-600 dark:text-white/60 text-sm font-medium">Strategic Locations</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative"
            >
              {/* Floating cards */}
              <div className="relative h-[600px]">
                {/* Main product showcase */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute top-0 left-0 w-80 h-96 bg-white/90 backdrop-blur-xl border border-orange-200 dark:bg-white/10 dark:border-white/20 rounded-3xl p-8 shadow-2xl"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Milk className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Premium Quality</h3>
                      <p className="text-gray-700 dark:text-white/70 leading-relaxed">State-of-the-art production facilities ensuring the highest standards in every bottle.</p>
                    </div>
                    <div className="flex items-center text-red-600 font-semibold">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                {/* Innovation card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.0 }}
                  className="absolute top-20 right-0 w-72 h-80 bg-gradient-to-br from-white/95 to-orange-50/80 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-orange-200 dark:border-white/20 rounded-3xl p-6 shadow-2xl"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">INNOVATION</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modern Technology</h3>
                      <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">Cutting-edge machinery and processes driving our industry leadership.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/80 dark:bg-white/10 rounded-lg p-2 text-center border border-orange-100 dark:border-white/10">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">15+</div>
                        <div className="text-xs text-gray-600 dark:text-white/60">Products</div>
                      </div>
                      <div className="bg-white/80 dark:bg-white/10 rounded-lg p-2 text-center border border-orange-100 dark:border-white/10">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">24/7</div>
                        <div className="text-xs text-gray-600 dark:text-white/60">Operations</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sustainability badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-0 left-20 w-60 h-32 bg-gradient-to-r from-red-50/90 to-orange-50/90 dark:from-red-500/20 dark:to-orange-500/20 backdrop-blur-xl border border-red-200 dark:border-red-400/30 rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">Sustainable Growth</div>
                      <div className="text-xs text-gray-700 dark:text-white/70">Community Focused</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-white/60">
            <div className="text-sm font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Innovation Journey & Product Details */}
      <section className="py-32 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-900/10 dark:to-red-900/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Welcome to Our Journey
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Innovation Through <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-red-200 dark:border-white/20 p-8 md:p-12 mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Era of Industrialization</h3>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                During the era of industrialization, Viju Industries (Nigeria) Limited seized the opportunity to innovate, leading to the launch of some of its most celebrated products — the <strong className="text-red-600">500ml Viju Milk Drink</strong> and <strong className="text-red-600">Viju BB Star</strong> in 210ml and 150ml variants.
              </p>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                Building on this foundation, the company expanded its product range with the introduction of exciting new variants, including the rich and creamy <strong className="text-orange-600">Viju Baked Yoghurt</strong> and the delicious <strong className="text-orange-600">Plain Sweet Yoghurt</strong>. These additions represent a significant step in our continued diversification, especially into the water segment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl border border-blue-200 dark:border-blue-500/30 p-8 md:p-12 mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Premium Water Excellence</h3>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                Our premium water brand, <strong className="text-blue-600">Mr. V Premium Water</strong>, remains widely recognized across the country for its exceptional quality and purity, setting the standard in Nigeria's water segment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl border border-orange-200 dark:border-orange-500/30 p-8 md:p-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Innovation Drive</h3>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                As part of our latest innovation drive, we are proud to unveil an expanded product lineup and refreshed packaging. This includes <strong className="text-orange-600">V-Smartic Wheat Milk Drink</strong> and <strong className="text-orange-600">V-Joy Chocolate Milk Drink</strong>, both now available in convenient 1-liter packs — perfect for picnics, family outings, or everyday refreshment.
              </p>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                In addition, we present <strong className="text-green-600">V-Cool Carbonated Drinks</strong> in bold, refreshing flavors such as Coffee Cola, Orange Cola, and Classic Cola. For coffee enthusiasts, the indulgent <strong className="text-amber-600">Viju Coffee Milk Drink</strong> offers a delightful blend of rich taste and energy.
              </p>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                We also proudly introduce <strong className="text-red-600">Vigor Energy Drink</strong>, crafted to boost vitality and keep you energized throughout the day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialization - Brand Colors */}
      <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/20 dark:from-red-900/10 dark:to-orange-900/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-8">
              <Star className="w-4 h-4" />
              Our Specialization
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              What We <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Excel At</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our core areas of expertise that drive our success in Nigeria's beverage industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-red-200 dark:border-red-500/30 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Milk className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fruit Milk Production</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">Premium quality fruit-flavored milk drinks crafted with the finest ingredients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Premium Water</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">Mr. V Premium Water - exceptional quality and purity recognized nationwide</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">V-Cool</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">Bold carbonated drinks in Coffee Cola, Orange Cola, and Classic Cola flavors</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Milk Drink</h3>
                <p className="text-gray-600 dark:text-white/70 text-sm">Indulgent Viju Coffee Milk Drink - perfect blend of rich taste and energy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Design with Brand Colors */}
      <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-slate-900">
        {/* Premium background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-red-100/30 via-transparent to-orange-100/30 dark:from-red-900/20 dark:via-transparent dark:to-orange-900/20"></div>
        
        {/* Animated background elements with brand colors */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-200/20 to-orange-200/20 dark:from-red-400/10 dark:to-orange-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-red-200/20 dark:from-orange-400/10 dark:to-red-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/30 backdrop-blur-xl border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-8">
              <Heart className="w-4 h-4" />
              Our Foundation
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Core <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that drive our industrial excellence and define our commitment to Nigeria's future
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={valuesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                className="group relative"
              >
                {/* Card container */}
                <div className="relative h-full bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-red-200 dark:border-white/10 p-8 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group-hover:border-red-400 dark:group-hover:border-orange-400/30 group-hover:shadow-2xl group-hover:shadow-red-500/20 dark:group-hover:shadow-orange-500/10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 rounded-3xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 text-center h-full flex flex-col">
                    {/* Icon container */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-red-500/25">
                        <value.icon className="w-12 h-12 text-white" />
                      </div>
                      {/* Floating ring */}
                      <div className="absolute inset-0 w-24 h-24 border-2 border-red-400/30 dark:border-orange-400/30 rounded-2xl mx-auto animate-pulse group-hover:border-red-400/60 dark:group-hover:border-orange-400/60 transition-colors duration-500"></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-wider group-hover:text-red-600 dark:group-hover:text-orange-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 dark:text-white/70 leading-relaxed text-lg flex-grow group-hover:text-gray-800 dark:group-hover:text-white/90 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Decorative bottom element */}
                    <div className="mt-8 pt-6 border-t border-red-200 dark:border-white/10">
                      <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/0 to-orange-400/0 group-hover:from-red-400/10 group-hover:to-orange-400/10 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* External glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/0 to-orange-400/0 group-hover:from-red-400/20 group-hover:to-orange-400/20 blur-xl transition-all duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-red-200 dark:border-white/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-6 leading-relaxed">
                Be part of Nigeria's leading industrial beverage company and help us continue our legacy of excellence.
              </p>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                Explore Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/20 dark:from-red-900/10 dark:to-orange-900/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-8">
              <Factory className="w-4 h-4" />
              Production Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Production <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Capacity</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                  Production processes at Viju Industries Nigeria Limited take place in a <strong className="text-red-600">meticulously maintained and sterilized environment</strong>. With the integration of our state-of-the-art machinery, we've significantly enhanced our capabilities to produce substantial volumes of milk drinks and water.
                </p>
                <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                  Our operations run daily to meet the demands of consumers across the nation and neighboring countries. Thanks to our advanced equipment, Viju Industries Nigeria Limited proudly boasts the capacity to produce <strong className="text-orange-600">over a million packs of milk drinks and bottles of Mr. V Premium Water each day</strong>.
                </p>
                <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                  At Viju Industries Nigeria Limited, we remain fully committed to satisfying consumer needs — delivering quality and quantity with utmost efficiency and readiness.
                </p>
              </div>

              {/* Capacity highlights */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-red-600 mb-2">1M+</div>
                    <p className="text-gray-700 dark:text-white/70 font-medium">Daily Production Capacity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
                    <p className="text-gray-700 dark:text-white/70 font-medium">Operations Running</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-red-50 dark:from-white/10 dark:to-red-900/20 rounded-3xl p-8 border border-red-200 dark:border-red-500/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">State-of-the-Art Facility</h3>
                    <p className="text-gray-600 dark:text-white/70">Advanced machinery & sterilized environment</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-gray-700 dark:text-white/80">Meticulously maintained facilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700 dark:text-white/80">Advanced production machinery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-gray-700 dark:text-white/80">Continuous quality monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700 dark:text-white/80">Daily operations nationwide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Planning & Strategic Expansion */}
      <section className="py-32 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-900/10 dark:to-red-900/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-8">
              <Building2 className="w-4 h-4" />
              Strategic Expansion
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Project <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Planning</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Viju Industries (Nigeria) Limited is strategically expanding into cattle rearing as part of our commitment to strengthening our supply chain and ensuring product quality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-orange-200 dark:border-white/20 p-8 md:p-12 text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Supply Chain Excellence</h3>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                The fresh milk harvested from these cattle will be processed into milk powder — a vital ingredient in the production of our renowned milk drinks — ensuring a consistent and high-quality supply to meet the growing demands of our consumers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Igbessa Facility */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Igbessa, Ogun State</h3>
                <p className="text-gray-600 dark:text-white/70 mb-6 text-center">80 hectares of land adjacent to our factory, specifically dedicated to livestock farming and fresh milk production.</p>
                <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4 text-center border border-green-100 dark:border-white/10">
                  <div className="text-3xl font-black text-green-600 mb-1">80</div>
                  <div className="text-gray-600 dark:text-white/70 text-sm font-medium">Hectares</div>
                </div>
              </div>
            </motion.div>

            {/* Kwali LGA, Abuja */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Kwali LGA, Abuja</h3>
                <p className="text-gray-600 dark:text-white/70 mb-6 text-center">Strategic cattle rearing facility in the capital territory, enhancing our northern Nigeria supply chain coverage.</p>
                <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4 text-center border border-blue-100 dark:border-white/10">
                  <div className="text-3xl font-black text-blue-600 mb-1">20</div>
                  <div className="text-gray-600 dark:text-white/70 text-sm font-medium">Hectares</div>
                </div>
              </div>
            </motion.div>

            {/* Ozubulu LGA, Anambra */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Ozubulu LGA, Anambra</h3>
                <p className="text-gray-600 dark:text-white/70 mb-6 text-center">Eastern Nigeria facility creating employment opportunities within local communities while expanding our reach.</p>
                <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4 text-center border border-purple-100 dark:border-white/10">
                  <div className="text-3xl font-black text-purple-600 mb-1">20</div>
                  <div className="text-gray-600 dark:text-white/70 text-sm font-medium">Hectares</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-red-200 dark:border-red-500/30 max-w-4xl mx-auto mt-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Economic Impact</h3>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                This strategic expansion not only enhances our production capacity but also fosters economic growth by creating employment opportunities within the local communities, strengthening Nigeria's agricultural and industrial sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Statistics & Achievements with Brand Colors */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-900">
        {/* Premium gradient background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 dark:from-red-600 dark:via-orange-600 dark:to-red-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 dark:from-black/40 dark:via-transparent dark:to-black/20"></div>
        
        {/* Dynamic background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDgwIDQwIEwgNDAgNDAgTSA0MCA0MCBMIDQWQA4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/80 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-semibold text-sm mb-8">
              <Award className="w-4 h-4" />
              Industrial Excellence
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Leading Nigeria's <span className="text-white">Innovation</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Delivering quality and quantity with utmost efficiency across multiple strategic locations
            </p>
          </motion.div>

          {/* Statistics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 text-center group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Factory className="w-8 h-8 text-red-600 font-bold" />
                </div>
                <div className="text-5xl font-black text-white mb-2 group-hover:text-white/90 transition-colors duration-300">1M+</div>
                <div className="text-white/90 font-bold text-lg mb-1">Daily Production</div>
                <div className="text-white/70 text-sm">Milk drinks & water bottles</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 text-center group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building2 className="w-8 h-8 text-red-600 font-bold" />
                </div>
                <div className="text-5xl font-black text-white mb-2 group-hover:text-white/90 transition-colors duration-300">120</div>
                <div className="text-white/90 font-bold text-lg mb-1">Total Hectares</div>
                <div className="text-white/70 text-sm">Cattle farming facilities</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 text-center group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-8 h-8 text-red-600 font-bold" />
                </div>
                <div className="text-5xl font-black text-white mb-2 group-hover:text-white/90 transition-colors duration-300">3</div>
                <div className="text-white/90 font-bold text-lg mb-1">Strategic Locations</div>
                <div className="text-white/70 text-sm">Ogun, Abuja & Anambra</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 text-center group-hover:border-white/50 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-red-600 font-bold" />
                </div>
                <div className="text-5xl font-black text-white mb-2 group-hover:text-white/90 transition-colors duration-300">15+</div>
                <div className="text-white/90 font-bold text-lg mb-1">Product Variants</div>
                <div className="text-white/70 text-sm">Innovative beverage lineup</div>
              </div>
            </motion.div>
          </div>

          {/* Mission statement with premium design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 p-12 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-white/80 to-white"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Commitment</h3>
                </div>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  At Viju Industries Nigeria Limited, we remain fully committed to satisfying consumer needs — delivering quality and quantity with utmost efficiency and readiness, while fostering economic growth and creating employment opportunities within local communities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/20 rounded-2xl p-6">
                    <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-lg font-bold text-white mb-2">Economic Growth</div>
                    <div className="text-white/70 text-sm">Driving local development</div>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6">
                    <Users className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-lg font-bold text-white mb-2">Employment</div>
                    <div className="text-white/70 text-sm">Creating opportunities</div>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6">
                    <CheckCircle2 className="w-8 h-8 text-white mx-auto mb-3" />
                    <div className="text-lg font-bold text-white mb-2">Excellence</div>
                    <div className="text-white/70 text-sm">Uncompromising standards</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
