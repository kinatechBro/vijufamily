import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductVariant } from '../types/ecommerce';
import toast from 'react-hot-toast';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (id: number, variantId?: string) => void;
  updateQuantity: (id: number, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Getters
  getItemCount: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  getShipping: () => number;
  getTotal: () => number;
  getItemById: (id: number, variantId?: string) => CartItem | undefined;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, variant) => {
        const existingItem = get().getItemById(product.id, variant?.id);
        
        if (existingItem) {
          get().updateQuantity(product.id, existingItem.quantity + quantity, variant?.id);
        } else {
          set((state) => ({
            items: [
              ...state.items,
              {
                id: Date.now(),
                product,
                quantity,
                variant,
                addedAt: new Date(),
              },
            ],
          }));
          toast.success(`${product.title} added to cart`);
        }
      },

      removeItem: (id, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === id && item.variant?.id === variantId)
          ),
        }));
        toast.success('Item removed from cart');
      },

      updateQuantity: (id, quantity, variantId) => {
        if (quantity <= 0) {
          get().removeItem(id, variantId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id && item.variant?.id === variantId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
        toast.success('Cart cleared');
      },

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.variant?.price || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },

      getTax: () => {
        const subtotal = get().getSubtotal();
        return subtotal * 0.18; // 18% GST
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal > 500 ? 0 : 50; // Free shipping above ₹500
      },

      getTotal: () => {
        return get().getSubtotal() + get().getTax() + get().getShipping();
      },

      getItemById: (id, variantId) => {
        return get().items.find(
          (item) => item.product.id === id && item.variant?.id === variantId
        );
      },
    }),
    {
      name: 'viju-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);