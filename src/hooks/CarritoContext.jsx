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
  const eliminarFavorito = (itemId) => {
    const nuevosFavoritos = favoritos.filter((i) => i.id !== itemId);
    setFavoritos(nuevosFavoritos);
  };

  const agregarProductos = (item) => {
    Swal.fire({
      title: "¿Estas seguro que quieres agregar este producto?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro!",
    }).then((result) => {
      if (result.isConfirmed) {
        const itemAgregado = carrito.find((i) => i.id === item.id);
        if (!itemAgregado) {
          setCarrito([...carrito, item]);
        } else {
          alert("ya se agrego este item al carrito");
        }
      }
    });
  };
  const eliminarProducto = (productoId) => {
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
        const nuevoCarrito = carrito.filter((p) => p.id !== productoId);
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
    return acumulador + item.precio;
  }, 0);

  const contador = (itemId) => {
    return carrito.reduce((cantidad, i) => {
      if (i.id === itemId) {
        return cantidad + 1;
      }
      return cantidad;
    }, 0);
  };

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
          contador,
        }}
      >
        {children}
      </Carritocontext.Provider>
    </>
  );
};

export { CarritoProvider, Carritocontext };
