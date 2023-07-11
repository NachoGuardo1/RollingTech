import React, { useState } from "react";

export const FormInventario = () => {
  // state array producto
  const [products, setProducts] = useState([]);
  // state form inputs
  const [productoNombre, setProductoNombre] = useState("");
  const [productoDescripcion, setProductoDescripcion] = useState("");
  const [productoPrecio, setProductoPrecio] = useState("");
  const [productoCategoria, setProductoCategoria] = useState("");
  const [productoImg, setProductoImg] = useState("");

  const CrearProducto = (e) => {
    e.preventDefault();
    // tomar valores y crear nuevo producto
    const productoNuevo = {
      nombre: productoNombre,
      precio: productoPrecio,
      descripcion: productoDescripcion,
      categoria: productoCategoria,
      imagen: productoImg,
    };
    // funcion para guardar producto en el array
    setProducts([...products, productoNuevo]);
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
          className="form-control"
          value={productoNombre}
          onChange={(e) => setProductoNombre(e.target.value)}
          required
        />
        <label className="fw-bold">Descripcion</label>
        <input
          type="text"
          className="form-control"
          value={productoDescripcion}
          onChange={(e) => setProductoDescripcion(e.target.value)}
          required
        />
        <label className="fw-bold">Precio</label>
        <input
          type="number"
          className="form-control"
          value={productoPrecio}
          onChange={(e) => setProductoPrecio(e.target.value)}
          required
        />
        <label className="fw-bold">Categoria</label>
        <input
          type="text"
          className="form-control"
          value={productoCategoria}
          onChange={(e) => setProductoCategoria(e.target.value)}
          required
        />
        <label className="fw-bold">Imagen URL</label>
        <input
          type="text"
          className="form-control"
          value={productoImg}
          onChange={(e) => setProductoImg(e.target.value)}
          required
        />
        <button className="btn btn-success ">Agregar Producto</button>
      </form>
    </div>
  );
};
