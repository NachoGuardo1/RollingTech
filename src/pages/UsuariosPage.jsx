import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { borrarUsuario } from "../helpers/ApiUsuario";
import Swal from "sweetalert2";

export const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  async function getUsuarios() {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}api/usuarios`);

      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      const data = await response.json();
      setUsuarios(data.usuarios);
      usuarios;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  }

  const eliminarUsuario = (usuarioUid) => {
    const nuevosUsuarios = usuarios.filter((u) => u.uid !== usuarioUid);
    setUsuarios(nuevosUsuarios);
    borrarUsuario(usuarioUid);
  };

  const validarEliminacion = (usuarioUid) => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar usuario",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El usuario se eliminó", "success");
        eliminarUsuario(usuarioUid);
      }
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="table-responsive col-9  my-3"
        style={{
          maxHeight: "28rem",
        }}
      >
        <h3 className="text-center mb-3">LISTADO DE USUARIOS</h3>
        <table className="table table-ligth table-md table-striped fw-lighter table-hover ">
          <thead>
            <tr className="text-center">
              <th className="text-start">Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Eliminar usuario</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.uid} className="text-center">
                <td className="text-start">{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => validarEliminacion(usuario.uid)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
