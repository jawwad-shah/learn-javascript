function calculateCartPrice(...price) {
  return price;
}

console.log(calculateCartPrice(400, 200, 899, 130));

const user = {
  name: "Jawwad Shah",
  price: 400,
};

function handleUser(anyObject) {
  return `User name is ${anyObject.name} and price is ${anyObject.price}`;
}

console.log(handleUser(user));
