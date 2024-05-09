// this keyword...............
const user = {
    username: "devraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // this keyword tell about current context
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "alice"
user.welcomeMessage()

console.log(this) // Because of it is node environment here so it will print empty object but in browser it will show us window

// Arrow Functions.....................

const print = () => {
    console.log("this is arrow function")
}

print()

// Implicit return arrow function

const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2) // We can also declare in this way as we'll do it in React
//const addTwo = (num1, num2) => ({username: "aman"}) // But in case of Object return we have to use curly braces

console.log(addTwo(5,5))