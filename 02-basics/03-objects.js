// singleton

// Object Literals

const mySymbol = Symbol("key01");

const user = {
  [mySymbol]: "This is a symbol key",
  name: "Jawwad Shah",
  age: 18,
  location: "Karachi",
  isAdmin: true,
  hobbies: ["Coding", "Gaming", "listening rap music"],
};

// console.log(user.name); // dot notation
// console.log(user["age"]); // bracket notation

// adding new properties to the object
user.email = "jawwadshah@example.com";

// console.log(user[mySymbol], "TYPE OF", typeof user[mySymbol]); // accessing symbol key

user.email = "example@example.com"; // updating existing property

user.logIn = true; // adding new property

Object.freeze(user); // freezing the object to prevent further modifications

user.age = 19; // this will not update the age property as the object is frozen

console.log(user);
