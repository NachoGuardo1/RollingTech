import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalInfo({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn btn-sm"
        onClick={handleShow}
        style={{
          maxHeight: "31px",
        }}
      >
        <FontAwesomeIcon icon={faPlus} color="blue" />
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{item.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Descripcion: {item.descrip}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInfo;
