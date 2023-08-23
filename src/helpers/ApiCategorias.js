const token = JSON.parse(localStorage.getItem("token"));

export const getCategorias = async (limite = 0, desde = 0) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL +
        "api/categorias" +
        "?limite=" +
        limite +
        "&desde=" +
        desde,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      }
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("No se pudo obtener la información de los productos");
  }
};
