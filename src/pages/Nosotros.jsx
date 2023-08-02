import React from "react";
import "../styles/nosotros.css";
import Diego from "../../src/assets/img/avatar-diego.jpg";
import Anita from "../../src/assets/img/avatar-anita.jpg";
import Nacho from "../../src/assets/img/avatar-nacho.jpeg";

export const Nosotros = () => {
  return (
    <div className="presentacion my-5">
      <h2 className="text-center fw-bold text-dark">
        Rolling Group
        <br></br>
        <span className="h4">
          Somos un grupo de tres estudiantes de Rolling Code School
        </span>
      </h2>
      <div className="wrapper">
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
                    href="https://www.facebook.com/diegofenino"
                    target="_BLANK"
                  >
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                      alt="facebook-circled"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/diegofenino/"
                    target="_BLANK"
                  >
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                      alt="instagram-new"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/FeninoD" target="_BLANK">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
                      alt="twitter-circled"
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
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                      alt="facebook-circled"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                      alt="instagram-new"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
                      alt="twitter-circled"
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
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                      alt="facebook-circled"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                      alt="instagram-new"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/3d-fluency/94/twitter-circled.png"
                      alt="twitter-circled"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
