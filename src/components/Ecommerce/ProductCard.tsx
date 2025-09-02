import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, Zap, Sparkles, TrendingUp, Star } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useUserStore } from '../../store/userStore';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Removed add-to-cart functionality as per requirements
  const { addToWishlist, removeFromWishlist, isInWishlist } = useUserStore();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const calculateDiscountPercentage = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return product.discount || 0;
  };

  const discountPercentage = calculateDiscountPercentage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Main Card Container */}
      <motion.div
        layout
        whileHover={{ 
          y: -12,
          transition: { duration: 0.4, type: "spring", stiffness: 300 }
        }}
        className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/30 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,115,22,0.05) 100%)' 
            : undefined
        }}
      >
        {/* Floating Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(249, 115, 22, 0.08), transparent 50%)',
          }}
        />

        <Link to={`/product/${product.id}`} className="block relative z-10">
          {/* Image Container with Glassmorphism */}
          <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(249, 115, 22, 0.3) 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Enhanced Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
              <AnimatePresence>
                {product.isNew && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <Sparkles className="w-3 h-3" />
                    NEW
                  </motion.div>
                )}
                {discountPercentage > 0 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {discountPercentage}% OFF
                  </motion.div>
                )}
                {product.stock < 10 && product.stock > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                  >
                    {product.stock} LEFT
                  </motion.div>
                )}
                {product.stock === 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                  >
                    SOLD OUT
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating Action Buttons */}
            <motion.div 
              className="absolute top-4 right-4 flex flex-col gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
              <motion.button
                onClick={handleWishlistToggle}
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-xl border shadow-lg transition-all duration-300 ${
                  inWishlist
                    ? 'bg-red-500/90 text-white border-red-500/50 shadow-red-500/25'
                    : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border-white/30 dark:border-slate-700/30 hover:bg-red-500/90 hover:text-white hover:border-red-500/50'
                }`}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.15, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-orange-500/90 hover:text-white hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                aria-label="Quick view"
              >
                <Eye className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Add to Cart removed as per requirements */}
          </div>

          {/* Content Section with Enhanced Typography */}
          <div className="p-6 space-y-4">
            {/* Brand & Featured Badge */}
            <div className="flex items-center justify-between">
              <motion.p 
                className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                {product.brand}
              </motion.p>
              {product.isFeatured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-lg"
                >
                  <Zap className="w-3 h-3" />
                  FEATURED
                </motion.div>
              )}
            </div>

            {/* Title with Advanced Typography - show full name */}
            <motion.h3 
              className="font-bold text-lg text-slate-900 dark:text-white leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {product.title}
            </motion.h3>

            {/* Product Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Rating Stars - Interactive for rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : star === Math.ceil(product.rating) && product.rating % 1 !== 0
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price Information */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  ₦{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                    ₦{product.originalPrice}
                  </span>
                )}
              </div>
              {product.stock > 0 ? (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {product.stock < 10 ? `${product.stock} left` : 'In Stock'}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Product Features (No nutritional info) */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Stock Status Section (optional, left as is) */}
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;