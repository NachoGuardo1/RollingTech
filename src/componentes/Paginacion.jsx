import React from "react";

const Paginacion = ({
  paginaActual,
  paginasTotales,
  onSiguientePagina,
  onAnteriorPagina,
}) => {
  return (
    <div className="text-center my-3">
      <button
        onClick={onAnteriorPagina}
        disabled={paginaActual === 1}
        className="btn btn-dark"
      >
        Anterior
      </button>
      <span className="mx-3">
        Página {paginaActual} de {paginasTotales}
      </span>
      <button
        onClick={onSiguientePagina}
        disabled={paginaActual === paginasTotales}
        className="btn btn-dark"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
