import React, { useState } from "react";
import { crearProducto } from "../helpers/ApiProductos";

export const FormInventario = () => {
  // state form inputs
  const [inputNombre, setProductoNombre] = useState("");
  const [inputDescrip, setProductoDescripcion] = useState("");
  const [inputPrecio, setProductoPrecio] = useState("");
  const [inputCategoria, setProductoCategoria] = useState("");
  const [inputImg, setProductoImg] = useState("");

  const CrearProducto = async (e) => {
    e.preventDefault();
    //Obtener datos ingresados
    const datos = {
      nombre: inputNombre,
      descrip: inputDescrip,
      precio: inputPrecio,
      categoria: inputCategoria,
      img: inputImg,
    };

    const resp = await crearProducto(datos);

    if (resp?.token) {
      console.log("Datos guardados exitosamente");
    } else {
      console.error("Error al guardar los datos");
    }
    // funcion para formreset
    setProductoNombre("");
    setProductoPrecio("");
    setProductoDescripcion("");
    setProductoCategoria("");
    setProductoImg("");
  };
  return (
    <div>
      <form onSubmit={CrearProducto}>
        <label className="fw-bold">Nombre</label>
        <input
          type="text"
          className="form-control mb-3"
          value={inputNombre}
          onChange={(e) => setProductoNombre(e.target.value)}
          required
        />
        <label className="fw-bold">Descripcion</label>
        <input
          type="text"
          className="form-control mb-3"
          value={inputDescrip}
          onChange={(e) => setProductoDescripcion(e.target.value)}
          required
        />
        <label className="fw-bold">Precio</label>
        <input
          type="number"
          className="form-control mb-3"
          value={inputPrecio}
          onChange={(e) => setProductoPrecio(e.target.value)}
          required
        />
        <label className="fw-bold">Categoria</label>
        <input
          type="text"
          className="form-control mb-3"
          value={inputCategoria}
          onChange={(e) => setProductoCategoria(e.target.value)}
          required
        />
        <label className="fw-bold">Imagen URL</label>
        <input
          type="text"
          className="form-control mb-3"
          value={inputImg}
          onChange={(e) => setProductoImg(e.target.value)}
          required
        />
        <div className="d-grid">
          <button className="btn btn-success mb-3">Agregar Producto</button>
        </div>
        <div className="d-grid">
          <button className="btn btn-success mb-3">Editar Producto</button>
        </div>
      </form>
    </div>
  );
};
