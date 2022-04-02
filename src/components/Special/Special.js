import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Special = () => {
  const [gift, home, setHome] = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <small>Gift: {gift}</small> <br />
      <button onClick={() => setHome(home + 1)}>Buy Home</button>
    </div>
  );
};

export default Special;
