import "./App.css";
import spartanLogo from "./imagenes/spartan-logo.jpg"; /* Esta es otra forma de usar imagenes sin tener que usar require como en el proyecto anterior (proyecto 1) */
import Boton from "./componentes/boton"; /* importamos la función boton que está dentro de la carpeta componentes */
import Contador from "./componentes/contador";
import { useState } from "react"; /* Esto es para importar el hook que voy a usar en las funciones addClick y reiniciar abajo. */

function App() {
  /* Acá creamos la función para los botones que luego vamos a agregar en sus propiedades "manejarClick:". Pero antes creamos una constanste que va a ser un arreglo con dos elementos. Primero el valor que queremos usar como el estado o número de clicks en este caso. Este guardamos, usamos y actualizamos. Luego tenemos otro que es una función que permite actualizarlo. : */
  const [numberClicks, setNumClicks] =
    useState(
      0
    ); /* esto es lo que importamos. El 0 es por el valor inicial. con la función actualizamos el número de clicks. */

  const addClick = () => {
    /* Acá emtemos hooks. Funciones especiales con componentes funcionales. Uno es useState. Permite agregarle un estado a un componente funcional. */
    setNumClicks(
      numberClicks + 1
    ); /* Esta llamada actualiza el estado en el interfaz de usuario. */
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="spartan-logo-contenedor">
        <img className="spartan-logo" src={spartanLogo} alt="Logo de sparta" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numberClicks} />
        <Boton
          texto="Crear Hoplita"
          esBotonDeClick={true}
          manejarClick={
            addClick
          } /* le metemos el valor de la función al prop. Lo recibe la function Boton como prop para poder usarlo en su función. */
        />
        <Boton
          texto="Eliminar ejercito"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
