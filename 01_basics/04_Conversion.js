console.log(2 >> 1)
console.log(2 >= 1)
console.log(2 != 1)

//console.log("3" > 1)
//console.log("02" > 4)

// this type of conversion avoid please its create confusion.

console.log(null === 0)  //false
console.log(null == 0)   //false
console.log(null >= 0)   //true

// the reason is that an equality check == and comparisons > < >= <= work differently 
// comparisions convert null to a number, treating it as 0.
// That's why (3) null >= is true and (1) null > 0 is false.

console.log(undefined === 0)  //false
console.log(undefined == 0)   //false
console.log(undefined >= 0)   //false