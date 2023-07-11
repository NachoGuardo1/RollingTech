import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import { FormPago } from "../componentes/FormPago";

export const PagoPage = () => {
  const { carrito, total, eliminarProducto, agregarProductos } =
    useContext(Carritocontext);
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
                  <button className="btn btn-light btn-sm me-1">-</button>
                  {item.cantidad}
                  <button
                    className="btn btn-light btn-sm ms-1"
                    onClick={() => agregarProductos(item)}
                  >
                    +
                  </button>
                  <span> x un ${item.precio}</span>
                </td>
                <td>${item.precio}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      eliminarProducto(item.id);
                    }}
                  >
                    <img
                      src="https://w7.pngwing.com/pngs/228/54/png-transparent-logo-trademark-brand-delete-button-miscellaneous-text-trademark.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    ></img>
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
