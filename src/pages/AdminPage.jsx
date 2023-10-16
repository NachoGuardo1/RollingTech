import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export const AdminPage = () => {
  const mantenimiento = () => {
    Swal.fire("Pagina en mantimiento");
  };

  return (
    <>
      <div className="my-5 container-fluid row gap-4 justify-content-center">
        <Link to="/admin/usuarios" className=" bg-dark text-light col-3  btn">
          Usuarios
        </Link>
        <button
          className=" bg-dark text-light col-3  btn"
          onClick={mantenimiento}
        >
          Ventas
        </button>
        <Link to="/admin/inventario" className=" bg-dark text-light col-3  btn">
          Inventario
        </Link>
        <Outlet />
      </div>
    </>
  );
};
