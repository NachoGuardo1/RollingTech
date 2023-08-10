export const authLogin = async (datos) => {
  try {
    const resp = await fetch(import.meta.env.VITE_URL + "api/auth/login", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json; charset=UTF-8", //Tipo de contenido
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    //Los errores
    return { msg: "No se conectó con backend" };
  }
};
