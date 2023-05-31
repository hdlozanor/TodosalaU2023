import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio 1</Link>
        <Link to="/products">Productos</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
