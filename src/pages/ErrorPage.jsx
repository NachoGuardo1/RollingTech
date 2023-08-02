import React from "react";
import Error from "../assets/img/error-image.gif";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="d-flex justify-content-center aling-items-center row text-center my-4">
      <h2 className="text fw-bold">Parece que estás perdido</h2>
      <h5 className="text fw-bold">
        La página que estás buscando no está disponible
      </h5>
      <img
        className="e"
        src={Error}
        style={{
          width: "80%",
          height: "20rem",
        }}
      />
      <Link to="/" className="btn btn-warning my-2 col-6">
        Volver al Inicio
      </Link>
    </div>
  );
};
