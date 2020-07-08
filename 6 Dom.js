let cajas = document.getElementsByTagName("section");
/*console.log(contenido);

contenido[0].textContent= "<p>Hola Everyone</p>";
contenido[1].innerHTML= " <p> Hola a Todos </p>";*/

// -------Creando Nodos
// Creamos el elemento
let caja = document.createElement("section");
// Creamos un nodo de texto
let valor = document.createTextNode("Creando nueva seccion");
// Asignamos el nodo de texto al elemento creado
caja.appendChild(valor);
// Le asignamos atributo al nuevo elemento
caja.setAttribute("class", "caja");
// Buscamos donde vamos a incrustar nuestro elemento nuevo
//let contenedor= document.getElementById("content");
//contenedor.appendChild(caja);

cajas[0].id = "first_section";

// Como obtener el padre de un elemento de html
let padre = cajas[0].parentNode;
// insertamos antes de id first_section
// padre.insertBefore(caja,first_section);
// o tambien se puede
// padre.insertBefore(caja,cajas[4]);
// o para reemplazar
padre.replaceChild(caja, cajas[0]);

// tambien para eliminar
padre.removeChild(cajas[4]);

console.log(padre);
