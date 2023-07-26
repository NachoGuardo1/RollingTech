import React, { useState } from "react";

export const FormRegister = ({ anteriorParte }) => {
  const [inputNombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  const [inputFechaNacimiento, setInputFechaNacimiento] = useState("");
  return (
    <div>
      <form className="row ">
        <div className="mt-3">
          <label className="fw-bold">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            value={inputNombre}
            onChange={(e) => setInputNombre(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold">Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Correo@"
            value={inputCorreo}
            onChange={(e) => setInputCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={inputContrasena}
            onChange={(e) => setInputContrasena(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            value={inputFechaNacimiento}
            onChange={(e) => setInputFechaNacimiento(e.target.value)}
            required
          />
        </div>
        <div className="mt-3 d-grid">
          <button className="btn btn-success my-3" type="submit">
            Registrarse
          </button>
        </div>
        <div className="text-center">
          <button className="btn" onClick={anteriorParte}>
            volver
          </button>
        </div>
      </form>
    </div>
  );
};
