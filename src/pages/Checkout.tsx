import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, MapPin, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useUserStore } from '../store/userStore';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

const checkoutSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  postalCode: yup.string().required('Postal code is required'),
  paymentMethod: yup.string().required('Payment method is required'),
});

const Checkout: React.FC = () => {
  const { items, getSubtotal, getTax, getShipping, getTotal, clearCart } = useCartStore();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
    },
  });

  const subtotal = getSubtotal();
  const tax = getTax();
  const shipping = getShipping();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <Link to="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: any) => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create order
      const order = {
        id: `VJ-${Date.now()}`,
        items,
        total,
        customerInfo: data,
        createdAt: new Date(),
      };

      // Clear cart
      clearCart();
      
      toast.success('Order placed successfully!');
      navigate('/order-confirmation', { state: { order } });
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const paymentMethod = watch('paymentMethod');

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/products" 
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Checkout</h1>
          </div>
          
          {/* Progress Steps */}
          <div className="hidden md:flex items-center gap-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                  }`}
                >
                  {step > stepNumber ? <Check className="w-4 h-4" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      step > stepNumber ? 'bg-red-500' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">
                    1
                  </div>
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">
                    2
                  </div>
                  Shipping Address
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register('firstName')}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="First name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register('lastName')}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      {...register('address')}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="Street address"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        {...register('city')}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="City"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        {...register('state')}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="State"
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        {...register('postalCode')}
                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Postal code"
                      />
                      {errors.postalCode && (
                        <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-medium">
                    3
                  </div>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'upi', label: 'UPI Payment', icon: Shield },
                    { id: 'cod', label: 'Cash on Delivery', icon: Truck },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === method.id
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-red-300'
                      }`}
                    >
                      <input
                        type="radio"
                        value={method.id}
                        {...register('paymentMethod')}
                        className="sr-only"
                      />
                      <method.icon className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        {method.label}
                      </span>
                    </label>
                  ))}
                  {errors.paymentMethod && (
                    <p className="text-sm text-red-600">{errors.paymentMethod.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isProcessing}
                className="w-full"
              >
                {isProcessing ? 'Processing...' : `Place Order - ₹${total.toFixed(2)}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Order Summary
              </h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant?.id || 'default'}`} className="flex gap-3">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                        {item.product.title}
                      </h4>
                      {item.variant && (
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.variant.name}
                        </p>
                      )}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-medium text-slate-900 dark:text-white">
                          ₹{((item.variant?.price || item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-6">
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
              
              {/* Security Badge */}
              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Your payment information is secure and encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;