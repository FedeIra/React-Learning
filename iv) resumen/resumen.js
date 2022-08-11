// Resumen a nivel codigo:

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ----------------------- 	COMPONENTES DE CLASE ----------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

import React from 'react'; 

class NombreComponente extends React.Component {
	// para crear un componente del tipo clase tenemos que extender de React.Component

	// si vamos a setear un estado inicial, necesitmos hacerlo en el constructor
	// recordemos la imagen del ciclo de vida de un componente: constructor > render > componentDidMount
	constructor(props){
		// siempre que extendemos de algo tenemos que llamar tambien a su constructor
		// de esta forma le logramos, efectivamente dar, todas las propiedades y metodos de
		// la clase que extendemos. Esto lo hacemos con el metodo super
		// Ejemplo: Si tengo class Ferrari extends Auto 
		// antes de poder crear una Ferrari vamos a tener que crear un auto 
		// una vez que crees un Auto tendras las bases suficientes para 
		// crear una Ferrari 
		super(props);
		// para definir el estado 
		// es un objeto
		// puedo inicializar alguna de estas propiedades con props
		// recordemos que para acceder a las props en un componente de clase lo hacemos a traves de 
		// this.props ! 
		this.state = {propiedad1: this.props.algo, propiedad2: 'hola', propiedad3: 0, propiedad4: {name:'martina', lastname: this.props.lastname}, propiedad5: propiedad5, ... } 
		// si quiero, puedo setear una propieadad sin ningun valor, simplemente le digo propiedad2: ""

		// si vamos a definir algun tipo de funcion, recordemos que tenemos que bindearla asi puede 
		// entender a quien hace referencia el this dentro de la funcion. 
		// otra alternativa es definirlo como una funcion flecha y en dicho caso no tenemos que hacer el 
		// binding  
		this.onClickButton = this.onClickButton.bind(this); 	
	}

	// en este caso no es necesario hacer binding de la funcion, esto se debe a lo visto en ES6 con respecto 
	// a la diferencia existente entre el contexto de ejecucion de una funcion flecha y una funcion 'normal'. 
	onClickButton = (e) => {

	}

