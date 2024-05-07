const myArr = [0,1,2,3,4,5, true, "hitesh"]

console.log(myArr[7])

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[1])

// Array methods

myArr.push(6)
myArr.pop();

myArr.unshift(6)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(5))
console.log(myArr.indexOf(1))

const newArr = myArr.join(); // newArr store all the elements but in string formate
console.log(myArr)
console.log(newArr)

// slice, splice

console.log("Slice")
const arr1 = [0,1,2,3,4,5];
console.log(arr1);

const res1 = arr1.slice(0,4); // does not effect original array
console.log(res1)
console.log(arr1)

console.log("splice")
console.log(arr1)

const res2 = arr1.splice(0,4); // does effect original array
console.log(res2)
console.log(arr1)

// concate, spread operator [Both are used to combine two arrays]
const persons = ["aman", "mohan", "anuj"]
const places = ["Raipur", "jaipur"]

const newArr1 = persons.concat(places);
console.log(newArr1)

const newArr2 = [...persons, ...places]
console.log(newArr2)

// flat
const array = [1,2,3,4,[7,3,2],[9,0],[1,2,3,4,5,[5,3,2,2],10]] // here array inside array
const newArray = array.flat(Infinity) // it can fix all elements like normal array until max depth
console.log(newArray)

// check array and make array
console.log(Array.isArray("Chintu")) // used to check that it is array or not
console.log(Array.from("chintu")) // used to convert it to array

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) // it is used to make an array of set of elements