
let score = "33"; // string
console.log(typeof score)
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
//number


let score1 = "Ankita"; // string that can not be converted in number then output is NaN
console.log(typeof score1)
console.log(typeof score1)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
//NaN


let sc = "33abc" // string with number
let valueInNumber2 = Number(sc)
console.log(sc)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)
// NaN -> not a number


let score_1 = true; //  Boolean value gives output 0-> false or 1->true
console.log(typeof score_1)
let valueInNumber_1 = Number(score_1)
console.log(typeof valueInNumber_1)
console.log(valueInNumber_1)
// 1


let sc3 = null // if null in value of variable then output is 0
let valueInNumber3 = Number(sc3)
console.log(sc3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

// 0

let sc4 = undefined // if undefined in value of variable then output is NaN
let valueInNumber4 = Number(sc4)
console.log(sc4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)
// NaN



let isLoggedIn = undefined
let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);
// output is true
// "" -> false , null -> false , undefind -> false
// "Ankita" ->true
// 1 -> true   ,    0 -> false

console.log(+true)
console.log(+false)

let someNumber = 77
let someNumberInString = String(someNumber)
console.log(someNumber)
console.log(typeof someNumberInString)
console.log(someNumberInString)

//string 
// 77