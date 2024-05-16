const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const changeBackground = function(){
    let red = Math.floor(Math.random() * 100 + 1)
    let blue = Math.floor(Math.random() * 100 + 1)
    let green = Math.floor(Math.random() * 100 + 1)

    let randomColor = `rgb(${red}, ${blue}, ${green})`;

    document.body.style.backgroundColor = randomColor;
}

start.addEventListener('click',() =>{
    const stopChanges = setInterval(changeBackground, 2000);

    stop.addEventListener('click', () =>{
        clearInterval(stopChanges);
    })
})
