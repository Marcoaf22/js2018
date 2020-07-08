/*
* FETCH
~ -Proporciona una interfaz JavaScript para acceder y manipular partes del canl
~  HTTP, como peticiones y respuestas.
~ -También provee un método global fetch() que proporciona una forma fácil y
~  lógica de obtener recursos de forma asíncrona por la red.
~ -Está basado en promesas, por lo cual tiene un response y un reject internos
~  Response tiene varios METODOS:

~ - array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc).
~   Se utiliza cuando se necesita manipular el contenido del archivo.
~ - blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza
~           cuando no se necesita manipular el contenido y se va a trabajar con el
~            archivo directamente
~ - clone(): crea un clon de un objeto de respuesta, idéntico en todos los
~            sentidos, pero almacenado en una variable diferente.
~ - form​Data(): Se utiliza para leer los objetos formData
~ - json(): Convierte los archivos json en un objeto de JavaScript

~ - text(): Se utiliza cuando queremos leer un archivo de texto.
~           Siempre se codifica en UTF-8

!Comprobación de soporte FETCH
    if (window.fetch != undefined) console.log('FETCH OK')
    else console.log('FETCH NOT WORKS!')
*/

const button = document.getElementById("button");

// button.addEventListener("click", () => {
//   // Fetch API  "POR DEFECTO TRABAJA CON GET"
//   fetch("https://jsonplaceholder.typicode.com/users")
//     // res es una promesa , asi trabaja fetch
//     .then((res) => {
//       console.log(res.ok);
//       console.log(res.status);
//       // console.log(res.statusText);
//       console.log(res.url);
//       return res;
//     })
//     // .json() devuleve una promeska
//     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//     // .then((res) => res.json())
//     .then((res) => {
//       const fragment = document.createDocumentFragment();
//       const list = document.getElementById("list");
//       for (const userInfo of res) {
//         const itemList = document.createElement("LI");
//         itemList.textContent = `Id: ${userInfo.id} Name: ${userInfo.name}`;
//         fragment.appendChild(itemList);
//       }
//       list.appendChild(fragment);
//     });
// });

button.addEventListener("click", async () => {
  const f = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await f.json();
  const fragment = document.createDocumentFragment();
  const list = document.getElementById("list");
  for (const userInfo of res) {
    const itemList = document.createElement("LI");
    itemList.textContent = `Id: ${userInfo.id} Name: ${userInfo.name}`;
    fragment.appendChild(itemList);
  }
  list.appendChild(fragment);
});

// **********************DORIAN AJAX *********************

/*
button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })

    xhr.send()
}) */
