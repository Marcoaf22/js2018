/*
*Fetch API
~    blob(): Binary Long OBject
~           Si ponemos la ruta hacia el archivo podemos leer ese
~           archivo y renderizarlo en pantalla

~    URL: Con el objeto URL usando el método createObjectURL(archivo)
~        podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

// hacer petificiones a un recurso local

/* const buttonImg = document.getElementById("button-img");
const buttonPdf = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
    fetch("dog.jpg")
        .then((res) => res.blob())
        .then((img) => {
            document.getElementById("img").src = URL.createObjectURL(img);
        });
});

buttonPdf.addEventListener("click", () => {
    fetch("demo.pdf")
        .then((res) => res.blob())
        .then((pdf) => {
            document.getElementById("pdf").href = URL.createObjectURL(pdf);
        });
}); */

//**********************DORIAN*********************

const buttonImg = document.getElementById("button-img");
const buttonPDF = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
  fetch(
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
  )
    .then((res) => res.blob())
    .then((img) => {
      // El Obj URL toma la respuesta blob y lo convierte a una ruta valida
      document.getElementById("img").src = URL.createObjectURL(img);
    });
});

buttonPDF.addEventListener("click", () => {
  fetch("demo.pdf")
    .then((res) => res.blob())
    .then((pdf) => {
      document.getElementById("pdf").href = URL.createObjectURL(pdf);
    });
});
