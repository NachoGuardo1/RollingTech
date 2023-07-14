import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";
import { Footer } from "./Footer";

export const Navegador = () => {
  return (
    <>
      <Navbar expand="md" bg="dark" data-bs-theme="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/568/379/png-transparent-technology-computer-icons-technology-electronics-text-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="/" className="text-light text-decoration-none">
              Rolling Tech
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
      {/* <Footer /> */}
      <Outlet />
    </>
  );
};
