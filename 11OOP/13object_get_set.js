// getter and setter on object....

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // Object.creat is known as factory function like 'new' is known as constructor function
console.log(tea.email);
