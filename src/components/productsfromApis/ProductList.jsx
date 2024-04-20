import React, { useContext } from "react";
import { ProductContext } from "./Product";

const ProductList = () => {
  const { Products } = useContext(ProductContext);
  console.log(Products);
  return (
    <div>
      <div>
        {Products.map((Products) => {
          return <div key={Products.id}>{Products.title}</div>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
