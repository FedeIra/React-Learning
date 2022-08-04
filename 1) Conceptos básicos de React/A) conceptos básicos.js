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
