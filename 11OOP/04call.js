// 'call'  and 'this'...............

function setUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){

    //setUsername(username) // when the task of function over then variable inside it automatically deleted 
    setUsername.call(this, username) // here, 'call' is used to hold the reference of function and 'this' is also send to for currenct context because the 'this' of there will also be deleted that's why we pass our 'this'

    this.email = email
    this.password = password
}

const print = new createUser("devraj", "devraj@gmaill.com", 12345);
console.log(print)