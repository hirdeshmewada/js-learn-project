// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
 
// console.log("2">1);  //true
// console.log("02">1); // true


// console.log(null>0);  //false
// console.log(null==0);  //false and equality and  comparision work differentl
// //null is converted into 0 as in below you can see nill>=0 is true
// console.log(null>=0); //true not predictable results are there


console.log(undefined==0);  //false
console.log(undefined>0);   //false
console.log(undefined<0);   //false  //these compare confusing not priorty

//=== -> strictly check datatype also
console.log("2"===2);  //false also compare datatype
console.log("2"==2);  //true