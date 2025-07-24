import { createContext } from "react";

export const CartContext = createContext({
    products: [],
    loading: false,
    error: null,

    cart: [],
    addToCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
});

export function CartProvider({ children }) {
    function clearCart() {
    }

    const