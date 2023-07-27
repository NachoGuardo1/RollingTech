import React, { useState } from "react";
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

export const Navegador = ({ guardarUsuario }) => {
  const [mostrarOffcanvas, setMostrarOffcanvas] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const favPage = () => {
    if (login === true) {
      navigate("/favoritos");
    } else {
      Swal.fire("Debes logearte");
    }
  };

  const iniciarSesion = () => {
    setLogin(true);
  };

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        setLogin(false);
      }
    });
  };

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
                <button className="btn  mx-2" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className="d-flex gap-1 justify-content-end col-2  my-auto">
              <Link className="text-decoration-none  my-auto">
                {login === true ? (
                  <button className="btn" onClick={cerrarSesion}>
                    <FontAwesomeIcon icon={faPowerOff} color="red" />
                  </button>
                ) : (
                  <ModalLogin
                    iniciarSesion={iniciarSesion}
                    guardarUsuario={guardarUsuario}
                  />
                )}
              </Link>

              <button className="btn" onClick={favPage}>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </button>

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

            <Navbar.Brand className="  d-lg-none d-xl-none d-xxl-none ">
              <Link to="/">
                <img
                  src={Logo}
                  alt="RollingTech"
                  width="140"
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
                      <button className="btn  mx-2" type="submit">
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
                  <Link
                    to="/nosotros"
                    className="text-decoration-none  text-dark"
                  >
                    Sobre Nosotros
                  </Link>
                  {/* <Link to="/contacto" className="text-decoration-none  text-dark">
                    Contacto
                  </Link> */}
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="d-flex  col-xs-2 col-sm-2 col-md-2 justify-content-end my-auto d-lg-none d-xl-none d-xxl-none ">
              <Link className="text-decoration-none my-auto">
                <ModalLogin
                  iniciarSesion={iniciarSesion}
                  guardarUsuario={guardarUsuario}
                />
              </Link>
              <button className="btn" onClick={favPage}>
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
