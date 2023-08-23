const token = JSON.parse(localStorage.getItem("token"));

export const getProductos = async (limite = 0, desde = 0) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL +
        "api/productos" +
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

//Traer prodcuto por el id
export const getProductoById = async (id) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL + "api/productos" + "/" + id,
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
    throw new Error("No se pudo obtener la informacion del producto");
  }
};

//crear producto
export const crearProducto = async (datos) => {
  try {
    const resp = await fetch(import.meta.env.VITE_URL + "api/productos", {
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
    return { msg: "No se conectó con backend" };
  }
};

//Actualizar Producto
export const actualizarProducto = async (id, datos) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL + "api/productos" + "/" + id,
      {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      }
    );

    const data = await resp.json();

    return data;
  } catch (error) {
    return { msg: "No se conectó con backend" };
  }
};

//Borrar Producto
export const borrarProducto = async (id) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL + "api/productos" + "/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      }
    );

    const data = await resp.json();

    return data;
  } catch (error) {
    return { msg: "No se conectó con backend" };
  }
};
