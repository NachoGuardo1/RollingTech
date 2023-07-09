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
          <Card.Img
            variant="top"
            src="https://images.fravega.com/f500/c93187b609899f51b11399d511cc117a.jpg"
          />
          <Card.Body className="text-center ">
            <Card.Title className="my-1">${item.precio}</Card.Title>
            <div className="row">
              <div className="d-flex justify-content-between my-2">
                <p className="text-dark my-auto h5">{item.nombre}</p>
                <button
                  className="btn btn-danger btn-sm my-auto"
                  onClick={() => eliminarFavorito(item.id)}
                >
                  <img
                    src="https://w7.pngwing.com/pngs/923/219/png-transparent-heart-heart-love-heart-logo.png"
                    width="20"
                    height="20"
                    className="d-inline-block align-top"
                  />
                </button>
              </div>
              <div className="d-flex gap-2 justify-content-center">
                <button
                  className="btn btn-outline-success"
                  onClick={() => agregarProductos(item)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  ></img>
                </button>
                <ModalInfo item={item} />
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
