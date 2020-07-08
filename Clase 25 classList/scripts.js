/*
*Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

*Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class'):bool
    element.classList.replace('oldClass', newClass)
    element.classList.toggle('class'[,force])

*atributos directos
    id
    value
*/

const title = document.getElementById("title");
const input = document.getElementById("name");

console.log(input.getAttribute("type"));
console.dir(input);
input.setAttribute("type", "date");

title.classList.add("main-title", "other-title");
title.classList.remove("title");

/*
* Contenido
    ~ textContent - te devuleve todo el texto (sin etiquetas) de todos los niveles
    ~ innerHTML - te devuelve todo el texto (con etiquetas) incluidas
    ~ innerText - no es estandar es de IE
*/

/* if(title.classList.contains('title')) console.log('Title tiene la clase title')
else console.log('Title no tiene la clase title') */

/* title.classList.replace('title','main-title') */

/* console.log(title.innerHTML)
console.log(title.textContent) */
// console.log(input.value);
/* console.log(title)
console.log(name) */
