import React from 'react';
import Card from './Card';
import estilos from './Cards.module.css'

export default function Cards({cities, onClose}) {
  
  if (cities) {
    
   return (
     <div className={estilos.contenedor}>
      {cities.map( c => <Card
          
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)} // le pasamos al onClose una funcion que devuelve la invocacion a esa misma funcion 
          id={c.id}
          key={c.id}
      />
        )}
    </div>)
  }  else {
    return(
      <div>Sin ciudades</div>
    )
  }
}