import React, { useContext } from "react";
import { FiltrosContext } from "../hooks/FiltroContext";
import { Card } from "react-bootstrap";
import ModalInfo from "./ModalInfoProd";
import { Carritocontext } from "../hooks/CarritoContext";
import "../styles/productos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductList = ({ products }) => {
  const { agregarProductos, agregarFavoritos, favoritos, eliminarFavorito } =
    useContext(Carritocontext);
  const esFav = (item) => favoritos.includes(item);

  const { categoriaSeleccionada } = useContext(FiltrosContext);

  const productosFiltrados = categoriaSeleccionada
    ? products.filter((product) => product.categoria === categoriaSeleccionada)
    : products;

  return (
    <div className="container-fluid m-0 p-0 d-flex row">
      <div className="row d-flex gap-3 justify-content-center">
        {productosFiltrados.map((item) => (
          <Card
            style={{ width: "14rem", height: "25rem" }}
            key={item.id}
            className=" border border-secondary efectos-card p-0"
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{ height: "15rem" }}
            />
            <Card.Body className="text-center ">
              <div className="row h5 card-title">
                <div className="col-10 text-center texto-cartas ">
                  {item.nombre}
                </div>
                <div className="col-2 justify-content-center my-auto d-flex">
                  <ModalInfo item={item} />
                </div>
                <p className="my-1 fw-bold texto-cartas">${item.precio}</p>
              </div>
              <div className="row card-footer">
                <div className="d-flex gap-3 justify-content-around">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => agregarProductos(item)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  {esFav(item) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarFavorito(item.id)}
                    >
                      <FontAwesomeIcon icon={faHeart} color="white" />
                    </button>
                  ) : (
                    <button
                      className="btn border-danger"
                      onClick={() => agregarFavoritos(item)}
                    >
                      <FontAwesomeIcon icon={faHeart} color="red" />
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

export default ProductList;
