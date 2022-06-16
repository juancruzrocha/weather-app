import React from "react";
import { useParams } from "react-router-dom";


function Ciudad ({ciudadId, ciudad, temp}) {
     
  let params = useParams();
  if (!ciudad) {alert("No toquen la URL")}
      return   (
    
       <div className="info">
        <h3>Ciudad</h3>
        <h2>{ciudad.name}</h2>
        <div> Temperatura:{temp}</div>
        <div>Clima: {ciudad.weather}</div>
        <div>Viento : {ciudad.wind}</div>
        <div>Cantidad de nubes: {ciudad.clouds}</div>
        <div>Latitud: {ciudad.latitud}º</div>
        <div>Longitud: {ciudad.longitud}º</div>
       </div>
      )
}

export default Ciudad;