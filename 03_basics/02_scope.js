// var c=300
let a = 400;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a); //10 -->block vs global scope
}

// console.log(a);  //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
console.log(c); //30
console.log(a); //40
