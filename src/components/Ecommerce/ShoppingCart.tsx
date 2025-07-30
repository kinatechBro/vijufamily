import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const ShoppingCart: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getItemCount,
    getSubtotal,
    getTax,
    getShipping,
    getTotal,
  } = useCartStore();

  const itemCount = getItemCount();
  const subtotal = getSubtotal();
  const tax = getTax();
  const shipping = getShipping();
  const total = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Shopping Cart
                </h2>
                {itemCount > 0 && (
                  <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Add some products to get started
                  </p>
                  <Link to="/products" onClick={closeCart}>
                    <Button variant="primary">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.variant?.id || 'default'}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 truncate">
                          {item.product.title}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                            {item.variant.name}
                          </p>
                        )}
                        <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                          ₹{item.variant?.price || item.product.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.variant?.id
                              )
                            }
                            className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.variant?.id
                              )
                            }
                            className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id, item.variant?.id)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Summary */}
            {items.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-700 p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Tax (18%)</span>
                    <span className="font-medium">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">Total</span>
                      <span className="font-bold text-xl text-orange-600 dark:text-orange-400">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/checkout" onClick={closeCart}>
                    <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link to="/products" onClick={closeCart}>
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;