const myNumber = [1,2,3,4,5,6,7,8,9,10]

// let addMyNummber = myNumber.map( (num) => {
//     return num+ 10;
// })
let addMyNummber = myNumber.filter((num)=>num < 4)

console.log(addMyNummber)
  

const newNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums);