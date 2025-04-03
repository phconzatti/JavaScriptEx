const funcao1 = function (capitalInicial, taxaJuros, tempoAplicacao) {
    resultado = capitalInicial
    resultado += capitalInicial * taxaJuros * tempoAplicacao
    console.log(`R$ ${resultado.toFixed(2).replace('.',',')}`)
}

const funcao2 = function (capitalInicial, taxaJuros, tempoAplicacao) {
    resultado = capitalInicial
    resultado = capitalInicial*(1 + taxaJuros) ** tempoAplicacao
    console.log(`R$ ${resultado.toFixed(2).replace('.',',')}`)
}

funcao1 (500, 0.25, 10)

funcao2 (500, 0.25, 10)