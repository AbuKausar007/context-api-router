import React from "react";
import Special from "../Special/Special";

const Myself = ({ home }) => {
  return (
    <div>
      <h2>Myself</h2>
      <small>Home: {home}</small>
      <Special ></Special>
    </div>
  );
};

export default Myself;
