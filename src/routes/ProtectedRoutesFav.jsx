import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
const ProtectedRoutesFav = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario === null) {
    Swal.fire("Debes Loguearte");
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutesFav;
