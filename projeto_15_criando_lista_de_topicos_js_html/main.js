let fruit = ['banana', 'maçã', 'pêra', 'uva', 'melancia']
let numberList = document.getElementById('numberList')

for (i = 0; i < 5; i++) {
    let listItem = document.createElement('li')
    //let item = prompt('Digite o nome de uma fruta:')
    listItem.appendChild(document.createTextNode(fruit[i]))
    //listItem.textContent = item
    numberList.appendChild(listItem)
}
//explicação  do código acima
//cria uma variável numberList que recebe o elemento com id numberList
//cria um loop que vai de 1 a 10
//cria um elemento li e atribui a variável listItem
//adiciona um texto ao elemento li
//adiciona o elemento li ao elemento numberList
//fim do loop

