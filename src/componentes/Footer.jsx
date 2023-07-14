import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom foot-cont">
      <div className="row p-4 pb-2 text-white text-lg-start">
        <div className="col-xs-12 col-md-3 col-lg-3">
          <img
            alt=""
            src="https://w7.pngwing.com/pngs/568/379/png-transparent-technology-computer-icons-technology-electronics-text-logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top mx-3"
          />{" "}
          <p className="foot-name">ROLLING</p>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3">
          <h4 className="mb-4">Contáctanos!</h4>
          <ul className="list-unstyled">
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/map-pin.png"
                alt="map-pin"
              />
              Gral Paz 500
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/map-pin.png"
                alt="map-pin"
              />
              Tucumán (Capital)
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                alt="whatsapp"
              />
              Whatsapp +54 381-490-4481
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/gmail.png"
                alt="gmail"
              />
              Empresas@RollingTech.com.ar
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3">
          <h4 className="mb-4">Horarios</h4>
          <ul className="list-unstyled">
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/alarm-clock--v2.png"
                alt="alarm-clock--v2"
              />
              Lun a Vier. 9:00 AM - 18:00 PM
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/alarm-clock--v2.png"
                alt="alarm-clock--v2"
              />
              Sab 10:00 AM - 14:30 PM
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-3 col-lg-3">
          <h4 className="mb-4">Seguinos</h4>
          <ul className="list-unstyled redes">
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                alt="facebook-circled"
              />
              Facebook
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new"
              />
              Instagram
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
                alt="twitter-circled"
              />
              Twitter
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/tiktok.png"
                alt="tiktok"
              />
              TikTok
            </li>
            <li>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/3d-fluency/94/youtube-play.png"
                alt="youtube-play"
              />
              Youtube
            </li>
          </ul>
        </div>
        <div className="text-white text-center col-xs-12 pt-4">
          <div>
            <img
              src="https://cace.org.ar/wp-content/themes/cace/assets/dist/images/logo.svg"
              alt=""
              width="120"
              height="100"
            />
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
              reservados. <a href="">Terminos y condiciones</a>
            </p>
          </div>
          <p>Gracias por Visitarnos!</p>
        </div>
      </div>
    </div>
  );
};
