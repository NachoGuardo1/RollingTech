import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormLogin } from "../componentes/FormLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ModalLogin = ({ iniciarSesion, guardarUsuario }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser} color="blue" />
      </button>
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar con Email y contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FormLogin
              handleClose={handleClose}
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
            />
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default ModalLogin;
