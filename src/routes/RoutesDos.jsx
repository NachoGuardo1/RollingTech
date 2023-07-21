import { Routes, Route } from "react-router-dom";
import { Navegador } from "../componentes/Nav";
import { AdminPage } from "../pages";
import { FavoritosPage } from "../pages";
import { PagoPage } from "../pages";
import { HomePage } from "../pages";
import { Error404 } from "../pages/ErrorPage";

import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      <Navegador cerrarSesion={cerrarSesion} user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/pago" element={<PagoPage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminPage />
            </ProtectedRoutesAdmin>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FooterApp />
    </>
  );
};

export default RoutesDos;
