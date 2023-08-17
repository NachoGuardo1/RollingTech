//traer usuario por id
export const getUsuraioById = async (id) => {
  try {
    const resp = await fetch(
      process.env.VITE_URL + "api/usuarios" + "/" + id
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
    const resp = await fetch(process.env.VITE_URL + "api/usuarios", {
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
