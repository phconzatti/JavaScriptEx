const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3')); //Busca o index do dígito 3

console.log(escola.substring(1)); //Do 1 até o final
console.log(escola.substring(0, 3)); //Do 0 até o 3

console.log("Escola".concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));