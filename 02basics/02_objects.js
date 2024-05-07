// objects can be declare in 2 ways:-
// 1) Literal
//    i) Multiple Instances
// 2) Constructor
//    i) Singleton


// singletone
Object.create // it is the way to create object in singleton

// Object Literal

const mySymbol = Symbol("newKey")

const JsUser = {
    name: "devraj",
    [mySymbol]: "newKey1",  // way to declare Symbol in object
    "full name": "devraj songara",
    age: 21,
    mail: "chintu125@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["full name"])

console.log(JsUser[mySymbol]) // way to access Symbol in object

// how to update values in Object...........
JsUser.mail = "chintu@amazon.com" // mail updated here

//Object.freeze(JsUser) // freez is used to lock our object that nobody can update or change it

JsUser.mail = "chintu@microsoft.com" // Now, it will not update again mail coz it is lock now

console.log(JsUser)


// how functions used in Object.
JsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`) // here this keyword is used to point current scope
}

console.log(JsUser.greeting())