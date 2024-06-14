class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hirdesh = new User("hirdesh");
// console.log(hirdesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}
const iphone = new Teacher("iphone", "iphone@gamil.com");
console.log(iphone.logMe());
// console.log(iphone.createId()); //at Object.<anonymous

