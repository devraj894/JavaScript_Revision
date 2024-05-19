const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor) // here, writable is false that's mean can't be change

Math.PI = 6
console.log(Math.PI) // again remail same as 3.14

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")) // here, writable is true that's mean can be change again

// Now, we can chang properties.....

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false // due to false of enumerable in object make it not iterable that means we can't iterate at key name of object chai
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

