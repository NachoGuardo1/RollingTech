import React from "react";
import { FormInventario } from "../componentes/FormInventario";
import productos from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const InventarioPage = () => {
  const products = productos;
  return (
    <div className="row gap-2 justify-content-around my-3">
      <div
        className="col-5 table-responsive"
        style={{
          maxHeight: "28rem",
        }}
      >
        <table className="table table-hover table-secondary ">
          <thead className="table-dark">
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
                <td>
                  <button className="btn btn-danger mb-3">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
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
