import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { MyHeader } from "./components/MyHeader";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, change) {
  setCart((prevCart) => {
    return prevCart
      .map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) return null; 
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter(Boolean); 
  });
}

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <MyHeader cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </>
  );
}
