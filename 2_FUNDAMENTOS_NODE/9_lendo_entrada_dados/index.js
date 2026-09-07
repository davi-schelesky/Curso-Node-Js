// Maneira de captar respostas do usuário
//com um core module do node

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if (language === 'Python'){
        console.log("GAY");
    } else {
        console.log(`A minha linguagem preferida é: ${language}`);
    }
    readline.close()
});