// -----------FUNTIONS---------------

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("R");
  console.log("D");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();
// sayMyName;  //no print

// function addTwoNumbers(number1, number2)  { //parameters
//       console.log(number1 + number2);  //it is printing not returing
// }

function addTwoNumbers(number1, number2) {
  //parameters
  // let result =number1+number2
  // return result

  // console.log("Hirdesh")   //it will not be print after return

  return number1 + number2;
}

// addTwoNumbers(3,4);  //7  //arguments
addTwoNumbers(3, "4"); //34
addTwoNumbers(3, "a"); //3a
addTwoNumbers(3, null); //3a

const result = addTwoNumbers(3, 5);
console.log("Result:", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in `;
}

// console.log(loginUserMessage("Hirdesh"));
console.log(loginUserMessage());

function calculateCartPrice(val10, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 500));


const user={
  username:"hirdesh",
  price:900
}

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user)  //username is hirdesh and price is 900


// handleObject({
//   username:"hirdesh ji",
//   price:433
// })


const myNewArray =[200,400,600,500]

function returnSecondValue(getArray) {
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); //400
// console.log(returnSecondValue([100,1222,111,241])); //1222




