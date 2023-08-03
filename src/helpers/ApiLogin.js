const url = "rolling-tech-back-dw95t5bsa-jeredlt.vercel.app";

export const authLogin = async (datos) => {
  try {
    const resp = await fetch(url, {
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
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
