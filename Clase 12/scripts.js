/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [56, 14, 23, 37, 41, 59];

for (let i = 0; i <= numbers.length; i++) {
  console.log(
    `i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`
  );
}

/* Bucles */

/* 
    Determinados

    bucle for of / for in

    for(let variable of estructura){
        Código a ejecutar
    }

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

let names = ["Paco", "José", "Paula", "María"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Paula") {
    continue;
  }
  console.log(names[i]);
}

for (const name of names) {
  if (name === "Paula") {
    continue;
  }
  console.log(name);
}

for (const index in names) {
  if (names[index] === "Paula") {
    continue;
  }
  console.log(index);
}
