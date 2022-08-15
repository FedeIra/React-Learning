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
    }); /* The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.  */
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
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
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

/*
!Usa el método de ciclo de vida componentWillMount
Los componentes React tienen varios métodos especiales que proporcionan oportunidades para realizar acciones en puntos específicos en el ciclo de vida de un componente.

Estos se llaman métodos de ciclo de vida, o interceptores (hooks) de ciclo de vida, y te permiten interceptar componentes en determinados momentos del tiempo.

Los métodos de ciclo de vida son llamados antes de que un componente se renderice en la página.

Lista de algunos de los métodos principales del ciclo de vida: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()
*/

/*
!componentWillMount
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Cambia el código debajo de esta línea
    console.log(this.props);
    // Cambia el código encima de esta línea
  }
  render() {
    return <div />;
  }
}

/*
!componentDidMount y API
La mejor práctica con React es ubicar las llamadas API o cualquier llamada a tu servidor en el método de ciclo de vida componentDidMount().

Este método se llama después de que un componente es montado (mounted) en el DOM.

Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

El siguiente ejemplo se hace con set time out que simula un llamado a una API y lo que puede tardar:
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <h1>Active Users: {this.state.activeUsers} </h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!Agrega detectores de eventos (Event Listeners)
!componentDidMount
!componentWillUnmount()
!document.addEventListener()
!document.removeEventListener()

El método componentDidMount() es también el mejor lugar para adjuntar cualquier detector de eventos que necesites agregar para una funcionalidad específica.
React proporciona un sistema de eventos sintético que envuelve el sistema de eventos nativo presente en los navegadores.

Esto significa que el sistema de eventos sintético se comporta exactamente igual independientemente del navegador del usuario, incluso si los eventos nativos se comportan diferentes entre diferentes navegadores.

El sistema de eventos sintéticos de React es excelente para usar en la mayoría de las interacciones que administrarás en elementos DOM. Sin embargo, si quieres adjuntar un controlador de eventos al documento o objetos de la ventana, debes hacerlo directamente.

Note: document.addEventListener and document.removeEventListener will take in a quoted string for its event, and when passing in the function you will reference the function handleKeyPress() as this.handleKeyPress. If you invoke the function as this.handleKeyPress(), the event listener will evaluate the function first and will pass back a value of undefined.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Cambia el código debajo de esta línea
  componentDidMount() {
    // agregar detector de eventos keydown
    document.addEventListener(`keydown`, this.handleKeyPress);
    // ejecuta función callback handleKeyPress. Tiene un parametro
  } /* The keydown event is sent to an element when the user presses a key on the keyboard. If the key is kept pressed, the event is sent every time the operating system repeats the key. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.*/
  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.handleKeyPress);
  } /*Es buena práctica usar este método del ciclo de vida para hacer cualquier limpieza en un componente de React antes de que estos sean desmontados y destruidos. Removiendo los detectores de eventos es un ejemplo de una limpieza de este tipo. */
  // Cambia el código encima de esta línea
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

/*
!Optimiza re-renderizadores con shouldComponentUpdate
React proporciona un método de ciclo de vida al que puedes llamar cuando los componentes hijos reciben nuevos state o props, y declarar específicamente si los componentes deben actualizarse o no. El método es shouldComponentUpdate(), y toma nextProps y nextState como parámetros.

Por ejemplo, el comportamiento predeterminado es que el componente re-renderiza cuando recibe nuevos props, incluso si los props no han cambiado.

Puedes comparar los "props" actuales (this.props) a los siguientes "props" (nextProps) para determinar si necesita actualizar o no, y devuelve true o false en consecuencia.
*/

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // Cambia el código debajo de esta línea
    if (nextProps.value % 2 === 0) {
      return true; // si el valor es par, actualiza el componente
    } else {
      return false; // si el valor es impar, no actualiza el componente
    }
    // Cambia el código encima de esta línea
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

/*
!estilos en línea
Si importas estilos desde una hoja de estilos, esto no es muy diferente. Aplica una clase a tu elemento JSX usando el atributo className, y aplica estilos a la clase en tu hoja de estilos.

Otra opción es aplicar estilos en línea, los cuales son muy comunes en el desarrollo de ReactJS.

Ejemplo:
*/
<div style="color: yellow; font-size: 16px">
  Mellow Yellow
