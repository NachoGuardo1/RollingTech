const limite = 5;

export const getCategorias = async (desde = 0) => {
  try {
    const resp = await fetch(
      process.env.VITE_URL +
        "api/categorias" +
        "?limite=" +
        limite +
        "&desde=" +
        desde,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("No se pudo obtener la información de los productos");
  }
};
