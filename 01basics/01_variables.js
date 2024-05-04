const accountId = 4993
let accountEmail = "chintu125@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"  // it can also be store data without using variable

accountEmail = "mintu125@gmail.com"
accountPass = "112345"
accountCity = "Bengaluru"

let name // if we print then it will show undifined

//accountId = 2  // Not Allowed

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scop
*/

// console.log(accountEmail);
// console.log(accountPass);
// console.log(accountCity);

console.table([accountEmail, accountPass, accountCity]);