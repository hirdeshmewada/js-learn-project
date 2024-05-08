//1.Primtive data type

//7 types : String Number,Boolean ,Undefined ,null. Symbol(making unique value wrp)
//BigInt....
const score= 100;
const scoreValue= 100.4;


const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=4234252522352523  //js will use bigInt
//2.Reference (Non Primitve):
//Array ,objects, Functions



const heros=["Shaktiman","naagraj","doga"];
let myObj={
    name:"hirdesh",
    age: 32,
    
}

const myFunction=function(){
    console.log("Hello WOrld");
}


//data type pta krna

console.log(typeof bigNumber);  //number

console.log(typeof outsideTemp);
console.log(typeof myFunction);  //function

//https://edutechwiki.unige.ch/en/ECMAScript_data_types#Primitive_Data_Types