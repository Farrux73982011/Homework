let cars = [
  {
    id: 1,
    model: "lamborgini",
    company: "urus",
    price: 266000,
    engineForce: 6.5,
  },
  {
    id: 2,
    model: "buggatti",
    company: "cheron",
    price: 500000,
    engineForce: 7,
  },
  {
    id: 3,
    model: "malibu 2",
    company: "gm",
    price: 33000,
    engineForce: 2.4,
  },
  {
    id: 4,
    model: "gentra",
    company: "gm",
    price: 17000,
    engineForce: 1.5,
  },
  {
    id: 5,
    model: "gelen vagen",
    company: "mercedes",
    price: 300000,
    engineForce: 4,
  },
  {
    id: 6,
    model: "matiz",
    company: "daewoo",
    price: 3000,
    engineForce: 6,
  },
];

let p1 = prompt("Какая компания?").trim().toLowerCase();
let abc = cars.filter((item) => item.company === p1);
let models = {};

abc.forEach((item) => {
  models += " car " + item.model + " money " + item.price;
});
confirm(models);

let which_car = prompt("Какая машина?");

if (which_car === "lamborgini") {
  let p = prompt("Гони 26600");
  if (p >= 26600) {
    confirm("Сдача " + (p - 26600).toString());
  } else if (p === 26600) {
    confirm("Всё хорошо");
  } else if (p >= 26600) {
    confirm("Ешё надо " + (26600 - p).toString());
  } else prompt("ERROR");
} else if (which_car === "buggati") {
  let p = prompt("Гони 500000");
  if (p >= 500000) {
    confirm("Сдача " + (p - 500000).toString());
  } else if (p === 500000) {
    confirm("Всё хорошо");
  } else if (p >= 500000) {
    confirm("Ешё надо " + (500000 - p).toString());
  } else prompt("ERROR");
} else if (which_car === "malibu 2") {
  let p = prompt("Гони 3300");
  if (p >= 3300) {
    confirm("Сдача " + (p - 3300).toString());
  } else if (p === 3300) {
    confirm("Всё хорошо");
  } else if (p >= 3300) {
    confirm("Ешё надо " + (3300 - p).toString());
  } else prompt("ERROR");
} else if (which_car === gentra) {
  let p = prompt("Гони 1700");
  if (p >= 1700) {
    confirm("Сдача " + (p - 1700).toString());
  } else if (p === 1700) {
    confirm("Всё хорошо");
  } else if (p >= 1700) {
    confirm("Ешё надо " + (1700 - p).toString());
  } else prompt("ERROR");
} else if (which_car === "gelen vagen") {
  let p = prompt("Гони 300000");
  if (p >= 300000) {
    confirm("Сдача " + (p - 300000).toString());
  } else if (p === 300000) {
    confirm("Всё хорошо");
  } else if (p >= 300000) {
    confirm("Ешё надо " + (300000 - p).toString());
  } else prompt("ERROR");
} else if (which_car === "matiz") {
  let p = prompt("Гони 3000");
  if (p >= 3000) {
    confirm("Сдача " + p - (3000).toString());
  } else if (p === 3000) {
    confirm("Всё хорошо");
  } else if (p >= 3000) {
    confirm("Ешё надо " + (3000 - p).toString());
  } else prompt("ERROR");
}
