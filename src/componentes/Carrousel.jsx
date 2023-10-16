import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/carouselMQ.css";
import Swal from "sweetalert2";

export const Carrousel = () => {
  return (
    <Carousel className="p-0 mb-5 mq">
      <Carousel.Item>
        <Link onClick={() => Swal.fire("Pagina en mantenimiento")}>
          <img
            className="d-block w-100"
            style={{ height: "15rem" }}
            src="https://compumundoar.vtexassets.com/assets/vtex.file-manager-graphql/images/6bbe80c9-b7be-4008-b169-f52e846d3fc1___450ff3c1fc2398fc91c44657b41bf1d2.jpg"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => Swal.fire("Pagina en mantenimiento")}>
          <img
            className="d-block w-100 "
            style={{ height: "15rem" }}
            src="https://medias.musimundo.com/medias/banner-landing-hotsale.jpg?context=bWFzdGVyfGltYWdlc3wxNjcyODR8aW1hZ2UvanBlZ3xoNjUvaDYwLzEwNDc0ODk5MjQzMDM4L2Jhbm5lci1sYW5kaW5nX2hvdHNhbGUuanBnfDAzODljZGY2ZTI3YWI1NGNkMjRlMTY1MWNlYTFiYjc1NTg4NmM3ZTgzOTRjODVkN2VlODY5NTlmM2EwYmZlNzE"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => Swal.fire("Pagina en mantenimiento")}>
          <img
            className="d-block w-100"
            style={{ height: "15rem" }}
            src="https://compumundoar.vtexassets.com/assets/vtex.file-manager-graphql/images/ce957462-ff4c-4bbc-8e23-de67ef4c3913___10fcf6e0b136401b13dc27fa463b98ef.jpg"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};
