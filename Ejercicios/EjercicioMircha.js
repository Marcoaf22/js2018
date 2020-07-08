/*
 * Programa una funcion que obtenga un numero aleatorio entre 501 y 600 */
const random = () => Math.round(Math.random() * 100) + 500;
let i = 0;
// while (i < 100) {
//   console.log(random());
//   i++;
// }

const capicua = (numero = 0) => {
  if (typeof numero === "number") {
    let capicu = numero.toString().split("").reverse().join("");
    return capicu === numero.toString() ? "Si es capicua" : "No es capicua";
  }
  return false;
};

const factorial = (numero = 0) =>
  numero === 0 ? 1 : numero * factorial(numero - 1);

// console.log(factorial(3));

const esPrimo = (numero = 0) => {
  if (typeof numero != "number") return false;
  if (numero === 1 || numero === 2) return true;
  let n = 2;
  let res;
  do {
    res = numero % n;
    n++;
  } while (res != 0 && n < numero);
  return n === numero;
};

// console.log(esPrimo(14));
// i = 1;
// while (i < 200) {
//   if (esPrimo(i)) console.log(`${i} es un numero primo`);
//   i++;
// }
// console.log(0 == false);

const getRemainTime = (deadline) => {
  let now = new Date();
  let remainTime = (new Date(deadline) - now + 1000) / 1000;
  let remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
  let remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
  let remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
  let remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countDown = (deadline, elem, finalMessage) => {
  const ele = document.getElementById("div");
  const timerUpdate = setInterval(() => {
    let t = getRemainTime(deadline);
    ele.textContent = `${t.remainDays}d : ${t.remainHours}h : ${t.remainMinutes}m : ${t.remainSeconds}s`;
    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      ele.textContent = "Muchas Gracias";
    }
    console.log(
      `${t.remainDays}d : ${t.remainHours}h : ${t.remainMinutes}m : ${t.remainSeconds}s`
    );
  }, 1000);
};
let hola = new Date("Mon Jul 06 2020 18:51:10 GMT-0400 (hora de Bolivia)");
countDown(hola);