	onClickButton(e){
		// recuerden que e es un evento, y el preventDefault es para evitar que se ejecute
		// el comportamiento que tiene por default el click de dicho boton [suponiendo 
		// que esto se ejecuta cuando se hace click en un boton o algo de eso]
		// Un ejemplo clasico es cuando hacemos un handleSubmit, en donde al hacer
		// submit se hace un refresh de la pagina, comportamiento que deseamos, a veces, evitar
		e.prevenDefault(); 

		// supongamos que en el estado de propiedad1 tenemos un numero, como el contador
		// lo que tenemos que tener en cuenta es: ¿Quien es el this que llama a setState?
		// ¿Quien es el this.state.propiedad1? Ahi es donde entra en juego el bind 
		// descripto anteriormente ! [dudas sobre bind: Modulo 1]
		this.setState({propiedad1: this.state.propiedad1+1})
		// ACA MODIFICAMOS EL ESTADO !! Ahora bien ... 
		// si volvemos a invocar al mismo metodo 
		// this.setState({propiedad1: this.state.propiedad+1}) vamos a estar trabajando sobre el 
		// estado previo al recientemente modificado. Si por ejemplo, inicialmente,  propiedad1: 0, 
		// esperariamos que en este segundo this.setState el valor final sea 2. Pero ya vimos que eso 
		// no sucede, sino que es 1. 

		// si vamos a estar modificando el estado en funcion del estado anterior, es recomendado, 
		// invocar a this.setState con su estado anterior como parametro. Recordemos que el estado 
		// no se cambia inmediatamente, por lo que, si lo invocamos consecutivamente a su cambio,
		// no necesariamente va a estar modificado. 
		this.setState((state, props) => {propiedad1: state.propiedad1+1})
		// por el contrario de esta forma, si bien el estado no se va a ver modificado inmediatamente 
		// tampoco, si sucede que si invocamos ahora nuevamente a 
		// this.setState((state, props) => {propiedad1: state.propiedad1+1})
		// en este caso el valor final, si, sera el esperado. 
	}
}


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ----------------------- 	COMPONENTES DE FUNCION --------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function NombreComponente (props){
	// en este caso recibo las props por parametro y accedo a ellos haciendo props.algo 
	// donde algo describe el nombre que se le asigno a la propiedad en el llamado al componente 
	// <NombreComponente algo="martina"/> en este caso hariamos props.algo
	// Recordemos que ademas, dentro de los  parametros podemos hacer el destructuring de los mismos
	// es decir si en props = {algo, propiedad2, propiedad3}
	// podemos hacer algo del estilo function NombreComponente({algo, propiedad2, propiedad3})
	// Repasar: ES6
	// NO OLVIDAR: las props son inmutables, por eso llegan los estados, variables que sobreviven a los 
	// renderizados


	const [propiedad1, setPropiedad1] = useState(props.algo); 
	// en este caso propiedad1 tiene como valor inicial props.algo 

	// ¿De donde sale useState? ¿Y que es lo que estamos haciendo con este arreglo?
	// useState es una funcion (Hook) que importamos de react 
	// por lo tanto para poder usarlo debemos hacer al inicio del archivo: 
	// import {useState} from 'react'
	// ademas, useState devuelve un arreglo, en donde en la posicion 0 tiene el valor del estado 
	// y en la posicion 1 la funcion necesaria para modificar el valor del estado que se encuentra en 
	// posicion 0. 
	// en este caso, hacemos destructuring, por lo que en propiedad1 vamos a encontrar el 
	// valor del estado definido para dicha propiedad y en el setPropiedad1 vamos a encontrar
	// una funcion que al ejecutarla modificamos el valor de propiedad1. 

	// inicializo el estado sin ningun valor asociado 
	const [propiedad2, setPropiedad2] = useState("");  
	// ANALOGO A HACER const propiedad = useState("") 
	// >> para poder acceder al valor del estado
	// debo hacer propiedad[0] y para acceder a la funcion que realiza el cambio propiedad[1](nuevoValor)
	// useState recibe como parametro el valor inicial del estado que estamos definiendo

	//¿Como uso lo recien visto?

	const onButtonClick = (e) => {
		// prevenimos el comportamiento que tiene por defecto 
    	e.preventDefault();

    	// contador[1](contador[0]+1);
    	// name[1]('hla');
    	setPropiedad1(nuevoValor); // Cuando invocamos a la funcion que va a realizar el cambio
    	// hace lo que this.setState hace a un componente de funcion 
    	setPropiedad2("name"); //propiedad2: "name"
    	// por lo tanto el valor de propiedad2 ahora es "name"
    	// Recordatorio si vamo a setear nuestro nuevo estado en funcion del estado anterior 
    	// setPropiedad1(prev => {...prev, propiedad1: 'valorNuevo'})
    	// Tambien es valido setPropiedad({...prev, propiedad1:'valorNuevo'})
    	// pero ... repasar la claes vista sobre lo que ocurre con los cambios
    	// de estado y las recomendaciones realizadas por React al respecto
  };
}

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ----------------------- 	COMPONENTES -------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// ¿Como invocamos un componente? Para pasar un prop a un componente, lo escribimos como atributo 
// en donde algo describe el nombre de la prop es decir que si  estoy en un componente de funcion 
// voy a acceder a este a traves de props.algo (salvo que haga destructuring) y en el caso de un 
// componente de clase this.props.algo 
<NombreComponente algo="nombre"/>

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ----------------------- 	LIFE CYCLE --------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------


// ¿Como es la vida de un componente? ¿Como impacta en el DOM? ¿Cuando impacta en el DOM real?
// Tengan la imagen de las slides a mano
// Analicemos los pasos:
// Cuando el componente es invocado > se ejecuta el constructor > se ejecuta la funcion render() 
// o el return del componente funcional > react actualiza su DOM > ComponentDidMount (se va a ejecutar
// luego de que el nodo se haya creado)

