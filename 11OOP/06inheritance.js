class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // this will automatically set username by using another class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course added by ${this.username}`)
    }
}

const obj = new Teacher("anil", "anil@gmail.com", 12345);
obj.addCourse()
obj.logMe()

const obj1 = new User("aman")
obj1.logMe()