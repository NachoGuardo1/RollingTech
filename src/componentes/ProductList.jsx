import React, { useContext, useEffect, useState } from "react";
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
import { DropdownCategoria } from "./DropdownCategoria";
import { useMediaQuery, useTheme } from "@material-ui/core";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [total, setTotalProd] = useState(0);

  const [prodPorPag, setProdPorPag] = useState(6);
  const [paginaActual, setPaginaActual] = useState(1);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const limite = total;

  const categorias = [
    "CELULARES",
    "TELEVISORES",
    "NOTEBOOKS",
    "CONSOLAS",
    "TABLETS",
  ];

  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = async () => {
    const { productos, total } = await getProductos(limite, 0);
    setProductos(productos);
    setTotalProd(total);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      )
    : productos;

  const totalProducts = productosFiltrados.length;
  const paginasTotales = Math.ceil(totalProducts / prodPorPag);
  const desde = (paginaActual - 1) * prodPorPag;
  const hasta = desde + prodPorPag;
  const productosFinales = productosFiltrados.slice(desde, hasta);

  const cambioCategoria = (e) => {
    setCategoriaSeleccionada(e.target.value);
    setPaginaActual(1);
  };

  const cambioPagina = (paginaNueva) => {
    if (paginaNueva >= 1 && paginaNueva <= paginasTotales) {
      setPaginaActual(paginaNueva);
    }
  };

  const cambioPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const cambioPagSiguiente = () => {
    if (paginaActual < paginasTotales) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const { agregarProductos, agregarFavoritos, favoritos, eliminarFavorito } =
    useContext(Carritocontext);
  const { loginOk } = useContext(authContext);
  const agregarFav = (item) => {
    if (loginOk === true) {
      agregarFavoritos(item);
    } else {
      Swal.fire("Debes iniciar sesión");
    }
  };

  const theme = useTheme();
  const tamañoMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tamañoTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const tamañoNotebook = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (tamañoMobile) {
      setProdPorPag(10);
    } else if (tamañoTablet) {
      setProdPorPag(12);
    } else if (tamañoNotebook) {
      setProdPorPag(15);
    }
  }, [tamañoMobile, tamañoTablet, tamañoNotebook]);

  return (
    <div className="container-fluid m-0 p-0 d-flex row justify-content-center">
      <DropdownCategoria
        categoriaSeleccionada={categoriaSeleccionada}
        cambioCategoria={cambioCategoria}
        categorias={categorias}
      />
      <div className="row d-flex gap-4 justify-content-center">
        {productosFinales.map((item) => (
          <Card
            className="border border-dark efectos-card p-0 my-3"
            style={{ width: "16rem", height: "25rem" }}
            key={item.uid}
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{ height: "15rem" }}
            />
            <Card.Body className="text-center ">
              <div className="row h5 card-title align-items-center">
                <div className="col-10 text-start texto-cartas ">
                  {item.nombre}
                </div>
                <div className="col-2 justify-content-center my-auto d-flex">
                  <ModalInfo item={item} />
                </div>
                <p className="my-1 fw-bold text-start ">${item.precio}</p>
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
        paginasTotales={paginasTotales}
        cambioPagina={cambioPagina}
        cambioPagSiguiente={cambioPagSiguiente}
        cambioPaginaAnterior={cambioPaginaAnterior}
        paginaActual={paginaActual}
      />
    </div>
  );
};

export default ProductList;
