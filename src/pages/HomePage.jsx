import React from "react";
import { Carrousel } from "../componentes/Carrousel";
import { useState } from "react";
import Paginacion from "../componentes/Paginacion";
import ProductList from "../componentes/ProductList";
import { DropdownCategoria } from "../componentes/DropdownCategoria";

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
      <div>
        <DropdownCategoria
          categorias={[
            "CELULARES",
            "NOTEBOOKS",
            "TABLETS",
            "TELEVISORES",
            "CONSOLAS",
          ]}
        />
        <ProductList />
      </div>
      <Paginacion
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        onSiguientePagina={siguientePagina}
        onAnteriorPagina={paginaAnterior}
      />
    </div>
  );
};
