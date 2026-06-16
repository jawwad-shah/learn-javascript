const langugaes = ["Java", "JavaScript", "Cpp"];
// langugaes.forEach(e => console.log(e))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = numbers.filter((number) => number % 2 == 0);
// console.log(even)

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newNumbers);

const nums = [1, 2, 3];
const myNums = nums.reduce((acc, val) => acc + val, 0);
console.log(myNums);

const shoppingCart = [
  { courseName: "JS Course", price: 3999 },
  { courseName: "Py Course", price: 2999 },
  { courseName: "C Course", price: 8999 },
  { courseName: "Flutter Course", price: 8999 },
];


const totalPrice = shoppingCart.reduce((acc, price) => acc + price.price, 0)
console.log(totalPrice)