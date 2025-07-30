export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  category: 'juices' | 'beverages' | 'dairy';
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  rating: number;
  reviews: number;
  features?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sugar: number;
  };
  variants?: ProductVariant[];
  tags?: string[];
  brand: string;
  sku: string;
  weight?: string;
  dimensions?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
  image?: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  variant?: ProductVariant;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  couponCode?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: Product[];
  preferences: UserPreferences;
  createdAt: Date;
  lastLogin: Date;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  price: number;
  total: number;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

export interface UserPreferences {
  newsletter: boolean;
  smsUpdates: boolean;
  emailUpdates: boolean;
  language: string;
  currency: string;
}

export interface Coupon {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderValue?: number;
  maxDiscount?: number;
  expiresAt: Date;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

export interface Review {
  id: string;
  productId: number;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  verified: boolean;
  helpful: number;
  createdAt: Date;
  user: {
    name: string;
    avatar?: string;
  };
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  productCount: number;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
  isFree: boolean;
  minOrderValue?: number;
}

export interface SearchFilters {
  category?: string;
  brand?: string;
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
  onSale?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'popularity';
}