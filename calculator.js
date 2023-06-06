//Datos
// array [], objetos {}, strings "", numbers 3, boolean true, function

//sintaxis = function nombreDeLaFuncion(argumento1, argument2...) {codigo}
// tipo de variable
// const var y let

// const nombreVariable = require('ruta relativa del archivo')
const suma = require("./comandos/suma");
const resta = require("./comandos/resta");
const multiplicar = require('./comandos/multiplicar')

console.log(suma(4, 7));
console.log(resta(7, 2));
console.log(multiplicar(3, 4));
// comandos basicos de git
// git add. <= guarda los cambios
// git commit -m "comentarios" <= lanza el commit, con un comentario
// git push <= git push