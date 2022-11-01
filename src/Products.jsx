import React, { useState } from "react";
import Card from "./Card";
const Products = ({ data }) => {
  return (
    <div className="tank">
      {data.map((item) => (
        <Card key={item.id_product} item={item} />
      ))}
    </div>
  );
};
export default Products;