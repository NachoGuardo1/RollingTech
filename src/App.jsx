import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { Navegador } from "./componentes/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./hooks/CarritoContext";
import { FavoritosPage } from "./pages";
import { PagoPage } from "./pages/PagoPage";
import { CategoriaProvider } from "./hooks/FiltroContext";
import { Footer } from "./componentes/Footer";
import { InventarioPage } from "./pages/InventarioPage";
import { Nosotros } from "./pages/Nosotros";
import { UsuariosPage } from "./pages/UsuariosPage";
import { AuthProvider } from "./hooks/AuthContext";
// import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CategoriaProvider>
            <CarritoProvider>
              <Routes>
                <Route path="/" element={<Navegador />}>
                  <Route index element={<HomePage />} />

                  <Route path="admin">
                    <Route index element={<AdminPage />} />
                    <Route path="inventario" element={<InventarioPage />} />
                    <Route path="usuarios" element={<UsuariosPage />} />
                    <Route path="ventas" />
                    <Route path="administradores" />
                  </Route>

                  <Route path="nosotros" element={<Nosotros />} />
                  <Route path="pago" element={<PagoPage />} />
                  <Route path="favoritos" element={<FavoritosPage />} />
                </Route>
              </Routes>
            </CarritoProvider>
          </CategoriaProvider>
        </AuthProvider>
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
