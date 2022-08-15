/*
!Crea un almacén Redux
Redux es un framework de gestión de estados que se puede utilizar con un número de diferentes tecnologías web, incluyendo React.

En Redux, hay un único objeto de estado que es responsable de todo el estado de tu aplicación.

Si tuvieras una aplicación React con diez componentes, y cada componente tuviera su propio estado local, todo el estado de tu aplicación estaría definido por un único objeto de estado alojado en el store (almacén) de Redux.

El almacén Redux es la única fuente de verdad cuando se trata del estado de la aplicación.

Esto también significa que cada vez que cualquier pieza de tu aplicación quiera actualizar el estado, debe hacerlo a través del almacén Redux. El flujo de datos unidireccional facilita el seguimiento de la gestión de estados en tu aplicación.

El store (almacén) de Redux es un objeto que guarda y gestiona el state (estado) de la aplicación.

Hay un método llamado createStore() en el objeto Redux, que se utiliza para crear el store Redux.

Este método toma una función reducer como argumento obligatorio.
*/

import { combineReducers, createStore } from "redux";
import * as actions from "./actionsCreators";

const reducer = (state = 5) => {
  return state;
};

// Los métodos Redux están disponibles desde un objeto Redux
// Por ejemplo: Redux.createStore()
// Define el store aquí:
const store = createStore(reducer);

/* Otra forma para el caso de que no importes createStore: */
const reducer1 = (state = 5) => {
  return state;
};

// Los métodos Redux están disponibles desde un objeto Redux
// Por ejemplo: Redux.createStore()
// Define el store aquí:
const store1 = Redux.createStore(reducer1);

/*
!Obtén el estado del almacén Redux
El objeto almacén Redux proporciona varios métodos que permiten interactuar con él. Por ejemplo, puedes recuperar el state actual que tiene el objeto almacén Redux con el método getState().
*/
const store2 = Redux.createStore((state = 5) => state);

// Cambia el código debajo de esta línea
const currentState = store2.getState(); //5

/*
!Define una acción Redux
Dado que Redux es un framework de gestión de estado, la actualización del estado es una de sus tareas principales.

En Redux, todas las actualizaciones de estado se activan mediante acciones de envío.

Una acción es simplemente un objeto de JavaScript que contiene información sobre un evento de acción que ha ocurrido.

El almacén Redux recibe estos objetos de acción, y luego actualiza su estado de acuerdo a ello.

A veces una acción Redux también lleva algunos datos.

Aunque los datos son opcionales, las acciones deben llevar una propiedad type que especifica el "tipo" de acción que se ha producido.
*/
const Redux = require("Redux");

const ACTION = {
  type: "LOGIN",
};

/*
!Define un creador de acción:
Después de crear una acción, el siguiente paso es enviar la acción al almacén Redux para que pueda actualizar su estado.

En Redux, se definen creadores de acción para lograr esto. Un creador de acción es simplemente una función de JavaScript que devuelve una acción. En otras palabras, los creadores de acción crean objetos que representan eventos de acción.
*/
const action = {
  type: "LOGIN",
};

function actionCreator() {
  return action;
}

actionCreator();

/*
!Envía un evento de acción
El método dispatch (enviar) es el que se utiliza para enviar acciones al almacén Redux.

Llamar a store.dispatch() y pasar el valor devuelto por un creador de acción envía una acción de regreso al almacén.

Las siguientes líneas son equivalentes, y ambas envían la acción de tipo LOGIN:
*/
store.dispatch(actionCreator());
store.dispatch({ type: "LOGIN" });

// Ejemplo:

const store3 = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Despacha la acción aquí:
store3.dispatch(loginAction());

/*
!Maneja una acción en el almacén
Después de crear y enviar una acción, el almacén Redux necesita saber cómo responder a esa acción.

Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones.

Un reducer toma state y action como argumentos, y siempre devuelve un nuevo state. Esta es la única función del reductor. El reductor es simplemente una función pura que toma el estado y la acción, y luego devuelve el nuevo estado.

La función reducer debe siempre devolver una nueva copia de state y nunca modificar el estado directamente.
*/
const Redux = require("Redux");
// -----------------------------------------------------
const defaultState = {
  login: false,
};

const reducer4 = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  switch (action.type) {
    case "LOGIN":
      return { login: true };
    default:
      return state;
  }
  // Cambia el código encima de esta línea
};

const store4 = Redux.createStore(reducer);

const loginAction4 = () => {
  return {
    type: "LOGIN",
  };
};
// -----------------------------------------------
const currentState4 = store4.getState();

/*
!Usa una sentencia Switch para manejar múltiples acciones
Puedes decirle al almacén Redux cómo manejar múltiples tipos de acción.

Quieres tener una representación de estado para cuando los usuarios están conectados y cuando están desconectados. Esto se representa con un único objeto de estado con la propiedad authenticated.
*/
const Redux = require("Redux");
// -----------------------------------------------------

const defaultState5 = {
  authenticated: false,
};

