// Assincrono - executa 2 ou mais coisas
//simultaneamente

const fs = require('fs');

console.log("Início");

fs.writeFile("arquivoasync.txt", "Oi", function(error){
    setTimeout(function () {
        console.log("Arquivo criado");
    }, 1000);
});

console.log("Fim");