import { Navigate } from "react-router-dom";
const ProtectedRoutesAdmin = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario === null || usuario.rol === "USER-ROLE") {
    console.log("error");
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutesAdmin;
