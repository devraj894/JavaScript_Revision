// method 1 to declare string.

let name = "ajay"
console.log(name);
console.log(name.length);
console.log(name[0]);

// method 2 to declare string.

let name2 = new String("aman")
console.log(name2);
console.log(name2[0]);

console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt(0));
console.log(name2.indexOf('n'));

let gameName = new String("bgmi")

console.log(gameName.substring(0,2))
console.log(gameName.slice(-3,2))

let newString = "  ajay"

console.log(newString)
console.log(newString.trim())

const url = "www.google.com%3devraj"
console.log(url.replace('%3', '-'));

console.log(url.includes('google'))

let newName = "ajay-arun-kiran"
console.log(newName.split('-'))

