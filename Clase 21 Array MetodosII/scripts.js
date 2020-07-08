/*
 * Arrays - Métodos II
 ~ sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode),
 ~ si le pasamos un callback los ordena en función del algoritmo que le pasemos.
 
 ~ from(iterable) - Convierte en array el elemento iterable
 ~ forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
 ~ some(callback) - Comprueba si al menos un elemento del array cumple la condición
 ~ every(callback) - Comprueba si todos los elementos del array cumplen la condición
 ~ map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
 ~ filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
 ~ reduce(callback) - Reduce todos los elementos del array a un único valor
*/

// FROM : CONVIERTE EN ARRAY EL ELEMENTO ITERABLE
let word = "Hola mundo";
let number = 134325;
console.log(word[3]);
console.log("Con from : ", Array.from(word));
console.log("con Split : ", word.split(""));
console.log("Number: ", Array.from(number));

// SORT : ORDENA EN BASE AL VALOR UNICODE, TAMBIEN RECIBE CALLBACK , + CAMBIA
// ! Cuando es positivo intercambia
const letters = ["b", "c", "z", "a"];
const numbers = [1, 8, 10, 30, 3];
console.log("-------------SORT");
console.log(letters);
console.log(number);
console.log("ordenado: ", letters.sort());
console.log("ordenados: ", numbers.sort());
console.log(
  "numeros ordenados : ",
  numbers.sort((a, b) => a - b)
);

// FOREACH 2 PARAMETROS VALOR,INDEX
const numbers2 = [12, 25, 47, 84, 98];
numbers2.forEach((number) => console.log(number));
numbers2.forEach((number, index) =>
  console.log(`${number} está en la posición ${index}`)
);

//SOME : VERIFICA SI ALGUNO CUMPLE LA CONDICION Y EVERY SE REFIERE A TODO
console.log("-------------SOME");
let words = ["HTML", "CSS", "JavaScript", "PHP"];
console.log(words.some((word) => word.length > 2));
console.log(words.some((word) => word.charAt(0) === "C"));
console.log(words.every((word) => word.length > 3));

// ~ MAP : NOS PERMITE REALiZAR ALGUNA ACCION U OPERACION A CADA ELEMENTO DEL ARRAY Y
// ! RETORNA OTRO ARRAY
const numbers3 = numbers.map((number) => number * 2);
console.log(numbers);
console.log("Elmento *2 ", numbers3);

// ~ FILTER : DEVUELVE UN ARRAY CON LOS ELEMENTOS QUE CUMPLA LA CONDICION
console.log("-------------FILTER-------------");
console.log(numbers2);
const numbers4 = numbers2.filter((numero) => numero > 80);
console.log("Elementos >80 : ", numbers4);

// ~REDUCE : REDUCE TODOS LOS ELEMENTO DEL ARRAY A UN UNICO ELEMENTO
console.log("-------------REDUCE------------");
console.log(numbers);
console.log(`REDUCIDO A LA SUMA : ${numbers.reduce((a, b) => a + b)}`);
console.log(`REDUCIDO AL MENOR : ${numbers.reduce((a, b) => (a < b ? a : b))}`);
let promedio = numbers.reduce((a, b, i, arr) => {
  b += a;
  return i === arr.length - 1 ? b / (i + 1) : b;
});
console.log(`Reducido a promeido : ${promedio}`);

const users = [
  {
    name: "user 1",
    online: true,
  },
  {
    name: "user 2",
    online: true,
  },
  {
    name: "user 3",
    online: false,
  },
  {
    name: "user 4",
    online: false,
  },
  {
    name: "user 5",
    online: false,
  },
  {
    name: "user 6",
    online: true,
  },
];

const usersOnline = users.reduce((ascont, asuser) => {
  if (asuser.online) ascont++;
  return ascont;
}, 0);

console.log(`Hay ${usersOnline} usuarios conectados`);
