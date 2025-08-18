import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  ChevronLeft,
  Share2,
  Info
} from 'lucide-react';
import { products } from '../data/products';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';
import ProductCard from '../components/Ecommerce/ProductCard';
import { ProductVariant } from '../types/ecommerce';
import toast from 'react-hot-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product?.variants?.[0]
  );
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <Link to="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  const images = product.images || [product.image];

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/" className="text-slate-500 hover:text-red-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/products" className="text-slate-500 hover:text-red-600 transition-colors">
            Products
          </Link>
          <span className="text-slate-400">/</span>
          <Link 
            to={`/products?category=${product.category}`} 
            className="text-slate-500 hover:text-red-600 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 dark:text-white">{product.title}</span>
        </nav>

        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-orange-500'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-500 dark:text-slate-400">{product.brand}</p>
                <button
                  onClick={handleShare}
                  className="p-2 text-slate-400 hover:text-orange-500 transition-colors"
                  aria-label="Share product"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {product.title}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.isNew && <Badge variant="info">New</Badge>}
                {product.isFeatured && <Badge variant="success">Featured</Badge>}
                {product.isOnSale && <Badge variant="error">On Sale</Badge>}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600 dark:text-slate-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Available Sizes</h3>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedVariant?.id === variant.id
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                          : 'border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-600'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Availability</h3>
              <div className="flex items-center gap-2">
                {(selectedVariant?.stock || product.stock) > 0 ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      In Stock
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      ({selectedVariant?.stock || product.stock} available)
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 dark:text-red-400 font-medium">
                      Out of Stock
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Share Button */}
            <div className="flex gap-4">
              <Button
                onClick={handleShare}
                variant="outline"
                size="lg"
                icon={Share2}
                className="flex-1"
              >
                Share Product
              </Button>
            </div>

            {/* Product Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t border-slate-200 dark:border-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Product Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Brand:</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">SKU:</span>
                    <span className="font-medium">{product.sku}</span>
                  </div>
                  {product.weight && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Weight:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Category:</span>
                    <span className="font-medium capitalize">{product.category}</span>
                  </div>
                </div>
              </div>
              
              {product.features && product.features.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              {product.features && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-orange-500" />
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nutritional Info */}
              {product.nutritionalInfo && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Nutritional Information (per 100ml)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Calories</span>
                      <span className="font-medium">{product.nutritionalInfo.calories} kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Protein</span>
                      <span className="font-medium">{product.nutritionalInfo.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Carbohydrates</span>
                      <span className="font-medium">{product.nutritionalInfo.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Fat</span>
                      <span className="font-medium">{product.nutritionalInfo.fat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Sugar</span>
                      <span className="font-medium">{product.nutritionalInfo.sugar}g</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;