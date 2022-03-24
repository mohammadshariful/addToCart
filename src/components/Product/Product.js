import React from "react";

const Product = (props) => {
  const { count, addToCart } = props;
  return (
    <div>
      <h1>product child component</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => addToCart(count)}>Add to Cart</button>
    </div>
  );
};

export default Product;
