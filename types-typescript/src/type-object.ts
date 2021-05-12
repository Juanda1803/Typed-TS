// Type: object
let user: object;
user = {}; // Object

user = {
  id: 1,
  username: "Juanda1803",
  isPro: true,
};

console.log(user);

// Object vs object(Clase JS vs tipo TS)
const myObj = {
  id: 1,
  username: "Juanda1803",
  firstname: "Juan",
  isPro: true,
};

const isInstance = myObj instanceof Object; // clase Object JavaScript

console.log(isInstance);
console.log(myObj.username);
