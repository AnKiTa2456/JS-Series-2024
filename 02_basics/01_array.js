const arr = [4, 5, 3, 2, 6]
//console.log(arr[2])

const arr1 = ["shaktiman", "iornman", "nagraj"]
//console.log(arr.concat(arr1[2][4]))   // concat method to adding two arrays in right way

const myArray = (7, 5, 8, 2, 9)
// console.log(myArray.toLocaleString()) //9
// console.log(myArray.toString())        //9

let myHeros = ["shaktiman", "iornman", "nagraj"]
let Dc_heros = ["AntMan", "SpiderMan"]
let all_heroes = [...myHeros, ...Dc_heros];
console.log(all_heroes)

//creating array with constructor

let myArray1 = new Array(4, 5, 32, 6, 54, 48)
// console.log(myArray1)

const another_array = [3, 4, 6, [6, [2, 7, 9], 5, [7, [15, 6, 12], 8]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)                                   /* [
                                                                       3, 4, 6, 6, 2, 7,
                                                                       9, 5, 7, 15, 6, 12,
                                                                       8
                                                                     ]
                                                                  */   
                                                                
console.log(Array.isArray("Ankita"))  //false
console.log(Array.from("Ankita"));    // [ 'A', 'n', 'k', 'i', 't', 'a' ]

//Important  interesting for interview
console.log(Array.from({name : "Ankita"}))    //it can't convert key value into array so it returns [] empty array

let score1 =100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));  //[ 100, 200, 300, 400 ] this is also a method to create Array

