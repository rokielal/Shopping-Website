import React from "react";
import Products from "./components/Products";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
};

export default App;
