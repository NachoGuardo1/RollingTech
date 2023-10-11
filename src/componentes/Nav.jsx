import React, { useContext, useState } from "react";
import { Container, Nav, NavLink, Navbar, Offcanvas } from "react-bootstrap";
import { authContext } from "../hooks/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHeart, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { BtnWhatsapp } from "./BtnWhatsapp";
import ModalLogin from "./ModalLogin";
import { Link } from "react-router-dom";
import { ModalCarrito } from "./ModalCarrito";
import Logo from "../../src/assets/img/logotipo-rolling1.png";

export const Navegador = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const { logout, loginOk } = useContext(authContext);

  return (
    <>
      <div className=" sticky-top">
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container fluid className="justify-content-between d-flex">
            <Navbar.Toggle aria-controls="offcanvas-show" />
            <Navbar.Brand
              href="/"
              className="d-none d-sm-none d-md-none d-lg-block"
            >
              <img
                src={Logo}
                alt="RollingTech"
                width="160"
                height="70"
                className="col-10"
              />
            </Navbar.Brand>

            <Navbar.Offcanvas
              id="offcanvas-show"
              placement="start"
              className="w-75 bg-secondary"
            >
              <Offcanvas.Header closeButton className="bg-dark text-light">
                <Offcanvas.Title id="offcanvas-show" className="text-start">
                  <img
                    src={Logo}
                    alt="RollingTech"
                    width="160"
                    height="70"
                    className="col-9"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="my-auto d-lg-none d-xl-none d-xxl-none ">
                  <NavLink href="/" className="fw-bold">
                    Inicio
                  </NavLink>
                  <NavLink href="nosotros" className="fw-bold">
                    Nosotros
                  </NavLink>
                  <NavLink className="fw-bold">
                    <BtnWhatsapp />
                  </NavLink>
                  {usuario !== null && usuario.rol === "ADMIN-ROLE" ? (
                    <NavLink href="admin" className="">
                      <FontAwesomeIcon icon={faGear} />
                    </NavLink>
                  ) : null}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div>
              {loginOk === true ? (
                <button className="btn btn-sm" onClick={logout}>
                  <FontAwesomeIcon icon={faPowerOff} color="red" />
                </button>
              ) : (
                <ModalLogin />
              )}
              <Link className="btn btn-sm" to={"favoritos"}>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </Link>
              <button className="btn btn-sm">
                <ModalCarrito />
              </button>
            </div>
          </Container>
        </Navbar>

        <div className="container-fluid bg-secondary d-none d-sm-none d-md-none d-lg-block">
          <Nav className="my-auto justify-content-center">
            <NavLink href="/" className="text-dark">
              Inicio
            </NavLink>
            <NavLink href="nosotros" className="text-dark">
              Nosotros
            </NavLink>
            <NavLink className="">
              <BtnWhatsapp />
            </NavLink>
            {usuario !== null && usuario.rol === "ADMIN-ROLE" ? (
              <NavLink href="admin" className="">
                <FontAwesomeIcon icon={faGear} />
              </NavLink>
            ) : null}
          </Nav>
        </div>
      </div>
    </>
  );
};
