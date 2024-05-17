//array
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// //arrays inside arrays--as above you can see it
// console.log(marvel_heros[3][1]);  //batman

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const all_new_heros = [...marvel_heros, ...dc_heros]; //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
//both concat and spread cam be used
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

//console.log(Array.isArray("hitesh"))  //false
//console.log(Array.from("hitesh"))  //[ 'h', 'i', 't', 'e', 's', 'h' ]


// console.log(Array.from({name:"Hirdesh"}));  //interesting output-->[]

let socre1 =100
let socre2 =200
let socre3 =300
console.log(Array.of(socre1,socre2,socre3));  //[ 100, 200, 300 ]

