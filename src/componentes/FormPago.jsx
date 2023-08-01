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
  const navigate = useNavigate();

  const usuarioData = JSON.parse(localStorage.getItem("usuario"));

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      numeroTarjeta === "" ||
      fechaVencimiento === "" ||
      codigoSeguridad === ""
    ) {
      Swal.fire("Debes completar todos los campos");
    } else {
      Swal.fire("Tu compra fue exitosa");
      setCarrito([]);
      localStorage.removeItem("carrito");
      navigate("/");
    }
  };

  return (
    <div>
      <form>
        <h5 className="fw-bold">Datos del comprador:</h5>
        <input
          type="text"
          className="fw-bold form-control my-2"
          disabled
          placeholder={usuarioData.nombre}
        />
        <input
          className="fw-bold form-control my-2"
          placeholder={usuarioData.correo}
          disabled
        />
        <p className="bg-primary fw-bold">Total: ${total.toFixed(2)}</p>
      </form>
      <form className="row ">
        <div className="row">
          <h5 className="my-3 fw-bold">Datos de Pago</h5>
          <label className="fw-bold">
            Número de tarjeta:
            <input
              type="number"
              value={numeroTarjeta}
              onChange={(e) => setNumTarjeta(e.target.value)}
              required
              className="my-1 form-control"
              minLength={18}
              maxLength={18}
              placeholder="xxxx-xxxx-xxxx"
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
              minLength={5}
              maxLength={5}
              placeholder="dd/mm"
            />
          </label>
          <label className="fw-bold">
            Código de seguridad:
            <input
              type="number"
              value={codigoSeguridad}
              onChange={(e) => setCodSeguridad(e.target.value)}
              required
              className="my-1 form-control"
              minLength={3}
              maxLength={3}
              placeholder="xxx"
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
