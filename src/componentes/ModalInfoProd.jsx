import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalInfo({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button className="btn btn-primary btn-sm" onClick={handleShow}>
        +

      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{item.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.descripcion}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInfo;
