import React from 'react';
import estilos from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código

  
  return (
  <div className={estilos.contenedor}>
    <button onClick={onClose} className={estilos.button} >X</button>
    <Link to={`/ciudad/${id}`} >
    <h1>{name}</h1></Link>
      <div className={estilos.infoCont}>
        <div>
        <p>Máx</p>
        <p>{max} Cº</p>
        </div>
        <div>
        <p>Mín</p>
        <p>{min} Cº</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img del tiempo"/>
      </div>      
  </div>)
};