import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother.js";
import Sister from "../Sister/Sister";

const Father = ({ home }) => {
  return (
    <div>
      <h2>Father</h2>
      <p>Home: {home}</p>
      <section style={{ display: "flex" }}>
        <Myself home={home}></Myself>
        <Brother home={home}></Brother>
        <Sister home={home}></Sister>
      </section>
    </div>
  );
};

export default Father;
