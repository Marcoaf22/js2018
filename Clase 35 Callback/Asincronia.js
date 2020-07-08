/*
~ Operaciones Concurrentes y Paralelas
    ~
~ Operaciones Bloqueantes y No Bloqueantes

~ Operaciones Sincronia y Asincronos
    ~ El asincrono sera siempre no bloqueante
    ~ el Asincrono puede ser bloqueantes y no bloqueante

    */

// console.log("Condigo Sincrono");

// const dos = () => {
//   console.log("dos");
// };

// const uno = () => {
//   console.log("uno");
//   dos();
//   console.log("tres");
// };

// uno();

// console.log("Fin");

// ----------------------------------------------

// console.log("Codigo Asincrono no Bloqueantes");

// console.log("inicio");

// const Dos = () => {
//   setTimeout(() => {
//     console.log("dos");
//   }, 1000);
// };

// const uno = () => {
//   setTimeout(() => {
//     console.log("uno");
//   }, 0);
//   Dos();
//   console.log("tres");
// };

// uno();

// console.log("fin");

// ------------------------------------------------

// console.log("La cola se ejecuta al final siempre");

// setTimeout(function () {
//   console.log("1 s");
// }, 1000);

// setTimeout(function () {
//   console.log("0 ms");
// }, 0);

// console.log(new Date().toLocaleTimeString());
// var i = 0;
// while (i < 100000) {
//   console.log(i++);
// }
// console.log(new Date().toLocaleTimeString());
