const user = {
  username: "Jawwad Shah",
  price: 100,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to our website!`);
  },
};

// user.welcomeMessage();
// user.username = "Ali";
// user.welcomeMessage();

// console.log(this) // in node empty object, in browser window object

function one() {
  return this;
}
// console.log(one())

const arrowFunction = () => {
  return "Hey"; // in arrow function this is lexically inherited from the parent scope, in node empty object, in browser window object
};
console.log(arrowFunction());

const arrow = () => console.log("Hey");

console.log(arrow());
