import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginOk, setLoginOk] = useState(false);
  const [usuarioIn, setUsuarioIn] = useState(null);

  const login = () => {
    setLoginOk(true);
  };
  const logout = () => {
    setLoginOk(false);
    Swal.fire("Se cerro sesion");
  };
  const guardarUsuario = (datos) => {
    setUsuarioIn(datos);
  };

  return (
    <authContext.Provider
      value={{ loginOk, login, logout, guardarUsuario, usuarioIn }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
