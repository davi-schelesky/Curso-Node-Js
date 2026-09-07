import chalk from 'chalk';
import inquirer from 'inquirer';

try{
    inquirer.prompt([{
        name: "p1",
        message: "Insira seu nome: "
    }, {
        name: 'p2',
        message: "Insira sua idade: "
    }]).then((answers) => {
        console.log(chalk.bgYellow.black(`Nome: ${answers.p1}, idade: ${answers.p2}`));
    })
} catch(error){
    console.log(`ERRO: ${error}`);
}