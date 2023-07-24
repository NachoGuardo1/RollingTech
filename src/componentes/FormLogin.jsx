import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../helpers/ApiLogin";
//import "../styles/login.css";
//import "../componentes/MessageApp";

export const FormLogin = ({ iniciarSesion, guardarUsuario, handleClose }) => {
  //agregado domingo 11:22

  const navigate = useNavigate();

  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");

  const [resultado, setResultado] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    console.log("here i go ");
    e.preventDefault();

    setLoading(true);
    //Obtener datos ingresados
    const datos = {
      correo: inputCorreo,
      contrasena: inputContrasena,
    };

    console.log("el correo es", datos.correo);
    console.log("el correo es", datos.contrasena);
    //hacer petición a la API
    const resp = await authLogin(datos);

    console.log("here i go ");

    //Guardar token
    if (resp?.token) {
      console.log("entro al if del token");

      localStorage.setItem("token", JSON.stringify(resp.token));

      //ejecutar función iniciar sesión
      iniciarSesion();
      //guardar datos del usuario
      const { nombre, correo, rol, uid } = resp.usuario;
      guardarUsuario({
        nombre,
        correo,
        rol,
        uid,
      });
      // reset form
      setInputContrasena("");
      setInputCorreo("");
      //redireccionar
      handleClose();
      navigate("/");
    }
    console.log("viene al set resultado");
    setResultado(resp);
    setLoading(false);
  };

  return (
    <div>
      <form className="row ">
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
        <div className="mt-3 d-grid">
          <button className="btn btn-success my-3" onClick={handleLogin}>
            Iniciar
          </button>
        </div>
      </form>
      {/*             {resultado?.msg (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
 */}
    </div>
  );
};

export default FormLogin;
