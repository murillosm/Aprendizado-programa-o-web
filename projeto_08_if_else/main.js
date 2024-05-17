//Laço de repetição
//let age = 20 //idade

// if (age >= 18) {
//     console.log("Maior de idade")
// } else {
//     console.log("Menor de idade")
// }

let grade = prompt("Digite a nota do aluno: ")

if (grade > 100) {
    alert("Nota inválida")
}
else if (grade >= 90) {
    alert('aluno nota A')
}
else if (grade >= 80) {
    alert('aluno nota B')
}
else if (grade >= 70) {
    alert('aluno nota C')
}
else if (grade >= 60) {
    alert('aluno nota D')
}
else {
    alert('aluno nota F')
}
