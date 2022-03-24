import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };

  const addToCart = (value) => {
    setCart(value);
  };

  return (
    <div className="shop">
      <h1>This is shop component - parent</h1>

      <button onClick={changeCount}>Counter</button>

      <div className="shop-container">
        <div className="producs-container">
          <h2>Products container -child</h2>
          <Product count={count} addToCart={addToCart} />
        </div>
        {/* ----------------------------------------------------------------------- */}

        <div className="cart-container">
          <h2>Cart container -child</h2>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