// ¿Que es ComponentDidMount? ¿La invoco yo? 
// No, no la invoco yo de forma explicita. Sino que, cuando se terminaron de ejecutar 
// los pasos anteriores, constructor y render, se ejecuta la funcion que nosotros definimos
// con ComponentDidMount. Es una funcion que _si la defino, se invoca_. 
// Clase: LifeCycle.  

// ¿Proximo paso? Cuando invoco un setState, estoy modificando mi estado, al modificar mi estado 
// en realidad estoy actualizando mi componente, estoy modificando algo. Si yo estoy de buen humor, 
// y luego tengo mal humor, tengo un cambio en mi, hay algo que se vio modificado. Cuando existe 
// esta modificacion decimos que el componente se actualizo, una vez que se actualizo el componente 
// y se volvio a invocar a render() = quien muestra el componente con su nueva actualizacion o estado 
// y luego se invoca a ComponentDidUpdate. Analogo al caso anterior, no lo invocamos de forma explicita 

// Ahora bien, ¿Cuando se hace un UnMount? 
// Supongamos que tenemos en nuestro DOM algo como:
// <div> 
// 	<Componente />
// 	{this.state.contador} < 3 ? <OtroComponente/> : null; 
// </div>

// ¿Que dice la linea 185? {this.props.contador} < 3 ? <OtroComponente/> : null;
// Esto dice .. que mientras el valor de contador sea menor a 3 se renderice, OtroComponente
// ¿Cuales son los pasos aca? 
// 1. El valor de this.state.contador = 1 >> Se ejecuta <OtroComponente /> [todo lo que ya mencionamos arriba]
// 2. ... 
// 3. El valor de this.state.contador = 3 >> La sentencia me dice que no muestre <OtroComponente /> sino que muestre null 
// ¿Entonces? ¿Que esta pasando?

// En el punto 1, en el DOM teniamos: 
// <div> 
// 	<Componente />
// 	<OtroComponente/>
// </div>

// En el punto 3, en el DOM tenemos: 
// <div> 
// 	<Componente />
// </div>

// ¿Quien falta? <OtroComponente/> !!
// ¿De que se da cuenta entonces? De que se esta desmontando, se esta sacando del DOM al componente 
// <OtroComponente/> 
// Por lo tanto, se ejecuta lo que es definido en componentewillUnmount! 

// Mas info para leer: 
// https://www.codingame.com/playgrounds/8747/react-lifecycle-methods-render-and-componentdidmount
// https://stackoverflow.com/questions/36049493/when-exactly-is-componentdidmount-fired#:~:text=5%20Answers&text=Inside%20a%20react%20component%20tree,its%20parent%20has%20been%20mounted.


// DIAGRAMA VISTO EN CLASE (Para componentes de clase)
// <Componente /> -> tenemos que generar una instancia de Componente 
//                -> se invoca al constructor, se inicializa el estado [se invoca una vez en todo el proceso]
//                -> se invoca a render() -> impacta en el DOM [se invoca multiples veces en el todo el proceso]
//                -> si esta definida, se invoca a componentDidMount() [se invoca una vez en todo el proceso]
// 
// si un componente recibe nuevos props o modifica su estado, entonces es actualizado 
// 				  -> si esta definida, se invoca a shouldComponenteUpdate() -> la funcion debe devolver true o false 
                 //          |
                 //          |
                 //         / \
                 //       true false
                 //         |       \
                 //      render()   no se vuelve a renderizar el componente, queda todo tal y como esta, 
                 //         |		el estado se puede seguir viendo modificado y actualizado, pero eso no afectará al renderizado. 
                 //        DOM
                 //         |
                 // componenteDidUpdate()

// cuando desmontamos el componente, estamos diciendo que estamos listos para quitarlo del DOM tree 
// en dicho caso, antes de que eso sucede, si esta definida, se invoca a componenteWillUnmount(), 
// al invocarlo podemos desconectar eventListeners, por ejemplo. 

