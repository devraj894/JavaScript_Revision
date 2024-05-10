// for of loop..................
// It work without index coz it taks direct values
//NOTE:- for of loop does not work on Objects but work on map.

const arr = [1,2,3,4,5]

for (const val of arr) {
    console.log(val)
}

// Maps.................
// it is one of the datatype which stores key and values and provide multiple methods to access them
// it does not hold duplcate values
// Also holds values in same order as you stored.

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

console.log(map); // it prints every data in different different arrays formate.

for(const [key, value] of map){ // good way to print map data by using destructuring
    console.log(key, ':-', value) 
}

// for in loop.............
// it work on index so by using index we can access values
// NOTE:- for in loop work on Objects but does not work on maps.

const myObject = {
    js: "javascrip",
    cpp: "c++"
}

for (const key in myObject) {
    console.log(`{key} shortcut is ${myObject[key]}`)
}

const programming = ["js", "cpp", "java", "py"]

for (const key in programming) {
    console.log(programming[key])
}