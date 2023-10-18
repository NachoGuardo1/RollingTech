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
  cambioPagina,
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

      {Array.from({ length: paginasTotales }, (_, index) => index + 1).map(
        (pagina) => (
          <button
            className="btn btn-sm btn-outline-dark mx-1"
            key={pagina}
            onClick={() => cambioPagina(pagina)}
          >
            {pagina}
          </button>
        )
      )}

      <button
        onClick={cambioPagSiguiente}
        disabled={paginaActual === paginasTotales}
        className="btn"
      >
        <FontAwesomeIcon icon={faSquareCaretRight} />
      </button>
    </div>
  );
};

export default Paginacion;
