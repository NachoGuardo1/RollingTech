import React from "react";
import { Carousel } from "react-bootstrap";

export const Carrousel = () => {
  return (
    <Carousel className="p-0 mb-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mSCzo6iqLNUg5y-E8s4CJwMdU_287aYCVWDuRJewm0QbIUvYNPCxOyLSc5WTprjIntA&usqp=CAU"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mSCzo6iqLNUg5y-E8s4CJwMdU_287aYCVWDuRJewm0QbIUvYNPCxOyLSc5WTprjIntA&usqp=CAU"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mSCzo6iqLNUg5y-E8s4CJwMdU_287aYCVWDuRJewm0QbIUvYNPCxOyLSc5WTprjIntA&usqp=CAU"
        />
      </Carousel.Item>
    </Carousel>
  );
};
