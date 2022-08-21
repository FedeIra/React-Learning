// NOT CONTROLLED

import React from "react";
import { createProduct } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  let [product, setProduct] = React.useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  //OTRA FORMA!!:
  /*   const handleChange = (event) => {
    event.preventDefault();
    setProduct((prev) => ({...prev, [event.target.name]: event.target.value }))
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
  };

  //OTRA FORMA:
  /*  const handleSubmit = (event) => {
    event.preventDefault();
    setInput({name:"", lastName:"", age:"", city:""})
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name={"name"}
          value={product.name}
          onChange={handleChange}
        ></input>
        <label>Price: </label>
        <input
          type="number"
          name={"price"}
          value={product.price}
          onChange={handleChange}
        ></input>
        <label>Description: </label>
        <textarea
          name={"description"}
          value={product.description}
          onChange={handleChange}
        ></textarea>
        <label>Stock: </label>
        <input
          type="number"
          name={"stock"}
          value={product.stock}
          onChange={handleChange}
        ></input>

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;

// OTRO EJEMPLO
import React, { useState } from "react";

function DinamicInputs() {
  const modeloFamiliar = { nombre: "" };

  const [familiar, setFamiliar] = useState([]);
  const [persona, setPersona] = useState({
    nombre: "",
  });
  const agregaFamiliar = () => {
    setFamiliar([...familiar, { ...persona }]);
    setPersona({ nombre: "" });
  };

  const handlePersonaChange = (e) =>
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(familiar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
}

// export default DinamicInputs;

//OTRO EJEMPLO:
import React, { useState } from "react";

function Ejemplo({ lang }) {
  if (lang === "hun") {
    return (
      <form>
        <input
          key="lastName"
          type="text"
          placeholder="Vezetéknév"
          name="lastName"
        />
        <input
          key="firstName"
          type="text"
          placeholder="Keresztnév"
          name="firstName"
        />
        <input
          key="middleInitial"
          type="text"
          placeholder="KB"
          style={{ width: 30 }}
          name="middleInitial"
        />
      </form>
    );
  }

  return (
    <form>
      <input type="text" placeholder="First Name" name="firstName" />
      <input
        type="text"
        placeholder="MI"
        style={{ width: 30 }}
        name="middleInitial"
      />
      <input type="text" placeholder="Last Name" name="lastName" />
    </form>
  );
}

function Lang() {
  const [lang, setLang] = useState("hun");

  return (
    <div>
      <Ejemplo lang={lang} />
      <button
        onClick={(e) => setLang((old) => setLang(old == "hun" ? "es" : "hun"))}
      >
        Lang
      </button>
    </div>
  );
}

// export default Lang;

// OTRO EJEMPLO
import React from "react";

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector("input[name=username]").value;
    const password = document.querySelector("input[name=password]").value;
    console.log(username, password);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}

// export default Uncontrolled;
