let dobro = function (a) {
    return 2* a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a;

// Função arrow garante que o this seja constante

function Pessoa () {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa;