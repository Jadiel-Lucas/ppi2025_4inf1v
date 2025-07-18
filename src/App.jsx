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
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
        <MyHeader cart={cart} />
        <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
    </>
  );
}
