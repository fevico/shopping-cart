import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlist = create(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (product) => {
        const exists = get().items.find(item => item.id === product.id);

        if (exists) return; // prevent duplicates

        set(state => ({
          items: [...state.items, product],
        }));
      },

      removeFromWishlist: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage", // localStorage key
    }
  )
);
