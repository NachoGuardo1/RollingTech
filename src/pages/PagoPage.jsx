import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { FormPago } from "../componentes/FormPago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const PagoPage = () => {
  const {
    carrito,
    total,
    eliminarProducto,
    agregarProductos,
    restarProductos,
  } = useContext(Carritocontext);
  return (
    <div className="container-fluid row">
      <div className="col-5">
        <h3 className="text-dark">Listado de productos en carrito:</h3>
        <table className="table table-dark table-sm striped bordered hover ">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr>
                <td>{item.nombre}</td>
                <td>
                  <button
                    className="btn btn-light btn-sm me-1"
                    onClick={() => restarProductos(item)}
                  >
                    -
                  </button>
                  {item.cantidad}
                  <button
                    className="btn btn-light btn-sm ms-1"
                    onClick={() => agregarProductos(item)}
                  >
                    +
                  </button>
                  <span> x un ${item.precio}</span>
                </td>
                <td>${item.precio * item.cantidad}</td>
                <td>
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
      <div className="col-5">
        <FormPago />
      </div>
    </div>
  );
};
