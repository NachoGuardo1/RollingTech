import { createContext, useState } from "react";

const FiltrosContext = createContext();

const CategoriaProvider = ({ children }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const cambiarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };
  return (
    <>
      <FiltrosContext.Provider
        value={{ categoriaSeleccionada, cambiarCategoria }}
      >
        {children}
      </FiltrosContext.Provider>
    </>
  );
};

export { CategoriaProvider, FiltrosContext };
