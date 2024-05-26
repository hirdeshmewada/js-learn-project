// var c=300
let a = 400;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(a); //10 -->block vs global scope
}

// console.log(a);  //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //30
// console.log(a); //40


//scope

function one() {
  const username="hirdesh"
  function two(){
    const website="youtube"
    // console.log(username);
  }
  // console.log(website);
  two()
}
one()


if (true) {
  const username="Hirdesh"
   if (username=="Hirdesh") {
    const website=" youtube"
    // console.log(username+website);  //Hirdeshyoutube
   }
  //  console.log(website); //refernce error
}
// console.log(username);//error

//******************************interesting */
console.log(addone(5)); //6
function addone(num){  //function 
  return num +1
}


// addTwo(5)   //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo =function(num){ //espression  function
  return num +2
}

console.log(addTwo(5)); //7


