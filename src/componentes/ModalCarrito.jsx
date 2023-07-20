import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Carrito } from "../componentes/Carrito";
import { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import "../styles/boton-carrito.css";

export const ModalCarrito = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { carrito } = useContext(Carritocontext);

  const [mostrarCantidad, setMostrarCantidad] = useState(true);

  useEffect(() => {
    if (carrito.length > 0) {
      setMostrarCantidad(true);
    } else {
      setMostrarCantidad(false);
    }
  });
  return (
    <>
      <button
        className="btn btn-secondary btn-sm row mx-0 px-1 boton-carrito"
        onClick={handleShow}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360"
          width="10"
          height="28"
          className="img-carrito"
        ></img>
        <div className="texto-carrito">{mostrarCantidad && carrito.length}</div>
      </button>

      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-1 d-flex justify-content-center">
          {carrito.length === 0 ? (
            <h5 className="text-center">No hay productos en el carrito</h5>
          ) : (
            <Carrito />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
