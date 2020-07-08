/*
* Tipos de Nodos
    todo - nodeType
    ~ 1 - elemento de nodo :li,a,ul,body
    ~ 2 - nodo de tipo atributo
    ~ 3 - nodo de tipo texto
    ~ 8 - nodo de tipo comentario

~ document.getElementById('id')
    todo  Acceder a un elemento a través de su id

~ document | element .querySelector('selectorCSS')
    todo  Accede al primer elemento que coincida con el selector CSS

~ document | element .querySelectorAll('selectorCSS')
    todo  Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title = document.getElementById("title");

title.textContent = "DOM - Accediendo a estos nodos";

const paragraph = document.querySelector(".paragraph");
console.log("paragraph: ", paragraph);

const span = document.getElementById("title").querySelector("span");

const paragraphs = document.querySelectorAll(".paragraph");

// * Convertir un NodeList a ARRAY
const paragraphsSpread = [...document.querySelectorAll(".paragraph")];

const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"));

paragraphs[0].style.color = "red";

paragraphs.map((p) => (p.style.color = "green"));

paragraphsSpread.map((p) => (p.style.color = "green"));

paragraphsArray.map((p) => (p.style.color = "blue"));
