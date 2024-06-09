// const coding = ["js", "ruby", "python", "java", "cpp"];

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num) => num > 4);
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});
// console.log(newNums2);  //[ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 1985 },

  { title: "Book Two", genre: "Fiction", publish: 1991, edition: 1995 },

  { title: "Book Three", genre: "History", publish: 2004, edition: 2015 },

  { title: "Book Four", genre: "Science", publish: 1971, edition: 1985 },

  { title: "Book Five", genre: "Non-Fiction", publish: 2001, edition: 2003 },
];

// const userBooks = books.filter((bk) => bk.genre == "History");
const userBooks2 = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre == "History";
});

// console.log(userBooks);
console.log(userBooks2);
