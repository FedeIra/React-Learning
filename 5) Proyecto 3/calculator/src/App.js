import "./App.css";
import divideLogo from "./imagenes/divide2-logo.png";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/Boton-clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [inputPantalla, setInput] = useState("");

  /* Esto es para el operador de suma: */
  const agregarInput = (val) => {
    setInput(inputPantalla + val);
  };

  const calcularResultado = () => {
    if (inputPantalla) {
      setInput(evaluate(inputPantalla));
    } else {
      alert("Por favor ingresar valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className="divide-contenedor">
        <img src={divideLogo} className="divide-logo" alt="logo de divide" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={inputPantalla} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          {/* Le agrego el método para agregar input */}
          <Boton manejarClick={agregarInput}>2</Boton>
          {/* Tienen etiqueta de apertura y cierre porque tenemos que incluir valores entre ellos. */}
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
