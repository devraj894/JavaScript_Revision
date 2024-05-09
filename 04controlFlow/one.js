// if, else.................

const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("User has already logged in")
}

if(2 == "2"){ // double equals only check value
    console.log("excuted")
}

if(2 === "2"){ // triple equals to is used for strict checking of variable as well as datatype
    console.log("excuted")
}

const balance = 5000
if(balance > 1000) console.log("yup") // it is known as emplicite scope


//const userEmail = "" // if this is empty string then consider false
const userEmail = [] // if this is empty array then consider true

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// check array is empty or not..........................

const myArry = []
if(myArry.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array is not empty")
}

// check object is emtpy or not..........................

const myObj = {}
if(Object.keys(myObj).length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}

// Nullish Coalescing Operator (??) : null undefined...............................
// NOTE:- Basically, when we access data from database then sometimes gives two values or null value.
//        That's why to handle this case we use ?? operator to store value
//        It will always store first value or if first value is null then it will store second value    
//        Only used to handle null or undefined values

let val1;
//vale1 = 5 ?? 10 
//vale1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)

let val2;
val2 = null ?? 10 ?? 20
console.log(val2)

// Terniary Operator......................

const price = 100
price < 80 ? console.log("Less than 80") : console.log("Greater than 80")