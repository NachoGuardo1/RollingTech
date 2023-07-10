import React, { useContext, useEffect, useState } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import productos from "../data/data";
import { Card } from "react-bootstrap";
import ModalInfo from "./ModalInfoProd";
import "../styles/productos.css";

export const Productos = () => {
  const { agregarProductos, agregarFavoritos, favoritos, eliminarFavorito } =
    useContext(Carritocontext);
  const esFav = (item) => favoritos.includes(item);

  return (
    <div className="container-fluid m-0 p-0 d-flex row ">
      <div className="row d-flex gap-3 justify-content-center">
        {productos.map((item) => (
          <Card
            style={{ width: "14rem" }}
            key={item.id}
            className=" border border-secondary efectos-card"
          >
            <Card.Img variant="top" src={item.img} />
            <Card.Body className="text-center ">
              <div className="row h5 ">
                <div className="col-9 text-center">{item.nombre}</div>
                <div className="col-3">
                  <ModalInfo item={item} />
                </div>
                <p className="text-dark mb-2 ">
                  <strong>${item.precio}</strong>
                </p>
              </div>
              <div className="row ">
                <div className="d-flex gap-3 justify-content-around">
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
                  {esFav(item) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarFavorito(item.id)}
                    >
                      <img
                        src="https://i.pinimg.com/originals/b3/66/a7/b366a779db1cd096058da50a0026b663.jpg"
                        alt=""
                        width="20px"
                        height="20px"
                      />
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-danger "
                      onClick={() => agregarFavoritos(item)}
                    >
                      <img
                        src="https://i.pinimg.com/originals/b3/66/a7/b366a779db1cd096058da50a0026b663.jpg"
                        alt=""
                        width="20px"
                        height="20px"
                      />
                    </button>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
