const path = require('path');

//path absoluto
//O resolve retorna todo o caminho até um arquivo
console.log(path.resolve('teste.txt'));

//Formar path
//O join serve para criar um caminho (path) dinâmico,
//com variáveis e valores fixos
const midFolder = 'relatorios';
const fileName = 'matheus.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath);