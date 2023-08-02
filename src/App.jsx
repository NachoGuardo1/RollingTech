import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  HomePage,
  AdminPage,
  FavoritosPage,
  PagoPage,
  Nosotros,
  InventarioPage,
  UsuariosPage,
} from "./pages";
import { Navegador } from "./componentes/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./hooks/CarritoContext";
import { Footer } from "./componentes/Footer";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoutesAdmin from "./routes/ProtectedRoutesAdmin";
import ProtectedRoutesFav from "./routes/ProtectedRoutesFav";
import "./styles/app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navegador />}>
                <Route index element={<HomePage />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoutesAdmin>
                      <AdminPage />
                    </ProtectedRoutesAdmin>
                  }
                >
                  <Route path="inventario" element={<InventarioPage />} />
                  <Route path="usuarios" element={<UsuariosPage />} />
                </Route>

                <Route path="nosotros" element={<Nosotros />} />
                <Route path="pago" element={<PagoPage />} />
                <Route
                  path="favoritos"
                  element={
                    <ProtectedRoutesFav>
                      <FavoritosPage />
                    </ProtectedRoutesFav>
                  }
                />
              </Route>
            </Routes>
          </AuthProvider>
        </CarritoProvider>
        <Footer>
          <Routes>
            <Route path="/" element={<Footer />}></Route>
          </Routes>
        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
