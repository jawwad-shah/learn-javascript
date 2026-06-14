const objOne = {
  name: "Jawwad",
  age: 18,
};

const objTwo = {
  email: "email@email.com",
  isLoggedIn: true,
}; 

const combinedObj = { ...objOne, ...objTwo }; // This is called the spread operator, it allows us to combine multiple objects into one. It takes all the properties of the objects and combines them into a new object. If there are any duplicate properties, the value from the last object will overwrite the previous ones.

console.log(combinedObj);
