const villain = ['Joker', 'Lex Luthor', 'Dr. Doom'];
const hero = ['Batman', 'Superman'];

// const combined = villain.concat(hero);

// console.log(combined); // ['Joker', 'Lex Luthor', 'Dr. Doom', 'Batman', 'Superman']

const combined = [...villain, ...hero];

console.log(combined); // ['Joker', 'Lex Luthor', 'Dr. Doom', 'Batman', 'Superman']

// Rare case of nested arrays
const nestedArray = [224, 454, [3434, 7878], 435, [3254435, [243545]]];
console.log(nestedArray.flat()); // [224, 454, 3434, 7878, 435, 3254435, [243545]]
console.log(nestedArray.flat(2)); // [224, 454, 3434, 7878, 435, 3254435, 243545] // flat(Infinity) can be used to flatten all levels of nesting


console.log(Array.isArray(villain)); // true
console.log(Array.from('Hello')); // ['H', 'e', 'l', 'l', 'o']
console.log(Array.from({name: 'Bruce'}));
// [undefined] - Array.from can create an array from an array-like or iterable object, but in this case, the object is not iterable and does not have a length property, so it creates an array with a single undefined element.

