const myClock = document.querySelector('#clock')

// here we've to update time for every seconds.

// setInterval() used to control events and take interval to update as we want
// toLocaleTimeString() // showing current time

setInterval(()=>{
    let date = new Date()
    myClock.innerHTML = date.toLocaleTimeString()
},1000)