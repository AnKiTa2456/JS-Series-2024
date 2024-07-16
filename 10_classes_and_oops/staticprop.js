class User{
    constructor(username){
         this.username = username;
    }

    logMe(){
        console.log(`Username : ${ this.username}`);
    }

    static createId(){    //static importance
        return `12433`;
    }

}
const anku = new User("Ankita")
//console.log(anku.createId())

class Teacher extends User {
    constructor( username, email){
        super(username);
        this.email = email;
    }

    
} 
const iphone =new Teacher("Iphone", "i@gmail.com")
iphone.logMe()
iphone.createId()