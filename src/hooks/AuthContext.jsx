import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Carritocontext } from "./CarritoContext";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginOk, setLoginOk] = useState(false);
  const [usuarioIn, setUsuarioIn] = useState(null);
  const navigate = useNavigate();
  const { setCarrito, setFavoritos } = useContext(Carritocontext);

  const login = () => {
    setLoginOk(true);
  };

  useEffect(() => {
    const tokenGuardado = localStorage.getItem("token");
    if (tokenGuardado) {
      setLoginOk(true);
    }
  }, []);

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("carrito");
    localStorage.removeItem("favoritos");
    setCarrito([]);
    setFavoritos([]);
    setLoginOk(false);
    Swal.fire(`Hasta luego ${usuarioIn.nombre}`);
  };

  const guardarUsuario = (datos) => {
    setUsuarioIn(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
  };

  return (
    <authContext.Provider
      value={{ loginOk, login, logout, guardarUsuario, usuarioIn, setLoginOk }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
