let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')


//explicação do codigo abaixo
//cria uma variável checkButton que recebe o elemento com id check-button
//cria uma variável ageInput que recebe o elemento com id age-input
//adiciona um evento de clique ao botão checkButton
//cria uma variável age que recebe o valor do input ageInput
//cria uma variável message que recebe a mensagem de acordo com a condição
//exibe um alerta com a mensagem
//fim do evento de clique
checkButton.addEventListener('click', function () { //adiciona um evento de clique ao botão checkButton
    let age = ageInput.value
    let message = (age >= 18) ? 'You are and adult' : 'You are not an adult'
    alert(message)
    ageInput.value = ''
})