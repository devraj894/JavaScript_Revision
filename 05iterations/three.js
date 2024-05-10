// High Order Array Loops...

// forEach loop........
//NOTE:- It does not return value

const coding = ["js", "py", "cpp", "rb"]

// normal function
coding.forEach( function(val){
    console.log(val)
} )

// arrow function
coding.forEach((val) => {
    console.log(val)
})

// now, in another case funtion and methods are at different place.

function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // here, we've to give reference of function not to execute it

// NOTE:- forEach loop as three parameter access.........

coding.forEach((item, index, arr) =>{
    console.log(item, index, arr)
})

// Objects inside Array by using forEach loop............

const myCoding =  [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
})