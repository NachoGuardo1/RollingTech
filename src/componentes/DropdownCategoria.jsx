import React, { useContext } from "react";
import { FiltrosContext } from "../hooks/FiltroContext";
import { Dropdown } from "react-bootstrap";

export const DropdownCategoria = ({ categorias }) => {
  const { categoriaSeleccionada, cambiarCategoria } =
    useContext(FiltrosContext);

  return (
    <div className="mb-4 text-center">
      <select
        value={categoriaSeleccionada}
        onChange={(e) => cambiarCategoria(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};
