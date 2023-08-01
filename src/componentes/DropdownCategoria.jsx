import React from "react";

export const DropdownCategoria = ({
  categoriaSeleccionada,
  cambioCategoria,
  categorias,
}) => {
  return (
    <div className="mb-4 text-center col-4 mx-auto">
      <select
        value={categoriaSeleccionada}
        onChange={cambioCategoria}
        className="form-control form-control-sm text-center"
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
