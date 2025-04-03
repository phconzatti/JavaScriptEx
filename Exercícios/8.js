function basquete (pontosPorJogo) {
    let lista = pontosPorJogo.split(' ')
    //console.log(lista[8])
    let maior = lista[0]
    let superou = 0
    let pior = 99
    let piorJogo = 0
    for (let i = 0; i < lista.length; i++){
        if (parseInt(lista[i]) > parseInt(maior)){
            maior = lista[i]
            //console.log(maior)
            superou++
        }
        if (parseInt(lista[i]) < parseInt(pior)){
            pior = lista[i]
            piorJogo = i +1
        }
    }
    let retorno = []
    retorno.push(superou)
    retorno.push(piorJogo)
    console.log(retorno)
}

basquete('10 20 20 8 25 3 0 30 1')