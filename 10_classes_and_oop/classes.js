// // ES6

// class User {
//   constructor(username, email, password) {
//     //jaise hi classs initialize to constructor to call ho jaega
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   Changeusername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.Changeusername());

//Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  {
    return `${this.password}abc`;
  }
};

User.prototype.Changeusername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "chai@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.Changeusername());
