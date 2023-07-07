import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap'
import { Footer } from './Footer'

export const Navegador = () => {
  return <>
    
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <img
            alt=""
            src="https://w7.pngwing.com/pngs/568/379/png-transparent-technology-computer-icons-technology-electronics-text-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
          />{' '}
        <Navbar.Brand href="#">Rolling Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-2">|</Nav>
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Destacado</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
            <Nav.Link href="#action4">Favoritos</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-5" variant="outline-ligth">Search</Button>
          </Form>
          <Nav>
            <Nav.Link className="me-2" href="#action5">Ingresar</Nav.Link>
            <Nav.Link className="me-3" href="#action6">Mi carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Footer/>
  </>

}
