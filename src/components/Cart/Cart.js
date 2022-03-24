import React from "react";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <h1>cart component</h1>
      <h3>Cart selected : {cart}</h3>
    </div>
  );
};

export default Cart;