</div>; /* ESTO NO SIRVE */

/* Los elementos JSX usan el atributo style, pero debido a la forma en que JSX es transpilado, no puede establecer el valor a un string. Es su lugar, lo establece igual a un object de JavaScript.
Ejemplo: */

<div style={{ color: "yellow", fontSize: 16 }}>Mellow Yellow</div>;

/* El camelCase (fontSize) es porque React no aceptará claves kebab-case en el objeto de estilo. React aplicará el nombre correcto de la propiedad por nosotros en el HTML.

Como regla, cualquier propiedad de estilo que usa guion se escribe usando camel case en JSX.

Todas las unidades de longitud del valor de la propiedad (como height, width, y fontSize) se supone que están en px a menos que se especifique lo contrario. */

class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: 72 }}>Big Red</div>;
  }
}

/*Si quieres utilizar em, por ejemplo, debes envolver el valor y las unidades entre comillas, como: */
{
  fontSize: "4em";
}

/*
!Agrega inline styles en React
Otra forma de aplicar estilos en línea es aplicar un atributo style a un elemento JSX.
*/
class Colorful extends React.Component {
  render() {
    let colorfulStyle = {
      color: "red",
      fontSize: 72,
    };
    return <div style={colorfulStyle}>Big Red</div>;
  }
}

// Otro ejemplo:

class Colorful extends React.Component {
  render() {
    // Cambia el código debajo de esta línea
    let styles = {
      color: "purple",
      fontSize: 40,
      border: "2px solid purple",
    };
    return <div style={styles}>Style Me!</div>;
    // Cambia el código encima de esta línea
  }
}

// MEJOR TODAVIA: podes declarar el éstilo globalmente y luego usarlo:
let styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
};
// Cambia el código encima de esta línea
class Colorful extends React.Component {
  render() {
    // Cambia el código debajo de esta línea
    return <div style={styles}>Style Me!</div>;
    // Cambia el código encima de esta línea
  }
}

/*
!Usa JavaScript avanzado en el método render de React
También puedes escribir JavaScript directamente en los métodos render, antes de la sentencia return, sin insertarlo dentro de llaves. Esto es porque aún no está dentro del código JSX. Cuando quieras utilizar una variable en el código JSX dentro de la sentencia return, colocas el nombre de la variable dentro de llaves.
*/

import React, { useState } from "react";

const inputStyle = {
  width: 235,
  margin: 5,
};

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: "",
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "",
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];
    const answer = possibleAnswers[this.randomIndex]; // Cambia esta línea
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Cambia el código debajo de esta línea */}
          {answer}
          {/* Cambia el código encima de esta línea */}
        </p>
      </div>
    );
  }
}

export default MyApp;

/*
!Renderiza con una condición If-Else
Otra aplicación del uso de JavaScript para controlar la vista renderizada es vincular los elementos que se renderizan a una condición.

Cuando la condición es verdadera (true), se renderiza una vista. Cuando es falso (false), es una vista diferente. Puedes hacer esto con una sentencia estándar if/else en el método render() de un componente React.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}

/*
!Usa && para una condicional más concisa
En su lugar, puedes usar el operador lógico && para realizar lógica condicional de una manera más concisa. Esto es posible porque quieres comprobar si una condición es true, y si es así, devuelve algún código. A continuación un ejemplo:
*/
{
  condition && (
    <p>markup</p>
  ); /* si condition es true entonces devuelve el párrafo con markup dentro. */
}

/* Si la condition es true, el código será devuelto. Si la condición es false, la operación devolverá inmediatamente false después de evaluar la condition y no devolverá nada.

Puedes incluir estas sentencias directamente en tu JSX y encadenar varias condiciones juntas escribiendo && después de cada uno. Esto te permite manejar una lógica condicional más compleja en tu método render() sin repetir un montón de código.

Ejemplo:*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    let condition = this.state.display && <h1>Displayed!</h1>;
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {condition}
      </div>
    );
  }
}

/*
!Utiliza una expresión ternaria para el renderizado condicional
El operador ternario es muy popular entre los desarrolladores de React. Una de las razones de esto es debido a cómo se compila JSX, las sentencias if/else no se pueden insertar directamente en el código JSX.
*/
condition ? expressionIfTrue : expressionIfFalse;

