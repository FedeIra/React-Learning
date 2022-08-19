import React from "react";

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     lastname: "",
  //   };
  // }

  render() {
    let { name, age } = this.props;
    return (
      <div>
        Home Nombre:{name} Edad: {age}
      </div>
    );
  }
}
// CICLO DE VIDA DE UN COMPONENTE:
//1) constructor() -> componentWillMount() -> render() -> componentDidMount() // useEffect(() => {}, [])
//2) state -> render() -> componentDidUpdate()
//3) state -> render() -> shouldComponentUpdate() TRUE / FALSE
//4) state -> render() -> componentWillUnmount()

// EJEMPLO CON FUNCION COMPONENTE
// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Home({name, age}) {
// let [input, setInput] = React.useState({name: "", lastname: ""});
//   return (
//     <div>
//       Home Nombre:{name } Edad: {age}
//     </div>
//   );
// }
