/*
Propiedades:
    Math.E - Math.Pi
Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/
console.log("hola debbug");

let numero = "33";
let cadena = 33;
let othernumber = 33;

if (numero == cadena) console.log("== son iguales pero de diferentes tipos");
else console.log("no son iguales ni en valor y tipo");

function prueba() {
  let hola = "Marco";

  function prob() {
    let hola = "Jorge";
    //		let hola="Guillermo";
    console.log("Dento de Funcion anidada : " + hola);
  }

  // var texto="Marco";
  //
  //	for ( var i = 0 ; i < 5 ; i ++) {
  //
  ////		var texto="Jorge";
  ////		let texto="Roger";
  //		console.log("Funcion anidada : " + texto);
  //	}

  prob();
  console.log(`Dentro de Funcion ${hola}`);
}

//console.log("Afuera de la funcion " + texto);

prueba();
