// Primitive 

/*  7 Types of primitive data type
 String , Number, null, undefined, boolean,symbol,string, BigInt.


const score = 100
const scoreValue = 200.34
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)   //false

const bigNumber = 2342384367848547n   //BigInt

//Reference (Non Primitive)

// Arrays , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ankita",
    age: 22
}

//function

const myFunction = function () {
    console.log("Hello world");
}
console.log(typeof myFunction)//FUNCTION
console.log(typeof bigNumber)//bigint
console.log(typeof outsideTemp)//object
console.log(typeof isLoggedIn)//boolean
console.log(typeof anotherId)//symbol
console.log(typeof scoreValue)//number


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(primitive) , Heap(non-primitive)

let myYoutubename = "ankitapatel@gmail.com"
let anotherName = myYoutubename;
anotherName = "chaiaurcode@gmail.com"

console.log(myYoutubename); //ankitapatel@gmail.com
console.log(anotherName);  //ahaiaurcode@gmail.com */
//yha pr value copy hota hai because ye primitive (Stack me data store krata hai )hai aur isme value copy hota hai

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "akaflak@google.com"
console.log(userTwo.email) //akaflak@google.com
console.log(userOne.email)  //akaflak@google.com

//Value same aayi hai because yha pr Heap me value save ho rha hai aur Heap value ko Reference deta hai naki copy krta hai

