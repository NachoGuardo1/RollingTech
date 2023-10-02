import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";
import Logo from "../../src/assets/img/logotipo-rolling1.png";
import "../styles/nav.css";
import ModalLogin from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faPowerOff,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { authContext } from "../hooks/AuthContext";
import { BtnWhatsapp } from "./BtnWhatsapp";

export const Navegador = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);
  const { logout, loginOk } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky-top head-cont-completo">
        <div className="container-fluid head-cont">
          <div className="row justify-content-between">
            <div className="col-3 my-auto">
              <Link to="/">
                <img src={Logo} alt="RollingTech" width="160" height="70" />
              </Link>
            </div>
            <div className="col-4  my-auto"></div>
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

              <Link to="favoritos" className="btn">
                <FontAwesomeIcon icon={faHeart} color="red" />
              </Link>

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

            <Navbar.Offcanvas
              id="offcanvas-show"
              className="d-lg-none d-xl-none d-xxl-none bg-secondary text-dark w-50"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Rolling Tech</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-lg-none d-xl-none d-xxl-none"></div>
                {usuario === null || usuario.rol === "USER-ROLE" ? (
                  <div className="row d-flex gap-3">
                    <Link
                      to="/"
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none  text-dark"
                    >
                      Inicio
                    </Link>
                    <Link
                      to={"/nosotros"}
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none text-dark link"
                    >
                      Sobre Nosotros
                    </Link>
                    <Link
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none  text-dark "
                    >
                      <BtnWhatsapp />
                    </Link>
                  </div>
                ) : (
                  <div className="row d-flex gap-3">
                    <Link
                      to="/"
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none  text-dark "
                    >
                      Inicio
                    </Link>
                    <Link
                      onClick={mostrarOffcanvas}
                      to={"/nosotros"}
                      className="text-decoration-none text-dark"
                    >
                      Sobre Nosotros
                    </Link>
                    <Link
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none  text-dark "
                    >
                      <BtnWhatsapp />
                    </Link>
                    <Link
                      to={"/admin"}
                      onClick={mostrarOffcanvas}
                      className="text-decoration-none text-dark "
                    >
                      <FontAwesomeIcon icon={faGear} />
                    </Link>
                  </div>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {usuario === null || usuario.rol === "USER-ROLE" ? (
              <div className="d-none d-lg-block mx-auto">
                <Link
                  to="/"
                  onClick={mostrarOffcanvas}
                  className="text-decoration-none text-dark fw-bold mx-3"
                >
                  Inicio
                </Link>
                <Link
                  onClick={mostrarOffcanvas}
                  to="/nosotros"
                  className="text-decoration-none text-dark fw-bold mx-3"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  onClick={mostrarOffcanvas}
                  className="text-decoration-none fw-bold "
                >
                  <BtnWhatsapp />
                </Link>
              </div>
            ) : (
              <div className="d-none d-lg-block mx-auto">
                <Link
                  to="/"
                  onClick={mostrarOffcanvas}
                  className="text-decoration-none text-dark fw-bold mx-3"
                >
                  Inicio
                </Link>
                <Link
                  onClick={mostrarOffcanvas}
                  to="/nosotros"
                  className="text-decoration-none text-dark fw-bold mx-3"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  onClick={mostrarOffcanvas}
                  className="text-decoration-none fw-bold "
                >
                  <BtnWhatsapp />
                </Link>
                <Link
                  to="/admin"
                  onClick={mostrarOffcanvas}
                  className="text-decoration-none text-dark fw-bold mx-3"
                >
                  <FontAwesomeIcon icon={faGear} />
                </Link>
              </div>
            )}

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
              <Link className="btn" to="favoritos">
                <FontAwesomeIcon icon={faHeart} color="red" />
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
