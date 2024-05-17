// for é um loop que executa um bloco de código um número específico de vezes
// for(let i = 0; i < 10; i++) {
//     console.log(i + '. Hi')
// }

let colorList = []

for (let i = 0; i <= 3; i++) {
    let userColor = prompt('Digite uma cor: ' + i +':')
    colorList.push(userColor) //adiciona o valor do usuário ao array
}
//alert('sua lista de cores ficou assim: ' + colorList)
document.getElementById('listacores').innerHTML = colorList.join(', ') //join() para separar os valores do array por vírgula