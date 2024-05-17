// Promises have two part
// 1) Create
// 2) Consume // mostly we will consume

// Basic Way to create Promise.....
const promiseOne = new Promise( (resolve, reject) => {
    // Do an asyn task
    // DB calls, cryptography, network

    setTimeout(()=>{
        console.log("chintu")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed")
})

// Modern Way to create Promise.....
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("devraj")
        resolve()
    },1000)
}).then(() => {
    console.log("Promise 2 resolved")
})

// here, how resolve consume data.....
const promiseTwo = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve({username: "chintu", email: "chintu136@gmail.com"}) // mostly it passes Object but may somtimes array for big projects
    },1000)
})

promiseTwo.then((userDetail) => {
    console.log(userDetail)
})


// here, how 'resolve' usses chaining concept and 'catch' and 'finally'.....

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
    
        if (!error) {
            resolve({ username: "devraj", password: "12345" });
        } else {
            reject(`ERROR: Something went wrong`); 
        }
    }, 2000);
});

promiseThree
    .then((user) => {
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("The promise is either resolved or rejected")) // it will alway run default


// asyn and await in promises.......
const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = false;
        
        if (!error) {
            resolve({ username: "javascript", password: "12345" });
        } else {
            reject(`ERROR: JS went wrong`); 
        }
    }, 2000);
})

async function data(){ // here 'async await' is used to wait until the promise resolve or reject
    try{ // here 'try catch' is used to handle both the cases of resolve and reject
        const response = await promiseFour
        console.log(response)
    }
    catch (err){
        console.log(err)
    }
}

data()

// handle api by using 'try catch'........
async function myFunction(){
    try{
        const response = await fetch('https://api.github.com/users/devraj894') // here, await is used because it will take some time to fetch api from network
        const data = await response.json() // here, await again used because it will again take time to convert string to object
        console.log(data);
    }
    catch(err){
        console.log("Error : ", err)
    }
}

myFunction()

// handle api by using promises.........
fetch('https://api.github.com/users/devraj894')
.then((resolve) => {
    return resolve.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) => {
    console.log(error)
})