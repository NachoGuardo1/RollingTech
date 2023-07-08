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
            <Card.Img
              variant="top"
              src="https://images.fravega.com/f500/c93187b609899f51b11399d511cc117a.jpg"
            />
            <Card.Body className="text-center ">
              <Card.Title>{item.nombre}</Card.Title>
              <div className="row">
                <p className="text-dark m-2">${item.precio}</p>
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
                  {esFav(item) ? (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarFavorito(item.id)}
                    >
                      <img
                        src="https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => agregarFavoritos(item)}
                    >
                      <img
                        src="https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
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
