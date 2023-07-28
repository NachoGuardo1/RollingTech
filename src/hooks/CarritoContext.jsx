import React, { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";
const Carritocontext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavoritos = (item) => {
    setFavoritos([...favoritos, item]);
  };
  const eliminarFavorito = (itemUid) => {
    const nuevosFavoritos = favoritos.filter((i) => i.uid !== itemUid);
    setFavoritos(nuevosFavoritos);
  };

  const agregarProductos = (item) => {
    const itemAgregado = carrito.find((i) => i.uid === item.uid);
    if (itemAgregado) {
      const nuevoCarrito = carrito.map((producto) => {
        if (producto.uid === item.uid) {
          return { ...producto, cantidad: producto.cantidad + 1 };
        }
        return producto;
      });

      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...item, cantidad: 1 }]);
    }
  };

  const restarProductos = (item) => {
    const itemSeleccionado = carrito.find((i) => i.uid === item.uid);
    if (itemSeleccionado) {
      const nuevoCarrito = carrito.map((producto) => {
        if (producto.uid === item.uid && producto.cantidad > 1) {
          return { ...producto, cantidad: producto.cantidad - 1 };
        }
        return producto;
      });

      setCarrito(nuevoCarrito);
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
        const nuevoCarrito = carrito.filter((p) => p.uid !== productoUid);
        setCarrito(nuevoCarrito);
      }
    });
  };
  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar todos los productos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Eliminados",
          "Todos los productos han sido eliminados",
          "success"
        );
        setCarrito([]);
      }
    });
  };
  const total = carrito.reduce((acumulador, item) => {
    return acumulador + item.precio * item.cantidad;
  }, 0);

  return (
    <>
      <Carritocontext.Provider
        value={{
          carrito,
          agregarProductos,
          eliminarProducto,
          vaciarCarrito,
          total,
          agregarFavoritos,
          favoritos,
          eliminarFavorito,
          restarProductos,
        }}
      >
        {children}
      </Carritocontext.Provider>
    </>
  );
};

export { CarritoProvider, Carritocontext };
