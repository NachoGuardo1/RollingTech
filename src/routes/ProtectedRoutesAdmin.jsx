import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../hooks/AuthContext";

const ProtectedRoutesAdmin = ({ children }) => {
  const { usuarioIn } = useContext(authContext);
  if (usuarioIn === null || usuarioIn.rol === "USER-ROLE") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutesAdmin;
