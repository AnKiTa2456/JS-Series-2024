const score = 400;
// console.log(score)

const balance = new Number(100);
//console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// mostly used when we make ecommerce website to show accurate value

const otherNumber = 143.5323     //important for interview
// console.log(otherNumber.toPrecision(2))    // 1.4e+2     toPrecision methods returns String value 
// console.log(otherNumber.toPrecision(3))   // 144
// console.log(otherNumber.toPrecision(4))  //143.5

const hundreds = 100000000000
//console.log(hundreds.toLocaleString('en-IN')); // it return indian value 
//1,00,00,00,00,000

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)


//+++++++++++++++++++++++++++++       Maths       +++++++++++++++++++++++++++++++++++


console.log(Math.abs(-4));  //4
console.log(Math.round(6.3))   //6
console.log(Math.ceil(9.3))  //10
console.log(Math.floor(4.3))   //4
console.log(Math.min(3, 54, 7, 5, 9, 6))    //3
console.log(Math.max(4, 5, 3, 67, 8, 5, 39))  //67
console.log(Math.random())  //0.8896481442728092  random value

console.log(Math.floor(Math.random() * 10) + 1); // random value

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min );     //random no between 10 - 20
console.log(Math.floor(Math.random() * (max - min + 1))  +  min );   // random no between 10 - 20