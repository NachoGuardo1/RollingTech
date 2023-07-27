import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { Card } from "react-bootstrap";
import ModalInfo from "../componentes/ModalInfoProd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const FavoritosPage = () => {
  const { favoritos, eliminarFavorito, agregarProductos } =
    useContext(Carritocontext);
  return (
    <div className="row d-flex gap-3 justify-content-center my-5">
      {favoritos.map((item) => (
        <Card
          style={{ width: "14rem", height: "25rem" }}
          key={item.id}
          className=" border border-secondary efectos-card p-0"
        >
          <Card.Img variant="top" src={item.img} style={{ height: "15rem" }} />

          <Card.Body className="text-center ">
            <div className="row h5 card-title">
              <div className="col-10 text-center">{item.nombre}</div>
              <div className="col-2 justify-content-center my-auto d-flex">
                <ModalInfo item={item} />
              </div>
              <p className="my-1 fw-bold ">${item.precio}</p>
            </div>
            <div className="row card-footer">
              <div className="d-flex gap-3 justify-content-center">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => agregarProductos(item)}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarFavorito(item.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
