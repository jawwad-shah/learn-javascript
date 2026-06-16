// for of

/*
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number)
}
*/

// Map

let map = new Map();
map.set("PK", "Pakistan");
map.set("RU", "Russia");
map.set("AU", "Australia");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
