"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  alt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isHydrated: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isHydrated: false,
};

const saveToLocalStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("orevia-cart", JSON.stringify(items));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart: (state) => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("orevia-cart");
        if (saved) {
          try {
            state.items = JSON.parse(saved);
          } catch (e) {
            state.items = [];
          }
        }
        state.isHydrated = true;
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.product.slug === product.slug);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product, quantity: 1 });
      }
      
      saveToLocalStorage(state.items);
      state.isOpen = true; // Auto open drawer when item is added
    },
    updateQuantity: (state, action: PayloadAction<{ slug: string; delta: number }>) => {
      const { slug, delta } = action.payload;
      const existing = state.items.find((item) => item.product.slug === slug);
      
      if (existing) {
        existing.quantity += delta;
        if (existing.quantity <= 0) {
          state.items = state.items.filter((item) => item.product.slug !== slug);
        }
      }
      
      saveToLocalStorage(state.items);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const slug = action.payload;
      state.items = state.items.filter((item) => item.product.slug !== slug);
      saveToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { hydrateCart, addToCart, updateQuantity, removeItem, clearCart, setCartOpen } = cartSlice.actions;
export default cartSlice.reducer;
