import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Product, Address, Order } from '../types/ecommerce';

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  wishlist: Product[];
  
  // Actions
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  addAddress: (address: Address) => void;
  updateAddress: (addressId: string, updates: Partial<Address>) => void;
  removeAddress: (addressId: string) => void;
  setDefaultAddress: (addressId: string, type: 'billing' | 'shipping') => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      wishlist: [],

      login: (user) => {
        set({ user, isAuthenticated: true, wishlist: user.wishlist || [] });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, wishlist: [] });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      },

      addToWishlist: (product) => {
        const isAlreadyInWishlist = get().isInWishlist(product.id);
        if (!isAlreadyInWishlist) {
          set((state) => ({
            wishlist: [...state.wishlist, product],
          }));
        }
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((product) => product.id !== productId),
        }));
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((product) => product.id === productId);
      },

      addAddress: (address) => {
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                addresses: [...state.user.addresses, address],
              }
            : null,
        }));
      },

      updateAddress: (addressId, updates) => {
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.map((addr) =>
                  addr.id === addressId ? { ...addr, ...updates } : addr
                ),
              }
            : null,
        }));
      },

      removeAddress: (addressId) => {
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.filter((addr) => addr.id !== addressId),
              }
            : null,
        }));
      },

      setDefaultAddress: (addressId, type) => {
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                addresses: state.user.addresses.map((addr) => ({
                  ...addr,
                  isDefault: addr.id === addressId && addr.type === type,
                })),
              }
            : null,
        }));
      },
    }),
    {
      name: 'viju-user',
    }
  )
);