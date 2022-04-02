import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Aunty = () => {
  const [gift, home, setHome] = useContext(RingContext);
  const handleIncreaseHome = () => {
    const newHome = home + 1;
    setHome(newHome);
  };
  return (
    <div>
      <h2>Aunty</h2>
      <p>Gift: {gift}</p>
      <h4>Home: {home}</h4>
      <button onClick={handleIncreaseHome}>Buy Home</button>
    </div>
  );
};

export default Aunty;
