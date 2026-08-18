import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Product } from '@/lib/product';

export type CartItem = {
  product: Product;
  quantity: number;
};

interface BigzicoStoreState {
  cart: CartItem[];
  wishlist: Product[];
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

const buildSummary = (cart: CartItem[], wishlist: Product[]) => ({
  cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
  cartTotal: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  wishlistCount: wishlist.length,
});

const storage = {
  getItem: (name: string) => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(name);
  },
  setItem: (name: string, value: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(name, value);
    }
  },
  removeItem: (name: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(name);
    }
  },
};

export const useBigzicoStore = create<BigzicoStoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      cartCount: 0,
      cartTotal: 0,
      wishlistCount: 0,
      addToCart: (product, quantity = 1) => {
        const nextCart = get().cart.some((item) => item.product.id === product.id)
          ? get().cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
          : [...get().cart, { product, quantity }];
        const summary = buildSummary(nextCart, get().wishlist);
        set({ cart: nextCart, ...summary });
      },
      removeFromCart: (productId) => {
        const nextCart = get().cart.filter((item) => item.product.id !== productId);
        const summary = buildSummary(nextCart, get().wishlist);
        set({ cart: nextCart, ...summary });
      },
      increaseQuantity: (productId) => {
        const nextCart = get().cart.map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
        const summary = buildSummary(nextCart, get().wishlist);
        set({ cart: nextCart, ...summary });
      },
      decreaseQuantity: (productId) => {
        const nextCart = get().cart.flatMap((item) => {
          if (item.product.id !== productId) return [item];
          if (item.quantity <= 1) return [];
          return [{ ...item, quantity: item.quantity - 1 }];
        });
        const summary = buildSummary(nextCart, get().wishlist);
        set({ cart: nextCart, ...summary });
      },
      clearCart: () => {
        const summary = buildSummary([], get().wishlist);
        set({ cart: [], ...summary });
      },
      addToWishlist: (product) => {
        const exists = get().wishlist.some((item) => item.id === product.id);
        if (exists) return;
        const nextWishlist = [...get().wishlist, product];
        const summary = buildSummary(get().cart, nextWishlist);
        set({ wishlist: nextWishlist, ...summary });
      },
      removeFromWishlist: (productId) => {
        const nextWishlist = get().wishlist.filter((item) => item.id !== productId);
        const summary = buildSummary(get().cart, nextWishlist);
        set({ wishlist: nextWishlist, ...summary });
      },
      clearWishlist: () => {
        const summary = buildSummary(get().cart, []);
        set({ wishlist: [], ...summary });
      },
    }),
    {
      name: 'bigzico-store',
      storage: createJSONStorage(() => storage as Storage),
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    },
  ),
);
