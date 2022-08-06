import React from "react"; /* Importamos react que nos permite crear componentes. */
import ReactDOM from "react-dom/client"; /* Esto nos permite interacturar con el DOM. */
import "./index.css"; /* Acá importamos index.css que nos permite aplicarle ese estilo a la parte de la aplicación abajo. */
import App from "./App"; /* También importamos la aplicación principal o componente principal que es app. */
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
); /* el id es root que está en nuestro archivo index.html. Es el contenedor raíz o principal del navegador. */
root.render(
  <React.StrictMode>
    <App />{" "}
    {/* Acá renderizamos la aplicación principal o componente principal
    que es app. */}
  </React.StrictMode>
); /* Acá creamos el componente de la aplicación en modo estricto. Esto viene por defecto. */

/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */ // esto se suele eliminar si no hace falta medir la performance de la aplicación.
reportWebVitals();
