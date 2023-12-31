import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
import Swal from "sweetalert2";
import { FormRegister } from "./FormRegister";
import { authContext } from "../hooks/AuthContext";

export const FormLogin = ({ handleClose, tituloRegister, tituloLogin }) => {
  const navigate = useNavigate();
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");

  const { login, guardarUsuario, usuarioIn } = useContext(authContext);

  const [loading, setLoading] = useState(false);

  const [mostrarPrimeraP, setMostrarPrimeraP] = useState(true);
  const [mostrarSegundaP, setMostrarSegundaP] = useState(false);
  const siguienteParte = () => {
    setMostrarPrimeraP(false);
    setMostrarSegundaP(true);
    tituloRegister();
  };
  const anteriorParte = () => {
    setMostrarPrimeraP(true);
    setMostrarSegundaP(false);
    tituloLogin();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const datos = {
      correo: inputCorreo,
      contrasena: inputContrasena,
    };
    const resp = await authLogin(datos);
    if (resp?.token) {
      localStorage.setItem("token", JSON.stringify(resp.token));

      login();

      const { nombre, correo, rol, uid } = resp.usuario;

      guardarUsuario({
        nombre,
        correo,
        rol,
        uid,
      });

      setInputContrasena("");
      setInputCorreo("");

      handleClose();
      navigate("/");
      Swal.fire(`Bienvenido ${resp.usuario.nombre}!`);
    } else {
      console.error(
        "El usuario no esta registrado o los datos son incorrectos"
      );
      Swal.fire("El usuario o la contraseña son incorrectos");
    }
    setLoading(false);
  };

  return (
    <div>
      {mostrarPrimeraP && (
        <form className="row ">
          <div className="mt-3">
            <label className="fw-bold mb-1">Correo</label>
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
            <label className="fw-bold mb-1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={inputContrasena}
              onChange={(e) => setInputContrasena(e.target.value)}
              required
            />
          </div>
          <div className="mt-3 d-grid">
            <button
              className="btn btn-success my-3"
              onClick={handleLogin}
              disabled={loading && true}
            >
              Iniciar
            </button>
          </div>
          <div className="text-center">
            <a className="link" onClick={siguienteParte}>
              No tienes una cuenta? Registrate!
            </a>
          </div>
        </form>
      )}
      {mostrarSegundaP && <FormRegister anteriorParte={anteriorParte} />}
    </div>
  );
};

export default FormLogin;
