// function greeting(name) {
//     console.log('Hello ' + name)
// }

// greeting('John')

// function sum(a, b) {
//     return a + b
// }
// sum(5, 5)

//-----------Projeto cor------------------



function mainColor() {
    let titleH1 = document.getElementById('chengeh1')
    //let currentColor = titleH1.style.color

    //let currentColor = titleH1.style.color = ['green', 'blue', 'yellow', 'black', 'purple', 'orange', 'pink', 'brown', 'gray', 'white'][Math.floor(Math.random() * 10)]

    let colorList = ['green', 'blue', 'yellow', 'black', 'purple', 'orange', 'pink', 'brown', 'gray', 'white']; //Adicione as cores que deseja alternar
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]; //Seleciona uma cor aleatória da lista
    let currentColor = titleH1.style.color = randomColor; //Aplica a cor aleatória ao texto

    for (let i = 0; i < colorList.length; i++) {
        if (currentColor == colorList[i]) {
            document.getElementById("chengeh1").innerHTML = colorList[i]
        }
    }
    
    // explicaçao da linha de código acima
    //código: Math.floor(Math.random() * 10) gera um número aleatório entre 0 e 9, que é usado para acessar um elemento do array de cores
    
    
    // if (currentColor == 'red') {
    //     titleH1.style.color = 'blue'
    // } else {
    //     titleH1.style.color  = 'red'
    // }
}

function mainColor2() {
    let titleH1 = document.getElementById('chengeh2');

    // Gera uma cor hexadecimal aleatória
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); //O toString(16) converte o número em hexadecimal

    // Aplica a cor aleatória ao texto
    titleH1.style.color = randomColor;

    // Define o texto do título como a cor atual
    titleH1.innerHTML = randomColor;
}


function changeColor() {
    mainColor()
    mainColor2()
}