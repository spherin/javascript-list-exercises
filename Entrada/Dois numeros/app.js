const prompt = require('prompt-sync')();

let numero1 = prompt("digite o primeiro numero: ");
let numero2 = prompt("digite o segundo numero: ");
let soma = parseFloat(numero1) + parseFloat(numero2);


console.log(numero1 + " + " + numero2 + " = " + soma);