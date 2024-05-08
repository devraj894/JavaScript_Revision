// objects can be declare in 2 ways:-
// 1) Literal
//    i) Multiple Instances
// 2) Constructor
//    i) Singleton

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


// singletone
Object.create // it is the way to create object in singleton
const tinderUser = new Object(); // it is also singleton object

tinderUser.id = "0156abc"
tinderUser.name = "Alice"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = { // objects inside object concept
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "chintu",
            lastname: "songara"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign(obj1, obj2) // it can combine all object into single object but try below is always good choice
const obj4 = Object.assign({}, obj2, obj1) // prefer sytax to combine all objects in single object
const obj5 = {...obj1, ...obj2}; // here it is mostly used syntax to combine all objects in single object
console.log(obj3)
console.log(obj4)
console.log(obj5)

// Objects inside Array which is used to handle values which comes from database......

const myArray = [
    {
        name: "devraj",
        id: 2835
    },
    {
        name: "devraj",
        id: 2835
    },
    {
        name: "chintu",
        id: 5555
    },
    {
        name: "devraj",
        id: 2835
    },
]

console.log(myArray[2].id)


console.log(Object.keys(tinderUser)) // it print all the keys of tinder object but in Array format
console.log(Object.values(tinderUser)) // it print all the values of tinder object but in Array format
console.log(Object.entries(tinderUser)) // it makes different diferent arrays of key and values and keep inside single array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // it checks inside object that is has key exist or not


// Object Destructuring............................................

const course = {
    name: "js in hindi",
    price: 500,
    courseInstructor: "Aman"
}

const {courseInstructor} = course // now we don't have to access courseInstructor from course object again again, we simply write courseInstructor to access it from course object..
const {courseInstructor: ci} = course // here we don't have to use this big name again and again, we simpy call ci to access it..

console.log(courseInstructor)
console.log(courseInstructor)

console.log(ci)

// JSON API...........................................................
// Basic Into for API's

// API's has two structure to store data

// {
//     "name": "devraj",
//     "age": 21,
//     "location": "sehore"
// }

// [
//     {},
//     {},
//     {}
// ]

// NOTE:- API Format is a website to understand API's data simply......................