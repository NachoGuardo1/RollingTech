import React from 'react'
import '../styles/error404.css'


export const Error404 = () => {
    return (
        <div className="error404">
            <img src="https://cdn.dribbble.com/users/7813810/screenshots/18154034/media/43ccc055c325428ec8a9b12a5057e516.gif"/>
            <h2>Parece que estás perdido</h2>
            <h5>La página que estás buscando no está disponible</h5>
            <a href="#">Volver al Inicio</a>
        </div>
    );
};