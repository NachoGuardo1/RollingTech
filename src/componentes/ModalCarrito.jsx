import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Carrito } from "../componentes/Carrito";
import { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";
import "../styles/boton-carrito.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
      <button className="btn px-0 boton-carrito" onClick={handleShow}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="img-carrito"
          color="black"
        />
        <div className="texto-carrito">{mostrarCantidad && carrito.length}</div>
      </button>

      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ background: "linear-gradient(to bottom, #b3a5a2, #8b7b77)" }}
        >
          <Modal.Title className="text-dark">Mi carrito:</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="p-1 d-flex justify-content-center"
          style={{
            background: "linear-gradient(to bottom, #f2efee, #d5cecc)",
          }}
        >
          {carrito.length === 0 ? (
            <h5 className="text-center" style={{ color: "#534b49" }}>
              No hay productos en el carrito
            </h5>
          ) : (
            <Carrito handleClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
