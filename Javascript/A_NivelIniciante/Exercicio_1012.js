var input = require("./readFile.js").input;
var lines = input.split('\n');
lines = lines.shift().split(" ");
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);
console.log("TRIANGULO: " + (A * C / 2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * C**2).toFixed(3));
console.log("TRAPEZIO: " +(((A + B) / 2) * C).toFixed(3));
console.log("QUADRADO: " +(B ** 2).toFixed(3));
console.log("RETANGULO: " +(A * B).toFixed(3));