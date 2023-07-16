import React from "react";
import "../styles/footer.css";
import Logo from '../../src/assets/img/logotipo-rolling1.png'
import QR from '../../src/assets/img/qrLogo1.png'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-fluid mx-auto foot-cont mt-4">
      <div className="row p-4 pb-2">
        <div className="col-xs-12 col-md-12 col-lg-3 foot-logo">
          <Link to="/">
            <img
              alt=""
              src={Logo}
              width="250"
              height="100"
              className="d-inline-block align-top mx-0"
            />{" "}
          </Link>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-3 foot-info">
          <h5 className="mb-1">Horarios</h5>
          <ul className="list-unstyled">
            <li>
              Lun a Vier. 9:00 AM - 18:00 PM
            </li>
            <li>
              Sab 10:00 AM - 14:30 PM
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-3 foot-info">
          <h5 className="mb-1">Contáctanos!</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://goo.gl/maps/sN6qjQ3f9taF82Zz9">Gral Paz 576 </a>
            </li>
            <li>
              Tucumán (Capital)
            </li>
            <li>
              Whatsapp <a href="https://api.whatsapp.com/send/?phone=%2B543815783030&text=%C2%A1Hola+RollingCode%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n">381 578-3030</a>
            </li>
            <li>
              Empresas@RollingTech.com.ar
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-3">
          <h5 className="mb-1">Seguinos</h5>
          <ul className="list-unstyled foot-redes">
            <li>
              <a href="https://www.facebook.com/RollingCodeSchool">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                  alt="facebook-circled"
                />
              </a>
              <a href="https://www.instagram.com/rollingcodeschool/">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
                  alt="twitter-circled"
                />
              </a>
              <a href="https://www.youtube.com/@rollingcode7175">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"
                />
              </a>
            </li>
          </ul>
          <img 
            src={ QR } 
            alt=""
            width="100"
            height="100"/>
        </div>
        <div className="text-white text-center col-xs-12 pt-4">
          <div>
            <Link to="https://cace.org.ar/">
            <img
              src="https://cace.org.ar/wp-content/themes/cace/assets/dist/images/logo.svg"
              alt=""
              width="120"
              height="100"
            />
            </Link>
            <p>
              Defensa del Consumidor. Para reclamos ingrese{" "}
              <a
                href="https://autogestion.produccion.gob.ar/consumidores"
                target="_blank"
              >
                aquí
              </a>
            </p>
          </div>
          <div>
            <p>
              {" "}
              &copy;{new Date().getFullYear()} Rolling-Tech | Todos los derechos
              reservados.
            </p>
          </div>
          <p>Gracias por Visitarnos!</p>
        </div>
      </div>
    </div>
  );
};