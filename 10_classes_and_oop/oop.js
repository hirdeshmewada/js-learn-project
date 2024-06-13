const user = {
  username: "Hirdesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User Details From Database");
    // console.log(`Username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne=new Promise()
// const date= new Date() maya instance baannata hain new

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  //   return this; //implicitky it is defined inside
}

const userOne = new User("Hirdesh", 12, true);
// console.log(userOne);

const userTwo = new User("Mewada", 13, false);
console.log(userOne.constructor); //[Function: User]
console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);

//with new keyboard empty instanceoobject create hota hain
//fir constructor function call hota hain new keyboard se
//all argument inject using this keyboard
//all values will be assgined
