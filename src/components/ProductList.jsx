import React from "react";

import { useState } from "react";
import Products from "./Products";

const ProductList = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
      </select>
      <Products category={category} />
    </div>
  );
};

export default ProductList;
