// reduce()

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currval:${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingcart = [
  { itemName: "js course", price: 2990 },
  { itemName: "mobile course", price: 12949 },
  { itemName: "data scientist", price: 24990 },
  { itemName: "pycourse", price: 4550 },
];
const Pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0);
console.log(Pricetopay);
