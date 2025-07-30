import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Clock, Sparkles, TrendingUp, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../../services/wordpress';
import { BlogPost } from '../../types';

const NewsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from WordPress API
    setPosts(mockData.posts.slice(0, 3));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-900/30 dark:to-orange-900/30 rounded-full blur-3xl translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900/30 dark:to-red-900/30 rounded-full blur-3xl -translate-x-48 translate-y-48" />
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
            Company Updates
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
              Latest News &
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Updates
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Stay updated with our latest announcements, product launches, and
            <br className="hidden md:block" />
            company news
          </motion.p>
        </motion.div>

        {/* Enhanced News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => {
            const dateInfo = formatDate(post.date);
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
                className="group relative cursor-pointer"
              >
                {/* Enhanced Card Container */}
                <motion.div
                  whileHover={{ 
                    y: -16,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                  className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-700/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                >
                  {/* Floating Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(220, 38, 38, 0.08), rgba(249, 115, 22, 0.08), transparent 70%)`
                    }}
                  />

                  {/* Enhanced Image Section */}
                  <div className="relative h-64 overflow-hidden rounded-t-3xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(249, 115, 22, 0.4) 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                      }} />
                    </div>

                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-orange-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Floating Date Badge */}
                    <motion.div 
                      className="absolute top-6 left-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-red-600 via-orange-500 to-red-500 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-white/30 p-3 text-white min-w-[60px]">
                        <span className="text-xs font-medium uppercase">{dateInfo.month}</span>
                        <span className="text-xl font-bold">{dateInfo.day}</span>
                        <span className="text-xs">{dateInfo.year}</span>
                      </div>
                    </motion.div>

                    {/* Reading Time Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: hoveredPost === post.id ? 1 : 0, x: hoveredPost === post.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/30"
                    >
                      <Clock className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">5 min read</span>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="p-8 relative z-10">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{post.author}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Viju Industries</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {post.title}
                    </motion.h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Enhanced Read More Button */}
                    <Link to={`/blog/${post.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 hover:from-red-700 hover:via-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-red-500 rounded-4xl p-12 text-white overflow-hidden shadow-2xl">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl -translate-x-20 -translate-y-20 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl translate-x-30 translate-y-30 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full blur-xl -translate-x-16 -translate-y-16 animate-pulse" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-xl backdrop-blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm"
              />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <Eye className="w-6 h-6" />
                <span className="text-lg font-bold">Stay Informed</span>
                <Eye className="w-6 h-6" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Never Miss an Update
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg text-red-100 mb-8 max-w-2xl mx-auto"
              >
                Get the latest news, product launches, and company updates delivered straight to your inbox.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <Link to="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-2xl hover:bg-red-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 group"
                  >
                    <span>View All News</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default NewsSection;