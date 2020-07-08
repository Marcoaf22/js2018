let password = "";

/*
while (password != "marco"){
  password = prompt("Introdusca la contraseña");
}

console.log("La contraseña a sido correcta");

console.log("Ahora con do While");

do{
  word=prompt("Introdusca la contraseña");
}while(password!="marco");

console.log("La contraseña a sido correcta"); */

for (let i = 0; i < 100; i++) {
  console.log(i);
}

const nombres = ["Marco", "Jorge", "Michel", "Luis", "Miguel"];

// bucle for each pero js

for (let nombre of nombres) {
  console.log(nombre);
}

// solo los indices
for (let nombre in nombres) {
  console.log(nombre);
}

const number = [1, 1, 3, 5, 8, 2];

function hola() {
  console.log("hola");
}

const hello = () => console.log("hello");

console.log("nombres:", nombres);
console.log("nombres:", nombres.sort());
console.log(...number);
console.table(number);
console.log(typeof hola);
console.log(typeof hello);

//hola();
//hello();
//console.log(hola);
//console.log(hello);

console.log(
  "number:",
  number.sort((a, b) => a - b)
);

// hay break y continue que simplemente salta ese ciclo a diferencia de break que lo detiene por completo el bucle
