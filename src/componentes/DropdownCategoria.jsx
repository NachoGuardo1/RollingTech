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
        <option value="">Categorias</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria.charAt(0).toUpperCase() +
              categoria.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
