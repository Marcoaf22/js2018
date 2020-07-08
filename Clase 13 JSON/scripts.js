/*
* JSON JavaScript Object Notation

~ Pueden ir en solo comillas dobles

*/

const json = {
  cadena: "json",
  numero: 23,
  boolean: "true",
  arreglo: ["uno", "dos", "tres"],
  nulo: null,
  //   indefinido: undefined, no es un formato valido de JSON
};

console.log(json);

console.log("{}");

console.log(JSON.parse("{}"));

console.log(JSON.parse("[1,2,3,4]"));

console.log(JSON.parse('{"bool":true}'));
/*
* stringify()
    ~ Convierte un objeto JSON "valido" a string
    ~ las PROPIEDADES van entre comillas dobles
*/

console.log(JSON.stringify({ nombre: 23 }));

console.log(JSON.stringify(json));

console.log(json.cadena[3]);
