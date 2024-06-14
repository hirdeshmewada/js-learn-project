class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); //will see which class it extends and forwads its value
    this.email = email;
    this.password = password;
  }
  addCourses() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.addCourses();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai === masalaChai); //false

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true


