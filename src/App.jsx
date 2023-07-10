import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { Navegador } from "./componentes/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./hooks/CarritoContext";

import { Footer } from "./componentes/Footer";

import { FavoritosPage } from "./pages";
import { PagoPage } from "./pages/PagoPage";


function App() {
  return (
    <>
      <BrowserRouter>
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
