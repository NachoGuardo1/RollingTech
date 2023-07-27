import React, { useState } from "react";

import { crearProducto } from "../helpers/ApiProducto";


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
      img: inputImg
    };

    const resp = await crearProducto(datos);
    
        
    if (resp?.producto) {
      console.log("Datos guardados exitosamente");
    }else{
      console.error("Error al guardar los datos");
    }
    
/*     try {
      const response = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          descrip,
          precio,
          categoria,
          img,
        }),
      });

      if (response.ok) {
        console.log("Datos guardados exitosamente");
        // Realizar alguna acción después de guardar exitosamente
      } else {
        console.error("Error al guardar los datos");
      }
    } catch (error) {
      console.error("Error en la comunicación con el servidor:", error);
    }    
 */    
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