// todas las funciones recientemente mencioandas, con excepcion de render y constructor, son de caracter
// optativo, si las definimos React las invoca, por eso debemos respetar sus nombres


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ----------------------- 	ROUTING ----------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// ¿Que tengo que tener en cuenta para lograr una SPA? Primero, entendamos que es una SPA. Un SPA
// son las siglas que describen Single Page Application, fundamentalmente su objetivo es lograr 
// una navegación completa sin refrescar la pagina.

// ¿Como comenzamos o que cosas tenemos que tener en claro? 
// 1. Wrapping de componentes. Es decir, tenemos que encapsular toda nuestra app
// con  un <HashRouter /> ó <BrowserRouter /> ambos extienden de React Routing. 
// 2. Ya le hicimos conocer a nuestra app que vamos a trabar con react routing, ahora tenemos que trabajar sobre 
// como vamos a organizar nuestras rutas para eso vamos a trabajar con el componenten <Route />
// 	* Tiene un prop obligatorio llamado path en el vamos a indicar que componente se va a renderizar 
// 	en dicho path. De forma optativa le podemos agregar un indicador "exact" que nos va a ayudar a determinar 
// 	exactamente en que path se va a renderizar o no un componente. Si escribimos exact entonces vamos a estar 
// 	indicando que nos debemos encontrar EXACTAMENTE en el path indicado para que se renderice el componente. 
// 		* ejemplo: <Route path="/" component={NavBar} /> en este caso estamos diciendo que en toda ruta que comience
// 		con / se va a renderizar el componente NavBar 
// 			> Se va a renderizar en la ruta: 'localhost:3000/' y en todas las rutas que antecedan /, 'localhost:3000/about', 
// 			'localhost:3000/fav/1', etc...
// 	* Otras configuraciones que le podemos dar a Route: 
// 		* strict - booleano para determinar si consideramos o no '/' final
// 		* sensitive - booleano para determinar si es o no case sensitive 
// 	* Nos falta definir como le pasamos los componentes que queremo renderizar: 
// 		* a traves de component <Route path="/" component={NavBar} /> en  dicho caso no le podemos 
// 		pasar props a NavBar
// 		* a traves de render <Route path="/" render = {() => <NavBar unaProp='hola'/>} /> en esta oportunidad, si
// 		podemos pasarle props
// 		* a traves del child method: 
// 			<Route path="/"> 
// 				<NavBar unaProp='hola'/> 
// 			</Route> 
// 		donde tambien le podemos pasar props y la cantidad de componente que querramos
// 		* por ultimo, por funcion prop children que, al igual de render, es una funcion, pero si matchea o no con la ruta 
// 		igual la renderiza 
// 			Ejemplo: 
// 			<Route
//       			path={"/"}
//       			children={({ match }) => (
//         			<li className={match ? "active" : ""}>
//           				<Link to={"/"}/>
//        				</li>
//       			)}
//     		/>
//     		* si match da true renderiza una cosa, sino otra, pero de una u otra forma igual renderiza. 
// 3. ¿beneficios de route?
// 	* route nos provee de 3 props: history, match y location. El que mas hemos utilziado hasta el momento es Match, que
// 	es un objeto, donde dentro de el tiene otro objeto "params" y a traves de este podemos acceder 
// 	a la información definida en la url. 
// 		<Route path="/movie/:id" component={Movie}/> en este caso, vamos a estar buscando obtener el valor id. ¿Como? Bueno, 
// 		hay varias alternativas, la mas sencilla es comprender que Movie ahora tiene en sus props los 3 ya mencionados, por lo tanto 
// 		puedo acceder a el dentro del componente Movie. 
// 			function Movie({history, match, location}){
// 				let id = match.params.id 
// 			}
// 			function Movie(props){
// 				let id = props.match.params.id 
// 			}
// 		Otra alternativa <Route path="/movie/:id" render={({match}) => <Movie id={match.params.id}/>}/>}/>
// 	* match: 
// 		* isExact: booleano que nos permite saber si la ruta sobre la que nos encontramos es exactamente igual a la que 
// 		se le habia indicado al componente 
// 		* params: objeto con los parametros enviados por path 
// 		* path: string que contiene el patrón utilizado para comparar contra la URL actual
// 		* url: string que contiene la porción matcheada del url
// 	* location: 
// 		* pathname: string indicando el path actual
// 		* search: string que contiene los parámetros pasados por query a la ruta actual. Si no se pasa ninguno, será un string vacío
// 		* state: propiedad que por defualt es undefined pero en la cual podemos pasar datos extras a la nueva ruta
// 	* history: 
// 		* action: string que indica la acción que se realizó para llegar a la ruta actual
// 		* block: función que va a bloquear la posibilidad de navegación hacia otras rutas
// 		* go: función que nos permite movernos n lugares en nuestro stack de navegación. Pueden ser números negativos para ir hacia atras
// 		* goBack: función que permite navegar una posición hacia atras. Es equivalente a "go(-1)"
// 		* goForward: función que permite navegar una posición hacia adelante. Es equivalente a "go(1)"
// 		* length: número que representa la cantidad de entradas en el stack de navegación
// 		* push: función que nos permite agregar otra entrada al stack de navegación
// 		* replace: función que nos permite reemplazar la entrada actual en el stack de navegación por otra
// 	* Recuerden que en un componente de funcion podemos obtener esta información a traves de sus hooks 
// 		* useParams(); 
// 			* obtenemos los parametros que se encuentran en match.params.nombredelparametro
// 			* devuelve un objeto en donde en cada propiedad se encuentra alojado el parametro 
// 			* recuerden que para aclarar que la ruta posee un parametro debemos usar los :nombredelparametro
// 			en la definicon de la ruta, en el path. 
// 		* useLocation(); 
// 			* devuelve un objeto que es lo mismo que obtenemos en location a traves de la prop enviada por Route
// 		* useHistory(); 
// 			* devuelve un objeto que contiene la misma informacion que obtenemos en history a traes de la prop enviada por Route
// 4.  Ultimo, NavLink y Link. Nos permiten generar el routeo interno dentro de nuestra pagina, de este modo podremos contar con una barar de navegacion 
// que al hacer click sobre alguno de los elementos, me redirija al path indicado. 
// 		        <NavLink to="/" activeClassName="active">Home</NavLink>
// 		        Al hacer click en "Home" me va a redirigr a "localhost:3000/"
// 		        <NavLink to="/about" activeClassName="active">About</NavLink>
// 		        Al hacer click en "About" me va a redirigir a "localhost:3000/about"
// 		        >> y luego, se renderizara lo mencionado en el <Route>. Si, por ejemplo tenemos 
// 		        <Route exact path ="/" component={Home}/>
// 		        <Route exact path="/about" component={About}/>
// 		        entonces, al hacer click en Home, se me renderizará Home, y si hago click en About, 
// 		        se me renderizá About. 
// 	1. NavLink nos daba la capacidad de colocarle una propiedad activeClassName, activeStyle y "exact".  
// 		1.1 activeClassName: Nos servia para definir una clase para cuando estabamos ubicados sobre dicha ruta. 
// 		1.2 exact: para indicar exactamente esa ruta (mismo comportamiento que antes)
// 		1.3 activeStyle: definir inline styling para la ruta indicada para poder proveerle de estilo (analogo a la clase)
// 	        <NavLink to="/" activeClassName="active">Home</NavLink>
// 	        Me encuentre en "localhost:3000/" o "localhost:3000/about" me va a marcar Home como activo 
// 	        	        <NavLink exact to="/" activeClassName="active">Home</NavLink>
// 	        	        Me va a mostrar Home solo cuando me encuentre ubicado en /. Por lo tanto en "localhost:3000/" se 
// 	        	        marca Home como activo pero ... en "localhost:3000/about", no 
// 	2. Por otro lado Link que solo nos permite definir el path indicado. No podemos usar activeClassName ni exact. 
// 			<Link path="/">Home</Link>


