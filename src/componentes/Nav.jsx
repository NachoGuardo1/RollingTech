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
import "../styles/nav.css";

export const Navegador = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const { logout, loginOk } = useContext(authContext);

  return (
    <>
      <div className=" sticky-top">
        <Navbar className="barra-nav" data-bs-theme="light" expand="lg">
          <Container fluid className="justify-content-between d-flex">
            <Navbar.Toggle aria-controls="offcanvas-show" />

            <Navbar.Brand href="/">
              <img
                src={Logo}
                alt="RollingTech"
                width="100"
                height="50"
                className=" logo-nav"
              />
            </Navbar.Brand>

            <Navbar.Offcanvas
              id="offcanvas-show"
              placement="start"
              className="w-75 barra-nav"
            >
              <Offcanvas.Header closeButton className="barra-nav mb-0">
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
                <Nav className="p-0 d-lg-none d-xl-none d-xxl-none ">
                  <NavLink href="/" style={{ color: "#534b49" }}>
                    Inicio
                  </NavLink>
                  <NavLink href="nosotros" style={{ color: "#534b49" }}>
                    Sobre Nosotros
                  </NavLink>
                  <NavLink>
                    <BtnWhatsapp />
                  </NavLink>
                  {usuario !== null && usuario.rol === "ADMIN-ROLE" ? (
                    <NavLink href="admin">
                      <FontAwesomeIcon icon={faGear} color="#534b49" />
                    </NavLink>
                  ) : null}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div>
              {loginOk === true ? (
                <button className="btn" onClick={logout}>
                  <FontAwesomeIcon icon={faPowerOff} color="red" />
                </button>
              ) : (
                <ModalLogin />
              )}
              <Link className="btn" to={"favoritos"}>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </Link>
              <button className="btn">
                <ModalCarrito />
              </button>
            </div>
          </Container>
        </Navbar>

        <div className="container-fluid bg-secondary d-none d-sm-none d-md-none d-lg-block head-nav">
          <Nav className="my-auto justify-content-center">
            <NavLink href="/" style={{ color: "#534b49" }}>
              Inicio
            </NavLink>
            <NavLink href="nosotros" style={{ color: "#534b49" }}>
              Sobre Nosotros
            </NavLink>
            <NavLink className="">
              <BtnWhatsapp />
            </NavLink>
            {usuario !== null && usuario.rol === "ADMIN-ROLE" ? (
              <NavLink href="admin" className="">
                <FontAwesomeIcon icon={faGear} color="#534b49" />
              </NavLink>
            ) : null}
          </Nav>
        </div>
      </div>
    </>
  );
};
