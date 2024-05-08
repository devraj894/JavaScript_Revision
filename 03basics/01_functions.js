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

