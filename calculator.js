//Datos
// array [], objetos {}, strings "", numbers 3, boolean true, function

//sintaxis = function nombreDeLaFuncion(argumento1, argument2...) {codigo}
// tipo de variable
// const var y let

// const nombreVariable = require('ruta relativa del archivo')
const suma = require("./comandos/suma");
const resta = require("./comandos/resta");
const multiplicar = require('./comandos/multiplicar')

/* console.log(suma(4, 7));
console.log(resta(7, 2));
console.log(multiplicar(3, 4)); */
// comandos basicos de git
// git add . <= guarda los cambios
// git commit -m "comentarios" <= lanza el commit, con un comentario
// git push <= git push
// git pull <= trae los cambios
// git pull origin main <= trae los cambios de origin
// git checkout nombreRama <= cambia a la rama que apunto

console.log(process.argv)

/* if(process.argv[2] === "suma"){
    console.log(suma(process.argv[3], process.argv[4]))
} else if(process.argv[2] === "resta"){
    console.log(resta((process.argv[3], process.argv[4])))
} */

switch(process.argv[2]){
    case "suma":
        console.log(suma(process.argv[3], process.argv[4]))
        break;
    case "resta":
        console.log(resta(process.argv[3], process.argv[4]));
        break;
    case "multiplicacion":
        console.log(multiplicar((process.argv[3], process.argv[4])));
        break;
}

// version criolla
// git add . <= Le avisas a git que tenes todos estos cambios
// git commit -m "" <= "Empaquetas" los cambios, el comentario es desdcriptivo
// git push <= lo subis
