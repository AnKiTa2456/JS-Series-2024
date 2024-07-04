/* //singleton object 
const tinderUser = new Object()


//non singleton object
const tinderUser1 = {}
//  console.log(tinderUser)
//  console.log(tinderUser1)

tinderUser.id = "123fg"
tinderUser.name = "ankita"
tinderUser.isLoggedIn = false
console.log(tinderUser)

var regularUser = {
    email: "sfjsk@gmail.com",
    fullName: {
        firstName: "anny",
        lastName: "kuhu"
    },
    age: 23
}
//console.log(regularUser.fullName.lastName); //{ id: '123fg', name: 'ankita', isLoggedIn: false } kuhu


const obj1 = { 1: "s", 2: "g" }
const obj2 = { 3: "s", 4: "g" }
const obj3 = { 5: "s", 6: "g" }

//console.log(obj1, obj3)  //{ '1': 's', '2': 'g' } { '5': 's', '6': 'g' }
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)

const obj5 = {...obj1,...obj2}
console.log(obj5) // { id: '123fg', name: 'ankita', isLoggedIn: false }
//                   { '1': 's', '2': 'g', '3': 's', '4': 'g', '5': 's', '6': 'g' }
//                   { '1': 's', '2': 'g', '3': 's', '4': 'g' }

const arraysObjects = [ 
    {
        id : "kukum34",
        age: 23
    },
    {
        id: "kukum34",
        age: 23
    },
    {
        id: "kukum34",
        age: 23
    }
]
arraysObjects[1].age;
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
/* 
[ 'id', 'name', 'isLoggedIn' ]
[ '123fg', 'ankita', false ]
[ [ 'id', '123fg' ], [ 'name', 'ankita' ], [ 'isLoggedIn', false ] ]    

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLogged')); //false */


//Destructuring of Object
const course = {
    courseName: "javascript",
    price : 999,
    courseInstructor: "Ankita"
}
//course.courseInstructor
//**************  OSM  ***************
const {courseInstructor}= course;
const {courseInstructor : Instructor} = course
console.log(Instructor) //Ankita

// const navbar = ({company}) or (props.company)
// {
    
// }
// navbar(company = "ankita")


[
    {},
    {},
    {}
    
]
