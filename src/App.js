import React from "react";
import "./App.css";
import Header from "./features/header/Header";
import { ProductList } from "./features/products/Product";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Products */}
      <ProductList />
    </div>
  );
}

export default App;
