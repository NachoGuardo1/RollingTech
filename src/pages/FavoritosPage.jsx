import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { Card } from "react-bootstrap";
import ModalInfo from "../componentes/ModalInfoProd";

export const FavoritosPage = () => {
  const { favoritos, eliminarFavorito, agregarProductos } =
    useContext(Carritocontext);
  return (
    <div className="row d-flex gap-3 justify-content-center my-5">
      {favoritos.map((item) => (
        <Card
          style={{ width: "14rem" }}
          key={item.id}
          className=" border border-secondary efectos-card"
        >

          <Card.Img variant="top" src={item.img} />
          <Card.Body className="text-center ">
            <Card.Title className="row">
              <div className="col-9">{item.nombre}</div>
              <div className="col-3">
                <ModalInfo item={item} />
              </div>
            </Card.Title>
            <div className="row">
              <p className="text-dark mb-3 ">
                <strong>${item.precio}</strong>
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button
                  className="btn btn-outline-dark"

                  onClick={() => agregarProductos(item)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  ></img>
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => eliminarFavorito(item.id)}
                ></button>

              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
