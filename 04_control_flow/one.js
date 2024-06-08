//if

// if (true) {
//code will execute when condition fulfilled
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
// }
//<,>,<=,>=,==,!=,===(check type)

// const temperature=41
// if (temperature===40) {
//     console.log("TEMP IS 40")
// }
// else{
// console.log("temperature is more than 40");
// }

// console.log("execute");

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`);//ReferenceError: power is not defined

// const balance=1000
// if(balance>400)console.log("test");

// if (balance<500) {
//     console.log("less than");
// }else if (balance<750) {
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitcard = true;

if (isUserLoggedIn && debitcard) {
  console.log("Allow to buy  course");
}


const loggedfromgoogle=true
const loggedfromemail=false

if (loggedfromemail||loggedfromgoogle) {
    console.log("User logged in");
}