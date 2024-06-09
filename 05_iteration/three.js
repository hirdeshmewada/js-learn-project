//for of
//["","",""]
//{}
const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
//   console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
}

//maps
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
//   console.log(key, ":-", value);
}


const myObject={
    'game1':'nfs',
    'game2':'spiderman'
}

for (const [key,value] of myObject) {
    // console.log(key, ":-", value);  //TypeError: myObject is not iterable
}