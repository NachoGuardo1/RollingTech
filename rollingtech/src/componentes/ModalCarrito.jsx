import { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';
import { Carrito } from '../componentes/Carrito';

export const ModalCarrito = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
  <button className='btn btn-warning' onClick={handleShow} style={{
    opacity:'0.7'
  }}>
  <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360'
    width="30"
    height="30"
    className="d-inline-block align-top">       
    </img>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carrito />
        </Modal.Body>

      </Modal>
  </>  )
}