// const tinderUser=new Object()  //this is also empty object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "Email@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hirdesh",
      lastname: "mewada",
    },
  },
};

// console.log(regularUser.fullname); //{ userfullname: { firstname: 'hirdesh', lastname: 'mewada' } }
// console.log(regularUser.fullname.userfullname.firstname);    //hirdesh

// console.log(regularUser.fullname?.userfullname.firstname);    //hirdesh  for api if yes then

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({},obj1, obj2);
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } //spread and assign

//database example

const users = [
  { id: 1, enail: "h@gmail.com" },
  { id: 2, enail: "h@gmail.com" },
  { id: 3, enail: "h@gmail.com" },
];

// users[1].email;
// console.log(tinderUser); //{ id: '123abc', name: 'sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); //all keys are now in array string  //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //all values are now in array string [ '123abc', 'sammy', false ]

// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.id);

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hirdesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course; //de-structure object
// console.log(courseInstructor); //Hirdesh
console.log(instructor); //Hirdesh

// const navbar=({company})=>{

// //about react
// }

// navbar(company="hitesh")

//api --kitchen restraunt
//mostly values are in json

// {
//   "name":"Hirdesh",
//   "coursename":"js in hindi ",
//  " price":"free"  //treated as json
// }

///sometimes api are in array format
//json -javascript object notation formatter used in api call
// {
//   {},
//   {}
// }
