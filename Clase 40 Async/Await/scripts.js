/*
 *Async / await
 *Es para hacer funciones asincronas de forma nativa d
 * devuelve una promesa try y Catch */

const getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Marco");
    }, 2000);
  });
};

// ~ async establece que sera una funcion asincrona, no se ejecutara de forma secuencial
// ~ y devolvera una promesa
// ~ Ademas automaticamente devolvera una Promesa
const sayHello = async () => {
  // ~ await establecle un blockeo hasta que se resulva (getName)) y solo esta disponible con async
  const name = await getName();
  return `Hello ${name}`;
};

sayHello().then((res) => console.log(res));

const users = [
  { id: 1, name: "Dorian" },
  { id: 2, name: "Laura" },
  { id: 3, name: "Carlos" },
];
const emails = [
  { id: 1, email: "dorian@gmail.com" },
  { id: 2, email: "laura@gmail.com" },
];

// ~ se supone que va a devolver una promesa usando async y Return a los datos o response
const getUser = async (id) => {
  const user = users.find((user) => user.id == id);
  // ~ Como no hay reject y resolve , reject <==> lanzamos un nuevo error
  if (!user) throw new Error(`Doesn't exist an user with id ${id}`);
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((email) => email.id == user.id);
  if (!email) throw new Error(`El Usuario ${user.name} hasn't email`);
  else
    return {
      id: user.id,
      name: user.name,
      email: email.email,
    };
};

const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const res = await getEmail(user);
    return `${user.name} email is ${res.email}`;
  } catch (error) {
    console.log(error);
  }
};

// getEmail(getUser(2).then(r).then((res) => console.log(res));

// getUser(4)
//     .then((res) => console.log(res))

getInfo(2).then((res) => console.log(res));

const cuadrado = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ value, result: value * value });
    }, 2000);
  });
};

const Asincrono = async () => {
  const a = await cuadrado(10);
  const b = await cuadrado(4);
  console.log(`Async Function: ${a.result}`);
  console.log(`Async Function: ${b.result}`);
};

Asincrono();

// *Ejemplo mdn
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
