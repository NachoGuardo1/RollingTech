import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { Navegador } from "./componentes/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./hooks/CarritoContext";
import { FavoritosPage } from "./pages";
import { PagoPage } from "./pages/PagoPage";
import { CategoriaProvider } from "./hooks/FiltroContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CategoriaProvider>
          <CarritoProvider>
            <Routes>
              <Route path="/" element={<Navegador />}>
                <Route index element={<HomePage />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="pago" element={<PagoPage />} />
                <Route path="favoritos" element={<FavoritosPage />} />
              </Route>
            </Routes>
          </CarritoProvider>
        </CategoriaProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
