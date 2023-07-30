import React, { useState } from "react";
import { crearUsuario } from "../helpers/ApiUsuario";
import Swal from "sweetalert2";

export const FormRegister = ({ anteriorParte }) => {
  const [inputNombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  //estados fijos
  const v_rol = "USER-ROLE";

  const RegistroUsuario = async (e) => {
    e.preventDefault();
    const datos = {
      nombre: inputNombre,
      correo: inputCorreo,
      contrasena: inputContrasena,
      rol: v_rol,
    };

    try {
      const resp = await crearUsuario(datos);
      if (resp?.usuario) {
        console.log("Datos del Usuario guardados exitosamente");
        anteriorParte();
      } else {
        console.error("Error al guardar los datos. Crear Usuario");
        Swal.fire("No se pudo completar el registro");
      }
    } catch (error) {
      console.error("Error al guardar los datos. Crear Usuario");
    }
  };

  return (
    <div>
      <form className="row ">
        <div className="mt-3">
          <label className="fw-bold mb-1">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            value={inputNombre}
            onChange={(e) => setInputNombre(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold mb-1">Correo</label>
          <input
            type="email"
            className="form-control"
            value={inputCorreo}
            onChange={(e) => setInputCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold mb-1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={inputContrasena}
            onChange={(e) => setInputContrasena(e.target.value)}
            required
          />
          <div class="form-text">AQUI IRIAN LOS REQUISITOS DE LA PASS.</div>
        </div>

        <div className="mt-3 d-grid">
          <button
            className="btn btn-success my-3"
            type="submit"
            onClick={RegistroUsuario}
          >
            Registrarse
          </button>
        </div>
        <div className="text-center">
          <a className="link" onClick={anteriorParte}>
            Volver al login
          </a>
        </div>
      </form>
    </div>
  );
};
