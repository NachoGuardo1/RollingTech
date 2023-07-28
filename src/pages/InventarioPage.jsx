import React, { useEffect, useState } from "react";
import { FormInventario } from "../componentes/FormInventario";
import { borrarProducto, getProductos } from "../helpers/ApiProductos";
import Swal from "sweetalert2";

export const InventarioPage = () => {
  const [totalProductos, setTotalProductos] = useState(0);
  const [productos, setProductos] = useState([]);

  const limite = 100;
  const [desde, setDesde] = useState(0);
  useEffect(() => {
    traerProductos();
  }, [desde]);
  const eliminarProducto = (productoUid) => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        const nuevosProductos = productos.filter((p) => p.uid !== productoUid);
        setProductos(nuevosProductos);
        borrarProducto(productoUid);
      }
    });
  };
  const editarProducto = (productoUid) => {};
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
              <tr key={producto.uid} className="text-center">
                <td className="text-start">{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(producto.uid)}
                  >
                    X
                  </button>
                  <button className="btn btn-warning mx-2">E</button>
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
