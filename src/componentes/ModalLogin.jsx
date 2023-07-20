import React,{ useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormLogin } from "../componentes/FormLogin";


const ModalLogin =({show,handleClose,iniciarSesion,guardarUsuario}) =>{


return (


     <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Ingresar con Email y contraseña</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
        <FormLogin 
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
        />   
      </div>
    </Modal.Body>
  </Modal> 

  
);

};

export default ModalLogin;