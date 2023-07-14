export const AdminPage = () => {
  return (
    <>
      <div className="m-5 container-fluid row gap-4 justify-content-center">
        <button className="p-4 bg-dark text-light col-3 text-center btn">
          Usuarios
        </button>
        <button className="p-4 bg-dark text-light col-3 text-center btn">
          Ventas
        </button>
        <button className="p-4 bg-dark text-light col-3 text-center btn">
          Inventario
        </button>
        <button className="p-4 bg-dark text-light col-3 text-center btn">
          Administradores
        </button>
      </div>
    </>
  );
};
