function arredondar (nota) {
    if (nota % 5 >= 3) {
        return nota + (5 - (nota % 5 ))
    } else {
        return nota
    }
}

function classificacao (nota) {
    if(arredondar(nota) < 40){
        return "Aluno reprovado com nota " + nota
    } else {
        return "Aluno aprovado com nota " + arredondar(nota)
    }
}

console.log(classificacao(83))
console.log(classificacao(100))
console.log(classificacao(99))
console.log(classificacao(4))