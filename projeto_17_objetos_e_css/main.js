// objetos são coleções de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

function changeBackgroundColor() {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'white', 'gray']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    
    document.body.style.backgroundColor = randomColor
}