const url = "direccion api o base de datos";

export const authLogin = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "applicatio/json, charset=UTF-8",
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conecto con backend" };
  }
};