// Ejemplo:
const inputStyle2 = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      input: "",
      userAge: "",
    };
    // Cambia el código encima de esta línea
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submit() {
    /* console.log(e.target.value); */
    this.setState((state) => ({
      userAge: state.input,
    }));
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }

  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Cambia el código debajo de esta línea */}
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge < 18
          ? buttonThree
          : buttonTwo}
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}

/*
!Renderiza condicionalmente a partir de "props"
El uso de props para renderizar condicionalmente el código es muy común entre los desarrolladores de React, es decir, utilizan el valor de una prop dada para automáticamente tomar decisiones sobre qué renderizar.
*/

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      /* Cambia el código debajo de esta línea */
      this.props.fiftyFifty > 0 ? (
        <h1>You Win!</h1>
      ) : (
        /* Cambia el código encima de esta línea */
        <h1>You Lose!</h1>
      )
    );
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      // Completa la sentencia return:
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    const expression = Math.random() * (1 - 0) + 0 >= 0.5; // Cambia esta línea
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Cambia el código debajo de esta línea */}
        <Results fiftyFifty={expression} />
        {/* Cambia el código encima de esta línea */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}

/*
!Cambia el CSS inline condicionalmente según el estado del componente
También puedes renderizar CSS condicionalmente según el estado de un componente de React. Para hacer esto, tienes que verificar una condición, y si esa condición se cumple, modificas el objeto de estilos que está asignado a los elementos JSX del método render.

Cuando configuras un objeto de estilo en función de una condición, estás describiendo cómo debería verse la interfaz de usuario en función del estado de la aplicación.

Este es el método preferido para escribir aplicaciones con React.
*/

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    // Cambia el código debajo de esta línea
    if (this.state.input.length > 15) {
      inputStyle = {
        border: "3px solid red",
      };
    }
    // Cambia el código encima de esta línea
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

/*
!Utiliza Array.map() para renderizar dinámicamente los elementos
A menudo en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción de un usuario con ese programa.

Usar Array.map() en React ilustra este concepto.
*/
const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      userInput: "",
      toDoList: [],
    };
    // Cambia el código encima de esta línea
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((item) => <li>{item}</li>);

    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

/*
!Proporciona a los elementos hermanos un atributo de clave única (KEY)
Cuando creas un arreglo de elementos, cada uno necesita un atributo key establecido en un valor único.

React usa estas claves para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a que el proceso de re-renderización sea más eficiente cuando la lista se modifica de alguna manera.

Nota: Las claves solo necesitan ser únicas entre elementos hermanos, no es necesario que sean globalmente únicas en tu aplicación.

Ejemplo:
*/

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((framework, key) => (
    <li key={key}>{{ framework }}</li>
  )); // Cambia esta línea
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

/*
!Usa Array.filter() para filtrar dinámicamente un arreglo
Otro método relacionado con map es filter, que filtra el contenido de un arreglo basado en una condición, luego devuelve un nuevo arreglo.

Por ejemplo, si tienes un arreglo de usuarios que todos tienen una propiedad online que puede establecerse en true o false, puedes filtrar sólo aquellos usuarios que estén en línea escribiendo:
*/
let onlineUsers = users.filter((user) => user.online);

// Ejemplo:
import React, { useState } from "react";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter((user) => user.online);
    const renderOnline = usersOnline.map((user, key) => (
      <li key={key}>{user.username}</li>
    ));
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

// export default MyApp;

/*
!Renderiza React en el servidor con renderToString
Hay algunos casos de uso donde tiene sentido renderizar un componente React en el servidor.

De hecho, React proporciona un método renderToString() que puedes usar para este propósito.

Primero, sin hacer esto, tus aplicaciones de React consistirían en un archivo HTML relativamente vacío y un gran paquete de JavaScript cuando se carga inicialmente en el navegador. Si renderizas el código HTML inicial en el servidor y lo envía al cliente, la carga de la página inicial contiene todo el código de la página que los motores de búsqueda pueden rastrear.

Segundo, esto crea una experiencia de carga de página inicial más rápida porque el HTML renderizado es más pequeño que el código JavaScript de toda la aplicación. React aún podrá reconocer tu aplicación y administrarla después de la carga inicial.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

// Cambia el código debajo de esta línea
ReactDOMServer.renderToString(<App />);

/* Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes. */
