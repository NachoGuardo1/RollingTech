import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const AdminPage = () => {
  const mantenimiento = () => {
    Swal.fire("Pagina en mantimiento");
  };

  return (
    <>
      <div className="my-5 container-fluid row gap-4 justify-content-center">
        <Link
          to="/admin/usuarios"
          className=" col-3  btn"
          style={{ background: "linear-gradient(to bottom, #b3a5a2, #8b7b77)" }}
        >
          Usuarios
        </Link>
        <button
          className=" col-3  btn"
          onClick={mantenimiento}
          style={{ background: "linear-gradient(to bottom, #b3a5a2, #8b7b77)" }}
        >
          Ventas
        </button>
        <Link
          to="/admin/inventario"
          className=" col-3  btn"
          style={{ background: "linear-gradient(to bottom, #b3a5a2, #8b7b77)" }}
        >
          Inventario
        </Link>
        <Outlet />
      </div>
    </>
  );
};
