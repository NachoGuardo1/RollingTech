import { useNavigate } from "react-router-dom";
export const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-5 container-fluid row gap-4 justify-content-center">
        <button
          className="p-4 bg-dark text-light col-3 text-center btn"
          onClick={() => navigate("/admin/usuarios")}
        >
          Usuarios
        </button>
        <button
          className="p-4 bg-dark text-light col-3 text-center btn"
          onClick={() => navigate("/admin/ventas")}
        >
          Ventas
        </button>
        <button
          className="p-4 bg-dark text-light col-3 text-center btn"
          onClick={() => navigate("/admin/inventario")}
        >
          Inventario
        </button>
        <button
          className="p-4 bg-dark text-light col-3 text-center btn"
          onClick={() => navigate("/admin/administradores")}
        >
          Administradores
        </button>
      </div>
    </>
  );
};
