import {
  faBackwardStep,
  faForwardStep,
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
        className="btn btn-sm"
      >
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>

      {Array.from({ length: paginasTotales }, (_, index) => index + 1).map(
        (pagina) => (
          <button
            className="btn btn-sm btn-dark mx-1"
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
        className="btn btn-sm"
      >
        <FontAwesomeIcon icon={faForwardStep} />
      </button>
    </div>
  );
};

export default Paginacion;
