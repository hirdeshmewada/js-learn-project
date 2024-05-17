//array is object collection of multiple items in single variables
//primitive is ,these arrays are resizable
//mixed datatype it can be
//they are not associative
//zero based indexing
// array==create shallow copies =is acopy share the same reference point to same underliying value
//deep means that it not share same properties

const myArr = [0, 2, 3, 4, 5, true, "hirdesh"];
// console.log(myArr[0]);
// console.log(myArr[3]);

const myHeroes = ["shaktiman", "nagrajj"];
// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myHeroes[1]);

//Array Methods

// myArr.push(6);  //6 will also be added at back
// console.log(myArr);  //[ 0, 2, 3, 4, 5, true, 'hirdesh', 6 ]
// myArr.pop(); //remove last value
// console.log(myArr); //[ 0, 2, 3, 4, 5, true, 'hirdesh' ]

//myArr.unshift(9);  //insert start of array all values are shifted
// myArr.shift()
// console.log(myArr);  //[ 2, 3, 4, 5, true, 'hirdesh' ]

// console.log(myArr.includes(9)); //falsw that is boolean
// console.log(myArr.indexOf(9));   ///-1
// console.log(myArr.indexOf(3)); //2

// const newArr = myArr.join();
// console.log(myArr);   //[ 0, 2, 3, 4, 5, true, 'hirdesh' ]-->array
// console.log(newArr);  //0,2,3,4,5,true,hirdesh  -->string type

//skuce ,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);    // [ 2, 3 ]
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //[ 2, 3, 4 ]  -->it takes out the portion of original array 
//it takes all element 
console.log("C ", myArr);    //C  [ 0, 5, true, 'hirdesh' ]
console.log(myn2);  //[ 2, 3, 4 ]
