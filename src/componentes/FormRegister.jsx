import React, { useState } from "react";
import { crearUsuario } from "../helpers/ApiUsuario";
import Swal from "sweetalert2";


export const FormRegister = ({ anteriorParte }) => {
  const [inputNombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  //estados fijos
  const v_rol = "USER-ROLE";

  const [valorValidacion, setValorValidacion] = useState(null);
   const RegistroUsuario = async (e) => {
    e.preventDefault();

    setValorValidacion(null);
    if (inputNombre.match(/([A-Z]{1})([a-záéíóúñç]{2,})$/)){
      console.log("nombre ok")
      if (inputCorreo.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)){
        console.log("correo ok");
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
    

      }else{  
        console.error("El formato introducido para CORREO no es el correcto");
        setValorValidacion("El formato introducido para CORREO no es el correcto");
        console.log(valorValidacion)
      };
    }else { 
      console.error("El formato introducido para NOMBRE no es el correcto");
      setValorValidacion("El formato introducido para NOMBRE no es el correcto");
      console.log(valorValidacion)
    };


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
            onChange={(e) => setInputCorreo(e.target.value) }
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
            <span className="text-danger text-small d-block mb-2">
                    {valorValidacion && valorValidacion}
            </span>
          </div>

        </div>

        <div className="mt-3 d-grid">
          <button
            className="btn btn-success my-3"
            type="submit"
            onClick={RegistroUsuario}
            //onClick={validarDatos}
          >
            Registrarse
          </button>
        </div>
        <div className="text-center">
          <a className="link" onClick={anteriorParte}>
            Volver al login
          </a>
        </div>
        <script>

        </script>

      </form>

    </div>
  );
};
