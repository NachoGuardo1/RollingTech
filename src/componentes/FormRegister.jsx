import React, { useState } from "react";
import { crearUsuario } from "../helpers/ApiUsuario";
import Swal from "sweetalert2";

export const FormRegister = ({ anteriorParte }) => {
  const [inputNombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  //estados fijos
  const v_rol = "USER-ROLE";

  const [error, setError] = useState("");
  const nombreRegex = /^[a-zA-Z]{6,}$/;
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;

  const RegistroUsuario = async (e) => {
    e.preventDefault();
    setError("");

    const datos = {
      nombre: inputNombre,
      correo: inputCorreo,
      contrasena: inputContrasena,
      rol: v_rol,
    };
    if (!nombreRegex.test(inputNombre)) {
      setError(
        "El nombre debe contener al menos 6 carateres y todos ellos deben ser letras"
      );
      return;
    }
    if (!correoRegex.test(inputCorreo)) {
      setError("Dirección de correo electrónico no válida.");
      return;
    }

    if (!contraseñaRegex.test(inputContrasena)) {
      setError("La contraseña no cumple con los requisitos de seguridad");
      return;
    }

    try {
      const resp = await crearUsuario(datos);
      if (resp?.usuario) {
        console.log("Datos del Usuario guardados exitosamente");
        anteriorParte();
      } else {
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
            placeholder="Ingrese Nombre"
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
            placeholder="Ingrese correo correo@...com"
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
            placeholder="Ingrese Contraseña"
            value={inputContrasena}
            onChange={(e) => setInputContrasena(e.target.value)}
            required
          />
          <div class="form-text">
            8 a 10 caracteres, al menos una letra mayuscula, una minuscula y un
            número.
          </div>
        </div>
        <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

        <div className="mt-1 d-grid">
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
        <script></script>
      </form>
    </div>
  );
};
