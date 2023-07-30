import React, { useEffect, useState } from "react";
import {
  actualizarProducto,
  borrarProducto,
  getProductos,
} from "../helpers/ApiProductos";
import Swal from "sweetalert2";
import { crearProducto } from "../helpers/ApiProducto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const InventarioPage = () => {
  // state form inputs
  const [inputNombre, setProductoNombre] = useState("");
  const [inputDescrip, setProductoDescripcion] = useState("");
  const [inputPrecio, setProductoPrecio] = useState("");
  const [inputCategoria, setProductoCategoria] = useState("");
  const [inputImg, setProductoImg] = useState("");
  const [prodEdit, setProdEdit] = useState(null);

  //state productos
  const [totalProductos, setTotalProductos] = useState(0);
  const [productos, setProductos] = useState([]);
  //paginacion
  const limite = 12;
  const [desde, setDesde] = useState(0);

  useEffect(() => {
    traerProductos();
  }, [desde]);

  const resetForm = () => {
    //reset form
    setProductoNombre("");
    setProductoPrecio("");
    setProductoDescripcion("");
    setProductoCategoria("");
    setProductoImg("");
  };
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

    if (resp?.producto) {
      Swal.fire({
        title: "¿Agregar Producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Agregado", "El producto ha sido agregado", "success");
          console.log("Datos guardados exitosamente");
          resetForm();
          traerProductos();
        }
      });
    } else {
      console.error("Error al guardar los datos");
    }
  };
  const traerProductos = async () => {
    const { productos, total } = await getProductos(limite, desde);
    setProductos(productos);
    setTotalProductos(total);
  };

  const guardarValores = (producto) => {
    setProductoNombre(producto.nombre);
    setProductoCategoria(producto.categoria);
    setProductoDescripcion(producto.descrip);
    setProductoImg(producto.img);
    setProductoPrecio(producto.precio);
    setProdEdit(producto);
  };
  const editarProductos = async (e) => {
    e.preventDefault();
    //guardar en datos para pasar a api
    const datos = {
      nombre: inputNombre,
      descrip: inputDescrip,
      precio: inputPrecio,
      categoria: inputCategoria,
      img: inputImg,
    };
    const resp = await actualizarProducto(prodEdit.uid, datos);
    if (resp?.producto) {
      Swal.fire({
        title: "¿Quieres guardar los cambios?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!",
      }).then((result) => {
        if (result.isConfirmed) console.log("Datos actualizados exitosamente");
        resetForm();
        traerProductos();
        setProdEdit(null);
      });
    } else {
      console.error("Error al actualizar los datos");
      alert("Error al guardar los cambios");
    }
  };

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

  return (
    <div className="row  justify-content-around my-3">
      <div
        className="table-responsive col-xl-6 col-lg-6 col-md-9 col-sm-9 "
        style={{
          maxHeight: "28rem",
        }}
      >
        <h3 className="text-center">LISTADO DE PRODUCTOS</h3>
        <table className="table table-secondary table-md table-striped table-hover fw-lighter">
          <thead className="table-dark">
            <tr className="text-center">
              <th className="text-start">Producto</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.uid} className="text-center">
                <td className="text-start">{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(producto.uid)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => guardarValores(producto)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-9 col-sm-9">
        <form>
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
          {prodEdit !== null ? (
            <div className="d-grid">
              <button
                className="btn btn-success mb-3"
                type="submit"
                onClick={editarProductos}
              >
                Editar Producto
              </button>
            </div>
          ) : (
            <div className="d-grid">
              <button className="btn btn-success mb-3" onClick={CrearProducto}>
                Agregar Producto
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
