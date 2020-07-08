/* Strings */
let cadena = "Hola Mundo";

/* PROPIEDADES
 !length -> Devuelve la longitud de la cadena
 */

console.log(`longitud de hola mundo: ${cadena.length}`);

/*
*Métodos
    Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.
    ~ toUpperCase() -> Devuleve la cadena a mayúsculas
*/

console.log(`Cadena en Mayusculas ${cadena.toUpperCase()}`);

/*
    ~ toLowerCase() -> Devuelve la cadena a minúsculas
*/

cadena = cadena.toLowerCase();
console.log(cadena);

/*
    ~ indexOf(string[,index]) -> Devuelve la posición en la que se encuentra el string,
    ~ si no lo encuentra devuelve -1, index a partir de donde buscar

    ~ lastIndexOf(string,[index]) -> lo mismo solo que empieza a buscar desde el final
*/

console.log("--indexOf()--");
console.log(`Buscando o : ${cadena.indexOf("o")}`);
console.log(`Buscando o a partir de la pos 2: ${cadena.indexOf("o", 2)}`);
console.log(`Buscando q : ${cadena.indexOf("q")}`);
console.log(`Buscando mundo : ${cadena.indexOf("mundo")}`);

/*
    ~ replace(oldString, newString) -> Remplaza el fragmento de la cadena
    ~ que le digamos y pone el valor nuevo
*/

console.log("--replace()--");
console.log(cadena.replace("Mundo", "Youtube"));

/*
    ~ substring(inicio [,fin]) -> Extrae los caracteres desde inicio
    ~ hasta fin (el final no se incluye)

Si no se incluye el fin extrae hasta el final.
*/

console.log("--substring--");
console.log(`substring(3) : ${cadena.substring(3)}`);
console.log(`substring(3,7) : ${cadena.substring(3, 7)}`);

/*
    ~ slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, 
    ~ si ponemos valores negativos empezará desde atrás
    ~ Si no se incluye el final extrae hasta el final

    ~ (2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/

console.log("--slice--");
console.log(`slice(-3) : ${cadena.slice(-3)}`);
console.log(`slice(3) : ${cadena.slice(3)}`);
console.log(`slice(3,-2) : ${cadena.slice(3, -2)}`);

/*
    ~ trim()-> Elimina los espacios al inicio y al final de la cadena
*/

let cadena2 = " Hola youtube, estamos trabajando con cadenas ";

console.log("--trim()");
console.log(cadena2.trim());

/*
*--ES6--
    ~ startsWith(valor [,inicio]) -> bool, Sirve para saber si la cadena empieza con ese valor.
*/

console.log("--startsWith--");
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

/*
    ~ endsWith(valor [,longitud]) -> bool,Sirve para saber si la cadena termina con ese valor.
*/

console.log("--endsWith()--");
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("n", 8));
console.log(cadena.endsWith("Mundo"));

/*
    ~ includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
*/

console.log("--includes()");
console.log(cadena.includes("n"));
console.log(cadena.includes("a", 5));
console.log(cadena.includes("a", 2));

/*
    ~ repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

let cadena3 = "Hola";

console.log("--repeat()--");
console.log(cadena3.repeat(3));
console.log("r".repeat(10));

/*
 *Template Strings */

const nombre = "Juan";
const apellido = "Gómez";
const edad = 20;

const nombres = ["Marco", "Jorge", "Michel", "Luis", "Miguel"];

console.log(
  "Hola " + nombre + " " + apellido + ". Tienes " + (edad + 1) + " años."
);
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(
  `Hola ${nombre} ${apellido}. El año que viene tendrás ${edad + 1} años.`
);
console.log(nombres.sort());
// window.addEventListener("scroll", () => {});
