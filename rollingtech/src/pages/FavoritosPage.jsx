import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { Card } from "react-bootstrap";

export const FavoritosPage = () => {
  const { favoritos, eliminarFavorito } = useContext(Carritocontext);
  return (
    <div>
      {favoritos.map((item) => (
        <Card>
          <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
          <button onClick={() => eliminarFavorito(item.id)}>Eliminar</button>
        </Card>
      ))}
    </div>
  );
};
