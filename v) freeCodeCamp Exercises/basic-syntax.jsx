/*
REACT

!BASIC SYNTAX
One important thing to know about nested JSX is that it must return a single element.
*/
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>;

// other example:

const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
);

/* To put comments inside JSX, you use the syntax { }  to wrap around the comment text. */
const JSX2 = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* Hey */}
    <p>Here's a subtitle</p>
  </div>
);

/*  With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM:
ReactDOM.render(componentToRender, targetNode)

ReactDOM.render() must be called after the JSX element declarations
*/

const JSX3 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));

/* Sin embargo, para los componentes de React, debes usar la misma sintaxis que si estuvieras renderizando un componente anidado, por ejemplo:

ReactDOM.render(<ComponentToRender />, targetNode).*/

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Cambia el código debajo de esta línea */}

        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}
// Cambia el código debajo de esta línea
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

// Otro ejemplo:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

/* One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.

The naming convention for all HTML attributes and event references in JSX become camelCase*/

const JSX4 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

/* There are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />.*/

const JSX5 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

/*
! FUNCTIONAL COMPONENTS
There are two ways to create a React component. The first way is to use a JavaScript function.

One important thing to note is that React requires your function name to begin with a capital letter.
*/

const DemoComponent = function () {
  return <div className="customClass" />;
};

/*
Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.  */

const MyComponent = function () {
  // Change code below this line
  return <div>String of text</div>;
  // Change code above this line
};

/*
!CLASS COMPONENTS
The other way to define a React component is with the ES6 class syntax.
*/
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hi</h1>;
  }
}

/* Class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. */

// Other example:

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
}

/*
!Crear un componente con composición
Para componer estos componentes juntos, se podría crear un componente App parent que renderiza cada uno de estos tres componentes como children.

Para renderizar un componente como hijo en un componente React, se incluye el nombre del componente escrito como una etiqueta HTML personalizada en el JSX.
*/
return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
);

/* React renderiza el marcado de ese componente en la ubicación de la etiqueta.   */
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Cambia el código debajo de esta línea */}
        <ChildComponent />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/* Debes dividir tu UI en sus bloques básicos de construcción, y esas piezas se convierten en los componentes. Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de tu aplicación. Esto puede simplificar enormemente el desarrollo y el mantenimiento de proyectos complejos. */

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Cambia el código debajo de esta línea */}
      <TypesOfFruit />
      {/* Cambia el código encima de esta línea */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Cambia el código debajo de esta línea */}
        <Fruits />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

// otro ejemplo más avanzado:
class Fruits2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Cambia el código debajo de esta línea */}
        <NonCitrus />
        <Citrus />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Cambia el código debajo de esta línea */}
        <Fruits2 />
        {/* Cambia el código encima de esta línea */}
        <Vegetables />
      </div>
    );
  }
}

/*
!PROPS:
En React, se pueden pasar props, o propiedades a componentes hijos.

Ejemplo: tienes un componente App que devuelve un componente hijo llamado Welcome, el cual es un componente funcional sin estado. Puedes pasarle una propiedad llamada user a Welcome escribiendo:
*/
<App>
  <Welcome user="Mark" />
</App>;

/* Dado que Welcome es un componente funcional sin estado, tiene acceso a este valor de la siguiente manera: */

const Welcome = (props) => <h1>Hello, {props.user}!</h1>;

/*  Puedes acceder el valor del argumento en el cuerpo de la función. En los componentes de clase, verás que esto es un poco diferente. */

const CurrentDate = (props) => {
  return (
    <div>
      {/* Cambia el código debajo de esta línea */}
      <p>The current date is: {props.date} </p>
      {/* Cambia el código encima de esta línea */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Cambia el código debajo de esta línea */}
        <CurrentDate date={Date()} />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!Arreglo como "props"
Para pasar un arreglo a un elemento JSX, debe ser tratado como JavaScript y envolverlo entre llaves.
*/
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>;

/* El componente hijo entonces tiene acceso a la propiedad del arreglo colors. Los métodos de arreglo, como join() pueden ser usados al acceder a la propiedad.  */
const ChildComponent1 = (props) => <p>{props.colors.join(", ")}</p>;

const List = (props) => {
  {
    /* Cambia el código debajo de esta línea */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Cambia el código encima de esta línea */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Cambia el código debajo de esta línea */}
        <List tasks={["cook", "work"]} />
        <h2>Tomorrow</h2>
        <List tasks={["clean", "cook", "work"]} />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!props predeterminadas DEFAULT PROPS
React también tiene una opción para establecer props predeterminadas.

Esto te permite especificar cuál debe ser el valor de una prop si no se provee un valor específico. Por ejemplo, si declaras: */
MyComponent.defaultProps = { location: "San Francisco" };

/* Pero si pasas el valor null como valor para una prop, este permanecerá null. */

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>`Shopping Cart Component {props.items}`</h1>
    </div>
  );
};
// Cambia el código debajo de esta línea
ShoppingCart.defaultProps = { items: 0 };

// Otra forma de hacerlo:
const ShoppingCart = ({ items = 0 }) => {
  return <div>`Shopping Cart Component {items}`</div>;
};

// Otro ejemplo: DEFAULT PASADO POR PADRE MATA DEFAULT HIJO
const Items = ({ quantity }) => {
  return <h1>Current Quantity of Items in Cart: {quantity}</h1>;
};

Items.defaultProps = {
  quantity: 3,
};

class ShoppingCart2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* Cambia el código debajo de esta línea */
    }
    return <Items quantity={10} />;
    {
      /* Cambia el código encima de esta línea */
    }
  }
}

