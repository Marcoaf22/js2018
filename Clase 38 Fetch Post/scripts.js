/*
* Fetch API

~ Para hacer peticiones POST, fetch admite un segundo parámetro.
~ fetch(url, {
~    method: 'POST',
~    body: Los datos que enviamos. Si es un objeto hay que
~         convertirlo con JSON.stringify(datos),
~    headers: {
~            cabeceras de información sobre lo que estamos enviando
~            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
~        }
~    })
*/

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const newPost = {
    tittle: "A new Post",
    body: "Cuerpo del post enviado a fetch",
    userId: 1,
  };
  // Tenemos que convertir como JSON(que es como un string) y no como OBJETO
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost), // seria los datos que enviaremos
    headers: {
      // las cabeceras: tipo de contenido , enviamos un obj en json, charset
      "Content-type": "application/json; charset=UTF-8",
    },
  });
});

//**********************DORIAN*********************

/* const button = document.getElementById("button");

button.addEventListener("click", () => {
    const newPost = {
        title: "A new post",
        body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}); */
