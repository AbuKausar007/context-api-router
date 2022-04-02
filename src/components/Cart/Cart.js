import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = <p>Please add item.</p>;
  } else if (cart.length === 1) {
    command = <p>Add more items...</p>;
  } else {
    command = <p>Thanks for adding.</p>;
  }

  return (
    <div>
      <h1>Seleted Item: {cart.length}</h1>

      {cart.map((tshirt) => (
        <p>
          {tshirt.name}{" "}
          <button onClick={() => handelRemoveFromCart(tshirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || <h3 className="orange">YeY! You are buying.</h3>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Will you gift 3 person?</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
      {cart.length === 3 && <button className="orange">Review Order</button>}
    </div>
  );
};

export default Cart;
