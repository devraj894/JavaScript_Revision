// NOTE:-

//    function ------>Object --------->NULL

//    string ------->Object --------->NULL

//    arra ------->Object --------->NULL



// Now, our Goal is to make a new method names as trueLength() that will purely return only number of string characters.

// let myName = "devraj     "
// console.log(myName.length)


const myArr = [1,2];

const myObject = {
    username: "aman",
    myFunction: function(){
        console.log(this.username)
    }
}

myObject.myFunction()


// Now i wanna add one more function at the top level of hierarchi of Object Prototype, So that every Objects, Arrays, Strings etc can access it
Object.prototype.myName = function(){
    console.log("Chintu")
}


myObject.myName() // here my created object can access it
myArr.myName() // here my created array can access it


// Prototype Inheritance......................

const user = {
    name: "rahul"
}

const userAge = {
    age: 31
}

Object.setPrototypeOf(user, userAge); // here first argument wil take all the properties of second argument

console.log(user.age)

// Now, let's complete our Goal...........
const myName = "devraj    "
console.log(myName.length) // OUTPUTE :- 10

String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`)
}

myName.trueLength()