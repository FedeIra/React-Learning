import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")} /* entre corchete porque vamos a meter código JS */
        alt="foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> Emma Bostian in Sweden</p>
        <p className="cargo-testimonio">Software Engineer at Spotify</p>
        <p className="texto-testimonio">
          "I've always struggled with learning JavaScript. I've taken many
          courses but freeCodeCamp's course was the one which stuck. Studying
          JavaScript as well as data structures and algorithms on freeCodeCamp
          gave me the skills and confidence I needed to land my dream job as a
          software engineer at Spotify."
        </p>
      </div>
    </div>
  );
} /* estamos exportando el componente testimonio por defecto. El por defecto te dice que va a ser el único componente que se exporta. */

export default Testimonio; /* Otra forma de exportar es poner el export adelante de la función y cuando lo importar agregarlo entre corchetes:
export function Testimonio() {...}

import { Testimonio } from "./componentes/Testimonio.js";
*/
