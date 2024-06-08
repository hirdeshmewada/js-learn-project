//Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named iife
  console.log(`DB CONNECTED`);
})(); ///semicolon is important

// ()==function definition ()=function call
//global scope ke pollution se problem hoti hain toh use hatane ke liye use kerte hai iife

((name) => {
  console.log(`DB CONNECTED 2 ${name}`);
})("hirdesh");
//chai();
