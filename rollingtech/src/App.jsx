import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdminPage } from './pages/AdminPage'
import { Navegador } from './componentes/Nav'
import { Error404 } from './pages/ErrorPage'
import { Footer } from './componentes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navegador />}>
          <Route index element={<HomePage />} />
          <Route path='admin' element={<AdminPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
