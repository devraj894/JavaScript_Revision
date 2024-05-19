class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static creatId(){ // 'static' will not allow to access this function by object
        return `123`
    }
}

const obj = new User("Chintu")
console.log(obj.creatId())