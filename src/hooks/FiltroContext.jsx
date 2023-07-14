import { createContext, useState } from "react";

const FiltrosContext = createContext();

const FiltrosProvider = ({ children }) => {
  return (
    <>
      <FiltrosContext.Provider>{children}</FiltrosContext.Provider>
    </>
  );
};

export default { FiltrosContext, FiltrosProvider };
