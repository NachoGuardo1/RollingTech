import React from "react";
import { Productos } from "../componentes/Productos";
import Slider from "../componentes/Carrousel";

export const HomePage = () => {
  return (
    <div className="p-0 m-0 d-flex row container-fluid justify-content-center">
      <Slider />
      <Productos />
    </div>
  );
};
