// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " "=>SPACE, {}, [], function(){}

const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("Array is empty");
}
