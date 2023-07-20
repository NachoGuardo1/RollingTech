
const url = "http://localhost:3000/api/auth/login";

export const authLogin = async (datos) => {

    try {
    //Lo que funciona
    console.log(datos);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json; charset=UTF-8" //Tipo de contenido 
      }
     
    })
    const data = await resp.json()
    console.log('apilogin - vuelve del post')  ;

    return data;

  } catch (error) {
    //Los errores
    console.log(error)
    return {msg: "No se conectó con backend"}
  }
}