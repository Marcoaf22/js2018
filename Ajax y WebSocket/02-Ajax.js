/*
* Peticiones Ajax

* Estados de la peticion ajax

    ~ 0 Initialization - todavia no se llamo a open()
    ~ 1 Loading        - todavia no se llamo a send()
    ~ 2 Loaded         - sen() ya fue invocado, y los encabezados y state estan disponible
    ~ 3 Interactive    - descargando; responseText, contiene informacion parcial
    ~ 4 Completed      - La operacion esta terminada
*/

const btn = document.getElementById("btn-ajax");

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(`Objeto creado: ${xhr.readyState}`);

  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  console.log(`Objeto abierto: ${xhr.readyState}`);

  xhr.addEventListener("load", (data) => {
    console.log(JSON.parse(data.target.response));
    console.log(`Objeto cargado ${xhr.readyState}`);
  });

  xhr.send();
  console.log(xhr.readyState);
});
