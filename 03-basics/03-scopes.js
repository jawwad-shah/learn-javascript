// Scope refers to the accessibility of variables and functions in different parts of the code. In JavaScript, there are three types of scopes: global scope, function scope, and block scope.

// Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

var c = 797; // Global variable

{
  //   let a = 10; // Block-scoped variable
  //   const b = 20; // Block-scoped constant
  var c = 30; // Function-scoped variable (overrides the global variable 'c' within this block)
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // Output: 30 (the value of 'c' in the global scope is overridden by the 'c' declared in the block scope)

function one() {
  const user = "John"; // Function-scoped variable

  function two() {
    const price = 100; // Function-scoped variable
    console.log(user); // Accessing the 'user' variable from the outer function scope
  }
  // console.log(price); // ReferenceError: price is not defined (price is not accessible in the outer function scope)
  two(); // Calling the inner function to demonstrate access to the outer variable
}

one(); // Output: John (the inner function 'two' can access the 'user' variable from the outer function 'one')

addOne(5); // Output: 6 (the function 'addOne' is in the global scope and can be accessed from anywhere in the code)
function addOne(num) {
  return num + 1;
}

// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization (the function 'addTwo' is defined using a function expression and is not hoisted like function declarations)
const addTwo = (num) => num + 2;
