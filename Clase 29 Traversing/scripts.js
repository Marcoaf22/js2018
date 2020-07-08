/* 
*----------Recorrer el DOM (DOM Traversing)---------------

*Padre - parent (Nodo del que desciende)
~    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
~    - parentElement - Devuelve el nodo elemento padre

    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre
    parentNode y parentElement devolverá siempre null.

*Hijos - child (Nodo que desciende de un padre)

~    - childNodes - Devuelve todos los NODOS hijos
~    - children - Devuelve todos los NODOS ELEMENTO hijos

~    - firstChild - Devueleve el primer "NODO" hijo (cuidado con los texto)
~    - firstElementChild - Devuelve el primer "NODO ELEMENTO" hijo

~    - lastChild - Devueleve el último "NODO" hijo
~    - lastElementChild - Devueleve el último "NODO ELEMENTO" hijo

~    - hasChildNodes() - Devueleve true si el nodo a evaluar tiene "NODOS HIJOS"

*Hermanos - siblings (Nodo al mismo nivel)

~    - nextSibling - Devuelve el siguiente "NODO HERMANO"
~    - nextElementSibling - Devuelve el next "NODO ELEMENTO HERMANO"

~    - previousSibling - Devuelve el "ANTERIOR NODO"
~    - previousElementSibling - Devuelve el "ANTERIOR NODO ELEMENTO HERMANO"

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent = document.getElementById("parent");

// console.log(
//     "parentElement: ",
//     parent.parentElement.parentElement.parentElement.parentElement
// );
// console.log("parentNode: ", parent.parentNode.parentNode.parentNode.parentNode);

//-----------HIJOS
// console.log(parent.childNodes);
//console.log(parent.children)
//EL PRIMER NODO SERA ESE SALTO DE LINEA
//console.log(parent.firstChild)
//console.log(parent.firstElementChild)
//console.log(parent.lastChild);
//console.log(parent.lastElementChild);
//console.log(parent.firstChild.hasChildNodes())

// console.log(parent.nextSibling);
// console.log(parent.parentElement.nextElementSibling);
//console.log(parent.parentElement.previousSibling)
// console.log(parent.parentElement.previousElementSibling)
