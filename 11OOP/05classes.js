class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const obj = new User("devraj","devraj@gmail.com", 12345);

console.log(obj.encryptPassword())
