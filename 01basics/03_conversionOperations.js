let score ="44abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber)

// "22" => 33
// "23abc" => NaN
// true => 1

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "chintu" => true

let someNumber = "3"
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *************************OPERATIONS***************************

let str1 = "mohan"
let str2 = " aman"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 3); // 13
console.log("1" + 3 + 3); // 133
console.log(1 + 3 + "3"); // 43