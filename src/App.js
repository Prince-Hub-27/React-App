import React, { useState } from "react";
import ProductList from "./productlist";
import products from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    
    <div style={{ padding: "20px" }}>
     
    <header>
    <h1>Pearl Pastries</h1>
    <nav>
      <a onclick="showSection('home')">Home</a>
      <a onclick="showSection('about')">About</a>
      <a onclick="showSection('products')">Products</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
