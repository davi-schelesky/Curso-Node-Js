const fs = require('fs');

//O unlink remove o arquivo
fs.unlink('arquivo.txt', function(error){
    if(error){
        console.log(error);
        return
    }
    console.log("Arquivo removido!");
})