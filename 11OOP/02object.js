// As we know that everything in javascript is Object.......
// NOTE:- By default behaviour of javascript is Prototype inheritance

function multiplyBy5(num){
    return num*5
}

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

// Now, we will add our properties in prototypes of something...
// For Example:- We will add more prototype functions in Function.

function createUser(username, score){ // it is normal function
    this.username = username; // here, we add data in username
    this.score = score // here, we add data in score
}

createUser.prototype.increament = function(){ // here, we add one more function in prototype of Normal Function i.e. increment()
    this.score++; // And increament score by 1
}

createUser.prototype.printMe = function(){ // here, we add one more function is prototpe of Normal Function i.e. printMe()
    console.log(`price is ${this.score}`) // And we simply print message
}

// const chai = createUser("chai", 25) // here, we pass function in chai variable but NOTE that our external added function will not pass in chai variable
const chai = new createUser("chai", 25) // here, by using 'new' keyword our it also added external function in chai variable
const tea = createUser("tea", 250)

chai.printMe() // here, we access printMe() prototopy method from chai variable function


//*********************************SUMMARY****************************************

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
