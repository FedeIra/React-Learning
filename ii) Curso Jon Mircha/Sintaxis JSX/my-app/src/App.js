import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "Fede",
    auth;

  let estaciones = ["primavera", "otoño"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre"> Nombre</label>
        <input type="text" id="nombre"></input>
        <h2>{nombre}</h2>
        <p>
          {auth ? "El usuario no esta logueado" : "el usuario esta logueado"}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((estacion, index) => (
            <li key={index}>{estacion}</li>
          ))}
        </ul>
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

export default App;
