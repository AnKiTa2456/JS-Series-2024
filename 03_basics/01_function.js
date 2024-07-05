function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")
    console.log("A")
}
//console.log(sayMyName())

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }

function addTwoNumbers(num1, num2) {
    return (num1 + num2)
}
const result = addTwoNumbers(4, 5)
// console.log("Result: ", result); //Result:9
// console.log(addTwoNumbers(4, "a"))//4a
// console.log(addTwoNumbers(4, null))//4

function loginUserMessage(username) {
    if (!username) {
        console.log("Please Enter a username")
    }
    return;
    return `${username} Just Logged in`
}
// console.log(loginUserMessage("Ankita")) //Ankita Just Logged in
// console.log(loginUserMessage(""))//just logged in
//console.log(loginUserMessage()) // Please Enter a username  // undefined

//rest operator ...num return array
function calculateCartPrice(...num1){
    return num1

}
//console.log(calculateCartPrice(244,44,22,66))    //[244,44,22,66]

//rest operator with value    (val1,val2...num )return array
function calculateCartPrice(val1,v1l2,  ...num1) {
    return num1

}
//console.log(calculateCartPrice(244, 44, 22, 66 , 11,31))  //[244,44]
const user = {
    username:"ankita",
    prices: 7878
}
function handleProject(anyobject){
    console.log(`username is ${anyobject.username} and price is 
        ${anyobject.price}`)
}
// handleProject()
handleProject({
    username:"ankita",
    price:  898
})

const mynewArray = [32,43,64,32]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([34,5,2,12,67,9,80,34]));