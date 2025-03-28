const triangulo = function (a,b,c){
    if (a == b && b == c){
        console.log("Triângulo equilátero")
    } else if (a != b && b != c){
        console.log('Triângulo escaleno')
    } else {
        console.log('Triângulo isósceles')
    }
}

triangulo(1,1,1)
triangulo(1,2,3)
triangulo(3,3,4)