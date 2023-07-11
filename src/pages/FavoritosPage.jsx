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
                  className="btn btn-outline-secondary"
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
                  className="btn border-danger"
                  onClick={() => eliminarFavorito(item.id)}
                >
                  <img
                    src="https://e7.pngegg.com/pngimages/980/717/png-clipart-heart-red-heart-thumbnail.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};