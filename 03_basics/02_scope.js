var a = 30;
let b = 34;
const c = 9;
// console.log(a)
// console.log(b)
// console.log(c)

if (true) {
    let a = 10;
    const b = 34;

    function myScope(a) {
    }
    // console.log(`kaam ka ${b} hai`)
}
//console.log(a)

function one(){
    const username = "Ankita"

    function Two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    Two();
}
one()

if(true){
    const username = "Ankita"
    if(username === "Ankita"){
        const website  = " Youtube";
        console.log(username + website);      //Ankita Youtube
    }
    //console.log(website);  //scope 
}
//console.log(username)  //scope

//++++++++++++++++++++++++ Interesting  ++++++++++++++++++++++++++++

//techniques to define function 1:-
console.log(addOne(4))   //5 because of hoisting 
function addOne(num){
    return num +1
}


// 2:- in variable 
addTwo(4)  //Error //Cannot access 'addTwo' before initialisation
const addTwo = function(num){
    return num + 2
}