/*
!Usa PropTypes para definir las props que esperas
React proporciona características útiles de validación de tipos para verificar que los componentes reciban las props del tipo correcto. Por ejemplo, tu aplicación hace una llamada a un API para obtener datos que se esperan que sea un arreglo, el cual es pasado al componente como una prop. Puedes establecer propTypes en tu componente para que los datos sean de tipo array. Esto arrojará una advertencia útil cuando los datos sean de otro tipo.

Puedes definir una propiedad propTypes para un componente de la misma manera que defines defaultProps.
*/
import PropTypes from "prop-types";

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired };
MyComponent.propTypes = { handleClick: PropTypes.bool.isRequired };
MyComponent.propTypes = { handleClick: PropTypes.array.isRequired };
MyComponent.propTypes = { handleClick: PropTypes.string.isRequired };
MyComponent.propTypes = { handleClick: PropTypes.number.isRequired };

/*Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puedes validar si una prop es un elemento React.   */
MyComponent.propTypes = { handleClick: PropTypes.React.isRequired };

/* Verás una advertencia si no se proporciona esa propiedad.  */
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Cambia el código debajo de esta línea
Items.propTypes = { quantity: PropTypes.number.isRequired };
// Cambia el código encima de esta línea

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={"hola"} />;
  }
}

/*
!Accede a propiedades "props" usando this.props
Los componentes de clase ES6 usan una convención un poco diferente para acceder a las propiedades.

Cada vez que se hace referencia a un componente de clase en sí mismo, se utiliza la palabra clave this. Props se accede con this.props.

Por ejemplo, si un componente de clase tiene una propiedad llamada "handleClick", puedes acceder a ella usando this.props.handleClick.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <Welcome name={"Fede"} />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

class Welcome1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!props" con componentes funcionales sin estado:
Un componente funcional sin estado, es cualquier función que escribas que acepte props y devuelva JSX. Un componente sin estado, por otra parte, es una clase que extiende React.Component, pero no usa el estado interno.

Finalmente, un componente con estado es un componente de clase que mantiene su propio estado interno.

Un patrón común es intentar minimizar el estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a contener tu administración de estado a un área específica de tu aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de tu aplicación al facilitar el seguimiento de cómo los cambios de estado afectan a su comportamiento.*/

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Cambia el código debajo de esta línea
const Camper = (props) => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot",
};

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};

/*
!STATES

El estado consiste en cualquier dato que tu aplicación necesite conocer y que pueda cambiar con el tiempo.

Quieres que tus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario.

Creas un estado en un componente de React declarando una propiedad state en la clase del componente en su constructor.
*/

this.state = {};

/* Puedes actualizarlo, renderizarlo en tu interfaz de usuario y pasarlo como propiedades a componentes hijos.  */

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Cambia solo el código debajo de esta línea
    this.state = {
      name: "Fede",
    };
    // Cambia solo el código encima de esta línea
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

/* Esto te permite realizar un seguimiento de los datos importantes en tu aplicación y generar una interfaz de usuario en respuesta a los cambios en estos datos.

React usa lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de escena. Cuando se actualizan los datos de estado, activa un re-renderizado de los componentes usando esos datos: incluyendo componentes hijos que recibieron los datos como un prop. React actualiza el DOM actual, pero solo cuando sea necesario.

Si creas un componente con estado, ningún otro componente es consciente de su state. Su state está completamente encapsulado, o local a ese componente, a menos que pases datos de estado a un componente hijo como props.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <h1>{this.state.name}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/* En el método render(), antes de la sentencia return, se puede escribir JavaScript directamente. Por ejemplo, puedes declarar funciones, acceder a datos de state o props, realizar cálculos sobre estos datos, etc. Luego, puedes asignar cualquier dato a las variables, a las que tienes acceso en la sentencia return. */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        {/* change code below this line */}
        <h1>{name}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}

/*
! Define el estado con this.setState
También hay una forma de cambiar el state del componente. React proporciona un método para actualizar el componente state llamado setState.
*/
this.setState();

/* Pasando un objeto con pares clave-valor. Las claves son tus propiedades de estado y los valores son datos de estado actualizados.

Por ejemplo, si estuviéramos almacenando un username en estado y quisiéramos actualizarlo, se vería así:
*/

this.setState({
  username: "Lewis",
});

