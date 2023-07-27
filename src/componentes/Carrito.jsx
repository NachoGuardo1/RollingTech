import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Carrito = () => {
  const navigate = useNavigate();
  const {
    eliminarProducto,
    carrito,
    vaciarCarrito,
    total,
    agregarProductos,
    restarProductos,
  } = useContext(Carritocontext);
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
        <div
          className="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 table-responsive"
          style={{
            maxHeight: "28rem",
          }}
        >
          <table className="table table-dark table-md table-striped  fw-lighter">
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
                <tr key={item.id} className="text-center">
                  <td className="text-start"> {item.nombre}</td>
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
                    <p className="fs-6 fw-lighter"> x unidad ${item.precio}</p>
                  </td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm "
                      onClick={() => {
                        eliminarProducto(item.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center fw-bold">
          Total de su compra: ${total.toFixed(2)}
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
