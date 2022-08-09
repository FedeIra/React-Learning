import React from "react"; /* Esto en la práctica no es necesario, salvo proyectos viejos. Solo es obligatorio cuando trabajas con hooks y otro tipo de elementos. Mejor dejarlo. */
import "../hojas-de-estilo/Testimonio.css"; /* Acá le pones css pq sino react asume que es un archivo js. Por eso cuando importamos archivos js no hace falta ponerle el .js */

/* Le agrego el props para que el componente reciba propiedades. Para recibir valores y utlizarlos en nuestro componente. Ahora bien, también hay que pasarle los PROPS. */
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} /* entre corchete porque vamos a meter código JS */
        alt={`foto de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
        {/* Agregué las comillas para no arriesgarnos a omitirlas cuando pasemos los props */}
      </div>
    </div>
  );
} /* estamos exportando el componente testimonio por defecto. El por defecto te dice que va a ser el único componente que se exporta. */

export default Testimonio; /* Otra forma de exportar es poner el export adelante de la función y cuando lo importar agregarlo entre corchetes:
export function Testimonio() {...}

import { Testimonio } from "./componentes/Testimonio.js";
*/

/*PROPS: el próposito de react es ayudarnos a hacer componentes reutilizables. Esto no lo es. solo tenemos un rellenado que sirve para Emma.  */
// function Testimonio() {
//   return (
//     <div className="contenedor-testimonio">
//       <img
//         className="imagen-testimonio"
//         src={require("../imagenes/testimonio-emma.png")} /* entre corchete porque vamos a meter código JS */
//         alt="foto de Emma"
//       />
//       <div className="contenedor-texto-testimonio">
//         <p className="nombre-testimonio"> Emma Bostian in Sweden</p>
//         <p className="cargo-testimonio">Software Engineer at Spotify</p>
//         <p className="texto-testimonio">
//           "I've always struggled with learning JavaScript. I've taken many
//           courses but freeCodeCamp's course was the one which stuck. Studying
//           JavaScript as well as data structures and algorithms on freeCodeCamp
//           gave me the skills and confidence I needed to land my dream job as a
//           software engineer at Spotify."
//         </p>
//       </div>
//     </div>
//   );
