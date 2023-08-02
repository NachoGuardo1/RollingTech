//import React, { useRef } from 'react';
import React, { useState } from "react";
import "../styles/contacto.css";
import Logo from "../../src/assets/img/logotipo-rolling1.png";
import Swal from "sweetalert2";

//import emailjs from '@emailjs/browser';


export const Contacto = () => {
  //  const form = useRef();

  const [inputCorreo, setInputCorreo] = useState("");
  const [inputNombre, setInputNombre] = useState("");
  const [inputMensaje, setInputMensaje] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();
  
      Swal.fire("Tu consulta fue enviada.");

      setInputCorreo("");
      setInputNombre("");
      setInputMensaje("");


    /*  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });*/
    }
  

//    Swal.fire("Tu consulta fue enviada.");

      
      
      return (
        <div className="p-0 m-0 d-flex row container-fluid justify-content-center">
            <div
                className="col-xl-5 col-lg-5 col-md-9 col-sm-9"
                style={{
                    maxHeight: "28rem",
                }}
            >
                <div> 
                    <h2><strong>CONTACTO</strong></h2>
                    <h3><strong>Envianos un mensaje</strong></h3>
                    <img src={Logo} className='img-fluid shadow-4' alt="RollingTech" width="160" height="70" />
                    <form onSubmit={sendEmail}>
                        <div className='half left cf'> 
                            <input type='text' placeholder='Nombre' name='user_name' value={inputNombre} 
                                          onChange={(e) => setInputNombre(e.target.value)}
                                          required
                            /> 
                            <input type='email' placeholder='Correo' name='user_email' value={inputCorreo}
                                          onChange={(e) => setInputCorreo(e.target.value)}
                                          required
                            />
                         </div> 
                         <div className='half right cf'> 
                            <textarea name='message' type='text' placeholder='Mensaje' value={inputMensaje}
                                          onChange={(e) => setInputMensaje(e.target.value)}
                                          required
                            ></textarea> 
                         </div>
                          <input type='submit' value='Enviar' id='input-submit' /> 
                  
                    </form>
                </div>



            </div>
        </div>
    );
};

