let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString()) // easy understeable

console.log(myDate.toLocaleString())

let myCreateDate = new Date(2025, 1, 5) // create our date + month start with 0 index
console.log(myCreateDate.toDateString())

let myCreateDate2 = new Date(2025, 1, 5, 5, 3) // create date along with time
console.log(myCreateDate2.toLocaleString())

let myCreateDate1 = new Date("2025-01-5") // yy-mm--dd
console.log(myCreateDate1.toDateString())

let myTimeStamp = Date.now(); // it calculating miliseconds from the founder designed javascript until now...
console.log(myTimeStamp)
console.log(myCreateDate1.getTime()) // it calcuating miliseconds from we declared to until now...

let newDate = new Date();
console.log(newDate.getMonth()) // more methods available i.e. to find perticular month

newDate.toLocaleString('default', { // here we can customize it by ourself
    weekday: "long",
})