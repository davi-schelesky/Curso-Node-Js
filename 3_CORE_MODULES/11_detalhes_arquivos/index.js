const fs = require('fs');

// stat mostra diversas informações sobre o arquivo desejado
fs.stat('novoarquivo.txt', (error, stats) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);
});