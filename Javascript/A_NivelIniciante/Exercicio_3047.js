var input = require("./readFile.js").input;
var lines = input.split('\n');
var idade_mae = lines.shift();
var idade_filho1 = lines.shift()*1;
var idade_filho2 = lines.shift()*1;
var idade_filho3 = idade_mae - idade_filho1 - idade_filho2;
console.log(idade_filho1>idade_filho2?idade_filho1>idade_filho3?idade_filho1:idade_filho3:idade_filho2>idade_filho3?idade_filho2:idade_filho3);