import React, { useEffect, useState } from "react";
import { FormInventario } from "../componentes/FormInventario";
import { getProductos } from "../helpers/ApiProductos";

export const InventarioPage = () => {
  const [totalProductos, setTotalProductos] = useState(0);
  const [productos, setProductos] = useState([]);

  const limite = 100;
  const [desde, setDesde] = useState(0);
  useEffect(() => {
    traerProductos();
  }, [desde]);

  const traerProductos = async () => {
    const { productos, total } = await getProductos(limite, desde);
    setProductos(productos);
    setTotalProductos(total);
  };
  return (
    <div className="row gap-2 justify-content-around my-3">
      <div
        className="table-responsive"
        style={{
          maxHeight: "28rem",
        }}
      >
        <table className="table table-dark table-md table-striped  fw-lighter">
          <thead className="table-danger">
            <tr className="text-center">
              <th className="text-start">Producto</th>
              <th>Precio total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto._id} className="text-center">
                <td className="text-start">{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>
                  <button className="btn btn-danger">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormInventario />
    </div>
  );
};
