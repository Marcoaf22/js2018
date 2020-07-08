/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById("button");

button.addEventListener("click", () => {
  // preguntamos si windows tiene XMLHttpRequest
  let xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");

  // open.- Inicializa el pedido
  // el metodo , la url , true si es asincrono = true , user = "" nombre d usuario , password = "" estos 2 son para fines de autentificacion)
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  // este evento una vez terminada la solicitudo y recibida dispara la funcion que le asignamos
  xhr.addEventListener("load", (data) => {
    // console.log(JSON.parse(data.target.response));
    const dataJson = JSON.parse(data.target.response);

    const list = document.getElementById("list");
    for (const usuario of dataJson) {
      const listItem = document.createElement("LI");
      listItem.textContent = `Nombre : ${usuario.url} y su id : ${usuario.id}`;
      list.appendChild(listItem);
    }
  });
  // ENTRE EL OPEN Y SEND ponemos que vamos hacer con los dato

  xhr.send();
});

// para preguntar si un navegador lo tiene es en consola
// 'XMLHttpRequest' in window

/* //-------------------------------------------------------------------------
const button = document.getElementById("button");

button.addEventListener("click", () => {
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById("list");
        for (const userInfo of dataJSON) {
            const listItem = document.createElement("LI");
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem);
        }
    });

    xhr.send();
});
 */
