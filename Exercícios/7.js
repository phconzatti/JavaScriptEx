function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = bx**2 - 4*ax2*c
    if (delta < 0) {
        return "Delta é negativo"
    }
    let r1 = (-bx + Math.sqrt(delta))/2*ax2
    let r2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(r1)
    resultados.push(r2)
    return resultados
}

console.log(bhaskara(1,3,2))
console.log(bhaskara(3,1,2))