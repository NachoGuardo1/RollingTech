import React from "react";
import { Carousel } from "react-bootstrap";

export const Carrousel = () => {
  return (
    <Carousel className="p-0 mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compumundoar.vtexassets.com/assets/vtex.file-manager-graphql/images/6bbe80c9-b7be-4008-b169-f52e846d3fc1___450ff3c1fc2398fc91c44657b41bf1d2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compumundoar.vtexassets.com/assets/vtex.file-manager-graphql/images/6bbe80c9-b7be-4008-b169-f52e846d3fc1___450ff3c1fc2398fc91c44657b41bf1d2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://compumundoar.vtexassets.com/assets/vtex.file-manager-graphql/images/ce957462-ff4c-4bbc-8e23-de67ef4c3913___10fcf6e0b136401b13dc27fa463b98ef.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
};