/* Además, ten en cuenta que React puede agrupar múltiples actualizaciones de estado con el fin de mejorar el rendimiento. Esto significa que las actualizaciones de estado a través del método setState pueden ser asíncronas.  */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Cambia el código debajo de esta línea
    this.setState({ name: "React Rocks!" });
    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

/* También puedes definir métodos para tu componente de clase.

Un método de clase normalmente necesita usar la palabra clave this para que pueda acceder a propiedades de la clase (como state y props) dentro del ámbito del método.

Una forma común es enlazar explícitamente this en el constructor para que this se vincule a los métodos de clase cuando el componente es inicializado.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
    // Cambia el código debajo de esta línea
    this.handleClick = this.handleClick.bind(this);
    // Cambia el código encima de esta línea
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Cambia el código encima de esta línea */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

/*A veces puedes necesitar conocer el estado anterior al actualizar el estado.

Las actualizaciones del estado pueden ser asíncronas: esto significa que React puede procesar múltiples llamadas a setState() en una sola actualización. Esto significa que no puedes confiar en el valor anterior de this.state o this.props al calcular el siguiente valor.

/*
!NO USAR:*/
this.setState({
  counter: this.state.counter + this.props.increment,
}); /* acá usas el valor del estado */

/*  En su lugar, debes pasar una función a setState que te permitirá acceder al estado y props. El usar una función con setState te garantiza que estás trabajando con los valores más actuales del estado y props.
!SI USAR */
this.setState((state, props) => ({
  counter: state.counter + props.increment,
})); /* acá usas el valor de la variable como quedó al final. En general está más actualizado que el estado que a veces no se renderiza automáticamente. */

/* También puedes usar un formulario sin props si necesitas solo el state: */
this.setState((state) => ({
  counter: state.counter + 1,
}));

/*
!CON BOTON MOSTRAR Y NO MOSTRAR  */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Cambia el código debajo de esta línea
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  toggleVisibility() {
    this.setState((state) => {
      if (!state.visibility) {
        return { visibility: true };
      } else {
        return { visibility: false };
      }
    });
  }
  // Cambia el código encima de esta línea
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

/*
!CONTADOR SIMPLE */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Cambia el código debajo de esta línea
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
  reset() {
    this.setState(() => ({ count: 0 }));
  }
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

/*
!UNCONTROLLED FORMS
Con React, puedes mover este estado mutable hacia el state de un componente de React. La entrada del usuario se convierte en parte del state de la aplicación, así que React controla el valor de ese campo de entrada. Por lo general, si tienes componentes de React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado.

*/
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Cambia el código debajo de esta línea
    this.handleChange = this.handleChange.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  /*   handleChange(event) {
    this.setState(() => ({ input: event.target.value }));
  }*/
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <input value={this.state.input} onChange={this.handleChange}></input>
        {/* Cambia el código encima de esta línea */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

/*
!CONTROLLED FORMS
También debes llamar a event.preventDefault() en el controlador de envío, para evitar el comportamiento predeterminado de envío de formulario que actualizará la página web.
*/
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Cambia el código debajo de esta línea
    event.preventDefault();
    this.setState({ submit: this.state.input });
    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Cambia el código debajo de esta línea */}
          <input value={this.state.input} onChange={this.handleChange}></input>
          {/* Cambia el código encima de esta línea */}
          <button type="submit">Submit!</button>
        </form>
        {/* Cambia el código debajo de esta línea */}
        <h1>{this.state.submit}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!Pasa el estado como "props" a componentes hijos
Un patrón común es tener un componente con estado que contenga el state importante para tu aplicación, que luego renderiza los componentes hijos. Quieres que estos componentes tengan acceso a algunas partes de ese state, el cual se pasa como props.

Por ejemplo, tal vez tengas un componente App que renderiza una Navbar, entre otros componentes. En tu App, tienes un state que contiene mucha información del usuario, pero la Navbar sólo necesita acceder al nombre de usuario para poder mostrarlo. Pasas esa parte del state al componente Navbar como prop.

unidirectional data flow!!!: El componente de estado fluye en una sola dirección descendiendo en el árbol de componentes de tu aplicación, desde el componente padre hasta los componentes hijos.

La segunda es que las aplicaciones con estado pueden ser divididas en solo algunos, o tal vez un solo, componente con estado. El resto de tus componentes simplemente reciben el estado del padre como props, y renderizan la interfaz de usuario a partir de ese estado.

Esto comienza a crear una separación donde la administración de estado es manejada en una parte del código y la renderización de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React.
*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <Navbar name={this.state.name} />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!Pasa una función callback como "props" a componentes hijos:
Puedes pasar state como "props" a los componentes hijos, pero no estás limitado a pasar datos. También puedes pasar funciones manejadoras o cualquier método que se defina en un componente React a un componente hijo. Así es como tú permites que los componentes hijos interactúen con sus componentes padres. Pasas métodos a un hijo igual que un "prop" normal. Se le asigna un nombre y tienes acceso a ese nombre de método en this.props en el componente hijo.
*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <GetInput input={this.state.inputValue} />
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
