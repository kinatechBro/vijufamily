import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../UI/ThemeToggle';
import { useCartStore } from '../../store/cartStore';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { getItemCount, toggleCart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/products', 
      label: 'Products',
      dropdown: [
        { 
          path: '/products?category=juices', 
          label: 'Fresh Juices',
          description: 'Premium natural fruit juices',
          icon: '🥤'
        },
        { 
          path: '/products?category=beverages', 
          label: 'Beverages',
          description: 'Refreshing drinks & sodas',
          icon: '🥃'
        },
        { 
          path: '/products?category=dairy', 
          label: 'Dairy Products',
          description: 'Fresh milk & dairy items',
          icon: '🥛'
        },
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/activities', label: 'Activities' },
    { 
      path: '/careers', 
      label: 'Careers',
      dropdown: [
        { path: '/vacancies', label: 'Current Openings', description: 'View available positions' },
        { path: '/distributor', label: 'Become a Distributor', description: 'Join our network' },
      ]
    },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDropdownToggle = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/20 dark:border-slate-700/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-4 group relative z-10"
              aria-label="Viju Family Home"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden border-2 border-orange-200">
                  <img 
                    src="/assets/viju_logo.png" 
                    alt="Viju Family Logo" 
                    className="w-10 h-10 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className={`text-2xl font-bold transition-all duration-300 ${
                    scrolled 
                      ? 'text-slate-900 dark:text-white' 
                      : location.pathname === '/' 
                        ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent dark:text-white'
                        : 'text-slate-900 dark:text-white'
                  } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500`}
                  whileHover={{ scale: 1.02 }}
                >
                  Viju Family
                </motion.span>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled 
                    ? 'text-slate-500 dark:text-slate-400' 
                    : 'text-slate-600 dark:text-white/80'
                }`}>
                  Premium Quality
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" role="navigation">
              {menuItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <motion.button
                        onClick={(e) => handleDropdownToggle(item.label, e)}
                        className={`flex items-center px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 backdrop-blur-sm ${
                          location.pathname === item.path || 
                          (item.label === 'Products' && location.pathname.startsWith('/products')) ||
                          (item.label === 'Careers' && (location.pathname === '/vacancies' || location.pathname === '/distributor'))
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50/80 dark:bg-orange-900/30 shadow-lg'
                            : scrolled
                            ? 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400'
                            : 'text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-300 hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="ml-2 w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-3 w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 py-3 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-900/50"></div>
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="relative"
                              >
                                <Link
                                  to={dropdownItem.path}
                                  className="flex items-start px-5 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-50/80 dark:hover:bg-slate-700/50 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 group"
                                >
                                  {dropdownItem.icon && (
                                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                                      {dropdownItem.icon}
                                    </span>
                                  )}
                                  <div>
                                    <div className="font-semibold text-base">{dropdownItem.label}</div>
                                    {dropdownItem.description && (
                                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                        {dropdownItem.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={item.path}
                        className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 backdrop-blur-sm ${
                          location.pathname === item.path
                            ? 'text-orange-600 dark:text-orange-400 bg-orange-50/80 dark:bg-orange-900/30 shadow-lg'
                            : scrolled
                            ? 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400'
                            : 'text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-300 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Items */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <motion.button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`hidden md:flex p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
                  scrolled 
                    ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-slate-700 dark:text-white hover:bg-slate-100/50 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <Search size={20} />
              </motion.button>

              {/* Notifications */}
              <motion.button
                className={`hidden md:flex p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 relative ${
                  scrolled 
                    ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-slate-700 dark:text-white hover:bg-slate-100/50 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>

              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Shopping Cart */}
              <motion.button
                onClick={toggleCart}
                className={`relative p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
                  scrolled 
                    ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-slate-700 dark:text-white hover:bg-slate-100/50 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {getItemCount()}
                  </span>
                )}
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
                  scrolled 
                    ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                    : 'text-slate-700 dark:text-white hover:bg-slate-100/50 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/20 dark:border-slate-700/20 py-6 overflow-hidden rounded-b-2xl shadow-2xl"
                role="navigation"
              >
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={(e) => handleDropdownToggle(item.label, e)}
                            className={`w-full flex items-center justify-between px-6 py-4 font-semibold transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset rounded-xl mx-2 ${
                              location.pathname === item.path || 
                              (item.label === 'Products' && location.pathname.startsWith('/products')) ||
                              (item.label === 'Careers' && (location.pathname === '/vacancies' || location.pathname === '/distributor'))
                                ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                            aria-expanded={activeDropdown === item.label}
                          >
                            {item.label}
                            <motion.div
                              animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-50 dark:bg-slate-800 overflow-hidden mx-2 rounded-xl mt-2"
                              >
                                {item.dropdown.map((dropdownItem, idx) => (
                                  <motion.div
                                    key={dropdownItem.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                                  >
                                    <Link
                                      to={dropdownItem.path}
                                      className="flex items-center px-8 py-4 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 font-medium"
                                    >
                                      {dropdownItem.icon && (
                                        <span className="text-xl mr-3">{dropdownItem.icon}</span>
                                      )}
                                      <div>
                                        <div>{dropdownItem.label}</div>
                                        {dropdownItem.description && (
                                          <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                                            {dropdownItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-6 py-4 font-semibold transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset rounded-xl mx-2 ${
                            location.pathname === item.path
                              ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Action Items */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
                >
                  <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300">
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 relative">
                    <Bell size={18} />
                    <span>Updates</span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4">
                <Search className="w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products, pages, or content..."
                  className="flex-1 text-lg bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;