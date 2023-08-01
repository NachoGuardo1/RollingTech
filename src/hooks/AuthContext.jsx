import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginOk, setLoginOk] = useState(false);
  const [usuarioIn, setUsuarioIn] = useState(null);
  const navigate = useNavigate();

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
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("carrito");
    localStorage.removeItem("favoritos");
    navigate("/");
    setLoginOk(false);
    Swal.fire("Sesión Terminada");
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
