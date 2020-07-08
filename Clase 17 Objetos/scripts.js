const person = {
  name: "Juan",
  age: 26,
  hijos: true,
  sons: ["Laura", "Diego", "Pepe", "Rosa", "Tomás"],
  "2edad": 22,
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

/* for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
} */

/* for(const son of person.sons){
    console.log(son);
} */

console.log(
  `Hola ${person.name}. Tienes ${
    person.age
  } años y tus hijos se llaman ${person.sons.join(", ")}`
);
