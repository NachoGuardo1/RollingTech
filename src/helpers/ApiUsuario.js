const token = JSON.parse(localStorage.getItem("token"));

//traer usuario por id
export const getUsuraioById = async (id) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL + "api/usuarios" + "/" + id
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    throw new Error("No se pudo obtener la info");
  }
};

//crear un usuario (Registro)
export const crearUsuario = async (datos) => {
  try {
    const resp = await fetch(import.meta.env.VITE_URL + "api/usuarios", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    return { msg: "Algun dato esta mal." };
  }
};

//borrar un usuario
export const borrarUsuario = async (id) => {
  try {
    const resp = await fetch(
      import.meta.env.VITE_URL + "api/usuarios" + "/" + id,
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
