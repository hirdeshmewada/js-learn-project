const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

console.log(Math.PI);

// Math.PI = 4;
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bani");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,  //loop se nhi ayegi fir 
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
