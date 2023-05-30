import React, { useEffect, useState } from "react";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // document.title = "Products";
    console.log("fetching products", category);
    setProducts(["Apple", "Orange", "Banana"]);
  }, [category]);
  return <div>{products}</div>;
};

export default Products;