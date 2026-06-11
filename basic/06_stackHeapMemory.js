// Stack (primitive) | Heap (non-primitive)

let myChannel = "Channel";
myChannel = "New Channel";

console.log(myChannel);

let user = {
  id: 763487564375,
  email: "user@user.com",
};

let anotherUser = {
  email: user.email,
};
console.log(anotherUser.email);
