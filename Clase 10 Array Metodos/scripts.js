let numbers = [1, 2, 3, 3, 2, 1];

/*
    *Arrays - Propiedad
    !length - devuelve el número de posiciones que contiene el array
*/

console.log(numbers.length);

/*
    *Arrays - Métodos
    ~Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

let number = 4;
console.log("--- Es Array ---");
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

/*
    *Eliminar un elemento
    ~shift() - Elimina el primer elemento del array y devuelve ese elemento
    ~pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

console.log("--shift() and pop()--");
console.log(numbers);
console.log("shift(): " + numbers.shift());
console.log(numbers);
console.log("pop(): " + numbers.pop());
console.log(numbers);

/*
    *Añadir elementos
    ~ push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
    ~ .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/

console.log("--push() and unshift()");
console.log(numbers);
console.log(`push(6), tamaño: ${numbers.push(6)}`);
console.log(numbers);
console.log(`unshift(0), tamaño:  ${numbers.unshift(0)}`);
console.log(numbers);

/*
    ~indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado,
    ~ o -1 si ninguno es encontrado.
*/

console.log("--indexOf()--");
console.log(numbers);
console.log("3 esta en : " + numbers.indexOf(3));

/*
    ~lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log("--lastIndexOf()");
console.log(numbers);
console.log("3 esta en : " + numbers.lastIndexOf(3));

/*
    ~reverse() - Invierte el orden de los elementos del array.
*/

console.log("--reverse()");
console.log(numbers);
numbers.reverse();
console.log(numbers);

/*
    ~join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas
*/

console.log("--join()");
console.log(numbers);
console.log(numbers.join(" "));
console.log(numbers.join("-"));

/*
    ~ splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

console.log("--splice(a,b,items)--");
console.log(numbers);
numbers.splice(3); // Elimina desde la posicion a hasta el final
numbers.splice(2, 2); // - Elimina desde la posicion a el número valores que le indiquemos
numbers.splice(2, 2, 10, 23, 54); // - Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posicion a
numbers.splice(4, 0, 10, 23, 54); // - Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno
console.log(numbers);

/*
    ~ slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b.
    ~ Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

console.log("--slice(a,b)--");
console.log(numbers);
let newNumbers = numbers.slice();
console.log(newNumbers);

let newNumbers2 = numbers.slice(2);
console.log(numbers);
console.log(newNumbers2);

//let newNumbers = numbers.slice(2,4);
//console.log(numbers);
//console.log(newNumbers);
