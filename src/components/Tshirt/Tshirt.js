import React from "react";
import "./Tshirt.css";

const Tshirt = ({ handleAddToCart, tshirt }) => {
  const { price, picture, name, gender } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h3 className="t-name">{name}</h3>
      <h2 className="t-price">Price: ${price}</h2>
      <button onClick={() => handleAddToCart(tshirt)} className="cart-btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Tshirt;
