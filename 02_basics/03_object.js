//singleton using constructor we create "objects"
// Object,create  //constructor method

//object can be declared as literals(no singleton) and constructor

const mysym = Symbol("key1"); //symbol..

const jsUser = {
  name: "Hirdesh",
  "full name": "Hirdesh Mewada",
  [mysym]: "mykey1", //  [Symbol(key1)]: 'mykey1'
  age: 18,
  location: "Bhopal",
  email: "hirdesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(jsUser.email); //there is one more way  //hirdesh@google.com
//
// console.log(jsUser["email"]); //other way  //hirdesh@google.com

// console.log(jsUser["full name"]);
// console.log(jsUser.mysym); //mykey1
// console.log(typeof jsUser.mysym);  //string

// console.log(jsUser["mysym"]);

jsUser.email = "hirdesh@amazon.com"; //change values
// Object.freeze(jsUser); //it will freezes the values
jsUser.email = "hirdesh@chagpt.com";
// console.log(jsUser["email"]); //hirdesh@amazon.com
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greetingTwo = function () {
  console.log("${this.name}");
  console.log("hello,${this.name}");
};

// console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); //Hello Js User
console.log(jsUser.greetingTwo()); //Hello Js User
