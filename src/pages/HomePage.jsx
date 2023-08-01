import React from "react";
import { Carrousel } from "../componentes/Carrousel";
import { useState } from "react";
import Paginacion from "../componentes/Paginacion";
import ProductList from "../componentes/ProductList";
import { DropdownCategoria } from "../componentes/DropdownCategoria";

export const HomePage = () => {
  return (
    <div className="p-0 m-0 d-flex row container-fluid justify-content-center">
      <Carrousel />
      <div>
        <ProductList />
      </div>
    </div>
  );
};
