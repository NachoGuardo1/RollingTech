import React from 'react'
import '../styles/error404.css'
import Error from '../../src/assets/img/error-image.gif'


export const Error404 = () => {
    return (
        <div className="error404">
            <img src={ Error }/>
            <h2>Parece que estás perdido</h2>
            <h5>La página que estás buscando no está disponible</h5>
            <a href="#">Volver al Inicio</a>
        </div>
    );
};