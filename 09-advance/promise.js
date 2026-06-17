// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise Resolved");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// const promiseTwo = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res({ username: "Jawwad Shah", email: "example@example.com" });
//   }, 1000);
// });
// promiseTwo.then(function (user) {
// //   console.log(user);
// });

// const promiseThree = new Promise(function (res, rej) {
//   let err = false;
//   if (!err) {
//     res({ name: "Jawwad Shah", password: "123VGY&&90" });
//   } else {
//     rej("ERROR: Something went wrong");
//   }
// });

// promiseThree
//   .then(function (data) {
//     console.log(data);
//     return data;
//   })
//   .then(function (data) {
//     console.log(data.name);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("the promise is either resolved or rejected");
//   });

const promiseFour = new Promise(function (res, rej) {
  let err = false;
  if (!err) {
    res({ name: "JavaScript", password: "123VGY&&90" });
  } else {
    rej("ERROR: Something went wrong");
  }
});

async function consumePromiseFour() {
  try {
    const res = await promiseFour;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

getAllUsers()