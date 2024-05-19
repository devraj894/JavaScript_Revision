// getter and setter in class....

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}chintu` // we accessing or giving password to user this
    }

    set password(value){
        this._password = value // but we are actually stored password in database like this
    }
}

const devraj = new User("devraj@gmail.com", 12345)
console.log(devraj.password)