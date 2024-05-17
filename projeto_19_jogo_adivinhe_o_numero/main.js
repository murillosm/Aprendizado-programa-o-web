let randomNumber = Math.floor(Math.random() * 100)
let tries = 0
console.log(randomNumber)



function checkGuess() {
    let guess = document.getElementById('guess').value //pega o valor do input
    let message = document.getElementById('message') //pega o elemento do p do html como id message
    tries++

    if (guess == randomNumber) {
        message.innerHTML = 'congratulations! You guessed the number in ' + tries + '!' //O innerHTML é usado para obter ou alterar o HTML ou XML interno de um elemento.
    }
    else if(guess < randomNumber) {
        message.innerHTML = 'Too low! Try again!' //O innerHTML é usado para obter ou alterar o HTML ou XML interno de um elemento.
    }
    else {
        message.innerHTML = 'Too high! Try again!'
    }
}
