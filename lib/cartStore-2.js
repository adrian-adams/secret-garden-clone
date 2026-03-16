import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
    persist(
        (set, get) => ({
            cartItems: [],
            openCart: false,

            addProduct: (data) => set((state) => ({
                cartItems: [
                    ...state.cartItems,
                    {
                        id: data.id,
                        title:  data.title,
                        price:  data.price,
                        size:  data.productSize,
                        colour:  data.productColour,
                        qty:  data.qtyValue,
                        image:  data.images[0],
                    }
                ]
            })),

            deleteProduct: () => set((state) => ({

            })),

            clearCart: () => set((state) => ({
                cartItems: [],
            })),

            toggleCart: () => set((state) => ({
                openCart: true
            })),

        })
    )
)