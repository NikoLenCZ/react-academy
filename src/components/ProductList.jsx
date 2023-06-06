import React from "react";

import { useState } from "react";
import Products from "./Products";

const ProductList = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="container flex gap-8 my-12 md:w-[50rem] mx-auto">
      <select className="border rounded border-slate-500 w-36" onChange={ (event) => setCategory(event.target.value) }>
        <option value=""></option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>
      <Products category={ category } />
    </div>
  );
};

export default ProductList;
