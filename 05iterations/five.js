// map method in array............

// It is same as forEach because it will iterate each and every elements of array.

//NOTE:- But it returns value same as filter

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.map((val) => val + 10)

console.log(newNums)

// Chaining Concept.........................

const myNums = [1,2,3,4,5,6,7,8,9,10]

const resNums = myNums.map((num) => num*10).map((num) => num+1).filter((num) => num>40) // here second map takes fully updated array from first map and so on..after that last updated value stored in a variable.

console.log(resNums)