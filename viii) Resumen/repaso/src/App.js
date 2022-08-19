import "./App.css";
import React from "react";
import NavBar from "../src/components/NavBar.jsx";
import { Route } from "react-router-dom";
import Home from "../src/components/Home.jsx";
import CreateUser from "../src/components/CreateUser.jsx";
/* import Users from "../src/components/Users.jsx";
import About from "../src/components/About.jsx"; */

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/home">
        <Home name={"federico"} age={33} city={"CABA"} />
      </Route>
      {/* <Route path="/home" render={() => <Home name={"federico"} age={33} />} /> */}
      <Route path="/create">
        <CreateUser />
      </Route>
      {/*    <Route path="/create" component={CreateUsers} />
      <Route path="/about" component={About} /> */}
    </React.Fragment>
  );
}

export default App;