const authReducer = (state = defaultState5, action) => {
  // Cambia el código debajo de esta línea
  switch (action.type) {
    case "LOGIN":
      return { authenticated: true };
    case "LOGOUT":
      return { authenticated: false };
    default:
      return { ...state };
  }
  // Cambia el código encima de esta línea
};

const store5 = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// -----------------------------------------------
//store.dispatch(loginUser());
const currentState5 = store5.getState();

/*
!Usa const para los tipos de acción
Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de sólo lectura, y luego hacer referencia a estas constantes dondequiera que se utilicen.

Puedes refactorizar el código con el que estás trabajando para escribir los tipos de acción como declaraciones const.

Generalmente es una convención escribir las constantes en mayúsculas, y esto es una práctica estándar en Redux también.
*/

const Redux = require("Redux");
// -----------------------------------------------------

const defaultState6 = {
  authenticated: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer6 = (state = defaultState6, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store6 = Redux.createStore(authReducer);

const loginUser6 = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser6 = () => {
  return {
    type: LOGOUT,
  };
};

// -----------------------------------------------
store.dispatch(loginUser6());
const currentState6 = store6.getState();

/*
!Registra un escucha al almacén
!store.subscribe()
Esto te permite suscribir funciones de escucha al almacén, que se llaman cada vez que se envía una acción contra el almacén.

Método es suscribir una función a tu almacén que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza el almacén.
*/

const Redux = require("Redux");
// -----------------------------------------------------

const ADD = "ADD";

const reducer7 = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store7 = Redux.createStore(reducer);

// Variable global count:
let count = 0;

// Cambia el código debajo de esta línea
const callBack = store7.subscribe(() => {
  return store7.getState(), ++count;
});
// Cambia el código encima de esta línea

store7.dispatch({ type: ADD });
console.log(count);
store7.dispatch({ type: ADD });
console.log(count);
store7.dispatch({ type: ADD });
console.log(count);

// -----------------------------------------------
// store.dispatch(loginUser());
const currentState7 = store7.getState();

/*
!Combina múltiples reductores
Cuando el estado de tu aplicación empieza a ser más complejo, puede ser tentador dividir el estado en varias piezas.

Se definen varios reductores para manejar diferentes partes del estado de tu aplicación, y luego se componen estos reductores juntos en un reductor raíz. El reductor raíz se pasa al método Redux createStore().

Para permitirnos combinar múltiples reductores juntos, Redux proporciona el método combineReducers().

Este método acepta un objeto como argumento en el que se definen las propiedades que asocian las claves a funciones reductoras específicas.

El nombre que le des a las claves será utilizado por Redux como el nombre de la pieza de estado asociada.

Por lo general, es una buena práctica crear un reductor para cada pieza de estado de la aplicación cuando son distintas o únicas de alguna manera.

Ejemplo:
*/
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer,
});

// Ejercicio:
const Redux = require("Redux");
// -----------------------------------------------------

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN8 = "LOGIN";
const LOGOUT8 = "LOGOUT";

const authReducer8 = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer8 = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store8 = Redux.createStore(rootReducer);
// -----------------------------------------------
// store.dispatch(loginUser());
const currentState8 = store.getState();

/*
!Envía datos de acción al almacén
También puedes enviar datos específicos junto con sus acciones.

De hecho, esto es muy común porque las acciones suelen originarse a partir de alguna interacción del usuario y suelen llevar consigo algunos datos.

*/
const Redux = require("Redux");
// -----------------------------------------------------

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Cambia el código debajo de esta línea
    case ADD_NOTE:
      return action.text;
    // Cambia el código encima de esta línea
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Cambia el código debajo de esta línea
  return {
    type: "ADD_NOTE",
    text: note,
  };
  // Cambia el código encima de esta línea
};

const store9 = Redux.createStore(notesReducer);

console.log(store9.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store9.getState());

// -----------------------------------------------
// store.dispatch(loginUser());
const currentState9 = store9.getState();

/*
!Usa middleware para manejar acciones asíncronas
En algún momento necesitarás llamar a endpoints asíncronos en tu aplicación Redux, así que ¿cómo manejas este tipo de peticiones? Redux proporciona un middleware diseñado específicamente para este propósito, llamado Redux Thunk middleware.

Para incluir el Redux Thunk middleware, lo pasas como argumento a:
*/
Redux.applyMiddleware();

/* Esta declaración se proporciona entonces como un segundo parámetro opcional a la función createStore().*/

const store10 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

/* Para crear una acción asíncrona, se devuelve una función en el creador de acción que toma dispatch como argumento. Dentro de esta función, se pueden enviar acciones y realizar peticiones asíncronas.

Es común enviar una acción antes de iniciar cualquier comportamiento asíncrono para que el estado de tu aplicación sepa que se están solicitando algunos datos.
 */

/*
!QUOKKA:
*/
const Redux = require("Redux");
// -----------------------------------------------------
//CÓDIGO ACÁ
// -----------------------------------------------
// store.dispatch(loginUser());
// const currentState = store.getState();
