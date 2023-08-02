import React, { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "../hooks/FiltroContext";
import { Card } from "react-bootstrap";
import ModalInfo from "./ModalInfoProd";
import { Carritocontext } from "../hooks/CarritoContext";
import "../styles/productos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { getProductos } from "../helpers/ApiProducto";
import Paginacion from "./Paginacion";
import { authContext } from "../hooks/AuthContext";
import Swal from "sweetalert2";

const ProductList = () => {
  const { categoriaSeleccionada } = useContext(FiltrosContext);

  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginasTotales, setTotalPaginas] = useState(1);
  const [prodXPage, setProdXPage] = useState(5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth < 768) {
      setProdXPage(3);
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      setProdXPage(5);
    } else {
      setProdXPage(8);
    }
  }, [windowWidth]);
  useEffect(() => {
    const cambioTamaño = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", cambioTamaño);
    return () => {
      window.removeEventListener("resize", cambioTamaño);
    };
  }, []);
  useEffect(() => {
    traerProductos();
  }, [paginaActual]);

  const desde = (paginaActual - 1) * prodXPage;
  const limite = prodXPage;

  const traerProductos = async () => {
    const { productos, total } = await getProductos(limite, desde);
    setProductos(productos);
    setTotalPaginas(Math.ceil(total / prodXPage));
  };
  const siguientePagina = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior + 1);
  };

  const paginaAnterior = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior - 1);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((product) => product.categoria === categoriaSeleccionada)
    : productos;

  const { agregarProductos, agregarFavoritos, favoritos, eliminarFavorito } =
    useContext(Carritocontext);
  const { loginOk } = useContext(authContext);

  const agregarFav = (item) => {
    if (loginOk === true) {
      agregarFavoritos(item);
    } else {
      Swal.fire("Debes Loguearte");
    }
  };

  return (
    <div className="container-fluid m-0 p-0 d-flex row">
      <div className="row d-flex gap-3 justify-content-center">
        {productosFiltrados.map((item) => (
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
              <div className="row h5 card-title align-items-center">
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
                  {favoritos.find((producto) => producto.uid === item.uid) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarFavorito(item.uid)}
                    >
                      <FontAwesomeIcon icon={faHeart} color="white" />
                    </button>
                  ) : (
                    <button
                      className="btn border-danger"
                      onClick={() => agregarFav(item)}
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
      <Paginacion
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        onSiguientePagina={siguientePagina}
        onAnteriorPagina={paginaAnterior}
      />
    </div>
  );
};

export default ProductList;
