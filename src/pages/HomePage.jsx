import React from "react";
import { Carrousel } from "../componentes/Carrousel";
import ProductList from "../componentes/ProductList";

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
