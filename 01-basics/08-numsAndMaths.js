// Numbers and Maths

// Numbers in JavaScript are 64-bit floating point which supports both integers and decimals, and you can do calculations with +, -, *, /, %.
const score = 100;

/* 
Number is a wrapper object for primitive number values. It provides methods and properties for working with numbers, such as toFixed(), toExponential(), and toPrecision(). However, in most cases, you can simply use primitive number values without needing to create Number objects.
*/
const balance = new Number(1000);

console.log(score);
console.log(balance);

console.log(balance.toString().length); // toString() converts the number to a string, then length counts its characters. "1000" has 4 characters so it returns 4.

console.log(balance.toFixed(2)); // toFixed(2) formats the number to 2 decimal places, so "1000" becomes "1000.00".

console.log(balance.toExponential(2)); // toExponential(2) converts the number to exponential notation with 2 decimal places, so "1000" becomes "1.00e+3".

console.log(balance.toPrecision(3)); // toPrecision(3) formats the number to 3 significant digits, so "1000" becomes "1.00e+3".

// Numbers have properties like MAX_VALUE, MIN_VALUE, and NaN to check limits and handle errors in calculations.

console.log(Number.MAX_VALUE); // Largest number JavaScript can represent.

console.log(Number.MIN_VALUE); // Smallest number JavaScript can represent.

console.log(Number.NaN); // Not a Number, results from invalid operations.

// ================= Maths ==========================

console.log(Math.abs(-5)); // abs() returns the absolute value of a number, so it converts -5 to 5.

console.log(Math.round(45.67)); // round() rounds a number to the nearest integer, so it converts 45.67 to 46.

console.log(Math.ceil(45.67)); // ceil() rounds a number up to the next largest integer, so it converts 45.67 to 46.

console.log(Math.floor(45.67)); // floor() rounds a number down to the next smallest integer, so it converts 45.67 to 45.

console.log(Math.max(10, 20, 5)); // max() returns the largest of the given numbers, so it returns 20.

console.log(Math.min(10, 20, 5)); // min() returns the smallest of the given numbers, so it returns 5.

console.log(Math.random()); // random() generates a random number between 0 (inclusive) and 1 (exclusive), so it returns a decimal like 0.123456789. (Mostly used for things like random colors, random positions, etc.)

console.log(Math.floor(Math.random() * 10) + 1); // To get a random number between 1 and 10, you can multiply the result of Math.random() by 10 and then add 1. This will give you an integer between 1 and 10.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // To get a random number between any two values (min and max), you can use the formula: Math.floor(Math.random() * (max - min + 1)) + min. This will give you an integer between min and max, inclusive. In this case, it will return a random number between 10 and 20.
