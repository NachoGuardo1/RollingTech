import React, { useContext } from "react";
import { FiltrosContext } from "../hooks/FiltroContext";

export const DropdownCategoria = ({ categorias }) => {
  const { categoriaSeleccionada, cambiarCategoria } =
    useContext(FiltrosContext);

  return (
    <div className="mb-4 text-center col-4 mx-auto">
      <select
        value={categoriaSeleccionada}
        onChange={(e) => cambiarCategoria(e.target.value)}
        className="form-control"
      >
        <option value="">Todas las categorias</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};
