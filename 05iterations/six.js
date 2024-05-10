// reduce method in array.........

// NOTE:- it return finaly single interger after calculations.
// it has two parameters ie. Accumalator and Current Value.

const arr = [1,2,3]

const res = arr.reduce((acc, curr) => acc+curr, 0) // implicit way
const res1 = arr.reduce((acc, curr) => {
    return acc + curr
},0)

console.log(res)
console.log(res1)

// Objects inside Array by using reduce method.............

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python course",
        price: 199
    },
    {
        itemName: "mobile dev course",
        price: 999
    },
]

const totalPrice = shoppingCart.reduce((acc, curr) => {
    return acc + curr.price
},0)

console.log(totalPrice)