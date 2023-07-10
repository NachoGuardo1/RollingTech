import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";

import Logo from '../../src/assets/img/logotipo-rolling1.png';



export const Navegador = () => {
  return (
    <>
      <Navbar expand="md" bg="primary" data-bs-theme="primary" sticky="top">
        <Container fluid>
          <Navbar.Brand>

            <Link to="/" className="text-light text-decoration-none">
              <img
                alt=""
                src={ Logo }
                width="170"
                height="70"
                className="d-inline-block align-top"
              />{" "}

            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="d-flex gap-3 ms-auto">
              <Link to="admin" className="text-decoration-none text-light">
                Admin Page
              </Link>
              <Link to="favoritos" className="text-decoration-none text-light">
                Fav page
              </Link>
              <Link to="/" className="text-decoration-none  text-light">
                Home Page
              </Link>
              <Link className="text-decoration-none  text-light">
                <ModalCarrito />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Outlet />
    </>
  );
};
