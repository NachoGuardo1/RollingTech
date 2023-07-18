import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { ModalCarrito } from "./ModalCarrito";
import Logo from '../../src/assets/img/logotipo-rolling1.png'
import "../styles/nav.css";

export const Navegador = () => {
  return (
    <>
    <div className="container-fluid head-cont">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-3" >
        <Link to="/">
          <img src={ Logo } 
          alt="RollingTech"
          width="220"
          height="100"/>
        </Link>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-5 mt-4">
            <form className="d-flex" role="search">
              <input
                className="head-form"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn head-btn mx-2" type="submit">
                Buscar
              </button>
            </form>
        </div>
      </div>
    </div>
      <Navbar className="head-cont" expand="md" sticky="top">
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
          <div>
            <form className="d-flex" role="search">
              <input
                className="head-form"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn head-btn mx-2" type="submit">
                Buscar
              </button>
            </form>
        </div>
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
