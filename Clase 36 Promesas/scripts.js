/*
*Una promesa es un objeto con 2 callbacks internos
    ~resolve : se ejecuta si todo ok
    ~reject: si algo va mal */

const users = [
  { id: 1, name: "Dorian" },
  { id: 2, name: "Laura" },
  { id: 3, name: "Carlos" },
];
const emails = [
  { id: 1, email: "dorian@gmail.com" },
  { id: 2, email: "laura@gmail.com" },
];

const getUser = (id) => {
  const user = users.find((usuario) => usuario.id === id);
  // eslint-disable-next-line no-return-assign
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    if (!user) reject(`Doesn't exist an user with id ${id}`);
    else resolve(user);
  });
};

const getEmail = (user) => {
  const correo = emails.find((email) => email.id === user.id);
  return new Promise((resolve, reject) => {
    if (!correo) reject(`${user.name} hasn't email`);
    setTimeout(() => {
      resolve({
        id: user.id,
        name: user.name,
        email: correo.email,
      });
    }, 4000);
  });
};

const getMail = (user) => {
  const correo = emails.find((email) => email.id === user.id);
  return new Promise((resolve, reject) => {
    if (!correo) return reject(`${user.name} hasn't email`);
    setTimeout(() => {
      console.log("destro de timeOut");
      resolve({
        name: user.name,
      });
    }, 4000);
  });
};

// getUser(1)
//   .then((user) => {
//     return getEmail(user);
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// getUser(2)
//   .then((user) => getEmail(user))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

getMail(users[2])
  .catch((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
/* getUser(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log); */

const cuadrado = (value, bool = false) => {
  return new Promise((resolve, reject) => {
    if (bool) reject("probando reject");
    setTimeout(() => {
      resolve({ numero: value.numero, result: value.numero * value.numero });
    }, 2000);
  });
};

cuadrado({
  numero: 2,
})
  .then((obj) => {
    console.log(obj);
    return cuadrado({ numero: obj.result });
  })
  .then((obj) => {
    console.log(obj);
  })
  .catch((err) => {
    console.log(err);
  });
