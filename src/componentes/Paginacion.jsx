import {
  faBackwardStep,
  faForwardStep,
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Paginacion = ({
  paginasTotales,
  cambioPagSiguiente,
  cambioPaginaAnterior,
  paginaActual,
}) => {
  return (
    <div className="text-center my-3">
      <button
        onClick={cambioPaginaAnterior}
        disabled={paginaActual === 1}
        className="btn"
      >
        <FontAwesomeIcon icon={faSquareCaretLeft} />
      </button>
      <span className="mx-2">
        Página {paginaActual} de {paginasTotales}
      </span>
      <button
        onClick={cambioPagSiguiente}
        disabled={paginaActual === paginasTotales}
        className="btn "
      >
        <FontAwesomeIcon icon={faSquareCaretRight} />
      </button>
    </div>
  );
};

export default Paginacion;
