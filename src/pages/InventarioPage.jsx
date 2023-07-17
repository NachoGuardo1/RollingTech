import React from "react";
import { FormInventario } from "../componentes/FormInventario";
import productos from "../data/data";

export const InventarioPage = () => {
  const products = productos;
  return (
    <div className="row gap-2 justify-content-around my-3">
      <div
        className="col-5 table-responsive"
        style={{
          maxHeight: "25rem",
        }}
      >
        <table className="table table-hover table-secondary ">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-6">
        <FormInventario />
      </div>
    </div>
  );
};
