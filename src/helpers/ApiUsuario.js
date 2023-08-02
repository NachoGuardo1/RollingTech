const url = "http://localhost:3000/api/usuarios";

//traer usuario por id
export const getUsuraioById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la info");
  }
};

//crear un usuario (Registro)
export const crearUsuario = async (datos) => {
  console.log("En ApiUsuario - crear usuario");
  console.log(datos);


  /*fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(datos), // data can be `string` or {object}!
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  //.then(response => console.log('Success:', response));

  .then((response) => {
    if (response.ok) {
      console.log('Todo bien');
    } else {
      console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      console.log(response.errors(msg));
      
    }
  })*/

  
  console.log('fin del fetch del apiUsuario')
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "Algun dato esta mal." };
  }
};
