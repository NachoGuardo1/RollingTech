import {  useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-primary' onClick={handleShow}>
        + INFO
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <h2>Descripcion Producto</h2>
        </Modal.Header>

      </Modal>
    </>
  );
}

export default ModalInfo;