import React from "react";
import CartProvider from "./context/CartContext";


import "./App.css";

import Cart from "./Com/Cart.jsx";
import ProductList from "./Com/ProductList.jsx";


function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Simple Shopping Cart</h1>
        <ProductList/>

  <Cart/>
      </div>
    </CartProvider>
  );
}

export default App;
