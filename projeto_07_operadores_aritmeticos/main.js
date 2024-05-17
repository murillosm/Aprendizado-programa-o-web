// operadores aritméticos

//operadores numericos
//let a = 10; //operador inteiro
//let b = 5; //operador inteiro
//let c = 2.5; //operador float

//let soma = a + b;
//console.log("Soma: " + soma);

//let subtracao = a - b;
//console.log("Subtração: " + subtracao);

let celsius = 0
let fahrenheit = 0

celsius = parseFloat(prompt("Digite a temperatura em Celsius: "))
fahrenheit = celsius * 1.8 + 32

alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2)) //toFixed(2) para limitar a quantidade de casas decimais