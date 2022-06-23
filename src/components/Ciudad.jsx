import React from "react";
import { useParams } from "react-router-dom";
import estilos from "./Ciudad.module.css";


function Ciudad({ ciudad, img }) {

    let params = useParams();
    console.log(ciudad)

    if (!ciudad) { alert("No toquen la URL") }
    else

        return (
            <div >

                <div className={estilos.contenedor}>
                    <h3>{ciudad.name}</h3>
                    <div className={estilos.img}> <img src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`} alt="Img del tiempo" /></div>
                    <div className={estilos.infoCont}> Temperatura: {ciudad.temp} Cº</div>
                    <div className={estilos.infoCont}>Clima: {ciudad.weather}</div>
                    <div className={estilos.infoCont}>Viento : {ciudad.wind}</div>
                    <div className={estilos.infoCont}>Cantidad de nubes: {ciudad.clouds}</div>
                    <div className={estilos.infoCont}>Latitud: {ciudad.latitud}º</div>
                    <div className={estilos.infoCont}>Longitud: {ciudad.longitud}º</div>

                </div>
            </div>
        )
}

export default Ciudad;