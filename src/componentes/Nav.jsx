import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";
import Logo from "../../src/assets/img/logotipo-rolling1.png";
import "../styles/nav.css";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { authContext } from "../hooks/AuthContext";

export const Navegador = () => {
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);
  const { login, logout, usuarioIn, loginOk } = useContext(authContext);
  const navigate = useNavigate();

  const isloginOk = () => {
    if (loginOk === true) {
      navigate("/favoritos");
    } else {
      Swal.fire("Debes estar logeado");
    }
  };
  const isAdmin = () => {
    if (usuarioIn === null || usuarioIn.rol === "USER-ROLE") {
      Swal.fire("No tienes los permisos necesarios");
    } else {
      navigate("/admin");
    }
  };

  return (
    <>
      <div className="sticky-top">
        <div className="container-fluid head-cont">
          <div className="row justify-content-between">
            <div className="col-3 my-auto">
              <Link to="/">
                <img src={Logo} alt="RollingTech" width="160" height="70" />
              </Link>
            </div>
            <div className="col-4  my-auto">
              <form className="d-flex" role="search">
                <input
                  type="search"
                  placeholder="Buscar"
                  className="form-control form-sm"
                />
                <button className="btn  mx-2" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className="d-flex gap-1 justify-content-end col-2  my-auto">
              <Link className="text-decoration-none  my-auto">
                {loginOk === true ? (
                  <button className="btn" onClick={logout}>
                    <FontAwesomeIcon icon={faPowerOff} color="red" />
                  </button>
                ) : (
                  <ModalLogin />
                )}
              </Link>

              <button className="btn" onClick={isloginOk}>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </button>

              <Link className="text-decoration-none text-light ">
                <ModalCarrito />
              </Link>
            </div>
          </div>
        </div>
        <Navbar className="head-cont-nav " expand="lg">
          <Container fluid className="px-0">
            <Navbar.Toggle
              aria-controls="offcanvas-show"
              show={mostrarOffcanvas}
              onClick={() => setMostrarOffcanvas(true)}
              className="ms-2"
            />

            <Navbar.Brand className="d-lg-none d-xl-none d-xxl-none ">
              <Link to="/">
                <img
                  src={Logo}
                  alt="RollingTech"
                  width="130"
                  height="60"
                  className="logo-nav"
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas id="offcanvas-show">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Rolling Tech</Offcanvas.Title>
              </Offcanvas.Header>
              <div className="d-flex row gap-3 mx-auto cambio-direc">
                <div className="d-lg-none d-xl-none d-xxl-none">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control form-sm"
                      type="search"
                      placeholder="Buscar"
                    />
                    <button className="btn  mx-2" type="submit">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </form>
                </div>
                <button
                  onClick={isAdmin}
                  className="text-decoration-none text-dark btn"
                >
                  Admin Page
                </button>
                <Link to="/" className="text-decoration-none  text-dark ">
                  Home Page
                </Link>
                <Link
                  to="/nosotros"
                  className="text-decoration-none  text-dark "
                >
                  Sobre Nosotros
                </Link>
              </div>
            </Navbar.Offcanvas>
            <div className="d-flex  justify-content-end col-2 my-auto d-lg-none d-xl-none d-xxl-none ">
              <Link className="text-decoration-none  my-auto">
                {loginOk === true ? (
                  <button className="btn" onClick={logout}>
                    <FontAwesomeIcon icon={faPowerOff} color="red" />
                  </button>
                ) : (
                  <ModalLogin />
                )}
              </Link>
              <button className="btn" onClick={isloginOk}>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </button>
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
