// Primitive
// number, null, string, symbol, undefined, boolean, bigint

let number = 34;
let numberVal = 34.6;

let str = "Jawwad Shah";
let temp = null;
let isLoggedIn = true;
let email; // undefined

let id = Symbol("123");
let anotherId = Symbol("123");
console.table([id, typeof id, anotherId, typeof anotherId]);
console.log(id === anotherId);

let bigNumber = 999999999999n;
console.log(bigNumber, typeof bigNumber);

// Refrence (non primitive)

// Array, Object, Function
const arr = [true, 89, "Another"];
const obj = {
  id: 89078,
  name: "Jawwad Shah",
};

function sum() {
  console.log("Hello World");
}
