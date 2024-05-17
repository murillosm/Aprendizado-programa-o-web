// let a = 10;
// let b = 5;

// let resultado = a == b // Operador de igualdade
// console.log(resultado)

// let resultado2 = a != b // Operador de diferença
// console.log(resultado2)

// let resultado3 = a > b // Operador de maior que
// console.log(resultado3)

// let resultado4 = a < b // Operador de menor que
// console.log(resultado4)

// let resultado5 = a >= b // Operador de maior ou igual
// console.log(resultado5)

// let resultado6 = a <= b // Operador de menor ou igual
// console.log(resultado6)

//explicação do operador de igualdade estrita
// operador de igualdade estrita compara o valor e o tipo de dado
// let resultado7 = a === b // Operador de igualdade estrita
// console.log(resultado7)

let idade = prompt('digite a sua idade: ')
let temTitulo = prompt('Você tem título de eleitor? (sim ou não)')
let idadeMinima = 18

if (idade >= idadeMinima && temTitulo === 'sim') {
    console.log('Você pode votar')
} else if (idade >= idadeMinima && temTitulo === 'não') {
    console.log('Você precisa ter título de eleitor para votar.')
} else {
    console.log('Você não tem idade suficiente para votar.')
}