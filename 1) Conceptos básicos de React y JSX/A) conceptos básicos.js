/*
!REACT
Es una biblioteca de Js de código abierto o open source (al público) para crear interfaces de usuario.

Biblioteca (library): conjunto de implementaciones o subprogramas que podemos usar en nuestro código. Herramientas ya creadas.

Conceptos básicos:

!COMPONENTE:
Parte de la interfaz de usuario que es independiente y reusable. Cada componente tiene su cierto estado y funcionalidad especifica e independientes de otros componentes. Es rehusable pq lo podemos usar todas las veces que queramos.
Se dividen en dos categorías principalnes:

!1) Funcionales:
Es más conciso y facíl de escribir.
!2) De clase:
Se usaban en versiones anteriores de react.
*/

/*
!COMPONENTES FUNCIONALES:
Es una función de JS en ES6 que retorna un elemento de React (JSX se escribe en JSX que es una descripción muy similar a html de lo que queremos que represente nuestro componente en nuestra aplicación). Ejemplo: */

function Saludo(props) {
  /* Componente Saludo con parámetro */
  return <h1>!Hola, {props.nombre}! </h1>;
}

/* Caracteristicas:
1) Debe retornar un element de React (definido con JSX, mezcla de html y JS),
2) Debe comenzar con una letra mayúscula la función;
3) Puede recibir valores si es necesario. Es simplemente una función de js.

Los props o propiedades son argumentos que puede recibir un componente de React. Funcionan similarmente a los argumentos o parámetros.
En react ciertos componentes pueden crear otros componentes. Podemos personalizar algunas propiedades o características de los componentes con los props.

Los props solo pueden ser enviados de padre a hijos. De A hacia B, o de arriba hacia abajo. Del contenedor al componente dentro del contenedor.

!COMPONENTE DE CLASE:
Es una clase de ES6 que retorna un elemento JSX. Ejemplo:
*/
class Saludo extends React.Component {
  /* tenemos que extender react.componente para tener todas sus propiedades. */
  render() {
    /* tenemos que definir un método render y luego retornar el componente JSX que vamos a mostrar. */
    return (
      <h1>!Hola, {this.props.nombre}</h1>
    ); /* Puede recibir valores, como el props, pero le tenes que poner this para referirse a ese componente. */
  }
}

/* El estado es la representación en JS del conjunto de propiedades de un componente y sus valores actuales. Esas propiedades se pueden actualizar y en un momento especifico de la aplicación se dice el "estado" del componente:

!HOOKS:
El hook te permite agregarle un cierto estado a nuestros componentes funcionales. Así podemos trabajar con componentes funcionales. Un hook es una función;on especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React.

!EVENT LISTENER:
Es una función en JS que se ejecuta cuando ocurre un evento específico. Por ejemplo, un botón.
*/

/*
!JSX
Es una extensión de React para la sintaxis de Javascript. Nos permite describir en js como se verán los componentes en una estructura similar a html. Combinas html con JS para describir las estructuras de los componentes. JSX ES OPCIONAL. Podes ponerle html directamente, pero es más conciso y fácil:

const elemento = <h1>!Hola, Mundo!</h1>;

Ejemplo de componente con JSX con react:
*/

import React from "react";
import "../hojas-de-estilo/Contador.css";

function Contador({ numClics }) {
  return <div className="contador">{numClics}</div>;
}

export default Contador;

/* Elementos de JSX:
Son las unidades más pequeñas que podes crear en React. No es lo mismo que componente. Los componentes en React están hechos de elementos.

!REACT DOM:
Paquete que facilita la interacción y actualización del DOM en aplicaciones REACT. DOM es document object model, representación en el navegador de todos los elementos que componen la página web. Facilita la interacción;on el react DOM desde el javascript.

Los elementos son las unidades más básicas. Con JSX podemos usar cualquier elemento de html para poder incoporarlo desde React. En JSX se representan con etiquetas de letras minúsculas.

Los componentes comienzan con una letra mayúscula por convención.

Al igual que en html podemos asignar atributos a los elementos, clases, id's, types, etc para especificar características. Algunos atributos se escriben de manera distinta. Ejemplo: class en html y className en JSX. Se cambian por palabras reservadas en JS como class. Otro atributo que cambia es el for, en JSX se escribe htmlFor.

El atributo style acepta un objeto Javascript con propiedades CSS escritas en camelCase. Cambian también las palabras reservadas. Ej: en lugar de background-image(CSS) se usa backgroundImage (JSX). Generalmente se saca el guion y se lo cambia por mayuscula. Ejemplo:
*/

const estiloDiv = {
  color: "yellow",
  backgroundColor: "black",
}; /* Se lo puede hacer en react pero generalmente lo haces en una hoja de estilo CSS. Después podes meterle al estilo a otros elementos:*/

<div style={estiloDiv}> !Hola, Mundo!</div>;

/* Otra alternativa para estilo especifico en linea directamente: */

<div style={{ color: "yellow" }}>
  {" "}
  !Hola Mundo!
</div>; /* Las dobles llaves son la primera para insertar javascript dentro de las llaves, la segunda llave es para definir un objeto de javascript directamente en esa línea sin tener que meterle una variable o constante.

!A continuación, todos los atributos de DOM reconocidos por REACT:

https://reactjs.org/docs/dom-elements.html

accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap*/

/*
!ESTRUCTURA de un componente:
Al igual que en HTML los elementos pueden ser anidados. Definida la estructura hay que renderizarlos.

!RENDERIZAR COMPONENTES:
Podes renderizar componentes en una estructura similar a html.

*/
const elemento = <h1>!Hola, Mundo!</h1>;

ReactDOM.render(
  // para poder usarlo tenemos que importarlo de react-dom = import ReactDOM from "react-dom"; React dom es el paquete.
  // permite mostrar un elemento específico dentro de otro elemento.
  elemento,
  document.getElementById("root") // esto sería el contenedor donde se renderiza el componente.
); /* El primer parámetro es el componente que queremos renderizar, el segundo es el elemento en el que queremos renderizarlo. */

/* Y lo queremos pasar al siguiente div: */

<div id="root"></div>;

/*
Hay elementos de JSX que no necesitan etiquetas de cierre. Son:
!Self closing tags:
Solo posee etiqueta de apertura. No tiene contenido como tal. Es muy común en los componentes de React. Ejemplo:
*/
//ejemplo de self closing tag:
{
  /* <input type="text" /> */
}
// Otro ejemplo:
{
  /* <img src="logo.png" alt="mi iamgen"/> */
}

/* En JSX podemos incluir javascript. No estamos limitados a componentes y html. Cuando ves las llaves {} es porque tenes código JS. Esto nos permite crear aplicaciones de react dinamicas. Ejemplo: */

let adjetivo = "Interesante";
<p>
  React es {adjetivo}
</p>; /* Rodeas con llaves el código JS que en este caso es una variable. Podes escribir lo que sea en JS en este código. Otro ejemplo: */
<p> Su nombre es: {nombre.toUpperCase()}</p>;

/* Para crear una carpeta react para armar un proyecto tenes que en la terminal escribir lo siguiente:
npx create-react-app estructura    "Estructura" es tan solo el nombre que le quiera dar a la carpeta donde se guardan todos los archivos que instala en npm.

La segunda carpeta es una estructura básica. Tenes los comandos:
npm start = inicia el server. Te tenes que subir a la carpeta donde guardaste el proyecto ("estructura") y escribir npm start.
npm run build = para el bundle de la app
npm test = inicia el proceso de testeo
npm run eject = elimina esta herramienta y todos los files.*/
