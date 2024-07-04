//Singleton

// object literals

// Question:- create a symbol and use as object and return it as Symbol

const mySym = Symbol("key1")

const jsUser = {
  name: "Ankita",
  [mySym]: "Patel",  // we can not declare symbol like mySym : "Patel" it return string not Symbol datatype
  email: "ankitasingh0383@gmail.com",
  age: 23,
  location: "Mirzapur",
  IsLoggedIn: false,
  LastLocation: ["Monday", "Tuesday"]
}

// console.log(jsUser)
/*
{
  name: 'Ankita',
  email: 'ankitasingh0383@gmail.com',
  age: 23,
  location: 'Mirzapur',
  IsLoggedIn: false,
  LastLocation: [ 'Monday', 'Tuesday' ],
  [Symbol(key1)]: 'Patel'       this show Symbol datatype that is ans of question
}
*/

// console.log(jsUser.IsLoggedIn) // prefer not write this type of code although it is not incurrect
// console.log(jsUser["IsLoggedIn"]) // this is currect way to developed projects
// console.log(jsUser["LastLocation"])
// console.log(jsUser["email"])
// console.log(jsUser["age"])
// console.log(jsUser["name"])
// console.log(jsUser[mySym]) // that is currect way to  access Symbol data type
// console.log(jsUser.mySym)
/*
false
false
[ 'Monday', 'Tuesday' ]
ankitasingh0383@gmail.com
23
Ankita  */

jsUser.email = "ajfjkfhjf@chatgpt"
// Object.freeze(jsUser)
jsUser.email = "kanchan@gmail.com"
// console.log(jsUser.email);

jsUser.greetingTwo = function(){
  console.log("kjak");
}
jsUser.greeting = function () {
  console.log(`Hello Js User. My name is ${this.name} and my email id is ${this.email} `); // string interpulation
}
console.log(jsUser.greeting) //[Function (anonymous)]