import React, { useState } from "react";

export const FormPago = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTarjeta, setNumTarjeta] = useState("");
  const [fechaVencimiento, setFechaVenc] = useState("");
  const [codigoSeguridad, setCodSeguridad] = useState("");
  const [mostrarPrimeraP, setMostrarPrimeraP] = useState(true);
  const [mostrarSegundaP, setMostrarSegundaP] = useState(false);

  const siguienteParte = (e) => {
    e.preventDefault();
    setMostrarPrimeraP(false);
    setMostrarSegundaP(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="row " onSubmit={onSubmit}>
        {mostrarPrimeraP && (
          <div>
            <h5 className="my-3 fw-bold">Datos del comprador</h5>

            <label htmlFor="" className="fw-bold">
              Nombre completo
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="my-1 form-control"
              required
            />

            <label htmlFor="" className="fw-bold">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-1 form-control"
              required
            />

            <label htmlFor="" className="fw-bold">
              Direccion de entrega
            </label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="my-1 form-control"
              required
            />
            <button onClick={siguienteParte} className="btn btn-success">
              Siguiente Parte
            </button>
          </div>
        )}

        {mostrarSegundaP && (
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
            <button className="btn btn-success my-3">Finalizar compra</button>
          </div>
        )}
      </form>
    </div>
  );
};
