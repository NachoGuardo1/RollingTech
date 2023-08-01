const url = "http://localhost:3000/api/categorias";
const limite = 5;

export const getCategorias = async (desde = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + desde, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la información de los productos");
  }
};
