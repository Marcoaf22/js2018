/*
*Spread Operator (operador de expansión) Su sintaxis es ...

*/

const numbers1 = [1, 2, 3, 4];
console.log(...numbers1);

//Enviar elementos en un array a una función

const addNumbers = (a, b, c) => {
  console.log(a + b + c);
};

let numbersToAdd = [1, 2, 3];

addNumbers(...numbersToAdd);

//  ~ Añadir un array a otro array

let users = ["javier", "david", "rosa", "juan", "mercedes"];

let newUsers = ["marta", "jaime", "laura"];

users.push(...newUsers);

console.log(users);

// ~ Copiar arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
console.log(arr2);

// ~ Concatenar arrays

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8];

let arrConcat = [...arr1, ...arr2];
console.log(arrConcat);

// ~ Enviar un número indefinido de argumentos a una función (parámetros REST) y lo convierte en array

const restParms = (...numbers) => {
  console.log(numbers);
};

restParms(1, 2, 3, 4, 5, 6, 7, 8);

// ~ librería math
const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log("Elemento max:", Math.max(...numbers));
console.log("Elemento min:", Math.min(...numbers));

// ~ Eliminar elementos duplicados
console.log([...new Set(numbers)]);

// * Spread Operator

console.log("----------Spread Operator");
console.log(numbers);
console.log(...numbers);
numbers.forEach((num) => console.log(num));
const addNumberos = (a, b, c) => console.log(a + b + c);
let variable = [3, 5, 8, 2];

addNumberos(...variable);

// AÑADIR ELEMENTOS DE UN ARRAY A OTRO
let words2 = ["Marco", "Jorge", "Michel", "Luis"];
console.log("words2:", words2);
words.push(...words2);
console.log("words:", words);

// COPIAR ELEMENTO DE ARRAY A OTRO VACIO
let words3 = [...words2];
console.log("words3:", words3);
words3.shift();
console.log("words2:", words2);
console.log("words3:", words3);

// CONCATENAR ARRAYS
var parts = ["shoulder", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
console.log("parts:", parts);
console.log("lyrics:", lyrics);

const hol = ["Marco", "Jorge", "Michel", "Luis"];
const hos = [1, 1, 2, 3, 5, 8, 2];
