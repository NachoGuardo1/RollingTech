import React, { useEffect, useState } from "react";

export const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  async function getUsuarios() {
    try {
      const response = await fetch("http://localhost:3000/api/usuarios");

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

  return (
    <div className="d-flex justify-content-center">
      <div
        className="table-responsive col-9  my-3"
        style={{
          maxHeight: "28rem",
        }}
      >
        <h3 className="text-center">Listado de Usuarios</h3>
        <table className="table table-secondary table-md table-striped fw-lighter table-hover ">
          <thead className="table-dark">
            <tr className="text-center">
              <th className="text-start">Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.uid} className="text-center">
                <td className="text-start">{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
