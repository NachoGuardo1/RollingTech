import React, { useState } from "react";
import { crearUsuario } from "../helpers/ApiUsuario";

export const FormRegister = ({ anteriorParte }) => {
  
  const [inputNombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  //estados fijos
  const v_rol="USER-ROLE";

  
  const RegistroUsuario = async (e) => {
      e.preventDefault();
      //Obtener datos ingresados
      const datos = {
        nombre: inputNombre,
        correo: inputCorreo,
        contrasena: inputContrasena,
        rol: v_rol
      };
  
      console.log('en RegistroUsuario');
      console.log(datos);

      try{
        const resp = await crearUsuario(datos);  
        if (resp?.usuario) {
          console.log("Datos del Usuario guardados exitosamente");
        }else{
          console.log("estoy en el else del resp.usuario");
          console.log(data);
          //  Swal.fire("El usuario o la contraseña no son correctos");
        }
      }catch(error){
        console.log("estoy en el catch del crear usuario");
        console.error(
          "No se pudo registrar el usuario. Error: "
        );
      }
    };

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
        {/* <div className="mt-3">
          <label className="fw-bold">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            value={inputFechaNacimiento}
            onChange={(e) => setInputFechaNacimiento(e.target.value)}
            required
          />
        </div> */}
        <div className="mt-3 d-grid">
          <button className="btn btn-success my-3" type="submit" onClick={RegistroUsuario}>
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
