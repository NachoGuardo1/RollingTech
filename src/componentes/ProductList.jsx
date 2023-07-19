import React, { useContext } from "react";
import { FiltrosContext } from "../hooks/FiltroContext";
import { Card } from "react-bootstrap";
import ModalInfo from "./ModalInfoProd";
import { Carritocontext } from "../hooks/CarritoContext";
import "../styles/productos.css";

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
                <div className="col-10 text-center ">{item.nombre}</div>
                <div className="col-2 justify-content-center my-auto d-flex">
                  <ModalInfo item={item} />
                </div>
                <p className="my-1 fw-bold ">${item.precio}</p>
              </div>
              <div className="row card-footer">
                <div className="d-flex gap-3 justify-content-around">
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
                  {esFav(item) ? (
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
                  ) : (
                    <button
                      className="btn border-danger"
                      onClick={() => agregarFavoritos(item)}
                    >
                      <img
                        src="https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png"
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

export default ProductList;
