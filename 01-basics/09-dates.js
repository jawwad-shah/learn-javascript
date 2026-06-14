const date = new Date(); // current date and time

console.log(date); 

console.log(date.getFullYear()); // year
console.log(date.getMonth()); // month (0-11)
console.log(date.getDate()); // day of the month (1-31)
console.log(date.getDay()); // day of the week (0-6, where 0 is Sunday and 6 is Saturday)

console.log(date.toString()); // string representation of the date
console.log(date.toISOString()); // ISO string representation of the date
console.log(date.toLocaleDateString()); // locale-specific date string
console.log(date.toLocaleTimeString()); // locale-specific time string

console.log(typeof date); // object
console.log(date instanceof Date); // true

const specificDate = new Date('2022-01-01'); // specific date
console.log(specificDate);
console.log(specificDate.toDateString()); // string representation of the specific date

const myTimeStemp = Date.now()
console.log(myTimeStemp); // current timestamp in milliseconds since January 1, 1970
console.log(specificDate.getTime()); // timestamp of the specific date in milliseconds since January 1, 1970
