//Sincrono - executa uma coisa apenas depois
//da anterior ter sido totalmente executada

const fs = require('fs');

console.log("Início");

fs.writeFileSync("arquivo.txt", "oi");

console.log("Fim");