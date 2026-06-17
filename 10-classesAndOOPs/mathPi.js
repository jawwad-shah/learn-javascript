const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

Object.defineProperty(Math, "PI", {
  value: 3,
  writable: true,
  configurable: true,
});
Math.PI = 3;

console.log(Math.PI);
