var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); // divide a entrada em linhas individuais e armazena em um array

let A = parseInt(lines.shift()); // remove e armazena o primeiro elemento do array
let B = parseInt(lines.shift()); // remove e armazena o segundo elemento do array
let X = A + B;

console.log('X = ' + X);