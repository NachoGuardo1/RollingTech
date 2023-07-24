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

function App() {
//Estados para manejar login y datos de usuario
const [login, setLogin] = useState(false);
const [user, setUser] = useState(null);

//Función para guardar datos del usuario autenticado
const guardarUsuario = (datos) => {
  setUser(datos);
};

//Función cuando inicia sesión
const iniciarSesion = () => {
  setLogin(true);
};

//Función cuando cierra sesión
const cerrarSesion = () => {
  setLogin(false);
};  

  return (
    <>
{/*       <BrowserRouter>
        <CategoriaProvider>
          <CarritoProvider>
            <Routes>
              <Route path="/" element={<Navegador />}>
                <Route index element={<HomePage />} />
                <Route path="admin">
                  <Route index element={<AdminPage />} />
                  <Route path="inventario" element={<InventarioPage />} />
                  <Route path="usuarios" />
                  <Route path="ventas" />
                  <Route path="administradores" />
                </Route>
                <Route path="pago" element={<PagoPage />} />
                <Route path="favoritos" element={<FavoritosPage />} />
              </Route>
            </Routes>
          </CarritoProvider>
        </CategoriaProvider>
        <Footer>
          <Routes>
            <Route path="/" element={<Footer />}></Route>
          </Routes>
        </Footer>
      </BrowserRouter>
 */}   
     <BrowserRouter>
     <CategoriaProvider>
      <CarritoProvider>
        <Routes>
          <Route path="/" element={<Navegador 
          iniciarSesion={iniciarSesion}
          guardarUsuario={guardarUsuario}
          />}>
            <Route path="/HomePage" element={<HomePage/> } />
            <Route path="pago" element={<PagoPage />} />
            <Route path="favoritos" element={<FavoritosPage />} />
            <Route path="admin">
                  <Route index element={<AdminPage />} />
                  <Route path="inventario" element={<InventarioPage />} />
                  <Route path="usuarios" />
                  <Route path="ventas" />
                  <Route path="administradores" />
                </Route>


          </Route>
        </Routes>
      </CarritoProvider>
      </CategoriaProvider>
    </BrowserRouter>

 
  </>
  );
}

export default App;
