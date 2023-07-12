import React from "react";
import { Productos } from "../componentes/Productos";
import { Carrousel } from "../componentes/Carrousel";
import { useState } from "react";
import Paginacion from "../componentes/Paginacion";

export const HomePage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const paginasTotales = 3;

  const siguientePagina = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior + 1);
  };

  const paginaAnterior = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior - 1);
  };

  return (
    <div className="p-0 m-0 d-flex row container-fluid justify-content-center">
      <Carrousel />
      <Productos />
      <Paginacion
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        onSiguientePagina={siguientePagina}
        onAnteriorPagina={paginaAnterior}
      />
    </div>
  );
};
