import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      openCart: false,
      openProductDrawer: false,

      addItem: (newItem) =>
        set((state) => {
          const existingIndex = state.cartItems.findIndex(
            (item) =>
              item.id === newItem.id &&
              item.size === newItem.size &&
              item.colour === newItem.colour
          );

          if (existingIndex !== -1) {
            const updated = [...state.cartItems];
            updated[existingIndex] = {
              ...updated[existingIndex],
              qty:
                updated[existingIndex].qty + newItem.qty,
            };
            return { cartItems: updated };
          }

          return {
            cartItems: [...state.cartItems, newItem],
          };
        }),

      removeItem: (id, size, colour) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) =>
              !(
                item.id === id &&
                item.size === size &&
                item.colour === colour
              )
          ),
        })),

      updateItem: (id, size, colour, qty) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id &&
            item.size === size &&
            item.colour === colour
              ? { ...item, qty }
              : item
          ),
        })),

      clearCart: () => set({ cartItems: [] }),

      toggleCart: () =>
        set((state) => ({ openCart: !state.openCart })),

      toggleProductDrawer: () =>
        set((state) => ({ openProductDrawer: !state.openProductDrawer })),

      getTotal: () =>
        get().cartItems.reduce(
          (total, item) => total + item.price * item.qty,
          0
        ),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

export default useCartStore;