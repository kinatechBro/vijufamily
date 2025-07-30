import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Eye, Zap } from 'lucide-react';
import { Product } from '../../types/ecommerce';
import { useCartStore } from '../../store/cartStore';
import { useUserStore } from '../../store/userStore';
import { Link } from 'react-router-dom';
import Badge from '../UI/Badge';
import Button from '../UI/Button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addItem } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useUserStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-700">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="info" size="sm" className="bg-blue-500 text-white">
                New
              </Badge>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <Badge variant="warning" size="sm" className="bg-orange-500 text-white">
                Low Stock
              </Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="error" size="sm" className="bg-gray-500 text-white">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              onClick={handleWishlistToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-colors ${
                inWishlist
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white/80 text-slate-600 border-white/20 hover:bg-red-500 hover:text-white'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              variant="primary"
              size="sm"
              icon={ShoppingCart}
              className="w-full"
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
            {product.brand}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-slate-300 dark:text-slate-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Featured Badge */}
          {product.isFeatured && (
            <div className="flex items-center text-orange-500 mb-2">
              <Zap className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">Featured</span>
            </div>
          )}

          {/* Stock Status */}
          <div className="mt-2">
            {product.stock > 0 ? (
              <p className="text-sm text-green-600 dark:text-green-400">
                {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
              </p>
            ) : (
              <p className="text-sm text-red-600 dark:text-red-400">Out of Stock</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;