import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      setProducts(data);
    };
  }, []);
  return;
  <>
    <div>
      <h2>Products</h2>
    </div>
  </>;
};

export default Products;