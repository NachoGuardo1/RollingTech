import React, { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";
const Carritocontext = createContext();
const CarritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
const FavoritosLocal = JSON.parse(localStorage.getItem("favoritos")) || [];

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(CarritoLocal);
  const [favoritos, setFavoritos] = useState(FavoritosLocal);

  const agregarFavoritos = (item) => {
    const nuevosFavoritos = [...favoritos, item];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };
  const eliminarFavorito = (itemUid) => {
    const nuevosFavoritos = favoritos.filter((i) => i.uid !== itemUid);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
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
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    } else {
      const nuevoCarrito = [...carrito, { ...item, cantidad: 1 }];
      setCarrito(nuevoCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
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
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
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
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
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
        localStorage.removeItem("carrito");
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
          setCarrito,
          agregarProductos,
          eliminarProducto,
          vaciarCarrito,
          total,
          agregarFavoritos,
          favoritos,
          eliminarFavorito,
          restarProductos,
          setFavoritos,
        }}
      >
        {children}
      </Carritocontext.Provider>
    </>
  );
};

export { CarritoProvider, Carritocontext };
