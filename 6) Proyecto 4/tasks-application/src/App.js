import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.jpg";
import Tarea from "./componentes/Tareas.jsx";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="freecodecampLogo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea texto="Aprende React" />
      </div>
    </div>
  );
}

export default App;
