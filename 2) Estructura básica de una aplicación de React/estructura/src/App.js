/* Crea un componente funcional. Es el principal de la aplicación. */
import logo from "./logo.svg"; /* Acá importamos el logo de react. */
import "./App.css"; /* Acá importamos el archivo CSS con su componente correspondiente. */

/* Esta es la estructura principal, pero en general se elimina completamente. */
function App() {
  return (
    /* nos permite retornar la estructura de la aplicación */
    <div className="App">
      {" "}
      {/* Acá tenemos JSX que es una mezcla entre http y JS. */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; /* Esto se mantiene pq permite que mostremos nuestra aplicación. */
