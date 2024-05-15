let randomNumber = Math.floor(Math.random() * 100 + 1)

const submitBtn = document.querySelector('#subt')
const userVal = document.querySelector('#guessField')
let userPrevGuesses = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        const guess = parseInt(userVal.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // check input validity
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check input is correct or not
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    // clean values, prevGuess array update, remaining guess update
    userVal.value = ''
    userPrevGuesses.innerHTML += `${guess} `
    numGuess++
    remainingGuesses.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
    // it will pass message and interact with DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // End Game
    userVal.value = '';
    userVal.setAttribute('disabled', '');
    p.classList.add('button'); // now paragraph react like button
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    p.style.cursor = "pointer"
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    // start new game
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e) =>{
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userPrevGuesses.innerHTML = '';
        remainingGuesses.innerHTML = `${11 - numGuess}`;
        userVal.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
