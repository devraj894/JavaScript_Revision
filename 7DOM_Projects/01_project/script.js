const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e) // it will show the perticular btn details
        console.log(e.target) // it will show the elements of perticular btn
        if(e.target.id === 'grey'){
            // body.style.backgroundColor = 'red'
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
})