let valorConta = 0
let gorjeta = 0
let valorTotal = 0

valorConta = parseFloat(prompt('Digite o valor da conta: '))
gorjeta = parseFloat(prompt('Digite o valor da gorjeta: (decimal)%: '))

//valorTotal = valorConta + ((valorConta * gorjeta) / 100)
valorTotal += valorConta
valorTotal += ((valorConta * gorjeta) / 100)

alert(`O valor total da conta é: R$ ${valorTotal.toFixed(2)}`)