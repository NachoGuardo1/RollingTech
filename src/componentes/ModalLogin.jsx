import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormLogin } from "../componentes/FormLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ModalLogin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [tituloModal, setTituloModal] = useState(
    "Ingresar con email y contraseña"
  );
  const tituloRegister = () => setTituloModal("Registro");
  const tituloLogin = () => setTituloModal("Ingresar con email y contraseña");
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <>
      <button className="btn btn-sm" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser} color="blue" />
      </button>
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tituloModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FormLogin
              tituloLogin={tituloLogin}
              tituloRegister={tituloRegister}
              handleClose={handleClose}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLogin;
