const saludo = () => console.log("Hola");
const saludoUsuario = (user) => console.log(`hola ${user}`);

saludo();
saludoUsuario("Marco");

// ~ Funciones dentro de funciones

const resta = (a) => {
  return (b) => a - b;
};

function suma2(a) {
  return function name(b) {
    return a - b;
  };
}

console.log(resta(9)(4));
console.log(suma2(9)(5));

// ~Funciones Autoinvocadas

(() => {
  let algo = "soy autoinvocada";
})();

// ~aply() y call()

const add = (a, b, c) => a + b + c;

const variable = [1, 1, 2, 3, 5, 8, 2];

let myAdd = add.apply(undefined, variable);

console.log(myAdd);

// ~argumentos en funciones

/*
 * Si hay mas parametros que argumentos, los argumentos faltantes
 * son undefines * Si hay más argumentos que parámatros, no devuelve error
 */

const rest = (a, b, c) => console.log(arguments);

rest(1, 2, 3);
