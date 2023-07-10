import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const navigate = useNavigate();
  const { eliminarProducto, carrito, vaciarCarrito, total, agregarProductos } =
    useContext(Carritocontext);
  const iniciarPago = () => {
    Swal.fire({
      title: "¿Quieres iniciar pago?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/pago");
      }
    });
  };

  return (
    <>
      <div className="container d-flex gap-1 justify-content-center row">
        <table className="table table-dark table-md table-striped">
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
              <tr key={item.id}>
                <td> {item.nombre}</td>
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
                <td>${item.precio * item.cantidad}</td>
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
          </tbody>
        </table>

        <div className="d-flex justify-content-center ">
          <strong> Total de su compra: ${total.toFixed(2)} </strong>
        </div>

        <button onClick={vaciarCarrito} className="btn btn-danger">
          Vaciar Carrito
        </button>
        <button onClick={iniciarPago} className="btn btn-success">
          Iniciar Pago
        </button>
      </div>
    </>
  );
};
