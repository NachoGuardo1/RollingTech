
const token = JSON.parse(localStorage.getItem("token"));
const limite = 6;

export const getProductos = async (limite = 0, desde = 0) => {
  try {
    const resp = await fetch(URL + "?limite=" + limite + "&desde=" + desde, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la información de los productos");
  }
};

//Traer prodcuto por el id
export const getProductoById = async (id) => {
  try {
    const resp = await fetch(URL + "/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();

    console.log(data.id);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la informacion del producto");
  }
};

//crear producto
export const crearProducto = async (datos) => {
  console.log("en crear prodcuto");
  console.log(token);
  try {
    const resp = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

//Actualizar Producto
export const actualizarProducto = async (id, datos) => {
  try {
    const resp = await fetch(URL + "/" + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

//Borrar Categoría
export const borrarProducto = async (id) => {
  try {
    const resp = await fetch(URL + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
