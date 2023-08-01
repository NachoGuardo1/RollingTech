import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { Card } from "react-bootstrap";
import ModalInfo from "../componentes/ModalInfoProd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const FavoritosPage = () => {
  const { favoritos, eliminarFavorito, agregarProductos } =
    useContext(Carritocontext);
  return (
    <div className="row d-flex gap-3 justify-content-center my-5">
      {favoritos.length === 0 ? (
        <div className="container-fluid d-flex justify-content-center row">
          <h2 className="text-center">Todavia no tienes productos favoritos</h2>
          <Link to={"/"} className="btn ">
            Volver al inicio
            <FontAwesomeIcon icon={faHouse} className="mx-1" />
          </Link>
        </div>
      ) : (
        <div className="container-fluid d-flex justify-content-center row gap-3">
          {favoritos.map((item) => (
            <Card
              style={{ width: "14rem", height: "25rem" }}
              key={item.uid}
              className=" border border-secondary efectos-card p-0"
            >
              <Card.Img
                variant="top"
                src={item.img}
                style={{ height: "15rem" }}
              />

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
                      onClick={() => eliminarFavorito(item.uid)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
