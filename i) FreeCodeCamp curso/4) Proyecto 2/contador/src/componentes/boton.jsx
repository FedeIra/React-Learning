import React from "react";
import "../hojas-de-estilo/boton.css";

//definir componente  boton:
function Boton({ texto, esBotonDeClick, manejarClick }) {
  /* Aca en lugar de poner props como en el proyecto anterior, pongo entre llaves los valores que vamos a usar para luego evitar tener que escribir props... . En su lugar ponemos directamente el valor que pusimos en la llave. El props lo da por hecho por haberlo puesto entre {}

  En manejarClick paso la función que se va a hacer con el evento onClick que le agregué a los atributos del botón.*/
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
