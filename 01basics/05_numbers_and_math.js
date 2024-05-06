const score = 33

console.log(score);

const balance = new Number(399)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(4)) // it depends on how many values should we consider after .(dot)

const otherNumber = 34.864

console.log(otherNumber.toPrecision(3)) // used to round of the value depends on us that how many number after we want

const hundereds = 100000
console.log(hundereds.toLocaleString()) // it add comma's according UA by default
console.log(hundereds.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE) // used to store most Minimum value
console.log(Number.MAX_VALUE) // used to strore most Maximum value

// ****************************MATH*************************************************

console.log(Math);
console.log(Math.abs(-3))

console.log(Math.round(4.63)) // used to round of after .(dot)
console.log(Math.ceil(4.63)) // used to increase value if it is just greater than current value
console.log(Math.floor(4.63)) // just ignore .(dot) values
console.log(Math.min(4,3,6,2)) // used to find min value
console.log(Math.max(4,3,6,2)) // used to find max value

console.log(Math.random()) // always generate random values between includig 0 and 1
console.log(Math.random()*10) // always generate random values between including 0 and 9
console.log((Math.random()*10) + 1) // always generate random values between 1 and 9

// generate values between min and max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)