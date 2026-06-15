// Immediately Invoked Function Expression(IIFE)

(function () {
  console.log("IIFE");
})();

((name)=>console.log(`Hello ${name}`))("World");