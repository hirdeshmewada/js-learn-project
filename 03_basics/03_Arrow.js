const user = {
  username: "hirdesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},Welcome to wesite`);
    // console.log(this);
  },
};
// user.welcomeMessage();  //hirdesh,Welcome to wesite
// user.username = "sam";
// user.welcomeMessage(); //sam,Welcome to wesite

// console.log(this); //{}

// function chai() {
//   let username = "hirdesh";
// //   console.log(this.username); //undefined
// }

// chai();

// const chai = function () {
//   let username = "hirdesh";
//   console.log(this.username); //undefined
// };
// chai()

// const chai = () => {
//   let username = "hirdesh";
//   console.log(this); //{}
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2 //17

// const addTwo = (num1, num2) => (num1 + num2)  //17

const addTwo = (num1, num2) => ({ username: "HIrdesh" }); //17

console.log(addTwo(9, 8)); //17



const myArray=[1,2,4,5,56]
// myArray.forEach(()=>())

