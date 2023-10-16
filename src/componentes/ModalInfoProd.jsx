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
        <Modal.Body>
          <div className="container-fluid row">
            <img className="col-5" src={item.img} style={{ height: "10rem" }} />
            <aside className="my-auto col-6">
              <p>{item.descrip}</p>
            </aside>
            <p className="blockquote-footer text-end">3 cuotas sin interes</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInfo;
