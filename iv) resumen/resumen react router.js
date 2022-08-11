v5.1 -> v6.0

<Switch/> vs <Routes /> (en plural)

* Elegia por orden 			vs      * Las rutas son elegidas en base al
es decir el primero 				mejor match posible. Esto evita bugs debido
que coincida era 					a rutas inalcanzables porque eran definidas
el que se renderizaba				mas adelante dentro del Switch
									* Route y Link seran relativos a sus rutas padre

Para cambiar el versionado -> sustituir todo lo que tenian con 
Switch con Routes 

- Rutas anidadas 
v5.1 																		v6.0

* En nuestro nodo hijo 													* Tanto el Route como el Link son relativos
tenemos que indicar cual es 											  por lo tanto saben de donde son "invocados" y 
la ruta base, es decir a partir             							  definen la nueva ruta en funcion de eso. 
de donde viene 
	
function App() {														  function App(){
  return (																		return(
    <BrowserRouter>																	<BrowserRouter>
      <Switch>																			<Routes>
        <Route exact path="/">																<Route path='/' element={<Home/>}/>
          <Home />																			<Route path='/users/*' element={<Users />}/>
        </Route>																		</Routes>
        <Route path="/users">														</BrowserRouter>);
          <Users />															}; 				
        </Route>												
      </Switch>															function Users(){		
    </BrowserRouter>																		
  );																			return( 		
}																					<div>
																						<nav>
function Users() {																			<Link to="me">My Profile</Link>
  // In v5, nested routes are rendered by the child component, so 						</nav>	
  // you have <Switch> elements all over your app for nested UI.
  // You build nested routes and links using match.url and match.path.				<Routes>
  let match = useRouteMatch();															<Route path=":id" element={<UserProfile/>}/>
  																						<Route path="me" element={<OwnUserProfile/>}/>
  return (																			</Routes>
    <div>																			</div>
      <nav>																		);
        <Link to={`${match.url}/me`}>My Profile</Link>					}
      </nav>						

      <Switch>															Veamos como en este caso, ya no tengo que aclarar de donde viene el path 
        <Route path={`${match.path}/me`}>                               para renderizar UserProfile o OwnUserProfile, automaticamente sabe cual es
          <OwnUserProfile />											su path padre. 
        </Route>
        <Route path={`${match.path}/:id`}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

* Veamos en este caso como el componente Users que es el componente 
hijo de App, para poder generar o definir una ruta dentro de dicho 
componente debiamos invocar al path de match, que viene a referenciar
al path padre, es decir /users

																		* OJO! Observar que cuando vamos a estar concatenando rutas en distintos Routes, necesitamos 
																		aclararlo con * luego de la ruta. Por lo tanto usaremos * si y solo si hay otro Routes definido en 
																		alguna decendencia del arbol

- exact prop en Route (CHECK)
v5.1 											v6.0

* Nos permitia indicarle 						* ya no existe, no es necesario 
que tenia que valer exactamente 				
lo indicado en el path para que 
se renderice el componente

- children prop en Route
v5.1 											v6.0

* nos servia para indicar 						* ahora la propiedad children se llama element, nos permite
que componente queriamos renderizar				indicar que componente queremos renderizar 

Cuando usabamos render o children para renderizar un componente, lo haciamos porque en realidad necesitabamos 
encontrar una forma de tener acceso a las propiedades de Route (match, history, y location) pero luego de la creacion 
de hooks esto perdio un poco de sentido ... y por eso es que se decide cambiar a element, y en caso de necesitar 
algun tipo de propiedad de las indicadas anteriormente, se puede usar los respectivos hooks. 

Ademas, no nos permitira mas hacer lo siguiente: 
<Route path={'/home/:id'}>
	<Home name={'martina'} lastname={'scomazzon'}/>
</Route>

de ahora en mas, todo con element

<Route path={'/home/:id'} element={<Home name={'martina'} lastname={'scomazzon'}/>}>

function Home({name, lastname}){
	let params = useParams(); 
	let location = useLocation(); 
	let history = useNavigate(); 

	return(
		<div>
			{name} {lastname}
		</div>
	)
}

Ademas, ahora es mas sencillo el anidamiento de rutas, simplemente las anidamos como si fuesen componentes hijos 
entre si 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} /> // -> esta ruta seria /users/me
          <Route path=":id" element={<UserProfile />} />  // -> esta ruta seria /users/:id
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

** OJO, notemos que si lo hacemos de esta forma ya no es necesario el uso de * para indicar que existira anidamiento 

v5.1                     v6.0
<Route sensitive>   ->  <Routes caseSensitive>
						* TODAS las rutas son caseSensitive o ninguna lo es 

<Route strict>      ->  ya NO EXISTE. Va a hacer matching exacto, si queres que matchee con o sin /, simplemente 
						hay que aclararlo en la ruta del path. Es decir, si queres que lo incluya, lo incluis y sino, no. 
						Pero no se puede renderizar: <Route path='/edit'> Y <Route path='/edit/'>

Cambio de nombres: 

v5.1 			   		v6.0
useHistory()       		useNavigate()

<NavLink>
v5.1 			  		v6.0
exact   				end

v5.1               		v6.0
activeClassName			className -> recibe una funcion -> <className style={(isActive) => {isActive ? "active" : ""}}/>
actviveStyle			style -> recibe una funcion -> <NavLink style={(isActive) => {isActive ? "pink" : "green"}}/>
