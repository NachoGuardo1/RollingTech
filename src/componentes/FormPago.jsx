import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Carritocontext } from "../hooks/CarritoContext";
import { useNavigate } from "react-router-dom";
import { authContext } from "../hooks/AuthContext";

export const FormPago = () => {
  const [numeroTarjeta, setNumTarjeta] = useState("");
  const [fechaVencimiento, setFechaVenc] = useState("");
  const [codigoSeguridad, setCodSeguridad] = useState("");

  const { total, setCarrito } = useContext(Carritocontext);
  const { usuarioIn } = useContext(authContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire("Tu compra fue exitosa");
    setCarrito([]);
    navigate("/");
  };

  return (
    <div>
      <div>
        <h5 className="fw-bold">Datos del comprador:</h5>
        <p>
          {usuarioIn.nombre}-{usuarioIn.correo}
        </p>
        <p>A Pagar: {total.toFixed(2)}</p>
      </div>
      <form className="row ">
        <div className="row">
          <h5 className="my-3 fw-bold">Datos de Pago</h5>
          <label className="fw-bold">
            Número de tarjeta:
            <input
              type="text"
              value={numeroTarjeta}
              onChange={(e) => setNumTarjeta(e.target.value)}
              required
              className="my-1 form-control"
            />
          </label>
          <label className="fw-bold">
            Fecha de vencimiento:
            <input
              type="text"
              value={fechaVencimiento}
              onChange={(e) => setFechaVenc(e.target.value)}
              required
              className="my-1 form-control"
            />
          </label>
          <label className="fw-bold">
            Código de seguridad:
            <input
              type="text"
              value={codigoSeguridad}
              onChange={(e) => setCodSeguridad(e.target.value)}
              required
              className="my-1 form-control"
            />
          </label>
          <button className="btn btn-success my-3" onClick={onSubmit}>
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};
