import React from "react";
import "../hojas-de-estilo/contador.css";

function Contador({ numClicks }) {
  return <div className="contador">{numClicks}</div>;
}

export default Contador;
