import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";
import Logo from "../../src/assets/img/logotipo-rolling1.png";
import "../styles/nav.css";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export const Navegador = ({ iniciarSesion, guardarUsuario }) => {
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  return (
    <>
      <div className="sticky-top">
        <div className="container-fluid head-cont">
          <div className="row justify-content-between">
            <div className="col-3 my-auto">
              <Link to="/">
                <img src={Logo} alt="RollingTech" width="180" height="80" />
              </Link>
            </div>
            <div className="col-6  my-auto">
              <form className="d-flex" role="search">
                <input
                  type="search"
                  placeholder="Buscar"
                  className="form-control form-sm"
                />
                <button className="btn btn-light mx-2" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className="d-flex gap-1 justify-content-end col-2  my-auto">
              <Link className="text-decoration-none text-light my-auto">
                <button className="btn btn-primary" onClick={handleShow}>
                  <FontAwesomeIcon icon={faUser} />
                  <ModalLogin
                    show={showLogin}
                    handleClose={handleClose}
                    iniciarSesion={iniciarSesion}
                    guardarUsuario={guardarUsuario}
                  />
                </button>
              </Link>
              <Link to="favoritos" className="text-decoration-none my-auto">
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </Link>
              <Link className="text-decoration-none text-light ">
                <ModalCarrito />
              </Link>
            </div>
          </div>
        </div>
        <Navbar className="head-cont-nav " expand="lg">
          <Container fluid>
            <Navbar.Toggle
              aria-controls="offcanvas-show"
              show={mostrarOffcanvas}
              onClick={() => setMostrarOffcanvas(true)}
            />

            <Navbar.Brand className=" d-lg-none d-xl-none d-xxl-none ">
              <Link to="/">
                <img
                  src={Logo}
                  alt="RollingTech"
                  width="150"
                  height="70"
                  className="logo-nav"
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas id="offcanvas-show">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Rolling Tech</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-flex gap-3 mx-auto row">
                  <div className="d-lg-none d-xl-none d-xxl-none ">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control form-sm"
                        type="search"
                        placeholder="Buscar"
                      />
                      <button className="btn btn-light mx-2" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </form>
                  </div>
                  <Link to="admin" className="text-decoration-none text-dark">
                    Admin Page
                  </Link>
                  <Link to="/" className="text-decoration-none  text-dark">
                    Home Page
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="d-flex gap-1 justify-content-end col-2 my-auto d-lg-none d-xl-none d-xxl-none ">
              <Link className="text-decoration-none text-light my-auto">
                <button className="btn btn-primary " onClick={handleShow}>
                  <ModalLogin
                    showLogin={showLogin}
                    handleClose={handleClose}
                    iniciarSesion={iniciarSesion}
                    guardarUsuario={guardarUsuario}
                  />
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </Link>
              <Link to="favoritos" className="text-decoration-none my-auto">
                <button className="btn btn-danger ">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </Link>
              <Link className="text-decoration-none text-light ">
                <ModalCarrito />
              </Link>
            </div>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
};
