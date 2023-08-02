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

  const [error, setError] = useState("");
  const numTarjetaRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const fechaVencimientoRegex = /^\d{2}\/\d{2}$/;
  const codSeguridadRegex = /^\d{3}$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!numTarjetaRegex.test(numeroTarjeta)) {
      setError("Los numeros ingresados son incorrectos");
      return;
    }
    if (!fechaVencimientoRegex.test(fechaVencimiento)) {
      setError("La fecha indicada no es la correcta");
      return;
    }

    if (!codSeguridadRegex.test(codigoSeguridad)) {
      setError("El codigo indicado no es correcto");
      return;
    }

    Swal.fire("Tu compra fue exitosa");
    setCarrito([]);
    localStorage.removeItem("carrito");
    navigate("/");
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
          <label className="fw-bold my-2">
            Número de tarjeta:
            <input
              type="text"
              value={numeroTarjeta}
              onChange={(e) => setNumTarjeta(e.target.value)}
              required
              className="my-1 form-control"
            />
            <div class="form-text">
              Ingrese el formato dddd-dddd-dddd-dddd, incluyendo guiones
            </div>
          </label>
          <label className="fw-bold my-2">
            Fecha de vencimiento:
            <input
              type="text"
              value={fechaVencimiento}
              onChange={(e) => setFechaVenc(e.target.value)}
              required
              className="my-1 form-control"
            />
            <div class="form-text">Ingrese el formato dd/mm.</div>
          </label>
          <label className="fw-bold my-2">
            Código de seguridad:
            <input
              type="number"
              value={codigoSeguridad}
              onChange={(e) => setCodSeguridad(e.target.value)}
              required
              className="my-1 form-control"
            />
            <div class="form-text">
              Ingrese los 3 numeros de seguridad al dorso de su tarjeta
            </div>
          </label>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <button className="btn btn-success my-3" onClick={onSubmit}>
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};
