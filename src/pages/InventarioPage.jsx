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
  const limite = 100;
  const [desde, setDesde] = useState(0);

  useEffect(() => {
    traerProductos();
  }, [desde]);

  function primeraLetraMayus(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  const resetForm = () => {
    //reset form
    setProductoNombre("");
    setProductoPrecio("");
    setProductoDescripcion("");
    setProductoCategoria("");
    setProductoImg("");
  };

  const [error, setError] = useState("");

  const nombreRegex = /^[a-zA-Z]{6,18}$/;
  const descripcionRegex = /^[a-zA-Z]{6,30}$/;

  const CrearProducto = async (e) => {
    e.preventDefault();
    setError("");

    const datos = {
      nombre: inputNombre,
      descrip: inputDescrip,
      precio: inputPrecio,
      categoria: inputCategoria,
      img: inputImg,
    };

    if (!nombreRegex.test(inputNombre)) {
      setError("El nombre debe contener entre 6 y 18 carateres");
      return;
    }
    if (!descripcionRegex.test(inputDescrip)) {
      setError("La descripcion debe contener entre 6 y 30 carateres");
      return;
    }
    if (inputPrecio <= 0) {
      setError("El precio debe ser mayor a $1");
      return;
    }
    if (inputCategoria === "") {
      setError("Debe seleccionar una categoria");
    }
    if (inputImg === "") {
      setError("Debe ingresar una url con la imagen del producto");
      return;
    }

    const resp = await crearProducto(datos);

    if (resp?.producto) {
      Swal.fire("Producto agregado");
      resetForm();
      traerProductos();
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
    setError("");
    //guardar en datos para pasar a api
    const datos = {
      nombre: inputNombre,
      descrip: inputDescrip,
      precio: inputPrecio,
      categoria: inputCategoria,
      img: inputImg,
    };

    if (!nombreRegex.test(inputNombre)) {
      setError("El nombre debe contener entre 6 y 18 carateres");
      return;
    }
    if (!descripcionRegex.test(inputDescrip)) {
      setError("La descripcion debe contener entre 6 y 30 carateres");
      return;
    }
    if (inputPrecio <= 0) {
      setError("El precio debe ser mayor a $1");
      return;
    }
    if (inputCategoria === "") {
      setError("Debe seleccionar una categoria");
    }
    if (inputImg === "") {
      setError("Debe ingresar una url con la imagen del producto");
      return;
    }

    const resp = await actualizarProducto(prodEdit.uid, datos);
    if (resp?.producto) {
      Swal.fire("Cambios Guardados");
      resetForm();
      traerProductos();
      setProdEdit(null);
    } else {
      console.error("Error al actualizar los datos");
      alert("Error al guardar los cambios");
    }
  };

  const eliminarProducto = (productoUid) => {
    const nuevosProductos = productos.filter((p) => p.uid !== productoUid);
    setProductos(nuevosProductos);
    borrarProducto(productoUid);
  };

  const validarEliminacion = (productoUid) => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar producto",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El producto se eliminó", "success");
        eliminarProducto(productoUid);
      }
    });
  };

  return (
    <div className="row  justify-content-around my-3">
      <h3 className="text-center text-light mb-3">LISTADO DE PRODUCTOS</h3>

      <div
        className="table-responsive col-xl-6 col-lg-6 col-md-10 col-sm-10 mb-4 "
        style={{
          maxHeight: "28rem",
        }}
      >
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
                    className="btn btn-sm btn-danger m-1"
                    onClick={() => validarEliminacion(producto.uid)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button
                    className="btn btn-sm btn-warning "
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
          <label className="fw-bold mb-1">Nombre</label>
          <input
            type="text"
            className="form-control mb-3"
            value={inputNombre}
            onChange={(e) =>
              setProductoNombre(primeraLetraMayus(e.target.value))
            }
            required
          />
          <label className="fw-bold mb-1">Descripcion</label>
          <input
            type="text"
            className="form-control mb-3"
            value={inputDescrip}
            onChange={(e) =>
              setProductoDescripcion(primeraLetraMayus(e.target.value))
            }
            required
          />
          <label className="fw-bold mb-1">Precio</label>
          <input
            type="number"
            className="form-control mb-3"
            value={inputPrecio}
            onChange={(e) => setProductoPrecio(e.target.value)}
            required
          />
          <label htmlFor="selectCategoria" className="fw-bold mb-1">
            Categorias
          </label>
          <select
            className="form-control mb-3"
            id="selectCategoria"
            value={inputCategoria}
            onChange={(e) => setProductoCategoria(e.target.value)}
          >
            <option value="">Seleccione la categoria</option>
            <option value="CELULARES">Celulares</option>
            <option value="TELEVISORES">Televisores</option>
            <option value="TABLETS">Tablets</option>
            <option value="NOTEBOOKS">Notebooks</option>
            <option value="CONSOLAS">Consolas</option>
          </select>
          <label className="fw-bold mb-1">Imagen URL</label>
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
              <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

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
