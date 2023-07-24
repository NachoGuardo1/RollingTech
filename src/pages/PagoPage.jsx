import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { FormPago } from "../componentes/FormPago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const PagoPage = () => {
  const {
    carrito,
    total,
    eliminarProducto,
    agregarProductos,
    restarProductos,
  } = useContext(Carritocontext);
  return (
    <div className="container-fluid row d-flex justify-content-around">
      <div
        className="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 table-responsive"
        style={{
          maxHeight: "28rem",
        }}
      >
        <h3 className="text-dark">Listado de productos en carrito:</h3>
        <table className="table table-dark table-sm striped bordered hover fw-lighter">
          <thead>
            <tr className="text-center">
              <th className="text-start">Producto</th>
              <th>Cantidad</th>
              <th>Precio total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr className="text-center">
                <td className="text-start">{item.nombre}</td>
                <td>
                  <button
                    className="btn btn-light btn-sm me-2"
                    onClick={() => restarProductos(item)}
                  >
                    <FontAwesomeIcon icon={faMinus} size="2xs" />
                  </button>
                  {item.cantidad}
                  <button
                    className="btn btn-light btn-sm ms-2"
                    onClick={() => agregarProductos(item)}
                  >
                    <FontAwesomeIcon icon={faPlus} size="2xs" />
                  </button>
                  <p className="fw-lighter"> x un ${item.precio}</p>
                </td>
                <td>${item.precio * item.cantidad}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      eliminarProducto(item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="table-primary">
              <td className="fw-bold">Total de su compra:</td>
              <td></td>
              <td></td>
              <td className="fw-bold">${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10">
        <FormPago />
      </div>
    </div>
  );
};
