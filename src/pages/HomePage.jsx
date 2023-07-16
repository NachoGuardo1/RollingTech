import React from "react";
import { Carrousel } from "../componentes/Carrousel";
import { useState } from "react";
import Paginacion from "../componentes/Paginacion";
import ProductList from "../componentes/ProductList";
import { DropdownCategoria } from "../componentes/DropdownCategoria";
import productos from "../data/data";

export const HomePage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const paginasTotales = 3;

  const siguientePagina = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior + 1);
  };

  const paginaAnterior = () => {
    setPaginaActual((paginaAnterior) => paginaAnterior - 1);
  };

  const products = productos;

  return (
    <div className="p-0 m-0 d-flex row container-fluid justify-content-center">
      <Carrousel />
      <div>
        <DropdownCategoria categorias={["celulares", "notebooks"]} />
        <ProductList products={products} />
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
