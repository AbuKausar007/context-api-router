import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const RingContext = createContext("Gold Ring");

const GrandPa = () => {
  const [home, setHome] = useState(1);

  const gift = "Dimond Ring";

  const handleBuyHome = () => {
    const newHome = home + 1;
    setHome(newHome);
  };
  return (
    <RingContext.Provider value={[gift, home, setHome]}>
      <div className="grandPa" style={{ marginTop: "30px" }}>
        <h1>GrandPa</h1>
        <button onClick={handleBuyHome}>Buy Home</button>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <Father home={home}></Father>
          <Uncle home={home}></Uncle>
          <Aunty home={home}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
