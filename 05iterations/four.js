// filter method in array.........

// It is used to filter out something from the array based on codition
//NOTE:- It returns value

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (val) => val>4 ) // it is implicite return

const newNums2 = nums.filter( (val) => {
    return val>4  // here we have to return
})

console.log(newNums2)

// Objects inside Array using filter...............

const books = [
    {title: "Book One", genre: "Fiction", publish: "1981", edition: 2001},
    {title: "Book Two", genre: "Non - Fiction", publish: "1982", edition: 2002},
    {title: "Book Three", genre: "History", publish: "1999", edition: 2006},
    {title: "Book Four", genre: "Non - Fiction", publish: "1985", edition: 2005},
    {title: "Book Five", genre: "Science", publish: "1987", edition: 2007},
]

const userBooks = books.filter((bk) => bk.genre == "Non - Fiction") // books which are Non - Fiction

console.log(userBooks)

const bookPublished = books.filter( (bk) => bk.publish > 1995) // books which are published after 1995

console.log(bookPublished)