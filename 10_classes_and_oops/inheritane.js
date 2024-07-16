class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    pass(){
        console.log(`password is ${this.password}`)
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username);// only username inherit by super keyword
        this.email = email ;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
    addPass(){
        console.log(`password is changed ${this.password}`)
    }

} 

const chai = new Teacher("ankita", "anjkita@gmail.com" , "384eu80989ryu")
chai.addCourse();    // A new course was added by ankita 
chai.logMe(); // username is Ankita
chai.addPass()  // password is changed 384eu80989ryu

const masalaChai = new User("masalaChai")
masalaChai.logMe();             //username is masalachai


//masalaChai.logMe()
//masalaChai.addPass(); // can't access cuse not inherited
//masalaChai.addCourse(); // not inhetited


const bread = new Teacher("anika" , "kuhuhu")
bread.logMe();   // username   is anika     
bread.addPass();    // password changed kuhuhu
bread.addCourse();   // a new course was added by anika



console.log(chai === masalaChai)   // false
console.log(chai instanceof Teacher)  // True
console.log(chai == User)             //true
