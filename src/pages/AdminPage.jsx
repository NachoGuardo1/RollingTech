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
          className="p-4 bg-dark text-light col-3 text-center btn"
        >
          Usuarios
        </Link>
        <button
          className="p-4 bg-dark text-light col-3 text-center btn"
          onClick={mantenimiento}
        >
          Ventas
        </button>
        <Link
          to="/admin/inventario"
          className="p-4 bg-dark text-light col-3 text-center btn"
        >
          Inventario
        </Link>
        <Outlet />
      </div>
    </>
  );
};
