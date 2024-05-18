function user(username, loginCount, isLoggedIn){
    this.username = username;  // 'this' keyword referes to the current context
    this.loginCount = loginCount; // 'this' keyword referes to the current context
    this.isLoggedIn = isLoggedIn; // 'this' keyword referes to the current context

    return this; // it is by default but for better understandig of code, we prefer to write it
}

const userOne = new user("anuj", 5, true); // 'new' keyword also known as construction function and it makes always new instance of function or anything to avoid data-overwrite  
const userTwo = new user("ajay", 7, false); // 'new' keyword also known as construction function and it makes always new instance of function or anything to avoid data-overwrite

console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor); // it is reference of itself

console.log(userOne instanceof user) // it checks that is it instace of user object or not