let myDate=new Date()
console.log(myDate);  //2024-05-14T10:35:39.780Z
console.log(myDate.toString());  //Tue May 14 2024 16:06:48 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); //5/14/2024

console.log(myDate.toLocaleString());     //5/14/2024, 4:07:39 PM
console.log(myDate.toTimeString());     // 16:09:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // Tue May 14 2024

console.log(typeof myDate);  //object

let myCreatedDate=new Date(2023,0,23);  //Mon Jan 23 2023
console.log(myCreatedDate.toDateString());

let myCreateDate=new Date(2023,0,23,5,3);  //Mon Jan 23 2023
console.log(myCreateDate.toLocaleString());//1/23/2023, 5:03:00 AM



let myCreateDate2=new Date("2023-01-14");  //1/14/2023, 5:30:00 AM
console.log(myCreateDate2.toLocaleString());

let myCreateDate3=new Date("01-14-2023");  //1/14/2023, 12:00:00 AM
console.log(myCreateDate3.toLocaleString());

let myTimeStamp =Date.now()

console.log(myTimeStamp);  //1715684015371 mili second value
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //seoncd =1715684159

let newDate=new Date() 
console.log(newDate.getDate());  //14
console.log(newDate.getMonth());  //4
console.log(newDate.getDay());  //2


newDate.toLocaleString('defualt',{
    weekday:"long",

})


