console.log(0.1 + 0.2)

const funcao = function (valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.',',')}`
    console.log(valorEmReais)
}

funcao(0.1 + 0.2)