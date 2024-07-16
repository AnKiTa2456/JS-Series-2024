////  ES6

// class User{

//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}durgesh`
//     }

//     changeUserName(){
//         return ` ${this.username.toUpperCase()} `
//     }

//     changeEmailAddress(){
//         return `${this.email} your email address is changed`
//     }
// }

// const ankita = new User("ankita Patel" , "ankita@gmail.com", "3927")
// console.log(ankita.encryptPassword())
// console.log(ankita.changeUserName())
// console.log(ankita.changeEmailAddress())

//behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
        return `${this.password}durgesh`
    }

User.prototype.changeUserName= function(){
        return ` ${this.username.toUpperCase()} `
    }

User.prototype.changeEmailAddress = function(){
        return `${this.email} your email address is changed`
}

const chai = new User("durga" , "tea@gmail.com", "9027")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())
console.log(chai.changeEmailAddress())

