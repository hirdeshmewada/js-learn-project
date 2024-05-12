const name="hirdesh";
const repoCount=50;



console.log(`Name is ${name} and repository count is ${repoCount}`);



const gameName=new String ('Hirdesh')

// console.log(gameName[0])          //H
// console.log(gameName.length);       //7
// console.log(gameName.toUpperCase()); //HIRDESH

console.log(gameName.charAt(2));  //r
console.log(gameName.indexOf('r'));  //2

const newString = gameName.substring(0,4); //Hird
console.log(newString);

const anotherString = gameName.slice(-9,4); //Hird
console.log(anotherString);

const newStringOne="   Hirdesh";  //___Hirdesh
console.log(newStringOne.trim());  //Hirdesh -->space is remove using trim 

const url="https://hirdesh.com/hirdesh%20mewada"
console.log(url.replace('%20','-'));  //https://hirdesh.com/hirdesh-mewada

console.log(url.includes('hirdesh'));   //true


const gameNameTwo=new String ('Hirdesh-mewada-com')
console.log(gameNameTwo.split('-'))  //[ 'Hirdesh', 'mewada', 'com' ]
