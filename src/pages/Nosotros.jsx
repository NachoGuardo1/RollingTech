import React from "react";
import "../styles/nosotros.css";
import Diego from "../../src/assets/img/avatar-diego.jpg";
import Anita from "../../src/assets/img/avatar-anita.jpg";
import Nacho from "../../src/assets/img/avatar-nacho.jpeg";

export const Nosotros = () => {
  return (
    <div className="presentacion my-5">
      <h2 className="text-center fw-bold text-dark">
        ¡Bienvenidos a Rolling Tech!
        <br></br>
        <span className="h5">
          Somos un grupo de estudiantes del curso Full Stack Developer dictado
          por Rolling Code School. Nuestro camino empezo un 14 de septiembre de
          2022 y luego de aproximadamente un año y mucho aprendizaje en el
          camino hemos creado un proyecto final sobre un e-commerce construido
          con React y con una base de datos en MongoDB.
        </span>
      </h2>
      <div className="wrapper mt-3">
        <div className="carta-nosotros">
          <div className="face front">
            <img src={Diego} alt="" />
            <h3>Diego</h3>
          </div>
          <div className="face back">
            <h3>Fenino Diego</h3>
            <p>
              Si una persona es perseverante, aunque sea dura de entendimiento,
              se hará inteligente; y aunque sea débil se transformará en fuerte.
            </p>
            <span>-Leonardo Da Vinci</span>
            <div className="redes">
              <ul className="list-unstyled lista-redes">
                <li>
                  <a
                    href="https://www.linkedin.com/in/diego-fenino-72311724a/"
                    target="_BLANK"
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
                      alt="LinkedIn"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DiegoFenino" target="_BLANK">
                    <img
                      width="30"
                      height="30"
                      src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                      alt="GitHub"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carta-nosotros">
          <div className="face front">
            <img src={Nacho} alt="" />
            <h3>Nacho</h3>
          </div>
          <div className="face back">
            <h3>Guardo Ignacio</h3>
            <p>
              Mirá de cerca al presente que estás construyendo, porque debe
              parecerse al futuro con el que soñás.
            </p>
            <span>-Alice Walker</span>
            <div className="redes">
              <ul className="list-unstyled lista-redes">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ignacio-guardo-ruiz-2449a5289/"
                    target="_BLANK"
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
                      alt="linkedIn"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/NachoGuardo1" target="_BLANK">
                    <img
                      width="30"
                      height="30"
                      src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                      alt="GitHub"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carta-nosotros">
          <div className="face front">
            <img src={Anita} alt="" />
            <h3>Anita</h3>
          </div>
          <div className="face back">
            <h3>Iturre Anita</h3>
            <p>
              El arte desafía a la tecnológia y la tecnológia inspira al arte.
            </p>
            <span>-John Lasseter</span>
            <div className="redes">
              <ul className="list-unstyled lista-redes">
                <li>
                  <a href="https://www.linkedin.com/feed/" target="_BLANK">
                    <img
                      width="30"
                      height="30"
                      src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
                      alt="LinkedIn"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aeiturre" target="_BLANK">
                    <img
                      width="30"
                      height="30"
                      src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                      alt="GitHub"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <p className="h5 my-3">
          ¡Gracias por visitar nuestro sitio! Esperamos que disfrutes explorando
          nuestros productos tanto como nosotros disfrutamos creando este
          proyecto. Si tienes alguna pregunta o comentario, no dudes en ponerte
          en contacto con nosotros.
        </p>
        <p className="blockquote">
          Rolling Code School - Full Stack Developer{" "}
        </p>
      </div>
    </div>
  );
};
