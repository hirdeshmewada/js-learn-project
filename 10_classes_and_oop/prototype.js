// let myName = "hirdesh   ";
//create a method to count the string value how many letters are in it
// console.log(myName.trim().length);

let myHeros = ["Hulk", "thor"];

let heroPower = {
  Hulk: "gussa",
  thor: "hammer",

  getSpiderPower: function () {
    console.log(`thor power is ${this.thor}`);
  },
};

Object.prototype.hirdesh = function () {
  console.log(`Hirdesh is present in all objects`);
};

// heroPower.hirdesh();
// myHeros.hirdesh();/
//sidha top level object me add krdi so array string function ke pass
// bo property chli gyi

Array.prototype.heyHirdesh = function () {
  console.log(`Hirdesh says Hello`);
};

// myHeros.heyHirdesh()
// heroPower.heyHirdesh()

//inheritance

const User = {
  name: "chai",
  email: "hirdesh@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignmnet",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiaurcode               ";
String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"hridesh   ".trueLength();
"hri".trueLength();
