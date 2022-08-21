import React, { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("el usuario tiene que ser un email");
    } else {
      setError("");
    }
    setUsername(value);
  }

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(error);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className={error && "danger"}
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => validateUser(e.target.value)}
      />
      {!error ? null : <span>{error}</span>}
      <input
        name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

//OTRO EJEMPLO:

import React, { useState } from "react";

export default function Form() {

  const [user, setUser] = useState({ username: "", password: "" });

  const [error, setError] = useState("");

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("Debe ser un mail");
    } else {
      setError("");
    }
  }

  function validate(e) {
    if (e.target.name === "username") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setError("Debe ser un mail");
      } else {
        setError("");
      }
    } else if (e.target.name === "password") {
      if (!e.target.value.length > 4) {
        setError("la contraseña debe tener +4 caracteres");
      }
    }

    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
        setUser({ username: "", password: "" });
      }}
    >
      <input
        className={error && "danger"}
        name="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => validate(e)}
      />
      {!error ? null : <span>{error}</span>}
      <input
        name="password"
        value={user.password}
        placeholder="password"
        type="password"
        onChange={(e) => validate(e)}
      />
      <input type="submit" disabled={error ? true : false} />
    </form>
  );
}
