//Date
//let myDate = new Date();
// console.log(myDate.toDateString()) //Tue Jul 02 2024
// console.log(myDate.toLocaleTimeString()) //4:58:47 AM
// console.log(myDate.getFullYear())  //2024

// console.log(myDate.toTimeString())   //05:01:00 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.getMonth())    //6


let myDate = new Date(2024, 7, 2)
console.log(myDate.toString());                   //Fri Aug 02 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())               //Fri Aug 02 2024
console.log(myDate.toLocaleString())            //8/2/2024, 12:00:00 AM
console.log(typeof myDate);                    //object


let myCreateDate = new Date("2024-7-2");
console.log(myCreateDate.toLocaleDateString());      //7/2/2024

let myTimeStamp = Date.now();

console.log(myTimeStamp);                     //1719930390971
console.log(myCreateDate.getDate())           //2
console.log(Math.floor(Date.now() / 1000))    //1719930646

let newDate = new Date();
console.log(newDate);                        //2024-07-02T14:30:46.127Z
console.log(newDate.getDay());               //2
console.log((newDate.getMonth() + 1));       //7

// `${newDate.getDay()} and the time`
 

//important
newDate.toLocaleDateString('default', {
    weekday :"long",
    timeZone: ''
})