const user = {
    username: "ankita",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }//this - current context  ko refer krta hai
}
console.log(this)  //{} in NODE environment but in console it return Window {window: Window, self: Window, document: document, name: '', location: Location, …}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


function chai(){
    let username = "ankita"
    console.log(this.username) //undefined
}
chai()

const arrrowfunction = () => {
    const username = "ankita patel"
    console.log(this.username); //undefined
}
arrrowfunction()


const addTwo = (num1, num2)=> (num1 + num2)   // if you dont write { } you dont need to write return keyword
const addTwoo = (num1, num2) =>{return (num1 + num2)}  //if you write { } then you have to write return keyword
// both are currect
//nut if you  want to return Object u have to write in {}
const addToo = (num1, num2) => ({ username: "ankita patel" }) //{ username: 'ankita patel' }
console.log(addTwo(5,9))   //14

const myArray = [7,3,5,8,2]
myArray.forEach( () => {}) // arrow function