import './App.css';
import React, {useState} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/nav';
import { Route } from "react-router-dom";
import About from './components/About.jsx';
import Ciudad  from './components/Ciudad.jsx';


//import Card from './components/Card.jsx';
// acá en app.js es donde a los componentes coomo nav le vamos a pasar las propiedades que queremos que utilice cada componente
function App() {
  
   const [cities , setCities]= useState([]);  //estoy creando un estado

   const apiKey = '4ae2636d8dfbdc3044bede63951a019b'; //Este es el codigo para hacer la peticion a la API 
  
   function onClose(id) {
         setCities( oldCities => oldCities.filter( c => c.id !== id)); // me quedo con todos los que son distintos a ese id
   }
   
  function onSearch(ciudad) {
    
    // Siempre que usamos fetch a una API que responde en JSON debemos hacer los mismos pasos:
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)   // ⬅️ 1) llamada a la API, el resultado es una Promise
    .then(response => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
    .then(json => {
      if (json  !== undefined) {       // si existe entonces...
        
        const ciudad = {               //creamos una variable ciudad que es donde guardamos toda la data que nos traemos de la API
          min:     Math.round(json.main.temp_min),
          max:     Math.round(json.main.temp_max),
          img:     json.weather[0].icon,
          wind:    json.wind.speed,
          temp:    json.main.temp,
          name:    json.name,
          weather: json.weather[0].main,
          clouds:  json.clouds.all,
          latitud: json.coord.lat,
          longitud:json.coord.lon,
          id:      json.id
        }
        
        //console.log(ciudad)                  // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
        
        setCities( oldCities => [...oldCities, ciudad]);   // hago una copia de oldCities y le agrego   ad esto me da un arreglo nuevo
      } else {
        alert('Ciudad no encontrada.');
      }
    })
   }


  function onFilter(ciudadId) {     // esta function recibe ciudadId y cities (un arreglo de objetos que tiene todas las ciudades). Nos va a devolver la unica ciudad que tenga el mismo id en ciudadId y cities
    let ciudad = cities.filter( c => c.id === parseInt(ciudadId));   // usso  el parseInt porque c.id es un string y lo quiero convertir a numero
    if (ciudad.length > 0) {
      return ciudad[0]
    } else return null;
  }
   
  return (
    <div className="App" id="App">
      
      
       <Route path ='/' render = { () =>   <Nav onSearch={onSearch}/>}  />   {/* le paso la funcion pero no la invocacion */}
       <Route exact path = '/' render = { () => <Cards  
        cities={cities} 
        onClose={onClose}
       />   }   />
      
       <Route exact path = '/about' render = { () => <About/> }         />
       <Route exact path ='/ciudad/:ciudadId' render = { ({match}) => {
        <Ciudad
          ciudadId={match.params.ciudadId}
          ciudad= {onFilter(match.params.ciudadId)}
        />}}
       />
     
    </div>
  );
}


export default App;

