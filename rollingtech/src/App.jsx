import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { Navegador } from "./componentes/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./hooks/CarritoContext";
import { CarritoPage } from "./pages/CarritoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Routes>
            <Route path="/" element={<Navegador />}>
              <Route index element={<HomePage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="carrito" element={<CarritoPage />} />
            </Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
