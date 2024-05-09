function myfunc(){
    console.log("this is my function")
}

myfunc // this is function refference

myfunc() // this is function excution

function add(num1, num2){ // here inside parenthesis called as Paremeters
    console.log(num1 + num2)
}

add(1,5) // here inside parenthesis called as Arguments

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("devraj"))


function userLogin(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(userLogin())

function userLogin1(username = "Bob"){ // if argument did not give then it will take this string value but if argument given then simply print the original argument value given.
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(userLogin1("alice"))

function calculateCartPrice(...nums){ // it called as Rest/Spread Operator to handle multiple aguments and return in array formate.
    // calculateCartPrice(val1, val2, ...nums) // Now in this case va1, val2 took both starting values and rest stored in array formate.
    return nums
}

console.log(calculateCartPrice(100,200,300))

// Object in Function......

const user = {
    username: "devraj",
    price: 3000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    username: "devraj",
    price: 199
})

// Array in Function........

const myNewArray = [100,200]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,20]))

// Mini Hoisting..........
addOne(2)
const addOne = function(num){ // here addOne is known as expression and we can define functions also in this way...
    // NOTE:- But in this way we can't access first before declaration.
    return num+1
}
